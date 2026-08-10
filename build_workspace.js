const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const workspaceHtml = `
  <!-- ==========================================================================
       VIEW 6: MUSICIAN REHEARSAL WORKSPACE (وضع البروفة)
       ========================================================================== -->
  <main class="main-content-view" id="workspaceView" style="display: none;">
    <div class="setlist-header-box" style="margin-bottom: 2rem;">
      <div>
        <h2 class="setlist-title">🎧 مساحة عمل الموسيقي (وضع البروفة)</h2>
        <p class="setlist-subtitle">ورشة إدخال وتعديل البيانات الموسيقية الحية من قبل الأستاذ حسن غزالي وعوض حمدتو.</p>
      </div>
      <div style="display: flex; gap: 1rem;">
        <button class="add-song-setlist-btn" id="saveRehearsalDataBtn" style="background: var(--green-valid); border-color: var(--green-valid);">
          💾 حفظ البروفة
        </button>
        <button class="add-song-setlist-btn" id="exportRehearsalBtn" style="background: transparent;">
          📤 تصدير البيانات
        </button>
      </div>
    </div>

    <!-- Song Selector -->
    <div class="detail-section-box" style="margin-bottom: 2rem;">
      <h3 class="section-heading-title">الأغنية قيد البروفة</h3>
      <select id="workspaceSongSelect" class="form-select" style="font-size: 1.2rem; padding: 0.75rem;"></select>
      <div id="workspaceSongStats" style="margin-top: 1rem; color: var(--gold-light); font-size: 0.9rem;"></div>
    </div>

    <div class="workspace-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
      <!-- Column 1: Music Data -->
      <div class="workspace-col">
        <div class="detail-section-box">
          <h3 class="section-heading-title">🎹 البيانات الموسيقية الأساسية</h3>
          
          <div class="form-row" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
            <div class="form-group" style="flex: 1;">
              <label class="form-label">السلم الأصلي:</label>
              <input type="text" id="wsOriginalKey" class="form-input" disabled>
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">السلم المستخدم (Performance Key):</label>
              <input type="text" id="wsPerfKey" class="form-input">
            </div>
            <div class="form-group" style="flex: 1;">
               <label class="form-label">أداة النقل (Transpose):</label>
               <div style="display: flex; gap: 0.25rem;">
                 <button class="speed-btn ws-transpose-btn" data-val="-2">-2</button>
                 <button class="speed-btn ws-transpose-btn" data-val="-1">-1</button>
                 <button class="speed-btn ws-transpose-btn" data-val="0">Orig</button>
                 <button class="speed-btn ws-transpose-btn" data-val="1">+1</button>
                 <button class="speed-btn ws-transpose-btn" data-val="2">+2</button>
               </div>
            </div>
          </div>

          <div class="form-row" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
            <div class="form-group" style="flex: 1;">
              <label class="form-label">الإيقاع (Rhythm):</label>
              <input type="text" id="wsRhythm" class="form-input">
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">BPM:</label>
              <input type="number" id="wsBpm" class="form-input">
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">Time Signature:</label>
              <input type="text" id="wsTimeSig" class="form-input" placeholder="4/4">
            </div>
          </div>

          <div class="form-row" style="display: flex; gap: 1rem; margin-bottom: 1rem;">
             <div class="form-group" style="flex: 1;">
              <label class="form-label">إشارة الدخول (Count-in):</label>
              <input type="text" id="wsCountIn" class="form-input" placeholder="1, 2, 3, 4">
            </div>
            <div class="form-group" style="flex: 1;">
              <label class="form-label">عدد موازير المقدمة:</label>
              <input type="number" id="wsIntroBars" class="form-input">
            </div>
          </div>
        </div>

        <!-- Fast Chord Entry -->
        <div class="detail-section-box" style="margin-top: 1.5rem;">
          <h3 class="section-heading-title">🎸 إدخال الكوردات السريع</h3>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">افصل بين الكوردات باستخدام | (مثال: Eb | Abm | Bb7)</p>
          <div class="form-group">
            <label class="form-label">كوردات المقدمة:</label>
            <input type="text" id="wsIntroChords" class="form-input">
          </div>
          <div class="form-group">
            <label class="form-label">كوردات المقطع (Verse):</label>
            <input type="text" id="wsVerseChords" class="form-input">
          </div>
          <div class="form-group">
            <label class="form-label">كوردات اللازمة (Refrain):</label>
            <input type="text" id="wsRefrainChords" class="form-input">
          </div>
          <div class="form-group">
            <label class="form-label">كوردات الفاصل (Break):</label>
            <input type="text" id="wsBreakChords" class="form-input">
          </div>
        </div>

        <!-- Note Entry & Measure Editor -->
        <div class="detail-section-box" style="margin-top: 1.5rem;">
          <h3 class="section-heading-title">🎼 محرر النوتة الموسيقية</h3>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">أدخل النوتات بنظام الأحرف (Eb4 q, F4 e) أو الدرجات (1 q, 2 e). سيتم رسمها عبر VexFlow.</p>
          <div class="form-group">
             <label class="form-label">نوتات المقدمة:</label>
             <textarea id="wsIntroNotes" class="form-textarea" rows="3"></textarea>
          </div>
          <div class="form-group">
             <label class="form-label">نوتات المقطع (Vocal Melody):</label>
             <textarea id="wsVerseNotes" class="form-textarea" rows="3"></textarea>
          </div>
          <button class="add-song-setlist-btn" id="wsRenderScoreBtn" style="width: 100%; margin-top: 1rem;">
            🎶 تحديث وعرض النوتة (VexFlow)
          </button>
          
          <div id="wsScoreCanvas" style="background: white; border-radius: 8px; margin-top: 1rem; overflow-x: auto; padding: 1rem; color: black; text-align: center;">
             <!-- VexFlow goes here -->
             <span id="wsScoreCanvasPlaceholder" style="color: #666;">اضغط تحديث وعرض النوتة لرسم المدرج الموسيقي.</span>
          </div>
        </div>
      </div>

      <!-- Column 2: Lyrics & Structure -->
      <div class="workspace-col">
        
        <!-- Awad Vocal Test -->
        <div class="detail-section-box" style="border-color: var(--blue-glow);">
          <h3 class="section-heading-title">🎤 اختبار السلم لعوض حمدتو</h3>
          <div style="display: flex; gap: 1rem; margin-top: 1rem; align-items: center;">
             <button class="speed-btn ws-vocal-test-btn" data-val="down">👇 تجربة سلم أقل</button>
             <button class="speed-btn ws-vocal-test-btn" data-val="up">👆 تجربة سلم أعلى</button>
             <span id="wsCurrentVocalKey" style="font-size: 1.2rem; font-weight: bold; color: var(--gold-light);">...</span>
          </div>
          <div style="display: flex; gap: 1rem; margin-top: 1rem;">
             <label><input type="radio" name="wsKeyComfort" value="مريح"> مريح جداً</label>
             <label><input type="radio" name="wsKeyComfort" value="عالي"> عالي</label>
             <label><input type="radio" name="wsKeyComfort" value="واطي"> واطي</label>
          </div>
        </div>

        <!-- Lyrics Selector -->
        <div class="detail-section-box" style="margin-top: 1.5rem;">
          <h3 class="section-heading-title">📝 هندسة النص للغناء (Performance Lyrics)</h3>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">حدد المقاطع التي سيغنيها عوض.</p>
          <div id="wsLyricsBuilder" style="display: flex; flex-direction: column; gap: 0.5rem; max-height: 400px; overflow-y: auto;">
             <!-- Populated dynamically -->
          </div>
        </div>

        <!-- Final Structure -->
        <div class="detail-section-box" style="margin-top: 1.5rem;">
          <h3 class="section-heading-title">🏗️ الهيكل النهائي للأداء</h3>
          <textarea id="wsPerformanceStructure" class="form-textarea" rows="5" placeholder="INTRO - 4 bars\nVERSE 1\nREFRAIN x2\nENDING..."></textarea>
        </div>
        
        <div class="detail-section-box" style="margin-top: 1.5rem;">
          <h3 class="section-heading-title">🏁 القفلة (Ending)</h3>
          <input type="text" id="wsEndingNotes" class="form-input" placeholder="Fade out / قفلة مفاجئة / ...">
        </div>

        <!-- Approvals -->
        <div class="detail-section-box" style="margin-top: 1.5rem; background: rgba(0,0,0,0.3);">
          <h3 class="section-heading-title">✅ اعتمادات البروفة</h3>
          <div style="display: flex; gap: 2rem;">
            <div style="flex: 1; border-right: 1px solid var(--border-subtle); padding-right: 1rem;">
              <h4 style="color: var(--gold-light); margin-bottom: 0.5rem;">🎹 اعتماد حسن غزالي</h4>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkHassanKey"> السلم</label>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkHassanRhythm"> الإيقاع و BPM</label>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkHassanChords"> الكوردات</label>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkHassanMelody"> النوتة</label>
              <button class="speed-btn" id="btnHassanApprove" style="margin-top: 0.5rem; width: 100%;">اعتماد النوتة</button>
            </div>
            <div style="flex: 1;">
              <h4 style="color: var(--gold-light); margin-bottom: 0.5rem;">🎤 اعتماد عوض حمدتو</h4>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkAwadKey"> السلم مريح</label>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkAwadLyrics"> ترتيب النص</label>
              <label style="display: block; margin-bottom: 0.25rem;"><input type="checkbox" id="chkAwadRepeats"> الإعادات</label>
              <button class="speed-btn" id="btnAwadApprove" style="margin-top: 0.5rem; width: 100%;">جاهزة للغناء</button>
            </div>
          </div>
          <div id="wsReadyStatusBadge" style="margin-top: 1rem; padding: 1rem; text-align: center; font-weight: bold; font-size: 1.2rem; border-radius: 8px; border: 1px solid var(--border-subtle);">
            🔴 غير جاهزة
          </div>
        </div>
        
        <!-- Print Sheets -->
        <div class="detail-section-box" style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
           <button class="add-song-setlist-btn" id="wsPrintHassan" style="width: 100%;">🖨️ ورقة حسن غزالي (Full Score)</button>
           <button class="add-song-setlist-btn" id="wsPrintAwad" style="width: 100%;">🖨️ ورقة عوض حمدتو (Lyrics & Cues)</button>
        </div>
      </div>
    </div>
  </main>
`;

html = html.replace('<!-- ==========================================================================\n       VIEW 3: SESSION SETLIST', workspaceHtml + '\n  <!-- ==========================================================================\n       VIEW 3: SESSION SETLIST');

const navItem = `
        <li class="sidebar-nav-item" data-view="proofView">
          <span class="nav-icon">🧾</span>
          <span class="nav-text">دليل الإثبات</span>
        </li>
        <li class="sidebar-nav-item" data-view="workspaceView" style="margin-top: 2rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
          <span class="nav-icon">🎧</span>
          <span class="nav-text">وضع البروفة</span>
        </li>`;

html = html.replace(`
        <li class="sidebar-nav-item" data-view="proofView">
          <span class="nav-icon">🧾</span>
          <span class="nav-text">دليل الإثبات</span>
        </li>`, navItem);

// Add workspace.js script tag
html = html.replace('<script src="script.js"></script>', '<script src="script.js"></script>\n  <script src="workspace.js"></script>');

fs.writeFileSync('index.html', html);
console.log('Injected workspace view into index.html');
