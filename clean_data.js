const fs = require('fs');

try {
  let fileContent = fs.readFileSync('data.js', 'utf8');

  // We can evaluate it by mocking the environment
  const context = {};
  eval(fileContent.replace(/(const|let|var)\s+(ARCHIVE_STATS|SONGS_DATABASE)/g, 'context.$2'));

  const stats = context.ARCHIVE_STATS;
  const db = context.SONGS_DATABASE;

  // Raw events for the 3 test songs
  const rawEventsMap = {
    'samsim-al-qadaref': [
      { time: '00:18.00', lyric: 'ال', pitch: 'A', octave: 4, duration: 'q', measure: 1, beat: 1.0 },
      { time: '00:18.50', lyric: 'زول', pitch: 'C', octave: 5, duration: 'h', measure: 1, beat: 2.0 },
      { time: '00:19.00', lyric: 'يا', pitch: 'A', octave: 4, duration: 'q', measure: 1, beat: 3.5 },
      { time: '00:19.50', lyric: 'سم', pitch: 'F', octave: 4, duration: 'q', measure: 1, beat: 4.0 },
      { time: '00:19.80', lyric: 'سم', pitch: 'G', octave: 4, duration: 'h', measure: 2, beat: 1.0 },
      { time: '00:20.50', lyric: 'ال', pitch: 'A', octave: 4, duration: 'q', measure: 2, beat: 2.5 },
      { time: '00:21.00', lyric: 'ق', pitch: 'F', octave: 4, duration: 'q', measure: 2, beat: 3.0 },
      { time: '00:21.50', lyric: 'ضا', pitch: 'D', octave: 4, duration: 'w', measure: 2, beat: 4.0 }
    ],
    'nosana-habibna': [
      { time: '00:25.00', lyric: 'ن', pitch: 'D', octave: 5, duration: 'q', measure: 1, beat: 1.0 },
      { time: '00:25.50', lyric: 'سا', pitch: 'D', octave: 5, duration: 'h', measure: 1, beat: 1.5 },
      { time: '00:26.00', lyric: 'نا', pitch: 'C', octave: 5, duration: 'q', measure: 1, beat: 3.0 },
      { time: '00:26.50', lyric: 'ح', pitch: 'Bb', octave: 4, duration: 'q', measure: 1, beat: 3.5 },
      { time: '00:27.00', lyric: 'بي', pitch: 'G', octave: 4, duration: 'h', measure: 1, beat: 4.0 },
      { time: '00:27.50', lyric: 'ب', pitch: 'F', octave: 4, duration: 'q', measure: 2, beat: 1.5 },
      { time: '00:28.00', lyric: 'نا', pitch: 'G', octave: 4, duration: 'w', measure: 2, beat: 2.0 }
    ],
    'ya-nas-barida': [
      { time: '00:15.00', lyric: 'يا', pitch: 'G', octave: 4, duration: 'h', measure: 1, beat: 1.0 },
      { time: '00:15.50', lyric: 'ناس', pitch: 'E', octave: 4, duration: 'h', measure: 1, beat: 2.5 },
      { time: '00:16.00', lyric: 'ب', pitch: 'G', octave: 4, duration: 'q', measure: 1, beat: 4.0 },
      { time: '00:16.50', lyric: 'ري', pitch: 'A', octave: 4, duration: 'q', measure: 2, beat: 1.0 },
      { time: '00:17.00', lyric: 'د', pitch: 'C', octave: 5, duration: 'h', measure: 2, beat: 1.5 },
      { time: '00:17.50', lyric: 'ها', pitch: 'A', octave: 4, duration: 'h', measure: 2, beat: 3.0 }
    ]
  };

  db.forEach(song => {
    if (song.notation && song.notation.referenceVersion) {
      // Wipe the fake generator arrays
      delete song.notation.referenceVersion.melodySections;
      delete song.notation.referenceVersion.multiBarLeadSheet;

      if (rawEventsMap[song.id]) {
        // Test song - gets raw events
        song.notation.referenceVersion.rawTranscriptionEvents = rawEventsMap[song.id];
        song.notation.referenceVersion.verificationStatus = '🟢 Verified from Recording';
      } else {
        // Untranscribed song
        delete song.notation.referenceVersion.rawTranscriptionEvents;
        song.notation.referenceVersion.verificationStatus = '🔴 Transcription Not Yet Verified';
      }
    }
  });

  const outputJS = `const ARCHIVE_STATS = ${JSON.stringify(stats, null, 2)};\n\nconst SONGS_DATABASE = ${JSON.stringify(db, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SONGS_DATABASE, ARCHIVE_STATS };\n}\n`;

  fs.writeFileSync('data.js', outputJS);
  console.log('Successfully updated data.js');
} catch(e) {
  console.error('Error:', e);
}
