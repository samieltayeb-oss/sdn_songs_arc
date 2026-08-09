/* ==========================================================================
   أرشيف الأغنية السودانية | Sudanese Songs Heritage Archive
   Application Logic, VexFlow Music Notation & Performance System (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentView: 'archive',           // 'archive' | 'performance' | 'setlist' | 'audit'
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
  const tabAuditBtn = document.getElementById('tabAuditBtn');
  const tabProofBtn = document.getElementById('tabProofBtn');
  
  const archiveViewEl = document.getElementById('archiveView');
  const performanceViewEl = document.getElementById('performanceView');
  const setlistViewEl = document.getElementById('setlistView');
  const auditViewEl = document.getElementById('auditView');
  const proofViewEl = document.getElementById('proofView');

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
     3. FULL MULTI-STAFF LEAD SHEET SCORE RENDERER (GENUINE VEXFLOW)
     ========================================================================== */
  function renderFullMultiBarLeadSheet(containerEl, songObj) {
    if (!containerEl || !songObj || !songObj.notation) return;
    containerEl.innerHTML = '';

    const not = songObj.notation.referenceVersion;
    const rawEvents = not.rawTranscriptionEvents;

    if (!rawEvents || rawEvents.length === 0) {
      containerEl.innerHTML = `
        <div style="background: rgba(220, 38, 38, 0.08); border: 1px dashed #DC2626; padding: 2rem; border-radius: 8px; text-align: center; color: #DC2626; margin-top: 1.5rem;">
          <div style="font-size: 1.2rem; font-weight: bold; margin-bottom: 0.5rem;">🔴 النوتة لم يتم تفريغها من التسجيل بعد</div>
          <div style="font-size: 0.9rem;">(Transcription Not Yet Verified From Audio)</div>
        </div>
      `;
      return;
    }

    let html = `
      <div class="full-lead-sheet-wrapper" style="background:#FFF; color:#1E293B; border-radius:12px; padding:1.5rem; box-shadow:0 8px 25px rgba(0,0,0,0.5); margin-top: 1rem;">
        <div style="border-bottom: 2px solid #0F4C81; padding-bottom: 0.75rem; margin-bottom: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <h3 style="margin:0; font-size:1.3rem; color:#0F4C81;">🎼 التدوين الموسيقي المستقل — ${songObj.titleArabic}</h3>
            <div style="font-size:0.875rem; color:#475569; margin-top: 0.25rem;">
              المؤدي المرجعي: <strong>${songObj.originalPerformer}</strong> | السلم: <strong style="color: #0F4C81;">${not.key}</strong>
            </div>
          </div>
          <span style="background:#10B981; color:#FFF; padding:0.4rem 0.8rem; border-radius:6px; font-size:0.85rem; font-weight:bold;">
            🟢 INDEPENDENT VERIFIED SCORE
          </span>
        </div>
        <div id="vexflow-canvas-${songObj.id}" style="overflow-x: auto; padding-bottom: 1rem;"></div>
      </div>
    `;
    containerEl.innerHTML = html;

    setTimeout(() => {
      try {
        const vfContainer = document.getElementById(`vexflow-canvas-${songObj.id}`);
        if (!vfContainer || !window.Vex) return;
        vfContainer.innerHTML = '';

        const VF = Vex.Flow;
        const renderer = new VF.Renderer(vfContainer, VF.Renderer.Backends.SVG);
        
        const width = Math.max(600, rawEvents.length * 70);
        renderer.resize(width, 150);
        const context = renderer.getContext();
        
        const stave = new VF.Stave(10, 20, width - 20);
        stave.addClef("treble").addTimeSignature("4/4");
        stave.setContext(context).draw();

        const notes = rawEvents.map(evt => {
          const note = new VF.StaveNote({
            keys: [`${evt.pitch.toLowerCase()}/${evt.octave}`],
            duration: evt.duration
          });
          if (evt.lyric) {
            note.addModifier(new VF.Annotation(evt.lyric).setVerticalJustification(VF.Annotation.VerticalJustify.BOTTOM), 0);
          }
          return note;
        });

        VF.Formatter.FormatAndDraw(context, stave, notes);
      } catch (err) {
        console.error('VexFlow Error:', err);
      }
    }, 50);
  }

  /* ==========================================================================
     4. FORENSIC AUDIT VIEW RENDERER
     ========================================================================== */
  function renderForensicAuditView() {
    const container = document.getElementById('forensicAuditContainer');
    if (!container) return;

    let html = `
      <div style="background: var(--bg-card); border: 1px solid var(--border-gold); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <h3 style="color: var(--gold-light); margin-bottom: 0.5rem;">📊 نتائج تدقيق التماثل والمطابقة بين الأعمال (Forensic Pairwise Matrix)</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          تم محو المولد الوهمي للنوتات وإلغاء شارة "موثقة" عن الأغاني التي لا تملك جدول أحداث نغمية مفرغة (Raw Events) من التسجيل الصوتي.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        ${SONGS_DATABASE.map((song, i) => {
          const fp = song.musicalFingerprint;
          const rec = song.referenceRecording;
          const not = song.notation ? song.notation.referenceVersion : null;
          const hasTranscription = not && not.rawTranscriptionEvents && not.rawTranscriptionEvents.length > 0;

          return `
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
                <div>
                  <h3 style="margin: 0; color: var(--gold-primary); font-size: 1.2rem;">#${i + 1} — ${song.titleArabic}</h3>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">المؤدي المرجعي: ${song.originalPerformer} | السلم: <strong style="color: var(--gold-light);">${not ? not.key : 'G minor'}</strong></div>
                </div>
                ${hasTranscription ? 
                  `<span class="badge badge-verified">🟢 INDEPENDENT VERIFIED SCORE</span>` : 
                  `<span class="badge" style="background: rgba(220, 38, 38, 0.2); color: #DC2626; border: 1px solid #DC2626;">🔴 TRANSCRIPTION NOT YET VERIFIED</span>`
                }
              </div>

              <!-- Render Native Song Score Notation -->
              <div id="auditLeadSheet_${song.id}"></div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.innerHTML = html;

    setTimeout(() => {
      SONGS_DATABASE.forEach(song => {
        renderFullMultiBarLeadSheet(document.getElementById(`auditLeadSheet_${song.id}`), song);
      });
    }, 50);
  }

  /* ==========================================================================
     4b. NOTATION PROOF VIEW RENDERER
     ========================================================================== */
  function renderNotationProofView() {
    const container = document.getElementById('notationProofContainer');
    if (!container) return;

    const transcribedSongs = SONGS_DATABASE.filter(s => s.notation && s.notation.referenceVersion && s.notation.referenceVersion.rawTranscriptionEvents);

    let html = `
      <div style="background: var(--bg-card); border: 1px solid var(--border-gold); padding: 1.5rem; border-radius: var(--radius-lg); margin-bottom: 2rem;">
        <h3 style="color: var(--gold-light); margin-bottom: 0.5rem;">🧾 دليل الإثبات السمعي البصري (Audio-to-Score Proof Chain)</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">
          إثبات الاستقلالية يقتضي وجود تسجيل مرجعي، استخراج التفريغ الزمني (Timestamps)، الأحداث النغمية (Pitches/Durations)، ثم رسم النوتة. 
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 2rem;">
        ${transcribedSongs.map((song, i) => {
          const rec = song.referenceRecording;
          const rawEvents = song.notation.referenceVersion.rawTranscriptionEvents;
          
          return `
            <div style="background: var(--bg-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.5rem;">
              <h3 style="color: var(--gold-primary); margin-bottom: 1rem; border-bottom: 1px dashed var(--border-subtle); padding-bottom: 0.5rem;">
                ${i+1}. ${song.titleArabic}
              </h3>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem;">
                <div style="background: rgba(15, 76, 129, 0.15); padding: 1rem; border-radius: 8px; border-right: 3px solid var(--nile-azure);">
                  <strong style="display: block; margin-bottom: 0.5rem;">🎙️ التسجيل المرجعي:</strong>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">
                    المؤدي: ${rec.performer}<br>
                    النسخة: ${rec.version}<br>
                    زمن البدء: ${rawEvents[0].time}
                  </div>
                </div>
                <div style="background: rgba(16, 185, 129, 0.1); padding: 1rem; border-radius: 8px; border-right: 3px solid #10B981;">
                  <strong style="display: block; margin-bottom: 0.5rem;">📊 جدول التفريغ الخام (Raw Events):</strong>
                  <table style="width: 100%; font-size: 0.8rem; text-align: right; color: var(--text-muted); border-collapse: collapse;">
                    <thead>
                      <tr style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                        <th>Time</th><th>Lyric</th><th>Pitch</th><th>Oct</th><th>Dur</th><th>Msr</th><th>Beat</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rawEvents.map(evt => `
                        <tr>
                          <td>${evt.time}</td><td>${evt.lyric || '-'}</td>
                          <td style="color: var(--gold-light); font-family: monospace;">${evt.pitch}</td>
                          <td>${evt.octave}</td><td style="color: #10B981;">${evt.duration}</td>
                          <td>${evt.measure}</td><td>${evt.beat}</td>
                        </tr>
                      `).join('')}
                    </tbody>
                  </table>
                </div>
              </div>

              <strong style="display: block; margin-bottom: 0.5rem;">🎼 النوتة الناتجة عن التفريغ (VexFlow Score):</strong>
              <div id="proofLeadSheet_${song.id}"></div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    container.innerHTML = html;

    setTimeout(() => {
      transcribedSongs.forEach(song => {
        renderFullMultiBarLeadSheet(document.getElementById(`proofLeadSheet_${song.id}`), song);
      });
    }, 50);
  }

  /* ==========================================================================
     5. Search Normalization Engine
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
     6. Render Stats Dashboard
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
     7. Category Chips & Songs Grid
     ========================================================================== */
  function renderCategoryFilterChips() {
    const categories = [
      { id: 'all', label: 'الكل' },
      { id: 'حقيبة الفن', label: 'حقيبة الفن' },
      { id: 'تراث', label: 'تراث' },
      { id: 'أغاني بنات', label: 'أغاني البنات' },
      { id: 'غناء حديث', label: 'غناء حديث' },
      { id: 'verified', label: '🟢 نوتة مستقلة ومحاررة' }
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
     8. ARCHIVE SONG DETAIL MODAL WITH FULL VERSE INVENTORY & NOTATION RENDERER
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
            ${lc ? lc.notes : 'تم استرداد كافة المقاطع الشعرية وغنائياتها الموثقة.'}
          </p>
        </div>

        <!-- FULL MULTI-BAR LEAD SHEET CONTAINER FOR MODAL -->
        <div id="modalMultiBarLeadSheetContainer"></div>

        <!-- Metadata Grid -->
        <div class="detail-section-box" style="margin-top: 1.5rem;">
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

    // Render Full Multi-Bar Lead Sheet inside Modal
    setTimeout(() => {
      renderFullMultiBarLeadSheet(document.getElementById('modalMultiBarLeadSheetContainer'), song);
    }, 50);

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
     9. LIVE PERFORMANCE MODE RENDERER (🎙️ عوض حمدتو vs 🎹 حسن غزالي)
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

        <!-- FULL MULTI-BAR LEAD SHEET SCORE CONTAINER -->
        <div id="perfMultiBarLeadSheetContainer"></div>

        ${perf.keyboardNotes ? `
          <div style="background: rgba(15, 76, 129, 0.2); padding: 1rem; border-radius: var(--radius-md); border-right: 3px solid var(--nile-azure); margin-top: 1.5rem; margin-bottom: 1.5rem; font-size: 0.95rem;">
            <strong>🎹 ملاحظات حسن غزالي والتنقلات:</strong> ${perf.keyboardNotes}
          </div>
        ` : ''}

        <!-- Recording Timeline Card (00:00 -> END) -->
        ${not && not.timeline ? `
          <div style="background: rgba(0,0,0,0.4); border: 1px solid var(--border-gold); padding: 1.25rem; border-radius: var(--radius-md); margin-top: 1.25rem;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <div style="font-weight: 800; color: var(--gold-light);">⏱️ التسلسل الزمني الكامل للتسجيل المرجعي (00:00 → END)</div>
              <span style="font-size: 0.8rem; color: var(--text-muted);">${song.notationCompleteness ? song.notationCompleteness.referenceDurationSeconds : 240} ثانية موثقة</span>
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${not.timeline.map(t => `
                <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 0.5rem 0.85rem; border-radius: var(--radius-sm); font-size: 0.85rem; border-right: 2px solid var(--gold-primary);">
                  <div><strong style="color: var(--gold-primary); font-family: var(--font-mono);">${t.range}:</strong> ${t.section} ${t.bars ? `(${t.bars} بارات)` : ''}</div>
                  ${t.solfege ? `<span style="color: var(--nile-cyan); font-weight: 700;">🎵 ${t.solfege}</span>` : ''}
                </div>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <h3 style="color: var(--gold-light); font-size: 1.1rem; margin-top: 1.5rem; margin-bottom: 1rem;">🎼 التسلسل الميداني للعزف والردود:</h3>

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

      // Render Full Multi-Bar Lead Sheet Score for Keyboard View
      setTimeout(() => {
        renderFullMultiBarLeadSheet(document.getElementById('perfMultiBarLeadSheetContainer'), song);
      }, 50);
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
     10. SETLIST & REHEARSAL MANAGER
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
     11. Auto-Scroll Engine
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
     12. Wake Lock API
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
     13. Navigation View Switcher
     ========================================================================== */
  function switchView(targetView) {
    state.currentView = targetView;
    pauseAutoScroll();

    [tabArchiveBtn, tabPerformanceBtn, tabSetlistBtn, tabAuditBtn, tabProofBtn].forEach(btn => {
      if (btn) btn.classList.remove('active');
    });

    [archiveViewEl, performanceViewEl, setlistViewEl, auditViewEl, proofViewEl].forEach(el => {
      if (el) el.style.display = 'none';
    });

    if (targetView === 'archive') {
      if (tabArchiveBtn) tabArchiveBtn.classList.add('active');
      if (archiveViewEl) archiveViewEl.style.display = 'block';
    } else if (targetView === 'performance') {
      if (tabPerformanceBtn) tabPerformanceBtn.classList.add('active');
      if (performanceViewEl) performanceViewEl.style.display = 'block';
      renderPerformanceSheet();
    } else if (targetView === 'setlist') {
      if (tabSetlistBtn) tabSetlistBtn.classList.add('active');
      if (setlistViewEl) setlistViewEl.style.display = 'block';
      renderSetlist();
    } else if (targetView === 'audit') {
      if (tabAuditBtn) tabAuditBtn.classList.add('active');
      if (auditViewEl) auditViewEl.style.display = 'block';
      renderForensicAuditView();
    } else if (targetView === 'proof') {
      if (tabProofBtn) tabProofBtn.classList.add('active');
      if (proofViewEl) proofViewEl.style.display = 'block';
      renderNotationProofView();
    }
  }

  /* ==========================================================================
     14. Event Listeners & Delegation
     ========================================================================== */
  function setupEventListeners() {
    if (tabArchiveBtn) tabArchiveBtn.addEventListener('click', () => switchView('archive'));
    if (tabPerformanceBtn) tabPerformanceBtn.addEventListener('click', () => switchView('performance'));
    if (tabSetlistBtn) tabSetlistBtn.addEventListener('click', () => switchView('setlist'));
    if (tabAuditBtn) tabAuditBtn.addEventListener('click', () => switchView('audit'));
    if (tabProofBtn) tabProofBtn.addEventListener('click', () => switchView('proof'));

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
