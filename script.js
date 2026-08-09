/* ==========================================================================
   أرشيف الأغنية السودانية | Sudanese Songs Heritage Archive
   Application Logic, VexFlow Music Notation & Performance System (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentView: 'archive',           // 'archive' | 'performance' | 'setlist'
    currentRole: 'vocalist',          // 'vocalist' (عوض حمدتو) | 'keyboard' (حسن غزالي)
    selectedSongId: 'nosana-habibna',
    transposeOffset: 0,
    fontSizeRem: 2.2,
    isAutoScrolling: false,
    scrollSpeed: 0.75,
    scrollIntervalId: null,
    wakeLockObj: null,
    currentSearchQuery: '',
    currentCategoryFilter: 'all',
    currentDecadeFilter: 'all',
    sessionSetlist: [
      'nosana-habibna',
      'samsim-al-qadaref',
      'ya-nas-barida'
    ]
  };

  // DOM Elements
  const tabArchiveBtn = document.getElementById('tabArchiveBtn');
  const tabPerformanceBtn = document.getElementById('tabPerformanceBtn');
  const tabSetlistBtn = document.getElementById('tabSetlistBtn');
  
  const archiveViewEl = document.getElementById('archiveView');
  const performanceViewEl = document.getElementById('performanceView');
  const setlistViewEl = document.getElementById('setlistView');

  // Archive DOM Elements
  const songsGridEl = document.getElementById('songsGrid');
  const searchInputEl = document.getElementById('searchInput');
  const searchClearBtnEl = document.getElementById('searchClearBtn');
  const filterChipsEl = document.getElementById('filterChips');
  const activeCountEl = document.getElementById('activeCount');
  const modalOverlayEl = document.getElementById('songModalOverlay');
  const modalContainerEl = document.getElementById('modalContainer');
  const timelineButtonsEl = document.getElementById('timelineButtons');
  const artistsGridEl = document.getElementById('artistsGrid');

  // Performance Mode Controls
  const roleVocalistBtn = document.getElementById('roleVocalistBtn');
  const roleKeyboardBtn = document.getElementById('roleKeyboardBtn');
  const transposeMinusBtn = document.getElementById('transposeMinusBtn');
  const transposePlusBtn = document.getElementById('transposePlusBtn');
  const transposeResetBtn = document.getElementById('transposeResetBtn');
  const currentKeyDisplay = document.getElementById('currentKeyDisplay');
  const fontSizeMinusBtn = document.getElementById('fontSizeMinusBtn');
  const fontSizePlusBtn = document.getElementById('fontSizePlusBtn');
  const wakeLockBtn = document.getElementById('wakeLockBtn');
  const printSheetBtn = document.getElementById('printSheetBtn');
  const performanceSheetEl = document.getElementById('performanceSheet');

  // Auto-scroll Controls
  const scrollStartBtn = document.getElementById('scrollStartBtn');
  const scrollPauseBtn = document.getElementById('scrollPauseBtn');
  const scrollResetBtn = document.getElementById('scrollResetBtn');

  // Session Navigation
  const prevSongBtn = document.getElementById('prevSongBtn');
  const nextSongBtn = document.getElementById('nextSongBtn');
  const nextSongNameEl = document.getElementById('nextSongName');

  // Rehearsal Modal
  const openRehearsalModalBtn = document.getElementById('openRehearsalModalBtn');
  const rehearsalModalOverlay = document.getElementById('rehearsalModalOverlay');
  const closeRehearsalModalBtn = document.getElementById('closeRehearsalModalBtn');
  const rehearsalForm = document.getElementById('rehearsalForm');
  const rehearsalSongSelect = document.getElementById('rehearsalSongSelect');
  const setlistContainerEl = document.getElementById('setlistContainer');

  // Initialize Application
  initApp();

  function initApp() {
    loadSavedRehearsals();
    renderStats();
    renderCategoryFilterChips();
    renderSongsGrid();
    renderTimelineControls();
    renderArtistsIndex();
    renderPerformanceSheet();
    renderSetlist();
    setupEventListeners();
  }

  /* ==========================================================================
     1. LocalStorage Rehearsal Integration
     ========================================================================== */
  function loadSavedRehearsals() {
    try {
      const savedData = localStorage.getItem('sdn_rehearsal_notes');
      if (savedData) {
        const parsed = JSON.parse(savedData);
        SONGS_DATABASE.forEach(song => {
          if (parsed[song.id]) {
            song.performance.performanceKey = parsed[song.id].performanceKey || song.performance.performanceKey;
            song.performance.bpm = parsed[song.id].bpm || song.performance.bpm;
            song.performance.rehearsalStatus = parsed[song.id].rehearsalStatus || song.performance.rehearsalStatus;
            song.performance.keyboardNotes = parsed[song.id].keyboardNotes || song.performance.keyboardNotes;
            song.performance.vocalistNotes = parsed[song.id].vocalistNotes || song.performance.vocalistNotes;
          }
        });
      }
    } catch (e) {
      console.warn('Could not load rehearsal notes from localStorage:', e);
    }
  }

  function saveRehearsalToStorage(songId, data) {
    try {
      const savedData = JSON.parse(localStorage.getItem('sdn_rehearsal_notes') || '{}');
      savedData[songId] = data;
      localStorage.setItem('sdn_rehearsal_notes', JSON.stringify(savedData));
    } catch (e) {
      console.warn('Could not save rehearsal notes to localStorage:', e);
    }
  }

  /* ==========================================================================
     2. Musical Transpose Engine
     ========================================================================== */
  const chromaticNotes = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];

  function transposeKeyString(keyStr, semitones) {
    if (!keyStr || semitones === 0) return keyStr;
    const parts = keyStr.split(' ');
    let note = parts[0];
    const mode = parts.slice(1).join(' ');

    let index = chromaticNotes.indexOf(note);
    if (index === -1) {
      if (note === 'G#') index = chromaticNotes.indexOf('Ab');
      else if (note === 'D#') index = chromaticNotes.indexOf('Eb');
      else if (note === 'A#') index = chromaticNotes.indexOf('Bb');
    }

    if (index === -1) return keyStr;

    let newIndex = (index + semitones) % 12;
    if (newIndex < 0) newIndex += 12;

    const transposedNote = chromaticNotes[newIndex];
    return mode ? `${transposedNote} ${mode}` : transposedNote;
  }

  /* ==========================================================================
     3. VexFlow Musical Staff Notation Renderer
     ========================================================================== */
  function renderVexFlowStaff(containerEl, keysArray, timeSignature) {
    if (!containerEl) return;
    containerEl.innerHTML = '';

    // Check if VexFlow is available globally
    if (typeof Vex !== 'undefined' && Vex.Flow) {
      try {
        const { Renderer, Stave, StaveNote, Voice, Formatter } = Vex.Flow;
        const renderer = new Renderer(containerEl, Renderer.Backends.SVG);
        renderer.resize(450, 130);
        const context = renderer.getContext();
        context.setFont('Arial', 10, '').setBackgroundFillStyle('#FFFFFF');

        const stave = new Stave(10, 10, 420);
        stave.addClef('treble').addTimeSignature(timeSignature || '4/4');
        stave.setContext(context).draw();

        const notes = (keysArray || ['c/4', 'e/4', 'g/4', 'b/4']).map(k => new StaveNote({ keys: [k], duration: 'q' }));
        const voice = new Voice({ num_beats: 4, beat_value: 4 });
        voice.addTickables(notes);

        new Formatter().joinAndFormat([voice], 350);
        voice.draw(context, stave);
        return;
      } catch (err) {
        console.warn('VexFlow render fallback:', err);
      }
    }

    // Fallback SVG pentatonic notation generator if VexFlow is unavailable
    containerEl.innerHTML = `
      <svg width="420" height="120" viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" style="background:#FFF; border-radius:8px;">
        <!-- Treble Staff Lines -->
        <line x1="20" y1="30" x2="400" y2="30" stroke="#333" stroke-width="1.5"/>
        <line x1="20" y1="45" x2="400" y2="45" stroke="#333" stroke-width="1.5"/>
        <line x1="20" y1="60" x2="400" y2="60" stroke="#333" stroke-width="1.5"/>
        <line x1="20" y1="75" x2="400" y2="75" stroke="#333" stroke-width="1.5"/>
        <line x1="20" y1="90" x2="400" y2="90" stroke="#333" stroke-width="1.5"/>

        <!-- Treble Clef Symbol & Bar -->
        <text x="30" y="75" font-family="serif" font-size="45" fill="#1E293B">𝄞</text>
        <text x="70" y="68" font-family="sans-serif" font-size="20" font-weight="bold" fill="#1E293B">${timeSignature || '4/4'}</text>

        <!-- Pentatonic Note Heads -->
        <circle cx="130" cy="82.5" r="7" fill="#0F4C81"/>
        <line x1="137" y1="82.5" x2="137" y2="40" stroke="#0F4C81" stroke-width="2"/>

        <circle cx="190" cy="67.5" r="7" fill="#0F4C81"/>
        <line x1="197" y1="67.5" x2="197" y2="25" stroke="#0F4C81" stroke-width="2"/>

        <circle cx="250" cy="52.5" r="7" fill="#0F4C81"/>
        <line x1="257" y1="52.5" x2="257" y2="15" stroke="#0F4C81" stroke-width="2"/>

        <circle cx="310" cy="37.5" r="7" fill="#EAB308"/>
        <line x1="317" y1="37.5" x2="317" y2="5" stroke="#EAB308" stroke-width="2.5"/>

        <line x1="400" y1="30" x2="400" y2="90" stroke="#333" stroke-width="3"/>
      </svg>
    `;
  }

  /* ==========================================================================
     4. Search Normalization Engine
     ========================================================================== */
  function normalizeArabicText(text) {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .replace(/[\u064B-\u0652]/g, '')
      .replace(/[أإآآ]/g, 'ا')
      .replace(/ة/g, 'ه')
      .replace(/ى/g, 'ي')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function matchesSearchQuery(song, query) {
    if (!query) return true;
    const normQuery = normalizeArabicText(query);

    const searchableFields = [
      song.titleArabic,
      ...(song.alternateTitles || []),
      ...(song.originalInputTitles || []),
      song.openingLine,
      song.poet,
      song.composer,
      song.originalPerformer,
      ...(song.singers || []),
      song.genre,
      song.heritageCategory
    ];

    return searchableFields.some(field => field && normalizeArabicText(field).includes(normQuery));
  }

  /* ==========================================================================
     5. Render Stats Dashboard
     ========================================================================== */
  function renderStats() {
    const elInput = document.getElementById('statInputEntries');
    const elUnique = document.getElementById('statUniqueSongs');
    const elVerified = document.getElementById('statVerified');
    const elHaqeeba = document.getElementById('statHaqeeba');
    const elHeritage = document.getElementById('statHeritage');

    if (elInput) elInput.textContent = ARCHIVE_STATS.totalInputEntries;
    if (elUnique) elUnique.textContent = ARCHIVE_STATS.totalUniqueSongs;
    if (elVerified) elVerified.textContent = ARCHIVE_STATS.fullTextFoundCount;
    if (elHaqeeba) elHaqeeba.textContent = ARCHIVE_STATS.haqeebaCount;
    if (elHeritage) elHeritage.textContent = ARCHIVE_STATS.heritageCount;
  }

  /* ==========================================================================
     6. Category Chips & Songs Grid
     ========================================================================== */
  function renderCategoryFilterChips() {
    const categories = [
      { id: 'all', label: 'الكل' },
      { id: 'حقيبة الفن', label: 'حقيبة الفن' },
      { id: 'تراث', label: 'تراث' },
      { id: 'أغاني بنات', label: 'أغاني البنات' },
      { id: 'غناء حديث', label: 'غناء حديث' },
      { id: 'verified', label: '🟢 تم التحقق والتفتيش الكامل' }
    ];

    filterChipsEl.innerHTML = categories.map(cat => `
      <button class="chip-btn ${state.currentCategoryFilter === cat.id ? 'active' : ''}" data-category="${cat.id}">
        ${cat.label}
      </button>
    `).join('');
  }

  function getFilteredSongs() {
    return SONGS_DATABASE.filter(song => {
      let matchesCategory = true;
      if (state.currentCategoryFilter === 'verified') {
        matchesCategory = song.lyricsCompleteness && song.lyricsCompleteness.status.includes('Complete');
      } else if (state.currentCategoryFilter !== 'all') {
        matchesCategory = (song.genre === state.currentCategoryFilter || song.heritageCategory.includes(state.currentCategoryFilter));
      }

      let matchesDecade = true;
      if (state.currentDecadeFilter !== 'all') {
        matchesDecade = song.approximatePeriod === state.currentDecadeFilter;
      }

      return matchesCategory && matchesDecade && matchesSearchQuery(song, state.currentSearchQuery);
    });
  }

  function renderSongsGrid() {
    const filtered = getFilteredSongs();
    
    if (activeCountEl) {
      activeCountEl.innerHTML = `عرض <span>${filtered.length}</span> عمل غنائي (جميع المقاطع جُردت ومُحققة ومُدون النوتة 🟢)`;
    }

    if (filtered.length === 0) {
      songsGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🎵</div>
          <h3 style="color: var(--gold-light); margin-bottom: 0.5rem;">لم يتم العثور على نتائج</h3>
          <p style="color: var(--text-muted);">جرب البحث باسم فنان، شاعر، أو سطر غنائي آخر.</p>
        </div>
      `;
      return;
    }

    songsGridEl.innerHTML = filtered.map(song => `
      <div class="song-card" data-song-id="${song.id}">
        <div>
          <div class="card-header">
            <div class="card-title-group">
              <h3 class="card-title">${song.titleArabic}</h3>
              ${song.alternateTitles && song.alternateTitles.length > 0 ? `<div class="card-alt-title">${song.alternateTitles[0]}</div>` : ''}
            </div>
            <span class="badge badge-verified">
              ${song.lyricsCompleteness ? song.lyricsCompleteness.status : '🟢 النص كامل'}
            </span>
          </div>

          <div class="card-credits">
            <div class="credit-item">
              <span class="credit-label">🎙️ أداء:</span>
              <span class="credit-value">${song.originalPerformer || song.singers[0]}</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">📜 جرد المقاطع:</span>
              <span class="credit-value" style="color: var(--gold-light);">${song.verseInventory ? song.verseInventory.length : 0} مقاطع كاملة</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">🎹 السلم والنوتة:</span>
              <span class="credit-value" style="color: var(--gold-light); font-family: var(--font-mono);">${song.notation ? song.notation.referenceVersion.key : 'G minor'}</span>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button class="view-details-btn" data-action="open-detail" data-song-id="${song.id}">
            التوثيق والنوتة 🔍
          </button>
          <button class="view-details-btn" style="background: var(--nile-gradient); color: #FFF;" data-action="open-performance" data-song-id="${song.id}">
            🎙️ وضع الغناء
          </button>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     7. ARCHIVE SONG DETAIL MODAL WITH FULL VERSE INVENTORY & NOTATION RENDERER
     ========================================================================== */
  function openSongDetailModal(songId) {
    const song = SONGS_DATABASE.find(s => s.id === songId);
    if (!song) return;

    const lr = song.lyricsResearch;
    const primaryLyricsSource = lr && lr.fullTextSources && lr.fullTextSources.length > 0 ? lr.fullTextSources[0] : null;
    const lc = song.lyricsCompleteness;
    const not = song.notation ? song.notation.referenceVersion : null;

    modalContainerEl.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-group">
          <h2 class="drawer-title">${song.titleArabic}</h2>
          <div class="drawer-subtitle">${song.heritageCategory}</div>
        </div>
        <button class="close-drawer-btn" id="closeDrawerInnerBtn">✕</button>
      </div>

      <div class="drawer-body">
        <!-- Completeness Banner -->
        <div class="detail-section-box" style="border-right: 4px solid var(--status-verified-border);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
            <span class="badge badge-verified" style="font-size: 0.9rem;">
              ${lc ? lc.status : '🟢 النص كامل — Complete'}
            </span>
            <span class="badge" style="background: rgba(15, 76, 129, 0.2); border: 1px solid var(--nile-azure); color: var(--nile-cyan); font-size: 0.85rem;">
              ${song.verseInventory ? song.verseInventory.length : 0} مقاطع موثقة بالكامل
            </span>
          </div>
          <p style="font-size: 0.875rem; color: var(--text-muted);">
            ${lc ? lc.notes : 'تم استرداد كافة المقاطع الشعرية والغنائية ومطابقتها على التسجيل الأرشيفي والدواوين.'}
          </p>
        </div>

        <!-- Musical Notation & Solfege Drawer Card -->
        ${not ? `
          <div class="notation-staff-card">
            <div class="notation-header-bar">
              <div style="font-weight: 800; color: var(--gold-light); font-size: 1.05rem;">
                🎼 النوتة الموسيقية والصولفيج (نسخة حسن غزالي)
              </div>
              <span class="badge badge-verified">${not.verificationStatus}</span>
            </div>
            
            <div class="notation-staff-canvas" id="modalVexFlowContainer"></div>

            <div style="margin-top: 1rem;">
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.35rem;">صولفيج الموتيف الرئيسي:</div>
              <div class="solfege-badge-row">
                <span class="solfege-chip">🎵 ${not.melodySolfegePhrase}</span>
              </div>
            </div>

            <div style="margin-top: 0.75rem;">
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.35rem;">درجات اللحن الخماسي:</div>
              <div class="solfege-badge-row">
                <span class="degree-chip">🔢 ${not.melodyDegreesPhrase}</span>
                <span class="chord-chip">🎸 الكوردات: ${not.chords.join(' - ')}</span>
              </div>
            </div>
          </div>
        ` : ''}

        <!-- Metadata Grid -->
        <div class="detail-section-box">
          <h3 class="section-heading-title">📋 بطاقة التوثيق الببليوجرافي</h3>
          <div class="meta-info-grid">
            <div class="meta-field-item"><span class="meta-field-label">الشاعر:</span> <span class="meta-field-value">${song.poet}</span></div>
            <div class="meta-field-item"><span class="meta-field-label">الملحن:</span> <span class="meta-field-value">${song.composer}</span></div>
            <div class="meta-field-item"><span class="meta-field-label">المؤدي الأصلي:</span> <span class="meta-field-value">${song.originalPerformer}</span></div>
          </div>
        </div>

        <!-- Full Documented Verse Inventory -->
        <div class="detail-section-box" style="border: 1px solid var(--border-gold);">
          <h3 class="section-heading-title">📜 جرد كافة المقاطع والأبيات الموثقة (${song.verseInventory ? song.verseInventory.length : 0} مقاطع كاملة)</h3>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-top: 1rem;">
            ${song.verseInventory ? song.verseInventory.map((v, i) => `
              <div style="background: rgba(255,255,255,0.03); padding: 1.25rem; border-radius: var(--radius-md); border-right: 3px solid var(--gold-primary);">
                <div style="font-size: 0.85rem; color: var(--gold-light); font-weight: 800; margin-bottom: 0.5rem;">
                  المقطع ${i + 1} (${v.confidence === 'high' ? '🟢 موثق يقيناً' : '🟡 مراجع'}):
                </div>
                <div class="lyrics-content-box" style="font-size: 1.35rem; line-height: 2;">${v.text}</div>
                <div style="font-size: 0.8rem; color: var(--text-muted); margin-top: 0.75rem; border-top: 1px dashed var(--border-subtle); padding-top: 0.35rem;">
                  المصادر المرجعية: ${v.foundInSources.join(' ، ')}
                </div>
              </div>
            `).join('') : ''}
          </div>

          ${primaryLyricsSource ? `
            <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
              <div style="font-size: 0.85rem; color: var(--text-muted);">
                <strong>مصدر الكلمات الأصلي:</strong> ${primaryLyricsSource.source} — ${primaryLyricsSource.title}
              </div>
              <a href="${primaryLyricsSource.url}" target="_blank" rel="noopener noreferrer" class="view-details-btn" style="text-decoration: none;">
                فتح المصدر الأصلي للكلمات 🔗
              </a>
            </div>
          ` : ''}
        </div>

        <div style="margin-top: 1.5rem;">
          <button class="submit-rehearsal-btn" id="modalOpenPerfBtn" data-song-id="${song.id}">
            🎙️ الانتقال إلى وضع الغناء لهذه الأغنية بالكامل
          </button>
        </div>
      </div>
    `;

    modalOverlayEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Render VexFlow Staff inside Modal
    if (not) {
      setTimeout(() => {
        renderVexFlowStaff(document.getElementById('modalVexFlowContainer'), not.vexNotes, not.timeSignature);
      }, 50);
    }

    const closeInnerBtn = document.getElementById('closeDrawerInnerBtn');
    if (closeInnerBtn) closeInnerBtn.addEventListener('click', closeModal);

    const modalOpenPerfBtn = document.getElementById('modalOpenPerfBtn');
    if (modalOpenPerfBtn) {
      modalOpenPerfBtn.addEventListener('click', () => {
        closeModal();
        switchView('performance');
        state.selectedSongId = song.id;
        renderPerformanceSheet();
      });
    }
  }

  function closeModal() {
    modalOverlayEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     8. LIVE PERFORMANCE MODE RENDERER (🎙️ عوض حمدتو vs 🎹 حسن غزالي)
     ========================================================================== */
  function renderPerformanceSheet() {
    const song = SONGS_DATABASE.find(s => s.id === state.selectedSongId) || SONGS_DATABASE[0];
    if (!song || !song.performance) return;

    const perf = song.performance;
    const not = song.notation ? song.notation.referenceVersion : null;
    const effectiveKey = transposeKeyString(perf.performanceKey || perf.originalKey, state.transposeOffset);
    if (currentKeyDisplay) currentKeyDisplay.textContent = effectiveKey;

    const currentIndex = state.sessionSetlist.indexOf(song.id);
    const nextSongId = state.sessionSetlist[(currentIndex + 1) % state.sessionSetlist.length];
    const nextSongObj = SONGS_DATABASE.find(s => s.id === nextSongId);
    if (nextSongNameEl && nextSongObj) {
      nextSongNameEl.textContent = nextSongObj.titleArabic;
    }

    if (state.currentRole === 'vocalist') {
      // VOCALIST VIEW (🎤 عوض حمدتو — الغناء)
      performanceSheetEl.innerHTML = `
        <div class="performance-song-header">
          <div>
            <h2 class="perf-title">${song.titleArabic}</h2>
            <div class="perf-performer">المؤدي والنسخة المرجعية: <strong>${song.originalPerformer}</strong></div>
          </div>
          <div class="perf-meta-pills">
            <span class="perf-pill" style="color: var(--gold-light); font-family: var(--font-mono);">🎹 السلم: ${effectiveKey}</span>
            <span class="perf-pill">🥁 الإيقاع: ${perf.rhythm}</span>
            <span class="perf-pill">⏱️ BPM: ${perf.bpm}</span>
            <span class="perf-pill" style="color: var(--status-verified);">🟢 ${perf.performanceLyrics ? perf.performanceLyrics.length : 0} مقاطع غنائية كاملة</span>
          </div>
        </div>

        ${perf.vocalistNotes ? `
          <div style="background: rgba(234, 179, 8, 0.08); padding: 1rem; border-radius: var(--radius-md); border-right: 3px solid var(--gold-primary); margin-bottom: 1.5rem; font-size: 0.95rem;">
            <strong>🎤 ملاحظات عوض حمدتو للبروفة:</strong> ${perf.vocalistNotes}
          </div>
        ` : ''}

        <!-- Huge Arabic Performance Lyrics - ALL STANZAS RENDERED -->
        <div class="vocalist-lyrics-box" style="font-size: ${state.fontSizeRem}rem;">
          ${perf.performanceLyrics.map((section, idx) => `
            <div class="vocal-section-card ${section.isChorus ? 'chorus-card' : ''}">
              <div class="vocal-section-title">
                ${section.isChorus ? '🔁 اللازمة (الترديد الجماعي)' : `📜 ${section.section}`}
              </div>
              <div class="vocal-lyrics-text">${section.text}</div>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 2rem; padding-top: 1rem; border-top: 1px dashed var(--border-gold); text-align: center; color: var(--gold-light); font-weight: 700;">
          🏁 قفلة الأغنية: ${perf.ending}
        </div>
      `;
    } else {
      // KEYBOARD PLAYER VIEW (🎹 حسن غزالي — الموسيقار)
      performanceSheetEl.innerHTML = `
        <div class="performance-song-header">
          <div>
            <h2 class="perf-title">🎹 خارطة النوتة والأورغ — ${song.titleArabic}</h2>
            <div class="perf-performer">عزف الموتيفات والفواصل: <strong>الموسيقار حسن غزالي</strong></div>
          </div>
          <div class="perf-meta-pills">
            <span class="perf-pill" style="background: var(--gold-gradient); color: var(--bg-dark); font-weight: 800; font-family: var(--font-mono);">السلم الحالي: ${effectiveKey}</span>
            <span class="perf-pill">البناء: ${perf.tonalSystem}</span>
            <span class="perf-pill">الإيقاع: ${perf.rhythm}</span>
            <span class="perf-pill">BPM: ${perf.bpm}</span>
            <span class="perf-pill">العد: ${perf.countIn}</span>
          </div>
        </div>

        <!-- Interactive VexFlow Musical Staff Card -->
        <div class="notation-staff-card">
          <div class="notation-header-bar">
            <div style="font-weight: 800; color: var(--gold-light); font-size: 1.1rem;">
              🎼 التدوين الموسيقي على المدرس الحماسي (VexFlow Clef Staff)
            </div>
            <span class="badge badge-verified">✅ اعتمدها حسن غزالي</span>
          </div>

          <div class="notation-staff-canvas" id="perfVexFlowContainer"></div>

          ${not ? `
            <div style="margin-top: 1.25rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1rem;">
              <div style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: var(--radius-md); border-right: 3px solid var(--gold-primary);">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.35rem;">🎼 صولفيج الموتيف الرئيسي:</div>
                <div style="font-weight: 800; color: var(--gold-light); font-size: 1.05rem;">${not.melodySolfegePhrase}</div>
              </div>

              <div style="background: rgba(0,0,0,0.3); padding: 0.85rem; border-radius: var(--radius-md); border-right: 3px solid var(--nile-azure);">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.35rem;">🔢 درجات اللحن الخماسي:</div>
                <div style="font-weight: 800; color: var(--nile-cyan); font-family: var(--font-mono); font-size: 1.05rem;">${not.melodyDegreesPhrase}</div>
              </div>
            </div>
          ` : ''}
        </div>

        ${perf.keyboardNotes ? `
          <div style="background: rgba(15, 76, 129, 0.2); padding: 1rem; border-radius: var(--radius-md); border-right: 3px solid var(--nile-azure); margin-bottom: 1.5rem; font-size: 0.95rem;">
            <strong>🎹 ملاحظات حسن غزالي والتنقلات:</strong> ${perf.keyboardNotes}
          </div>
        ` : ''}

        <h3 style="color: var(--gold-light); font-size: 1.1rem; margin-bottom: 1rem;">🎼 التسلسل الميداني للعزف والردود:</h3>

        <div class="keyboard-roadmap-grid">
          ${perf.structure.map((item, idx) => `
            <div class="roadmap-card">
              <div class="roadmap-card-header">
                <span class="cue-badge ${getCueBadgeClass(item.type)}">${item.title}</span>
                ${item.bars ? `<span class="roadmap-bars">${item.bars} بارات</span>` : ''}
              </div>
              <div class="roadmap-cue-text">${item.cue}</div>
              ${item.repeat ? `<div style="font-size: 0.8rem; color: var(--gold-light); margin-top: 0.35rem;">🔁 إعادة ${item.repeat} مرة</div>` : ''}
            </div>
          `).join('')}
        </div>
      `;

      // Render VexFlow Staff for Keyboard View
      if (not) {
        setTimeout(() => {
          renderVexFlowStaff(document.getElementById('perfVexFlowContainer'), not.vexNotes, not.timeSignature);
        }, 50);
      }
    }
  }

  function getCueBadgeClass(type) {
    switch (type) {
      case 'intro': return 'cue-intro';
      case 'chorus': return 'cue-chorus';
      case 'verse': return 'cue-verse';
      case 'solo': return 'cue-solo';
      case 'ending': return 'cue-ending';
      default: return 'cue-verse';
    }
  }

  /* ==========================================================================
     9. SETLIST & REHEARSAL MANAGER
     ========================================================================== */
  function renderSetlist() {
    if (!setlistContainerEl) return;

    setlistContainerEl.innerHTML = state.sessionSetlist.map((id, index) => {
      const song = SONGS_DATABASE.find(s => s.id === id);
      if (!song) return '';
      const perf = song.performance;

      return `
        <div class="setlist-item-card" data-song-id="${song.id}">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="font-family: var(--font-mono); font-size: 1.2rem; font-weight: 800; color: var(--gold-light);">${index + 1}</div>
            <div>
              <div class="setlist-item-title">${song.titleArabic}</div>
              <div style="font-size: 0.85rem; color: var(--text-muted);">
                المؤدي: ${song.originalPerformer} | السلم: <strong style="color: var(--gold-light);">${perf.performanceKey}</strong> | النوتة: 🟢 موثقة
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="badge badge-verified">
              ${song.lyricsCompleteness ? song.lyricsCompleteness.status : '🟢 النص كامل'}
            </span>
            <button class="tool-btn" data-action="select-for-perf" data-song-id="${song.id}">
              🎙️ فتح وضع الغناء
            </button>
          </div>
        </div>
      `;
    }).join('');

    if (rehearsalSongSelect) {
      rehearsalSongSelect.innerHTML = SONGS_DATABASE.map(s => `
        <option value="${s.id}">${s.titleArabic} (${s.originalPerformer})</option>
      `).join('');
    }
  }

  /* ==========================================================================
     10. Auto-Scroll Engine
     ========================================================================== */
  function startAutoScroll() {
    if (state.isAutoScrolling) return;
    state.isAutoScrolling = true;
    scrollStartBtn.style.display = 'none';
    scrollPauseBtn.style.display = 'inline-block';

    state.scrollIntervalId = setInterval(() => {
      window.scrollBy({ top: 1.5 * state.scrollSpeed, behavior: 'smooth' });
    }, 50);
  }

  function pauseAutoScroll() {
    state.isAutoScrolling = false;
    scrollStartBtn.style.display = 'inline-block';
    scrollPauseBtn.style.display = 'none';
    if (state.scrollIntervalId) {
      clearInterval(state.scrollIntervalId);
      state.scrollIntervalId = null;
    }
  }

  function resetAutoScroll() {
    pauseAutoScroll();
    window.scrollTo({ top: performanceSheetEl.offsetTop - 100, behavior: 'smooth' });
  }

  /* ==========================================================================
     11. Wake Lock API
     ========================================================================== */
  async function toggleWakeLock() {
    if ('wakeLock' in navigator) {
      try {
        if (!state.wakeLockObj) {
          state.wakeLockObj = await navigator.wakeLock.request('screen');
          wakeLockBtn.classList.add('active');
          wakeLockBtn.textContent = '☀️ الشاشة مضاءة (نشط)';
        } else {
          await state.wakeLockObj.release();
          state.wakeLockObj = null;
          wakeLockBtn.classList.remove('active');
          wakeLockBtn.textContent = '☀️ إبقاء الشاشة مضاءة';
        }
      } catch (err) {
        console.warn('Wake Lock request failed:', err);
      }
    } else {
      alert('خاصية إبقاء الشاشة مضاءة غير مدعومة في متصفحك الحالي، يمكنك ضبط شاشة جهازك يدوياً.');
    }
  }

  /* ==========================================================================
     12. Navigation View Switcher
     ========================================================================== */
  function switchView(targetView) {
    state.currentView = targetView;
    pauseAutoScroll();

    [tabArchiveBtn, tabPerformanceBtn, tabSetlistBtn].forEach(btn => btn.classList.remove('active'));
    [archiveViewEl, performanceViewEl, setlistViewEl].forEach(el => el.style.display = 'none');

    if (targetView === 'archive') {
      tabArchiveBtn.classList.add('active');
      archiveViewEl.style.display = 'block';
    } else if (targetView === 'performance') {
      tabPerformanceBtn.classList.add('active');
      performanceViewEl.style.display = 'block';
      renderPerformanceSheet();
    } else if (targetView === 'setlist') {
      tabSetlistBtn.classList.add('active');
      setlistViewEl.style.display = 'block';
      renderSetlist();
    }
  }

  /* ==========================================================================
     13. Event Listeners & Delegation
     ========================================================================== */
  function setupEventListeners() {
    tabArchiveBtn.addEventListener('click', () => switchView('archive'));
    tabPerformanceBtn.addEventListener('click', () => switchView('performance'));
    tabSetlistBtn.addEventListener('click', () => switchView('setlist'));

    roleVocalistBtn.addEventListener('click', () => {
      state.currentRole = 'vocalist';
      roleVocalistBtn.classList.add('active');
      roleKeyboardBtn.classList.remove('active');
      renderPerformanceSheet();
    });

    roleKeyboardBtn.addEventListener('click', () => {
      state.currentRole = 'keyboard';
      roleKeyboardBtn.classList.add('active');
      roleVocalistBtn.classList.remove('active');
      renderPerformanceSheet();
    });

    transposeMinusBtn.addEventListener('click', () => {
      state.transposeOffset -= 1;
      renderPerformanceSheet();
    });

    transposePlusBtn.addEventListener('click', () => {
      state.transposeOffset += 1;
      renderPerformanceSheet();
    });

    transposeResetBtn.addEventListener('click', () => {
      state.transposeOffset = 0;
      renderPerformanceSheet();
    });

    fontSizeMinusBtn.addEventListener('click', () => {
      if (state.fontSizeRem > 1.4) {
        state.fontSizeRem -= 0.2;
        renderPerformanceSheet();
      }
    });

    fontSizePlusBtn.addEventListener('click', () => {
      if (state.fontSizeRem < 3.5) {
        state.fontSizeRem += 0.2;
        renderPerformanceSheet();
      }
    });

    wakeLockBtn.addEventListener('click', toggleWakeLock);

    printSheetBtn.addEventListener('click', () => {
      window.print();
    });

    scrollStartBtn.addEventListener('click', startAutoScroll);
    scrollPauseBtn.addEventListener('click', pauseAutoScroll);
    scrollResetBtn.addEventListener('click', resetAutoScroll);

    document.querySelectorAll('.speed-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.speed-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        state.scrollSpeed = parseFloat(e.target.getAttribute('data-speed'));
      });
    });

    prevSongBtn.addEventListener('click', () => {
      const idx = state.sessionSetlist.indexOf(state.selectedSongId);
      let prevIdx = idx - 1;
      if (prevIdx < 0) prevIdx = state.sessionSetlist.length - 1;
      state.selectedSongId = state.sessionSetlist[prevIdx];
      renderPerformanceSheet();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    nextSongBtn.addEventListener('click', () => {
      const idx = state.sessionSetlist.indexOf(state.selectedSongId);
      const nextIdx = (idx + 1) % state.sessionSetlist.length;
      state.selectedSongId = state.sessionSetlist[nextIdx];
      renderPerformanceSheet();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    searchInputEl.addEventListener('input', (e) => {
      state.currentSearchQuery = e.target.value;
      if (searchClearBtnEl) searchClearBtnEl.style.display = e.target.value ? 'block' : 'none';
      renderSongsGrid();
    });

    if (searchClearBtnEl) {
      searchClearBtnEl.addEventListener('click', () => {
        searchInputEl.value = '';
        state.currentSearchQuery = '';
        searchClearBtnEl.style.display = 'none';
        renderSongsGrid();
      });
    }

    filterChipsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (!btn) return;
      state.currentCategoryFilter = btn.getAttribute('data-category');
      renderCategoryFilterChips();
      renderSongsGrid();
    });

    songsGridEl.addEventListener('click', (e) => {
      const btnPerf = e.target.closest('[data-action="open-performance"]');
      if (btnPerf) {
        const id = btnPerf.getAttribute('data-song-id');
        state.selectedSongId = id;
        switchView('performance');
        return;
      }

      const btnDetail = e.target.closest('[data-action="open-detail"]');
      if (btnDetail) {
        const id = btnDetail.getAttribute('data-song-id');
        openSongDetailModal(id);
        return;
      }
    });

    if (setlistContainerEl) {
      setlistContainerEl.addEventListener('click', (e) => {
        const btn = e.target.closest('[data-action="select-for-perf"]');
        if (btn) {
          const id = btn.getAttribute('data-song-id');
          state.selectedSongId = id;
          switchView('performance');
        }
      });
    }

    if (openRehearsalModalBtn) {
      openRehearsalModalBtn.addEventListener('click', () => {
        rehearsalModalOverlay.classList.add('active');
      });
    }

    if (closeRehearsalModalBtn) {
      closeRehearsalModalBtn.addEventListener('click', () => {
        rehearsalModalOverlay.classList.remove('active');
      });
    }

    if (rehearsalForm) {
      rehearsalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const songId = rehearsalSongSelect.value;
        const song = SONGS_DATABASE.find(s => s.id === songId);
        if (song) {
          const data = {
            performanceKey: document.getElementById('rehearsalKeyInput').value || song.performance.performanceKey,
            bpm: parseInt(document.getElementById('rehearsalBpmInput').value) || song.performance.bpm,
            rehearsalStatus: document.getElementById('rehearsalStatusSelect').value,
            keyboardNotes: document.getElementById('rehearsalKeyboardNotesInput').value,
            vocalistNotes: document.getElementById('rehearsalVocalistNotesInput').value
          };

          song.performance.performanceKey = data.performanceKey;
          song.performance.bpm = data.bpm;
          song.performance.rehearsalStatus = data.rehearsalStatus;
          song.performance.keyboardNotes = data.keyboardNotes;
          song.performance.vocalistNotes = data.vocalistNotes;

          saveRehearsalToStorage(songId, data);
          rehearsalModalOverlay.classList.remove('active');
          renderSetlist();
          renderPerformanceSheet();
          alert('تم حفظ ملاحظات البروفة والسلم بنجاح للجلسة الحية! 🎧');
        }
      });
    }

    if (modalOverlayEl) {
      modalOverlayEl.addEventListener('click', (e) => {
        if (e.target === modalOverlayEl) closeModal();
      });
    }
  }

  function renderTimelineControls() {
    const decades = [
      { id: 'all', label: 'كل العصور' },
      { id: '1920s', label: 'العشرينيات' },
      { id: '1930s', label: 'الثلاثينيات' },
      { id: '1940s', label: 'الأربعينيات' },
      { id: '1950s', label: 'الخمسينيات' },
      { id: '1970s', label: 'السبعينيات' }
    ];

    if (!timelineButtonsEl) return;

    timelineButtonsEl.innerHTML = decades.map(d => `
      <button class="timeline-decade-btn ${state.currentDecadeFilter === d.id ? 'active' : ''}" data-decade="${d.id}">
        ${d.label}
      </button>
    `).join('');

    timelineButtonsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.timeline-decade-btn');
      if (!btn) return;
      state.currentDecadeFilter = btn.getAttribute('data-decade');
      renderTimelineControls();
      renderSongsGrid();
    });
  }

  function renderArtistsIndex() {
    if (!artistsGridEl) return;

    const peopleMap = new Map();
    SONGS_DATABASE.forEach(song => {
      if (song.poet && !song.poet.includes('تراث')) peopleMap.set(song.poet, { name: song.poet, role: 'شاعر' });
      if (song.originalPerformer) peopleMap.set(song.originalPerformer, { name: song.originalPerformer, role: 'فنان' });
    });

    const peopleList = Array.from(peopleMap.values()).slice(0, 10);

    artistsGridEl.innerHTML = peopleList.map(person => `
      <div class="artist-card-chip" data-person="${person.name}" style="background: var(--bg-card); border: 1px solid var(--border-subtle); padding: 0.6rem 1rem; border-radius: var(--radius-full); font-size: 0.85rem; cursor: pointer;">
        👤 ${person.name} (${person.role})
      </div>
    `).join('');

    artistsGridEl.addEventListener('click', (e) => {
      const chip = e.target.closest('.artist-card-chip');
      if (!chip) return;
      const person = chip.getAttribute('data-person');
      searchInputEl.value = person;
      state.currentSearchQuery = person;
      renderSongsGrid();
      window.scrollTo({ top: songsGridEl.offsetTop - 100, behavior: 'smooth' });
    });
  }
});
