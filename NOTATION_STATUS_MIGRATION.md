# NOTATION STATUS MIGRATION LOG
# Documents what changed between old and new badge logic

| الأغنية | Old Status | New Status | Reason |
|---|---|---|---|
| نسانا حبيبنا | 🟢 INDEPENDENT VERIFIED SCORE | 🟡 PARTIAL TRANSCRIPTION | Had rawTranscriptionEvents but zero structural coverage of recording. Opening motif only — validateFullNotation() returns false. |
| سمسم القضارف | 🟢 INDEPENDENT VERIFIED SCORE | 🟡 PARTIAL TRANSCRIPTION | Same. A handful of note events ≠ verified full score. |
| يا ناس بريدها | 🟢 INDEPENDENT VERIFIED SCORE | 🟡 PARTIAL TRANSCRIPTION | Same. No recordingDurationSeconds, no complete timeline. |
| يجو عايدين | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. Still no raw events. |
| من فريع البان | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| الخدير | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| يا رائع جفيتني وأنا ضايع | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| سميري الفي ضميري | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| جوبا مالك علي | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| البي العصر مرورو | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| يا غالية يا زينة حياتي | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| الليلة مسافر | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| حمادة دا جنني | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| الفطن الوسيم | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |
| الليلة الليلة وبراي الليلة | 🔴 TRANSCRIPTION NOT YET VERIFIED | 🔴 NOT TRANSCRIBED | No change. |

## Root Causes of Old False Badges

### Location 1: `renderFullMultiBarLeadSheet()` in script.js (line 188)
**Old code:** Hardcoded `🟢 INDEPENDENT VERIFIED SCORE` badge was rendered unconditionally whenever `rawTranscriptionEvents.length > 0`.

**Fix:** Replaced with dynamic `getNotationStatusLevel()` call. No hardcoded green badge. Coverage panel now displayed instead.

### Location 2: `renderForensicAuditView()` in script.js (line 261)
**Old code:** `hasTranscription ? <span>🟢 INDEPENDENT VERIFIED SCORE</span> : <span>🔴 NOT VERIFIED</span>`

**Fix:** `hasTranscription` alone no longer triggers green. `getNotationStatusLevel(song)` is now used, which requires `validateFullNotation()` AND `approvedByMusician === true` for any green badge.

### How Green Can Now Be Earned
`canShowGreenNotationBadge(song)` returns `true` only when ALL of:
1. Exact reference recording URL exists (not a search query)
2. `notationCompleteness.recordingDurationSeconds > 0`
3. `uniqueSectionsTotal > 0` and `uniqueSectionsNotated >= uniqueSectionsTotal`
4. `unexplainedGaps === 0`
5. `song.performance.approvedByMusician === true`

The only way `approvedByMusician` can become `true` is through the explicit `🎹 اعتماد حسن غزالي` checklist in Rehearsal Mode (workspace.js). No migration script, no AI process, no automatic assignment.

## Arabic Lyric Alignment Fix
Previously: All `evt.lyric` values were auto-annotated beneath the VexFlow staff, producing fragmented Arabic characters beneath each note.

Fix: Lyric annotations are now SUPPRESSED unless `evt.lyricAlignmentVerified === true` is explicitly set on the raw event. Since no events have this field set, no lyric annotations display. A yellow warning bar informs users that lyric alignment requires manual verification.
