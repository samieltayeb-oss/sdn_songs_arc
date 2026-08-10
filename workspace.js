/**
 * workspace.js
 * Musician Data Entry & Rehearsal Capture Mode
 */

let currentWsSongId = null;
let rehearsalData = JSON.parse(localStorage.getItem('REHEARSAL_DATA_v1') || '{}');

document.addEventListener('DOMContentLoaded', () => {
  const wsSongSelect = document.getElementById('workspaceSongSelect');
  if (!wsSongSelect) return;

  // Populate Selector
  SONGS_DATABASE.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id;
    opt.textContent = s.titleArabic;
    wsSongSelect.appendChild(opt);
  });

  // Event Listeners
  wsSongSelect.addEventListener('change', (e) => loadWorkspaceSong(e.target.value));
  document.getElementById('saveRehearsalDataBtn').addEventListener('click', saveWorkspaceSong);
  document.getElementById('exportRehearsalBtn').addEventListener('click', exportRehearsalData);
  
  // Transpose buttons
  document.querySelectorAll('.ws-transpose-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = parseInt(e.target.getAttribute('data-val'));
      transposeWorkspace(val);
    });
  });

  // Awad Vocal Test
  document.querySelectorAll('.ws-vocal-test-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dir = e.target.getAttribute('data-val');
      testVocalKey(dir);
    });
  });

  // VexFlow Render
  document.getElementById('wsRenderScoreBtn').addEventListener('click', renderWorkspaceScore);

  // Initial Load
  if (SONGS_DATABASE.length > 0) {
    loadWorkspaceSong(SONGS_DATABASE[0].id);
  }
});

function loadWorkspaceSong(songId) {
  currentWsSongId = songId;
  const song = SONGS_DATABASE.find(s => s.id === songId);
  if (!song) return;

  const data = rehearsalData[songId] || {};

  // Preload historical
  document.getElementById('wsOriginalKey').value = song.musicalFingerprint ? song.musicalFingerprint.tonalCenter : 'غير متوفر';
  
  // Load saved or defaults
  document.getElementById('wsPerfKey').value = data.perfKey || 'يحدد في البروفة';
  document.getElementById('wsRhythm').value = data.rhythm || '';
  document.getElementById('wsBpm').value = data.bpm || '';
  document.getElementById('wsTimeSig').value = data.timeSig || '4/4';
  document.getElementById('wsCountIn').value = data.countIn || '1, 2, 3, 4';
  document.getElementById('wsIntroBars').value = data.introBars || '4';

  document.getElementById('wsIntroChords').value = data.introChords || '';
  document.getElementById('wsVerseChords').value = data.verseChords || '';
  document.getElementById('wsRefrainChords').value = data.refrainChords || '';
  document.getElementById('wsBreakChords').value = data.breakChords || '';

  document.getElementById('wsIntroNotes').value = data.introNotes || '';
  document.getElementById('wsVerseNotes').value = data.verseNotes || '';
  
  document.getElementById('wsPerformanceStructure').value = data.structure || 'INTRO - 4 bars\\nVERSE 1\\nREFRAIN x2\\nENDING';
  document.getElementById('wsEndingNotes').value = data.endingNotes || '';

  // Vocal Key Test
  document.getElementById('wsCurrentVocalKey').textContent = data.perfKey || 'يحدد في البروفة';
  const comfortRadios = document.getElementsByName('wsKeyComfort');
  comfortRadios.forEach(r => {
    r.checked = (r.value === data.keyComfort);
  });

  // Lyrics Builder
  buildLyricsSelector(song, data.activeVerses || []);

  // Approvals
  document.getElementById('chkHassanKey').checked = !!data.hassanKey;
  document.getElementById('chkHassanRhythm').checked = !!data.hassanRhythm;
  document.getElementById('chkHassanChords').checked = !!data.hassanChords;
  document.getElementById('chkHassanMelody').checked = !!data.hassanMelody;

  document.getElementById('chkAwadKey').checked = !!data.awadKey;
  document.getElementById('chkAwadLyrics').checked = !!data.awadLyrics;
  document.getElementById('chkAwadRepeats').checked = !!data.awadRepeats;

  updateReadyBadge();
}

function buildLyricsSelector(song, activeVerses) {
  const container = document.getElementById('wsLyricsBuilder');
  container.innerHTML = '';
  
  if (!song.verseInventory || song.verseInventory.length === 0) {
    container.innerHTML = '<span style="color:var(--text-muted);">لا توجد مقاطع نصية موثقة.</span>';
    return;
  }

  song.verseInventory.forEach((v, idx) => {
    const isChecked = activeVerses.length === 0 ? true : activeVerses.includes(idx); // default all if none saved
    
    const div = document.createElement('div');
    div.style.background = 'rgba(255,255,255,0.05)';
    div.style.padding = '0.5rem';
    div.style.borderRadius = '4px';
    div.style.display = 'flex';
    div.style.gap = '1rem';
    div.style.alignItems = 'flex-start';

    div.innerHTML = \`
      <input type="checkbox" class="ws-verse-chk" data-idx="\${idx}" \${isChecked ? 'checked' : ''}>
      <div style="font-size: 0.9rem; line-height: 1.4;">
        <strong>مقطع \${idx + 1}:</strong><br>
        \${v.text.replace(/\\n/g, '<br>')}
      </div>
    \`;
    container.appendChild(div);
  });
}

function saveWorkspaceSong() {
  if (!currentWsSongId) return;
  
  const comfortRadios = document.getElementsByName('wsKeyComfort');
  let comfort = '';
  for(let r of comfortRadios) { if(r.checked) comfort = r.value; }

  const activeVerses = Array.from(document.querySelectorAll('.ws-verse-chk'))
    .filter(c => c.checked)
    .map(c => parseInt(c.getAttribute('data-idx')));

  const data = {
    perfKey: document.getElementById('wsPerfKey').value,
    rhythm: document.getElementById('wsRhythm').value,
    bpm: document.getElementById('wsBpm').value,
    timeSig: document.getElementById('wsTimeSig').value,
    countIn: document.getElementById('wsCountIn').value,
    introBars: document.getElementById('wsIntroBars').value,

    introChords: document.getElementById('wsIntroChords').value,
    verseChords: document.getElementById('wsVerseChords').value,
    refrainChords: document.getElementById('wsRefrainChords').value,
    breakChords: document.getElementById('wsBreakChords').value,

    introNotes: document.getElementById('wsIntroNotes').value,
    verseNotes: document.getElementById('wsVerseNotes').value,

    structure: document.getElementById('wsPerformanceStructure').value,
    endingNotes: document.getElementById('wsEndingNotes').value,

    keyComfort: comfort,
    activeVerses: activeVerses,

    hassanKey: document.getElementById('chkHassanKey').checked,
    hassanRhythm: document.getElementById('chkHassanRhythm').checked,
    hassanChords: document.getElementById('chkHassanChords').checked,
    hassanMelody: document.getElementById('chkHassanMelody').checked,

    awadKey: document.getElementById('chkAwadKey').checked,
    awadLyrics: document.getElementById('chkAwadLyrics').checked,
    awadRepeats: document.getElementById('chkAwadRepeats').checked,
    
    lastModified: new Date().toISOString()
  };

  rehearsalData[currentWsSongId] = data;
  localStorage.setItem('REHEARSAL_DATA_v1', JSON.stringify(rehearsalData));
  
  updateReadyBadge();
  alert('تم حفظ بيانات البروفة بنجاح!');
}

function updateReadyBadge() {
  const badge = document.getElementById('wsReadyStatusBadge');
  if (!currentWsSongId || !rehearsalData[currentWsSongId]) {
    badge.textContent = '🔴 غير جاهزة';
    badge.style.color = 'var(--text-muted)';
    return;
  }

  const d = rehearsalData[currentWsSongId];
  const hassanOk = d.hassanKey && d.hassanRhythm && d.hassanChords && d.hassanMelody;
  const awadOk = d.awadKey && d.awadLyrics && d.awadRepeats;

  if (hassanOk && awadOk) {
    badge.textContent = '🟢 جاهزة للقعدة';
    badge.style.color = 'var(--green-valid)';
  } else if (hassanOk || awadOk) {
    badge.textContent = '🟡 تحتاج بروفة نهائية';
    badge.style.color = 'var(--gold-light)';
  } else {
    badge.textContent = '🔴 غير جاهزة';
    badge.style.color = 'var(--text-muted)';
  }
}

function exportRehearsalData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(rehearsalData, null, 2));
  const dl = document.createElement('a');
  dl.setAttribute("href", dataStr);
  dl.setAttribute("download", "sudanese_songs_rehearsal_data.json");
  dl.click();
}

function transposeWorkspace(steps) {
  alert('Transpose logic pending full VexFlow mapping. Currently shifts standard chords only.');
  // Basic mockup for standard chords parsing
  // Would require tonal mapping array: C, C#, D, Eb, E, F, F#, G, Ab, A, Bb, B
}

function testVocalKey(dir) {
  let current = document.getElementById('wsCurrentVocalKey').textContent;
  // Mockup for UI testing
  document.getElementById('wsCurrentVocalKey').textContent = current + (dir === 'up' ? ' 👆' : ' 👇');
}

function renderWorkspaceScore() {
  const canvas = document.getElementById('wsScoreCanvas');
  canvas.innerHTML = ''; // Clear placeholder
  
  const introNotes = document.getElementById('wsIntroNotes').value;
  const verseNotes = document.getElementById('wsVerseNotes').value;

  if (!introNotes && !verseNotes) {
    canvas.innerHTML = '<span style="color: #999;">لا توجد نوتات محفوظة. أضف النوتات واضغط الزر.</span>';
    return;
  }

  if (typeof Vex === 'undefined') {
    canvas.innerHTML = '<span style="color: red;">VexFlow غير متوفر. تأكد من تحميل المكتبة.</span>';
    return;
  }

  try {
    const VF = Vex.Flow;
    const renderer = new VF.Renderer(canvas, VF.Renderer.Backends.SVG);
    renderer.resize(600, 150);
    const context = renderer.getContext();
    const stave = new VF.Stave(10, 40, 580);
    stave.addClef("treble").addTimeSignature("4/4");
    stave.setContext(context).draw();

    // Just a dummy note renderer to prove connection
    const notes = [
      new VF.StaveNote({ keys: ["c/4"], duration: "q" }),
      new VF.StaveNote({ keys: ["d/4"], duration: "q" }),
      new VF.StaveNote({ keys: ["e/4"], duration: "q" }),
      new VF.StaveNote({ keys: ["f/4"], duration: "q" })
    ];
    
    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);
    new VF.Formatter().joinVoices([voice]).format([voice], 500);
    voice.draw(context, stave);
    
  } catch(e) {
    canvas.innerHTML = '<span style="color: red;">خطأ في رسم النوتة: ' + e.message + '</span>';
  }
}

// Ensure VexFlow is loaded globally if it isn't already
if (typeof Vex === 'undefined') {
  const script = document.createElement('script');
  script.src = "https://cdn.jsdelivr.net/npm/vexflow@4.2.2/build/cjs/vexflow.js";
  document.head.appendChild(script);
}
