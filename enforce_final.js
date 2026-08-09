const fs = require('fs');

try {
  let fileContent = fs.readFileSync('data.js', 'utf8');
  const data = require('./data.js');
  const db = data.SONGS_DATABASE;
  const stats = data.ARCHIVE_STATS;

  db.forEach(song => {
    // PHASE 23: MUSICIAN APPROVAL RESET
    if (song.performance) {
      song.performance.approvedByMusician = false;
      if (song.performance.keyboardNotes) song.performance.keyboardNotes = song.performance.keyboardNotes.replace(/اعتمدها حسن غزالي/g, '').trim();
      if (song.performance.vocalistNotes) song.performance.vocalistNotes = song.performance.vocalistNotes.replace(/اعتمدها حسن غزالي/g, '').trim();
    }

    // PHASE 5: LYRICS STATUS
    // If the song doesn't have an exact documented completeness status that was verified by recording,
    // let's just make sure we don't have fake "Complete" if verse count is low? 
    // Actually the user said "We previously discovered some songs displayed only ONE verse". My audit showed they all have 3-8 verses. I'll leave the lyrics status as is since I didn't see any 1-verse songs.

    // PHASE 21: CHORD AUDIT
    // "If uncertain: 🟡 الهارموني يحتاج مراجعة حسن غزالي"
    if (song.notation && song.notation.referenceVersion) {
      const not = song.notation.referenceVersion;
      // Let's add a note to the harmony status for all songs to ensure musician review
      not.harmonyNotes = "🟡 الهارموني يحتاج مراجعة حسن غزالي";
    }

    // PHASE 25: PERFORMANCE KEY
    // "Until rehearsal confirms it: Performance Key: يحدد في البروفة"
    if (song.performance) {
      song.performance.performanceKey = "يحدد في البروفة";
    }

    // PHASE 14: EXACT RECORDING REQUIRED & PHASE 11: VERIFICATION RESET
    if (song.notation && song.notation.referenceVersion) {
      const not = song.notation.referenceVersion;
      const rec = song.referenceRecording;
      let hasValidUrl = false;
      if (rec && rec.url && !rec.url.includes('search_query') && !rec.url.includes('Example')) {
        hasValidUrl = true;
      }

      if (!hasValidUrl || !not.rawTranscriptionEvents || not.rawTranscriptionEvents.length === 0) {
         not.verificationStatus = "🔴 NOT TRANSCRIBED";
         if (rec && rec.url && (rec.url.includes('search_query') || rec.url.includes('Example'))) {
           rec.url = null;
         }
         if (not.rawTranscriptionEvents) {
           delete not.rawTranscriptionEvents;
         }
      } else {
         not.verificationStatus = "🟢 VERIFIED FROM RECORDING";
      }
    }
  });

  const outputJS = `const ARCHIVE_STATS = ${JSON.stringify(stats, null, 2)};\n\nconst SONGS_DATABASE = ${JSON.stringify(db, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SONGS_DATABASE, ARCHIVE_STATS };\n}\n`;

  fs.writeFileSync('data.js', outputJS);
  console.log('Final Database Enforcement Complete');
} catch(e) {
  console.error('Error:', e);
}
