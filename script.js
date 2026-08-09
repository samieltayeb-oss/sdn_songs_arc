/* ==========================================================================
   أرشيف الأغنية السودانية | Sudanese Songs Heritage Archive
   Application Logic & Live Performance Mode (Musician & Vocalist Stand)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentView: 'archive',           // 'archive' | 'performance' | 'setlist'
    currentRole: 'vocalist',          // 'vocalist' (عوض حمدتو) | 'keyboard' (حسن غزالي)
    selectedSongId: 'nosana-habibna',
    transposeOffset: 0,               // Semitone transpose offset
    fontSizeRem: 2.2,                 // Vocalist lyrics font size
    isAutoScrolling: false,
    scrollSpeed: 0.75,                // Auto scroll multiplier
    scrollIntervalId: null,
    wakeLockObj: null,
    currentSearchQuery: '',
    currentCategoryFilter: 'all',
    currentDecadeFilter: 'all',
    sessionSetlist: [
      'nosana-habibna',
      'yaju-aydeen',
      'min-furay-al-ban',
      'al-khudeir',
      'samsim-al-qadaref',
      'ya-raia-jafitani',
      'samiri-fil-dhamiri',
      'juba-malik-alay',
      'bil-asr-mururu',
      'ya-ghaliya-zina-hayati',
      'al-leila-musafer',
      'ya-nas-barida',
      'hamada-da-janani',
      'al-fatan-al-waseem',
      'al-leila-al-leila-wa-baray'
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
  const closeModalBtnEl = document.getElementById('closeModalBtn');
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
     2. Musical Transpose Engine (Transposes Keys, NOT Arabic lyrics)
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
     3. Search Normalization & Filter Engine
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
     4. Render Stats Dashboard
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
     5. Category Chips & Songs Grid
     ========================================================================== */
  function renderCategoryFilterChips() {
    const categories = [
      { id: 'all', label: 'الكل' },
      { id: 'حقيبة الفن', label: 'حقيبة الفن' },
      { id: 'تراث', label: 'تراث' },
      { id: 'أغاني بنات', label: 'أغاني البنات' },
      { id: 'غناء حديث', label: 'غناء حديث' },
      { id: 'أغنية وطنية', label: 'أغاني وطنية' },
      { id: 'verified', label: '🟢 تم التحقق' }
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
        matchesCategory = song.verificationStatus.includes('Verified');
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
      activeCountEl.innerHTML = `عرض <span>${filtered.length}</span> عمل غنائي (النصوص العربية وجداول العزف جاهزة 🟢)`;
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
            <span class="badge ${song.verificationStatus.includes('Verified') ? 'badge-verified' : 'badge-probable'}">
              ${song.verificationStatus.includes('Verified') ? '🟢 موثقة' : '🟡 مرجحة'}
            </span>
          </div>

          <div class="card-credits">
            <div class="credit-item">
              <span class="credit-label">🎙️ أداء:</span>
              <span class="credit-value">${song.originalPerformer || song.singers[0]}</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">🎹 السلم:</span>
              <span class="credit-value" style="color: var(--gold-light); font-family: var(--font-mono);">${song.performance ? song.performance.performanceKey : 'يحدد بالبروفة'}</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">🥁 الإيقاع:</span>
              <span class="credit-value">${song.performance ? song.performance.rhythm : 'تراث'}</span>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <button class="view-details-btn" data-action="open-detail" data-song-id="${song.id}">
            التوثيق 🔍
          </button>
          <button class="view-details-btn" style="background: var(--nile-gradient); color: #FFF;" data-action="open-performance" data-song-id="${song.id}">
            🎙️ وضع الغناء
          </button>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     6. LIVE PERFORMANCE MODE RENDERER (🎙️ وضع الغناء)
     ========================================================================== */
  function renderPerformanceSheet() {
    const song = SONGS_DATABASE.find(s => s.id === state.selectedSongId) || SONGS_DATABASE[0];
    if (!song || !song.performance) return;

    const perf = song.performance;
    const effectiveKey = transposeKeyString(perf.performanceKey || perf.originalKey, state.transposeOffset);
    if (currentKeyDisplay) currentKeyDisplay.textContent = effectiveKey;

    // Update Next Song indicator in footer
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
          </div>
        </div>

        ${perf.vocalistNotes ? `
          <div style="background: rgba(234, 179, 8, 0.08); padding: 1rem; border-radius: var(--radius-md); border-right: 3px solid var(--gold-primary); margin-bottom: 1.5rem; font-size: 0.95rem;">
            <strong>🎤 ملاحظات عوض حمدتو للبروفة:</strong> ${perf.vocalistNotes}
          </div>
        ` : ''}

        <!-- Huge Arabic Performance Lyrics -->
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
      // KEYBOARD PLAYER VIEW (🎹 حسن غزالي — الأورغ)
      performanceSheetEl.innerHTML = `
        <div class="performance-song-header">
          <div>
            <h2 class="perf-title">🎹 خارطة الأورغ — ${song.titleArabic}</h2>
            <div class="perf-performer">عزف الفواصل: <strong>حسن غزالي</strong></div>
          </div>
          <div class="perf-meta-pills">
            <span class="perf-pill" style="background: var(--gold-gradient); color: var(--bg-dark); font-weight: 800; font-family: var(--font-mono);">السلم الحالي: ${effectiveKey}</span>
            <span class="perf-pill">البناء: ${perf.tonalSystem}</span>
            <span class="perf-pill">الإيقاع: ${perf.rhythm}</span>
            <span class="perf-pill">BPM: ${perf.bpm}</span>
            <span class="perf-pill">العد: ${perf.countIn}</span>
          </div>
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

        <div style="margin-top: 2rem; background: rgba(0,0,0,0.5); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-gold);">
          <div style="color: var(--gold-light); font-weight: 800; margin-bottom: 0.5rem;">اللازمة المرجعية للأورغ:</div>
          <div style="font-size: 1.1rem; color: #FFF; white-space: pre-line;">${perf.chorus}</div>
        </div>
      `;
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
     7. SETLIST & REHEARSAL MANAGER (🎼 قائمة القعدة)
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
                المؤدي: ${song.originalPerformer} | السلم: <strong style="color: var(--gold-light);">${perf.performanceKey}</strong> | الإيقاع: ${perf.rhythm} (${perf.bpm} BPM)
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="badge ${perf.rehearsalStatus === 'ready' ? 'badge-verified' : 'badge-probable'}">
              ${perf.rehearsalStatus === 'ready' ? '✅ جاهزة' : '🟡 تحتاج بروفة'}
            </span>
            <button class="tool-btn" data-action="select-for-perf" data-song-id="${song.id}">
              🎙️ فتح وضع الغناء
            </button>
          </div>
        </div>
      `;
    }).join('');

    // Populate rehearsal form select options
    if (rehearsalSongSelect) {
      rehearsalSongSelect.innerHTML = SONGS_DATABASE.map(s => `
        <option value="${s.id}">${s.titleArabic} (${s.originalPerformer})</option>
      `).join('');
    }
  }

  /* ==========================================================================
     8. Auto-Scroll Engine
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
     9. Wake Lock API ( Keep Screen Awake)
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
     10. Archive Song Detail Modal
     ========================================================================== */
  function openSongDetailModal(songId) {
    const song = SONGS_DATABASE.find(s => s.id === songId);
    if (!song) return;

    const lr = song.lyricsResearch;
    const isFullDisplay = song.rights.publicDisplay === 'full';
    const primaryLyricsSource = lr && lr.fullTextSources && lr.fullTextSources.length > 0 ? lr.fullTextSources[0] : null;

    modalContainerEl.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-group">
          <h2 class="drawer-title">${song.titleArabic}</h2>
          <div class="drawer-subtitle">${song.heritageCategory}</div>
        </div>
        <button class="close-drawer-btn" id="closeDrawerInnerBtn">✕</button>
      </div>

      <div class="drawer-body">
        <div class="detail-section-box">
          <h3 class="section-heading-title">📋 بطاقة التوثيق الأرشيفي</h3>
          <div class="meta-info-grid">
            <div class="meta-field-item"><span class="meta-field-label">الشاعر:</span> <span class="meta-field-value">${song.poet}</span></div>
            <div class="meta-field-item"><span class="meta-field-label">الملحن:</span> <span class="meta-field-value">${song.composer}</span></div>
            <div class="meta-field-item"><span class="meta-field-label">المؤدي الأصلي:</span> <span class="meta-field-value">${song.originalPerformer}</span></div>
          </div>
        </div>

        <div class="detail-section-box">
          <h3 class="section-heading-title">📜 كلمات الأغنية كاملة (النص المحقق)</h3>
          <div class="lyrics-content-box">${isFullDisplay ? lr.originalPoem : song.openingLine}</div>
          ${primaryLyricsSource ? `
            <div style="margin-top: 1rem;">
              <a href="${primaryLyricsSource.url}" target="_blank" rel="noopener noreferrer" class="view-details-btn" style="text-decoration: none;">
                فتح المصدر الأصلي للكلمات 🔗
              </a>
            </div>
          ` : ''}
        </div>

        <div style="margin-top: 1.5rem;">
          <button class="submit-rehearsal-btn" id="modalOpenPerfBtn" data-song-id="${song.id}">
            🎙️ الانتقال إلى وضع الغناء لهذه الأغنية
          </button>
        </div>
      </div>
    `;

    modalOverlayEl.classList.add('active');
    document.body.style.overflow = 'hidden';

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
     11. Navigation View Switcher
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
     12. Event Listeners & Delegation
     ========================================================================== */
  function setupEventListeners() {
    // Navigation Tabs
    tabArchiveBtn.addEventListener('click', () => switchView('archive'));
    tabPerformanceBtn.addEventListener('click', () => switchView('performance'));
    tabSetlistBtn.addEventListener('click', () => switchView('setlist'));

    // Role switcher
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

    // Transpose buttons
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

    // Font Resizer
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

    // Wake Lock
    wakeLockBtn.addEventListener('click', toggleWakeLock);

    // Print button
    printSheetBtn.addEventListener('click', () => {
      window.print();
    });

    // Auto-scroll buttons
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

    // Session Footer Navigation
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

    // Archive Search & Filter Events
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

    // Songs grid click delegation
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

    // Setlist view action button click
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

    // Rehearsal Modal events
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
