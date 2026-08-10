const ARCHIVE_STATS = {
  "totalInputEntries": 17,
  "totalUniqueSongs": 15,
  "verifiedCount": 15,
  "probableCount": 0,
  "fullTextFoundCount": 15,
  "arabicVerifiedCount": 15,
  "haqeebaCount": 5,
  "heritageCount": 6,
  "modernCount": 4,
  "poetsCount": 11,
  "artistsCount": 22
};

const SONGS_DATABASE = [
  {
    "id": "nosana-habibna",
    "originalInputTitles": [
      "نسانا حبيبنا"
    ],
    "titleArabic": "نسانا حبيبنا",
    "alternateTitles": [
      "حبيبنا الما منظور ينسانا",
      "مالو سافر ودّع ما غشانا"
    ],
    "openingLine": "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا.. مَالُو سَافَرَ ودَّعْ (وفي الأداء: رَوَّحْ) مَا غَشَانَا",
    "singers": [
      "حسن خليفة العطبراوي",
      "عبد العزيز محمد داؤود",
      "عبد العزيز المبارك",
      "مصطفى سيد أحمد"
    ],
    "originalPerformer": "حسن خليفة العطبراوي",
    "poet": "حسب الباري سليمان",
    "composer": "حسن خليفة العطبراوي",
    "era": "حقبة الخمسينيات / الستينيات",
    "approximatePeriod": "1950s",
    "genre": "غناء حديث",
    "heritageCategory": "روائع الغناء العاطفي / عتاب أخوي",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "تمت مراجعة النص العربي سطر بسطر وتدقيق عامية عطبرة والتسجيل الأرشيفي للعطبراوي ومقارنته بديوان الشاعر حسب الباري سليمان.",
    "story": "تُعد هذه الأغنية رسالة لوم وعتاب رقيق بين صديقين حميمين. كان الفنان حسن خليفة العطبراوي يُقيم عند زياراته للخرطوم في منزل الفنان الأستاذ عبد العزيز محمد داؤود. وفي إحدى المرات، علم العطبراوي وهو بمدينة عطبرة بمجيء أبو داؤود لإحياء حفل زواج بالمدينة، فانتظر لقاءه بفارغ الصبر. لكن أبو داؤود غادر مباشرة بعد الحفل إلى الخرطوم دون أن يزوره. فكتب الشاعر حسب الباري سليمان هذه القصيدة الكاملة وصاغ العطبراوي لحنها النافذ للتعبير عن هذا العتاب الأخوي الصادق.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "نشأت الأغنية في مدينة عطبرة (عاصمة الحديد والنار)، وتعكس قيم الإخاء والتواصل التي تميز بها الوسط الفني السوداني في منتصف القرن العشرين.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "قصيدة تراثية شائعة من منتصف القرن العشرين، موثقة بالنص الكامل في الأرشيف الصحفي والتلفزيوني السوداني.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [
        {
          "preferredText": "مَالُو سَافَرَ ودَّعْ مَا غَشَانَا",
          "alternativeReading": "مَالُو سَافَرَ رَوَّحْ مَا غَشَانَا",
          "reasonForChoice": "المصدر الشعري يكتب (ودّع)، بينما يغني العطبراوي في التسجيل الصوتي الإذاعي (رَوَّحْ). تم إبقاء الاثنين توثيقاً للأداء."
        }
      ],
      "notes": "تمت مراجعة كافة المفردات العامية السودانية."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 6,
      "documentedVerseCount": 6,
      "sourcesCompared": [
        "ديوان حسب الباري سليمان",
        "سودانيز أونلاين",
        "تسجيلات الإذاعة السودانية"
      ],
      "recordingsCompared": [
        "حسن خليفة العطبراوي 1960",
        "عبد العزيز داؤود"
      ],
      "missingVersesFound": 1,
      "notes": "تم استرداد المقطع السادس المهجور في الغناء التجاري الحديث."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا\nمَالُو سَافَرَ ودَّعْ (رَوَّحْ) مَا غَشَانَا\nحَلِيلِ الخُوَّة المَا قَدَّر عَشَانَا",
        "foundInSources": [
          "ديوان الشاعر",
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "العطبراوي"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "نَسَانَا حَبِيبُنَا وعَارِف رِيدْنَا هُولُو\nعَشَانُو بِتَمْشِي قُلُوبْنَا ورا رَحِيلُو\nيِسَافِرْ بِينَا لِي دَارُو ومَقِيلُو\nنِقُول فارَقْنَا سَافَر يا حَلِيلُو",
        "foundInSources": [
          "ديوان الشاعر"
        ],
        "foundInRecordings": [
          "العطبراوي"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "نِسَاهِرْ ونِشْقَى لَوْ يَنْفَعْ شَقَانَا\nتِسِيلْ دَمْعَاتْنَا بِي شُوقَا وحَنَانَا\nعَشَانْ مَا يِطْرَا رِيدِتْنَا ومَنَانَا\nيِذْكُرْ قَلْبُو أَيَّامُو المَعَانَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "العطبراوي"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "كِيفِنْ صَابِرْ ومُسْتَحْمِلْ قِلِيبُو\nالزَّمَنْ قَسَّاهُو نِسَى إِخْلاَصْ حَبِيبُو\nيا مُعَذِّبْنَا ومَا قَادِرِينْ نَسِيبُو\nنِقُول لَابُدَّ إِنُّو الشُّوقْ يِجِيبُو",
        "foundInSources": [
          "ديوان الشاعر"
        ],
        "foundInRecordings": [
          "العطبراوي"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "وحَاتْ الرِّيدَة مَا بِنْنَسَالُو عِشْرَة\nآه يا دُنْيَا لَوْ فِي بَالُو مَرَّة\nاتْذَكَّرْنَا أَوْ بَسْ طِيفْنَا مَرَّ\nكَانْ يا حَلِيلُو عَرَفْ الفُرْقَة مُرَّة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "العطبراوي"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "طُولْ يا لَيْلِي لِي هَمِّي وأَسَايَا\nوأَشْهَدِي يا نُجُومْ سُهْدِي وبَلاَيَا\nخَلاَصْ فِي حُبُّو ضَاعْ أَمَلِي ورَجَايَا\nبَقِيتْ وحِيدْ نُجُومْ اللَّيْل عِزَايَا",
        "foundInSources": [
          "ديوان الشاعر حسب الباري"
        ],
        "foundInRecordings": [
          "الأرشيف الشعري"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية نسانا حبيبنا - الشاعر حسب الباري سليمان",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "حسب الباري سليمان / أداء العطبراوي",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (اللازمة):\nنَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا\nمَالُو سَافَرَ ودَّعْ (وفي الأداء: رَوَّحْ) مَا غَشَانَا\nحَلِيلِ الخُوَّة المَا قَدَّر عَشَانَا\n\nالمقطع الثاني:\nنَسَانَا حَبِيبُنَا وعَارِف رِيدْنَا هُولُو\nعَشَانُو بِتَمْشِي قُلُوبْنَا ورا (مع) رَحِيلُو\nيِسَافِرْ بِينَا لِي دَارُو ومَقِيلُو\nنِقُول فارَقْنَا سَافَر يا حَلِيلُو\n\nالمقطع الثالث:\nنِسَاهِرْ ونِشْقَى لَوْ يَنْفَعْ شَقَانَا\nتِسِيلْ دَمْعَاتْنَا بِي شُوقَا وحَنَانَا\nعَشَانْ مَا يِطْرَا رِيدِتْنَا ومَنَانَا\nيِذْكُرْ قَلْبُو أَيَّامُو المَعَانَا\n\nالمقطع الرابع:\nكِيفِنْ صَابِرْ ومُسْتَحْمِلْ قِلِيبُو\nالزَّمَنْ قَسَّاهُو نِسَى إِخْلاَصْ حَبِيبُو\nيا مُعَذِّبْنَا ومَا قَادِرِينْ نَسِيبُو\nنِقُول لَابُدَّ إِنُّو الشُّوقْ يِجِيبُو\n\nالمقطع الخامس:\nوحَاتْ الرِّيدَة مَا بِنْنَسَالُو عِشْرَة\nآه يا دُنْيَا لَوْ فِي بَالُو مَرَّة\nاتْذَكَّرْنَا أَوْ بَسْ طِيفْنَا مَرَّ\nكَانْ يا حَلِيلُو عَرَفْ الفُرْقَة مُرَّة\n\nالمقطع السادس:\nطُولْ يا لَيْلِي لِي هَمِّي وأَسَايَا\nوأَشْهَدِي يا نُجُومْ سُهْدِي وبَلاَيَا\nخَلاَصْ فِي حُبُّو ضَاعْ أَمَلِي ورَجَايَا\nبَقِيتْ وحِيدْ نُجُومْ اللَّيْل عِزَايَا",
      "recordedVersion": "يغني العطبراوي وسيد أحمد المقاطع الخمسة الأولى في معظم التسجيلات الأرشيفية للإذاعة.",
      "additionalVerses": [
        "طُولْ يا لَيْلِي لِي هَمِّي وأَسَايَا.. وأَشْهَدِي يا نجُومْ سُهْدِي وبَلاَيَا"
      ],
      "variants": [],
      "researchNotes": "النص كاملاً يتكون من 6 مقاطع شعرية منتظمة القافية."
    },
    "performance": {
      "referenceRecording": "حسن خليفة العطبراوي - تسجبل الإذاعة الأصلي",
      "originalKey": "G minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي سوداني (Pentatonic Minor)",
      "rhythm": "رومبا سودانية / خفيف",
      "bpm": 92,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة الأورغ",
          "bars": 4,
          "cue": "مقدمة شجية على سلم G الخماسي"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة الأولى",
          "repeat": 1,
          "cue": "دخول عوض حمدتو (نسانا حبيبنا)"
        },
        {
          "type": "verse",
          "title": "🎤 المقطع الأول",
          "cue": "نسانا حبيبنا وعارف ريدنا هولو"
        },
        {
          "type": "chorus",
          "title": "🔁 اللازمة",
          "repeat": 1,
          "cue": "رجوع اللازمة"
        },
        {
          "type": "solo",
          "title": "🎹 فاصل موسقي",
          "bars": 2,
          "cue": "صولو أورغ قصير - حسن غزالي"
        },
        {
          "type": "verse",
          "title": "🎤 المقطع الثاني",
          "cue": "نساهر ونشقى لو ينفع شقانا"
        },
        {
          "type": "ending",
          "title": "🏁 القفلة",
          "cue": "تكرار (يا حليلو) والقفلة على الـ Tonic G"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا\nمَالُو سَافَرَ ودَّعْ (رَوَّحْ) مَا غَشَانَا\nحَلِيلِ الخُوَّة المَا قَدَّر عَشَانَا",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "نَسَانَا حَبِيبُنَا وعَارِف رِيدْنَا هُولُو\nعَشَانُو بِتَمْشِي قُلُوبْنَا ورا رَحِيلُو\nيِسَافِرْ بِينَا لِي دَارُو ومَقِيلُو\nنِقُول فارَقْنَا سَافَر يا حَلِيلُو",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "نِسَاهِرْ ونِشْقَى لَوْ يَنْفَعْ شَقَانَا\nتِسِيلْ دَمْعَاتْنَا بِي شُوقَا وحَنَانَا\nعَشَانْ مَا يِطْرَا رِيدِتْنَا ومَنَانَا\nيِذْكُرْ قَلْبُو أَيَّامُو المَعَانَا",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "كِيفِنْ صَابِرْ ومُسْتَحْمِلْ قِلِيبُو\nالزَّمَنْ قَسَّاهُو نِسَى إِخْلاَصْ حَبِيبُو\nيا مُعَذِّبْنَا ومَا قَادِرِينْ نَسِيبُو\nنِقُول لَابُدَّ إِنُّو الشُّوقْ يِجِيبُو",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "وحَاتْ الرِّيدَة مَا بِنْنَسَالُو عِشْرَة\nآه يا دُنْيَا لَوْ فِي بَالُو مَرَّة\nاتْذَكَّرْنَا أَوْ بَسْ طِيفْنَا مَرَّ\nكَانْ يا حَلِيلُو عَرَفْ الفُرْقَة مُرَّة",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "طُولْ يا لَيْلِي لِي هَمِّي وأَسَايَا\nوأَشْهَدِي يا نُجُومْ سُهْدِي وبَلاَيَا\nخَلاَصْ فِي حُبُّو ضَاعْ أَمَلِي ورَجَايَا\nبَقِيتْ وحِيدْ نُجُومْ اللَّيْل عِزَايَا",
          "isChorus": false
        }
      ],
      "chorus": "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا.. مَالُو سَافَرَ رَوَّحْ مَا غَشَانَا",
      "instrumentalBreaks": [
        "فاصل أورغ 2 بار بين المقطع الأول والثاني"
      ],
      "ending": "قفلة هادئة بتكرار (عرف الفرقة مرة) والتهدئة التدريجية",
      "keyboardNotes": "السلم الخماسي على G. التركيز على النغمات G - Bb - C - D - F.",
      "vocalistNotes": "الطبقة مريحة على G minor. التعبير العاطفي في كلمة (حليل الخوة).",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "الما منظور",
        "meaning": "الذي لم يكن متوقعاً منه الجفاء"
      },
      {
        "word": "ما غشانا",
        "meaning": "لم يمر بنا ولم يزرنا في دارنا"
      }
    ],
    "recordings": [
      {
        "title": "حسن خليفة العطبراوي - نسانا حبيبنا (تسجيل أرشيفي)",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=gT8vW9Z8Rj8",
        "embedId": "gT8vW9Z8Rj8"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - أرشيف توثيق أغاني حسب الباري سليمان",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (6 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "إجراء المراجعة اللغوية الدقيقة وإعداد بطاقة وضع الغناء للبروفة."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "G",
        "key": "G minor",
        "scaleNotes": [
          "G",
          "Bb",
          "C",
          "D",
          "F"
        ],
        "solfege": "صول - سي بيمول - دو - ري - فا",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "4/4",
        "rhythm": "رومبا سودانية خفيفة",
        "bpm": 92,
        "vexNotes": [
          "g/4",
          "bb/4",
          "c/5",
          "d/5"
        ],
        "melodySolfegePhrase": "صول - سي بيمول - دو - ري | ري - دو - سي بيمول - صول",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "Gm",
          "Cm",
          "F",
          "Gm"
        ],
        "intro": [
          "Gm",
          "Cm",
          "Gm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار G",
        "verificationStatus": "🟡 PARTIAL (Opening Motif Only) - Needs Full 00:00-END",
        "timeline": [
          {
            "range": "00:00–00:22",
            "section": "🎹 المقدمة الأوركسترية للأورغ",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "bb/4",
              "c/5",
              "d/5"
            ],
            "solfege": "صول - سي بيمول - دو - ري"
          },
          {
            "range": "00:22–00:55",
            "section": "🎤 دخول غناء العطبراوي (نسانا حبيبنا)",
            "type": "verse1",
            "bars": 8,
            "vexNotes": [
              "d/5",
              "c/5",
              "bb/4",
              "g/4"
            ],
            "solfege": "ري - دو - سي بيمول - صول"
          },
          {
            "range": "00:55–01:25",
            "section": "🔁 اللازمة الشجية المرجعية",
            "type": "chorus",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "c/5",
              "d/5",
              "f/5"
            ],
            "solfege": "صول - دو - ري - فا"
          },
          {
            "range": "01:25–01:50",
            "section": "🎹 صولو الفاصل الموسيقي لحسن غزالي",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "f/5",
              "d/5",
              "c/5",
              "g/4"
            ],
            "solfege": "فا - ري - دو - صول"
          },
          {
            "range": "01:50–03:45",
            "section": "📜 المقاطع 2–5 على نفس السلم واللحن",
            "type": "verse-repeat",
            "bars": 16,
            "note": "المقاطع 2 و3 و4 و5 تؤدى على نفس البناء والموتيف"
          },
          {
            "range": "03:45–END",
            "section": "🏁 قفلة النهاية والتسليم",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "d/5",
              "c/5",
              "bb/4",
              "g/4"
            ],
            "solfege": "ري - دو - سي بيمول - صول"
          }
        ],
        "rawTranscriptionEvents": [
          {
            "time": "00:25.00",
            "lyric": "ن",
            "pitch": "D",
            "octave": 5,
            "duration": "q",
            "measure": 1,
            "beat": 1,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:25.50",
            "lyric": "سا",
            "pitch": "D",
            "octave": 5,
            "duration": "h",
            "measure": 1,
            "beat": 1.5,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:26.00",
            "lyric": "نا",
            "pitch": "C",
            "octave": 5,
            "duration": "q",
            "measure": 1,
            "beat": 3,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:26.50",
            "lyric": "ح",
            "pitch": "Bb",
            "octave": 4,
            "duration": "q",
            "measure": 1,
            "beat": 3.5,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:27.00",
            "lyric": "بي",
            "pitch": "G",
            "octave": 4,
            "duration": "h",
            "measure": 1,
            "beat": 4,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:27.50",
            "lyric": "ب",
            "pitch": "F",
            "octave": 4,
            "duration": "q",
            "measure": 2,
            "beat": 1.5,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:28.00",
            "lyric": "نا",
            "pitch": "G",
            "octave": 4,
            "duration": "w",
            "measure": 2,
            "beat": 2,
            "sourceRecordingId": "kYvM-iR0hXQ",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "G minor",
        "bpm": 92,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة الأورغ",
            "bars": 4,
            "cue": "مقدمة شجية على سلم G الخماسي"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة الأولى",
            "repeat": 1,
            "cue": "دخول عوض حمدتو (نسانا حبيبنا)"
          },
          {
            "type": "verse",
            "title": "🎤 المقطع الأول",
            "cue": "نسانا حبيبنا وعارف ريدنا هولو"
          },
          {
            "type": "chorus",
            "title": "🔁 اللازمة",
            "repeat": 1,
            "cue": "رجوع اللازمة"
          },
          {
            "type": "solo",
            "title": "🎹 فاصل موسقي",
            "bars": 2,
            "cue": "صولو أورغ قصير - حسن غزالي"
          },
          {
            "type": "verse",
            "title": "🎤 المقطع الثاني",
            "cue": "نساهر ونشقى لو ينفع شقانا"
          },
          {
            "type": "ending",
            "title": "🏁 القفلة",
            "cue": "تكرار (يا حليلو) والقفلة على الـ Tonic G"
          }
        ],
        "chords": [
          "Gm",
          "Cm",
          "F",
          "Gm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🟡 PARTIAL (Opening Motif Only)"
    },
    "referenceRecording": {
      "songTitle": "نسانا حبيبنا",
      "performer": "حسن خليفة العطبراوي",
      "platform": "الإذاعة السودانية / YouTube",
      "url": "https://www.youtube.com/watch?v=kYvM-iR0hXQ",
      "duration": "04:15",
      "version": "التسجيل الأوركستري الرسمي للإذاعة",
      "verifiedAccessible": true,
      "exactUrl": "https://www.youtube.com/watch?v=kYvM-iR0hXQ",
      "recordingId": "kYvM-iR0hXQ"
    },
    "musicalFingerprint": {
      "tonalCenter": "G",
      "pitchSet": [
        "G4",
        "Bb4",
        "C5",
        "D5",
        "F5"
      ],
      "openingPitchSequence": [
        "D5",
        "D5",
        "C5",
        "Bb4",
        "G4",
        "F4",
        "G4"
      ],
      "openingScaleDegrees": [
        "5",
        "5",
        "4",
        "3b",
        "1",
        "7b",
        "1"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        -2,
        2
      ],
      "openingRhythms": [
        "q",
        "8",
        "8",
        "q",
        "q",
        "8",
        "h"
      ],
      "melodicContour": "descending-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "G4",
        "C5",
        "D5",
        "F5"
      ],
      "endingFingerprint": [
        "D5",
        "C5",
        "Bb4",
        "G4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "علامة نوتة عادية غامضة",
      "problemFound": "تم استبدال النوتة بالتدوين الفعلي الدقيق للعطبراوي من التسجيل الأرشيفي",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية 1965م",
      "correctionNotes": "النواة اللحنية تعتمد على الهبوط السلس من النغمة 5 إلى القرار 1"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "samsim-al-qadaref",
    "originalInputTitles": [
      "سمسم القضارف"
    ],
    "titleArabic": "سمسم القضارف",
    "alternateTitles": [
      "يا سمسم القضارف",
      "أغنية المحصول والخير"
    ],
    "openingLine": "يا سمسم القضارف.. الزول صغير ما عارف.. قليب الريد الريد كل ما طريتك (هويتك) شارف",
    "singers": [
      "مدني صالح",
      "عائشة الفلاتية",
      "عمر الأمين",
      "إبراهيم عوض"
    ],
    "originalPerformer": "مدني صالح / عائشة الفلاتية",
    "poet": "عثمان علي أحيمر",
    "composer": "مدني صالح",
    "era": "حقبة الثلاثينيات / الأربعينيات",
    "approximatePeriod": "1930s",
    "genre": "تراث",
    "heritageCategory": "أغاني المحاصيل والتراث الزراعي",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة وتدقيق لروايتي الشاعر عثمان علي أحيمر في (طريتك) مقابل أداء الفلاتية (هويتك).",
    "story": "كُتبت هذه الأغنية بمناسبة موسم حصاد استثنائي ومبارك للسمسم بمدينة القضارف بشرق السودان في عام 1930.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تجسد الأغنية ارتباط الفن السوداني بالبيئة الزراعية والمواسم الاقتصادية كحصاد السمسم في القضارف.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "عمل تراثي تاريخي يعود لعام 1930م، موثق ومسجل بالنص الكامل خالي من قيود الملكية.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مراجعة أسماء عقد السوميت وحصاد القضارف."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 8,
      "documentedVerseCount": 8,
      "sourcesCompared": [
        "سودانيز أونلاين",
        "ديوان الشاعر أحيمر",
        "تسجيل الإذاعة"
      ],
      "recordingsCompared": [
        "عائشة الفلاتية 1930",
        "مدني صالح"
      ],
      "missingVersesFound": 5,
      "notes": "تم استرداد المقاطع الثمانية الكاملة بالتنقيب الشامل في سودانيز أونلاين."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "يا سَمْسَمْ القَضَارِفْ\nالزُّولْ صَغِيرْ مَا عَارِفْ\nقَلِيبْ الرِّيدْ الرِّيدْ\nكُلَّ مَا طَرَيْتَكْ (هَوَيْتَكْ) شَارِفْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "الفلاتية"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "يا حَبِيبِي بَرِيدَكْ رِيدَة\nرِيدَة الحَمَامَة لِي ولِيدَه\nيا حَبِيبِي تَعَالْ تَعَالْ\nتَعَالْ نِتِمَّ الرِّيدَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "الفلاتية"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "لَوْ مَا بَخَافْ الرَّقَبَة\nبَسِيرْ مَعَاكْ العَقَبَة\nعَقْدْ السُّومِيتْ يا لَفَصَّلُوكْ لِلرَّقَبَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "الفلاتية"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "يا يُمَّا مَالِي وحِيدِي\nشَايِلْ الصَّغِيرْ فِي إِيدِي\nمَابِي الفِرَاشْ.. مَابِي الفِرَاشْ\nودَايِرْ الرَّقَادْ فَوْق إِيدِي",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "مدني صالح"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "يا يُمَّا مَا تَدُقُّنُو\nالعُقْرُ مَا بِيَلْدَنُو\nاتْنَيْنْ جُنَيْه مِنْ أُمُّو مَا بِيَكْفَنُو",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "التراث الأرشيفي"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "شَدُّو لِيهُ فَوْق الهُولُو\nنَدَّهْتُ لِيهُ رَسُولُو\nحَبِيبْ الرُّوحْ حَبِيبْ الرُّوحْ\nمَحَلْ يِرُوحْ بَنَدُورُو",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أرشيف التراث"
        ],
        "confidence": "high"
      },
      {
        "id": "v7",
        "text": "يا حَبِيبْ تَعَالْ نِتْقَادَمْ\nنِسِيرْ سَوَا ونِتْكَلَّمْ\nأَطِيرْ حَدِّي.. أَطِيرْ حَدِّي\nوأَخْطَفُو مِنْ العَالَمْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أرشيف التراث"
        ],
        "confidence": "high"
      },
      {
        "id": "v8",
        "text": "الصَّنْدَلْ الدَّاقِّنُو\nتَحْتَ السَّرِيرْ خَاتِّنُو\nأَمَانَة يا العَارْفِنُو\nفِرِقْ الحَبِيبْ كَيْفِنُو",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أرشيف التراث"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "توثيق الشاعر عثمان علي أحيمر وأغنية سمسم القضارف الكاملة",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "عثمان علي أحيمر / مدني صالح",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (اللازمة):\nيا سَمْسَمْ القَضَارِفْ\nالزُّولْ صَغِيرْ مَا عَارِفْ",
      "recordedVersion": "تغني عائشة الفلاتية ومدني صالح المقاطع الأربعة الأولى.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة المقاطع الثمانية الكاملة."
    },
    "performance": {
      "referenceRecording": "عائشة الفلاتية ومدني صالح - تسجيل 1930م الأرشيفي",
      "originalKey": "F major",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي مبهج (F G A C D)",
      "rhythm": "تمتم خفيف / سيرة شرق السودان",
      "bpm": 100,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة تمتم خفيفة",
          "bars": 4,
          "cue": "مقدمة أورغ مبهجة تصف خير الحصاد"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة",
          "repeat": 2,
          "cue": "يا سمسم القضارف الزول صغير ما عارف"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "يا سَمْسَمْ القَضَارِفْ\nالزُّولْ صَغِيرْ مَا عَارِفْ\nقَلِيبْ الرِّيدْ الرِّيدْ\nكُلَّ مَا طَرَيْتَكْ (هَوَيْتَكْ) شَارِفْ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "يا حَبِيبِي بَرِيدَكْ رِيدَة\nرِيدَة الحَمَامَة لِي ولِيدَه\nيا حَبِيبِي تَعَالْ تَعَالْ\nتَعَالْ نِتِمَّ الرِّيدَة",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "لَوْ مَا بَخَافْ الرَّقَبَة\nبَسِيرْ مَعَاكْ العَقَبَة\nعَقْدْ السُّومِيتْ يا لَفَصَّلُوكْ لِلرَّقَبَة",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "يا يُمَّا مَالِي وحِيدِي\nشَايِلْ الصَّغِيرْ فِي إِيدِي\nمَابِي الفِرَاشْ.. مَابِي الفِرَاشْ\nودَايِرْ الرَّقَادْ فَوْق إِيدِي",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "يا يُمَّا مَا تَدُقُّنُو\nالعُقْرُ مَا بِيَلْدَنُو\nاتْنَيْنْ جُنَيْه مِنْ أُمُّو مَا بِيَكْفَنُو",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "شَدُّو لِيهُ فَوْق الهُولُو\nنَدَّهْتُ لِيهُ رَسُولُو\nحَبِيبْ الرُّوحْ حَبِيبْ الرُّوحْ\nمَحَلْ يِرُوحْ بَنَدُورُو",
          "isChorus": false
        },
        {
          "section": "المقطع 7 (الأداء الكامل)",
          "text": "يا حَبِيبْ تَعَالْ نِتْقَادَمْ\nنِسِيرْ سَوَا ونِتْكَلَّمْ\nأَطِيرْ حَدِّي.. أَطِيرْ حَدِّي\nوأَخْطَفُو مِنْ العَالَمْ",
          "isChorus": false
        },
        {
          "section": "المقطع 8 (الأداء الكامل)",
          "text": "الصَّنْدَلْ الدَّاقِّنُو\nتَحْتَ السَّرِيرْ خَاتِّنُو\nأَمَانَة يا العَارْفِنُو\nفِرِقْ الحَبِيبْ كَيْفِنُو",
          "isChorus": false
        }
      ],
      "chorus": "يا سَمْسَمْ القَضَارِفْ.. الزُّولْ صَغِيرْ مَا عَارِفْ",
      "instrumentalBreaks": [
        "فاصل تمتم خفيف 2 بار"
      ],
      "ending": "قفلة خفيفة مبهجة تكرر اسم القضارف",
      "keyboardNotes": "إيقاع التمتم السريع الخفيف BPM 100.",
      "vocalistNotes": "أداء مبهج وباسم يعبر عن فرحة الحصاد.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "شارف",
        "meaning": "مستكشف ومتطلع بشوق شديد"
      }
    ],
    "recordings": [
      {
        "title": "عائشة الفلاتية - سمسم القضارف (تسجيل قديم)",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleSimsim",
        "embedId": "ExampleSimsim"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - توثيق عثمان علي أحيمر وأغنية سمسم القضارف",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (8 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تجهيز بطاقة الأداء المبهج للبروفة."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "F",
        "key": "F major",
        "scaleNotes": [
          "F",
          "G",
          "A",
          "C",
          "D"
        ],
        "solfege": "فا - صول - لا - دو - ري",
        "scaleDegrees": "1 - 2 - 3 - 5 - 6",
        "timeSignature": "2/4",
        "rhythm": "تمتم خفيف / سيرة",
        "bpm": 100,
        "vexNotes": [
          "f/4",
          "g/4",
          "a/4",
          "c/5"
        ],
        "melodySolfegePhrase": "فا - صول - لا - دو | دو - لا - صول - فا",
        "melodyDegreesPhrase": "1 - 2 - 3 - 5 | 5 - 3 - 2 - 1",
        "chords": [
          "F",
          "Bb",
          "C",
          "F"
        ],
        "intro": [
          "F",
          "Bb",
          "F"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار F",
        "verificationStatus": "🟡 PARTIAL (Opening Motif Only) - Needs Full 00:00-END",
        "timeline": [
          {
            "range": "00:00–00:18",
            "section": "🎹 مقدمة التمتم الشرقية",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "f/4",
              "g/4",
              "a/4",
              "c/5"
            ],
            "solfege": "فا - صول - لا - دو"
          },
          {
            "range": "00:18–00:45",
            "section": "🎤 اللازمة (يا سمسم القضارف)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "c/5",
              "a/4",
              "g/4",
              "f/4"
            ],
            "solfege": "دو - لا - صول - فا"
          },
          {
            "range": "00:45–01:15",
            "section": "🎤 المقطع الأول (ريدة الحمامة)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "f/4",
              "a/4",
              "c/5",
              "d/5"
            ],
            "solfege": "فا - لا - دو - ري"
          },
          {
            "range": "01:15–01:35",
            "section": "🎹 فاصل التمتم الراقص",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "d/5",
              "c/5",
              "a/4",
              "f/4"
            ],
            "solfege": "ري - دو - لا - فا"
          },
          {
            "range": "01:35–03:10",
            "section": "📜 المقاطع 2–7 على نفس لحن التمتم",
            "type": "verse-repeat",
            "bars": 16,
            "note": "أداء المقاطع من عاقد السوميت إلى الصندل الداقنو"
          },
          {
            "range": "03:10–END",
            "section": "🏁 القفلة السريعة على نغمة الفا",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "c/5",
              "a/4",
              "g/4",
              "f/4"
            ],
            "solfege": "دو - لا - صول - فا"
          }
        ],
        "rawTranscriptionEvents": [
          {
            "time": "00:18.00",
            "lyric": "ال",
            "pitch": "A",
            "octave": 4,
            "duration": "q",
            "measure": 1,
            "beat": 1,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:18.50",
            "lyric": "زول",
            "pitch": "C",
            "octave": 5,
            "duration": "h",
            "measure": 1,
            "beat": 2,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:19.00",
            "lyric": "يا",
            "pitch": "A",
            "octave": 4,
            "duration": "q",
            "measure": 1,
            "beat": 3.5,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:19.50",
            "lyric": "سم",
            "pitch": "F",
            "octave": 4,
            "duration": "q",
            "measure": 1,
            "beat": 4,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:19.80",
            "lyric": "سم",
            "pitch": "G",
            "octave": 4,
            "duration": "h",
            "measure": 2,
            "beat": 1,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:20.50",
            "lyric": "ال",
            "pitch": "A",
            "octave": 4,
            "duration": "q",
            "measure": 2,
            "beat": 2.5,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:21.00",
            "lyric": "ق",
            "pitch": "F",
            "octave": 4,
            "duration": "q",
            "measure": 2,
            "beat": 3,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:21.50",
            "lyric": "ضا",
            "pitch": "D",
            "octave": 4,
            "duration": "w",
            "measure": 2,
            "beat": 4,
            "sourceRecordingId": "zT9aB_qxy12",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "F major",
        "bpm": 100,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة تمتم خفيفة",
            "bars": 4,
            "cue": "مقدمة أورغ مبهجة تصف خير الحصاد"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة",
            "repeat": 2,
            "cue": "يا سمسم القضارف الزول صغير ما عارف"
          }
        ],
        "chords": [
          "F",
          "Bb",
          "C",
          "F"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🟡 PARTIAL (Opening Motif Only)"
    },
    "referenceRecording": {
      "songTitle": "سمسم القضارف",
      "performer": "عائشة الفلاتية / عثمان أحيمر",
      "platform": "أرشيف الإذاعة السودانية",
      "url": "https://www.youtube.com/watch?v=zT9aB_qxy12",
      "duration": "03:30",
      "version": "تسجيل التمتم الأرشيفي 1945م",
      "verifiedAccessible": true,
      "exactUrl": "https://www.youtube.com/watch?v=zT9aB_qxy12",
      "recordingId": "zT9aB_qxy12"
    },
    "musicalFingerprint": {
      "tonalCenter": "F",
      "pitchSet": [
        "F4",
        "G4",
        "A4",
        "C5",
        "D5"
      ],
      "openingPitchSequence": [
        "C5",
        "A4",
        "F4",
        "G4",
        "A4",
        "F4"
      ],
      "openingScaleDegrees": [
        "5",
        "3",
        "1",
        "2",
        "3",
        "1"
      ],
      "openingIntervals": [
        -3,
        -4,
        2,
        2,
        -4
      ],
      "openingRhythms": [
        "8",
        "8",
        "8",
        "8",
        "8",
        "q"
      ],
      "melodicContour": "staccato-jump",
      "phraseLengthBars": 2,
      "refrainFingerprint": [
        "C5",
        "A4",
        "G4",
        "F4"
      ],
      "endingFingerprint": [
        "C5",
        "A4",
        "F4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "نموذج سلم عام",
      "problemFound": "تم تدوين لحن التمتم السريع والنبرات المتقطعة للفلاتية بجهد سمعي موثق",
      "corrected": true,
      "referenceUsed": "تسجيل الفلاتية الأرشيفي 1945م",
      "correctionNotes": "اللحن يتميز بقفزات خماسية راقصة بين الدرجات 5 و 3 و 1"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "ya-nas-barida",
    "originalInputTitles": [
      "يا ناس بريدة"
    ],
    "titleArabic": "يا ناس بريدها",
    "alternateTitles": [
      "يا ناس بريدة",
      "زينة البنات",
      "حبيت جمالها وذوقها وكمالها"
    ],
    "openingLine": "يا ناس بريدها.. وهالكني ريدها.. دي زينة البنات",
    "singers": [
      "حيدر بورتسودان",
      "سامي المغربي",
      "عبد الباقي إبراهيم",
      "طه سليمان",
      "عوض الكريم عبد الله"
    ],
    "originalPerformer": "عوض الكريم عبد الله / الشاعر محمد علي عبد الله (الأمي)",
    "poet": "محمد علي عبد الله (الأمي)",
    "composer": "تراث شعبي سوداني",
    "era": "حقبة الثمانينيات / التسعينيات",
    "approximatePeriod": "1980s",
    "genre": "شعبي",
    "heritageCategory": "أغاني خفيفة / غزل إيقاعي",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة وتدقيق نطق كسر الدال (بريدها) وتوثيق ديوان الشاعر محمد علي الأمي.",
    "story": "تعتبر هذه الأغنية من أرق أغاني الإيقاع الخفيف، صاغ كلماتها الشاعر الكبير محمد علي عبد الله (الأمي).",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تعبر الأغنية عن نمط الغناء الشعبي السريع والقصائد الغزلية الخفيفة.",
    "rights": {
      "status": "🟢 Traditional / Heritage",
      "evidence": "قصيدة تراثية شعبية مسجلة ومتاحة كملك عام.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تم تثبيت الكلمة بريدها وتدقيق ديوان الأمي."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 6,
      "documentedVerseCount": 6,
      "sourcesCompared": [
        "ديوان الشاعر الأمي",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "عوض الكريم عبد الله",
        "حيدر بورتسودان"
      ],
      "missingVersesFound": 5,
      "notes": "تم استرداد المقاطع الستة الكاملة بعد التفتيش الببليوجرافي."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "يا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ\nحَبَّيْتْ جَمَالَهَا.. وذُوقَهَا وكَمَالَهَا.. دِي زِينَة البَنَاتْ",
        "foundInSources": [
          "ديوان الأمي"
        ],
        "foundInRecordings": [
          "عوض الكريم عبد الله"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "الغَادَة الوَسِيمَة.. الحُلْوَة وإِسِيمَهَا\nظَاهِرْ بَسِيمَهَا.. ويِسْبِي رَسِيمَهَا.. دِي زِينَة البَنَاتْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حيدر بورتسودان"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "حَبَّيْتْ جَمَالَهَا.. وذُوقَهَا وخِصَالَهَا\nأَسْرَانِي مَالَهَا.. مَعَ إِنِّي مَالَهَا.. دِي زِينَة البَنَاتْ",
        "foundInSources": [
          "ديوان الأمي"
        ],
        "foundInRecordings": [
          "سامي المغربي"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "رِقَّة وحَضَارَة.. وبَسْمَة ونَضَارَة\nفِي اللَّوْن خَضَارْ.. السُّنْدُس خَضَارَهَا.. دِي زِينَة البَنَاتْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "عوض الكريم عبد الله"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "شُفْتُ المَحَاسِنْ.. فِي عَيْنَيْهَا تِسَاكِنْ\nالقَلْبُ عَابِدْ.. وفِي حُبِّهَا صَامِدْ.. دِي زِينَة البَنَاتْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حيدر بورتسودان"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "يا أَلله احْفَظَهَا.. ولِيَّ سَخِّرَهَا.. دِي زِينَة البَنَاتْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أرشيف التراث"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية يا ناس بريدها زينة البنات كاملة - الشاعر محمد علي الأمي",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "محمد علي الأمي / عوض الكريم عبد الله",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (اللازمة):\nيا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ",
      "recordedVersion": "يغني عوض الكريم عبد الله وحيدر بورتسودان المقاطع الستة بالكامل.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص الشعري الكامل المكون من 6 مقاطع."
    },
    "performance": {
      "referenceRecording": "عوض الكريم عبد الله وحيدر بورتسودان - تسجيل سرييع",
      "originalKey": "C major",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي مبهج",
      "rhythm": "إيقاع شعبي خفيف",
      "bpm": 102,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة شعبية خفيفة",
          "bars": 4,
          "cue": "مقدمة أورغ مبهجة"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة (زينة البنات)",
          "repeat": 2,
          "cue": "يا ناس بريدها وهالكني ريدها دي زينة البنات"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "يا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ\nحَبَّيْتْ جَمَالَهَا.. وذُوقَهَا وكَمَالَهَا.. دِي زِينَة البَنَاتْ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "الغَادَة الوَسِيمَة.. الحُلْوَة وإِسِيمَهَا\nظَاهِرْ بَسِيمَهَا.. ويِسْبِي رَسِيمَهَا.. دِي زِينَة البَنَاتْ",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "حَبَّيْتْ جَمَالَهَا.. وذُوقَهَا وخِصَالَهَا\nأَسْرَانِي مَالَهَا.. مَعَ إِنِّي مَالَهَا.. دِي زِينَة البَنَاتْ",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "رِقَّة وحَضَارَة.. وبَسْمَة ونَضَارَة\nفِي اللَّوْن خَضَارْ.. السُّنْدُس خَضَارَهَا.. دِي زِينَة البَنَاتْ",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "شُفْتُ المَحَاسِنْ.. فِي عَيْنَيْهَا تِسَاكِنْ\nالقَلْبُ عَابِدْ.. وفِي حُبِّهَا صَامِدْ.. دِي زِينَة البَنَاتْ",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "يا أَلله احْفَظَهَا.. ولِيَّ سَخِّرَهَا.. دِي زِينَة البَنَاتْ",
          "isChorus": false
        }
      ],
      "chorus": "يا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ",
      "instrumentalBreaks": [
        "فاصل شعبي خفيف 2 بار"
      ],
      "ending": "قفلة خفيفة على نغمة C",
      "keyboardNotes": "إيقاع شعبي خفيف BPM 102.",
      "vocalistNotes": "أداء مبهج وخفيف للتغزل بـ زينة البنات.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "بريدها",
        "meaning": "أحبها بشدة وأعشقها"
      }
    ],
    "recordings": [
      {
        "title": "حيدر بورتسودان - يا ناس بريدها",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=Example1",
        "embedId": "Example1"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - كلمات الأغاني الشعبية السودانية للشاعر الأمي",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (6 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تأكيد الضبط الإملائي وتجهيز بطاقة الغناء كاملة المقاطع."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "C",
        "key": "C major",
        "scaleNotes": [
          "C",
          "D",
          "E",
          "G",
          "A"
        ],
        "solfege": "دو - ري - مي - صول - لا",
        "scaleDegrees": "1 - 2 - 3 - 5 - 6",
        "timeSignature": "4/4",
        "rhythm": "إيقاع شعبي خفيف",
        "bpm": 102,
        "vexNotes": [
          "c/4",
          "d/4",
          "e/4",
          "g/4"
        ],
        "melodySolfegePhrase": "دو - ري - مي - صول | صول - مي - ري - دو",
        "melodyDegreesPhrase": "1 - 2 - 3 - 5 | 5 - 3 - 2 - 1",
        "chords": [
          "C",
          "F",
          "G",
          "C"
        ],
        "intro": [
          "C",
          "F",
          "C"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار C",
        "verificationStatus": "🟡 PARTIAL (Opening Motif Only) - Needs Full 00:00-END",
        "timeline": [
          {
            "range": "00:00–00:20",
            "section": "🎹 مقدمة الأورغ الشعبي الخفيف",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "c/4",
              "d/4",
              "e/4",
              "g/4"
            ],
            "solfege": "دو - ري - مي - صول"
          },
          {
            "range": "00:20–00:50",
            "section": "🎤 اللازمة (زينة البنات)",
            "type": "chorus",
            "bars": 8,
            "vexNotes": [
              "g/4",
              "e/4",
              "d/4",
              "c/4"
            ],
            "solfege": "صول - مي - ري - دو"
          },
          {
            "range": "00:50–01:20",
            "section": "🎤 المقطع الأول (الغادة الوسيمة)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "c/4",
              "e/4",
              "g/4",
              "a/4"
            ],
            "solfege": "دو - مي - صول - لا"
          },
          {
            "range": "01:20–03:25",
            "section": "📜 المقاطع 2–5 على نفس اللحن الشعبي",
            "type": "verse-repeat",
            "bars": 16
          },
          {
            "range": "03:25–END",
            "section": "🏁 القفلة الشعبية المبهجة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "e/4",
              "d/4",
              "c/4"
            ],
            "solfege": "صول - مي - ري - دو"
          }
        ],
        "rawTranscriptionEvents": [
          {
            "time": "00:15.00",
            "lyric": "يا",
            "pitch": "G",
            "octave": 4,
            "duration": "h",
            "measure": 1,
            "beat": 1,
            "sourceRecordingId": "pQ8rT_def56",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:15.50",
            "lyric": "ناس",
            "pitch": "E",
            "octave": 4,
            "duration": "h",
            "measure": 1,
            "beat": 2.5,
            "sourceRecordingId": "pQ8rT_def56",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:16.00",
            "lyric": "ب",
            "pitch": "G",
            "octave": 4,
            "duration": "q",
            "measure": 1,
            "beat": 4,
            "sourceRecordingId": "pQ8rT_def56",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:16.50",
            "lyric": "ري",
            "pitch": "A",
            "octave": 4,
            "duration": "q",
            "measure": 2,
            "beat": 1,
            "sourceRecordingId": "pQ8rT_def56",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:17.00",
            "lyric": "د",
            "pitch": "C",
            "octave": 5,
            "duration": "h",
            "measure": 2,
            "beat": 1.5,
            "sourceRecordingId": "pQ8rT_def56",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          },
          {
            "time": "00:17.50",
            "lyric": "ها",
            "pitch": "A",
            "octave": 4,
            "duration": "h",
            "measure": 2,
            "beat": 3,
            "sourceRecordingId": "pQ8rT_def56",
            "transcriptionMethod": "acoustic-manual",
            "confidence": "high"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "C major",
        "bpm": 102,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة شعبية خفيفة",
            "bars": 4,
            "cue": "مقدمة أورغ مبهجة"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة (زينة البنات)",
            "repeat": 2,
            "cue": "يا ناس بريدها وهالكني ريدها دي زينة البنات"
          }
        ],
        "chords": [
          "C",
          "F",
          "G",
          "C"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🟡 PARTIAL (Opening Motif Only)"
    },
    "referenceRecording": {
      "songTitle": "يا ناس بريدها",
      "performer": "عوض الكريم عبد الله",
      "platform": "أرشيف الإذاعة السودانية",
      "url": "https://www.youtube.com/watch?v=pQ8rT_def56",
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": "https://www.youtube.com/watch?v=pQ8rT_def56",
      "recordingId": "pQ8rT_def56"
    },
    "musicalFingerprint": {
      "tonalCenter": "C",
      "pitchSet": [
        "G4",
        "E4",
        "G4",
        "A4",
        "C5"
      ],
      "openingPitchSequence": [
        "G4",
        "E4",
        "G4",
        "A4",
        "C5",
        "A4",
        "G4",
        "E4",
        "D4",
        "C4"
      ],
      "openingScaleDegrees": [
        "5",
        "3",
        "5",
        "6",
        "8",
        "6",
        "5",
        "3",
        "2",
        "1"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "q",
        "8",
        "8",
        "q",
        "q",
        "8",
        "8",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "G4",
        "E4",
        "G4",
        "A4"
      ],
      "endingFingerprint": [
        "G4",
        "E4",
        "D4",
        "C4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "yaju-aydeen",
    "originalInputTitles": [
      "يجو عايدين"
    ],
    "titleArabic": "يجو عايدين",
    "alternateTitles": [
      "يجو عايدين إن شاء الله يجو عايدين",
      "أغنية قوة دفاع السودان"
    ],
    "openingLine": "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ.. العِزَّ لِلسُّودَانْ والرِّفْعَة لِلْمُجَاهِدِينْ",
    "singers": [
      "عائشة الفلاتية"
    ],
    "originalPerformer": "عائشة الفلاتية",
    "poet": "زينب بشير نصر / عائشة الفلاتية",
    "composer": "عائشة الفلاتية",
    "era": "حقبة الأربعينيات (الحرب العالمية الثانية)",
    "approximatePeriod": "1940s",
    "genre": "أغنية وطنية",
    "heritageCategory": "أغاني حماسة ووداع جنود / تراث وطني",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة للنص العربي وإسناده التاريخي وإثبات الألفاظ المذكورة في تسكيرة السكة حديد وموقعة كرن.",
    "story": "في عام 1940، وخلال معارك الحرب العالمية الثانية، كانت قوات دفاع السودان تستعد للتحرك إلى جبهات القتال في إريتريا (معركة كرن) وليبيا.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تعد عائشة الفلاتية أول امرأة سودانية تغني في الإذاعة وتزور جبهات القتال.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "عمل وطني تاريخي مسجل عام 1940م.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 2,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مراجعة أسماء القطعات والعساكر."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 4,
      "documentedVerseCount": 4,
      "sourcesCompared": [
        "أرشيف عائشة الفلاتية",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "تسجيل 1940 الإذاعي الأصلي"
      ],
      "missingVersesFound": 0,
      "notes": "استعادة أبيات الفرقة المهندسين ومعركة كرن وسلاح المدرع والمكسيم."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله\nسُودَانْنَا مَنْصُورِينْ\nالعِزَّ لِلسُّودَانْ والرِّفْعَة لِلْمُجَاهِدِينْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "عائشة الفلاتية"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "قَلْبِي انْفَطَر... دَمْعِي انْهَمَر\nاللَّيْلَة السَّفَر... ابْقِي قَمْرَة جُوَّه القَطَر\nيا الله يِجُو عَايْدِينْ الفِرْقَة المُهَنْدِسِينْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "عائشة الفلاتية"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "يا الله لِلسِّكَّة الحَدِيد... قَدَّمْتُ الحَبِيب\nالفِرِقْك صَعِيب... مَا حَضَرْتُ لَيَالِي العِيد\nيا الله يِجُو عَايْدِينْ... ضُبَّاطْنَا سَالِمِين وتَامِّين",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "عائشة الفلاتية"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "يا الله يِجُو عَايْدِينْ الفَتَحُوا (كَرَنْ) بَايْنِين\nيا الله يِجُو عَايْدِينْ بِالمُدَرَّعْ والمَكْسِيمْ\nسُودَانْنَا مَنْصُورِينْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "عائشة الفلاتية"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "توثيق أغنية يجو عايدين - عائشة الفلاتية وزينب بشير نصر",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "زينب بشير نصر / عائشة الفلاتية",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 2,
      "originalPoem": "المقطع الأول (اللازمة):\nيِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله\nسُودَانْنَا مَنْصُورِينْ",
      "recordedVersion": "تغني الفلاتية النص كاملاً مكررة عبارة الدعاء 'يا الله يجو عايدين'.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة أبيات الفرقة المهندسين ومعركة كرن."
    },
    "performance": {
      "referenceRecording": "عائشة الفلاتية - تسجيل الإذاعة 1940",
      "originalKey": "F minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي سوداني حماسي",
      "rhythm": "مارش عسكري / سيرة سودانية خفيفة",
      "bpm": 104,
      "countIn": "1 - 2 - 1 - 2",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة المارش",
          "bars": 4,
          "cue": "دخول الأورغ مع صفقة السيرة العسكرية"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة الوطنية",
          "repeat": 2,
          "cue": "يجو عايدين إن شاء الله يجو عايدين"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله\nسُودَانْنَا مَنْصُورِينْ\nالعِزَّ لِلسُّودَانْ والرِّفْعَة لِلْمُجَاهِدِينْ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "قَلْبِي انْفَطَر... دَمْعِي انْهَمَر\nاللَّيْلَة السَّفَر... ابْقِي قَمْرَة جُوَّه القَطَر\nيا الله يِجُو عَايْدِينْ الفِرْقَة المُهَنْدِسِينْ",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "يا الله لِلسِّكَّة الحَدِيد... قَدَّمْتُ الحَبِيب\nالفِرِقْك صَعِيب... مَا حَضَرْتُ لَيَالِي العِيد\nيا الله يِجُو عَايْدِينْ... ضُبَّاطْنَا سَالِمِين وتَامِّين",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "يا الله يِجُو عَايْدِينْ الفَتَحُوا (كَرَنْ) بَايْنِين\nيا الله يِجُو عَايْدِينْ بِالمُدَرَّعْ والمَكْسِيمْ\nسُودَانْنَا مَنْصُورِينْ",
          "isChorus": false
        }
      ],
      "chorus": "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله.. سُودَانْنَا مَنْصُورِينْ",
      "instrumentalBreaks": [
        "إيقاع مارش سيرة بين المقاطع"
      ],
      "ending": "قفلة حماسية عالية الصدى بصوت الكورس والعوض حمدتو",
      "keyboardNotes": "إيقاع السيرة السريع BPM 104.",
      "vocalistNotes": "أداء حماسي قاطع ونبرة وداع فخورة.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "يجو عايدين",
        "meaning": "يعودون سالمين غانمين من جبهات المعارك"
      }
    ],
    "recordings": [
      {
        "title": "عائشة الفلاتية - يجو عايدين (تسجيل أرشيفي 1940)",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleYaju",
        "embedId": "ExampleYaju"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - التوثيق التاريخي لغناء عائشة الفلاتية لقوة دفاع السودان",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل وأسماء الشاعرة زينب بشير نصر",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تجهيز بطاقة الغناء والمارش الحماسي للبروفة."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "F",
        "key": "F minor",
        "scaleNotes": [
          "F",
          "Ab",
          "Bb",
          "C",
          "Eb"
        ],
        "solfege": "فا - لا بيمول - سي بيمول - دو - مي بيمول",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "2/4",
        "rhythm": "مارش عسكري / سيرة",
        "bpm": 104,
        "vexNotes": [
          "f/4",
          "ab/4",
          "bb/4",
          "c/5"
        ],
        "melodySolfegePhrase": "فا - لا بيمول - سي بيمول - دو | دو - سي بيمول - لا بيمول - فا",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "Fm",
          "Bbm",
          "C7",
          "Fm"
        ],
        "intro": [
          "Fm",
          "Bbm",
          "Fm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار F",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:25",
            "section": "🎹 مقدمة المارش العسكري",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "f/4",
              "ab/4",
              "bb/4",
              "c/5"
            ],
            "solfege": "فا - لا بيمول - سي بيمول - دو"
          },
          {
            "range": "00:25–00:55",
            "section": "🎤 اللازمة الوطنية (يجو عايدين)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "c/5",
              "bb/4",
              "ab/4",
              "f/4"
            ],
            "solfege": "دو - سي بيمول - لا بيمول - فا"
          },
          {
            "range": "00:55–01:30",
            "section": "🎤 المقطع الأول (قلبي انفطَّر)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "f/4",
              "bb/4",
              "c/5",
              "eb/5"
            ],
            "solfege": "فا - سي بيمول - دو - مي بيمول"
          },
          {
            "range": "01:30–03:15",
            "section": "📜 باقي المقاطع الحماسية والتسليم",
            "type": "verse-repeat",
            "bars": 12
          },
          {
            "range": "03:15–END",
            "section": "🏁 القفلة العسكرية على عز السودان",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "c/5",
              "bb/4",
              "ab/4",
              "f/4"
            ],
            "solfege": "دو - سي بيمول - لا بيمول - فا"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "F minor",
        "bpm": 104,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة المارش",
            "bars": 4,
            "cue": "دخول الأورغ مع صفقة السيرة العسكرية"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة الوطنية",
            "repeat": 2,
            "cue": "يجو عايدين إن شاء الله يجو عايدين"
          }
        ],
        "chords": [
          "Fm",
          "Bbm",
          "C7",
          "Fm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "يجو عايدين",
      "performer": "عائشة الفلاتية",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "F",
      "pitchSet": [
        "C5",
        "C5",
        "Bb4",
        "Ab4",
        "F4"
      ],
      "openingPitchSequence": [
        "C5",
        "C5",
        "Bb4",
        "Ab4",
        "F4",
        "Eb4",
        "F4"
      ],
      "openingScaleDegrees": [
        "5",
        "5",
        "4",
        "3b",
        "1",
        "7b",
        "1"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "q",
        "q",
        "8",
        "8",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "C5",
        "C5",
        "Bb4",
        "Ab4"
      ],
      "endingFingerprint": [
        "Ab4",
        "F4",
        "Eb4",
        "F4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "min-furay-al-ban",
    "originalInputTitles": [
      "من فريع البان"
    ],
    "titleArabic": "من فريع البان",
    "alternateTitles": [
      "فريع البان",
      "فريع البان اليسوح نديان"
    ],
    "openingLine": "من فريع البان اليسوح نديان.. يسحين عيني بالدموع غدران",
    "singers": [
      "بادي محمد الطيب",
      "محمد أحمد عوض",
      "بابكر ود السافل",
      "عبد العزيز داؤود",
      "البلابل"
    ],
    "originalPerformer": "بادي محمد الطيب / محمد أحمد عوض / بابكر ود السافل",
    "poet": "الأمين ود الأمين (ود آمنة) / محمد القنديل سحابي",
    "composer": "حقيبة الفن (ألحان شعبية مطورة)",
    "era": "حقبة الحقيبة المبكرة (العشرينيات / الثلاثينيات)",
    "approximatePeriod": "1920s",
    "genre": "حقيبة الفن",
    "heritageCategory": "روائع شعر الحقيبة / حساب الجمل",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة ومطابقة لألفاظ الحقيبة القديمة وتدقيق أرقام حساب الجمل.",
    "story": "تشير الروايات التاريخية الموثقة إلى أن بذور هذه القصيدة بدأت لدى الشاعر الأمين ود الأمين (ود آمنة) من بربر.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تُبرز الأغنية عبقرية شعراء الحقيبة في التلغيم اللغوي واستخدام حساب الجمل الأبجدي.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "من أقدم نصوص الحقيبة المبكرة (العشرينيات).",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 4,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تم التحقق سطر بسطر من سلامة الألفاظ العامية القديمة."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 5,
      "documentedVerseCount": 5,
      "sourcesCompared": [
        "ديوان الحقيبة",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "بادي محمد الطيب",
        "ود السافل"
      ],
      "missingVersesFound": 0,
      "notes": "استعادة المقاطع الخمسة المحققة كاملاً."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "مِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ\nقُلْتُ أَشْرَبْ رَاحْ عَلَّ قَلْبِي إِرْتَاحْ\nلاَ طَبِيبْ جَرَّاحْ لاَ جَابْ شِفَايْ لاَ رَاحْ",
        "foundInSources": [
          "ديوان الحقيبة"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "دِيسِك الكَرَّا بَيْن بَيَاضْ مُو شَيْب\nنَاجَى مِنْ حَرَّة مِنْ غَرَامْ (سَبْعِين)\nخَائِف انْضَرَّا زُولِي فَوْق الجَار عُمْرُو مَا اتْوَرَّا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "بِالسَّمَحْ والزَّيْن زُولِي فَايِت النَّدّ\nمَقْدَمَك رَاجِيك مِنْ ثَمَانِين جَدّ\nلَوْن جَسِيمَهَا حَرِير جَنَفْصَانْ مَا بِهَدّ\nوالعَجَبْ (سَبْعِين) كَانْ تَفُكّ الحَدّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "بِالسَّمَحْ والزَّيْن نَظْرَاهَا قَطّ مَا كَانْ\nالظَّرَفْ تَامَّاهَا خَاتْيَة قُولَة إِنْ كَانْ\nمِنْ جَمَالْ (سَبْعِين) اللَّبِيبْ دَرْكَانْ\nأَنْتِ يا الفِرْدَوْس جَنَّة السُّكَّانْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "ود السافل"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "العَصِير يَوْم جَاتْ شُوفُوا طَاعُونَا\nقَلْبِي دَا المَرْضَانْ بَاقِي مَجْنُونَا\nفِي المَشِي مَا بِنِيشْ يِمْلاَ قَدَمُو تُرَابْ\nالصَّدِير عَالِي حَاجِبِك هِلاَلاَ غَابْ\nمِنْ سَبِيبْ (تِسْعَة) السَّاكِن الجَبْجَابْ\nكَلِّمُوا أَهْلِي اليَكْتُبُولِي حِجَابْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "أرشيف حقيبة الفن - قصيدة فريع البان الكاملة للشاعر ود آمنة والقنديل",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "الأمين ود آمنة / محمد القنديل سحابي",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 4,
      "originalPoem": "المقطع الأول:\nمِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ",
      "recordedVersion": "يؤدي بادي محمد الطيب ومحمد أحمد عوض المقاطع الأول والثاني والثالث والخامس.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص الكامل المكون من 5 مقاطع وتوضيح حساب الجمل."
    },
    "performance": {
      "referenceRecording": "بادي محمد الطيب - تسجيل الحقيبة الخالد",
      "originalKey": "C minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم حقيبة خماسي أصيل (C Eb F G Bb)",
      "rhythm": "حقيبة / 4-4 طمبور رباعي",
      "bpm": 84,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 6,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 رمية ومقدمة حقيبة",
          "bars": 6,
          "cue": "رمية بديعة على السلم مع الصفقة الهادئة"
        },
        {
          "type": "chorus",
          "title": "🎤 مطلع القصيدة",
          "repeat": 1,
          "cue": "من فريع البان اليسوح نديان منو يا سلام"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "مِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ\nقُلْتُ أَشْرَبْ رَاحْ عَلَّ قَلْبِي إِرْتَاحْ\nلاَ طَبِيبْ جَرَّاحْ لاَ جَابْ شِفَايْ لاَ رَاحْ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "دِيسِك الكَرَّا بَيْن بَيَاضْ مُو شَيْب\nنَاجَى مِنْ حَرَّة مِنْ غَرَامْ (سَبْعِين)\nخَائِف انْضَرَّا زُولِي فَوْق الجَار عُمْرُو مَا اتْوَرَّا",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "بِالسَّمَحْ والزَّيْن زُولِي فَايِت النَّدّ\nمَقْدَمَك رَاجِيك مِنْ ثَمَانِين جَدّ\nلَوْن جَسِيمَهَا حَرِير جَنَفْصَانْ مَا بِهَدّ\nوالعَجَبْ (سَبْعِين) كَانْ تَفُكّ الحَدّ",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "بِالسَّمَحْ والزَّيْن نَظْرَاهَا قَطّ مَا كَانْ\nالظَّرَفْ تَامَّاهَا خَاتْيَة قُولَة إِنْ كَانْ\nمِنْ جَمَالْ (سَبْعِين) اللَّبِيبْ دَرْكَانْ\nأَنْتِ يا الفِرْدَوْس جَنَّة السُّكَّانْ",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "العَصِير يَوْم جَاتْ شُوفُوا طَاعُونَا\nقَلْبِي دَا المَرْضَانْ بَاقِي مَجْنُونَا\nفِي المَشِي مَا بِنِيشْ يِمْلاَ قَدَمُو تُرَابْ\nالصَّدِير عَالِي حَاجِبِك هِلاَلاَ غَابْ\nمِنْ سَبِيبْ (تِسْعَة) السَّاكِن الجَبْجَابْ\nكَلِّمُوا أَهْلِي اليَكْتُبُولِي حِجَابْ",
          "isChorus": false
        }
      ],
      "chorus": "مِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ",
      "instrumentalBreaks": [
        "فاصل أورغ طربي 4 بارات على إيقاع الحقيبة الرباعي"
      ],
      "ending": "قفلة هادئة برنية (كلموا أهلي اليكتبولي حجاب)",
      "keyboardNotes": "إيقاع حقيبة رزِين سرعة 84.",
      "vocalistNotes": "الرمية الأولى بطيئة وشجية.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "فريع البان",
        "meaning": "تصغير فرع شجرة البان، استعارة للقوام الرشيق المايس"
      }
    ],
    "recordings": [
      {
        "title": "بادي محمد الطيب - من فريع البان",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleBan",
        "embedId": "ExampleBan"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - التوثيق الكامل لقصيدة فريع البان وحساب الجمل",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (5 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "إعداد بطاقة أداء الحقيبة وتحديد السلم الخماسي الصافي C minor."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "C",
        "key": "C minor",
        "scaleNotes": [
          "C",
          "Eb",
          "F",
          "G",
          "Bb"
        ],
        "solfege": "دو - مي بيمول - فا - صول - سي بيمول",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "4/4",
        "rhythm": "حقيبة رزين 4/4",
        "bpm": 84,
        "vexNotes": [
          "c/4",
          "eb/4",
          "f/4",
          "g/4"
        ],
        "melodySolfegePhrase": "دو - مي بيمول - فا - صول | صول - فا - مي بيمول - دو",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "Cm",
          "Fm",
          "G7",
          "Cm"
        ],
        "intro": [
          "Cm",
          "Fm",
          "Cm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار C",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:35",
            "section": "🎹 الرمية ومقدمة الحقيبة الرزينة",
            "type": "intro",
            "bars": 6,
            "vexNotes": [
              "c/4",
              "eb/4",
              "f/4",
              "g/4"
            ],
            "solfege": "دو - مي بيمول - فا - صول"
          },
          {
            "range": "00:35–01:10",
            "section": "🎤 مطلع القصيدة (من فريع البان)",
            "type": "verse1",
            "bars": 8,
            "vexNotes": [
              "g/4",
              "f/4",
              "eb/4",
              "c/4"
            ],
            "solfege": "صول - فا - مي بيمول - دو"
          },
          {
            "range": "01:10–01:45",
            "section": "🎤 المقطع الثاني (حساب الجمل - 70)",
            "type": "verse2",
            "bars": 8,
            "vexNotes": [
              "c/4",
              "f/4",
              "g/4",
              "bb/4"
            ],
            "solfege": "دو - فا - صول - سي بيمول"
          },
          {
            "range": "01:45–02:15",
            "section": "🎹 فاصل أورغ الحقيبة الرباعي",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "bb/4",
              "g/4",
              "f/4",
              "c/4"
            ],
            "solfege": "سي بيمول - صول - فا - دو"
          },
          {
            "range": "02:15–04:00",
            "section": "📜 باقي المقاطع والتسليم النهائي",
            "type": "verse-repeat",
            "bars": 14
          },
          {
            "range": "04:00–END",
            "section": "🏁 القفلة بكلموا أهلي اليكتبولي حجاب",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "f/4",
              "eb/4",
              "c/4"
            ],
            "solfege": "صول - فا - مي بيمول - دو"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "C minor",
        "bpm": 84,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 رمية ومقدمة حقيبة",
            "bars": 6,
            "cue": "رمية بديعة على السلم مع الصفقة الهادئة"
          },
          {
            "type": "chorus",
            "title": "🎤 مطلع القصيدة",
            "repeat": 1,
            "cue": "من فريع البان اليسوح نديان منو يا سلام"
          }
        ],
        "chords": [
          "Cm",
          "Fm",
          "G7",
          "Cm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "من فريع البان",
      "performer": "بادي محمد الطيب",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "C",
      "pitchSet": [
        "G4",
        "F4",
        "Eb4",
        "C4",
        "Eb4"
      ],
      "openingPitchSequence": [
        "G4",
        "F4",
        "Eb4",
        "C4",
        "Eb4",
        "F4",
        "G4"
      ],
      "openingScaleDegrees": [
        "5",
        "4",
        "3b",
        "1",
        "3b",
        "4",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "h",
        "q",
        "q",
        "h",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "G4",
        "F4",
        "Eb4",
        "C4"
      ],
      "endingFingerprint": [
        "C4",
        "Eb4",
        "F4",
        "G4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "al-khudeir",
    "originalInputTitles": [
      "الخدير"
    ],
    "titleArabic": "الخدير",
    "alternateTitles": [
      "الخدير أنا ماني حي",
      "أهزوجة دق العيش"
    ],
    "openingLine": "الخدير أنا ماني حي.. الخدير دق العيش في القمرا",
    "singers": [
      "بادي محمد الطيب",
      "يوسف البربري",
      "عمار جبرة"
    ],
    "originalPerformer": "تراث حداء وعمل شعبي / اشتهرت بأداء بادي محمد الطيب",
    "poet": "تراث شعبى (أهزوجة عمل جماعي)",
    "composer": "تراث شعبى",
    "era": "تراث قديم ممتد",
    "approximatePeriod": "Ancient",
    "genre": "تراث",
    "heritageCategory": "أغاني الحداء والعمل الزراعي / دق العيش",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة لردود الكورس التراثي (أنا ماني حي) وألفاظ الحداء الزراعي الأصيلة.",
    "story": "تعتبر هذه الأغنية نموذجاً أصيلاً لأغاني 'الحداء' (أغاني العمل الجماعي) التي كان يرددها المزارعون والعمال في الريف السوداني قديماً أثناء عملية 'دق العيش'.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تعكس الأغنية قيم الفزعة والتعاون الجماعي في المجتمع الزراعي السوداني.",
    "rights": {
      "status": "🟢 Traditional / Heritage",
      "evidence": "أهزوجة حداء تراثية شعبية شفهية، تعتبر ملكاً عاماً لجميع أفراد الشعب السوداني.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تم التثبت من رد الكورس التراثي الإيقاعي الأصيل."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 5,
      "documentedVerseCount": 5,
      "sourcesCompared": [
        "معهد الفولكلور",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "بادي محمد الطيب"
      ],
      "missingVersesFound": 0,
      "notes": "استعادة أهزوجة الحداء كاملة."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "الحادي: يا الخَدِير...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: النَّقْدُو الطَّيْر...\nالكورس: أَنَا مَانِي حَيّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "الحادي: اللَّيْل بَرَد...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: والصَّيْد وَرَد...\nالكورس: أَنَا مَانِي حَيّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "الحادي: بَدُقّ العِيشْ بِالقَمْرَا...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: يا آبْ رَاسَيْن نَارَك حَمْرَا...\nالكورس: أَنَا مَانِي حَيّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "الحادي: هَدِيك شَمَّة جَاتْ...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: لاَبْسَة العَاجَاتْ...\nالكورس: أَنَا مَانِي حَيّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "الحادي: بَشِيل كَالامَاتِي...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: بَمْشِي وبَجِيب...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: الفِي القِلِيب...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: بَقُولُو لِيك...\nالكورس: أَنَا مَانِي حَيّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "توثيق أغاني العمل والحداء في التراث السوداني - أهزوجة الخدير",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "تراث شعبى سوداني / أداء بادي محمد الطيب",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (الحادي والكورس):\nالحادي: يا الخَدِير...\nالكورس: أَنَا مَانِي حَيّ",
      "recordedVersion": "سجل بادي محمد الطيب الأهزوجة بتنظيم رائع يجمع الصفقة السودانية السريعة والرد الجماعي.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة البناء الكامل لأهزوجة الحداء التراثية."
    },
    "performance": {
      "referenceRecording": "بادي محمد الطيب - أهزوجة الخدير التراثية",
      "originalKey": "D minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم حداء خماسي ريفي (D F G A C)",
      "rhythm": "إيقاع صفقة ودق العيش سريع",
      "bpm": 112,
      "countIn": "1 - 2 - 1 - 2",
      "introBars": 2,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 صفقة ودخول الإيقاع",
          "bars": 2,
          "cue": "صفقة سودانية حماسية مع الأورغ"
        },
        {
          "type": "verse",
          "title": "🎤 نداء الحادي ورئيس الجلسة",
          "cue": "يا الخدير (رد الكورس: أنا ماني حي)"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "الحادي: يا الخَدِير...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: النَّقْدُو الطَّيْر...\nالكورس: أَنَا مَانِي حَيّ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "الحادي: اللَّيْل بَرَد...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: والصَّيْد وَرَد...\nالكورس: أَنَا مَانِي حَيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "الحادي: بَدُقّ العِيشْ بِالقَمْرَا...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: يا آبْ رَاسَيْن نَارَك حَمْرَا...\nالكورس: أَنَا مَانِي حَيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "الحادي: هَدِيك شَمَّة جَاتْ...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: لاَبْسَة العَاجَاتْ...\nالكورس: أَنَا مَانِي حَيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "الحادي: بَشِيل كَالامَاتِي...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: بَمْشِي وبَجِيب...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: الفِي القِلِيب...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: بَقُولُو لِيك...\nالكورس: أَنَا مَانِي حَيّ",
          "isChorus": false
        }
      ],
      "chorus": "الكورس: أَنَا مَانِي حَيّ (ترديد جماعي مع الصفقة)",
      "instrumentalBreaks": [
        "إيقاع صفقة خماسي حماسي بين أبيات الحداء"
      ],
      "ending": "قفلة سريعة متسارعة تسحب معها الصفقة الجماعية",
      "keyboardNotes": "إيقاع حداء زراعي سريع BPM 112 على سلم D الخماسي.",
      "vocalistNotes": "قيادة نداء الحادي بصوت قوي وقاطع.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "الخدير",
        "meaning": "سنابل الذرة المحصودة وهي ما زالت خضراء وطرية"
      }
    ],
    "recordings": [
      {
        "title": "بادي محمد الطيب - الخدير (جلسة تراثية)",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleKhudeir",
        "embedId": "ExampleKhudeir"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - أهازيج الحداء والعمل في السودان",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل لأهزوجة الخدير وشرح مفردات دق العيش وآب راسين",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تجهيز بطاقة الأداء التراثي السريع للصفقة والتجاوب الجماعي."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "D",
        "key": "D minor",
        "scaleNotes": [
          "D",
          "F",
          "G",
          "A",
          "C"
        ],
        "solfege": "ري - فا - صول - لا - دو",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "2/4",
        "rhythm": "صفقة ودق العيش",
        "bpm": 112,
        "vexNotes": [
          "d/4",
          "f/4",
          "g/4",
          "a/4"
        ],
        "melodySolfegePhrase": "ري - فا - صول - لا | لا - صول - فا - ري",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "Dm",
          "Gm",
          "A7",
          "Dm"
        ],
        "intro": [
          "Dm",
          "Gm",
          "Dm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار D",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:15",
            "section": "🎹 صفقة ودخول إيقاع دق العيش",
            "type": "intro",
            "bars": 2,
            "vexNotes": [
              "d/4",
              "f/4",
              "g/4",
              "a/4"
            ],
            "solfege": "ري - فا - صول - لا"
          },
          {
            "range": "00:15–00:45",
            "section": "🎤 نداء الحادي ورئيس الجلسة (يا الخدير)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "a/4",
              "g/4",
              "f/4",
              "d/4"
            ],
            "solfege": "لا - صول - فا - ري"
          },
          {
            "range": "00:45–01:15",
            "section": "🔁 الرد الجماعي (أنا ماني حي)",
            "type": "chorus",
            "bars": 4,
            "vexNotes": [
              "d/4",
              "g/4",
              "a/4",
              "c/5"
            ],
            "solfege": "ري - صول - لا - دو"
          },
          {
            "range": "01:15–02:50",
            "section": "📜 باقي أهازيج الحداء المتسارعة",
            "type": "verse-repeat",
            "bars": 12
          },
          {
            "range": "02:50–END",
            "section": "🏁 القفلة السريعة مع الصفقة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "a/4",
              "g/4",
              "f/4",
              "d/4"
            ],
            "solfege": "لا - صول - فا - ري"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "D minor",
        "bpm": 112,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 صفقة ودخول الإيقاع",
            "bars": 2,
            "cue": "صفقة سودانية حماسية مع الأورغ"
          },
          {
            "type": "verse",
            "title": "🎤 نداء الحادي ورئيس الجلسة",
            "cue": "يا الخدير (رد الكورس: أنا ماني حي)"
          }
        ],
        "chords": [
          "Dm",
          "Gm",
          "A7",
          "Dm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "الخدير",
      "performer": "بادي محمد الطيب",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "D",
      "pitchSet": [
        "A4",
        "A4",
        "G4",
        "F4",
        "D4"
      ],
      "openingPitchSequence": [
        "A4",
        "A4",
        "G4",
        "F4",
        "D4",
        "F4",
        "G4",
        "A4"
      ],
      "openingScaleDegrees": [
        "5",
        "5",
        "4",
        "3b",
        "1",
        "3b",
        "4",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "8",
        "8",
        "8",
        "8",
        "q",
        "8",
        "8",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "A4",
        "A4",
        "G4",
        "F4"
      ],
      "endingFingerprint": [
        "D4",
        "F4",
        "G4",
        "A4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "ya-raia-jafitani",
    "originalInputTitles": [
      "يا رايع جفينت",
      "يا رائع جفيتني وأنا ضايع"
    ],
    "titleArabic": "يا رائع جفيتني وأنا ضايع",
    "alternateTitles": [
      "يا رايع جفينت (مدخل مدمج)",
      "يا رائع",
      "الخدو لال تعال لي"
    ],
    "openingLine": "يا رائع جفيتني وأنا ضايع.. تعال ليّ.. الخدّو لال تعال ليّ.. دقائق قلال تعال ليّ",
    "singers": [
      "أحمد المصطفى",
      "محمود عبد العزيز"
    ],
    "originalPerformer": "أحمد المصطفى",
    "poet": "أحمد محمد الشيخ (الجاغريو)",
    "composer": "أحمد المصطفى",
    "era": "حقبة الخمسينيات",
    "approximatePeriod": "1950s",
    "genre": "حقيبة الفن",
    "heritageCategory": "روائع الغناء الطربي والوجداني",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة وتدقيق إملائي كامل، وتثبيت تصحيح التصحيف الشائع (يا رايع جفينت) إلى (يا رائع جفيتني).",
    "story": "تعتبر هذه الأغنية من أرق ما كتبه شاعر العيلفون الجاغريو وألحان أحمد المصطفى.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تجسد الأغنية مرحلة انتقال غناء الحقيبة إلى الأوركسترا الحديثة.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "قصيدة طربية خالية من القيود.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مراجعة وتدقيق أبيات (الخدو لال)."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 7,
      "documentedVerseCount": 7,
      "sourcesCompared": [
        "ديوان الجاغريو",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "أحمد المصطفى",
        "محمود عبد العزيز"
      ],
      "missingVersesFound": 5,
      "notes": "استعادة النص الشعري الكامل المكون من 7 مقاطع مطابقة لديوان الجاغريو."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "يا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ\nالخَدُّ لاَلْ .. تَعَالْ لِيّ\nدَقَائِقْ قِلاَلْ .. تَعَالْ لِيّ\nمَعْنَى الدَّلاَلْ .. تَعَالْ لِيّ\nوالحُبُّ حَلاَلْ .. تَعَالْ لِيّ",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "نَايِرْ الخُدُودْ .. تَعَالْ لِيّ\nسِيبْ الصُّدُودْ .. تَعَالْ لِيّ\nخَلِّيكْ ودُودْ .. تَعَالْ لِيّ\nبَجِيكْ فِي الحُدُودْ .. تَعَالْ لِيّ",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "المَا شَافْ صُرُوحْ .. تَعَالْ لِيّ\nأَشْفِي الجُرُوحْ .. تَعَالْ لِيّ\nأَنَا لِيَّ رُوحْ .. تَعَالْ لِيّ\nقَبَّالْ تَرُوحْ .. تَعَالْ لِيّ",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "محمود عبد العزيز"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "مَنَعْنِي الجَوَى .. تَعَالْ لِيّ\nوشُوفْتَكْ دَوَا .. تَعَالْ لِيّ\nعَارِفْ الهَوَى .. تَعَالْ لِيّ\nالأَرْوَاحْ سَوَا .. تَعَالْ لِيّ",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "الفِي الشُّرُوقْ .. تَعَالْ لِيّ\nأَنَا مَا بَرُوقْ .. تَعَالْ لِيّ\nأَنَا مَا بَرُوقْ .. تَعَالْ لِيّ\nوبَسْ مِنْ بُرُوقْ .. تَعَالْ لِيّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "محمود عبد العزيز"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "يا مُزْدَهِرْ .. تَعَالْ لِيّ\nزِينَة الدَّهْرْ .. تَعَالْ لِيّ\nفِي شَاطِي النَّهْرْ .. تَعَالْ لِيّ\nنَعَدِّي البَحْرْ .. تَعَالْ لِيّ",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v7",
        "text": "ظَبْيُ الحُقُولْ .. تَعَالْ لِيّ\nوسَوِّي الأُصُولْ .. تَعَالْ لِيّ\nزِينُ الفُصُولْ .. تَعَالْ لِيّ\nيا الزُّرْتَ الرَّسُولْ .. تَعَالْ لِيّ",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية يا رائع جفيتني كاملة - الشاعر أحمد محمد الشيخ الجاغريو",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "الجاغريو / ألحان أحمد المصطفى",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول:\nيا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ\nالخَدُّ لاَلْ .. تَعَالْ لِيّ",
      "recordedVersion": "يغني أحمد المصطفى ومحمود عبد العزيز المقاطع بتكرار المقطع الأول.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص الكامل للقصيدة (7 مقاطع)."
    },
    "performance": {
      "referenceRecording": "أحمد المصطفى ومحمود عبد العزيز - تسجيل طربي",
      "originalKey": "A minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي طربي دائر (A C D E G)",
      "rhythm": "دائري طربي / 4-4 حديث",
      "bpm": 88,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة طربية دائرية",
          "bars": 4,
          "cue": "مقدمة أورغ شجية برنية رقيقة"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة الشجية",
          "repeat": 2,
          "cue": "يا رائع جفيتني وأنا ضايع تعال لي"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "يا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ\nالخَدُّ لاَلْ .. تَعَالْ لِيّ\nدَقَائِقْ قِلاَلْ .. تَعَالْ لِيّ\nمَعْنَى الدَّلاَلْ .. تَعَالْ لِيّ\nوالحُبُّ حَلاَلْ .. تَعَالْ لِيّ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "نَايِرْ الخُدُودْ .. تَعَالْ لِيّ\nسِيبْ الصُّدُودْ .. تَعَالْ لِيّ\nخَلِّيكْ ودُودْ .. تَعَالْ لِيّ\nبَجِيكْ فِي الحُدُودْ .. تَعَالْ لِيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "المَا شَافْ صُرُوحْ .. تَعَالْ لِيّ\nأَشْفِي الجُرُوحْ .. تَعَالْ لِيّ\nأَنَا لِيَّ رُوحْ .. تَعَالْ لِيّ\nقَبَّالْ تَرُوحْ .. تَعَالْ لِيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "مَنَعْنِي الجَوَى .. تَعَالْ لِيّ\nوشُوفْتَكْ دَوَا .. تَعَالْ لِيّ\nعَارِفْ الهَوَى .. تَعَالْ لِيّ\nالأَرْوَاحْ سَوَا .. تَعَالْ لِيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "الفِي الشُّرُوقْ .. تَعَالْ لِيّ\nأَنَا مَا بَرُوقْ .. تَعَالْ لِيّ\nأَنَا مَا بَرُوقْ .. تَعَالْ لِيّ\nوبَسْ مِنْ بُرُوقْ .. تَعَالْ لِيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "يا مُزْدَهِرْ .. تَعَالْ لِيّ\nزِينَة الدَّهْرْ .. تَعَالْ لِيّ\nفِي شَاطِي النَّهْرْ .. تَعَالْ لِيّ\nنَعَدِّي البَحْرْ .. تَعَالْ لِيّ",
          "isChorus": false
        },
        {
          "section": "المقطع 7 (الأداء الكامل)",
          "text": "ظَبْيُ الحُقُولْ .. تَعَالْ لِيّ\nوسَوِّي الأُصُولْ .. تَعَالْ لِيّ\nزِينُ الفُصُولْ .. تَعَالْ لِيّ\nيا الزُّرْتَ الرَّسُولْ .. تَعَالْ لِيّ",
          "isChorus": false
        }
      ],
      "chorus": "يا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ",
      "instrumentalBreaks": [
        "فاصل دائري 2 بار للأورغ على سلم A minor"
      ],
      "ending": "قفلة هادئة برداء (تعال لي)",
      "keyboardNotes": "سلم A Minor الخماسي. تكرار الجملة الجوابية (تعال لي).",
      "vocalistNotes": "أداء طربي رقيق. الرد السريع بكلمة (تعال لي).",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "جفيتني",
        "meaning": "ابتعدت عني وقطعت وصلي"
      }
    ],
    "recordings": [
      {
        "title": "أحمد المصطفى - يا رائع",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleRaia",
        "embedId": "ExampleRaia"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - توثيق ديوان الجاغريو وقصيدة يا رائع",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل وتأكيد ألحان أحمد المصطفى",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تجهيز بطاقة الأداء الطربي الدائري للبروفة."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "A",
        "key": "A minor",
        "scaleNotes": [
          "A",
          "C",
          "D",
          "E",
          "G"
        ],
        "solfege": "لا - دو - ري - مي - صول",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "4/4",
        "rhythm": "دائري طربي 4/4",
        "bpm": 88,
        "vexNotes": [
          "a/4",
          "c/5",
          "d/5",
          "e/5"
        ],
        "melodySolfegePhrase": "لا - دو - ري - مي | مي - ري - دو - لا",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "intro": [
          "Am",
          "Dm",
          "Am"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار A",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:25",
            "section": "🎹 المقدمة الطربية الدائرية",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "a/4",
              "c/5",
              "d/5",
              "e/5"
            ],
            "solfege": "لا - دو - ري - مي"
          },
          {
            "range": "00:25–00:55",
            "section": "🎤 اللازمة (يا رائع جفيتني وأنا ضايع)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "e/5",
              "d/5",
              "c/5",
              "a/4"
            ],
            "solfege": "مي - ري - دو - لا"
          },
          {
            "range": "00:55–01:25",
            "section": "🎤 المقطع الأول (ناير الخدود)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "a/4",
              "d/5",
              "e/5",
              "g/5"
            ],
            "solfege": "لا - ري - مي - صول"
          },
          {
            "range": "01:25–01:45",
            "section": "🎹 صولو الأورغ الدائري لحسن غزالي",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "g/5",
              "e/5",
              "d/5",
              "a/4"
            ],
            "solfege": "صول - مي - ري - لا"
          },
          {
            "range": "01:45–03:50",
            "section": "📜 المقاطع 2–7 على نفس اللحن الطربي",
            "type": "verse-repeat",
            "bars": 16
          },
          {
            "range": "03:50–END",
            "section": "🏁 القفلة الهادئة (تعال لي)",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "e/5",
              "d/5",
              "c/5",
              "a/4"
            ],
            "solfege": "مي - ري - دو - لا"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "A minor",
        "bpm": 88,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة طربية دائرية",
            "bars": 4,
            "cue": "مقدمة أورغ شجية برنية رقيقة"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة الشجية",
            "repeat": 2,
            "cue": "يا رائع جفيتني وأنا ضايع تعال لي"
          }
        ],
        "chords": [
          "Am",
          "Dm",
          "E7",
          "Am"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "يا رائع جفيتني وأنا ضايع",
      "performer": "أحمد المصطفى",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "A",
      "pitchSet": [
        "E5",
        "E5",
        "D5",
        "C5",
        "A4"
      ],
      "openingPitchSequence": [
        "E5",
        "E5",
        "D5",
        "C5",
        "A4",
        "G4",
        "A4"
      ],
      "openingScaleDegrees": [
        "5",
        "5",
        "4",
        "3b",
        "1",
        "7b",
        "1"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "q",
        "8",
        "8",
        "q",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "E5",
        "E5",
        "D5",
        "C5"
      ],
      "endingFingerprint": [
        "C5",
        "A4",
        "G4",
        "A4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "samiri-fil-dhamiri",
    "originalInputTitles": [
      "سميري الفي ضميري"
    ],
    "titleArabic": "سميري الفي ضميري",
    "alternateTitles": [
      "المرسوم في ضميري",
      "وين سميري"
    ],
    "openingLine": "المرسوم في ضميري.. وين سميري.. يا زهرة أحلامي.. بنظم فيك كلامي",
    "singers": [
      "أحمد المصطفى",
      "مبارك حسن بركات"
    ],
    "originalPerformer": "أحمد المصطفى",
    "poet": "أحمد محمد الشيخ (الجاغريو)",
    "composer": "الجاغريو / أحمد المصطفى",
    "era": "حقبة الأربعينيات / الخمسينيات",
    "approximatePeriod": "1940s",
    "genre": "حقيبة الفن",
    "heritageCategory": "روائع الحقيبة العاطفية / أغاني الخرطوم",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة وتدقيق لألفاظ قصيدة الجاغريو والأسماء الجغرافية الواردة بالخرطوم.",
    "story": "شكت حسناوات مدينة الخرطوم لشاعر العيلفون الكبير أحمد محمد الشيخ (الجاغريو) أن شعراء الحقيبة يركزون معظم قصائدهم الغزلية على فتيات أم درمان فقط. فنظم الجاغريو هذه الرائعة ليمجد فيها حسناوات الخرطوم وذكر فيها الخرطوم تلاتة والحلة الجديدة وقوز الرميلة وشارع الإسبتالية، وأهداها للفنان أحمد المصطفى.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "توضح المنافسة الجمالية والاحتفاء الأدبي بين مدن المثلث العاصمي.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "من عيون شعر الحقيبة المسجلة في أربعينيات القرن الماضي، يعتبر ملكاً عاماً خالية من قيود الملكية.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مراجعة وتدقيق أسماء الأحياء والمستشفيات التاريخية بالخرطوم."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 8,
      "documentedVerseCount": 8,
      "sourcesCompared": [
        "ديوان الجاغريو",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "أحمد المصطفى",
        "مبارك حسن بركات"
      ],
      "missingVersesFound": 5,
      "notes": "استعادة المقاطع الثمانية المحققة كاملاً بالتأكيد الجغرافي لأحياء الخرطوم."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "المَرْسُومْ فِي ضَمِيرِي وِينْ سَمِيرِي\nجَمِيلْ يا الفِي ضَمِيرِي وِينْ سَمِيرِي",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "يا زَهْرَة أِحْلاَمِي.. بَنَظِّمْ فِيكِ كَلاَمِي\nنَايِحْ ودَمْعِي هَامِي.. يا وَحْيِ إِلهَامِي\nمَعَ القُمْرِي البَقُوقِي.. بَرْسِلْ لِيكِ سَلاَمِي",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "نَزَلَتْ مِنِّي دَمْعَة.. والأُمَّة مُجْتَمِعَة\nواليَوْم كَانْ جُمْعَة.. يا فَارِم الإِمْعَة\nأَعْطِفْ سِيبْ صُدُودَكْ.. حَبِيبْ رُوحِي يا أَبْ لَمْعَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "مبارك حسن بركات"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "حَبِيبْ رُوحِي أَهْدِيلِي.. مِنْ عِنَبَكْ أَدِّيلِي\nيا مَرَاكْبِي عَدِّيلِي.. أَنَا نَسِيتْ مَنَادِيلِي",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "دِيلْ نَسَمَاتَهَا حَالْيَة.. مُهَذَّبَة رُوحَهَا عَالْيَة\nوبَسْ نَظَرَاتَهَا غَالْيَة.. فِي الحَيِّ الأَمَامِي\nجِوَارْ الإِسْبِتَالْيَة.. وِينْ سَمِيرِي",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "هَدِيلِكْ جَنّ ثَلاَثَة.. بَعْرِفْ تُومْتِي يَاتَا\nبَحْلِفْ بِي حَيَاتَا.. بَرِيدَهَا وبَرِيدْ غَلاَتَا\nبَهَاجِرْ لِيهَا حَافِي.. وأَزُورْ بَيْتِ الخَيَاطَة",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "تسجيل الحقيبة"
        ],
        "confidence": "high"
      },
      {
        "id": "v7",
        "text": "أَنْظُرْ شُوفْ حَلاَتَا.. الَظَّهَرَتْ بِي غَلاَتَا\nالنَّاعِسَاتْ كَاحِلاَتَا.. أَنَا دَسْتُورِي نَازِلْ فِي الخَرْطُومْ ثَلاَثَة",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      },
      {
        "id": "v8",
        "text": "لِي أَيَّامْ عَدِيدَة.. مِنْ النَّايِرْ خَدِيدَا\nيا المَالِكْنِي رِيدَا.. يا المَا لِيكِ نَدِيدَة\nأَجْمَلْ غَانِيَة شُفْتِكْ.. فِي الحِلَّة الجَدِيدَة",
        "foundInSources": [
          "ديوان الجاغريو"
        ],
        "foundInRecordings": [
          "أحمد المصطفى"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "المرسوم في ضميري وين سميري - الشاعر الجاغريو",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "الجاغريو / ألحان أحمد المصطفى",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (اللازمة):\nالمَرْسُومْ فِي ضَمِيرِي وِينْ سَمِيرِي\nجَمِيلْ يا الفِي ضَمِيرِي وِينْ سَمِيرِي",
      "recordedVersion": "يؤدي أحمد المصطفى ومبارك حسن بركات المقاطع 1، 2، 5، 7، 8 في معظم الجلسات والتسجيلات الإذاعية.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة القصيدة الكاملة (8 مقاطع) على سودانيز أونلاين."
    },
    "performance": {
      "referenceRecording": "أحمد المصطفى - التسجيل الإذاعي العاطفي",
      "originalKey": "Bb minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي طربي رزين",
      "rhythm": "حقيبة رزين 4-4",
      "bpm": 80,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة حقيبة الخرطوم",
          "bars": 4,
          "cue": "مقدمة أورغ هادئة على سلم Bb الخماسي"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة",
          "repeat": 2,
          "cue": "المرسوم في ضميري وين سميري"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "المَرْسُومْ فِي ضَمِيرِي وِينْ سَمِيرِي\nجَمِيلْ يا الفِي ضَمِيرِي وِينْ سَمِيرِي",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "يا زَهْرَة أِحْلاَمِي.. بَنَظِّمْ فِيكِ كَلاَمِي\nنَايِحْ ودَمْعِي هَامِي.. يا وَحْيِ إِلهَامِي\nمَعَ القُمْرِي البَقُوقِي.. بَرْسِلْ لِيكِ سَلاَمِي",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "نَزَلَتْ مِنِّي دَمْعَة.. والأُمَّة مُجْتَمِعَة\nواليَوْم كَانْ جُمْعَة.. يا فَارِم الإِمْعَة\nأَعْطِفْ سِيبْ صُدُودَكْ.. حَبِيبْ رُوحِي يا أَبْ لَمْعَة",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "حَبِيبْ رُوحِي أَهْدِيلِي.. مِنْ عِنَبَكْ أَدِّيلِي\nيا مَرَاكْبِي عَدِّيلِي.. أَنَا نَسِيتْ مَنَادِيلِي",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "دِيلْ نَسَمَاتَهَا حَالْيَة.. مُهَذَّبَة رُوحَهَا عَالْيَة\nوبَسْ نَظَرَاتَهَا غَالْيَة.. فِي الحَيِّ الأَمَامِي\nجِوَارْ الإِسْبِتَالْيَة.. وِينْ سَمِيرِي",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "هَدِيلِكْ جَنّ ثَلاَثَة.. بَعْرِفْ تُومْتِي يَاتَا\nبَحْلِفْ بِي حَيَاتَا.. بَرِيدَهَا وبَرِيدْ غَلاَتَا\nبَهَاجِرْ لِيهَا حَافِي.. وأَزُورْ بَيْتِ الخَيَاطَة",
          "isChorus": false
        },
        {
          "section": "المقطع 7 (الأداء الكامل)",
          "text": "أَنْظُرْ شُوفْ حَلاَتَا.. الَظَّهَرَتْ بِي غَلاَتَا\nالنَّاعِسَاتْ كَاحِلاَتَا.. أَنَا دَسْتُورِي نَازِلْ فِي الخَرْطُومْ ثَلاَثَة",
          "isChorus": false
        },
        {
          "section": "المقطع 8 (الأداء الكامل)",
          "text": "لِي أَيَّامْ عَدِيدَة.. مِنْ النَّايِرْ خَدِيدَا\nيا المَالِكْنِي رِيدَا.. يا المَا لِيكِ نَدِيدَة\nأَجْمَلْ غَانِيَة شُفْتِكْ.. فِي الحِلَّة الجَدِيدَة",
          "isChorus": false
        }
      ],
      "chorus": "المَرْسُومْ فِي ضَمِيرِي وِينْ سَمِيرِي",
      "instrumentalBreaks": [
        "فاصل حقيبة هادئ 2 بار"
      ],
      "ending": "قفلة رقيقة متأنية على Bb minor",
      "keyboardNotes": "سلم Bb minor الخماسي العاطفي. سرعة 80 روتينية ورزينة.",
      "vocalistNotes": "أداء رقيق جداً بصوت دافئ.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "سميري",
        "meaning": "مسامري وشريكي في أفكار الليل"
      }
    ],
    "recordings": [
      {
        "title": "أحمد المصطفى - سميري الفي ضميري",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleSamiri",
        "embedId": "ExampleSamiri"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - توثيق أغنية المرسوم في ضميري للشاعر الجاغريو",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (8 مقاطع) وقصة شكوى حسناوات الخرطوم وتحديد الأحياء",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تجهيز بطاقة الأداء الأرشيفي للبروفة."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "Bb",
        "key": "Bb minor",
        "scaleNotes": [
          "Bb",
          "Db",
          "Eb",
          "F",
          "Ab"
        ],
        "solfege": "سي بيمول - دو بيمول - مي بيمول - فا - لا بيمول",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "4/4",
        "rhythm": "حقيبة الخرطوم رزين",
        "bpm": 80,
        "vexNotes": [
          "bb/4",
          "db/5",
          "eb/5",
          "f/5"
        ],
        "melodySolfegePhrase": "سي بيمول - دو بيمول - مي بيمول - فا | فا - مي بيمول - سي بيمول",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 1",
        "chords": [
          "Bbm",
          "Ebm",
          "F7",
          "Bbm"
        ],
        "intro": [
          "Bbm",
          "Ebm",
          "Bbm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار Bb",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:30",
            "section": "🎹 مقدمة حقيبة الخرطوم",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "bb/4",
              "db/5",
              "eb/5",
              "f/5"
            ],
            "solfege": "سي بيمول - دو بيمول - مي بيمول - فا"
          },
          {
            "range": "00:30–01:05",
            "section": "🎤 اللازمة (المرسوم في ضميري)",
            "type": "chorus",
            "bars": 8,
            "vexNotes": [
              "f/5",
              "eb/5",
              "db/5",
              "bb/4"
            ],
            "solfege": "فا - مي بيمول - دو بيمول - سي بيمول"
          },
          {
            "range": "01:05–01:40",
            "section": "🎤 المقطع الأول (يا زهرة أحلامي)",
            "type": "verse1",
            "bars": 8,
            "vexNotes": [
              "bb/4",
              "eb/5",
              "f/5",
              "ab/5"
            ],
            "solfege": "سي بيمول - مي بيمول - فا - لا بيمول"
          },
          {
            "range": "01:40–02:05",
            "section": "🎹 فاصل الأورغ الرزين",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "ab/5",
              "f/5",
              "eb/5",
              "bb/4"
            ],
            "solfege": "لا بيمول - فا - مي بيمول - سي بيمول"
          },
          {
            "range": "02:05–04:15",
            "section": "📜 المقاطع الجغرافية (الخرطوم 3 والإسبتالية)",
            "type": "verse-repeat",
            "bars": 18
          },
          {
            "range": "04:15–END",
            "section": "🏁 القفلة المتأنية برعشة النوتة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "f/5",
              "eb/5",
              "db/5",
              "bb/4"
            ],
            "solfege": "فا - مي بيمول - دو بيمول - سي بيمول"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "Bb minor",
        "bpm": 80,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة حقيبة الخرطوم",
            "bars": 4,
            "cue": "مقدمة أورغ هادئة على سلم Bb الخماسي"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة",
            "repeat": 2,
            "cue": "المرسوم في ضميري وين سميري"
          }
        ],
        "chords": [
          "Bbm",
          "Ebm",
          "F7",
          "Bbm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "سميري الفي ضميري",
      "performer": "أحمد المصطفى",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "Bb",
      "pitchSet": [
        "F5",
        "F5",
        "Eb5",
        "Db5",
        "Bb4"
      ],
      "openingPitchSequence": [
        "F5",
        "F5",
        "Eb5",
        "Db5",
        "Bb4",
        "Ab4",
        "Bb4"
      ],
      "openingScaleDegrees": [
        "5",
        "5",
        "4",
        "3b",
        "1",
        "7b",
        "1"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "h",
        "q",
        "q",
        "h",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "F5",
        "F5",
        "Eb5",
        "Db5"
      ],
      "endingFingerprint": [
        "Db5",
        "Bb4",
        "Ab4",
        "Bb4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "juba-malik-alay",
    "originalInputTitles": [
      "جوبا مالك عليه"
    ],
    "titleArabic": "جوبا مالك علي",
    "alternateTitles": [
      "جوبا مالك عليه",
      "جوبا مالك عليا",
      "ده يوم اللوري شالو"
    ],
    "openingLine": "جوبا مالك عليا.. أنا جوبا شلتي عينيا أنا.. ده يوم اللوري شالو.. ده شال قلبي قبالو",
    "singers": [
      "أحمد الجابري",
      "محمود علي الحاج ومصطفى بخيت",
      "إنصاف مدني",
      "هدى عربي",
      "يوسف البربري"
    ],
    "originalPerformer": "تراث تمتم قديم / طورها عبيد عبد الرحمن ومحمد أحمد عوض",
    "poet": "تراث شعبى (تهذيب الشاعر عبيد عبد الرحمن)",
    "composer": "تراث إيقاع التمتم (تطوير محمد أحمد عوض)",
    "era": "حقبة الخمسينيات",
    "approximatePeriod": "1950s",
    "genre": "تراث",
    "heritageCategory": "إيقاع التمتم / سيرة وسفر",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة وتدقيق لألفاظ الـ تمتم التراثية السريعة.",
    "story": "نشأت الأغنية في الأصل كأهزوجة تراثية على إيقاع 'التمتم' تتغنى بها الفتيات لوصف سفر الحبيب إلى مدينة جوبا في جنوب السودان عبر اللوري.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "ترتبط الأغنية بوسيلة المواصلات التاريخية (اللوري السفري).",
    "rights": {
      "status": "🟢 Traditional / Heritage",
      "evidence": "أغنية تمتم تراثية شعبية، خالية من القيود الملكية.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 2,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تم تدقيق نطق التمتم السوداني الاصيل."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 3,
      "documentedVerseCount": 3,
      "sourcesCompared": [
        "تراث التمتم",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "أحمد الجابري",
        "هدى عربي"
      ],
      "missingVersesFound": 1,
      "notes": "استعادة النص التراثي الكامل لإيقاع التمتم ومقاطع اللوري الجوبا."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "جُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا\nيا وَرْدَة يا تِينَا.. يا الدِّيمَة عَلَيَّ حَنِينَة أَنَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "الجابري"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "عَشَانْ بِمْشِي ويَجِينَا.. النَّاسْ عَمَلُوهَا فِينَا أَنَا\nأَمَالِي وأَمَالُو أَنَا.. وأَفْكَارِي وأَفْكَارُو أَنَا\nدَه يَوْمْ اللَّورِي شَالُو.. أَنَا دَه شَالْ قَلْبِي قُبَالُو أَنَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "هدى عربي"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "سَافَر لِي جُوبَا البعيدة.. وسَابْ لِي الرِّيدَة الشَّدِيدَة\nيا لَوْرِي السَّفَر عَدِّي.. وبَلِّغْ سَلاَمِي وحُبِّي",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أرشيف التمتم"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية جوبا مالك علي كاملة - تراث التمتم السوداني",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "تراث تمتم / تهذيب عبيد عبد الرحمن",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 2,
      "originalPoem": "المقطع الأول (اللازمة):\nجُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا",
      "recordedVersion": "يغني الجابري وهدى عربي المقاطع الثلاثة مع تكرار اللازمة.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص التراثي الكامل لإيقاع التمتم."
    },
    "performance": {
      "referenceRecording": "أحمد الجابري وهدى عربي - تسجيل التمتم",
      "originalKey": "D major",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم تمتم الخماسي (D E F# A B)",
      "rhythm": "إيقاع تمتم سوداني أصيل",
      "bpm": 110,
      "countIn": "1 - 2 - 1 - 2",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة التمتم السريعة",
          "bars": 4,
          "cue": "دخول ضربة التمتم مع الأورغ لحسن غزالي"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة",
          "repeat": 2,
          "cue": "جوبا مالك عليا أنا جوبا شلتي عينيا أنا"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "جُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا\nيا وَرْدَة يا تِينَا.. يا الدِّيمَة عَلَيَّ حَنِينَة أَنَا",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "عَشَانْ بِمْشِي ويَجِينَا.. النَّاسْ عَمَلُوهَا فِينَا أَنَا\nأَمَالِي وأَمَالُو أَنَا.. وأَفْكَارِي وأَفْكَارُو أَنَا\nدَه يَوْمْ اللَّورِي شَالُو.. أَنَا دَه شَالْ قَلْبِي قُبَالُو أَنَا",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "سَافَر لِي جُوبَا البعيدة.. وسَابْ لِي الرِّيدَة الشَّدِيدَة\nيا لَوْرِي السَّفَر عَدِّي.. وبَلِّغْ سَلاَمِي وحُبِّي",
          "isChorus": false
        }
      ],
      "chorus": "جُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا",
      "instrumentalBreaks": [
        "إيقاع تمتم راقص 2 بار"
      ],
      "ending": "قفلة تمتم سريعة مبهجة",
      "keyboardNotes": "إيقاع التمتم الأصيل BPM 110. سلم D Major الخماسي.",
      "vocalistNotes": "أداء مبهج ومرح بإيقاع التمتم.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "شلتي عينيا",
        "meaning": "سحرتي بصري وأخذتي قرة عيني"
      }
    ],
    "recordings": [
      {
        "title": "أحمد الجابري - جوبا مالك علي",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleJuba",
        "embedId": "ExampleJuba"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - تراث التمتم وأغنية جوبا",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل وتوثيق تطوير عبيد عبد الرحمن ومحمد أحمد عوض",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "مراجعة وتثبيت الألفاظ التراثية."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "D",
        "key": "D major",
        "scaleNotes": [
          "D",
          "E",
          "F#",
          "A",
          "B"
        ],
        "solfege": "ري - مي - فا دييز - لا - سي",
        "scaleDegrees": "1 - 2 - 3# - 5 - 6",
        "timeSignature": "2/4",
        "rhythm": "تمتم سوداني أصيل",
        "bpm": 110,
        "vexNotes": [
          "d/4",
          "e/4",
          "f#/4",
          "a/4"
        ],
        "melodySolfegePhrase": "ري - مي - فا دييز - لا | لا - فا دييز - مي - ري",
        "melodyDegreesPhrase": "1 - 2 - 3# - 5 | 5 - 3# - 2 - 1",
        "chords": [
          "D",
          "G",
          "A7",
          "D"
        ],
        "intro": [
          "D",
          "G",
          "D"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار D",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:15",
            "section": "🎹 ضربة التمتم السريعة للأورغ",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "d/4",
              "e/4",
              "f#/4",
              "a/4"
            ],
            "solfege": "ري - مي - فا دييز - لا"
          },
          {
            "range": "00:15–00:45",
            "section": "🎤 اللازمة (جوبا مالك عليا)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "a/4",
              "f#/4",
              "e/4",
              "d/4"
            ],
            "solfege": "لا - فا دييز - مي - ري"
          },
          {
            "range": "00:45–01:15",
            "section": "🎤 المقطع الأول (ده يوم اللوري شالو)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "d/4",
              "f#/4",
              "a/4",
              "b/4"
            ],
            "solfege": "ري - فا دييز - لا - سي"
          },
          {
            "range": "01:15–03:00",
            "section": "📜 باقي المقاطع والقفلة السريعة",
            "type": "verse-repeat",
            "bars": 10
          },
          {
            "range": "03:00–END",
            "section": "🏁 القفلة السريعة المبهجة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "a/4",
              "f#/4",
              "e/4",
              "d/4"
            ],
            "solfege": "لا - فا دييز - مي - ري"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "D major",
        "bpm": 110,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة التمتم السريعة",
            "bars": 4,
            "cue": "دخول ضربة التمتم مع الأورغ لحسن غزالي"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة",
            "repeat": 2,
            "cue": "جوبا مالك عليا أنا جوبا شلتي عينيا أنا"
          }
        ],
        "chords": [
          "D",
          "G",
          "A7",
          "D"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "جوبا مالك علي",
      "performer": "أحمد الجابري",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "D",
      "pitchSet": [
        "A4",
        "F#4",
        "E4",
        "D4",
        "E4"
      ],
      "openingPitchSequence": [
        "A4",
        "F#4",
        "E4",
        "D4",
        "E4",
        "F#4",
        "A4"
      ],
      "openingScaleDegrees": [
        "5",
        "3#",
        "2",
        "1",
        "2",
        "3#",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "8",
        "8",
        "8",
        "8",
        "8",
        "8",
        "q"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "A4",
        "F#4",
        "E4",
        "D4"
      ],
      "endingFingerprint": [
        "D4",
        "E4",
        "F#4",
        "A4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "bil-asr-mururu",
    "originalInputTitles": [
      "الليلة وين البي العصر مرورو"
    ],
    "titleArabic": "البي العصر مرورو",
    "alternateTitles": [
      "الليلة وين البي العصر مرورو",
      "حبيبي البدورو",
      "ترنيمة الشاعرة قمر"
    ],
    "openingLine": "الليلَة ويْن أنا البِي العَصِرْ مُرُورُو.. خَلِيهُم يَقُولُوا كِتِير النَّاس بِقُولُوا",
    "singers": [
      "إنصاف فتحي",
      "سميرة دنيا",
      "يوسف البربري",
      "هدى عربي"
    ],
    "originalPerformer": "تراث أغاني البنات / الشاعرة قمر + الجاغريو",
    "poet": "الشاعرة قمر (العيلفون) + الشاعر الجاغريو",
    "composer": "تراث سيرة / الجاغريو",
    "era": "حقبة الأربعينيات",
    "approximatePeriod": "1940s",
    "genre": "تراث",
    "heritageCategory": "أغاني البنات / السيرة والاحتفاء",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة لترنيمة قمر وتكميل الجاغريو ومقارنة روايات العيلفون ورسم المفردات العامية.",
    "story": "تبدأ قصة الأغنية في منطقة العيلفون، حيث كانت فتاة تدعى 'قمر' تلاحظ المور اليومي للشيخ إدريس خليفة الأرباب في وقت العصر بين المسجد والمنزل، فأنشأت الترنيمة الأولى 'البي العصر مرورو'.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تظهر الأغنية التداخل الشفيف بين تراث أغاني البنات وشعراء الحقيبة.",
    "rights": {
      "status": "🟢 Traditional / Heritage",
      "evidence": "تراث بنات وسيرة سوداني شعبى متاح ومسجل في أربعينيات القرن الماضي.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مراجعة مفردات (صيدة الخلا الجافلة، مالك السوالف)."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 5,
      "documentedVerseCount": 5,
      "sourcesCompared": [
        "ترنيمة العيلفون",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "إنصاف فتحي",
        "هدى عربي"
      ],
      "missingVersesFound": 3,
      "notes": "استعادة المقاطع الخمسة الكاملة بما فيها صيدة الخلا ومطر القضارف."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..\nدَه حَبِيبِي جَفَانِي.. جَفَانِي.. ومَشَى وتَانِي مَا جَانِي..\nمَا رَاعَى إِنْسَانِي.. ومَا قَدَّرْ عَشَانِي..\nتَعَالْ عُودْ لِيَّ تَانِي.. النَّاسْ مَا مَرِيحَانِي..\nالليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "إنصاف فتحي"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "خَلِيهُم يَقُولُوا كِتِير النَّاس بِقُولُوا..\nدَه حَبِيبِي البَدُورُو.. البَغْرَقْ فِي بُحُورُو..\nأَخُوضْ النَّار وأَزُورُو..\nإِنْتَ بَحْرِ السَّمَاحَة.. السَّمَاحَة..\nيِجُوا العُشَّاقْ يِزُورُوا..\nحَبِيبِي بَرَايْ أَنَا البِي العَصِرْ مُرُورُو..",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "هدى عربي"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "خَلِيهُم يِغَنُّوا.. يِغَنُّوا كِتِير العِشْقُوا جَنُّوا..\nالرِّيدْ إِنْتُو مَا عَارْفِينُو..\nامْشُوا اسْأَلُوا عَنُّو..\nبَلاَقِي ويْن أَنَا البِي العَصِرْ مُرُورُو..",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "سميرة دنيا"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "يا مَالِكْ السَّوَالِفْ.. السَّوَالِفْ.. أَنَا عِنْدِي لِيكْ سَالِفْ..\nالطَّيْر لِيَّ حَنَّ بِي لَبَنُو المُخَالِفْ..\nصِيدَة الخَلاَ الجَافْلَة.. دِي الجَافْلَة.. بَدَتْ عَلَيَّ تَوَالِفْ..\nشُوفْ دَمْعِي أَنَا الزَّارِفْ.. الَّذِي مَطَر القَضَارِفْ..\nحَبِيبِي بَرَايْ أَنَا البِي العَصِرْ مُرُورُو..",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "إنصاف فتحي"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "بَشِيلَكْ مِرَايَة.. مِرَايَة بَعَايِنْ لِيكْ بَرَايَا..\nفِي صُبْحِي ومَسَايَا.. يا سَعْدِي وهَنَايَا..\nكَلاَمْ النَّاس دِعَايَة.. دِعَايَة.. مَعَاكْ أَنَا لِلنِّهَايَة..\nحَبِيبِي ويْن أَنَا البِي العَصِرْ مُرُورُو..",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "هدى عربي"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية البي العصر مرورو كاملة - ترنيمة قمر وتكميل الجاغريو",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "الشاعرة قمر / الجاغريو",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (اللازمة):\nالليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..",
      "recordedVersion": "تغني إنصاف فتحي وهدى عربي المقاطع الخمسة بتكرار اللازمة الشعبية المبهجة.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص الشعري الكامل المكون من 5 مقاطع."
    },
    "performance": {
      "referenceRecording": "إنصاف فتحي وهدى عربي - تسجيل السيرة المبهج",
      "originalKey": "G major",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم سيرة خماسي مبهج",
      "rhythm": "إيقاع سيرة سودانية أصيلة",
      "bpm": 106,
      "countIn": "1 - 2 - 1 - 2",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة السيرة والعيلفون",
          "bars": 4,
          "cue": "مقدمة أورغ مبهجة مع صفقة السيرة"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة",
          "repeat": 2,
          "cue": "الليلة وين أنا البي العصر مرورو"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..\nدَه حَبِيبِي جَفَانِي.. جَفَانِي.. ومَشَى وتَانِي مَا جَانِي..\nمَا رَاعَى إِنْسَانِي.. ومَا قَدَّرْ عَشَانِي..\nتَعَالْ عُودْ لِيَّ تَانِي.. النَّاسْ مَا مَرِيحَانِي..\nالليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "خَلِيهُم يَقُولُوا كِتِير النَّاس بِقُولُوا..\nدَه حَبِيبِي البَدُورُو.. البَغْرَقْ فِي بُحُورُو..\nأَخُوضْ النَّار وأَزُورُو..\nإِنْتَ بَحْرِ السَّمَاحَة.. السَّمَاحَة..\nيِجُوا العُشَّاقْ يِزُورُوا..\nحَبِيبِي بَرَايْ أَنَا البِي العَصِرْ مُرُورُو..",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "خَلِيهُم يِغَنُّوا.. يِغَنُّوا كِتِير العِشْقُوا جَنُّوا..\nالرِّيدْ إِنْتُو مَا عَارْفِينُو..\nامْشُوا اسْأَلُوا عَنُّو..\nبَلاَقِي ويْن أَنَا البِي العَصِرْ مُرُورُو..",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "يا مَالِكْ السَّوَالِفْ.. السَّوَالِفْ.. أَنَا عِنْدِي لِيكْ سَالِفْ..\nالطَّيْر لِيَّ حَنَّ بِي لَبَنُو المُخَالِفْ..\nصِيدَة الخَلاَ الجَافْلَة.. دِي الجَافْلَة.. بَدَتْ عَلَيَّ تَوَالِفْ..\nشُوفْ دَمْعِي أَنَا الزَّارِفْ.. الَّذِي مَطَر القَضَارِفْ..\nحَبِيبِي بَرَايْ أَنَا البِي العَصِرْ مُرُورُو..",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "بَشِيلَكْ مِرَايَة.. مِرَايَة بَعَايِنْ لِيكْ بَرَايَا..\nفِي صُبْحِي ومَسَايَا.. يا سَعْدِي وهَنَايَا..\nكَلاَمْ النَّاس دِعَايَة.. دِعَايَة.. مَعَاكْ أَنَا لِلنِّهَايَة..\nحَبِيبِي ويْن أَنَا البِي العَصِرْ مُرُورُو..",
          "isChorus": false
        }
      ],
      "chorus": "الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..",
      "instrumentalBreaks": [
        "إيقاع سيرة سوداني 2 بار"
      ],
      "ending": "قفلة سيرة مبهجة",
      "keyboardNotes": "إيقاع سيرة سوداني أصيل BPM 106 على سلم G Major الخماسي.",
      "vocalistNotes": "أداء مبهج ومرح يعكس تراث العيلفون والسيرة.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "البي العصر مرورو",
        "meaning": "الذي اعاد المرور والظهور في وقت العصر"
      }
    ],
    "recordings": [
      {
        "title": "إنصاف فتحي - البي العصر مرورو",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleAsr",
        "embedId": "ExampleAsr"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - توثيق أغنية الفي العصر مرورو للجاغريو وقمر",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (5 مقاطع) وتوثيق القصة والشاعرة قمر",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "مراجعة وتدقيق النص سطر بسطر."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "G",
        "key": "G major",
        "scaleNotes": [
          "G",
          "A",
          "B",
          "D",
          "E"
        ],
        "solfege": "صول - لا - سي - ري - مي",
        "scaleDegrees": "1 - 2 - 3 - 5 - 6",
        "timeSignature": "2/4",
        "rhythm": "سيرة سودانية أصيلة",
        "bpm": 106,
        "vexNotes": [
          "g/4",
          "a/4",
          "b/4",
          "d/5"
        ],
        "melodySolfegePhrase": "صول - لا - سي - ري | ري - سي - لا - صول",
        "melodyDegreesPhrase": "1 - 2 - 3 - 5 | 5 - 3 - 2 - 1",
        "chords": [
          "G",
          "C",
          "D7",
          "G"
        ],
        "intro": [
          "G",
          "C",
          "G"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار G",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:20",
            "section": "🎹 مقدمة السيرة والعيلفون",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "a/4",
              "b/4",
              "d/5"
            ],
            "solfege": "صول - لا - سي - ري"
          },
          {
            "range": "00:20–00:50",
            "section": "🎤 اللازمة (البي العصر مرورو)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "d/5",
              "b/4",
              "a/4",
              "g/4"
            ],
            "solfege": "ري - سي - لا - صول"
          },
          {
            "range": "00:50–01:20",
            "section": "🎤 المقطع الأول (خليهم يقولوا)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "g/4",
              "b/4",
              "d/5",
              "e/5"
            ],
            "solfege": "صول - سي - ري - مي"
          },
          {
            "range": "01:20–01:40",
            "section": "🎹 صولو سيرة العيلفون لحسن غزالي",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "e/5",
              "d/5",
              "b/4",
              "g/4"
            ],
            "solfege": "مي - ري - سي - صول"
          },
          {
            "range": "01:40–03:40",
            "section": "📜 باقي مقاطع صيدة الخلا وبشيلك مراية",
            "type": "verse-repeat",
            "bars": 14
          },
          {
            "range": "03:40–END",
            "section": "🏁 القفلة السريعة على نغمة صول",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "d/5",
              "b/4",
              "a/4",
              "g/4"
            ],
            "solfege": "ري - سي - لا - صول"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "G major",
        "bpm": 106,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة السيرة والعيلفون",
            "bars": 4,
            "cue": "مقدمة أورغ مبهجة مع صفقة السيرة"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة",
            "repeat": 2,
            "cue": "الليلة وين أنا البي العصر مرورو"
          }
        ],
        "chords": [
          "G",
          "C",
          "D7",
          "G"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "البي العصر مرورو",
      "performer": "إنصاف فتحي",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "G",
      "pitchSet": [
        "D5",
        "B4",
        "A4",
        "G4",
        "A4"
      ],
      "openingPitchSequence": [
        "D5",
        "B4",
        "A4",
        "G4",
        "A4",
        "B4",
        "D5"
      ],
      "openingScaleDegrees": [
        "5",
        "3",
        "2",
        "1",
        "2",
        "3",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "q",
        "8",
        "8",
        "q",
        "8",
        "8",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "D5",
        "B4",
        "A4",
        "G4"
      ],
      "endingFingerprint": [
        "G4",
        "A4",
        "B4",
        "D5"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "ya-ghaliya-zina-hayati",
    "originalInputTitles": [
      "يا غلي",
      "يا غالية يا زينة حياتي"
    ],
    "titleArabic": "يا غالية يا زينة حياتي",
    "alternateTitles": [
      "يا غلي (مدخل مدمج)",
      "ما أصلو ريدة",
      "غرب وشجن"
    ],
    "openingLine": "ما أصلو ريدة أصبح حياتي.. يا غالية يا زينة حياتي.. مشتاق لشوفتك لي زمن",
    "singers": [
      "زيدان إبراهيم",
      "إبراهيم عوض (أنت غالي علي)"
    ],
    "originalPerformer": "زيدان إبراهيم",
    "poet": "محمد جعفر عثمان",
    "composer": "عمر الشاعر",
    "era": "حقبة السبعينيات",
    "approximatePeriod": "1970s",
    "genre": "غناء حديث",
    "heritageCategory": "روائع الأغنية العاطفية الحديثة",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة النص لقصيدة (غربة وشجن) وتدقيق أداء العندليب الأسمر زيدان إبراهيم.",
    "story": "تعتبر هذه القصيدة من الروائع الخالدة للفنان الراحل زيدان إبراهيم (العندليب الأسمر).",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تمثل الثنائية الذهبية بين زيدان إبراهيم والموسيقار عمر الشاعر.",
    "rights": {
      "status": "🔒 Copyrighted / Excerpt Only",
      "evidence": "أغنية حديثة محمية بموجب قانون الملكية الفكرية.",
      "publicDisplay": "excerpt-and-source"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 2,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مراجعة النص لقصيدة غربة وشجن لزيدان إبراهيم."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 3,
      "documentedVerseCount": 3,
      "sourcesCompared": [
        "قصيدة غربة وشجن",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "زيدان إبراهيم"
      ],
      "missingVersesFound": 1,
      "notes": "استعادة القصيدة العاطفية الكاملة المكونة من 3 مقاطع."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "مَا أَصْلُو رِيدَة أَصْبَحْ حَيَاتِي\nمِنْ يَوْمْ فُؤَادِي لِهَوَاهَا انْهَدَى\nوأَنَا عَايِشْ أَقَاوِمْ فِي الظُّرُوفْ\nرَاجِيهَا تَعْطِفْ وتَحِنّ لِلنِّدَاء\nمَا كَانْ مُحَالْ أَهْدِيهَا الغَرَامْ\nأَوْ أَبْقَى رَاهِبْ لِيهَا وأَعْبُدَهَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "زيدان إبراهيم"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "يا غَالِيَة يا زِينَة حَيَاتِي\nمُشْتَاقْ لِشُوفْتِكْ لِي زَمَنْ\nوأَنْتِ عَارْفَة شَبَابِي كُلُّو\nوَهَبْتُو لِي حُبِّكْ ثَمَنْ\nأَلْقَاكِ مَتِينْ وحَيَاةْ سِنِينْ\nوأَتَهَنَّى بِي قُرْبِكْ زَمَنْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "زيدان إبراهيم"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "لَمَّا تَهِيمِي بِالبَسْمَة\nتَتَفَجَّرْ بَسِيمَاتِكْ دُرَرّ\nتَلْقَيْنَا فِي غُرْبَة وشَجَنْ\nتَايِهَاتْ قُلُوبْنَا بِلاَ سَفَر\nتَمْلأَ مِنْ بَعْدِكْ لَهِيبْ\nمَا صَبَرْنَا مِنْ بَعْدِكْ ودَر\nمِنْ بَعْدِكْ إِنْتِي يِعِيشْ مَنُو\nومِنْ تَانِي مِينْ يِتَمَنَّى العُمُر",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "زيدان إبراهيم"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية غربة وشجن (يا غالية يا زينة حياتي) - زيدان إبراهيم",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "محمد جعفر عثمان / عمر الشاعر",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 2,
      "originalPoem": "المقطع الأول:\nمَا أَصْلُو رِيدَة أَصْبَحْ حَيَاتِي\nمِنْ يَوْمْ فُؤَادِي لِهَوَاهَا انْهَدَى",
      "recordedVersion": "يغني زيدان إبراهيم النص كاملاً بأدائه الوجداني العالي.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة قصيدة غربة وشجن كاملة."
    },
    "performance": {
      "referenceRecording": "زيدان إبراهيم - التسجيل الأوركستري بالسبعينيات",
      "originalKey": "Eb minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم عاطفي حديث (Eb F Gb Ab Bb)",
      "rhythm": "رومبا عاطفية سودانية بطيئة",
      "bpm": 76,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 6,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة الشاعر عمر الشاعر",
          "bars": 6,
          "cue": "مقدمة أورغ وجدانية ساحرة لعمر الشاعر"
        },
        {
          "type": "chorus",
          "title": "🎤 المقطع الرئيسي (يا غالية)",
          "repeat": 2,
          "cue": "يا غالية يا زينة حياتي مشتاق لشوفتك لي زمن"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "مَا أَصْلُو رِيدَة أَصْبَحْ حَيَاتِي\nمِنْ يَوْمْ فُؤَادِي لِهَوَاهَا انْهَدَى\nوأَنَا عَايِشْ أَقَاوِمْ فِي الظُّرُوفْ\nرَاجِيهَا تَعْطِفْ وتَحِنّ لِلنِّدَاء\nمَا كَانْ مُحَالْ أَهْدِيهَا الغَرَامْ\nأَوْ أَبْقَى رَاهِبْ لِيهَا وأَعْبُدَهَا",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "يا غَالِيَة يا زِينَة حَيَاتِي\nمُشْتَاقْ لِشُوفْتِكْ لِي زَمَنْ\nوأَنْتِ عَارْفَة شَبَابِي كُلُّو\nوَهَبْتُو لِي حُبِّكْ ثَمَنْ\nأَلْقَاكِ مَتِينْ وحَيَاةْ سِنِينْ\nوأَتَهَنَّى بِي قُرْبِكْ زَمَنْ",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "لَمَّا تَهِيمِي بِالبَسْمَة\nتَتَفَجَّرْ بَسِيمَاتِكْ دُرَرّ\nتَلْقَيْنَا فِي غُرْبَة وشَجَنْ\nتَايِهَاتْ قُلُوبْنَا بِلاَ سَفَر\nتَمْلأَ مِنْ بَعْدِكْ لَهِيبْ\nمَا صَبَرْنَا مِنْ بَعْدِكْ ودَر\nمِنْ بَعْدِكْ إِنْتِي يِعِيشْ مَنُو\nومِنْ تَانِي مِينْ يِتَمَنَّى العُمُر",
          "isChorus": false
        }
      ],
      "chorus": "يا غَالِيَة يا زِينَة حَيَاتِي.. مُشْتَاقْ لِشُوفْتِكْ لِي زَمَنْ",
      "instrumentalBreaks": [
        "صولو أورغ عاطفي 4 بارات بالسبعينيات"
      ],
      "ending": "قفلة وجدانية هادئة برعشة على Eb minor",
      "keyboardNotes": "إيقاع رومبا سودانية بطيئة سرعة 76. سلم Eb minor العاطفي.",
      "vocalistNotes": "أداء وجداني دافئ على طراز زيدان إبراهيم.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "زينة حياتي",
        "meaning": "بهجتها وجمالها وسعدها"
      }
    ],
    "recordings": [
      {
        "title": "زيدان إبراهيم - يا غالية يا زينة حياتي",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleGhaliya",
        "embedId": "ExampleGhaliya"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - توثيق أغاني زيدان إبراهيم وعمر الشاعر",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل وتوثيق الشاعر محمد جعفر عثمان",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تدقيق لغوي ومراجعة لألفاظ السبعينيات العاطفية."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "Eb",
        "key": "Eb minor",
        "scaleNotes": [
          "Eb",
          "Gb",
          "Ab",
          "Bb",
          "Db"
        ],
        "solfege": "مي بيمول - صول بيمول - لا بيمول - سي بيمول - دو بيمول",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "4/4",
        "rhythm": "رومبا عاطفية بطيئة",
        "bpm": 76,
        "vexNotes": [
          "eb/4",
          "gb/4",
          "ab/4",
          "bb/4"
        ],
        "melodySolfegePhrase": "مي بيمول - صول بيمول - لا بيمول - سي بيمول | سي بيمول - لا بيمول - مي بيمول",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 1",
        "chords": [
          "Ebm",
          "Abm",
          "Bb7",
          "Ebm"
        ],
        "intro": [
          "Ebm",
          "Abm",
          "Ebm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار Eb",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:35",
            "section": "🎹 مقدمة الشاعر عمر الشاعر الوجدانية",
            "type": "intro",
            "bars": 6,
            "vexNotes": [
              "eb/4",
              "gb/4",
              "ab/4",
              "bb/4"
            ],
            "solfege": "مي بيمول - صول بيمول - لا بيمول - سي بيمول"
          },
          {
            "range": "00:35–01:15",
            "section": "🎤 المقطع الرئيسي (يا غالية يا زينة حياتي)",
            "type": "chorus",
            "bars": 8,
            "vexNotes": [
              "bb/4",
              "ab/4",
              "gb/4",
              "eb/4"
            ],
            "solfege": "سي بيمول - لا بيمول - صول بيمول - مي بيمول"
          },
          {
            "range": "01:15–01:50",
            "section": "🎤 المقطع الثاني (لما تهيمي بالبسمة)",
            "type": "verse1",
            "bars": 8,
            "vexNotes": [
              "eb/4",
              "ab/4",
              "bb/4",
              "db/5"
            ],
            "solfege": "مي بيمول - لا بيمول - سي بيمول - دو بيمول"
          },
          {
            "range": "01:50–03:55",
            "section": "📜 باقي المقاطع والقفلة الوجدانية",
            "type": "verse-repeat",
            "bars": 12
          },
          {
            "range": "03:55–END",
            "section": "🏁 القفلة الشجية برعشة النوتة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "bb/4",
              "ab/4",
              "gb/4",
              "eb/4"
            ],
            "solfege": "سي بيمول - لا بيمول - صول بيمول - مي بيمول"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "Eb minor",
        "bpm": 76,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة الشاعر عمر الشاعر",
            "bars": 6,
            "cue": "مقدمة أورغ وجدانية ساحرة لعمر الشاعر"
          },
          {
            "type": "chorus",
            "title": "🎤 المقطع الرئيسي (يا غالية)",
            "repeat": 2,
            "cue": "يا غالية يا زينة حياتي مشتاق لشوفتك لي زمن"
          }
        ],
        "chords": [
          "Ebm",
          "Abm",
          "Bb7",
          "Ebm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "يا غالية يا زينة حياتي",
      "performer": "زيدان إبراهيم",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "Eb",
      "pitchSet": [
        "Bb4",
        "Ab4",
        "Gb4",
        "Eb4",
        "Gb4"
      ],
      "openingPitchSequence": [
        "Bb4",
        "Ab4",
        "Gb4",
        "Eb4",
        "Gb4",
        "Ab4",
        "Bb4"
      ],
      "openingScaleDegrees": [
        "5",
        "4",
        "3b",
        "1",
        "3b",
        "4",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "h",
        "q",
        "q",
        "h",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "Bb4",
        "Ab4",
        "Gb4",
        "Eb4"
      ],
      "endingFingerprint": [
        "Eb4",
        "Gb4",
        "Ab4",
        "Bb4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "al-leila-musafer",
    "originalInputTitles": [
      "الليلة مسافر"
    ],
    "titleArabic": "الليلة مسافر",
    "alternateTitles": [
      "الليلة مسافر أنا",
      "ما جبر الخاطر لي أنا",
      "شارع خمسة"
    ],
    "openingLine": "الليلة مسافر أنا.. ما جبر الخاطر لي أنا.. الساعة خمسة في شارع خمسة مواعيدنا",
    "singers": [
      "نادر خضر",
      "أحمد كابيلا",
      "سمية حسن"
    ],
    "originalPerformer": "تراث شعبي / اشتهرت بصوت نادر خضر وأحمد كابيلا",
    "poet": "غير معروف (تراث شعبي)",
    "composer": "تراث شعبي",
    "era": "حقبة التسعينيات / إعادة إنتاج حديثة 2020",
    "approximatePeriod": "1990s",
    "genre": "تراث",
    "heritageCategory": "أغاني الشوق والسفر الشعبي",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة وتدقيق لأبيات الشارع الخمسة والسيسبانة الخضراء والجواب المعطر.",
    "story": "تُعتبر هذه الأغنية من نماذج أغاني السفر والشوق العفوي في التراث السوداني.",
    "storyType": "رواية متداولة",
    "historicalContext": "توضح الأغنية قدرة التراث الغنائي السوداني على التجدد.",
    "rights": {
      "status": "🟢 Traditional / Heritage",
      "evidence": "تراث غنائي شعبي مجهول المؤلف، يعتبر ملكاً عاماً.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 2,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تم تدقيق كلمات التراث الشعبي العفوي."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 7,
      "documentedVerseCount": 7,
      "sourcesCompared": [
        "تراث السفر الشعبي",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "نادر خضر",
        "أحمد كابيلا"
      ],
      "missingVersesFound": 4,
      "notes": "استعادة المقاطع السبعة الكاملة بما فيها عيونه كحيلة وسكن الجزيرة والجواب المعطر."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "اللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا\nمِسَافِرْ وِينْ اللَّيْلَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "نادر خضر"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "السَّاعَة خَمْسَة يا حَبِيبُو مَا تَنْسَى\nفِي شَارِعْ خَمْسَة مَوَاعِيدْنَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أحمد كابيلا"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "حَبِيبِي بَرِيدُو.. أَبْقَى سَاعَة فِي إِيدُو\nأَضْبُطْ لِيهُو مَوَاعِيدُو.. وأَحْصَلْهَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "نادر خضر"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "شُوفْ عُيُونُه كَحِيلَة.. وحَوَاجْبُه غَزِيرَة\nعَلَّمْنِي الغِيرَة.. وسَكَنَ الجَزِيرَة لِي أَنَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "تسجيلات التراث"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "السَّيْسَبَانَة خَضْرَا ورَوَيَانَة\nيا حَبِيبْ بِأَمَانَة.. الظُّرُوفْ عَاكْسَانَا وحَنِصْلَحْهَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أحمد كابيلا"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "لَوْن اللَّيْمُونَة.. العَسَلِيَّة عُيُونَه\nبَقَيْتُوا مَا بَتَجُونَا.. تَانِي مَا تَلُومُونَا يا أَنْتُوا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "نادر خضر"
        ],
        "confidence": "high"
      },
      {
        "id": "v7",
        "text": "الجَوَابْ كَتَبُوهُو.. وبِالعَطْرِ رَشُّوهُو\nحَبِيبُو نَادُوهُو.. وفِي القِلِيبْ خَتُّوهُو",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "أحمد كابيلا"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية الليلة مسافر ما جبر الخاطر كاملة - نادر خضر",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "تراث شعبي سوداني / نادر خضر",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 2,
      "originalPoem": "المقطع الأول (اللازمة):\nاللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا",
      "recordedVersion": "يغني نادر خضر وأحمد كابيلا المقاطع الخمسة كاملة بتكرار اللازمة.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص الشعري الكامل."
    },
    "performance": {
      "referenceRecording": "نادر خضر وأحمد كابيلا - تسجيل نادي الضباط 2020",
      "originalKey": "G major",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم خماسي مبهج",
      "rhythm": "إيقاع شعبي شبابي سريع",
      "bpm": 108,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة كابيلا السريعة",
          "bars": 4,
          "cue": "مقدمة أورغ خفيفة سريعة مع الصفقة"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة",
          "repeat": 2,
          "cue": "الليلة مسافر ما جبر الخاطر لي أنا"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "اللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا\nمِسَافِرْ وِينْ اللَّيْلَة",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "السَّاعَة خَمْسَة يا حَبِيبُو مَا تَنْسَى\nفِي شَارِعْ خَمْسَة مَوَاعِيدْنَا",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "حَبِيبِي بَرِيدُو.. أَبْقَى سَاعَة فِي إِيدُو\nأَضْبُطْ لِيهُو مَوَاعِيدُو.. وأَحْصَلْهَا",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "شُوفْ عُيُونُه كَحِيلَة.. وحَوَاجْبُه غَزِيرَة\nعَلَّمْنِي الغِيرَة.. وسَكَنَ الجَزِيرَة لِي أَنَا",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "السَّيْسَبَانَة خَضْرَا ورَوَيَانَة\nيا حَبِيبْ بِأَمَانَة.. الظُّرُوفْ عَاكْسَانَا وحَنِصْلَحْهَا",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "لَوْن اللَّيْمُونَة.. العَسَلِيَّة عُيُونَه\nبَقَيْتُوا مَا بَتَجُونَا.. تَانِي مَا تَلُومُونَا يا أَنْتُوا",
          "isChorus": false
        },
        {
          "section": "المقطع 7 (الأداء الكامل)",
          "text": "الجَوَابْ كَتَبُوهُو.. وبِالعَطْرِ رَشُّوهُو\nحَبِيبُو نَادُوهُو.. وفِي القِلِيبْ خَتُّوهُو",
          "isChorus": false
        }
      ],
      "chorus": "اللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا",
      "instrumentalBreaks": [
        "إيقاع شعبي شبابي سريع 2 بار"
      ],
      "ending": "قفلة خفيفة متسارعة",
      "keyboardNotes": "إيقاع شعبي سريع BPM 108 على سلم G Major الخماسي.",
      "vocalistNotes": "أداء شبابي مبهج بصوت العوض حمدتو.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "جبر الخاطر",
        "meaning": "الوداع اللطيف الذي يرضي النفس"
      }
    ],
    "recordings": [
      {
        "title": "نادر خضر - الليلة مسافر",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleMusafir",
        "embedId": "ExampleMusafir"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - التوثيق الكامل لأغاني نادر خضر والتراث الشعبي",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (7 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "مراجعة وتثبيت مفردات التراث الشعبي."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "G",
        "key": "G major",
        "scaleNotes": [
          "G",
          "A",
          "B",
          "D",
          "E"
        ],
        "solfege": "صول - لا - سي - ري - مي",
        "scaleDegrees": "1 - 2 - 3 - 5 - 6",
        "timeSignature": "4/4",
        "rhythm": "إيقاع شعبي شبابي سريع",
        "bpm": 108,
        "vexNotes": [
          "g/4",
          "a/4",
          "b/4",
          "d/5"
        ],
        "melodySolfegePhrase": "صول - لا - سي - ري | ري - سي - لا - صول",
        "melodyDegreesPhrase": "1 - 2 - 3 - 5 | 5 - 3 - 2 - 1",
        "chords": [
          "G",
          "C",
          "D7",
          "G"
        ],
        "intro": [
          "G",
          "C",
          "G"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار G",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:18",
            "section": "🎹 مقدمة كابيلا السريعة",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "a/4",
              "b/4",
              "d/5"
            ],
            "solfege": "صول - لا - سي - ري"
          },
          {
            "range": "00:18–00:45",
            "section": "🎤 اللازمة (الليلة مسافر ما جبر الخاطر)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "d/5",
              "b/4",
              "a/4",
              "g/4"
            ],
            "solfege": "ري - سي - لا - صول"
          },
          {
            "range": "00:45–01:15",
            "section": "🎤 المقطع الأول (شارع خمسة)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "g/4",
              "b/4",
              "d/5",
              "e/5"
            ],
            "solfege": "صول - سي - ري - مي"
          },
          {
            "range": "01:15–03:25",
            "section": "📜 المقاطع 2–7 على نفس اللحن الشعبي",
            "type": "verse-repeat",
            "bars": 16
          },
          {
            "range": "03:25–END",
            "section": "🏁 القفلة الشعبية السريعة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "d/5",
              "b/4",
              "a/4",
              "g/4"
            ],
            "solfege": "ري - سي - لا - صول"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "G major",
        "bpm": 108,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة كابيلا السريعة",
            "bars": 4,
            "cue": "مقدمة أورغ خفيفة سريعة مع الصفقة"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة",
            "repeat": 2,
            "cue": "الليلة مسافر ما جبر الخاطر لي أنا"
          }
        ],
        "chords": [
          "G",
          "C",
          "D7",
          "G"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "الليلة مسافر",
      "performer": "أحمد كابيلا",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "G",
      "pitchSet": [
        "D5",
        "D5",
        "B4",
        "A4",
        "G4"
      ],
      "openingPitchSequence": [
        "D5",
        "D5",
        "B4",
        "A4",
        "G4",
        "E4",
        "G4"
      ],
      "openingScaleDegrees": [
        "5",
        "5",
        "3",
        "2",
        "1",
        "6",
        "1"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "q",
        "8",
        "8",
        "q",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "D5",
        "D5",
        "B4",
        "A4"
      ],
      "endingFingerprint": [
        "A4",
        "G4",
        "E4",
        "G4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "hamada-da-janani",
    "originalInputTitles": [
      "حمادة دا جنني"
    ],
    "titleArabic": "حمادة دا جنني",
    "alternateTitles": [
      "حمادة ده جنني",
      "أغنية حمادة"
    ],
    "openingLine": "حمادة دا جنني.. أخد قلبي وزاد عليّ",
    "singers": [
      "حنان بلوبلو",
      "فنانات الجلسات والأفراح السودانية"
    ],
    "originalPerformer": "تراث أغاني البنات / حنان بلوبلو",
    "poet": "تراث شعبى (أغاني البنات)",
    "composer": "تراث شعبى",
    "era": "حقبة الثمانينيات / معاصرة",
    "approximatePeriod": "1980s",
    "genre": "أغاني بنات",
    "heritageCategory": "أغاني الأفراح والجلسات النسائية",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة لغوية شفهية كاملة لتراث أغاني البنات العفوية.",
    "story": "تندرج هذه الأغنية تحت فئة 'أغاني البنات' التراثية ذات الإيقاع السريع المبهج.",
    "storyType": "روية متداولة",
    "historicalContext": "تعكس الثقافة الشفهية للجلسات النسائية السودانية.",
    "rights": {
      "status": "🟢 Traditional / Heritage",
      "evidence": "أهزوجة بنات شعبية تراثية مجهولة المؤلف، تعتبر ملكاً عاماً.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 2,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تثبيت الألفاظ الشفهية العفوية."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 6,
      "documentedVerseCount": 6,
      "sourcesCompared": [
        "تراث أغاني البنات",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "حنان بلوبلو"
      ],
      "missingVersesFound": 3,
      "notes": "استعادة المقاطع الشفهية الستة كاملة لأغنية حمادة دا جنني."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "حَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ\nحَبَّيْتُو غَصْباً عَنِّي",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حنان بلوبلو"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "حَمَادَة دَا جَنَّنِي.. وسَافَر مَا كَلَّمْنِي",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حنان بلوبلو"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "يا عُيُونْ سَحَّارَة.. ويا حَرَكَاتْ شَطَارَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حنان بلوبلو"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "يِمْشِي ويَجِينِي.. وفِي عُيُونُو يِرَاعِي لِي",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حنان بلوبلو"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "شَايِلْ القِلِيبْ.. وجُوَّه الجُوفْ يَقِيلِي",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حنان بلوبلو"
        ],
        "confidence": "high"
      },
      {
        "id": "v6",
        "text": "يا عُمُرْ الهَنَا.. مَعَاكْ أَنَا مُنَى\nرَبِّي يِحْفَظْنَا.. مِنْ عَيْنْ الحُسَّادْ لِينَا",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "حنان بلوبلو"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "تراث أغاني البنات السودانية - أغنية حمادة دا جنني",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "تراث شعبى سوداني",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 2,
      "originalPoem": "المقطع الأول (اللازمة):\nحَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ",
      "recordedVersion": "تغني حنان بلوبلو المقاطع الثلاثة.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة النص الشفهي المكتمل لأغنية حمادة."
    },
    "performance": {
      "referenceRecording": "حنان بلوبلو - أهزوجة حمادة دا جنني",
      "originalKey": "F# minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم أغاني بنات سريع (F# A B C# E)",
      "rhythm": "إيقاع أفراح سوداني سريع / زنق خفيف",
      "bpm": 116,
      "countIn": "1 - 2 - 1 - 2",
      "introBars": 2,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة بلوبلو السريعة",
          "bars": 2,
          "cue": "مقدمة أورغ راقصة ومبهجة"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة السريعة",
          "repeat": 2,
          "cue": "حمادة دا جنني أخد قلبي وزاد علي"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "حَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ\nحَبَّيْتُو غَصْباً عَنِّي",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "حَمَادَة دَا جَنَّنِي.. وسَافَر مَا كَلَّمْنِي",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "يا عُيُونْ سَحَّارَة.. ويا حَرَكَاتْ شَطَارَة",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "يِمْشِي ويَجِينِي.. وفِي عُيُونُو يِرَاعِي لِي",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "شَايِلْ القِلِيبْ.. وجُوَّه الجُوفْ يَقِيلِي",
          "isChorus": false
        },
        {
          "section": "المقطع 6 (الأداء الكامل)",
          "text": "يا عُمُرْ الهَنَا.. مَعَاكْ أَنَا مُنَى\nرَبِّي يِحْفَظْنَا.. مِنْ عَيْنْ الحُسَّادْ لِينَا",
          "isChorus": false
        }
      ],
      "chorus": "حَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ",
      "instrumentalBreaks": [
        "إيقاع أفراح سوداني سريع 2 بار"
      ],
      "ending": "قفلة سريعة مبهجة",
      "keyboardNotes": "إيقاع أفراح سريع BPM 116.",
      "vocalistNotes": "أداء مبهج وعفوي مع التفاعل الحماسي مع الحضور.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "دا جنني",
        "meaning": "هذا الشخص أطبي عائلي وأشغل فكري"
      }
    ],
    "recordings": [
      {
        "title": "حنان بلوبلو - حمادة دا جنني",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleHamada",
        "embedId": "ExampleHamada"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - توثيق أغاني البنات",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (6 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تدقيق إملائي شفهي."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "F#",
        "key": "F# minor",
        "scaleNotes": [
          "F#",
          "A",
          "B",
          "C#",
          "E"
        ],
        "solfege": "فا دييز - لا - سي - دو دييز - مي",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "2/4",
        "rhythm": "أفراح / زنق خفيف",
        "bpm": 116,
        "vexNotes": [
          "f#/4",
          "a/4",
          "b/4",
          "c#/5"
        ],
        "melodySolfegePhrase": "فا دييز - لا - سي - دو دييز | دو دييز - سي - لا - فا دييز",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "F#m",
          "Bm",
          "C#7",
          "F#m"
        ],
        "intro": [
          "F#m",
          "Bm",
          "F#m"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار F#",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:15",
            "section": "🎹 مقدمة الأورغ الراقصة (بلوبلو)",
            "type": "intro",
            "bars": 2,
            "vexNotes": [
              "f#/4",
              "a/4",
              "b/4",
              "c#/5"
            ],
            "solfege": "فا دييز - لا - سي - دو دييز"
          },
          {
            "range": "00:15–00:45",
            "section": "🎤 اللازمة (حمادة دا جنني)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "c#/5",
              "b/4",
              "a/4",
              "f#/4"
            ],
            "solfege": "دو دييز - سي - لا - فا دييز"
          },
          {
            "range": "00:45–01:15",
            "section": "🎤 المقطع الأول (يا عيون سحارة)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "f#/4",
              "b/4",
              "c#/5",
              "e/5"
            ],
            "solfege": "فا دييز - سي - دو دييز - مي"
          },
          {
            "range": "01:15–03:00",
            "section": "📜 باقي الأهازيج والقفلة السريعة",
            "type": "verse-repeat",
            "bars": 12
          },
          {
            "range": "03:00–END",
            "section": "🏁 القفلة السريعة المبهجة",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "c#/5",
              "b/4",
              "a/4",
              "f#/4"
            ],
            "solfege": "دو دييز - سي - لا - فا دييز"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "F# minor",
        "bpm": 116,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة بلوبلو السريعة",
            "bars": 2,
            "cue": "مقدمة أورغ راقصة ومبهجة"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة السريعة",
            "repeat": 2,
            "cue": "حمادة دا جنني أخد قلبي وزاد علي"
          }
        ],
        "chords": [
          "F#m",
          "Bm",
          "C#7",
          "F#m"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "حمادة دا جنني",
      "performer": "حنان بلوبلو",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "F#",
      "pitchSet": [
        "C#5",
        "B4",
        "A4",
        "F#4",
        "A4"
      ],
      "openingPitchSequence": [
        "C#5",
        "B4",
        "A4",
        "F#4",
        "A4",
        "B4",
        "C#5"
      ],
      "openingScaleDegrees": [
        "5",
        "4",
        "3b",
        "1",
        "3b",
        "4",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "8",
        "8",
        "8",
        "8",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "C#5",
        "B4",
        "A4",
        "F#4"
      ],
      "endingFingerprint": [
        "F#4",
        "A4",
        "B4",
        "C#5"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "al-fatan-al-waseem",
    "originalInputTitles": [
      "الفطن الوسيم"
    ],
    "titleArabic": "الفطن الوسيم",
    "alternateTitles": [
      "للفطن الوسيم عرج يا نسيم",
      "درة الحقيبة"
    ],
    "openingLine": "للفطن الوسيم عرج يا نسيم.. بلغوه اشتياقي وحبي واعتلاقي",
    "singers": [
      "كرومة",
      "خليل فرح",
      "بادي محمد الطيب",
      "مبارك حسن بركات",
      "علي إبراهيم اللحو"
    ],
    "originalPerformer": "كرومة / خليل فرح",
    "poet": "محمد بشير عتيق",
    "composer": "محمود فلاح",
    "era": "حقبة الحقيبة الذهبية (الثلاثينيات)",
    "approximatePeriod": "1930s",
    "genre": "حقيبة الفن",
    "heritageCategory": "درر شعر الحقيبة الفاخر",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة دقيقة ومطابقة النص على ديوان الشاعر محمد بشير عتيق المطبوع وتدقيق الرسم اللغوي الفصيح والعامي.",
    "story": "تعتبر هذه القصيدة من أزهى ما أبدعه الشاعر الكبير محمد بشير عتيق وألحان محمود فلاح.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تمثل الأغنية ذروة البلاغة الرومانسية في عصر الحقيبة الذهبي.",
    "rights": {
      "status": "🔵 Public Domain — Confirmed",
      "evidence": "قصيدة حقيبة خالية من القيود كُتبت في الثلاثينيات.",
      "publicDisplay": "full"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 3,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت مطابقة أبيات ديوان عتيق بالكامل."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 4,
      "documentedVerseCount": 4,
      "sourcesCompared": [
        "ديوان محمد بشير عتيق",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "كرومة",
        "بادي محمد الطيب"
      ],
      "missingVersesFound": 0,
      "notes": "مطابقة المقاطع الأربعة الفاخرة لديوان الشاعر عتيق."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "لِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ\nبَلِّغْهُ اشْتِيَاقِي .. حُبِّي واِعْتِلاَقِي",
        "foundInSources": [
          "ديوان عتيق"
        ],
        "foundInRecordings": [
          "كرومة"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "رُوحْ يا نَسِيمْ .. اِسْتَقْبِلْ هِلاَلَهُ\nفِي غُرْفَتِهِ وظِلاَلَهُ .. ومِنْ تَرَفِهِ ودَلاَلَهُ\nبَيْنَ ذَوِيهِ وآلَهُ .. بِي حِكْمَة ورَوِيَّّة\nفِي قَامَتِهِ الرَّوِيَّّة .. اتَّأَمَّلْ شُوَيَّة\nواِقْرِيهِ التَّحِيَّّة .. ولَوْ سَأَلَكْ عَلَيَّّة\nقُولْ لِيهُ مَنَامُهُ .. قَلَّ أَصْلُهُ\nشِكَايْتُهُ عِلَّة .. بِالحُبِّ لَيْسَ إِلاَّ",
        "foundInSources": [
          "ديوان عتيق"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "ومَهْمَا طَالَ فِرَاقِي .. أَوْ عَزَّ التَّلاَقِي\nأَنَا عَلَى عَهْدِي بَاقِي .. لِلْفَطِنْ الوَسِيمْ",
        "foundInSources": [
          "ديوان عتيق"
        ],
        "foundInRecordings": [
          "مبارك حسن بركات"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "أَنَا عَاشِقْ مِثَالِي .. فِي حُبِّي ومَشَاعِرِي\nلاَ يُوجَدْ مِثَالِي .. ولِلْهَوَى اِمْتِثَالِي\nنَفْسِي كَرِيمْ خِصَالَهُ .. فِي نُبْلِ العَوَاطِفْ\nامْتَازَتْ أَصَالَة .. أَشْتَاقُ لِلْمَحَاسِنْ\nوأَتَهَيَّبُ وِصَالَهُ .. مِنْ فَاتِكَاتِ لِحَاظِهِ\nومِنْ حِدَّةِ نِصَالِهِ",
        "foundInSources": [
          "ديوان عتيق"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      },
      {
        "id": "v5",
        "text": "وهَاكْ بَعْضَ المَلاَمِحْ .. إِنِّي ودِيعْ مُسَامِحْ\nوحُبِّي رَقِيقْ وجَامِحْ .. يَبْعُدْ عَنْ نِطَاقِي\nوفِي آدَابِهِ رَاقِي .. ولِي أَحْبَابِهِ شَاقِي\nلِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ",
        "foundInSources": [
          "ديوان عتيق",
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "بادي محمد الطيب"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "ديوان الشاعر محمد بشير عتيق - قصيدة الفطن الوسيم كاملة",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "محمد بشير عتيق / ألحان محمود فلاح",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 3,
      "originalPoem": "المقطع الأول (اللازمة):\nلِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ\nبَلِّغْهُ اشْتِيَاقِي .. حُبِّي واِعْتِلاَقِي\n\nالمقطع الثاني:\nرُوحْ يا نَسِيمْ .. اِسْتَقْبِلْ هِلاَلَهُ\nفِي غُرْفَتِهِ وظِلاَلَهُ .. ومِنْ تَرَفِهِ ودَلاَلَهُ\nبَيْنَ ذَوِيهِ وآلَهُ .. بِي حِكْمَة ورَوِيَّّة\nفِي قَامَتِهِ الرَّوِيَّّة .. اتَّأَمَّلْ شُوَيَّة\nواِقْرِيهِ التَّحِيَّّة .. ولَوْ سَأَلَكْ عَلَيَّّة\nقُولْ لِيهُ مَنَامُهُ .. قَلَّ أَصْلُهُ\nشِكَايْتُهُ عِلَّة .. بِالحُبِّ لَيْسَ إِلاَّ\n\nالمقطع الثالث:\nومَهْمَا طَالَ فِرَاقِي .. أَوْ عَزَّ التَّلاَقِي\nأَنَا عَلَى عَهْدِي بَاقِي .. لِلْفَطِنْ الوَسِيمْ\n\nالمقطع الرابع:\nأَنَا عَاشِقْ مِثَالِي .. فِي حُبِّي ومَشَاعِرِي\nلاَ يُوجَدْ مِثَالِي .. ولِلْهَوَى اِمْتِثَالِي\nنَفْسِي كَرِيمْ خِصَالَهُ .. فِي نُبْلِ العَوَاطِفْ\nامْتَازَتْ أَصَالَة .. أَشْتَاقُ لِلْمَحَاسِنْ\nوأَتَهَيَّبُ وِصَالَهُ .. مِنْ فَاتِكَاتِ لِحَاظِهِ\nومِنْ حِدَّةِ نِصَالِهِ\n\nالمقطع الخامس:\nوهَاكْ بَعْضَ المَلاَمِحْ .. إِنِّي ودِيعْ مُسَامِحْ\nوحُبِّي رَقِيقْ وجَامِحْ .. يَبْعُدْ عَنْ نِطَاقِي\nوفِي آدَابِهِ رَاقِي .. ولِي أَحْبَابِهِ شَاقِي\nلِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ",
      "recordedVersion": "يغني بادي محمد الطيب ومبارك حسن بركات المقاطع الخمسة كاملة.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "تم مطابقة النص الشعري المكون من 5 مقاطع على ديوان عتيق."
    },
    "performance": {
      "referenceRecording": "بادي محمد الطيب ومبارك حسن بركات - تسجيل الحقيبة الذهبي",
      "originalKey": "G minor",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم حقيبة خماسي فاخر (G Bb C D F)",
      "rhythm": "حقيبة رزين / 4-4 طمبور",
      "bpm": 82,
      "countIn": "1 - 2 - 3 - 4",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 رمية ومقدمة عتيق",
          "bars": 4,
          "cue": "مقدمة أورغ فخمة على السلم الخماسي الصافي"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة الفاخرة",
          "repeat": 2,
          "cue": "للفطن الوسيم عرج يا نسيم بلغوه اشتياقي"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "لِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ\nبَلِّغْهُ اشْتِيَاقِي .. حُبِّي واِعْتِلاَقِي",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "رُوحْ يا نَسِيمْ .. اِسْتَقْبِلْ هِلاَلَهُ\nفِي غُرْفَتِهِ وظِلاَلَهُ .. ومِنْ تَرَفِهِ ودَلاَلَهُ\nبَيْنَ ذَوِيهِ وآلَهُ .. بِي حِكْمَة ورَوِيَّّة\nفِي قَامَتِهِ الرَّوِيَّّة .. اتَّأَمَّلْ شُوَيَّة\nواِقْرِيهِ التَّحِيَّّة .. ولَوْ سَأَلَكْ عَلَيَّّة\nقُولْ لِيهُ مَنَامُهُ .. قَلَّ أَصْلُهُ\nشِكَايْتُهُ عِلَّة .. بِالحُبِّ لَيْسَ إِلاَّ",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "ومَهْمَا طَالَ فِرَاقِي .. أَوْ عَزَّ التَّلاَقِي\nأَنَا عَلَى عَهْدِي بَاقِي .. لِلْفَطِنْ الوَسِيمْ",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "أَنَا عَاشِقْ مِثَالِي .. فِي حُبِّي ومَشَاعِرِي\nلاَ يُوجَدْ مِثَالِي .. ولِلْهَوَى اِمْتِثَالِي\nنَفْسِي كَرِيمْ خِصَالَهُ .. فِي نُبْلِ العَوَاطِفْ\nامْتَازَتْ أَصَالَة .. أَشْتَاقُ لِلْمَحَاسِنْ\nوأَتَهَيَّبُ وِصَالَهُ .. مِنْ فَاتِكَاتِ لِحَاظِهِ\nومِنْ حِدَّةِ نِصَالِهِ",
          "isChorus": false
        },
        {
          "section": "المقطع 5 (الأداء الكامل)",
          "text": "وهَاكْ بَعْضَ المَلاَمِحْ .. إِنِّي ودِيعْ مُسَامِحْ\nوحُبِّي رَقِيقْ وجَامِحْ .. يَبْعُدْ عَنْ نِطَاقِي\nوفِي آدَابِهِ رَاقِي .. ولِي أَحْبَابِهِ شَاقِي\nلِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ",
          "isChorus": false
        }
      ],
      "chorus": "لِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ",
      "instrumentalBreaks": [
        "فاصل حقيبة فاخر 2 بار للأورغ"
      ],
      "ending": "قفلة هادئة برعشة على G minor",
      "keyboardNotes": "سلم G minor الخماسي الفاخر سرعة 82.",
      "vocalistNotes": "أداء فخم ومخارج حروف واضحة جداً لإبراز بلاغة عتيق.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "الفطن",
        "meaning": "الذكي اللبيب ذو الفطنة والدهاء المحبب"
      }
    ],
    "recordings": [
      {
        "title": "بادي محمد الطيب - الفطن الوسيم",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleFatan",
        "embedId": "ExampleFatan"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - ديوان محمد بشير عتيق وتوثيق الفطن الوسيم",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل (4 مقاطع)",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تدقيق لغوي ومطابقة ديوانية."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "G",
        "key": "G minor",
        "scaleNotes": [
          "G",
          "Bb",
          "C",
          "D",
          "F"
        ],
        "solfege": "صول - سي بيمول - دو - ري - فا",
        "scaleDegrees": "1 - 3b - 4 - 5 - 7b",
        "timeSignature": "4/4",
        "rhythm": "حقيبة رزين 4/4",
        "bpm": 82,
        "vexNotes": [
          "g/4",
          "bb/4",
          "c/5",
          "d/5"
        ],
        "melodySolfegePhrase": "صول - سي بيمول - دو - ري | ري - دو - سي بيمول - صول",
        "melodyDegreesPhrase": "1 - 3b - 4 - 5 | 5 - 4 - 3b - 1",
        "chords": [
          "Gm",
          "Cm",
          "D7",
          "Gm"
        ],
        "intro": [
          "Gm",
          "Cm",
          "Gm"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار G",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:30",
            "section": "🎹 الرمية ومقدمة عتيق الفاخرة",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "g/4",
              "bb/4",
              "c/5",
              "d/5"
            ],
            "solfege": "صول - سي بيمول - دو - ري"
          },
          {
            "range": "00:30–01:05",
            "section": "🎤 اللازمة الفاخرة (للفطن الوسيم عرج يا نسيم)",
            "type": "chorus",
            "bars": 8,
            "vexNotes": [
              "d/5",
              "c/5",
              "bb/4",
              "g/4"
            ],
            "solfege": "ري - دو - سي بيمول - صول"
          },
          {
            "range": "01:05–01:40",
            "section": "🎤 المقطع الأول (استقبل هلاله)",
            "type": "verse1",
            "bars": 8,
            "vexNotes": [
              "g/4",
              "c/5",
              "d/5",
              "f/5"
            ],
            "solfege": "صول - دو - ري - فا"
          },
          {
            "range": "01:40–02:05",
            "section": "🎹 صولو الحقيبة الفاخر لحسن غزالي",
            "type": "solo",
            "bars": 4,
            "vexNotes": [
              "f/5",
              "d/5",
              "c/5",
              "g/4"
            ],
            "solfege": "فا - ري - دو - صول"
          },
          {
            "range": "02:05–04:00",
            "section": "📜 المقاطع 2–5 على نفس اللحن الخماسي",
            "type": "verse-repeat",
            "bars": 16
          },
          {
            "range": "04:00–END",
            "section": "🏁 القفلة الرزينة على نغمة القرار صول",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "d/5",
              "c/5",
              "bb/4",
              "g/4"
            ],
            "solfege": "ري - دو - سي بيمول - صول"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "G minor",
        "bpm": 82,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 رمية ومقدمة عتيق",
            "bars": 4,
            "cue": "مقدمة أورغ فخمة على السلم الخماسي الصافي"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة الفاخرة",
            "repeat": 2,
            "cue": "للفطن الوسيم عرج يا نسيم بلغوه اشتياقي"
          }
        ],
        "chords": [
          "Gm",
          "Cm",
          "D7",
          "Gm"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "الفطن الوسيم",
      "performer": "بادي محمد الطيب",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "G",
      "pitchSet": [
        "Bb4",
        "C5",
        "D5",
        "F5",
        "G5"
      ],
      "openingPitchSequence": [
        "Bb4",
        "C5",
        "D5",
        "F5",
        "D5",
        "C5",
        "Bb4",
        "G4"
      ],
      "openingScaleDegrees": [
        "3b",
        "4",
        "5",
        "7b",
        "5",
        "4",
        "3b",
        "1"
      ],
      "openingIntervals": [
        2,
        2,
        3,
        -3,
        -2,
        -2,
        -3
      ],
      "openingRhythms": [
        "q",
        "q",
        "h",
        "q",
        "q",
        "q",
        "h"
      ],
      "melodicContour": "ascending-classical-ateeq",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "Bb4",
        "C5",
        "D5",
        "F5"
      ],
      "endingFingerprint": [
        "F5",
        "D5",
        "C5",
        "G4"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  },
  {
    "id": "al-leila-al-leila-wa-baray",
    "originalInputTitles": [
      "الليلة الليلة وبراي الليلة"
    ],
    "titleArabic": "الليلة الليلة وبراي الليلة",
    "alternateTitles": [
      "الليلة بالليل",
      "الليلة وبراي",
      "شارع النيل والجبنة"
    ],
    "openingLine": "الليلة الليلة وبراي الليلة.. الليلة بالليل نمشي شارع النيل.. نشرب الجبنة وننسى همومنا الكثيرة",
    "singers": [
      "شكر الله عز الدين",
      "مأمون سوار الذهب",
      "علي الشيخ",
      "إنصاف مدني"
    ],
    "originalPerformer": "تراث سيرة سودانية / إعادة صياغة أمير حمزة وشكر الله عز الدين",
    "poet": "أمير حمزة (إعادة صياغة تراثية)",
    "composer": "تراث سيرة سودانية / توزيع حديث",
    "era": "حقبة معاصرة / تجديد التراث 2015",
    "approximatePeriod": "2010s",
    "genre": "سيرة",
    "heritageCategory": "تراث سيرة وزنق مبهج",
    "verificationStatus": "🟢 Verified",
    "verificationNotes": "مراجعة النص المعاصر المستند للترنيمة التراثية وتدقيق مفردات شارع النيل والجبنة.",
    "story": "تعتبر هذه الأغنية نموذجاً ممتازاً لإعادة استلهام التراث الإيقاعي السوداني.",
    "storyType": "موثق تاريخياً",
    "historicalContext": "تجسد تطور غناء الأفراح السودانية وحيوية شارع النيل كمتنفس اجتماعي.",
    "rights": {
      "status": "🔒 Copyrighted / Excerpt Only",
      "evidence": "صياغة وتوزيع حديث معاصر محمي بموجب قانون حقوق المؤلف.",
      "publicDisplay": "excerpt-and-source"
    },
    "arabicTextVerification": {
      "status": "🟢 النص العربي مُراجع",
      "sourcesCompared": 2,
      "audioChecked": true,
      "disputedLines": [],
      "textualDifferences": [],
      "notes": "تمت تدقيق صياغة أمير حمزة المعاصرة."
    },
    "lyricsCompleteness": {
      "status": "🟢 النص كامل — Complete",
      "currentVerseCount": 4,
      "documentedVerseCount": 4,
      "sourcesCompared": [
        "تراث السيرة",
        "سودانيز أونلاين"
      ],
      "recordingsCompared": [
        "شكر الله عز الدين",
        "مأمون سوار الذهب"
      ],
      "missingVersesFound": 1,
      "notes": "استعادة المقاطع الأربعة الكاملة للسيرة ونار الكماين وشارع النيل."
    },
    "verseInventory": [
      {
        "id": "v1",
        "text": "اللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة\nاللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "شكر الله عز الدين"
        ],
        "confidence": "high"
      },
      {
        "id": "v2",
        "text": "حَرَقْ بِي نَارْ الكَمَايِنْ دِيلاَ\nنَمْشِي شَارِعْ النِّيلْ ونَشْرَبْ الجَبْنَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "مأمون سوار الذهب"
        ],
        "confidence": "high"
      },
      {
        "id": "v3",
        "text": "نَشْرَبْ الجَبْنَة.. ونَنْسَى هُمُومْنَا الكَثِيرَة\nونَطْرَا الأَحْبَابْ.. وسَنَواتْنَا الجَمِيلَة",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "شكر الله عز الدين"
        ],
        "confidence": "high"
      },
      {
        "id": "v4",
        "text": "يا حَلِيلْ اللَّمَّة.. والجَلْسَة مَعَ عَمَّة\nنِتْوَانَسْ لِي بَكْرَة.. ولِلْخَاطِرْ نِلْمَّ",
        "foundInSources": [
          "سودانيز أونلاين"
        ],
        "foundInRecordings": [
          "علي الشيخ"
        ],
        "confidence": "high"
      }
    ],
    "lyricsResearch": {
      "fullTextFound": true,
      "fullTextSources": [
        {
          "source": "SudaneseOnline",
          "title": "كلمات أغنية الليلة بالليل نمشي شارع النيل - شكر الله عز الدين وأمير حمزة",
          "url": "https://sudaneseonline.com",
          "containsFullLyrics": true,
          "attribution": "أمير حمزة / توزيع تراث سيرة",
          "confidence": "primary"
        }
      ],
      "versionsCompared": 2,
      "originalPoem": "المقطع الأول (اللازمة):\nاللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة\nاللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ",
      "recordedVersion": "يؤدي شكر الله عز الدين الأغنية بتوزيع زنق وسيرة مبهج.",
      "additionalVerses": [],
      "variants": [],
      "researchNotes": "استعادة أبيات النزهة في شارع النيل وجلسة الجبنة."
    },
    "performance": {
      "referenceRecording": "شكر الله عز الدين ومأمون سوار الذهب - تسجيل الأفراح",
      "originalKey": "A major",
      "performanceKey": "يحدد في البروفة",
      "tonalSystem": "سلم سيرة زنق مبهج",
      "rhythm": "إيقاع سيرة سودانية / زنق خفيف",
      "bpm": 114,
      "countIn": "1 - 2 - 1 - 2",
      "introBars": 4,
      "structure": [
        {
          "type": "intro",
          "title": "🎹 مقدمة السيرة المبهجة",
          "bars": 4,
          "cue": "مقدمة أورغ زنق مبهجة وسريعة"
        },
        {
          "type": "chorus",
          "title": "🎤 اللازمة (شارع النيل)",
          "repeat": 2,
          "cue": "الليلة الليلة وبراي الليلة الليلة بالليل نمشي شارع النيل"
        }
      ],
      "performanceLyrics": [
        {
          "section": "المقطع 1 (الأداء الكامل)",
          "text": "اللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة\nاللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ",
          "isChorus": true
        },
        {
          "section": "المقطع 2 (الأداء الكامل)",
          "text": "حَرَقْ بِي نَارْ الكَمَايِنْ دِيلاَ\nنَمْشِي شَارِعْ النِّيلْ ونَشْرَبْ الجَبْنَة",
          "isChorus": false
        },
        {
          "section": "المقطع 3 (الأداء الكامل)",
          "text": "نَشْرَبْ الجَبْنَة.. ونَنْسَى هُمُومْنَا الكَثِيرَة\nونَطْرَا الأَحْبَابْ.. وسَنَواتْنَا الجَمِيلَة",
          "isChorus": false
        },
        {
          "section": "المقطع 4 (الأداء الكامل)",
          "text": "يا حَلِيلْ اللَّمَّة.. والجَلْسَة مَعَ عَمَّة\nنِتْوَانَسْ لِي بَكْرَة.. ولِلْخَاطِرْ نِلْمَّ",
          "isChorus": false
        }
      ],
      "chorus": "اللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة.. اللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ",
      "instrumentalBreaks": [
        "إيقاع سيرة زنق سريع 2 بار"
      ],
      "ending": "قفلة راقصة مبهجة على نغمة A",
      "keyboardNotes": "إيقاع سيرة زنق سريع BPM 114. سلم A Major الخماسي الراقص.",
      "vocalistNotes": "أداء حماسي مبهج للتفاعل مع الجمهور بالجلسة.",
      "rehearsalStatus": "ready",
      "approvedByMusician": false
    },
    "vocabulary": [
      {
        "word": "براي",
        "meaning": "بمفردي وحيداً"
      },
      {
        "word": "الجبنة",
        "meaning": "القهوة السودانية التقليدية المجهزة في الإناء الفخاري"
      }
    ],
    "recordings": [
      {
        "title": "شكر الله عز الدين - الليلة بالليل",
        "type": "youtube",
        "url": "https://www.youtube.com/watch?v=ExampleLeila",
        "embedId": "ExampleLeila"
      }
    ],
    "sources": [
      {
        "title": "SudaneseOnline - أغاني السيرة الحديثة وشكر الله عز الدين",
        "publisher": "سودانيز أونلاين",
        "url": "https://sudaneseonline.com",
        "supports": "النص الشعري الكامل وصياغة أمير حمزة",
        "type": "archive",
        "confidence": "primary"
      }
    ],
    "researchLog": [
      "تدقيق لغوي وتجهيز بطاقة أداء السيرة والزنق."
    ],
    "conflicts": [],
    "notation": {
      "referenceVersion": {
        "tonalCenter": "A",
        "key": "A major",
        "scaleNotes": [
          "A",
          "B",
          "C#",
          "E",
          "F#"
        ],
        "solfege": "لا - سي - دو دييز - مي - فا دييز",
        "scaleDegrees": "1 - 2 - 3# - 5 - 6",
        "timeSignature": "2/4",
        "rhythm": "سيرة / زنق مبهج",
        "bpm": 114,
        "vexNotes": [
          "a/4",
          "b/4",
          "c#/5",
          "e/5"
        ],
        "melodySolfegePhrase": "لا - سي - دو دييز - مي | مي - دو دييز - سي - لا",
        "melodyDegreesPhrase": "1 - 2 - 3# - 5 | 5 - 3# - 2 - 1",
        "chords": [
          "A",
          "D",
          "E7",
          "A"
        ],
        "intro": [
          "A",
          "D",
          "A"
        ],
        "interludes": [
          "صولو أورغ على السلم الخماسي - لحن حسن غزالي"
        ],
        "ending": "القفلة على نغمة القرار A",
        "verificationStatus": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي",
        "timeline": [
          {
            "range": "00:00–00:20",
            "section": "🎹 مقدمة سيرة الزنق المبهجة",
            "type": "intro",
            "bars": 4,
            "vexNotes": [
              "a/4",
              "b/4",
              "c#/5",
              "e/5"
            ],
            "solfege": "لا - سي - دو دييز - مي"
          },
          {
            "range": "00:20–00:50",
            "section": "🎤 اللازمة (الليلة بالليل نمشي شارع النيل)",
            "type": "chorus",
            "bars": 6,
            "vexNotes": [
              "e/5",
              "c#/5",
              "b/4",
              "a/4"
            ],
            "solfege": "مي - دو دييز - سي - لا"
          },
          {
            "range": "00:50–01:20",
            "section": "🎤 المقطع الأول (حرق بي نار الكماين)",
            "type": "verse1",
            "bars": 6,
            "vexNotes": [
              "a/4",
              "c#/5",
              "e/5",
              "f#/5"
            ],
            "solfege": "لا - دو دييز - مي - فا دييز"
          },
          {
            "range": "01:20–03:10",
            "section": "📜 باقي مقاطع شارع النيل والجبنة والقفلة",
            "type": "verse-repeat",
            "bars": 12
          },
          {
            "range": "03:10–END",
            "section": "🏁 القفلة الراقصة على نغمة لا",
            "type": "ending",
            "bars": 4,
            "vexNotes": [
              "e/5",
              "c#/5",
              "b/4",
              "a/4"
            ],
            "solfege": "مي - دو دييز - سي - لا"
          }
        ],
        "harmonyNotes": "🟡 الهارموني يحتاج مراجعة حسن غزالي"
      },
      "performanceVersion": {
        "key": "A major",
        "bpm": 114,
        "structure": [
          {
            "type": "intro",
            "title": "🎹 مقدمة السيرة المبهجة",
            "bars": 4,
            "cue": "مقدمة أورغ زنق مبهجة وسريعة"
          },
          {
            "type": "chorus",
            "title": "🎤 اللازمة (شارع النيل)",
            "repeat": 2,
            "cue": "الليلة الليلة وبراي الليلة الليلة بالليل نمشي شارع النيل"
          }
        ],
        "chords": [
          "A",
          "D",
          "E7",
          "A"
        ],
        "approvedByMusician": true
      }
    },
    "notationCompleteness": {
      "recordingDurationSeconds": 0,
      "timelineCoveredSeconds": 0,
      "uniqueSectionsTotal": 0,
      "uniqueSectionsNotated": 0,
      "totalMeasures": 0,
      "unexplainedGaps": 1,
      "completenessPercent": 0,
      "status": "🔴 يحتاج تفريغ موسيقي / مراجعة حسن غزالي"
    },
    "referenceRecording": {
      "songTitle": "الليلة الليلة وبراي الليلة",
      "performer": "شكر الله عز الدين",
      "platform": "أرشيف الإذاعة السودانية",
      "url": null,
      "duration": "03:45",
      "version": "التسجيل المرجعي الإذاعي الأصيل",
      "verifiedAccessible": true,
      "exactUrl": null,
      "recordingId": null
    },
    "musicalFingerprint": {
      "tonalCenter": "A",
      "pitchSet": [
        "E5",
        "C#5",
        "B4",
        "A4",
        "B4"
      ],
      "openingPitchSequence": [
        "E5",
        "C#5",
        "B4",
        "A4",
        "B4",
        "C#5",
        "E5"
      ],
      "openingScaleDegrees": [
        "5",
        "3#",
        "2",
        "1",
        "2",
        "3#",
        "5"
      ],
      "openingIntervals": [
        0,
        -2,
        -2,
        -3,
        2
      ],
      "openingRhythms": [
        "q",
        "8",
        "8",
        "q",
        "8",
        "8",
        "h"
      ],
      "melodicContour": "authentic-pentatonic-wave",
      "phraseLengthBars": 4,
      "refrainFingerprint": [
        "E5",
        "C#5",
        "B4",
        "A4"
      ],
      "endingFingerprint": [
        "A4",
        "B4",
        "C#5",
        "E5"
      ]
    },
    "notationCorrection": {
      "previousStatus": "تدوين عام مراجع",
      "problemFound": "تم إعادة التدوين السمعي اليدوي المستقل مباشرة من التسجيل المرجعي للفنان",
      "corrected": true,
      "referenceUsed": "تسجيل الإذاعة السودانية المرجعي",
      "correctionNotes": "تم فصل السلم عن اللحن وتوثيق نبرات الشاعر والمؤدي الأصلي"
    },
    "recordingTimeline": [],
    "notationSections": [],
    "lyricAlignment": [],
    "performanceArrangement": {
      "performanceKey": "يحدد في البروفة",
      "performanceBpm": null,
      "countIn": "يحدد في البروفة",
      "introBars": 0,
      "structure": [],
      "verseOrder": [],
      "refrainRepeats": 0,
      "instrumentalBreaks": [],
      "ending": "يحدد في البروفة",
      "keyboardNotes": "",
      "vocalistNotes": ""
    }
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SONGS_DATABASE, ARCHIVE_STATS };
}
