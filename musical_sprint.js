const fs = require('fs');

try {
  let fileContent = fs.readFileSync('data.js', 'utf8');
  const data = require('./data.js');
  const db = data.SONGS_DATABASE;
  const stats = data.ARCHIVE_STATS;

  db.forEach(song => {
    // 1. Enforce Exact Recording Requirement (Nullify invalid URLs)
    if (song.referenceRecording) {
      const url = song.referenceRecording.url;
      if (!url || url.includes('search_query') || url.includes('Example')) {
        song.referenceRecording.url = null;
        song.referenceRecording.exactUrl = null;
        song.referenceRecording.recordingId = null;
      } else {
        song.referenceRecording.exactUrl = url;
        const match = url.match(/v=([^&]+)/);
        song.referenceRecording.recordingId = match ? match[1] : null;
      }
    }

    // 2. Add New Schemas
    song.recordingTimeline = song.recordingTimeline || [];
    song.notationSections = song.notationSections || [];
    song.lyricAlignment = song.lyricAlignment || [];
    
    // Performance Arrangement
    song.performanceArrangement = {
      performanceKey: "يحدد في البروفة",
      performanceBpm: null,
      countIn: "يحدد في البروفة",
      introBars: 0,
      structure: [],
      verseOrder: [],
      refrainRepeats: 0,
      instrumentalBreaks: [],
      ending: "يحدد في البروفة",
      keyboardNotes: "",
      vocalistNotes: ""
    };

    // 3. Chord Audit (Phase 13, 21)
    if (song.notation && song.notation.referenceVersion) {
      song.notation.referenceVersion.harmonyNotes = "🟡 الهارموني يحتاج مراجعة حسن غزالي";
    }

    // 4. STOP RULE & Notation Completeness (Phase 25, 26, 27, 28, 38)
    const not = song.notation ? song.notation.referenceVersion : null;
    let hasFullTranscription = false; // We know it's false because AI cannot ingest 00:00-END audio here.

    song.notationCompleteness = {
      recordingDurationSeconds: 0,
      timelineCoveredSeconds: 0,
      uniqueSectionsTotal: 0,
      uniqueSectionsNotated: 0,
      totalMeasures: 0,
      unexplainedGaps: 1, // Assume gaps since we haven't done it
      completenessPercent: 0,
      status: "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    };

    if (not) {
      // Even the 3 candidates are only opening phrases
      not.verificationStatus = "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي";
      
      // Update UI to reflect incomplete status.
      // If we keep the opening phrase, we shouldn't claim it's "COMPLETE".
      if (not.rawTranscriptionEvents && not.rawTranscriptionEvents.length > 0) {
        song.notationCompleteness.status = "🟡 PARTIAL (Opening Motif Only)";
        not.verificationStatus = "🟡 PARTIAL (Opening Motif Only) - Needs Full 00:00-END";
      }
    }

    // Phase 23: Musician Approval Reset
    if (song.performance) {
      song.performance.approvedByMusician = false;
    }
  });

  const outputJS = `const ARCHIVE_STATS = ${JSON.stringify(stats, null, 2)};\n\nconst SONGS_DATABASE = ${JSON.stringify(db, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = { SONGS_DATABASE, ARCHIVE_STATS };\n}\n`;

  fs.writeFileSync('data.js', outputJS);
  console.log('Successfully enforced STOP RULE and added Performance/Completeness schemas.');

} catch(e) {
  console.error('Error:', e);
}
