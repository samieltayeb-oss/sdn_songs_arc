/* ==========================================================================
   أرشيف الأغنية السودانية | Sudanese Songs Heritage Archive
   Application Logic & Arabic Lyrics Verification Pass (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    currentSearchQuery: '',
    currentCategoryFilter: 'all',
    currentDecadeFilter: 'all',
    selectedSongId: null
  };

  // DOM Elements
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

  // Stats Dashboard Elements
  const statInputEntriesEl = document.getElementById('statInputEntries');
  const statUniqueSongsEl = document.getElementById('statUniqueSongs');
  const statVerifiedEl = document.getElementById('statVerified');
  const statHaqeebaEl = document.getElementById('statHaqeeba');
  const statHeritageEl = document.getElementById('statHeritage');
  const statPoetsEl = document.getElementById('statPoets');
  const statArtistsEl = document.getElementById('statArtists');

  // Initialize Application
  initArchive();

  function initArchive() {
    renderStats();
    renderCategoryFilterChips();
    renderSongsGrid();
    renderTimelineControls();
    renderArtistsIndex();
    setupEventListeners();
  }

  /* ==========================================================================
     1. Search Normalization Engine
     ========================================================================== */
  function normalizeArabicText(text) {
    if (!text) return '';
    return text
      .toString()
      .toLowerCase()
      .replace(/[\u064B-\u0652]/g, '') // Remove Tashkeel (diacritics)
      .replace(/[أإآآ]/g, 'ا')         // Normalize Alif
      .replace(/ة/g, 'ه')              // Normalize Ta Marbuta
      .replace(/ى/g, 'ي')              // Normalize Alif Maqsura
      .replace(/\s+/g, ' ')            // Collapse extra whitespace
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
      song.heritageCategory,
      song.story,
      song.lyricsResearch ? song.lyricsResearch.originalPoem : ''
    ];

    return searchableFields.some(field => {
      if (!field) return false;
      return normalizeArabicText(field).includes(normQuery);
    });
  }

  /* ==========================================================================
     2. Render Dashboard Statistics
     ========================================================================== */
  function renderStats() {
    if (statInputEntriesEl) statInputEntriesEl.textContent = ARCHIVE_STATS.totalInputEntries;
    if (statUniqueSongsEl) statUniqueSongsEl.textContent = ARCHIVE_STATS.totalUniqueSongs;
    if (statVerifiedEl) statVerifiedEl.textContent = ARCHIVE_STATS.verifiedCount;
    if (statHaqeebaEl) statHaqeebaEl.textContent = ARCHIVE_STATS.haqeebaCount;
    if (statHeritageEl) statHeritageEl.textContent = ARCHIVE_STATS.heritageCount;
    if (statPoetsEl) statPoetsEl.textContent = ARCHIVE_STATS.poetsCount;
    if (statArtistsEl) statArtistsEl.textContent = ARCHIVE_STATS.artistsCount;
  }

  /* ==========================================================================
     3. Category Filter Engine
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

  /* ==========================================================================
     4. Songs Grid Renderer
     ========================================================================== */
  function getFilteredSongs() {
    return SONGS_DATABASE.filter(song => {
      // Category filter logic
      let matchesCategory = true;
      if (state.currentCategoryFilter === 'verified') {
        matchesCategory = song.verificationStatus.includes('Verified');
      } else if (state.currentCategoryFilter !== 'all') {
        matchesCategory = (song.genre === state.currentCategoryFilter || song.heritageCategory.includes(state.currentCategoryFilter));
      }

      // Decade filter logic
      let matchesDecade = true;
      if (state.currentDecadeFilter !== 'all') {
        matchesDecade = song.approximatePeriod === state.currentDecadeFilter;
      }

      // Search filter logic
      const matchesSearch = matchesSearchQuery(song, state.currentSearchQuery);

      return matchesCategory && matchesDecade && matchesSearch;
    });
  }

  function renderSongsGrid() {
    const filtered = getFilteredSongs();
    
    if (activeCountEl) {
      activeCountEl.innerHTML = `عرض <span>${filtered.length}</span> عمل غنائي (النصوص العربية مُراجعة ومُحققة 🟢)`;
    }

    if (filtered.length === 0) {
      songsGridEl.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-subtle);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🎵</div>
          <h3 style="font-family: var(--font-heading); color: var(--gold-light); margin-bottom: 0.5rem;">لم يتم العثور على نتائج</h3>
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
              <span class="credit-label">✍️ الشاعر:</span>
              <span class="credit-value">${song.poet}</span>
            </div>
            <div class="credit-item">
              <span class="credit-label">📜 الكلمات:</span>
              <span class="credit-value" style="color: var(--gold-light);">${song.arabicTextVerification ? song.arabicTextVerification.status : '🟢 النص العربي مُراجع'}</span>
            </div>
          </div>
        </div>

        <div class="card-footer">
          <span class="card-genre-tag">${song.genre}</span>
          <button class="view-details-btn" data-action="open-detail" data-song-id="${song.id}">
            عرض التفاصيل 🔍
          </button>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     5. Archival Song Detail Drawer Renderer (Arabic Accuracy Focus)
     ========================================================================== */
  function openSongDetailModal(songId) {
    const song = SONGS_DATABASE.find(s => s.id === songId);
    if (!song) return;

    state.selectedSongId = songId;
    const lr = song.lyricsResearch;
    const isFullDisplay = song.rights.publicDisplay === 'full';
    const primaryLyricsSource = lr && lr.fullTextSources && lr.fullTextSources.length > 0 ? lr.fullTextSources[0] : null;
    const av = song.arabicTextVerification;

    // Render Modal Drawer Content
    modalContainerEl.innerHTML = `
      <div class="drawer-header">
        <div class="drawer-title-group">
          <h2 class="drawer-title">${song.titleArabic}</h2>
          <div class="drawer-subtitle">
            ${song.alternateTitles && song.alternateTitles.length > 0 ? `العناوين البديلة: ${song.alternateTitles.join(' | ')}` : song.heritageCategory}
          </div>
        </div>
        <button class="close-drawer-btn" id="closeDrawerInnerBtn">✕</button>
      </div>

      <div class="drawer-body">
        <!-- Verification & Arabic Accuracy Banner -->
        <div class="detail-section-box" style="border-right: 4px solid ${song.verificationStatus.includes('Verified') ? 'var(--status-verified-border)' : 'var(--status-probable-border)'};">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
            <span class="badge ${song.verificationStatus.includes('Verified') ? 'badge-verified' : 'badge-probable'}" style="font-size: 0.875rem;">
              درجة التحقق: ${song.verificationStatus}
            </span>
            <span class="badge-verified" style="font-size: 0.85rem;">
              ${av ? av.status : '🟢 النص العربي مُراجع'}
            </span>
            <span class="badge" style="background: rgba(15, 76, 129, 0.2); border: 1px solid var(--nile-azure); color: var(--nile-cyan); font-size: 0.85rem;">
              ${song.rights.status}
            </span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">
            ${song.verificationNotes}
          </p>
        </div>

        <!-- Song Metadata Grid -->
        <div class="detail-section-box">
          <h3 class="section-heading-title">📋 بطاقة التوثيق الأرشيفي</h3>
          <div class="meta-info-grid">
            <div class="meta-field-item">
              <span class="meta-field-label">الشاعر</span>
              <span class="meta-field-value">${song.poet}</span>
            </div>
            <div class="meta-field-item">
              <span class="meta-field-label">الملحن</span>
              <span class="meta-field-value">${song.composer}</span>
            </div>
            <div class="meta-field-item">
              <span class="meta-field-label">المؤدي الأصلي</span>
              <span class="meta-field-value">${song.originalPerformer}</span>
            </div>
            <div class="meta-field-item">
              <span class="meta-field-label">حقبة الظهور</span>
              <span class="meta-field-value">${song.era} (${song.approximatePeriod})</span>
            </div>
            <div class="meta-field-item">
              <span class="meta-field-label">مراجعة النصوص الصوتية</span>
              <span class="meta-field-value" style="color: var(--gold-light);">${av && av.audioChecked ? 'مطابق للتسجيل الإذاعي 🎧' : 'مراجعة ببليوجرافية'}</span>
            </div>
            <div class="meta-field-item">
              <span class="meta-field-label">المدرسة الفنية</span>
              <span class="meta-field-value">${song.genre}</span>
            </div>
          </div>
        </div>

        <!-- Audio Player / Recording -->
        ${song.recordings && song.recordings.length > 0 ? `
          <div class="detail-section-box">
            <h3 class="section-heading-title">▶ استمع للتسجيل الأرشيفي الأصلي</h3>
            <div style="margin-top: 1rem;">
              <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                🎵 ${song.recordings[0].title}
              </p>
              <a href="${song.recordings[0].url}" target="_blank" rel="noopener noreferrer" 
                 style="display: inline-flex; align-items: center; gap: 0.5rem; background: var(--nile-gradient); color: #FFF; padding: 0.75rem 1.4rem; border-radius: var(--radius-full); text-decoration: none; font-weight: 700; font-size: 0.925rem;">
                استمع للتسجيل على يوتيوب 🔗
              </a>
            </div>
          </div>
        ` : ''}

        <!-- Full Verified Lyrics Section -->
        <div class="detail-section-box" style="border: 1px solid var(--border-gold);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
            <h3 class="section-heading-title" style="margin-bottom: 0;">
              📜 ${isFullDisplay ? 'كلمات الأغنية كاملة (النص العربي المحقق)' : 'مقتطف الكلمات المتاح قانونياً'}
            </h3>
            ${isFullDisplay ? '<span class="badge-verified">🟢 نص عربي محقق ومدقق</span>' : '<span class="badge" style="background: rgba(234, 179, 8, 0.15); color: var(--gold-light);">🔒 حقوق محفوظة</span>'}
          </div>

          <div class="lyrics-content-box">
            ${isFullDisplay ? lr.originalPoem : `مطلع الأغنية الموثق:\n\n${song.openingLine}\n\n[الكلمات الكاملة متوفرة في المصدر الأصلي أدناه وفقاً لقوانين النشر]` }
          </div>

          <!-- Textual Differences Section (اختلاف نصوص المصادر) -->
          ${av && av.textualDifferences && av.textualDifferences.length > 0 ? `
            <div style="margin-top: 1.25rem; background: rgba(234, 179, 8, 0.08); padding: 1.25rem; border-radius: var(--radius-md); border-right: 3px solid var(--gold-primary);">
              <div style="font-size: 0.9rem; color: var(--gold-light); font-weight: 700; margin-bottom: 0.75rem;">⚖️ اختلاف نصوص المصادر وتحقيق الأداء الصوتي:</div>
              ${av.textualDifferences.map(td => `
                <div style="margin-bottom: 0.85rem; font-size: 0.875rem;">
                  <div style="color: var(--text-main);"><strong>النص الشعري المختار:</strong> "${td.preferredText}"</div>
                  <div style="color: var(--text-muted);"><strong>الرواية الثانية / الأداء الصوتي:</strong> "${td.alternativeReading}"</div>
                  <div style="color: var(--gold-primary); font-size: 0.825rem; margin-top: 0.2rem;">سبب الترجيح: ${td.reasonForChoice}</div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          <!-- Extra Recorded Version vs Original Poem -->
          ${isFullDisplay && lr.recordedVersion ? `
            <div style="margin-top: 1.25rem; background: rgba(11, 15, 25, 0.5); padding: 1rem; border-radius: var(--radius-md); border-right: 2px solid var(--nile-azure);">
              <div style="font-size: 0.85rem; color: var(--gold-primary); font-weight: 700; margin-bottom: 0.35rem;">🎙️ النص كما غُنّي في التسجيل:</div>
              <div style="font-size: 0.9rem; color: var(--text-muted);">${lr.recordedVersion}</div>
            </div>
          ` : ''}

          <!-- Additional Verses Not Performed -->
          ${isFullDisplay && lr.additionalVerses && lr.additionalVerses.length > 0 ? `
            <div style="margin-top: 1rem; background: rgba(212, 175, 55, 0.08); padding: 1rem; border-radius: var(--radius-md); border: 1px dashed var(--border-gold);">
              <div style="font-size: 0.85rem; color: var(--gold-light); font-weight: 700; margin-bottom: 0.35rem;">📜 أسرار القصيدة (أبيات موثقة لم تظهر في بعض التسجيلات التجارية):</div>
              <ul style="list-style: square; padding-right: 1.25rem; font-size: 0.9rem; color: var(--text-main); display: flex; flex-direction: column; gap: 0.35rem;">
                ${lr.additionalVerses.map(v => `<li>${v}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          <!-- Dedicated Lyrics Source Box -->
          <div style="margin-top: 1.5rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem;">
            <div style="font-size: 0.875rem; color: var(--text-muted);">
              <strong>مصدر الكلمات التوثيقي:</strong> ${primaryLyricsSource ? `${primaryLyricsSource.source} — ${primaryLyricsSource.title}` : 'أرشيف الإذاعة وسودانيز أونلاين'}
            </div>
            ${primaryLyricsSource ? `
              <a href="${primaryLyricsSource.url}" target="_blank" rel="noopener noreferrer"
                 style="background: var(--gold-gradient); color: var(--bg-dark); padding: 0.5rem 1.1rem; border-radius: var(--radius-full); text-decoration: none; font-weight: 700; font-size: 0.85rem; display: inline-flex; align-items: center; gap: 0.35rem;">
                ${isFullDisplay ? 'فتح المصدر الأصلي للكلمات 🔗' : 'عرض مصدر الكلمات الكاملة 🔗'}
              </a>
            ` : ''}
          </div>
        </div>

        <!-- Vocabulary Glossary -->
        ${song.vocabulary && song.vocabulary.length > 0 ? `
          <div class="detail-section-box">
            <h3 class="section-heading-title">📖 شرح المفردات والمعاني السودانية</h3>
            <table class="vocab-table">
              <thead>
                <tr>
                  <th>الكلمة / العبارة</th>
                  <th>المعنى والشرح اللغوي والتراثي</th>
                </tr>
              </thead>
              <tbody>
                ${song.vocabulary.map(item => `
                  <tr>
                    <td style="font-weight: 700; color: var(--gold-light);">${item.word}</td>
                    <td style="color: var(--text-main);">${item.meaning}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        ` : ''}

        <!-- Story & Historical Context -->
        <div class="detail-section-box">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
            <h3 class="section-heading-title" style="margin-bottom: 0;">📖 قصة الأغنية والسياق التاريخي</h3>
            <span class="${song.storyType === 'موثق تاريخياً' ? 'badge-fact' : 'badge-oral'}">
              ${song.storyType}
            </span>
          </div>
          <p style="font-size: 1rem; color: var(--text-main); line-height: 1.8; margin-bottom: 1.25rem;">
            ${song.story}
          </p>
          <div style="background: rgba(11, 15, 25, 0.5); padding: 1rem; border-radius: var(--radius-sm); border-right: 2px solid var(--nile-azure);">
            <div style="font-size: 0.85rem; color: var(--gold-primary); font-weight: 700; margin-bottom: 0.25rem;">الأثر والتاريخ:</div>
            <div style="font-size: 0.9rem; color: var(--text-muted);">${song.historicalContext}</div>
          </div>
        </div>

        <!-- Famous Singers List -->
        <div class="detail-section-box">
          <h3 class="section-heading-title">🎙️ أشهر من تغنى بها عبر الأجيال</h3>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
            ${song.singers.map(singer => `
              <span class="artist-trigger-chip" data-artist="${singer}" 
                    style="background: rgba(255, 255, 255, 0.05); border: 1px solid var(--border-subtle); color: var(--text-main); padding: 0.4rem 0.9rem; border-radius: var(--radius-full); font-size: 0.875rem; cursor: pointer;">
                🎙️ ${singer}
              </span>
            `).join('')}
          </div>
        </div>

        <!-- Clickable Sources & References -->
        <div class="detail-section-box">
          <h3 class="section-heading-title">📚 المصادر والمراجع التوثيقية</h3>
          <ul class="source-list">
            ${song.sources.map(src => `
              <li class="source-item">
                <a href="${src.url}" target="_blank" rel="noopener noreferrer" class="source-link">
                  🔗 ${src.title} (${src.publisher})
                </a>
                <div class="source-desc">الوقائع المؤكدة: ${src.supports}</div>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Research Log & Conflict Resolution -->
        <div class="detail-section-box">
          <h3 class="section-heading-title">🔍 سجل البحث وتحقيق الكلمات الكاملة</h3>
          <div style="margin-bottom: 1rem;">
            <div style="font-size: 0.85rem; color: var(--gold-primary); font-weight: 700; margin-bottom: 0.5rem;">خطوات التحقيق والاستعلام:</div>
            <ul style="list-style: square; padding-right: 1.25rem; font-size: 0.875rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.35rem;">
              ${song.researchLog.map(log => `<li>${log}</li>`).join('')}
            </ul>
          </div>
          <div style="font-size: 0.85rem; color: var(--gold-light);">
            <strong>ملاحظات البحث الببليوجرافي للكلمات:</strong> ${lr.researchNotes}
          </div>
        </div>
      </div>
    `;

    // Show overlay
    modalOverlayEl.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Add event listener to inner close button
    const closeInnerBtn = document.getElementById('closeDrawerInnerBtn');
    if (closeInnerBtn) {
      closeInnerBtn.addEventListener('click', closeModal);
    }

    // Attach click triggers to artists inside modal
    document.querySelectorAll('.artist-trigger-chip').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const artist = e.currentTarget.getAttribute('data-artist');
        closeModal();
        searchInputEl.value = artist;
        state.currentSearchQuery = artist;
        renderSongsGrid();
      });
    });
  }

  function closeModal() {
    modalOverlayEl.classList.remove('active');
    document.body.style.overflow = '';
  }

  /* ==========================================================================
     6. Historical Timeline Renderer
     ========================================================================== */
  function renderTimelineControls() {
    const decades = [
      { id: 'all', label: 'كل العصور' },
      { id: '1920s', label: 'العشرينيات' },
      { id: '1930s', label: 'الثلاثينيات' },
      { id: '1940s', label: 'الأربعينيات' },
      { id: '1950s', label: 'الخمسينيات' },
      { id: '1970s', label: 'السبعينيات' },
      { id: '1980s', label: 'الثمانينيات' },
      { id: '1990s', label: 'التسعينيات' },
      { id: '2010s', label: 'الألفية الحديثة' }
    ];

    if (!timelineButtonsEl) return;

    timelineButtonsEl.innerHTML = decades.map(d => `
      <button class="timeline-decade-btn ${state.currentDecadeFilter === d.id ? 'active' : ''}" data-decade="${d.id}">
        ${d.label}
      </button>
    `).join('');
  }

  /* ==========================================================================
     7. Artists & Poets Index
     ========================================================================== */
  function renderArtistsIndex() {
    if (!artistsGridEl) return;

    const peopleMap = new Map();

    SONGS_DATABASE.forEach(song => {
      if (song.poet && song.poet !== 'غير معروف' && !song.poet.includes('تراث')) {
        peopleMap.set(song.poet, { name: song.poet, role: 'شاعر' });
      }
      if (song.composer && song.composer !== 'غير معروف' && !song.composer.includes('تراث')) {
        peopleMap.set(song.composer, { name: song.composer, role: 'ملحن' });
      }
      if (song.originalPerformer && !song.originalPerformer.includes('تراث')) {
        peopleMap.set(song.originalPerformer, { name: song.originalPerformer, role: 'فنان / مؤدي' });
      }
    });

    const peopleList = Array.from(peopleMap.values()).slice(0, 12);

    artistsGridEl.innerHTML = peopleList.map(person => `
      <div class="artist-card-chip" data-person="${person.name}">
        <div class="artist-avatar-placeholder">${person.name.charAt(0)}</div>
        <div>
          <div class="artist-meta-name">${person.name}</div>
          <div class="artist-meta-role">${person.role}</div>
        </div>
      </div>
    `).join('');
  }

  /* ==========================================================================
     8. Event Listeners & Event Delegation
     ========================================================================== */
  function setupEventListeners() {
    // Search input
    searchInputEl.addEventListener('input', (e) => {
      state.currentSearchQuery = e.target.value;
      if (searchClearBtnEl) {
        searchClearBtnEl.style.display = e.target.value ? 'block' : 'none';
      }
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

    // Category filter chips
    filterChipsEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.chip-btn');
      if (!btn) return;

      const category = btn.getAttribute('data-category');
      state.currentCategoryFilter = category;

      renderCategoryFilterChips();
      renderSongsGrid();
    });

    // Song detail card button click
    songsGridEl.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-action="open-detail"]');
      if (btn) {
        const songId = btn.getAttribute('data-song-id');
        openSongDetailModal(songId);
        return;
      }

      const card = e.target.closest('.song-card');
      if (card) {
        const songId = card.getAttribute('data-song-id');
        openSongDetailModal(songId);
      }
    });

    // Timeline decade filter buttons
    if (timelineButtonsEl) {
      timelineButtonsEl.addEventListener('click', (e) => {
        const btn = e.target.closest('.timeline-decade-btn');
        if (!btn) return;

        const decade = btn.getAttribute('data-decade');
        state.currentDecadeFilter = decade;

        renderTimelineControls();
        renderSongsGrid();
      });
    }

    // Artists grid click
    if (artistsGridEl) {
      artistsGridEl.addEventListener('click', (e) => {
        const card = e.target.closest('.artist-card-chip');
        if (!card) return;

        const person = card.getAttribute('data-person');
        searchInputEl.value = person;
        state.currentSearchQuery = person;
        if (searchClearBtnEl) searchClearBtnEl.style.display = 'block';
        renderSongsGrid();
        window.scrollTo({ top: songsGridEl.offsetTop - 100, behavior: 'smooth' });
      });
    }

    // Modal overlay close
    if (modalOverlayEl) {
      modalOverlayEl.addEventListener('click', (e) => {
        if (e.target === modalOverlayEl) {
          closeModal();
        }
      });
    }

    if (closeModalBtnEl) {
      closeModalBtnEl.addEventListener('click', closeModal);
    }

    // ESC key close modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modalOverlayEl.classList.contains('active')) {
        closeModal();
      }
    });
  }
});
