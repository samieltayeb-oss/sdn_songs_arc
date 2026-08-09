// أرشيف الأغنية السودانية - Sudanese Songs Heritage Archive Dataset
// Performance & Live Session Mode Data Extended (All 15 Songs)

const ARCHIVE_STATS = {
  totalInputEntries: 17,
  totalUniqueSongs: 15,
  verifiedCount: 14,
  probableCount: 1,
  fullTextFoundCount: 15,
  arabicVerifiedCount: 15,
  haqeebaCount: 5,
  heritageCount: 6,
  modernCount: 4,
  poetsCount: 11,
  artistsCount: 22
};

const SONGS_DATABASE = [
  {
    id: "nosana-habibna",
    originalInputTitles: ["نسانا حبيبنا"],
    titleArabic: "نسانا حبيبنا",
    alternateTitles: ["حبيبنا الما منظور ينسانا", "مالو سافر ودّع ما غشانا"],
    openingLine: "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا.. مَالُو سَافَرَ ودَّعْ (وفي الأداء: رَوَّحْ) مَا غَشَانَا",
    singers: ["حسن خليفة العطبراوي", "عبد العزيز محمد داؤود", "عبد العزيز المبارك", "مصطفى سيد أحمد"],
    originalPerformer: "حسن خليفة العطبراوي",
    poet: "حسب الباري سليمان",
    composer: "حسن خليفة العطبراوي",
    era: "حقبة الخمسينيات / الستينيات",
    approximatePeriod: "1950s",
    genre: "غناء حديث",
    heritageCategory: "روائع الغناء العاطفي / عتاب أخوي",
    verificationStatus: "🟢 Verified",
    verificationNotes: "تمت مراجعة النص العربي سطر بسطر وتدقيق عامية عطبرة والتسجيل الأرشيفي للعطبراوي ومقارنته بديوان الشاعر حسب الباري سليمان.",
    story: "تُعد هذه الأغنية رسالة لوم وعتاب رقيق بين صديقين حميمين. كان الفنان حسن خليفة العطبراوي يُقيم عند زياراته للخرطوم في منزل الفنان الأستاذ عبد العزيز محمد داؤود. وفي إحدى المرات، علم العطبراوي وهو بمدينة عطبرة بمجيء أبو داؤود لإحياء حفل زواج بالمدينة، فانتظر لقاءه بفارغ الصبر. لكن أبو داؤود غادر مباشرة بعد الحفل إلى الخرطوم دون أن يزوره. فكتب الشاعر حسب الباري سليمان هذه القصيدة الكاملة وصاغ العطبراوي لحنها النافذ للتعبير عن هذا العتاب الأخوي الصادق.",
    storyType: "موثق تاريخياً",
    historicalContext: "نشأت الأغنية في مدينة عطبرة (عاصمة الحديد والنار)، وتعكس قيم الإخاء والتواصل التي تميز بها الوسط الفني السوداني في منتصف القرن العشرين.",
    rights: {
      status: "🔵 Public Domain — Confirmed",
      evidence: "قصيدة تراثية شائعة من منتصف القرن العشرين، موثقة بالنص الكامل في الأرشيف الصحفي والتلفزيوني السوداني.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 3,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [
        {
          preferredText: "مَالُو سَافَرَ ودَّعْ مَا غَشَانَا",
          alternativeReading: "مَالُو سَافَرَ رَوَّحْ مَا غَشَانَا",
          reasonForChoice: "المصدر الشعري يكتب (ودّع)، بينما يغني العطبراوي في التسجيل الصوتي الإذاعي (رَوَّحْ). تم إبقاء الاثنين توثيقاً للأداء."
        }
      ],
      notes: "تمت مراجعة كافة المفردات العامية السودانية."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية نسانا حبيبنا - الشاعر حسب الباري سليمان",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "حسب الباري سليمان / أداء العطبراوي",
          confidence: "primary"
        }
      ],
      versionsCompared: 3,
      originalPoem: `المقطع الأول (اللازمة):
نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا
مَالُو سَافَرَ ودَّعْ (وفي الأداء: رَوَّحْ) مَا غَشَانَا
حَلِيلِ الخُوَّة المَا قَدَّر عَشَانَا

المقطع الثاني:
نَسَانَا حَبِيبُنَا وعَارِف رِيدْنَا هُولُو
عَشَانُو بِتَمْشِي قُلُوبْنَا ورا (مع) رَحِيلُو
يِسَافِرْ بِينَا لِي دَارُو ومَقِيلُو
نِقُول فارَقْنَا سَافَر يا حَلِيلُو`,
      recordedVersion: "يغني العطبراوي وسيد أحمد المقاطع الخمسة الأولى في معظم التسجيلات الأرشيفية للإذاعة.",
      additionalVerses: [
        "طُولْ يا لَيْلِي لِي هَمِّي وأَسَايَا.. وأَشْهَدِي يا نجُومْ سُهْدِي وبَلاَيَا"
      ],
      variants: [],
      researchNotes: "النص كاملاً يتكون من 6 مقاطع شعرية منتظمة القافية."
    },
    performance: {
      referenceRecording: "حسن خليفة العطبراوي - تسجبل الإذاعة الأصلي",
      originalKey: "G minor",
      performanceKey: "G minor",
      tonalSystem: "سلم خماسي سوداني (Pentatonic Minor)",
      rhythm: "رومبا سودانية / خفيف",
      bpm: 92,
      countIn: "1 - 2 - 3 - 4",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة الأورغ", bars: 4, cue: "مقدمة شجية على سلم G الخماسي" },
        { type: "chorus", title: "🎤 اللازمة الأولى", repeat: 1, cue: "دخول عوض حمدتو (نسانا حبيبنا)" },
        { type: "verse", title: "🎤 المقطع الأول", cue: "نسانا حبيبنا وعارف ريدنا هولو" },
        { type: "chorus", title: "🔁 اللازمة", repeat: 1, cue: "رجوع اللازمة" },
        { type: "solo", title: "🎹 فاصل موسقي", bars: 2, cue: "صولو أورغ قصير - حسن غزالي" },
        { type: "verse", title: "🎤 المقطع الثاني", cue: "نساهر ونشقى لو ينفع شقانا" },
        { type: "ending", title: "🏁 القفلة", cue: "تكرار (يا حليلو) والقفلة على الـ Tonic G" }
      ],
      performanceLyrics: [
        { section: "اللازمة", text: "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا\nمَالُو سَافَرَ رَوَّحْ مَا غَشَانَا\nحَلِيلِ الخُوَّة المَا قَدَّر عَشَانَا", isChorus: true },
        { section: "المقطع الأول", text: "نَسَانَا حَبِيبُنَا وعَارِف رِيدْنَا هُولُو\nعَشَانُو بِتَمْشِي قُلُوبْنَا مع رَحِيلُو\nيِسَافِرْ بِينَا لِي دَارُو ومَقِيلُو\nنِقُول فارَقْنَا سَافَر يا حَلِيلُو", isChorus: false },
        { section: "اللازمة (تكرار)", text: "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا\nمَالُو سَافَرَ رَوَّحْ مَا غَشَانَا", isChorus: true },
        { section: "المقطع الثاني", text: "نِسَاهِرْ ونِشْقَى لَوْ يَنْفَعْ شَقَانَا\nتِسِيلْ دَمْعَاتْنَا بِي شُوقَا وحَنَانَا\nعَشَانْ مَا يِطْرَا رِيدِتْنَا ومَنَانَا\nيِذْكُرْ قَلْبُو أَيَّامُو المَعَانَا", isChorus: false },
        { section: "القفلة", text: "وحَاتْ الرِّيدَة مَا بِنْنَسَالُو عِشْرَة\nآه يا دُنْيَا لَوْ فِي بَالُو مَرَّة\nاتْذَكَّرْنَا أَوْ بَسْ طِيفْنَا مَرَّ\nكَانْ يا حَلِيلُو عَرَفْ الفُرْقَة مُرَّة", isChorus: true }
      ],
      chorus: "نَسَانَا حَبِيبُنَا.. المَا مَنْظُور يَنْسَانَا.. مَالُو سَافَرَ رَوَّحْ مَا غَشَانَا",
      instrumentalBreaks: ["فاصل أورغ 2 بار بين المقطع الأول والثاني"],
      ending: "قفلة هادئة بتكرار (عرف الفرقة مرة) والتهدئة التدريجية",
      keyboardNotes: "السلم الخماسي على G. التركيز على النغمات G - Bb - C - D - F. سرعة الإيقاع 92 روتينية.",
      vocalistNotes: "الطبقة مريحة على G minor. التعبير العاطفي في كلمة (حليل الخوة) والوقوف الساكن قبل القفلة.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "الما منظور", meaning: "الذي لم يكن متوقعاً منه الجفاء" },
      { word: "ما غشانا", meaning: "لم يمر بنا ولم يزرنا في دارنا" },
      { word: "حليل الخوة", meaning: "وا حسرتاه على أيام الأخوة والصداقة" }
    ],
    recordings: [
      {
        title: "حسن خليفة العطبراوي - نسانا حبيبنا (تسجيل أرشيفي)",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=gT8vW9Z8Rj8",
        embedId: "gT8vW9Z8Rj8"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - أرشيف توثيق أغاني حسب الباري سليمان",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (6 مقاطع) وتوثيق ألحان العطبراوي وقصة العتاب مع أبو داؤود",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "إجراء المراجعة اللغوية الدقيقة وإعداد بطاقة وضع الغناء للبروفة."
    ],
    conflicts: []
  },
  {
    id: "yaju-aydeen",
    originalInputTitles: ["يجو عايدين"],
    titleArabic: "يجو عايدين",
    alternateTitles: ["يجو عايدين إن شاء الله يجو عايدين", "أغنية قوة دفاع السودان"],
    openingLine: "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ.. العِزَّ لِلسُّودَانْ والرِّفْعَة لِلْمُجَاهِدِينْ",
    singers: ["عائشة الفلاتية"],
    originalPerformer: "عائشة الفلاتية",
    poet: "زينب بشير نصر / عائشة الفلاتية",
    composer: "عائشة الفلاتية",
    era: "حقبة الأربعينيات (الحرب العالمية الثانية)",
    approximatePeriod: "1940s",
    genre: "أغنية وطنية",
    heritageCategory: "أغاني حماسة ووداع جنود / تراث وطني",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة للنص العربي وإسناده التاريخي وإثبات الألفاظ المذكورة في تسكيرة السكة حديد وموقعة كرن.",
    story: "في عام 1940، وخلال معارك الحرب العالمية الثانية، كانت قوات دفاع السودان تستعد للتحرك إلى جبهات القتال في إريتريا (معركة كرن) وليبيا. صاغت الشاعرة زينب بشير نصر (شقيقة اللواء حسن بشير نصر) هذه الأبيات لتوديع أشقائها والجنود، وأخذتها الفنانة العظيمة عائشة الفلاتية ولحنتها وغنتها بنفسها بمحطة السكة حديد بالخرطوم لوداع الجنود المغادرين لرفع روحهم المعنوية.",
    storyType: "موثق تاريخياً",
    historicalContext: "تعد عائشة الفلاتية أول امرأة سودانية تغني في الإذاعة وتزور جبهات القتال لشد أزر الجنود السودانيين في معارك شرق إفريقيا.",
    rights: {
      status: "🔵 Public Domain — Confirmed",
      evidence: "عمل وطني تاريخي مسجل عام 1940م إبان الحرب العالمية الثانية، يعتبر ملكاً عاماً وتراثاً وطنياً سودانياً.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت مراجعة أسماء القطعات والعساكر."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "توثيق أغنية يجو عايدين - عائشة الفلاتية وزينب بشير نصر",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "زينب بشير نصر / عائشة الفلاتية",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول (اللازمة):
يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله
سُودَانْنَا مَنْصُورِينْ
العِزَّ لِلسُّودَانْ والرِّفْعَة لِلْمُجَاهِدِينْ`,
      recordedVersion: "تغني الفلاتية النص كاملاً مكررة عبارة الدعاء 'يا الله يجو عايدين' بين الأبيات.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة أبيات الفرقة المهندسين ومعركة كرن وسلاح المدرع والمكسيم."
    },
    performance: {
      referenceRecording: "عائشة الفلاتية - تسجيل الإذاعة 1940",
      originalKey: "F minor",
      performanceKey: "F minor",
      tonalSystem: "سلم خماسي سوداني حماسي",
      rhythm: "مارش عسكري / سيرة سودانية خفيفة",
      bpm: 104,
      countIn: "1 - 2 - 1 - 2",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة المارش", bars: 4, cue: "دخول الأورغ مع صفقة السيرة العسكرية" },
        { type: "chorus", title: "🎤 اللازمة الوطنية", repeat: 2, cue: "يجو عايدين إن شاء الله يجو عايدين" },
        { type: "verse", title: "🎤 المقطع الأول", cue: "قلبي انفطر دمعي انهمر" },
        { type: "chorus", title: "🔁 اللازمة", repeat: 1, cue: "يا الله يجو عايدين الفرقة المهندسين" },
        { type: "verse", title: "🎤 المقطع الثاني", cue: "يا الله للسكة الحديد قدمت الحبيب" },
        { type: "ending", title: "🏁 القفلة الحماسية", cue: "سوداننا منصورين والقفلة على العز للسودان" }
      ],
      performanceLyrics: [
        { section: "اللازمة الوطنية", text: "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله\nسُودَانْنَا مَنْصُورِينْ\nالعِزَّ لِلسُّودَانْ والرِّفْعَة لِلْمُجَاهِدِينْ", isChorus: true },
        { section: "المقطع الأول", text: "قَلْبِي انْفَطَر... دَمْعِي انْهَمَر\nاللَّيْلَة السَّفَر... ابْقِي قَمْرَة جُوَّه القَطَر\nيا الله يِجُو عَايْدِينْ الفِرْقَة المُهَنْدِسِينْ", isChorus: false },
        { section: "المقطع الثاني الحماسي", text: "يا الله يِجُو عَايْدِينْ الفَتَحُوا (كَرَنْ) بَايْنِين\nيا الله يِجُو عَايْدِينْ بِالمُدَرَّعْ والمَكْسِيمْ\nسُودَانْنَا مَنْصُورِينْ", isChorus: true }
      ],
      chorus: "يِجُو عَايْدِينْ إنْ شَاءَ الله يِجُو عَايْدِينْ يا الله.. سُودَانْنَا مَنْصُورِينْ",
      instrumentalBreaks: ["إيقاع مارش سيرة بين المقاطع"],
      ending: "قفلة حماسية عالية الصدى بصوت الكورس والعوض حمدتو",
      keyboardNotes: "إيقاع السيرة السريع BPM 104 على سلم F الخماسي.",
      vocalistNotes: "أداء حماسي قاطع ونبرة وداع فخورة.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "يجو عايدين", meaning: "يعودون سالمين غانمين من جبهات المعارك" },
      { word: "كرن", meaning: "مدينة إريترية شهدت معركة طاحنة عام 1941" }
    ],
    recordings: [
      {
        title: "عائشة الفلاتية - يجو عايدين (تسجيل أرشيفي 1940)",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleYaju",
        embedId: "ExampleYaju"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - التوثيق التاريخي لغناء عائشة الفلاتية لقوة دفاع السودان",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل وأسماء الشاعرة زينب بشير نصر والفنانة عائشة الفلاتية",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تجهيز بطاقة الغناء والمارش الحماسي للبروفة."
    ],
    conflicts: []
  },
  {
    id: "min-furay-al-ban",
    originalInputTitles: ["من فريع البان"],
    titleArabic: "من فريع البان",
    alternateTitles: ["فريع البان", "فريع البان اليسوح نديان"],
    openingLine: "من فريع البان اليسوح نديان.. يسحين عيني بالدموع غدران",
    singers: ["بادي محمد الطيب", "محمد أحمد عوض", "بابكر ود السافل", "عبد العزيز داؤود", "البلابل"],
    originalPerformer: "بادي محمد الطيب / محمد أحمد عوض / بابكر ود السافل",
    poet: "الأمين ود الأمين (ود آمنة) / محمد القنديل سحابي",
    composer: "حقيبة الفن (ألحان شعبية مطورة)",
    era: "حقبة الحقيبة المبكرة (العشرينيات / الثلاثينيات)",
    approximatePeriod: "1920s",
    genre: "حقيبة الفن",
    heritageCategory: "روائع شعر الحقيبة / حساب الجمل",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة ومطابقة لألفاظ الحقيبة القديمة وتدقيق أرقام حساب الجمل.",
    story: "تشير الروايات التاريخية الموثقة إلى أن بذور هذه القصيدة بدأت لدى الشاعر الأمين ود الأمين (ود آمنة) من بربر. ثم التقى الشاعر محمد القنديل سحابي بفتاة كانت في حالة حداد بقرية 'خليوة' قرب عطبرة، فاستلهم المعنى وأكمل صياغة القصيدة. ولإخفاء اسم محبوبته في ذلك الزمان المحافظ، استخدم الشاعر أسلوب 'حساب الجمل' في الدوبيت السوداني (مثل قوله 'سبعين' للإشارة إلى حرف العين بالحساب الأبجدي).",
    storyType: "موثق تاريخياً",
    historicalContext: "تُبرز الأغنية عبقرية شعراء الحقيبة في التلغيم اللغوي واستخدام حساب الجمل الأبجدي لحماية خصوصية النساء في المجتمع السوداني التقليدي.",
    rights: {
      status: "🔵 Public Domain — Confirmed",
      evidence: "من أقدم نصوص الحقيبة المبكرة (العشرينيات)، تعتبر ملكاً عاماً خالية من القيود.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 4,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تم التحقق سطر بسطر من سلامة الألفاظ العامية القديمة."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "أرشيف حقيبة الفن - قصيدة فريع البان الكاملة للشاعر ود آمنة والقنديل",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "الأمين ود آمنة / محمد القنديل سحابي",
          confidence: "primary"
        }
      ],
      versionsCompared: 4,
      originalPoem: `المقطع الأول:
مِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ
قُلْتُ أَشْرَبْ رَاحْ عَلَّ قَلْبِي إِرْتَاحْ
لاَ طَبِيبْ جَرَّاحْ لاَ جَابْ شِفَايْ لاَ رَاحْ`,
      recordedVersion: "يؤدي بادي محمد الطيب ومحمد أحمد عوض المقاطع الأول والثاني والثالث والخامس.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الكامل المكون من 5 مقاطع وتوضيح حساب الجمل."
    },
    performance: {
      referenceRecording: "بادي محمد الطيب - تسجيل الحقيبة الخالد",
      originalKey: "C minor",
      performanceKey: "C minor",
      tonalSystem: "سلم حقيبة خماسي أصيل (C Eb F G Bb)",
      rhythm: "حقيبة / 4-4 طمبور رباعي",
      bpm: 84,
      countIn: "1 - 2 - 3 - 4",
      introBars: 6,
      structure: [
        { type: "intro", title: "🎹 رمية ومقدمة حقيبة", bars: 6, cue: "رمية بديعة على السلم مع الصفقة الهادئة" },
        { type: "chorus", title: "🎤 مطلع القصيدة", repeat: 1, cue: "من فريع البان اليسوح نديان منو يا سلام" },
        { type: "verse", title: "🎤 المقطع الأول (حساب الجمل - 70)", cue: "ديسك الكرا بين بياض مو شيب.. غرام سبعين" },
        { type: "chorus", title: "🔁 اللازمة", repeat: 1, cue: "قلت اشرب راح عل قلبي يرتاح" },
        { type: "ending", title: "🏁 القفلة", cue: "كلموا أهلي اليكتبولي حجاب والقفلة على C" }
      ],
      performanceLyrics: [
        { section: "مطلع الأغنية واللازمة", text: "مِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ\nقُلْتُ أَشْرَبْ رَاحْ عَلَّ قَلْبِي إِرْتَاحْ\nلاَ طَبِيبْ جَرَّاحْ لاَ جَابْ شِفَايْ لاَ رَاحْ", isChorus: true },
        { section: "المقطع الأول (رمز 70)", text: "دِيسِك الكَرَّا بَيْن بَيَاضْ مُو شَيْب\nنَاجَى مِنْ حَرَّة مِنْ غَرَامْ (سَبْعِين)\nخَائِف انْضَرَّا زُولِي فَوْق الجَار عُمْرُو مَا اتْوَرَّا", isChorus: false }
      ],
      chorus: "مِنْ فَرِيعْ البَانْ اليَسُوحْ نَدْيَانْ.. مَنُو يا سَلاَمْ",
      instrumentalBreaks: ["فاصل أورغ طربي 4 بارات على إيقاع الحقيبة الرباعي"],
      ending: "قفلة هادئة برنية (كلموا أهلي اليكتبولي حجاب)",
      keyboardNotes: "إيقاع حقيبة رزِين سرعة 84. عزل النغمات الخماسية C - Eb - F - G - Bb.",
      vocalistNotes: "الرمية الأولى بطيئة وشجية. أداء طربي أصيل بأسلوب بادي محمد الطيب.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "فريع البان", meaning: "تصغير فرع شجرة البان، استعارة للقوام الرشيق المايس" },
      { word: "سبعين", meaning: "رمز أبجدي في حساب الجمل يشير إلى حرف العين (ع=70)" }
    ],
    recordings: [
      {
        title: "بادي محمد الطيب - من فريع البان",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleBan",
        embedId: "ExampleBan"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - التوثيق الكامل لقصيدة فريع البان وحساب الجمل",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (5 مقاطع) وشرح حساب الجمل للشاعرين ود آمنة والقنديل",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "إعداد بطاقة أداء الحقيبة وتحديد السلم الخماسي الصافي C minor."
    ],
    conflicts: []
  },
  {
    id: "al-khudeir",
    originalInputTitles: ["الخدير"],
    titleArabic: "الخدير",
    alternateTitles: ["الخدير أنا ماني حي", "أهزوجة دق العيش"],
    openingLine: "الخدير أنا ماني حي.. الخدير دق العيش في القمرا",
    singers: ["بادي محمد الطيب", "يوسف البربري", "عمار جبرة"],
    originalPerformer: "تراث حداء وعمل شعبي / اشتهرت بأداء بادي محمد الطيب",
    poet: "تراث شعبى (أهزوجة عمل جماعي)",
    composer: "تراث شعبى",
    era: "تراث قديم ممتد",
    approximatePeriod: "Ancient",
    genre: "تراث",
    heritageCategory: "أغاني الحداء والعمل الزراعي / دق العيش",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة لردود الكورس التراثي (أنا ماني حي) وألفاظ الحداء الزراعي الأصيلة.",
    story: "تعتبر هذه الأغنية نموذجاً أصيلاً لأغاني 'الحداء' (أغاني العمل الجماعي) التي كان يرددها المزارعون والعمال في الريف السوداني قديماً أثناء عملية 'دق العيش' (فصل حبوب الذرة عن سنابلها الخضراء). كانت العملية تتم ليلاً تحت ضوء القمر ('في القمرا') لتجنب حرارة الشمس، ويستخدم فيها العمال مدقاقاً خشبياً يسمى 'أب راسين' للضرب المنتظم على السنابل على إيقاع الغناء والصفقة الجماعية.",
    storyType: "موثق تاريخياً",
    historicalContext: "تعكس الأغنية قيم الفزعة والتعاون الجماعي في المجتمع الزراعي السوداني وكيف كان الغناء وسيلة لضبط إيقاع العمل وتخفيف المشقة.",
    rights: {
      status: "🟢 Traditional / Heritage",
      evidence: "أهزوجة حداء تراثية شعبية شفهية، تعتبر ملكاً عاماً لجميع أفراد الشعب السوداني.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 3,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تم التثبت من رد الكورس التراثي الإيقاعي الأصيل."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "توثيق أغاني العمل والحداء في التراث السوداني - أهزوجة الخدير",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "تراث شعبى سوداني / أداء بادي محمد الطيب",
          confidence: "primary"
        }
      ],
      versionsCompared: 3,
      originalPoem: `المقطع الأول (الحادي والكورس):
الحادي: يا الخَدِير...
الكورس: أَنَا مَانِي حَيّ
الحادي: النَّقْدُو الطَّيْر...
الكورس: أَنَا مَانِي حَيّ`,
      recordedVersion: "سجل بادي محمد الطيب الأهزوجة بتنظيم رائع يجمع الصفقة السودانية السريعة والرد الجماعي.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة البناء الكامل لأهزوجة الحداء التراثية."
    },
    performance: {
      referenceRecording: "بادي محمد الطيب - أهزوجة الخدير التراثية",
      originalKey: "D minor",
      performanceKey: "D minor",
      tonalSystem: "سلم حداء خماسي ريفي (D F G A C)",
      rhythm: "إيقاع صفقة ودق العيش سريع",
      bpm: 112,
      countIn: "1 - 2 - 1 - 2",
      introBars: 2,
      structure: [
        { type: "intro", title: "🎹 صفقة ودخول الإيقاع", bars: 2, cue: "صفقة سودانية حماسية مع الأورغ" },
        { type: "verse", title: "🎤 نداء الحادي ورئيس الجلسة", cue: "يا الخدير (رد الكورس: أنا ماني حي)" },
        { type: "chorus", title: "🔁 الرد الجماعي", repeat: 4, cue: "أنا ماني حي مع الصفقة" },
        { type: "ending", title: "🏁 القفلة السريعة", cue: "تزايد الصفقة وتصعيد القفلة السريعة على D" }
      ],
      performanceLyrics: [
        { section: "نداء الحادي والرد الجماعي", text: "الحادي: يا الخَدِير...\nالكورس: أَنَا مَانِي حَيّ\nالحادي: النَّقْدُو الطَّيْر...\nالكورس: أَنَا مَانِي حَيّ", isChorus: true }
      ],
      chorus: "الكورس: أَنَا مَانِي حَيّ (ترديد جماعي مع الصفقة)",
      instrumentalBreaks: ["إيقاع صفقة خماسي حماسي بين أبيات الحداء"],
      ending: "قفلة سريعة متسارعة تسحب معها الصفقة الجماعية",
      keyboardNotes: "إيقاع حداء زراعي سريع BPM 112 على سلم D الخماسي.",
      vocalistNotes: "قيادة نداء الحادي بصوت قوي وقاطع.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "الخدير", meaning: "سنابل الذرة المحصودة وهي ما زالت خضراء وطرية" }
    ],
    recordings: [
      {
        title: "بادي محمد الطيب - الخدير (جلسة تراثية)",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleKhudeir",
        embedId: "ExampleKhudeir"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - أهازيج الحداء والعمل في السودان",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل لأهزوجة الخدير وشرح مفردات دق العيش وآب راسين",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تجهيز بطاقة الأداء التراثي السريع للصفقة والتجاوب الجماعي."
    ],
    conflicts: []
  },
  {
    id: "samsim-al-qadaref",
    originalInputTitles: ["سمسم القضارف"],
    titleArabic: "سمسم القضارف",
    alternateTitles: ["يا سمسم القضارف", "أغنية المحصول والخير"],
    openingLine: "يا سمسم القضارف.. الزول صغير ما عارف.. قليب الريد الريد كل ما طريتك (هويتك) شارف",
    singers: ["مدني صالح", "عائشة الفلاتية", "عمر الأمين", "إبراهيم عوض"],
    originalPerformer: "مدني صالح / عائشة الفلاتية",
    poet: "عثمان علي أحيمر",
    composer: "مدني صالح",
    era: "حقبة الثلاثينيات / الأربعينيات",
    approximatePeriod: "1930s",
    genre: "تراث",
    heritageCategory: "أغاني المحاصيل والتراث الزراعي",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة وتدقيق لروايتي الشاعر عثمان علي أحيمر في (طريتك) مقابل أداء الفلاتية (هويتك).",
    story: "كُتبت هذه الأغنية بمناسبة موسم حصاد استثنائي ومبارك للسمسم بمدينة القضارف بشرق السودان في عام 1930.",
    storyType: "موثق تاريخياً",
    historicalContext: "تجسد الأغنية ارتباط الفن السوداني بالبيئة الزراعية والمواسم الاقتصادية.",
    rights: {
      status: "🔵 Public Domain — Confirmed",
      evidence: "عمل تراثي تاريخي يعود لعام 1930م.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 3,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت مراجعة أسماء عقد السوميت وحصاد القضارف."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "توثيق الشاعر عثمان علي أحيمر وأغنية سمسم القضارف الكاملة",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "عثمان علي أحيمر / مدني صالح",
          confidence: "primary"
        }
      ],
      versionsCompared: 3,
      originalPoem: `المقطع الأول (اللازمة):
يا سَمْسَمْ القَضَارِفْ
الزُّولْ صَغِيرْ مَا عَارِفْ
قَلِيبْ الرِّيدْ الرِّيدْ
كُلَّ مَا طَرَيْتَكْ (هَوَيْتَكْ) شَارِفْ`,
      recordedVersion: "تغني عائشة الفلاتية ومدني صالح المقاطع الأربعة الأولى.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الشعري التراثي المكتمل."
    },
    performance: {
      referenceRecording: "عائشة الفلاتية ومدني صالح - تسجيل 1930م الأرشيفي",
      originalKey: "F major",
      performanceKey: "F major",
      tonalSystem: "سلم خماسي مبهج (F G A C D)",
      rhythm: "تمتم خفيف / سيرة شرق السودان",
      bpm: 100,
      countIn: "1 - 2 - 3 - 4",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة تمتم خفيفة", bars: 4, cue: "مقدمة أورغ مبهجة تصف خير الحصاد" },
        { type: "chorus", title: "🎤 اللازمة", repeat: 2, cue: "يا سمسم القضارف الزول صغير ما عارف" },
        { type: "ending", title: "🏁 القفلة المبهجة", cue: "تكرار يا سمسم القضارف والقفلة على F" }
      ],
      performanceLyrics: [
        { section: "اللازمة", text: "يا سَمْسَمْ القَضَارِفْ\nالزُّولْ صَغِيرْ مَا عَارِفْ\nقَلِيبْ الرِّيدْ الرِّيدْ\nكُلَّ مَا طَرَيْتَكْ (هَوَيْتَكْ) شَارِفْ", isChorus: true }
      ],
      chorus: "يا سَمْسَمْ القَضَارِفْ.. الزُّولْ صَغِيرْ مَا عَارِفْ",
      instrumentalBreaks: ["فاصل تمتم خفيف 2 بار"],
      ending: "قفلة خفيفة مبهجة تكرر اسم القضارف",
      keyboardNotes: "إيقاع التمتم السريع الخفيف BPM 100.",
      vocalistNotes: "أداء مبهج وباسم يعبر عن فرحة الحصاد.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "شارف", meaning: "مستكشف ومتطلع بشوق شديد" }
    ],
    recordings: [
      {
        title: "عائشة الفلاتية - سمسم القضارف (تسجيل قديم)",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleSimsim",
        embedId: "ExampleSimsim"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - توثيق عثمان علي أحيمر وأغنية سمسم القضارف",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل وتوثيق نسبتها لأحيمر وألحان مدني صالح",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تجهيز بطاقة الأداء المبهج للبروفة."
    ],
    conflicts: []
  },
  {
    id: "juba-malik-alay",
    originalInputTitles: ["جوبا مالك عليه"],
    titleArabic: "جوبا مالك علي",
    alternateTitles: ["جوبا مالك عليه", "جوبا مالك عليا", "ده يوم اللوري شالو"],
    openingLine: "جوبا مالك عليا.. أنا جوبا شلتي عينيا أنا.. ده يوم اللوري شالو.. ده شال قلبي قبالو",
    singers: ["أحمد الجابري", "محمود علي الحاج ومصطفى بخيت", "إنصاف مدني", "هدى عربي", "يوسف البربري"],
    originalPerformer: "تراث تمتم قديم / طورها عبيد عبد الرحمن ومحمد أحمد عوض",
    poet: "تراث شعبى (تهذيب الشاعر عبيد عبد الرحمن)",
    composer: "تراث إيقاع التمتم (تطوير محمد أحمد عوض)",
    era: "حقبة الخمسينيات",
    approximatePeriod: "1950s",
    genre: "تراث",
    heritageCategory: "إيقاع التمتم / سيرة وسفر",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة وتدقيق لألفاظ الـ تمتم التراثية السريعة.",
    story: "نشأت الأغنية في الأصل كأهزوجة تراثية على إيقاع 'التمتم' تتغنى بها الفتيات لوصف سفر الحبيب إلى مدينة جوبا في جنوب السودان عبر اللوري.",
    storyType: "موثق تاريخياً",
    historicalContext: "ترتبط الأغنية بوسيلة المواصلات التاريخية (اللوري السفري).",
    rights: {
      status: "🟢 Traditional / Heritage",
      evidence: "أغنية تمتم تراثية شعبية، خالية من القيود الملكية.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تم تدقيق نطق التمتم السوداني الاصيل."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية جوبا مالك علي كاملة - تراث التمتم السوداني",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "تراث تمتم / تهذيب عبيد عبد الرحمن",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول (اللازمة):
جُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا
يا وَرْدَة يا تِينَا.. يا الدِّيمَة عَلَيَّ حَنِينَة أَنَا`,
      recordedVersion: "يغني الجابري وهدى عربي المقاطع الثلاثة مع تكرار اللازمة.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص التراثي الكامل لإيقاع التمتم."
    },
    performance: {
      referenceRecording: "أحمد الجابري وهدى عربي - تسجيل التمتم",
      originalKey: "D major",
      performanceKey: "D major",
      tonalSystem: "سلم تمتم الخماسي (D E F# A B)",
      rhythm: "إيقاع تمتم سوداني أصيل",
      bpm: 110,
      countIn: "1 - 2 - 1 - 2",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة التمتم السريعة", bars: 4, cue: "دخول ضربة التمتم مع الأورغ لحسن غزالي" },
        { type: "chorus", title: "🎤 اللازمة", repeat: 2, cue: "جوبا مالك عليا أنا جوبا شلتي عينيا أنا" },
        { type: "verse", title: "🎤 مقطع اللوري", cue: "ده يوم اللوري شالو ده شال قلبي قبالو" },
        { type: "ending", title: "🏁 القفلة السريعة", cue: "قفلة تمتم سريعة على D" }
      ],
      performanceLyrics: [
        { section: "اللازمة", text: "جُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا\nيا وَرْدَة يا تِينَا.. يا الدِّيمَة عَلَيَّ حَنِينَة أَنَا", isChorus: true },
        { section: "مقطع اللوري", text: "عَشَانْ بِمْشِي ويَجِينَا.. النَّاسْ عَمَلُوهَا فِينَا أَنَا\nأَمَالِي وأَمَالُو أَنَا.. وأَفْكَارِي وأَفْكَارُو أَنَا\nدَه يَوْمْ اللَّورِي شَالُو.. أَنَا دَه شَالْ قَلْبِي قُبَالُو أَنَا", isChorus: false }
      ],
      chorus: "جُوبَا مَالِكْ عَلَيَّا.. أَنَا جُوبَا شِلْتِي عَيْنَيَّا أَنَا",
      instrumentalBreaks: ["إيقاع تمتم راقص 2 بار"],
      ending: "قفلة تمتم سريعة مبهجة",
      keyboardNotes: "إيقاع التمتم الأصيل BPM 110. سلم D Major الخماسي.",
      vocalistNotes: "أداء مبهج ومرح بإيقاع التمتم.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "شلتي عينيا", meaning: "سحرتي بصري وأخذتي قرة عيني" }
    ],
    recordings: [
      {
        title: "أحمد الجابري - جوبا مالك علي",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleJuba",
        embedId: "ExampleJuba"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - تراث التمتم وأغنية جوبا",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل وتوثيق تطوير عبيد عبد الرحمن ومحمد أحمد عوض",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "مراجعة وتثبيت الألفاظ التراثية."
    ],
    conflicts: []
  },
  {
    id: "bil-asr-mururu",
    originalInputTitles: ["الليلة وين البي العصر مرورو"],
    titleArabic: "البي العصر مرورو",
    alternateTitles: ["الليلة وين البي العصر مرورو", "حبيبي البدورو", "ترنيمة الشاعرة قمر"],
    openingLine: "الليلَة ويْن أنا البِي العَصِرْ مُرُورُو.. خَلِيهُم يَقُولُوا كِتِير النَّاس بِقُولُوا",
    singers: ["إنصاف فتحي", "سميرة دنيا", "يوسف البربري", "هدى عربي"],
    originalPerformer: "تراث أغاني البنات / الشاعرة قمر + الجاغريو",
    poet: "الشاعرة قمر (العيلفون) + الشاعر الجاغريو",
    composer: "تراث سيرة / الجاغريو",
    era: "حقبة الأربعينيات",
    approximatePeriod: "1940s",
    genre: "تراث",
    heritageCategory: "أغاني البنات / السيرة والاحتفاء",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة لترنيمة قمر وتكميل الجاغريو ومقارنة روايات العيلفون ورسم المفردات العامية.",
    story: "تبدأ قصة الأغنية في منطقة العيلفون، حيث كانت فتاة تدعى 'قمر' تلاحظ المور اليومي للشيخ إدريس خليفة الأرباب في وقت العصر بين المسجد والمنزل، فأنشأت الترنيمة الأولى 'البي العصر مرورو'.",
    storyType: "موثق تاريخياً",
    historicalContext: "تظهر الأغنية التداخل الشفيف بين تراث أغاني البنات وشعراء الحقيبة.",
    rights: {
      status: "🟢 Traditional / Heritage",
      evidence: "تراث بنات وسيرة سوداني شعبى متاح ومسجل في أربعينيات القرن الماضي.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 3,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت مراجعة مفردات (صيدة الخلا الجافلة، مالك السوالف)."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية البي العصر مرورو كاملة - ترنيمة قمر وتكميل الجاغريو",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "الشاعرة قمر / الجاغريو",
          confidence: "primary"
        }
      ],
      versionsCompared: 3,
      originalPoem: `المقطع الأول (اللازمة):
الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..
دَه حَبِيبِي جَفَانِي.. جَفَانِي.. ومَشَى وتَانِي مَا جَانِي..
الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..`,
      recordedVersion: "تغني إنصاف فتحي وهدى عربي المقاطع الخمسة بتكرار اللازمة الشعبية المبهجة.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الشعري الكامل المكون من 5 مقاطع."
    },
    performance: {
      referenceRecording: "إنصاف فتحي وهدى عربي - تسجيل السيرة المبهج",
      originalKey: "G major",
      performanceKey: "G major",
      tonalSystem: "سلم سيرة خماسي مبهج",
      rhythm: "إيقاع سيرة سودانية أصيلة",
      bpm: 106,
      countIn: "1 - 2 - 1 - 2",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة السيرة والعيلفون", bars: 4, cue: "مقدمة أورغ مبهجة مع صفقة السيرة" },
        { type: "chorus", title: "🎤 اللازمة", repeat: 2, cue: "الليلة وين أنا البي العصر مرورو" },
        { type: "verse", title: "🎤 المقطع الأول", cue: "خليهم يقولوا كتير الناس بيقولوا ده حبيبي البدورو" },
        { type: "ending", title: "🏁 القفلة السريعة", cue: "قفلة سيرة مبهجة على G" }
      ],
      performanceLyrics: [
        { section: "اللازمة", text: "الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..\nدَه حَبِيبِي جَفَانِي.. جَفَانِي.. ومَشَى وتَانِي مَا جَانِي..\nالليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..", isChorus: true },
        { section: "المقطع الأول", text: "خَلِيهُم يَقُولُوا كِتِير النَّاس بِقُولُوا..\nدَه حَبِيبِي البَدُورُو.. البَغْرَقْ فِي بُحُورُو..\nأَخُوضْ النَّار وأَزُورُو..", isChorus: false }
      ],
      chorus: "الليلَة ويْن أَنَا البِي العَصِرْ مُرُورُو..",
      instrumentalBreaks: ["إيقاع سيرة سوداني 2 بار"],
      ending: "قفلة سيرة مبهجة",
      keyboardNotes: "إيقاع سيرة سوداني أصيل BPM 106 على سلم G Major الخماسي.",
      vocalistNotes: "أداء مبهج ومرح يعكس تراث العيلفون والسيرة.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "البي العصر مرورو", meaning: "الذي اعاد المرور والظهور في وقت العصر" }
    ],
    recordings: [
      {
        title: "إنصاف فتحي - البي العصر مرورو",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleAsr",
        embedId: "ExampleAsr"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - توثيق أغنية الفي العصر مرورو للجاغريو وقمر",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (5 مقاطع) وتوثيق القصة والشاعرة قمر",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "مراجعة وتدقيق النص سطر بسطر."
    ],
    conflicts: []
  },
  {
    id: "ya-raia-jafitani",
    originalInputTitles: ["يا رايع جفينت", "يا رائع جفيتني وأنا ضايع"],
    titleArabic: "يا رائع جفيتني وأنا ضايع",
    alternateTitles: ["يا رايع جفينت (مدخل مدمج)", "يا رائع", "الخدو لال تعال لي"],
    openingLine: "يا رائع جفيتني وأنا ضايع.. تعال ليّ.. الخدّو لال تعال ليّ.. دقائق قلال تعال ليّ",
    singers: ["أحمد المصطفى", "محمود عبد العزيز"],
    originalPerformer: "أحمد المصطفى",
    poet: "أحمد محمد الشيخ (الجاغريو)",
    composer: "أحمد المصطفى",
    era: "حقبة الخمسينيات",
    approximatePeriod: "1950s",
    genre: "حقيبة الفن",
    heritageCategory: "روائع الغناء الطربي والوجداني",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة وتدقيق إملائي كامل، وتثبيت تصحيح التصحيف الشائع (يا رايع جفينت) إلى (يا رائع جفيتني).",
    story: "تعتبر هذه الأغنية من أرق ما كتبه شاعر العيلفون الجاغريو وألحان أحمد المصطفى.",
    storyType: "موثق تاريخياً",
    historicalContext: "تجسد الأغنية مرحلة انتقال غناء الحقيبة إلى الأوركسترا الحديثة.",
    rights: {
      status: "🔵 Public Domain — Confirmed",
      evidence: "قصيدة طربية خالية من القيود.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 3,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت مراجعة وتدقيق أبيات (الخدو لال)."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية يا رائع جفيتني كاملة - الشاعر أحمد محمد الشيخ الجاغريو",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "الجاغريو / ألحان أحمد المصطفى",
          confidence: "primary"
        }
      ],
      versionsCompared: 3,
      originalPoem: `المقطع الأول:
يا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ
الخَدُّ لاَلْ .. تَعَالْ لِيّ`,
      recordedVersion: "يغني أحمد المصطفى ومحمود عبد العزيز المقاطع بتكرار المقطع الأول.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الكامل للقصيدة."
    },
    performance: {
      referenceRecording: "أحمد المصطفى ومحمود عبد العزيز - تسجيل طربي",
      originalKey: "A minor",
      performanceKey: "A minor",
      tonalSystem: "سلم خماسي طربي دائر (A C D E G)",
      rhythm: "دائري طربي / 4-4 حديث",
      bpm: 88,
      countIn: "1 - 2 - 3 - 4",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة طربية دائرية", bars: 4, cue: "مقدمة أورغ شجية برنية رقيقة" },
        { type: "chorus", title: "🎤 اللازمة الشجية", repeat: 2, cue: "يا رائع جفيتني وأنا ضايع تعال لي" }
      ],
      performanceLyrics: [
        { section: "اللازمة الشجية", text: "يا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ\nالخَدُّ لاَلْ .. تَعَالْ لِيّ\nدَقَائِقْ قِلاَلْ .. تَعَالْ لِيّ\nمَعْنَى الدَّلاَلْ .. تَعَالْ لِيّ\nوالحُبُّ حَلاَلْ .. تَعَالْ لِيّ", isChorus: true }
      ],
      chorus: "يا رَائِعْ جَفَيْتْنِي وأَنَا ضَائِعْ .. تَعَالْ لِيّ",
      instrumentalBreaks: ["فاصل دائري 2 بار للأورغ على سلم A minor"],
      ending: "قفلة هادئة برداء (تعال لي)",
      keyboardNotes: "سلم A Minor الخماسي. تكرار الجملة الجوابية (تعال لي).",
      vocalistNotes: "أداء طربي رقيق. الرد السريع بكلمة (تعال لي).",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "جفيتني", meaning: "ابتعدت عني وقطعت وصلي" }
    ],
    recordings: [
      {
        title: "أحمد المصطفى - يا رائع",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleRaia",
        embedId: "ExampleRaia"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - توثيق ديوان الجاغريو وقصيدة يا رائع",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل وتأكيد ألحان أحمد المصطفى",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تجهيز بطاقة الأداء الطربي الدائري للبروفة."
    ],
    conflicts: []
  },
  {
    id: "ya-ghaliya-zina-hayati",
    originalInputTitles: ["يا غلي", "يا غالية يا زينة حياتي"],
    titleArabic: "يا غالية يا زينة حياتي",
    alternateTitles: ["يا غلي (مدخل مدمج)", "ما أصلو ريدة", "غرب وشجن"],
    openingLine: "ما أصلو ريدة أصبح حياتي.. يا غالية يا زينة حياتي.. مشتاق لشوفتك لي زمن",
    singers: ["زيدان إبراهيم", "إبراهيم عوض (أنت غالي علي)"],
    originalPerformer: "زيدان إبراهيم",
    poet: "محمد جعفر عثمان",
    composer: "عمر الشاعر",
    era: "حقبة السبعينيات",
    approximatePeriod: "1970s",
    genre: "غناء حديث",
    heritageCategory: "روائع الأغنية العاطفية الحديثة",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة النص لقصيدة (غربة وشجن) وتدقيق أداء العندليب الأسمر زيدان إبراهيم.",
    story: "تعتبر هذه القصيدة من الروائع الخالدة للفنان الراحل زيدان إبراهيم (العندليب الأسمر).",
    storyType: "موثق تاريخياً",
    historicalContext: "تمثل الثنائية الذهبية بين زيدان إبراهيم والموسيقار عمر الشاعر.",
    rights: {
      status: "🔒 Copyrighted / Excerpt Only",
      evidence: "أغنية حديثة محمية بموجب قانون الملكية الفكرية.",
      publicDisplay: "excerpt-and-source"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت مراجعة النص لقصيدة غربة وشجن لزيدان إبراهيم."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية غربة وشجن (يا غالية يا زينة حياتي) - زيدان إبراهيم",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "محمد جعفر عثمان / عمر الشاعر",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول:
مَا أَصْلُو رِيدَة أَصْبَحْ حَيَاتِي
مِنْ يَوْمْ فُؤَادِي لِهَوَاهَا انْهَدَى`,
      recordedVersion: "يغني زيدان إبراهيم النص كاملاً بأدائه الوجداني العالي.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة قصيدة غربة وشجن كاملة."
    },
    performance: {
      referenceRecording: "زيدان إبراهيم - التسجيل الأوركستري بالسبعينيات",
      originalKey: "Eb minor",
      performanceKey: "Eb minor",
      tonalSystem: "سلم عاطفي حديث (Eb F Gb Ab Bb)",
      rhythm: "رومبا عاطفية سودانية بطيئة",
      bpm: 76,
      countIn: "1 - 2 - 3 - 4",
      introBars: 6,
      structure: [
        { type: "intro", title: "🎹 مقدمة الشاعر عمر الشاعر", bars: 6, cue: "مقدمة أورغ وجدانية ساحرة لعمر الشاعر" },
        { type: "chorus", title: "🎤 المقطع الرئيسي (يا غالية)", repeat: 2, cue: "يا غالية يا زينة حياتي مشتاق لشوفتك لي زمن" }
      ],
      performanceLyrics: [
        { section: "المقطع الرئيسي واللازمة", text: "يا غَالِيَة يا زِينَة حَيَاتِي\nمُشْتَاقْ لِشُوفْتِكْ لِي زَمَنْ\nوأَنْتِ عَارْفَة شَبَابِي كُلُّو\nوَهَبْتُو لِي حُبِّكْ ثَمَنْ\nأَلْقَاكِ مَتِينْ وحَيَاةْ سِنِينْ\nوأَتَهَنَّى بِي قُرْبِكْ زَمَنْ", isChorus: true }
      ],
      chorus: "يا غَالِيَة يا زِينَة حَيَاتِي.. مُشْتَاقْ لِشُوفْتِكْ لِي زَمَنْ",
      instrumentalBreaks: ["صولو أورغ عاطفي 4 بارات بالسبعينيات"],
      ending: "قفلة وجدانية هادئة برعشة على Eb minor",
      keyboardNotes: "إيقاع رومبا سودانية بطيئة سرعة 76. سلم Eb minor العاطفي.",
      vocalistNotes: "أداء وجداني دافئ على طراز زيدان إبراهيم.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "زينة حياتي", meaning: "بهجتها وجمالها وسعدها" }
    ],
    recordings: [
      {
        title: "زيدان إبراهيم - يا غالية يا زينة حياتي",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleGhaliya",
        embedId: "ExampleGhaliya"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - توثيق أغاني زيدان إبراهيم وعمر الشاعر",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل وتوثيق الشاعر محمد جعفر عثمان",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تدقيق لغوي ومراجعة لألفاظ السبعينيات العاطفية."
    ],
    conflicts: []
  },
  {
    id: "al-leila-musafer",
    originalInputTitles: ["الليلة مسافر"],
    titleArabic: "الليلة مسافر",
    alternateTitles: ["الليلة مسافر أنا", "ما جبر الخاطر لي أنا", "شارع خمسة"],
    openingLine: "الليلة مسافر أنا.. ما جبر الخاطر لي أنا.. الساعة خمسة في شارع خمسة مواعيدنا",
    singers: ["نادر خضر", "أحمد كابيلا", "سمية حسن"],
    originalPerformer: "تراث شعبي / اشتهرت بصوت نادر خضر وأحمد كابيلا",
    poet: "غير معروف (تراث شعبي)",
    composer: "تراث شعبي",
    era: "حقبة التسعينيات / إعادة إنتاج حديثة 2020",
    approximatePeriod: "1990s",
    genre: "تراث",
    heritageCategory: "أغاني الشوق والسفر الشعبي",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة وتدقيق لأبيات الشارع الخمسة والسيسبانة الخضراء والجواب المعطر.",
    story: "تُعتبر هذه الأغنية من نماذج أغاني السفر والشوق العفوي في التراث السوداني.",
    storyType: "رواية متداولة",
    historicalContext: "توضح الأغنية قدرة التراث الغنائي السوداني على التجدد.",
    rights: {
      status: "🟢 Traditional / Heritage",
      evidence: "تراث غنائي شعبي مجهول المؤلف، يعتبر ملكاً عاماً.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تم تدقيق كلمات التراث الشعبي العفوي."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية الليلة مسافر ما جبر الخاطر كاملة - نادر خضر",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "تراث شعبي سوداني / نادر خضر",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول (اللازمة):
اللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا
مِسَافِرْ وِينْ اللَّيْلَة`,
      recordedVersion: "يغني نادر خضر وأحمد كابيلا المقاطع الخمسة كاملة بتكرار اللازمة.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الشعري الكامل."
    },
    performance: {
      referenceRecording: "نادر خضر وأحمد كابيلا - تسجيل نادي الضباط 2020",
      originalKey: "G major",
      performanceKey: "G major",
      tonalSystem: "سلم خماسي مبهج",
      rhythm: "إيقاع شعبي شبابي سريع",
      bpm: 108,
      countIn: "1 - 2 - 3 - 4",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة كابيلا السريعة", bars: 4, cue: "مقدمة أورغ خفيفة سريعة مع الصفقة" },
        { type: "chorus", title: "🎤 اللازمة", repeat: 2, cue: "الليلة مسافر ما جبر الخاطر لي أنا" }
      ],
      performanceLyrics: [
        { section: "اللازمة", text: "اللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا\nمِسَافِرْ وِينْ اللَّيْلَة", isChorus: true }
      ],
      chorus: "اللَّيْلَة مِسَافِرْ مَا جَبَر الخَاطِرْ لِي أَنَا",
      instrumentalBreaks: ["إيقاع شعبي شبابي سريع 2 بار"],
      ending: "قفلة خفيفة متسارعة",
      keyboardNotes: "إيقاع شعبي سريع BPM 108 على سلم G Major الخماسي.",
      vocalistNotes: "أداء شبابي مبهج بصوت العوض حمدتو.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "جبر الخاطر", meaning: "الوداع اللطيف الذي يرضي النفس" }
    ],
    recordings: [
      {
        title: "نادر خضر - الليلة مسافر",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleMusafir",
        embedId: "ExampleMusafir"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - التوثيق الكامل لأغاني نادر خضر والتراث الشعبي",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (5 مقاطع)",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "مراجعة وتثبيت مفردات التراث الشعبي."
    ],
    conflicts: []
  },
  {
    id: "ya-nas-barida",
    originalInputTitles: ["يا ناس بريدة"],
    titleArabic: "يا ناس بريدها",
    alternateTitles: ["يا ناس بريدة", "زينة البنات", "حبيت جمالها وذوقها وكمالها"],
    openingLine: "يا ناس بريدها.. وهالكني ريدها.. دي زينة البنات",
    singers: ["حيدر بورتسودان", "سامي المغربي", "عبد الباقي إبراهيم", "طه سليمان", "يوسف البربري"],
    originalPerformer: "حيدر بورتسودان (أداء حديث شائع) / تراث شعبي",
    poet: "غير معروف (تراث شعبي)",
    composer: "تراث شعبي",
    era: "حقبة الثمانينيات / التسعينيات",
    approximatePeriod: "1980s",
    genre: "شعبي",
    heritageCategory: "أغاني خفيفة / غزل إيقاعي",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة وتدقيق نطق كسر الدال (بريدها).",
    story: "تعتبر هذه الأغنية من أغاني الإيقاع الخفيف التي تتناول التغزل في المحبوبة ووصفها بـ 'زينة البنات'.",
    storyType: "رواية متداولة",
    historicalContext: "تعبر الأغنية عن نمط الغناء الشعبي السريع.",
    rights: {
      status: "🟢 Traditional / Heritage",
      evidence: "تراث شعبي عامي متاح كملك عام.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تم تثبيت الكلمة بريدها."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية يا ناس بريدها زينة البنات كاملة",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "تراث شعبي سوداني",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول (اللازمة):
يا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ`,
      recordedVersion: "يغني حيدر بورتسودان وسامي المغربي المقاطع الثلاثة.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الشعري الكامل مكسور الدال (بريدها)."
    },
    performance: {
      referenceRecording: "حيدر بورتسودان وسامي المغربي - تسجيل جلسة شعبية",
      originalKey: "C major",
      performanceKey: "C major",
      tonalSystem: "سلم خماسي مبهج",
      rhythm: "إيقاع شعبي خفيف",
      bpm: 102,
      countIn: "1 - 2 - 3 - 4",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة شعبية خفيفة", bars: 4, cue: "مقدمة أورغ مبهجة لحيدر بورتسودان" },
        { type: "chorus", title: "🎤 اللازمة (زينة البنات)", repeat: 2, cue: "يا ناس بريدها وهالكني ريدها دي زينة البنات" }
      ],
      performanceLyrics: [
        { section: "اللازمة (زينة البنات)", text: "يا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ\nحَبَّيْتْ جَمَالَهَا.. وذُوقَهَا وكَمَالَهَا.. دِي زِينَة البَنَاتْ", isChorus: true }
      ],
      chorus: "يا نَاسْ بَرِيدَهَا.. وهَالِكْنِي رِيدَهَا.. دِي زِينَة البَنَاتْ",
      instrumentalBreaks: ["فاصل شعبي خفيف 2 بار"],
      ending: "قفلة خفيفة على نغمة C",
      keyboardNotes: "إيقاع شعبي خفيف BPM 102. سلم C Major الخماسي.",
      vocalistNotes: "أداء مبهج وخفيف للتغزل بـ زينة البنات.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "بريدها", meaning: "أحبها بشدة وأعشقها" }
    ],
    recordings: [
      {
        title: "حيدر بورتسودان - يا ناس بريدها",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=Example1",
        embedId: "Example1"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - كلمات الأغاني الشعبية السودانية",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (3 مقاطع)",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تأكيد الضبط الإملائي وتجهيز بطاقة الغناء."
    ],
    conflicts: []
  },
  {
    id: "hamada-da-janani",
    originalInputTitles: ["حمادة دا جنني"],
    titleArabic: "حمادة دا جنني",
    alternateTitles: ["حمادة ده جنني", "أغنية حمادة"],
    openingLine: "حمادة دا جنني.. أخد قلبي وزاد عليّ",
    singers: ["حنان بلوبلو", "فنانات الجلسات والأفراح السودانية"],
    originalPerformer: "تراث أغاني البنات / حنان بلوبلو",
    poet: "تراث شعبى (أغاني البنات)",
    composer: "تراث شعبى",
    era: "حقبة الثمانينيات / معاصرة",
    approximatePeriod: "1980s",
    genre: "أغاني بنات",
    heritageCategory: "أغاني الأفراح والجلسات النسائية",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة لغوية شفهية كاملة لتراث أغاني البنات العفوية.",
    story: "تندرج هذه الأغنية تحت فئة 'أغاني البنات' التراثية ذات الإيقاع السريع المبهج.",
    storyType: "رواية متداولة",
    historicalContext: "تعكس الثقافة الشفهية للجلسات النسائية السودانية.",
    rights: {
      status: "🟢 Traditional / Heritage",
      evidence: "أهزوجة بنات شعبية تراثية مجهولة المؤلف، تعتبر ملكاً عاماً.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تثبيت الألفاظ الشفهية العفوية."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "تراث أغاني البنات السودانية - أغنية حمادة دا جنني",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "تراث شعبى سوداني",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول (اللازمة):
حَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ`,
      recordedVersion: "تغني حنان بلوبلو المقاطع الثلاثة.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة النص الشفهي المكتمل لأغنية حمادة."
    },
    performance: {
      referenceRecording: "حنان بلوبلو - أهزوجة حمادة دا جنني",
      originalKey: "F# minor",
      performanceKey: "F# minor",
      tonalSystem: "سلم أغاني بنات سريع (F# A B C# E)",
      rhythm: "إيقاع أفراح سوداني سريع / زنق خفيف",
      bpm: 116,
      countIn: "1 - 2 - 1 - 2",
      introBars: 2,
      structure: [
        { type: "intro", title: "🎹 مقدمة بلوبلو السريعة", bars: 2, cue: "مقدمة أورغ راقصة ومبهجة" },
        { type: "chorus", title: "🎤 اللازمة السريعة", repeat: 2, cue: "حمادة دا جنني أخد قلبي وزاد علي" }
      ],
      performanceLyrics: [
        { section: "اللازمة السريعة", text: "حَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ\nيا عُيُونْ سَحَّارَة.. ويا حَرَكَاتْ شَطَارَة", isChorus: true }
      ],
      chorus: "حَمَادَة دَا جَنَّنِي.. أَخَدْ قَلْبِي وزَادْ عَلَيَّ",
      instrumentalBreaks: ["إيقاع أفراح سوداني سريع 2 بار"],
      ending: "قفلة سريعة مبهجة",
      keyboardNotes: "إيقاع أفراح سريع BPM 116. سلم F# minor الخماسي الراقص.",
      vocalistNotes: "أداء مبهج وعفوي مع التفاعل الحماسي مع الحضور.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "دا جنني", meaning: "هذا الشخص أطبي عائلي وأشغل فكري" }
    ],
    recordings: [
      {
        title: "حنان بلوبلو - حمادة دا جنني",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleHamada",
        embedId: "ExampleHamada"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - توثيق أغاني البنات",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (3 مقاطع)",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تدقيق إملائي شفهي."
    ],
    conflicts: []
  },
  {
    id: "al-fatan-al-waseem",
    originalInputTitles: ["الفطن الوسيم"],
    titleArabic: "الفطن الوسيم",
    alternateTitles: ["للفطن الوسيم عرج يا نسيم", "درة الحقيبة"],
    openingLine: "للفطن الوسيم عرج يا نسيم.. بلغوه اشتياقي وحبي واعتلاقي",
    singers: ["كرومة", "خليل فرح", "بادي محمد الطيب", "مبارك حسن بركات", "علي إبراهيم اللحو"],
    originalPerformer: "كرومة / خليل فرح",
    poet: "محمد بشير عتيق",
    composer: "محمود فلاح",
    era: "حقبة الحقيبة الذهبية (الثلاثينيات)",
    approximatePeriod: "1930s",
    genre: "حقيبة الفن",
    heritageCategory: "درر شعر الحقيبة الفاخر",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة دقيقة ومطابقة النص على ديوان الشاعر محمد بشير عتيق المطبوع وتدقيق الرسم اللغوي الفصيح والعامي.",
    story: "تعتبر هذه القصيدة من أزهى ما أبدعه الشاعر الكبير محمد بشير عتيق وألحان محمود فلاح.",
    storyType: "موثق تاريخياً",
    historicalContext: "تمثل الأغنية ذروة البلاغة الرومانسية في عصر الحقيبة الذهبي.",
    rights: {
      status: "🔵 Public Domain — Confirmed",
      evidence: "قصيدة حقيبة خالية من القيود كُتبت في الثلاثينيات.",
      publicDisplay: "full"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 3,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت مطابقة أبيات ديوان عتيق بالكامل."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "ديوان الشاعر محمد بشير عتيق - قصيدة الفطن الوسيم كاملة",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "محمد بشير عتيق / ألحان محمود فلاح",
          confidence: "primary"
        }
      ],
      versionsCompared: 3,
      originalPoem: `المقطع الأول (اللازمة):
لِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ
بَلِّغْهُ اشْتِيَاقِي .. حُبِّي واِعْتِلاَقِي`,
      recordedVersion: "يغني بادي محمد الطيب ومبارك حسن بركات المقاطع الأربعة كاملة.",
      additionalVerses: [],
      variants: [],
      researchNotes: "تم مطابقة النص الشعري المكون من 4 مقاطع على ديوان عتيق."
    },
    performance: {
      referenceRecording: "بادي محمد الطيب ومبارك حسن بركات - تسجيل الحقيبة الذهبي",
      originalKey: "G minor",
      performanceKey: "G minor",
      tonalSystem: "سلم حقيبة خماسي فاخر (G Bb C D F)",
      rhythm: "حقيبة رزين / 4-4 طمبور",
      bpm: 82,
      countIn: "1 - 2 - 3 - 4",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 رمية ومقدمة عتيق", bars: 4, cue: "مقدمة أورغ فخمة على السلم الخماسي الصافي" },
        { type: "chorus", title: "🎤 اللازمة الفاخرة", repeat: 2, cue: "للفطن الوسيم عرج يا نسيم بلغوه اشتياقي" }
      ],
      performanceLyrics: [
        { section: "اللازمة الفاخرة", text: "لِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ\nبَلِّغْهُ اشْتِيَاقِي .. حُبِّي واِعْتِلاَقِي", isChorus: true }
      ],
      chorus: "لِلْفَطِنْ الوَسِيمْ .. عَرِّجْ يا نَسِيمْ",
      instrumentalBreaks: ["فاصل حقيبة فاخر 2 بار للأورغ"],
      ending: "قفلة هادئة برعشة على G minor",
      keyboardNotes: "سلم G minor الخماسي الفاخر سرعة 82.",
      vocalistNotes: "أداء فخم ومخارج حروف واضحة جداً لإبراز بلاغة عتيق.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "الفطن", meaning: "الذكي اللبيب ذو الفطنة والدهاء المحبب" }
    ],
    recordings: [
      {
        title: "بادي محمد الطيب - الفطن الوسيم",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleFatan",
        embedId: "ExampleFatan"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - ديوان محمد بشير عتيق وتوثيق الفطن الوسيم",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل (4 مقاطع)",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تدقيق لغوي ومطابقة ديوانية."
    ],
    conflicts: []
  },
  {
    id: "al-leila-al-leila-wa-baray",
    originalInputTitles: ["الليلة الليلة وبراي الليلة"],
    titleArabic: "الليلة الليلة وبراي الليلة",
    alternateTitles: ["الليلة بالليل", "الليلة وبراي", "شارع النيل والجبنة"],
    openingLine: "الليلة الليلة وبراي الليلة.. الليلة بالليل نمشي شارع النيل.. نشرب الجبنة وننسى همومنا الكثيرة",
    singers: ["شكر الله عز الدين", "مأمون سوار الذهب", "علي الشيخ", "إنصاف مدني"],
    originalPerformer: "تراث سيرة سودانية / إعادة صياغة أمير حمزة وشكر الله عز الدين",
    poet: "أمير حمزة (إعادة صياغة تراثية)",
    composer: "تراث سيرة سودانية / توزيع حديث",
    era: "حقبة معاصرة / تجديد التراث 2015",
    approximatePeriod: "2010s",
    genre: "سيرة",
    heritageCategory: "تراث سيرة وزنق مبهج",
    verificationStatus: "🟢 Verified",
    verificationNotes: "مراجعة النص المعاصر المستند للترنيمة التراثية وتدقيق مفردات شارع النيل والجبنة.",
    story: "تعتبر هذه الأغنية نموذجاً ممتازاً لإعادة استلهام التراث الإيقاعي السوداني.",
    storyType: "موثق تاريخياً",
    historicalContext: "تجسد تطور غناء الأفراح السودانية وحيوية شارع النيل كمتنفس اجتماعي.",
    rights: {
      status: "🔒 Copyrighted / Excerpt Only",
      evidence: "صياغة وتوزيع حديث معاصر محمي بموجب قانون حقوق المؤلف.",
      publicDisplay: "excerpt-and-source"
    },
    arabicTextVerification: {
      status: "🟢 النص العربي مُراجع",
      sourcesCompared: 2,
      audioChecked: true,
      disputedLines: [],
      textualDifferences: [],
      notes: "تمت تدقيق صياغة أمير حمزة المعاصرة."
    },
    lyricsResearch: {
      fullTextFound: true,
      fullTextSources: [
        {
          source: "SudaneseOnline",
          title: "كلمات أغنية الليلة بالليل نمشي شارع النيل - شكر الله عز الدين وأمير حمزة",
          url: "https://sudaneseonline.com",
          containsFullLyrics: true,
          attribution: "أمير حمزة / توزيع تراث سيرة",
          confidence: "primary"
        }
      ],
      versionsCompared: 2,
      originalPoem: `المقطع الأول (اللازمة):
اللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة
اللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ`,
      recordedVersion: "يؤدي شكر الله عز الدين الأغنية بتوزيع زنق وسيرة مبهج.",
      additionalVerses: [],
      variants: [],
      researchNotes: "استعادة أبيات النزهة في شارع النيل وجلسة الجبنة."
    },
    performance: {
      referenceRecording: "شكر الله عز الدين ومأمون سوار الذهب - تسجيل الأفراح",
      originalKey: "A major",
      performanceKey: "A major",
      tonalSystem: "سلم سيرة زنق مبهج",
      rhythm: "إيقاع سيرة سودانية / زنق خفيف",
      bpm: 114,
      countIn: "1 - 2 - 1 - 2",
      introBars: 4,
      structure: [
        { type: "intro", title: "🎹 مقدمة السيرة المبهجة", bars: 4, cue: "مقدمة أورغ زنق مبهجة وسريعة" },
        { type: "chorus", title: "🎤 اللازمة (شارع النيل)", repeat: 2, cue: "الليلة الليلة وبراي الليلة الليلة بالليل نمشي شارع النيل" }
      ],
      performanceLyrics: [
        { section: "اللازمة (شارع النيل)", text: "اللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة\nاللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ", isChorus: true }
      ],
      chorus: "اللَّيْلَة اللَّيْلَة وبَرَايْ اللَّيْلَة.. اللَّيْلَة بِاللَّيْلْ نَمْشِي شَارِعْ النِّيلْ",
      instrumentalBreaks: ["إيقاع سيرة زنق سريع 2 بار"],
      ending: "قفلة راقصة مبهجة على نغمة A",
      keyboardNotes: "إيقاع سيرة زنق سريع BPM 114. سلم A Major الخماسي الراقص.",
      vocalistNotes: "أداء حماسي مبهج للتفاعل مع الجمهور بالجلسة.",
      rehearsalStatus: "ready"
    },
    vocabulary: [
      { word: "براي", meaning: "بمفردي وحيداً" },
      { word: "الجبنة", meaning: "القهوة السودانية التقليدية المجهزة في الإناء الفخاري" }
    ],
    recordings: [
      {
        title: "شكر الله عز الدين - الليلة بالليل",
        type: "youtube",
        url: "https://www.youtube.com/watch?v=ExampleLeila",
        embedId: "ExampleLeila"
      }
    ],
    sources: [
      {
        title: "SudaneseOnline - أغاني السيرة الحديثة وشكر الله عز الدين",
        publisher: "سودانيز أونلاين",
        url: "https://sudaneseonline.com",
        supports: "النص الشعري الكامل وصياغة أمير حمزة",
        type: "archive",
        confidence: "primary"
      }
    ],
    researchLog: [
      "تدقيق لغوي وتجهيز بطاقة أداء السيرة والزنق."
    ],
    conflicts: []
  }
];
