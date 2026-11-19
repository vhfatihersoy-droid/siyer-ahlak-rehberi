import {
  Heart, Compass, ShieldCheck, Sparkles, Moon, Award, Users, Leaf, BookOpen
} from 'lucide-react';

// ==========================================
// 1. DİNAMİK GÜNÜN SÜNNETİ HAVUZU
// ==========================================
export const dailySunnahList = [
  {
    id: "gun-01",
    dayLabel: "1. Sünnet İlkesi",
    title: "Tebessüm Etmek ve Gönül Almak",
    arabic: "التَّبَسُّمُ فِي وَجْهِ أَخِيكَ صَدَقَةٌ",
    translation: "Din kardeşine tebessüm etmen senin için bir sadakadır.",
    description: "Hz. Muhammed (s.a.v.) karşılaştığı herkese güler yüz gösterir, çocukların başını okşar ve Ensar ile Muhacir arasında sevgi bağlarını güçlendiren nezaketli bir üslupla gönülleri fethederdi.",
    vurudStory: "Sahabeden Ebû Zer el-Gıfârî (r.a.), maddi imkânı olmayan müminlerin nasıl sadaka sevabı kazanacağını sorduğunda Hz. Peygamber; güler yüz göstermeyi, iyiliği tavsiye etmeyi ve yoldaki bir engeli kaldırmayı sadaka olarak saymıştır.",
    application: "Bugün çevrenizdeki insanlara, iş arkadaşlarınıza ve aile bireylerinize tebessümle yaklaşın; kalpleri kırık birinin halini hatırını sorun.",
    source: "Hadislerle İslam, Cilt 4, s. 112-115",
    publisher: "Diyanet İşleri Başkanlığı Yayınları"
  },
  {
    id: "gun-02",
    dayLabel: "2. Sünnet İlkesi",
    title: "Selamı Yaymak ve Muhabbet İnşa Etmek",
    arabic: "أَفْشُوا السَّلَامَ بَيْنَكُمْ تَحَابُّوا",
    translation: "Aranızda selamı yayın ki birbirinizi sevesiniz.",
    description: "Hz. Peygamber (s.a.v.) tanıdığı ve tanımadığı herkese selam verir, selamın toplumda güven ve barış iklimi oluşturduğunu vurgulardı. Çocuklara dahi ilk önce kendisi selam vererek onlara değer kazandırırdı.",
    vurudStory: "Medine'ye hicretin ilk günlerinde Abdullah b. Selâm (r.a.) Peygamberimizi dinlemeye gittiğinde ondan duyduğu ilk söz 'Ey insanlar! Selamı yayın, yemek yedirin ve akrabayı gözetin' tavsiyesi olmuştur.",
    application: "Bugün apartmanınızda, iş yerinizde veya sokakta karşılaştığınız kişilere içtenlikle 'Selâmün aleyküm' veya 'Hayırlı günler' diyerek ilk selamı siz verin.",
    source: "Hadislerle İslam, Cilt 4, s. 139",
    publisher: "Diyanet İşleri Başkanlığı Yayınları"
  },
  {
    id: "gun-03",
    dayLabel: "3. Sünnet İlkesi",
    title: "Kolaylaştırmak ve Müjdelemek",
    arabic: "يَسِّرُوا وَلَا تُعَسِّرُوا وَبَشِّرُوا وَلَا تُنَفِّرُوا",
    translation: "Kolaylaştırınız, zorlaştırmayınız; müjdeleyiniz, nefret ettirmeyiniz.",
    description: "Peygamber Efendimiz iki iş arasında muhayyer bırakıldığında günah olmadığı sürece daima en kolay olanını seçer, insanlara umut aşılayan yapıcı bir dil kullanırdı.",
    vurudStory: "Hz. Peygamber, genç sahabeler Muâz b. Cebel ve Ebû Mûsâ el-Eş'arî'yi Yemen'e muallim ve idareci olarak uğurlarken halka nasıl muamele etmeleri gerektiğini bu veciz hadisle tâlim buyurmuştur.",
    application: "Bugün evde veya iş yerinde bir sorunu çözerken karşı tarafın yükünü hafifletecek kolaylaştırıcı ve yapıcı bir yaklaşım sergileyin.",
    source: "Hadislerle İslam, Cilt 1, s. 412",
    publisher: "Diyanet İşleri Başkanlığı Yayınları"
  },
  {
    id: "gun-04",
    dayLabel: "4. Sünnet İlkesi",
    title: "Emaneti Korumak ve Sözünde Durmak",
    arabic: "لَا إِيمَانَ لِمَنْ لَا أَمَانَةَ لَهُ",
    translation: "Güvenilirliği olmayanın (olgun) imanı da yoktur.",
    description: "Peygamberlikten önce bile Mekke'de 'El-Emîn' olarak tanınan Hz. Muhammed (s.a.v.), Hicret gecesi kendisini öldürmek isteyenlerin emanetlerini bile sahiplerine eksiksiz teslim ettirmek için Hz. Ali'yi görevlendirmişti.",
    vurudStory: "Enes b. Mâlik (r.a.), Hz. Peygamber'in hemen her hutbesinde ashabına emanet bilincini ve ahde vefayı hatırlatarak bu hadisi tekrarladığını nakletmiştir.",
    application: "Bugün verdiğiniz tüm sözleri ve randevu saatlerini titizlikle koruyun; size emanet edilen bir sırrı veya eşyayı özenle muhafaza edin.",
    source: "TDV İslâm Ansiklopedisi, 'Emânet' Maddesi, Cilt 11",
    publisher: "Türkiye Diyanet Vakfı Yayınları"
  },
  {
    id: "gun-05",
    dayLabel: "5. Sünnet İlkesi",
    title: "Sıla-i Rahim ve Akrabayı Gözetmek",
    arabic: "مَنْ أَحَبَّ أَنْ يُبْسَطَ لَهُ فِي رِزْقِهِ فَلْيَصِلْ رَحِمَهُ",
    translation: "Kim rızkının genişletilmesini ve ömrünün bereketlenmesini isterse akrabasını gözetsin.",
    description: "Hz. Peygamber Sıla-i Rahim ilkesini toplumsal dayanışmanın temeli saymış; Hz. Hatice validemiz de ilk vahiy heyecanında onu 'Sen akrabayı gözetirsin' sözleriyle teskin etmiştir.",
    vurudStory: "Bir sahabe gelerek 'Ey Allah'ın Resûlü! Akrabalarımı ziyaret ediyorum ama onlar benimle bağı koparıyorlar' dediğinde Efendimiz; gerçek sıla-i rahmin, ilgiyi kesen akrabaya dahi iyilikle gitmek olduğunu beyan etmiştir.",
    application: "Bugün uzun süredir sesini duymadığınız bir büyüğünüzü veya akrabanızı telefonla arayarak halini hatırını sorun.",
    source: "Hadislerle İslam, Cilt 4, s. 165",
    publisher: "Diyanet İşleri Başkanlığı Yayınları"
  },
  {
    id: "gun-06",
    dayLabel: "6. Sünnet İlkesi",
    title: "Hayır Konuşmak veya Sükût Etmek",
    arabic: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    translation: "Allah'a ve ahiret gününe iman eden kimse ya hayır söylesin ya da sussun.",
    description: "Peygamber Efendimiz boş ve kırıcı sözlerden uzak durur, konuştuğunda tane tane ve hikmetle konuşur, sükûtu ise bir tefekkür fırsatı olarak değerlendirirdi.",
    vurudStory: "Muâz b. Cebel (r.a.) 'Ey Allah'ın Resûlü! Konuştuğumuz sözlerden dolayı da hesaba çekilecek miyiz?' diye sorduğunda Efendimiz dilin korunmasının kurtuluşun anahtarı olduğunu vurgulamıştır.",
    application: "Bugün bir konuşmada gıybet veya kırıcı bir eleştiri başladığında konuyu nezaketle hayırlı bir mecraya çevirin ya da sükûtu tercih edin.",
    source: "Hadislerle İslam, Cilt 3, s. 318",
    publisher: "Diyanet İşleri Başkanlığı Yayınları"
  },
  {
    id: "gun-07",
    dayLabel: "7. Sünnet İlkesi",
    title: "İsar ve Kardeşini Kendine Tercih Etmek",
    arabic: "وَيُؤْثِرُونَ عَلَى أَنْفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ",
    translation: "Kendileri ihtiyaç içinde olsalar bile kardeşlerini öz canlarına tercih ederler.",
    description: "Medine'de Ensar ve Muhacir kardeşliği kurulurken sahabeler Îsâr ahlakıyla hareket etmiş, ellerindeki imkanları büyük bir gönül zenginliğiyle paylaşmışlardır.",
    vurudStory: "Mescid-i Nebevî'ye aç bir misafir geldiğinde Ensar'dan Ebû Talha (r.a.) onu evine götürmüş; evde yalnızca çocuklara yetecek kadar yemek olunca çocukları uyutup misafir rahatça doysun diye kandili düzeltir gibi yaparak ışığı kısmış ve Haşr Suresi 9. ayet bu olay üzerine nazil olmuştur.",
    application: "Bugün sevdiğiniz bir ikramı veya kolaylığı öncelikle yanınızdaki aile ferdine, komşunuza veya iş arkadaşınıza sunun.",
    source: "Kur'an Yolu Tefsiri, Haşr Suresi 9. Ayet",
    publisher: "Diyanet İşleri Başkanlığı Yayınları"
  }
];

export const dailySunnahData = dailySunnahList[0];

// ==========================================
// 2. DUYGU DURUMU REHBERİ
// ==========================================
export const moodsData = [
  {
    id: "ofkeli",
    name: "Öfkeli",
    icon: ShieldCheck,
    color: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800",
    title: "Öfke Anında Sakinleşmek ve Sabır",
    arabic: "لَيْسَ الشَّدِيدُ بِالصُّرَعَةِ إِنَّمَا الشَّدِيدُ الَّذِي يَمْلِكُ نَفْسَهُ عِنْدَ الْغَضَبِ",
    content: "Hz. Peygamber (s.a.v.) öfkelendiği zaman bulunduğu konumu değiştirir (ayaktaysa oturur, oturuyorsa uzanır) ve abdest almayı tavsiye ederdi. 'Gerçek pehlivan öfkelendiğinde kendini tutabilendir' buyurmuştur.",
    advice: "Bir tartışma anında derin bir nefes alın, sessizliği tercih edin ve ortamdan kısa bir süreliğine uzaklaşın.",
    source: "Hadislerle İslam, Cilt 3, s. 245"
  },
  {
    id: "huzunlu",
    name: "Hüzünlü",
    icon: Heart,
    color: "bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
    title: "Üzüntü ve Zorluklar Karşısında Metanet",
    arabic: "لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا",
    content: "Peygamberimiz hüzün ve keder anlarında Yüce Allah'a sığınır, duayı ve sabrı elden bırakmazdı. Hz. Ebû Bekir ile Sevr Mağarası'ndayken dahi 'Üzülme, Allah bizimle beraberdir' buyurarak teslimiyet örneği göstermiştir.",
    advice: "Yalnız olmadığınıza inanın; her zorlukla beraber şüphesiz bir kolaylık vardır.",
    source: "Kur'an Yolu Tefsiri, Tevbe Suresi 40. Ayet"
  },
  {
    id: "kararsiz",
    name: "Kararsız",
    icon: Compass,
    color: "bg-sky-50 text-sky-800 border-sky-200 dark:bg-sky-950/50 dark:text-sky-300 dark:border-sky-800",
    title: "İstişare Etmek ve Karar Süreçleri",
    arabic: "وَشَاوِرْهُمْ فِي الْأَمْرِ فَإِذَا عَزَمْتَ فَتَوَكَّلْ عَلَى اللَّهِ",
    content: "Peygamberimiz önemli konularda ashabıyla İstişare eder, istişare edenin pişman olmayacağını belirtirdi. Karar aşamasında ise istihare ve Tevekkül ile manevi huzur arardı.",
    advice: "Güvendiğiniz ehil kimselerin fikirlerini alın, artıları ve eksileri değerlendirdikten sonra tevekkül edin.",
    source: "TDV İslâm Ansiklopedisi, 'İstişare' Maddesi, Cilt 23"
  },
  {
    id: "sukur",
    name: "Şükür Dolu",
    icon: Sparkles,
    color: "bg-teal-50 text-teal-800 border-teal-200 dark:bg-teal-950/50 dark:text-teal-300 dark:border-teal-800",
    title: "Nimetlerin Kıymetini Bilmek ve Hamt",
    arabic: "أَفَلَا أَكُونُ عَبْدًا شَكُورًا",
    content: "Hz. Peygamber gece ayakları şişinceye kadar ibadet eder ve Hz. Âişe validemize 'Şükreden bir kul olmayayım mı?' buyururdu. Sahip olunan her nefesin ve rızkın şükrü, kul olmanın temelidir.",
    advice: "Bugün sizi mutlu eden üç küçük detayı not edin ve derin bir 'Elhamdülillah' deyin.",
    source: "Hadislerle İslam, Cilt 7, s. 45"
  },
  {
    id: "yorgun",
    name: "Yorgun",
    icon: Moon,
    color: "bg-indigo-50 text-indigo-800 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-800",
    title: "Bedenin Hakkı ve Dinlenme",
    arabic: "إِنَّ لِجَسَدِكَ عَلَيْكَ حَقًّا",
    content: "Peygamberimiz 'Şüphesiz bedeninin senin üzerinde hakkı vardır' buyurarak aşırı yorgunluk ve tükenmişliğe karşı dengeli bir yaşamı, erken yatıp dinlenmeyi teşvik etmiştir.",
    advice: "Kendinize zaman tanıyın, günlük koşturmacaya kısa bir mola verip zihninizi dinlendirin.",
    source: "Hadislerle İslam, Cilt 5, s. 180"
  },
  {
    id: "kaygili",
    name: "Kaygılı",
    icon: BookOpen,
    color: "bg-purple-50 text-purple-800 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800",
    title: "Gelecek Kaygısına Karşı Tevekkül ve Gayret",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    content: "Hz. Peygamber 'Önce deveni bağla, sonra Allah'a Tevekkül et' buyurarak hem üzerimize düşen tedbiri almayı hem de sonucu Allah'a bırakarak kalbi ferahlatmayı öğretmiştir.",
    advice: "Kontrol edebildiğiniz adımlara odaklanın, kontrolünüz dışındaki ihtimalleri dua ile Yüce Yaratıcı'ya ısmarlayın.",
    source: "Kur'an Yolu Tefsiri, Ra'd Suresi 28. Ayet"
  }
];

// ==========================================
// 3. TEMATİK AHLAK KISSALARI
// ==========================================
export const thematicData = [
  {
    id: "ticaret",
    category: "Ticaret Ahlakı",
    icon: Award,
    title: "Dürüst Tacir ve Güvenilirlik",
    arabic: "مَنْ غَشَّنَا فَلَيْسَ مِنَّا",
    text: "Hz. Muhammed (s.a.v.) ticaret hayatında dürüstlüğü ve ahde vefayı esas almış, pazarda ıslak buğdayı alta koyan satıcıyı uyararak 'Bizi aldatan bizden değildir' ilkesini benimsetmiştir.",
    details: "Ticarette kusurlu malı gizlememek, ölçüde ve tartıda adil olmak İslam ahlakının temel taşlarındandır.",
    source: "Hadislerle İslam, Cilt 6, s. 88"
  },
  {
    id: "aile",
    category: "Aile Hayatı",
    icon: Users,
    title: "Eşlere Karşı Nezaket ve Sevgi",
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
    text: "'Hayırlınız, ailesine karşı en hayırlı olanınızdır' buyuran Peygamberimiz, Hz. Hatice ve Hz. Âişe başta olmak üzere eşlerine ev işlerinde yardım eder, daima tatlı dille muamele ederdi.",
    details: "Aile içi iletişimde karşılıklı anlayış, tahammül ve sevgi huzurlu yuvaların temelidir.",
    source: "Kur'an Yolu Tefsiri, Nisa Suresi 19. Ayet"
  },
  {
    id: "cocuk",
    category: "Çocuklarla İletişim",
    icon: Sparkles,
    title: "Çocuklara Değer Vermek ve Şefkat",
    arabic: "مَنْ لَا يَرْحَمْ لَا يُرْحَمْ",
    text: "Peygamberimiz çocukların seviyesine iner, onlarla şakalaşır, yolda karşılaştığında onlara ilk önce kendisi selam verir ve büyük bir birey gibi saygı duyardı.",
    details: "Çocukların duygusal gelişimleri için dinlenilmek ve değer görülmek en temel ihtiyaçtır.",
    source: "Hadislerle İslam, Cilt 4, s. 310"
  },
  {
    id: "adalet",
    category: "Adalet ve Merhamet",
    icon: ShieldCheck,
    title: "Herkes İçin Eşit Adalet",
    arabic: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
    text: "Gençliğinde Hilfü'l-Fudûl cemiyetine katılan Hz. Peygamber, toplumsal hayatta adaletten asla taviz vermez, Hz. Ömer ve Hz. Ali gibi sahabelere de hakkı üstün tutmayı öğütlerdi.",
    details: "Merhamet ile adalet dengesi, erdemli bir toplumun inşasında hayati rol oynar.",
    source: "TDV İslâm Ansiklopedisi, 'Adalet' Maddesi"
  },
  {
    id: "cevre",
    category: "Çevre Bilinci",
    icon: Leaf,
    title: "Doğaya ve Canlılara Şefkat",
    arabic: "إِنْ قَامَتِ السَّاعَةُ وَبِيَدِ أَحَدِكُمْ فَسِيلَةٌ فَلْيَغْرِسْهَا",
    text: "'Kıyamet kopuyor olsa bile elinizdeki fidanı dikin' buyuran Hz. Muhammed, yeşilliğin korunmasına, suyun israf edilmemesine ve hayvanlara merhamet edilmesine büyük önem vermiştir.",
    details: "Çevreyi korumak ve doğal kaynakları idareli kullanmak dini ve ahlaki bir sorumluluktur.",
    source: "Hadislerle İslam, Cilt 7, s. 215"
  },
  {
    id: "ilim",
    category: "İlim ve Hikmet",
    icon: BookOpen,
    title: "Suffe Mektebi ve İlim Sevdası",
    arabic: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    text: "Medine'ye hicret edildiğinde ilk iş olarak Mescid-i Nebevî'nin yanına Suffe mektebini kuran Hz. Peygamber, ilim öğrenmeyi ibadet saymış ve Mus'ab b. Umeyr'i Medine'ye ilk muallim olarak göndermiştir.",
    details: "Faydalı bilgi üretmek, okumak ve öğrendiğini toplumun hayrına sunmak nebevî mirasın özüdür.",
    source: "TDV İslâm Ansiklopedisi, 'Suffe' Maddesi, Cilt 37"
  }
];

// ==========================================
// 4. ÇAĞDAŞ SORUNLARA NEBEVÎ ÇÖZÜMLER
// ==========================================
export const contemporaryIssuesData = [
  {
    id: "cagdas-1",
    tag: "Dijital Ahlak & Mahremiyet",
    title: "Sosyal Medyada Doğru Bilgi ve Tecessüs",
    dilemma: "Dijital mecralarda doğruluğu teyit edilmemiş haberlerin hızla yayılması, gıybet ve insanların özel hayatlarının araştırılması (tecessüs).",
    propheticApproach: "Kur'an-ı Kerim bilginin kaynağını araştırmayı (Hucurât, 6) ve insanların kusurlarını araştırmamayı (Hucurât, 12) emreder. Hz. Peygamber 'Kişiye her duyduğunu söylemesi yalan olarak yeter' buyurmuştur.",
    actionStep: "Paylaşmadan önce bilginin kaynağını doğrulayın; kimsenin mahremiyetini ihlal eden içeriklere aracılık etmeyin.",
    source: "Kur'an Yolu Tefsiri, Hucurât Suresi 6-12. Ayetler"
  },
  {
    id: "cagdas-2",
    tag: "Tükenmişlik & Zaman",
    title: "Modern Hız Kültürüne Karşı Denge",
    dilemma: "Sürekli meşguliyet, dinlenememe, zihinsel yorgunluk ve aileye/kendine vakit ayıramama sorunu.",
    propheticApproach: "Hz. Peygamber ibadette bile aşırılığa kaçan sahabeleri uyararak 'Gözünün, eşinin ve misafirinin senin üzerinde hakkı vardır' buyurmuş, itidalli (dengeli) bir hayat çizmiştir.",
    actionStep: "Gün içinde ekranlardan uzak, yalnızca ailenize ve kendi iç muhasebenize ayırdığınız 30 dakikalık sessiz bir zaman dilimi belirleyin.",
    source: "Hadislerle İslam, Cilt 2, s. 342"
  },
  {
    id: "cagdas-3",
    tag: "Komşuluk & Yalnızlaşma",
    title: "Apartman Hayatında Komşuluk Hukuku",
    dilemma: "Aynı binada yaşayıp birbirini tanımayan, selamlaşmayan ve yalnızlaşan bireyler.",
    propheticApproach: "Peygamberimiz 'Cebrâil bana komşuya iyilik etmeyi o kadar çok tavsiye etti ki, neredeyse komşuyu komşuya mirasçı kılacak sandım' buyurmuştur.",
    actionStep: "Bu hafta en az bir komşunuza güler yüzle selam verip halini hatırını sorun veya küçük bir ikramda bulunun.",
    source: "Hadislerle İslam, Cilt 4, s. 198"
  },
  {
    id: "cagdas-4",
    tag: "Tüketim & İsraf",
    title: "Gösteriş Tüketimine Karşı Kanaat",
    dilemma: "İhtiyaç dışı alışveriş alışkanlıkları, gıda israfı ve kaynakların bilinçsiz tüketimi.",
    propheticApproach: "Hz. Peygamber, akan bir nehrin kenarında abdest alırken dahi suyu ölçülü kullanmayı öğütlemiş ve kanaati tükenmeyen bir hazine olarak nitelendirmiştir.",
    actionStep: "Alışveriş yapmadan önce 'Bu gerçek bir ihtiyaç mı?' sorusunu sorun ve sofradaki israfı sıfıra indirin.",
    source: "TDV İslâm Ansiklopedisi, 'İsraf' Maddesi, Cilt 23"
  },
  {
    id: "cagdas-5",
    tag: "İş Ahlakı & Liyakat",
    title: "Mesleki Sorumluluk, İtkan ve Emanet",
    dilemma: "İş hayatında özensizlik, görevi savsaklama ve emaneti ehline vermeme sorunları.",
    propheticApproach: "Hz. Peygamber 'Allah, birinizin yaptığı işi sağlam ve güzel yapmasından (itkan) hoşnut olur' buyurmuş ve işlerin ehil kimselere verilmesini emretmiştir.",
    actionStep: "Üstlendiğiniz her işi kimse denetlemese bile en yüksek özenle ve zamanında tamamlayın.",
    source: "Hadislerle İslam, Cilt 6, s. 42"
  },
  {
    id: "cagdas-6",
    tag: "Kutuplaşma & Üslup",
    title: "Tartışma Kültüründe Hilm ve Nezaket",
    dilemma: "Farklı görüşlere tahammülsüzlük, sert üslup ve sosyal ilişkilerde kırıcılık.",
    propheticApproach: "Peygamber Efendimiz en kaba muamelelere bile yumuşaklıkla (hilm) karşılık vermiş, 'Mümin; kınayan, lanet eden, kaba ve çirkin konuşan kimse değildir' buyurmuştur.",
    actionStep: "Fikir ayrılıklarında kişiliği hedef almadan, ses tonunuzu yükseltmeden ve nezaketi koruyarak konuşun.",
    source: "Kur'an Yolu Tefsiri, Âl-i İmrân Suresi 159. Ayet"
  }
];

// ==========================================
// 5. 24 SAATLİK NEBEVÎ YAŞAM AKIŞI
// ==========================================
export const dailyRoutineData = [
  {
    time: "05:00 - Sabah / Uyanış",
    title: "Güne Şükürle Başlamak",
    desc: "Uyanınca elleri yüzde gezdirip uykunun sersemliğini gidermek ve 'Bizi öldükten sonra dirilten Allah'a hamd olsun' duasını etmek.",
    source: "Hadislerle İslam, Cilt 1, s. 95"
  },
  {
    time: "09:00 - Kuşluk / Çalışma Vakti",
    title: "Gayret ve Helal Kazanç",
    desc: "Güne erken ve bereketli başlayıp işe koyulmak, rızık temin ederken dürüstlükten ve iş ahlakından ayrılmamak.",
    source: "TDV İslâm Ansiklopedisi, 'Rızık' Maddesi"
  },
  {
    time: "13:00 - Öğle / İnsanlarla İlişkiler",
    title: "Güler Yüz, Kaylûle ve Selamlaşma",
    desc: "Çevredeki insanlara selam vermek, kırgınlıkları gidermek, Sıla-i Rahim bilinciyle yakınları arayıp sormak ve imkân varsa kısa öğle dinlenmesi (kaylûle) yapmak.",
    source: "Hadislerle İslam, Cilt 4, s. 140"
  },
  {
    time: "18:00 - Akşam / Aile Zamanı",
    title: "Ailenin Hakları ve Dinlenme",
    desc: "Günün yorgunluğunu aile bireyleriyle paylaşmak, onlarla sohbet etmek ve ev ortamında huzur tesis etmek.",
    source: "Kur'an Yolu Tefsiri, Rûm Suresi 21. Ayet"
  },
  {
    time: "22:00 - Yatsı / Geceye Hazırlık",
    title: "Muhasebe ve Huzurlu Uyku",
    desc: "Günün muhasebesini yapmak, abdestli olarak sağ tarafa yatmak ve dualarla uykuya geçmek.",
    source: "Hadislerle İslam, Cilt 8, s. 52"
  }
];

// ==========================================
// 6. SİYER KRONOLOJİSİ (DÖNEM FİLTRELİ & DERS KATMANLI)
// ==========================================
export const chronologyData = [
  {
    year: "M. 571",
    period: "Doğum ve Gençlik",
    title: "Dünyaya Gelişi (Mevlid-i Nebî)",
    desc: "Rebiülevvel ayının 12. gecesi Mekke'de doğdu. Babası Abdullah'ı doğumundan önce, annesi Âmine'yi 6 yaşında kaybetti.",
    modernLesson: "Yetim ve kimsesiz büyümek bir eksiklik değil; ilahi rahmet ve şefkatle bütün insanlığı kucaklayacak bir kalp inceliğinin başlangıcıdır.",
    source: "TDV İslâm Ansiklopedisi, 'Muhammed' Maddesi"
  },
  {
    year: "M. 591",
    period: "Doğum ve Gençlik",
    title: "Hilfü'l-Fudûl (Erdemliler İttifakı)",
    desc: "Mekke'de haksızlığa uğrayanların hakkını savunmak için kurulan Hilfü'l-Fudûl cemiyetine genç yaşta aktif olarak katıldı.",
    modernLesson: "Zulme karşı durmak ve mazlumun hakkını savunmak için yapılan her meşru sivil dayanışma, nebevî ahlakın ayrılmaz bir parçasıdır.",
    source: "TDV İslâm Ansiklopedisi, Cilt 18"
  },
  {
    year: "M. 595",
    period: "Doğum ve Gençlik",
    title: "Hz. Hatice ile Evliliği ve El-Emîn Sıfatı",
    desc: "Güvenilir kişiliği (El-Emîn) sayesinde Hz. Hatice ile ticaret ortaklığı yaptı ve vefa temelli örnek bir aile yuvası kurdu.",
    modernLesson: "Bir müminin en büyük sermayesi işindeki dürüstlüğü ve ailesine karşı gösterdiği sarsılmaz vefasıdır.",
    source: "Hadislerle İslam, Cilt 2, s. 70"
  },
  {
    year: "M. 610",
    period: "Mekke Dönemi (Sabır & Tebliğ)",
    title: "İlk Vahiy ve Peygamberlik ('Oku!')",
    desc: "Nûr Dağı'ndaki Hira Mağarası'nda tefekkür halindeyken ilk vahiy (Alak Suresi ilk 5 ayeti) indirildi.",
    modernLesson: "Hakikat yolculuğu; kalabalıkların gürültüsünden sıyrılıp okumak, tefekkür etmek ve Yaratan'ın adıyla hayatı anlamlandırmakla başlar.",
    source: "Kur'an Yolu Tefsiri, Alak Suresi"
  },
  {
    year: "M. 615",
    period: "Mekke Dönemi (Sabır & Tebliğ)",
    title: "Habeşistan Hicreti ve Adalet Sığınağı",
    desc: "Mekkeli Müslümanların bir kısmı, Hz. Ca'fer b. Ebû Tâlib öncülüğünde adil hükümdar Necaşi'nin ülkesi Habeşistan'a hicret etti.",
    modernLesson: "Adalet, kimliği ne olursa olsun insan onurunu koruyan en güvenli limandır.",
    source: "TDV İslâm Ansiklopedisi, 'Habeşistan' Maddesi"
  },
  {
    year: "M. 620",
    period: "Mekke Dönemi (Sabır & Tebliğ)",
    title: "Hüzün Yılı ve Tâif'te Merhamet Duası",
    desc: "Hz. Hatice ve Ebû Tâlib'in vefatının ardından Tâif'te taşlı saldırıya uğramasına rağmen beddua etmeyip hidayet diledi.",
    modernLesson: "En ağır imtihanlarda bile öfkeye yenilmeyip merhamet dilini koruyabilmek, peygamber ahlakının zirvesidir.",
    source: "Hadislerle İslam, Cilt 1, s. 214"
  },
  {
    year: "M. 622",
    period: "Medine Dönemi (İnşa & Barış)",
    title: "Medine'ye Hicret ve Kardeşlik Toplumu",
    desc: "Mekke'den Medine'ye kutlu göç gerçekleştirildi; Ensar ve Muhacir kardeşliği, Suffe Mektebi ve Medine Sözleşmesi kuruldu.",
    modernLesson: "Hicret bir kaçış değil; ilim, kardeşlik (îsâr) ve hukuk temelinde erdemli bir medeniyet inşa etme iradesidir.",
    source: "TDV İslâm Ansiklopedisi, 'Hicret' Maddesi"
  },
  {
    year: "M. 628",
    period: "Medine Dönemi (İnşa & Barış)",
    title: "Hudeybiye Barış Antlaşması",
    desc: "Sabırlı diplomasi ve barış diliyle İslam davetinin gönüllere ulaşmasını hızlandıran Hudeybiye Antlaşması imzalandı.",
    modernLesson: "Gerçek zafer; öfkeyle çatışmakta değil, uzun vadeli toplumsal barış ve diyalog zeminini sabırla kurabilmektedir.",
    source: "TDV İslâm Ansiklopedisi, 'Hudeybiye' Maddesi"
  },
  {
    year: "M. 632",
    period: "Medine Dönemi (İnşa & Barış)",
    title: "Veda Haccı ve Âhirete İrtihali",
    desc: "Veda Hutbesi ile evrensel insan hakları, emanet, kadın hakları ve eşitlik ilkelerini ilan edip Medine'de vefat etti.",
    modernLesson: "Üstünlük soy, ırk veya servette değil; yalnızca takva, emanet bilinci ve güzel ahlaktadır.",
    source: "Hadislerle İslam, Cilt 8, s. 300"
  }
];

// ==========================================
// 7. İNTERAKTİF SİYER HARİTASI VERİLERİ
// ==========================================
export const siyerLocationsData = [
  {
    id: "mekke",
    name: "Mekke-i Mükerreme",
    period: "Mekke Dönemi",
    year: "571 - 622",
    x: 42,
    y: 74,
    summary: "Hz. Peygamber'in doğduğu, gençliğinde 'El-Emîn' sıfatıyla tanındığı ve İslam davetinin ilk 13 yılının geçtiği mübarek şehir.",
    moralLesson: "Zorluklar ve baskılar karşısında sabır, doğruluktan ödün vermemek ve toplumsal adalet için Hilfü'l-Fudûl gibi iyilik hareketlerine katılmak.",
    source: "TDV İslâm Ansiklopedisi, 'Mekke' Maddesi, Cilt 28"
  },
  {
    id: "hira",
    name: "Hira Mağarası (Nûr Dağı)",
    period: "Mekke Dönemi",
    year: "M. 610",
    x: 46,
    y: 69,
    summary: "Mekke'nin kuzeydoğusunda yer alan, Hz. Peygamber'in tefekküre çekildiği ve Cebrâil (a.s.) aracılığıyla ilk vahyi ('Oku!') aldığı mekân.",
    moralLesson: "İlim, okuma ve derin tefekkürle hakikati aramak; zihni gürültüden arındırarak manevi yenilenmeye vakit ayırmak.",
    source: "Kur'an Yolu Tefsiri, Alak Suresi 1-5. Ayetler"
  },
  {
    id: "taif",
    name: "Tâif",
    period: "Mekke Dönemi",
    year: "M. 620",
    x: 56,
    y: 78,
    summary: "Hüzün Yılı'nda İslam'ı tebliğ etmek için gittiği, ancak taşlı saldırıya uğradığı halde halkına beddua etmeyip hidayetleri için dua ettiği şehir.",
    moralLesson: "En ağır incinmelerde bile intikam yerine affediciliği ve merhameti tercih edebilmek.",
    source: "Hadislerle İslam, Cilt 1, s. 214"
  },
  {
    id: "sevr",
    name: "Sevr Mağarası",
    period: "Hicret Rotası",
    year: "M. 622",
    x: 39,
    y: 79,
    summary: "Mekke'nin güneyinde yer alan, Hz. Peygamber ile sadık dostu Hz. Ebû Bekir'in hicret yolculuğunda üç gün gizlendikleri mağara.",
    moralLesson: "Gerekli tüm tedbirleri aldıktan sonra tam bir Tevekkül ile Allah'a güvenmek ve gerçek dostlukta vefa göstermek.",
    source: "TDV İslâm Ansiklopedisi, 'Sevr' Maddesi, Cilt 37"
  },
  {
    id: "bedir",
    name: "Bedir",
    period: "Medine Dönemi",
    year: "M. 624",
    x: 31,
    y: 44,
    summary: "Medine'nin güneybatısında yer alan ve Müslümanların ilk büyük savunma mücadelesini kazandığı, esirlere okuma-yazma öğretme şartıyla özgürlük tanınan mevki.",
    moralLesson: "Zafer anında bile adalet ve insan onurunu korumak; ilim ve eğitimi özgürlüğün anahtarı görmek.",
    source: "TDV İslâm Ansiklopedisi, 'Bedir' Maddesi, Cilt 5"
  },
  {
    id: "medine",
    name: "Medine-i Münevvere",
    period: "Medine Dönemi",
    year: "622 - 632",
    x: 37,
    y: 33,
    summary: "Hicret sonrası Mescid-i Nebevî'nin ve Suffe mektebinin inşa edildiği, Ensar ile Muhacir arasında eşsiz bir kardeşlik hukukunun kurulduğu şehir.",
    moralLesson: "Paylaşma (Îsâr), toplumsal dayanışma, farklı kesimlerle barış içinde yaşama ve ilim merkezli bir toplum inşa etmek.",
    source: "TDV İslâm Ansiklopedisi, 'Medine' Maddesi, Cilt 28"
  },
  {
    id: "uhud",
    name: "Uhud Dağı",
    period: "Medine Dönemi",
    year: "M. 625",
    x: 39,
    y: 28,
    summary: "Medine'nin kuzeyinde yer alan, İstişare ve disiplinin öneminin tarihe kazındığı Uhud Savaşı'nın gerçekleştiği dağ.",
    moralLesson: "Verilen görevi sonuna kadar sadakatle korumak ve musibet anlarında ümitsizliğe kapılmadan yeniden toparlanmak.",
    source: "Kur'an Yolu Tefsiri, Âl-i İmrân Suresi 159. Ayet"
  },
  {
    id: "hudeybiye",
    name: "Hudeybiye",
    period: "Medine Dönemi",
    year: "M. 628",
    x: 36,
    y: 72,
    summary: "Mekke yakınlarında imzalanan barış antlaşmasıyla İslam'ın yayılmasına büyük bir huzur ve diyalog zemini açılan yer.",
    moralLesson: "Uzun vadeli barış ve toplumsal huzur için sabırlı diplomasi yürütmek ve anlaşmalara sadık kalmak.",
    source: "TDV İslâm Ansiklopedisi, 'Hudeybiye Antlaşması' Maddesi"
  }
];

// ==========================================
// 8. KAVRAMLAR, SAHABE HALkASI & ŞEMÂİL-İ ŞERİF
// ==========================================
export const glossaryAndSahabeData = {
  "Ensar": {
    type: "Kavram",
    title: "Ensar",
    badge: "Yardım Edenler",
    desc: "Medine'de İslam'ı kabul ederek Mekkeli muhacirlere kucak açan, evlerini, bahçelerini ve imkanlarını kardeşleriyle paylaşan Medineli Müslümanlar.",
    story: "Ensar, kendi ihtiyaçları olduğu halde muhacir kardeşlerini kendilerine tercih etmiş (îsâr) ve Kur'an-ı Kerim'de övgüyle anılmıştır.",
    source: "TDV İslâm Ansiklopedisi, Cilt 11"
  },
  "Muhacir": {
    type: "Kavram",
    title: "Muhacir",
    badge: "Hicret Edenler",
    desc: "İnançlarını özgürce yaşayabilmek için Mekke'deki evlerini ve mal varlıklarını geride bırakarak Allah rızası için Medine'ye göç eden ilk Müslümanlar.",
    story: "Medine'ye ulaştıklarında Ensar'ın ikramlarına karşı onurlu davranmış, kısa sürede ticaret ve ziraatle kendi geçimlerini sağlamışlardır.",
    source: "TDV İslâm Ansiklopedisi, Cilt 30"
  },
  "Suffe": {
    type: "Kavram",
    title: "Suffe (Ashâb-ı Suffe)",
    badge: "İlim ve İrfan Mektebi",
    desc: "Mescid-i Nebevî'nin girişinde yer alan, kimsesiz ve ilim öğrenmeye adanmış sahabelerin barındığı ilk İslam eğitim kurumu.",
    story: "Ebû Hüreyre ve Bilâl-i Habeşî gibi sahabeler burada bizzat Hz. Peygamber'den Kur'an ve sünnet eğitimi almışlardır.",
    source: "Hadislerle İslam, Cilt 1"
  },
  "Hilfü'l-Fudûl": {
    type: "Kavram",
    title: "Hilfü'l-Fudûl",
    badge: "Erdemliler İttifakı",
    desc: "Mekke'de yerli veya yabancı zulme uğrayan herkesin hakkını korumak için kurulan ve Hz. Peygamber'in gençliğinde katıldığı adalet cemiyeti.",
    story: "Peygamberimiz yıllar sonra bile bu antlaşmayı hatırlayarak 'Bugün de böyle bir topluluğa çağrılsam hemen icabet ederim' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, Cilt 18"
  },
  "Sıla-i Rahim": {
    type: "Kavram",
    title: "Sıla-i Rahim",
    badge: "Akrabalık Bağlarını Gözetmek",
    desc: "Akrabaları ziyaret etmek, hal ve hatırlarını sormak, sevinç ve üzüntülerine ortak olmak ve ihtiyaçlarında yanlarında bulunmak.",
    story: "Hz. Peygamber 'Gerçek sıla-i rahim, kendisine iyilik yapana karşılık vermek değil, kendisiyle ilgiyi kesen akrabaya iyilikle gitmektir' buyurmuştur.",
    source: "Hadislerle İslam, Cilt 4"
  },
  "Îsâr": {
    type: "Kavram",
    title: "Îsâr (Diğergamlık)",
    badge: "Kardeşini Kendine Tercih Etmek",
    desc: "Kendisinin ihtiyacı bulunduğu halde sahip olduğu imkânı din kardeşinin ihtiyacını gidermek için fedakârca sunma erdemi.",
    story: "Haşr Suresi 9. ayette Medineli müminlerin bu üstün cömertlik ahlakı ebedî bir örnek olarak övülmüştür.",
    source: "TDV İslâm Ansiklopedisi, 'Îsâr' Maddesi, Cilt 22"
  },
  "İstişare": {
    type: "Kavram",
    title: "İstişare (Meşveret)",
    badge: "Ortak Akıl ve Danışma",
    desc: "Önemli kararlar öncesinde ehil ve güvenilir kimselerin görüşlerine başvurarak ortak akılla hareket etme sünneti.",
    story: "Hz. Peygamber Bedir, Uhud ve Hendek başta olmak üzere tüm toplumsal meselelerde ashabının görüşünü almış ve uygulamıştır.",
    source: "TDV İslâm Ansiklopedisi, 'Meşveret' Maddesi, Cilt 29"
  },
  "Tevekkül": {
    type: "Kavram",
    title: "Tevekkül",
    badge: "Tedbir Sonrası Teslimiyet",
    desc: "Bir amaca ulaşmak için gerekli tüm maddi ve ilmi sebeplere sarıldıktan sonra neticeyi Allah'tan bekleyip kalbi huzura kavuşturmak.",
    story: "Devesini başıboş bırakıp tevekkül ettiğini söyleyen bir bedevîye Peygamberimiz 'Önce deveni bağla, sonra tevekkül et' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Tevekkül' Maddesi, Cilt 41"
  },
  "Hz. Ebû Bekir": {
    type: "Sahabe Profili",
    group: "Hulefâ-yi Râşidîn",
    title: "Hz. Ebû Bekir (r.a.)",
    badge: "Sadakat ve Teslimiyet (Es-Sıddîk)",
    desc: "Hz. Peygamber'in en yakın dostu, hicret arkadaşı ve ilk halifesi. Doğruluğu ve tereddütsüz sadakati sebebiyle 'Sıddîk' unvanını almıştır.",
    story: "Sevr Mağarası'nda endişelendiğinde Peygamberimiz onu 'Üzülme, Allah bizimle beraberdir' sözleriyle teselli etmiştir.",
    source: "TDV İslâm Ansiklopedisi, Cilt 10"
  },
  "Hz. Ömer": {
    type: "Sahabe Profili",
    group: "Hulefâ-yi Râşidîn",
    title: "Hz. Ömer (r.a.)",
    badge: "Adalet ve Hakkaniyet (El-Fârûk)",
    desc: "Hak ile batılı birbirinden ayıran keskin adalet anlayışı ve devlet yönetimindeki titizliğiyle tanınan ikinci halife.",
    story: "Geceleri Medine sokaklarını dolaşarak halkın ihtiyaçlarını bizzat takip eder, kimsesiz ailelere yardım ulaştırırdı.",
    source: "TDV İslâm Ansiklopedisi, Cilt 34"
  },
  "Hz. Osman": {
    type: "Sahabe Profili",
    group: "Hulefâ-yi Râşidîn",
    title: "Hz. Osman (r.a.)",
    badge: "Hayâ ve Cömertlik (Zinnûreyn)",
    desc: "Üstün hayâ duygusu, infak ahlakı ve Kur'an-ı Kerim nüshalarını çoğaltarak İslam dünyasına ulaştırmasıyla tanınan üçüncü halife.",
    story: "Medine'de su sıkıntısı çekildiğinde Rûme Kuyusu'nu satın alarak tüm halkın ücretsiz kullanımına vakfetmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Osman' Maddesi, Cilt 33"
  },
  "Hz. Ali": {
    type: "Sahabe Profili",
    group: "Hulefâ-yi Râşidîn",
    title: "Hz. Ali (r.a.)",
    badge: "İlim, Hikmet ve Cesaret",
    desc: "Çocuk yaşta İslam'ı kabul eden, Hicret gecesi Peygamberimizin yatağında yatarak emanetleri sahiplerine dağıtan dördüncü halife.",
    story: "Derin fıkıh ve hikmet bilgisi sebebiyle Peygamberimizin övgüsüne mazhar olmuş, adaletli yargı kararlarıyla örnek olmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Ali' Maddesi, Cilt 2"
  },
  "Hz. Hatice": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Hatice (r.anhâ)",
    badge: "Vefa ve İlk Destek (Tâhire)",
    desc: "Hz. Peygamber'in ilk eşi, ilk vahiy geldiğinde ona ilk iman eden ve tüm varlığıyla İslam davasına destek olan müminlerin annesi.",
    story: "Hira'dan heyecanla dönen Peygamberimize 'Allah seni asla utandırmaz; çünkü sen akrabayı gözetir, doğru konuşur ve misafire ikram edersin' diyerek moral vermiştir.",
    source: "TDV İslâm Ansiklopedisi, Cilt 16"
  },
  "Hz. Âişe": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Âişe (r.anhâ)",
    badge: "İlim, Fıkıh ve Rivayet",
    desc: "Güçlü hafızası, derin anlayışı ve aktardığı 2210 hadisle İslam ilim geleneğinin en önemli kurucu şahsiyetlerinden biri.",
    story: "Sahabeler çözemedikleri fıkhi ve ahlaki meseleleri Hz. Âişe'ye danışır, onun ilmi derinliğinden istifade ederlerdi.",
    source: "TDV İslâm Ansiklopedisi, Cilt 2"
  },
  "Hz. Fâtıma": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Fâtıma (r.anhâ)",
    badge: "Ehl-i Beyt'in İncisi (Zehrâ)",
    desc: "Peygamber Efendimiz'in en küçük kızı, Hz. Ali'nin eşi ve Hz. Hasan ile Hz. Hüseyin'in annesi. Sade yaşantısı, vakar ve edebiyle babasına en çok benzeyen kişiydi.",
    story: "Hz. Peygamber kızı Fâtıma yanına geldiğinde ayağa kalkar, alnından öper ve onu kendi yanına oturtarak büyük bir sevgi ve hürmet gösterirdi.",
    source: "TDV İslâm Ansiklopedisi, 'Fâtıma' Maddesi, Cilt 12"
  },
  "Hz. Hasan": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Hasan (r.a.)",
    badge: "Sulh ve Toplumsal Barış",
    desc: "Peygamberimizin 'Cennet gençlerinin efendileri' diye sevdiği büyük torunu. Hilm, cömertlik ve barışsever kişiliğiyle tanınmıştır.",
    story: "Müslümanlar arasında kan dökülmesini önlemek amacıyla halifelik hakkından feragat ederek İslam tarihinde 'Âmü'l-Cemâa' (Birlik Yılı) barışını sağlamıştır.",
    source: "TDV İslâm Ansiklopedisi, 'Hasan' Maddesi, Cilt 16"
  },
  "Hz. Hüseyin": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Hüseyin (r.a.)",
    badge: "Hakkaniyet ve Vakar",
    desc: "Hz. Peygamber'in 'Dünyadaki iki reyhanım (çiçeğim)' diyerek bağrına bastığı küçük torunu. Adalet, izzet ve ilkeli duruşun sembolüdür.",
    story: "Çocukluğunda Mescid-i Nebevî'de Peygamberimiz namaz kılarken mübarek sırtına çıktığında, Efendimiz torunu incinmesin diye secdesini uzatmıştır.",
    source: "TDV İslâm Ansiklopedisi, 'Hüseyin' Maddesi, Cilt 18"
  },
  "Hz. Ümmü Seleme": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Ümmü Seleme (r.anhâ)",
    badge: "Hikmetli İstişare ve Feraset",
    desc: "Habeşistan ve Medine hicretlerine katılan, güçlü muhakemesi ve ilmiyle Hz. Âişe'den sonra en çok hadis rivayet eden müminlerin annesi.",
    story: "Hudeybiye Antlaşması sonrasında sahabelerin üzüntüden kurbanlarını kesmekte tereddüt ettiği kritik anda, Peygamberimize verdiği hikmetli tavsiye ile toplumsal krizi çözmüştür.",
    source: "TDV İslâm Ansiklopedisi, 'Ümmü Seleme' Maddesi, Cilt 42"
  },
  "Hz. Hafsa": {
    type: "Sahabe Profili",
    group: "Ehl-i Beyt & Annelerimiz",
    title: "Hz. Hafsa (r.anhâ)",
    badge: "Mushaf-ı Şerif'in Emin Muhafızı",
    desc: "Hz. Ömer'in kızı ve müminlerin annesi. Okuma-yazma bilen nadir hanımlardan olup ilme merakı ve ibadete düşkünlüğüyle tanınmıştır.",
    story: "Hz. Ebû Bekir döneminde bir araya getirilen ilk Kur'an-ı Kerim Mushafı, Hz. Ömer'in vefatından sonra güvenilirliği sebebiyle Hz. Hafsa'ya emanet edilmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Hafsa' Maddesi, Cilt 15"
  },
  "Talha b. Ubeydullah": {
    type: "Sahabe Profili",
    group: "Aşere-i Mübeşşere",
    title: "Hz. Talha b. Ubeydullah (r.a.)",
    badge: "Fedakârlık ve Cömertlik (Talhatü'l-Hayr)",
    desc: "Hayattayken cennetle müjdelenen on sahabeden (Aşere-i Mübeşşere) biri. Ticaretle kazandığı serveti yoksullara dağıtmasıyla 'Talhatü'l-Cûd' unvanını almıştır.",
    story: "Uhud Savaşı'nda Hz. Peygamber'i korumak için kendi bedenini siper etmiş, eline gelen okları avucuyla karşılayarak Efendimizin önünde etten duvar örmüştür.",
    source: "TDV İslâm Ansiklopedisi, 'Talha b. Ubeydullah' Maddesi, Cilt 39"
  },
  "Zübeyr b. Avvâm": {
    type: "Sahabe Profili",
    group: "Aşere-i Mübeşşere",
    title: "Hz. Zübeyr b. Avvâm (r.a.)",
    badge: "Peygamberimizin Havârisi",
    desc: "Cennetle müjdelenen on sahabeden biri ve Hz. Peygamber'in halası Safiyye'nin oğlu. Genç yaşta İslam'a girmiş ve tüm gazvelerde yer almıştır.",
    story: "En zorlu görevlere tereddütsüz talip olması sebebiyle Hz. Peygamber onun hakkında 'Her peygamberin bir havârisi (samimi yardımcısı) vardır; benim havârim de Zübeyr'dir' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Zübeyr b. Avvâm' Maddesi, Cilt 44"
  },
  "Abdurrahman b. Avf": {
    type: "Sahabe Profili",
    group: "Aşere-i Mübeşşere",
    title: "Hz. Abdurrahman b. Avf (r.a.)",
    badge: "Helal Ticaret ve İnfak Öncüsü",
    desc: "Cennetle müjdelenen on sahabeden biri. Dürüst ticaret ahlakı ve servetini toplumun hayrına vakfetmesiyle İslam iktisat ahlakının simgesidir.",
    story: "Medine'ye hicret ettiğinde Ensar kardeşi Sa'd b. Rebî malının yarısını teklif edince, 'Allah malını sana mübarek kılsın, sen bana çarşının yolunu göster' diyerek alın teriyle çalışmayı seçmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Abdurrahman b. Avf' Maddesi, Cilt 1"
  },
  "Sa'd b. Ebû Vakkâs": {
    type: "Sahabe Profili",
    group: "Aşere-i Mübeşşere",
    title: "Hz. Sa'd b. Ebû Vakkâs (r.a.)",
    badge: "Duası Makbul Sahabe",
    desc: "Cennetle müjdelenen on sahabeden biri. Annesinin baskılarına rağmen inancından taviz vermemiş, aynı zamanda annesine karşı nezaketini de hiç bozmamıştır.",
    story: "Hz. Peygamber onun için 'Allah'ım, Sa'd'ın duasını kabul eyle!' diye dua etmiş; Sa'd ömrü boyunca kimseye beddua etmemeye büyük özen göstermiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Sa'd b. Ebû Vakkâs' Maddesi, Cilt 35"
  },
  "Saîd b. Zeyd": {
    type: "Sahabe Profili",
    group: "Aşere-i Mübeşşere",
    title: "Hz. Saîd b. Zeyd (r.a.)",
    badge: "Tevhid ve İstikamet Öncüsü",
    desc: "Cennetle müjdelenen on sahabeden biri ve Hz. Ömer'in kız kardeşi Fâtıma'nın eşi. İlk Müslümanlar arasında yer almıştır.",
    story: "Eşi Fâtıma ile birlikte evde Tâhâ Suresi'ni okurlarken gelen Hz. Ömer'in kalbinin yumuşamasına ve İslam ile şereflenmesine vesile olmuşlardır.",
    source: "TDV İslâm Ansiklopedisi, 'Saîd b. Zeyd' Maddesi, Cilt 35"
  },
  "Ebû Ubeyde b. Cerrâh": {
    type: "Sahabe Profili",
    group: "Aşere-i Mübeşşere",
    title: "Hz. Ebû Ubeyde b. Cerrâh (r.a.)",
    badge: "Bu Ümmetin Emîni",
    desc: "Cennetle müjdelenen on sahabeden biri. Tevazuu, güvenilirliği ve nezaketiyle tüm sahabelerin gönlünde taht kurmuştur.",
    story: "Hz. Peygamber onun hakkında 'Her ümmetin bir emîni (en güvenilir kimsesi) vardır; bu ümmetin emîni de Ebû Ubeyde b. Cerrâh'tır' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Ebû Ubeyde b. Cerrâh' Maddesi, Cilt 10"
  },
  "Hz. Hamza": {
    type: "Sahabe Profili",
    group: "Ensar & Fedakârlık Öncüleri",
    title: "Hz. Hamza (r.a.)",
    badge: "Mazlumun Koruyucusu (Seyyidü'ş-Şühedâ)",
    desc: "Hz. Peygamber'in amcası ve sütkardeşi. Mekke'de Müslümanların en zor zamanlarında İslam'ı kabul ederek inananlara büyük güç vermiştir.",
    story: "Kâbe'de Hz. Peygamber'e yapılan hakareti duyduğunda haksızlığa karşı durarak İslam'ı seçmiş ve şefkatiyle mazlumların sığınağı olmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Hamza' Maddesi, Cilt 15"
  },
  "Ca'fer-i Tayyâr": {
    type: "Sahabe Profili",
    group: "Ensar & Fedakârlık Öncüleri",
    title: "Hz. Ca'fer b. Ebû Tâlib (r.a.)",
    badge: "Yoksulların Babası (Ebü'l-Mesâkîn)",
    desc: "Hz. Ali'nin ağabeyi ve Habeşistan hicret kafilesinin sözcüsü. Yoksullara ve yetimlere olan düşkünlüğüyle 'Ebü'l-Mesâkîn' diye anılmıştır.",
    story: "Habeşistan Hükümdarı Necaşi'nin huzurunda Meryem Suresi'ni okuyarak İslam'ın doğruluk, emanet ve komşuluk ilkelerini eşsiz bir belagatle anlatmıştır.",
    source: "TDV İslâm Ansiklopedisi, 'Ca'fer b. Ebû Tâlib' Maddesi, Cilt 6"
  },
  "Bilâl-i Habeşî": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Bilâl-i Habeşî (r.a.)",
    badge: "Sabır ve İslam'ın İlk Müezzini",
    desc: "Mekke'de gördüğü ağır işkencelere rağmen inancından dönmeyen ve Medine'de ilk ezanı okuyan Habeşli sahabe.",
    story: "Üstünlüğün ırk veya statüde değil yalnızca takva ve güzel ahlakta olduğunun en canlı sembolüdür.",
    source: "TDV İslâm Ansiklopedisi, Cilt 6"
  },
  "Mus'ab b. Umeyr": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Mus'ab b. Umeyr (r.a.)",
    badge: "İslam'ın İlk Muallimi",
    desc: "Mekke'nin en varlıklı ailesine mensupken tüm dünyevi konforu geride bırakıp Medine'ye İslam'ı öğretmek üzere gönderilen genç sahabe.",
    story: "Tatlı dili ve hikmetli tebliği sayesinde Medine'de pek çok kabilenin gönüllü olarak İslam'la şereflenmesine vesile olmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Mus'ab b. Umeyr' Maddesi, Cilt 31"
  },
  "Abdullah b. Mes'ûd": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Abdullah b. Mes'ûd (r.a.)",
    badge: "Kur'an ve Fıkıh Âlimi",
    desc: "Mekke'de Kâbe'de Kur'an-ı Kerim'i açıktan okuyan ilk sahabe ve Kûfe fıkıh mektebinin kurucu âlimi.",
    story: "Hz. Peygamber 'Kur'an'ı indiği gibi taze ve güzel okumak isteyen İbn Ümmü Abd'in (Abdullah b. Mes'ûd) kıraatiyle okusun' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Abdullah b. Mes'ûd' Maddesi, Cilt 1"
  },
  "Muâz b. Cebel": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Muâz b. Cebel (r.a.)",
    badge: "Helal ve Haram Bilgisinde Öncü",
    desc: "Medineli genç bir âlim olarak Yemen'e kadı ve muallim gönderilen, fıkıh ve ahlak ilminde zirve sahabe.",
    story: "Peygamberimiz onu Yemen'e uğurlarken 'Ey Muâz, vallahi seni çok seviyorum; her namazın ardından Allah'ım seni zikretmek ve sana şükretmek için bana yardım et duasını terk etme' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Muâz b. Cebel' Maddesi, Cilt 30"
  },
  "Enes b. Mâlik": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Enes b. Mâlik (r.a.)",
    badge: "Peygamberimizin 10 Yıllık Hizmetkârı",
    desc: "On yaşından itibaren on yıl boyunca Hz. Peygamber'in yanında bulunarak onun ahlakını ve günlük sünnetini en yakından gözlemleyen sahabe.",
    story: "'Resûlullah'a on yıl hizmet ettim; yaptığım bir iş için neden böyle yaptın veya yapmadığım bir iş için neden yapmadın diye bana bir kez bile öf demedi' sözü nebevî nezaketin en büyük şahididir.",
    source: "TDV İslâm Ansiklopedisi, 'Enes b. Mâlik' Maddesi, Cilt 11"
  },
  "Ebû Hüreyre": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Ebû Hüreyre (r.a.)",
    badge: "Ashâb-ı Suffe ve Hadis Hafızı",
    desc: "Suffe mektebinde hayatını tamamen Hz. Peygamber'den hadis öğrenmeye adayan ve 5374 hadisle en çok rivayette bulunan sahabe.",
    story: "Yolda bulduğu yavru bir kediyi elbisesinin yeninde taşıyıp şefkatle beslediği için bizzat Peygamberimiz tarafından 'Ebû Hüreyre' (Kediciğin Babası) künyesiyle taltif edilmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Ebû Hüreyre' Maddesi, Cilt 10"
  },
  "Zeyd b. Sâbit": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Zeyd b. Sâbit (r.a.)",
    badge: "Vahiy Kâtibi ve Mushaf Heyeti Başkanı",
    desc: "Medineli genç sahabe; Hz. Peygamber'in en yakın vahiy kâtibi, yabancı diller öğrenen tercümanı ve Kur'an-ı Kerim'in kitaplaştırılması heyetinin başkanı.",
    story: "Peygamberimizin teşvikiyle çok kısa sürede yabancı yazıları öğrenmiş ve inen ayetleri büyük bir emanet bilinciyle kayda geçirmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Zeyd b. Sâbit' Maddesi, Cilt 44"
  },
  "Selmân-ı Fârisî": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Selmân-ı Fârisî (r.a.)",
    badge: "Hakikat Arayışçısı (Selmânü'l-Hayr)",
    desc: "Hakikati bulmak için İran'dan Anadolu'ya ve oradan Medine'ye uzanan uzun bir ilim yolculuğu yapan İran asıllı sahabe.",
    story: "Hendek Savaşı'nda Medine'nin savunulması için hendek kazılması fikrini sunmuş; Peygamberimiz onun hakkında 'Selmân bizdendir, Ehl-i Beyt'imizdendir' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Selmân-ı Fârisî' Maddesi, Cilt 36"
  },
  "Ebû Zer el-Gıfârî": {
    type: "Sahabe Profili",
    group: "İlim & Suffe Ashâbı",
    title: "Ebû Zer el-Gıfârî (r.a.)",
    badge: "Zühd, Kanaat ve Doğru Sözlülük",
    desc: "İslam'a ilk girenlerden olup sade yaşantısı, mal biriktirmemesi ve yoksulların hakkını savunmasıyla tanınan sahabe.",
    story: "Hz. Peygamber onun doğruluğunu 'Gök kubbe altında ve yeryüzünde Ebû Zer'den daha doğru sözlü bir kimse yaşamamıştır' hadisiyle övmüştür.",
    source: "TDV İslâm Ansiklopedisi, 'Ebû Zer el-Gıfârî' Maddesi, Cilt 10"
  },
  "Ebû Eyyûb el-Ensârî": {
    type: "Sahabe Profili",
    group: "Ensar & Fedakârlık Öncüleri",
    title: "Ebû Eyyûb el-Ensârî (r.a.)",
    badge: "Mihmandâr-ı Nebî (Eyüp Sultan)",
    desc: "Hicret sonrasında Mescid-i Nebevî inşa edilene kadar Hz. Peygamber'i yedi ay boyunca evinde misafir eden Medineli sahabe.",
    story: "Peygamberimiz evinin alt katında kalırken üst katta yürümekten bile edep ederek geceleri köşeye çekilmiş; ilerleyen yaşında İstanbul kuşatmasına katılarak vefat etmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Ebû Eyyûb el-Ensârî' Maddesi, Cilt 10"
  },
  "Sa'd b. Muâz": {
    type: "Sahabe Profili",
    group: "Ensar & Fedakârlık Öncüleri",
    title: "Sa'd b. Muâz (r.a.)",
    badge: "Ensar'ın Lideri ve Vefa Örneği",
    desc: "Mus'ab b. Umeyr'in tebliğiyle Müslüman olan ve bütün Evs kabilesinin aynı gün İslam'a girmesine öncülük eden Medineli sahabe.",
    story: "Hicret sonrası tüm Medine imkanlarını Muhacir kardeşlerine açmış; vefatında Hz. Peygamber onun sadakatini büyük bir övgüyle yâd etmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Sa'd b. Muâz' Maddesi, Cilt 35"
  },
  "Nesîbe Hatun": {
    type: "Sahabe Profili",
    group: "Ensar & Fedakârlık Öncüleri",
    title: "Nesîbe Hatun (Ümmü Umâre) (r.anhâ)",
    badge: "Cesaret ve Fedakârlık Abidesi",
    desc: "İkinci Akabe Biatı'nda yer alan, yaralıları tedavi eden ve en zor anlarda bizzat Hz. Peygamber'i koruyan Medineli hanım sahabe.",
    story: "Uhud'da gösterdiği eşsiz fedakârlık üzerine Hz. Peygamber 'Uhud günü sağıma da soluma da baksam Ümmü Umâre'nin beni koruduğunu görüyordum' buyurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Ümmü Umâre' Maddesi, Cilt 42"
  },
  "Esma bint Ebû Bekir": {
    type: "Sahabe Profili",
    group: "Ensar & Fedakârlık Öncüleri",
    title: "Esma bint Ebû Bekir (r.anhâ)",
    badge: "Hicret Yolunun Cesur Destekçisi (Zâtü'n-Nitâkayn)",
    desc: "Hz. Ebû Bekir'in kızı ve Hz. Âişe'nin ablası. Cömertliği, metaneti ve Hicret yolculuğuna yaptığı hizmetle tanınmıştır.",
    story: "Sevr Mağarası'na gizlice azık taşırken belindeki kuşağı (nitâk) ikiye bölerek birini yemek çıkınına, diğerini su tulumuna bağladığı için Peygamberimiz tarafından 'Zâtü'n-Nitâkayn' (İki Kuşaklı) lakabıyla müjdelenmiştir.",
    source: "TDV İslâm Ansiklopedisi, 'Esmâ bint Ebû Bekir' Maddesi, Cilt 11"
  }
};

export const semailAndSpecialData = [
  {
    id: "sem-1",
    category: "Şemâil-i Şerîf",
    title: "Konuşma ve Dinleme Edebi",
    content: "Hz. Peygamber (s.a.v.) acele etmeden, kelimeleri tane tane ve herkesin anlayabileceği açıklıkta konuşurdu. Birisi kendisiyle konuşurken sadece yüzünü değil bütün bedenini muhatabına döner, sözünü bitirmeden asla sözünü kesmezdi.",
    source: "TDV İslâm Ansiklopedisi, 'Şemâil' Maddesi & Hadislerle İslam, Cilt 1"
  },
  {
    id: "sem-2",
    category: "Şemâil-i Şerîf",
    title: "Sofra ve İkram Ahlakı",
    content: "Yemeğe besmele ile başlar, önünden yer, hiçbir yemeği asla kusurlu bulup eleştirmezdi; hoşuna giderse yer, gitmezse sessizce bırakırdı. Sofrasını misafirlerle ve yoksullarla paylaşmayı çok severdi.",
    source: "Hadislerle İslam, Cilt 4, s. 260"
  },
  {
    id: "sem-5",
    category: "Şemâil-i Şerîf",
    title: "Tebessümü ve Şakalaşma Edebi",
    content: "Hz. Peygamber'in gülüşü daima zarif bir tebessüm şeklindeydi; kahkaha ile gülmezdi. Ashabıyla ve çocuklarla zaman zaman latife yapar, ancak şaka yaparken dahi asla gerçeğe aykırı bir söz söylemezdi.",
    source: "Tirmizî, Şemâilü'n-Nebî & Hadislerle İslam, Cilt 4"
  },
  {
    id: "sem-6",
    category: "Şemâil-i Şerîf",
    title: "Yürüyüşü, Vakarı ve Tevazuu",
    content: "Yürüdüğü zaman ayaklarını yerden canlıca kaldırır, sanki meyilli bir yerden iniyormuş gibi kararlı ve vakarlı adımlarla yürürdü. Meclislerde kendisi için özel bir yer ayrılmasını istemez, boş bulduğu yere otururdu.",
    source: "TDV İslâm Ansiklopedisi, 'Hilye' ve 'Şemâil' Maddeleri"
  },
  {
    id: "sem-7",
    category: "Şemâil-i Şerîf",
    title: "Temizlik, Giyim ve Nezafet Sünneti",
    content: "Sade, temiz ve düzenli giyinmeye özen gösterir, beyaz elbiseyi tercih eder, misvak kullanarak ağız temizliğine ve güzel koku sürünmeye büyük önem verirdi. Gösteriş ve kibirden uzak bir zarafeti temsil ederdi.",
    source: "Hadislerle İslam, Cilt 1, s. 365"
  },
  {
    id: "sem-8",
    category: "Şemâil-i Şerîf",
    title: "İbadet Huşûu ve Dua Hayatı",
    content: "Külfet yüklemeden devamlı olan ameli severdi. Sevindirici bir haber aldığında şükür secdesine kapanır, sıkıntılı anlarda ise namaza ve istiğfara yönelerek kalbini ferahlatırdı.",
    source: "Hadislerle İslam, Cilt 2, s. 145"
  },
  {
    id: "sem-3",
    category: "Manevi Mevsimler",
    title: "Cuma Günü ve Toplumsal Kaynaşma",
    content: "Cuma gününü müminlerin haftalık bayramı olarak nitelendiren Hz. Peygamber, bu günde temizliğe özen göstermeyi, güzel koku sürünmeyi, salavat getirmeyi ve kırgınlıkları gidermeyi tavsiye etmiştir.",
    source: "Hadislerle İslam, Cilt 2, s. 210"
  },
  {
    id: "sem-4",
    category: "Manevi Mevsimler",
    title: "Ramazan-ı Şerif ve Cömertlik Rüzgârı",
    content: "İbn Abbas'ın (r.a.) rivayetine göre insanların en cömerdi olan Peygamber Efendimiz, Ramazan ayında Cebrâil (a.s.) ile buluşup Kur'an mukabelesi yaptığında esen rüzgârdan bile daha cömert olurdu.",
    source: "Hadislerle İslam, Cilt 2, s. 295"
  }
];

export const defaultHabits = [
  { id: "h1", title: "Öfke anında sükûneti korumak", category: "Sabır" },
  { id: "h2", title: "Karşılaştığım kişilere tebessüm ve selam vermek", category: "Nezaket" },
  { id: "h3", title: "Su ve gıda israfından kaçınmak", category: "Şükür" },
  { id: "h4", title: "Aileme ve yakınlarıma kaliteli vakit ayırmak", category: "Aile" },
  { id: "h5", title: "Gıybet ve doğrulanmamış bilgiden uzak durmak", category: "Dil Ahlakı" }
];

export const weekDays = ["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"];

// ==========================================
// 9. ÇOCUK MODU VERİLERİ (DİYANET ÇOCUK PORTALI)
// ==========================================
export const kidsBadgesData = [
  { id: "b1", title: "El-Emîn Rozeti", virtue: "Dürüstlük & Emanet", emoji: "🛡️", minStars: 20, desc: "Sözünde duran ve emaneti koruyan güvenilir çocuk." },
  { id: "b2", title: "Tebessüm Güneşi", virtue: "Nezaket & Selam", emoji: "☀️", minStars: 45, desc: "Güler yüzü ve güzel selamıyla kalpleri ısıtan çocuk." },
  { id: "b3", title: "Şefkat Elçisi", virtue: "Merhamet & Canlı Sevgisi", emoji: "🕊️", minStars: 75, desc: "Kuşlara, kedilere ve tüm canlılara merhametle yaklaşan çocuk." },
  { id: "b4", title: "Ensar Kardeşi", virtue: "Paylaşma & Yardımlaşma", emoji: "🤝", minStars: 110, desc: "Sevdiği şeyleri kardeşleri ve arkadaşlarıyla paylaşan cömert çocuk." },
  { id: "b5", title: "Suffe Yıldızı", virtue: "İlim & Güzel Ahlak", emoji: "🌟", minStars: 150, desc: "Peygamberimizin kıssalarını öğrenip hayatına uygulayan örnek çocuk." }
];

export const kidsDailyTasks = [
  { id: "kt1", category: "Ev & Aile", emoji: "🏡", title: "Bugün anneme veya babama gülümseyerek bir ev işinde yardım ettim", stars: 10 },
  { id: "kt2", category: "Ev & Aile", emoji: "🍽️", title: "Yemeğe 'Bismillah' diyerek başladım ve tabağımı israf etmeden bitirdim", stars: 10 },
  { id: "kt3", category: "Ev & Aile", emoji: "🌙", title: "Odamı topladım ve yatmadan önce aileme iyi geceler dileyip dua ettim", stars: 10 },
  { id: "kt4", category: "Nezaket & Arkadaşlık", emoji: "👋", title: "Karşılaştığım arkadaşlarıma ve büyüklerime ilk önce ben güzelce selam verdim", stars: 10 },
  { id: "kt5", category: "Nezaket & Arkadaşlık", emoji: "🎁", title: "Oyuncağımı, kalemimi veya ikramımı kardeşimle / arkadaşımla paylaştım", stars: 15 },
  { id: "kt6", category: "Nezaket & Arkadaşlık", emoji: "💬", title: "Bugün kimseyi kırmadım; teşekkür etmeyi ve özür dilemeyi unutmadım", stars: 15 },
  { id: "kt7", category: "Doğa & Emanet", emoji: "🐾", title: "Sokaktaki kuşlar, kediler veya köpekler için bir kap su / mama koydum", stars: 15 },
  { id: "kt8", category: "Doğa & Emanet", emoji: "💧", title: "Elimi ve dişimi fırçalarken musluğu gereksiz yere açık bırakmadım", stars: 10 },
  { id: "kt9", category: "Doğa & Emanet", emoji: "🌱", title: "Bir çiçeği suladım veya çevremdeki çöpleri çöp kutusuna attım", stars: 15 }
];

export const kidsStoriesData = [
  {
    id: "ks1",
    emoji: "🐦",
    ageGroup: "4-6 Yaş",
    category: "Merhamet",
    title: "Kuşu Ölen Küçük Umeyr",
    story: "Medine'de Enes adında genç bir sahabenin Umeyr isminde küçük bir kardeşi vardı. Umeyr'in çok sevdiği minik bir serçesi vardı ve her gün onunla oynardı. Bir gün o minik kuş hastalanıp öldü. Küçük Umeyr çok üzüldü ve bahçede sessizce ağlamaya başladı. Peygamber Efendimiz (s.a.v.) yoldan geçerken Umeyr'in üzüntüsünü hemen fark etti. Yanına diz çöktü, başını şefkatle okşadı ve ona 'Ey Umeyr, minik serçecik ne yaptı?' diye halini sordu. Peygamberimizin kendi küçük kuşunu bile hatırlayıp üzüntüsünü paylaşması Umeyr'in kalbini ısıttı.",
    lesson: "Çocukların duygularına değer vermek ve üzülen bir arkadaşımızı tatlı sözle teselli etmek Peygamberimizin güzel ahlakıdır.",
    didYouKnow: "Peygamber Efendimiz çocuklarla karşılaştığında onların boy seviyesine inmek için diz çöker ve onlarla göz teması kurarak konuşurdu.",
    actionTip: "Üzgün gördüğün bir arkadaşına 'Senin için yapabileceğim bir şey var mı?' diye sor.",
    familyQuestion: "Senin en sevdiğin oyuncağın veya evcil hayvanın zarar görseydi bir arkadaşının seni nasıl teselli etmesini isterdin?",
    source: "Diyanet Çocuk Dergisi & Hadislerle İslam, Cilt 4"
  },
  {
    id: "ks2",
    emoji: "🛡️",
    ageGroup: "7-12 Yaş",
    category: "Dürüstlük",
    title: "Mekke'nin En Güvenilir Genci: El-Emîn",
    story: "Peygamber Efendimiz daha gençlik yıllarında bile hiç yalan söylemez, verdiği sözü mutlaka tutar ve kendisine bırakılan emanetleri gözü gibi korurdu. Bu yüzden Mekke'deki herkes ona 'En Güvenilir İnsan' anlamına gelen 'Muhammedü'l-Emîn' derdi. Kâbe tamir edilirken Hacerülesved taşını yerine kimin koyacağı konusunda kabileler arasında büyük bir tartışma çıkmıştı. Kapıdan Peygamberimiz girince herkes sevinçle 'İşte El-Emîn geliyor, onun vereceği karara razıyız!' dedi. Peygamberimiz taşı bir örtünün üzerine koydu ve her kabilenin temsilcisine örtünün bir ucundan tutturarak taşı hep birlikte yerine yerleştirmelerini sağladı.",
    lesson: "Dürüst ve güvenilir olmak insanların sevgisini kazandırır; adaletli ve akıllı çözümler ise kavgayı barışa dönüştürür.",
    didYouKnow: "Peygamberimiz bu hakemliği yaptığında henüz 35 yaşındaydı ve tek bir damla kan dökülmeden büyük bir kavgayı önlemişti.",
    actionTip: "Arkadaşların arasında bir anlaşmazlık çıktığında herkesin katılacağı adil bir oyun kuralı öner.",
    familyQuestion: "Çevremizdeki insanların bize 'O söz verdiyse mutlaka tutar' diyebilmesi için nelere dikkat etmeliyiz?",
    source: "TDV İslâm Ansiklopedisi, 'El-Emîn' Maddesi"
  },
  {
    id: "ks3",
    emoji: "🐕",
    ageGroup: "4-6 Yaş",
    category: "Hayvan Sevgisi",
    title: "Susayan Köpeğe Su Veren Yolcu",
    story: "Peygamber Efendimiz arkadaşlarına çok anlamlı bir kıssa anlattı: Çok sıcak bir günde çölde yürüyen bir yolcu çok susamıştı. Derin bir su kuyusu buldu, içine inip kana kana su içti. Kuyudan yukarı çıktığında susuzluktan dili dışarı sarkmış, nemli toprağı yalayan zavallı bir köpek gördü. Adam kendi kendine 'Bu hayvan da tıpkı benim gibi çok susamış' dedi. Hiç üşenmeden tekrar kuyuya indi, ayakkabısına su doldurdu, yukarı çıkıp köpeğe su içirdi. Peygamberimiz bu merhametinden dolayı Allah'ın o kulunu çok sevdiğini ve bağışladığını müjdeledi.",
    lesson: "Bütün canlılar Allah'ın bize emanetidir; dilsiz hayvanlara su ve yiyecek vermek çok büyük bir iyiliktir.",
    didYouKnow: "Sahabeler 'Ey Allah'ın Resûlü! Hayvanlara yaptığımız iyilikten dolayı da bize sevap var mı?' diye sorduğunda Efendimiz 'Evet, her canlıya yapılan iyilikte sevap vardır!' buyurmuştur.",
    actionTip: "Evinizin önüne veya balkonuna kuşlar ve kediler için temiz bir kap su koy.",
    familyQuestion: "Sıcak yaz günlerinde veya soğuk kış günlerinde sokaktaki hayvanlar için ailece neler hazırlayabiliriz?",
    source: "Hadislerle İslam, Cilt 7, s. 220"
  },
  {
    id: "ks4",
    emoji: "🌴",
    ageGroup: "7-12 Yaş",
    category: "Şefkat & Sabır",
    title: "Hurma Ağacı ve Küçük Çocuk (Râfi')",
    story: "Medineli Râfi' adında küçük bir yetim çocuk bahçedeki hurma ağaçlarına taş atarak hurma düşürmeye çalışıyordu. Bahçe sahibi bunu görünce kızarak çocuğu Peygamber Efendimizin yanına getirdi. Peygamberimiz çocuğa hiç bağırmadı; yumuşak bir sesle 'Yavrucuğum, ağaçlara neden taş atıyorsun?' diye sordu. Küçük Râfi' 'Karnım çok açtı, yemek için attım' dedi. Bunun üzerine Peygamberimiz çocuğun başını şefkatle okşadı, karnını doyurdu ve 'Bir daha ağaçlara taş atıp dallarını incitme yavrum, ağacın altına kendiliğinden düşenlerden ye' diyerek ona bereket duası etti.",
    lesson: "Hata yapan birine kızmak yerine önce onu dinlemek, ihtiyacını anlamak ve tatlı dille doğruyu öğretmek en güzel yoldur.",
    didYouKnow: "Küçük Râfi' büyüdüğünde bu tatlı hatırayı hiç unutmamış ve 'Peygamberimizin başımı okşadığı anki şefkatini ömrüm boyunca kalbimde hissettim' demiştir.",
    actionTip: "Kardeşin veya bir arkadaşın yanlışlıkla bir hata yaptığında ona bağırmadan tatlı dille doğrusunu göster.",
    familyQuestion: "Birisi bize yanlışımızı bağırmadan, gülümseyerek anlattığında kendimizi nasıl hissederiz?",
    source: "Hadislerle İslam, Cilt 4, s. 315"
  },
  {
    id: "ks5",
    emoji: "😊",
    ageGroup: "4-6 Yaş",
    category: "Nezaket",
    title: "Kalpleri Isıtan Tebessüm Sadakası",
    story: "Peygamber Efendimiz etrafındaki insanlara her zaman güler yüzle bakar, asla surat asmazdı. Çocukları gördüğünde onlara gülümseyerek selam verirdi. Bir gün arkadaşlarına 'Kardeşinin yüzüne gülümsemen senin için bir sadakadır' buyurdu. Yani cebimizde hiç paramız olmasa bile annemize, babamıza, öğretmenimize ve arkadaşlarımıza tatlı bir tebessümle bakmak da tıpkı büyük bir hediye vermek gibi bize iyilik puanı kazandırır.",
    lesson: "Güler yüzlü olmak ve selam vermek kalpleri ısıtır, etrafımıza huzur ve mutluluk saçar.",
    didYouKnow: "Sahabelerden Cerîr b. Abdullah 'Ben Müslüman olduğum günden beri Peygamberimiz beni ne zaman görse mutlaka yüzüme tebessüm etmiştir' demiştir.",
    actionTip: "Sabah uyandığında aile bireylerine kocaman bir gülümsemeyle 'Hayırlı sabahlar' de.",
    familyQuestion: "Bize her zaman güler yüzle bakan bir insanın yanında kendimizi nasıl hissederiz?",
    source: "Diyanet Çocuk Yayınları, Sünnet Hikayeleri"
  },
  {
    id: "ks6",
    emoji: "🤝",
    ageGroup: "7-12 Yaş",
    category: "Kardeşlik",
    title: "Kardeşlik Sofrası: Ensar ve Muhacir",
    story: "Mekkeli Müslümanlar (Muhacir) inançlarını koruyabilmek için evlerini bırakıp Medine'ye göç ettiklerinde yanlarında neredeyse hiçbir eşyaları yoktu. Medineli Müslümanlar (Ensar) onlara öyle güzel kucak açtı ki, evlerini, bahçelerini ve sofralarını Mekkeli kardeşleriyle paylaştılar. Hatta kendi ihtiyaçları varken bile misafir kardeşlerini kendilerine tercih ettiler. İslam tarihinde bu eşsiz paylaşma ve cömertlik ahlakına 'Îsâr' adı verildi.",
    lesson: "Gerçek kardeşlik, sadece artan eşyamızı değil, kendi sevdiğimiz şeyleri de arkadaşımızla gönülden paylaşabilmektir.",
    didYouKnow: "Kur'an-ı Kerim'de Haşr Suresi 9. ayette Medineli Ensar'ın bu cömertliği tüm insanlığa örnek olarak övülmüştür.",
    actionTip: "En sevdiğin bir atıştırmalığı veya boya kalemini bugün sınıf arkadaşınla paylaş.",
    familyQuestion: "Evimize bir misafir geldiğinde onu rahat ettirmek için biz çocuklar neler yapabiliriz?",
    source: "Kur'an Yolu Tefsiri, Haşr Suresi 9. Ayet"
  },
  {
    id: "ks7",
    emoji: "👵",
    ageGroup: "4-6 Yaş",
    category: "Yardımlaşma",
    title: "Yaşlı Teyzenin Eşyalarını Taşıyan Peygamber",
    story: "Mekke yolunda ağır eşyalarını taşımakta zorlanan yaşlı bir teyze yol kenarında dinleniyordu. Peygamber Efendimiz onun yorulduğunu görünce hemen yanına gitti, nazikçe selam verdi ve 'İzin verirseniz ağır eşyalarınızı gideceğiniz yere kadar ben taşıyayım' dedi. Yol boyunca yaşlı teyzeyi dinleyerek eşyalarını evine kadar taşıdı. Yaşlı teyze bu nazik ve yardımsever insanın Hz. Muhammed (s.a.v.) olduğunu öğrenince onun güzel ahlakına hayran kaldı.",
    lesson: "Büyüklerimize, yaşlılara ve yardıma ihtiyacı olanlara bizden istemelerini beklemeden yardım etmeliyiz.",
    didYouKnow: "Peygamber Efendimiz kendi işlerini kendisi yapar, ayakkabısını tamir eder ve ev işlerinde ailesine her zaman yardım ederdi.",
    actionTip: "Alışverişten dönen annenin veya babanın elindeki poşetlerden hafif olan birini sen taşı.",
    familyQuestion: "Dedemizi, ninemizi veya apartmandaki yaşlı komşumuzu sevindirmek için bu hafta ne yapabiliriz?",
    source: "Diyanet Çocuk Dergisi"
  },
  {
    id: "ks8",
    emoji: "🐜",
    ageGroup: "7-12 Yaş",
    category: "Çevre Bilinci",
    title: "Karınca Yuvasını ve Kuş Yavrularını Koruyan Merhamet",
    story: "Bir yolculuk sırasında mola verildiğinde sahabelerden biri fark etmeden bir karınca yuvasının yakınına ateş yakmıştı. Bir başka sahabe ise çalıların arasında gördüğü iki minik kuş yavrusunu sevmek için yuvasından almış, anne kuş ise yavrularının etrafında çırpınarak uçmaya başlamıştı. Peygamber Efendimiz bunları görünce hemen ateşi söndürttü ve 'Bu kuşcağızın yavrularını kim aldı? Hemen yavrularını yuvasına geri koyun, anneyi üzmeyin!' buyurdu.",
    lesson: "Doğadaki en küçük karıncanın ve minik bir kuşun bile yaşam hakkına ve yuvasına saygı göstermeliyiz.",
    didYouKnow: "Peygamberimiz 'Kıyamet kopuyor olsa bile elinizdeki fidanı dikin' buyurarak doğayı korumayı ibadet saymıştır.",
    actionTip: "Parkta veya doğada yürürken karınca yuvalarına ve çiçeklere basmamaya dikkat et.",
    familyQuestion: "Doğadaki ağaçlar, kuşlar ve böcekler ekosistemimiz için neden bu kadar önemlidir?",
    source: "Hadislerle İslam, Cilt 7, s. 218"
  },
  {
    id: "ks9",
    emoji: "👦",
    ageGroup: "4-6 Yaş",
    category: "Aile Sevgisi",
    title: "Hasan ve Hüseyin ile Oynayan Şefkatli Dede",
    story: "Peygamber Efendimiz torunları Hz. Hasan ve Hz. Hüseyin'i çok sever, onlara 'Dünyadaki iki çiçeğim (reyhanım)' derdi. Evde onlarla oyunlar oynar, sırtına bindirip gezdirirdi. Bir gün Mescid'de namaz kılarken küçük torunu secdeye giden dedesinin sırtına çıktı. Peygamberimiz torunu düşmesin ve oyunu yarıda kalmasın diye o secdesini uzattı; namaz bitince de 'Torunum sırtıma bindi, acele edip onun hevesini kırmak istemedim' buyurdu.",
    lesson: "Çocukları sevmek, onlarla oyun oynamak ve kalplerini kırmamak Peygamberimizin en güzel sünnetlerindendir.",
    didYouKnow: "Peygamberimiz çocukları öpüp koklar ve 'Merhamet etmeyene merhamet olunmaz' buyururdu.",
    actionTip: "Küçük kardeşinle veya kuzeninle onun sevdiği bir oyunu sabırla oyna.",
    familyQuestion: "Ailece birlikte oynadığımızda en çok mutlu olduğumuz oyun hangisi?",
    source: "Hadislerle İslam, Cilt 4, s. 308"
  },
  {
    id: "ks10",
    emoji: "🍽️",
    ageGroup: "4-6 Yaş",
    category: "Sofra Edebi",
    title: "Küçük Ömer'e Öğretilen Sofra Sünneti",
    story: "Peygamberimizin yanında yetişen Ömer b. Ebû Seleme adında küçük bir çocuk vardı. Sofrada yemek yerken eli tabağın her tarafında dolaşıyordu. Peygamber Efendimiz onu hiç utandırmadan, şefkatle yanına çağırdı ve 'Yavrucuğum! Yemeğe başlarken Bismillah de, sağ elinle ye ve tabağın kendi önündeki kısmından ye' buyurdu. Küçük Ömer o günden sonra hayatı boyunca bu güzel sofra edebine dikkat etti.",
    lesson: "Yemeğe başlarken ellerimizi yıkamak, Bismillah demek, önümüzden yemek ve sonunda Elhamdülillah demek sofra sünnetidir.",
    didYouKnow: "Peygamber Efendimiz hayatı boyunca hiçbir yemeği 'Bu kötü olmuş' diye eleştirmemiş, emeğe her zaman saygı göstermiştir.",
    actionTip: "Bugün sofraya oturduğunda yemeği hazırlayan annene/babana teşekkür et ve Bismillah ile başla.",
    familyQuestion: "Soframızdaki nimetlerin bize ulaşması için kimler emek veriyor?",
    source: "Buhârî, Et'ime, 2 & Diyanet Çocuk"
  },
  {
    id: "ks11",
    emoji: "🧹",
    ageGroup: "7-12 Yaş",
    category: "Vefa & Değer Vermek",
    title: "Mescidi Süpüren Ümmü Mihcen'i Unutmayan Vefa",
    story: "Medine'de Mescid-i Nebevî'yi gönüllü olarak süpürüp temizleyen Ümmü Mihcen adında yoksul ve yaşlı bir hanım sahabe vardı. Birkaç gün mescitte görünmeyince Peygamber Efendimiz hemen onu sordu. Sahabeler onun gece vefat ettiğini, Peygamberimizi rahatsız etmemek için sessizce defnettiklerini söylediler. Peygamberimiz 'Bana neden haber vermediniz?' diyerek üzüldü, hemen onun kabrine gidip onun için özel olarak dua etti ve yaptığı temizlik hizmetinin Allah katında ne kadar değerli olduğunu anlattı.",
    lesson: "Toplumda sessizce iyilik ve temizlik yapan her insan çok kıymetlidir; onların emeğine vefa ve saygı göstermeliyiz.",
    didYouKnow: "İslam'da 'Temizlik imanın yarısıdır' buyrulmuş ve ortak kullanım alanlarını temiz tutmak büyük bir ibadet sayılmıştır.",
    actionTip: "Okulundaki temizlik görevlilerine ve öğretmenlerine gülümseyerek 'Kolay gelsin, teşekkür ederiz' de.",
    familyQuestion: "Okulumuzu, sokağımızı ve camimizi temiz tutan insanların işini kolaylaştırmak için neler yapabiliriz?",
    source: "TDV İslâm Ansiklopedisi & Hadislerle İslam, Cilt 4"
  },
  {
    id: "ks12",
    emoji: "🐱",
    ageGroup: "7-12 Yaş",
    category: "Hayvan Sevgisi",
    title: "Kediciğin Babası: Ebû Hüreyre ve Peygamberimizin Kedisi",
    story: "Ashâb-ı Suffe'den Abdurrahman adındaki genç sahabe hayvanları o kadar çok severdi ki, sokakta bulduğu minik bir yavru kediyi üşümesin diye cübbesinin yeninde taşır, onunla oynar ve beslerdi. Peygamber Efendimiz onu kediyle görünce gülümsedi ve ona 'Ebû Hüreyre' yani 'Kediciğin Babası' diye seslendi. O günden sonra bu güzel sahabe hep bu şefkat dolu isimle anıldı.",
    lesson: "Hayvanlara şefkat göstermek, onları korumak ve incitmemek müminin en güzel özelliklerindendir.",
    didYouKnow: "Ebû Hüreyre (r.a.) hem hayvan sevgisiyle hem de Peygamberimizden en çok hadis öğrenip bize ulaştıran sahabe olmasıyla tanınır.",
    actionTip: "Çevrendeki bir hayvanı gözlemle ve arkadaşlarına hayvanları korumanın önemini anlat.",
    familyQuestion: "Ebû Hüreyre'nin bu güzel lakabı bize Peygamberimizin hayvan sevgisi hakkında ne anlatıyor?",
    source: "TDV İslâm Ansiklopedisi, 'Ebû Hüreyre' Maddesi"
  }
];

export const kidsYoungSahabesData = [
  {
    id: "ys1",
    name: "Genç Hz. Ali (r.a.)",
    ageTitle: "10 Yaşında İlk Çocuk Müslüman",
    virtue: "Cesaret ve İlim",
    emoji: "🦁",
    story: "Peygamber Efendimiz'in evinde büyüyen Hz. Ali, henüz 10 yaşındayken onun güzel ahlakına hayran kalarak çocuklar arasında ilk Müslüman oldu. Hicret gecesinde bile emanetleri sahiplerine teslim etmek için büyük bir cesaret gösterdi.",
    quote: "Doğruluktan ve ilim öğrenmekten asla ayrılmamak."
  },
  {
    id: "ys2",
    name: "Enes b. Mâlik (r.a.)",
    ageTitle: "10 Yıl Peygamberimizin Yanında Yetişen Çocuk",
    virtue: "Nezaket ve Sır Tutma",
    emoji: "🌿",
    story: "10 yaşından itibaren Peygamberimizin yanında büyüdü. Bir gün Peygamberimiz onu bir işe gönderdiğinde annesine bile 'Bu Peygamberimizin sırrıdır, kimseye söyleyemem' diyerek emanete ne kadar sadık olduğunu gösterdi.",
    quote: "Bize verilen bir sırrı ve görevi titizlikle korumak."
  },
  {
    id: "ys3",
    name: "Esma bint Ebû Bekir (r.anhâ)",
    ageTitle: "Hicret Yolunun Cesur Genç Kızı",
    virtue: "Yardımseverlik ve Cesaret",
    emoji: "🎒",
    story: "Peygamberimiz ve babası Hz. Ebû Bekir Sevr Mağarası'ndayken onlara geceleri yiyecek taşıdı. Yiyecek tulumunu bağlamak için kendi kuşağını ikiye böldüğü için Peygamberimiz ona 'İki Kuşaklı' (Zâtü'n-Nitâkayn) unvanıyla dua etti.",
    quote: "Zor zamanlarda ailemize ve doğru işlere cesaretle destek olmak."
  },
  {
    id: "ys4",
    name: "Zeyd b. Sâbit (r.a.)",
    ageTitle: "13 Yaşında Dil Öğrenen Genç Âlim",
    virtue: "Okuma ve Çalışkanlık",
    emoji: "🖋️",
    story: "Medine'de okuma-yazmaya ve ilme çok meraklı bir çocuktu. Peygamberimiz ondan yabancı dilleri öğrenmesini isteyince birkaç hafta içinde yeni bir yazı dilini öğrendi ve Kur'an-ı Kerim'in en önemli vahiy kâtiplerinden biri oldu.",
    quote: "Kitap okumayı, yazı yazmayı ve yeni diller öğrenmeyi çok sevmek."
  },
  {
    id: "ys5",
    name: "Mus'ab b. Umeyr (r.a.)",
    ageTitle: "Medine'nin Genç Öğretmeni",
    virtue: "Tatlı Dil ve Fedakârlık",
    emoji: "📖",
    story: "Mekke'nin en zengin ve şık giyimli genciyken her şeyini bırakıp İslam'ı seçti. Peygamberimiz onu Medine'ye ilk öğretmen olarak gönderdi. Onun tatlı dili ve güler yüzü sayesinde bütün Medine İslam'ı sevdi.",
    quote: "Bildiklerimizi arkadaşlarımıza kırmadan, tatlı dille anlatmak."
  },
  {
    id: "ys6",
    name: "Hz. Fâtıma (r.anhâ)",
    ageTitle: "Babasının En Şefkatli Destekçisi",
    virtue: "Şefkat ve Vefa",
    emoji: "🌸",
    story: "Daha küçük bir kız çocuğuyken Mekke'de babası Hz. Muhammed'e (s.a.v.) yapılan haksızlıklarda hep babasının yanında durdu, onun tozlanan omuzlarını minik elleriyle temizleyip teselli etti.",
    quote: "Anne ve babamıza her zaman sevgi, saygı ve şefkatle destek olmak."
  }
];

export const kidsScenariosData = [
  {
    id: "sc1",
    category: "Emanet & Dürüstlük",
    emoji: "✏️",
    question: "Okul bahçesinde bir arkadaşının en sevdiği renkli kalemini yerde buldun. Etrafa baktın, kimse görmüyor. Ne yaparsın?",
    options: [
      { id: "a", text: "Çok güzelmiş deyip kendi kalemliğime koyarım.", isCorrect: false, feedback: "Başkasının eşyasını izinsiz almak doğru değildir. Gel bir daha düşünelim!" },
      { id: "b", text: "Öğretmenime veya sınıf başkanına teslim edip sahibinin bulunmasını sağlarım.", isCorrect: true, feedback: "Harika! Tıpkı 'El-Emîn' olan Peygamberimiz gibi emanete sahip çıktın. (+15 ⭐)" }
    ]
  },
  {
    id: "sc2",
    category: "Kardeşlik & Şefkat",
    emoji: "🛝",
    question: "Parkta oyun oynarken yeni taşınan bir çocuğun tek başına kenarda oturduğunu ve üzüldüğünü gördün. Ne yaparsın?",
    options: [
      { id: "a", text: "Yanına gidip gülümseyerek selam veririm ve 'Bizimle oynamak ister misin?' derim.", isCorrect: true, feedback: "Süpersin! Peygamberimiz yalnız ve üzgün olanların gönlünü almayı çok severdi. (+15 ⭐)" },
      { id: "b", text: "Onu tanımadığım için görmezden gelip oyunuma devam ederim.", isCorrect: false, feedback: "Yeni bir arkadaş kazanmak ve onu sevindirmek çok daha güzel olmaz mıydı?" }
    ]
  },
  {
    id: "sc3",
    category: "Çevre & İsraf",
    emoji: "🚰",
    question: "Elini yıkarken musluğun biraz fazla açık kaldığını fark ettin. Ne yaparsın?",
    options: [
      { id: "a", text: "Nasıl olsa su çok deyip açık bırakırım.", isCorrect: false, feedback: "Peygamberimiz akan bir nehir kenarında bile suyu israf etmememizi öğütlemiştir." },
      { id: "b", text: "Musluğu ihtiyacım kadar kısar, işim bitince sıkıca kapatırım.", isCorrect: true, feedback: "Aferin! Doğayı ve su kaynaklarımızı koruyarak sünnete uydun. (+15 ⭐)" }
    ]
  },
  {
    id: "sc4",
    category: "Sofra & Şükür",
    emoji: "🍲",
    question: "Akşam yemeğinde sofraya en çok sevdiğin yemek yerine daha az sevdiğin bir sebze yemeği geldi. Ne yaparsın?",
    options: [
      { id: "a", text: "'Ben bunu hiç sevmiyorum, yemeyeceğim!' diyerek sofrada surat asarım.", isCorrect: false, feedback: "Peygamberimiz hayatı boyunca hiçbir yemeğe kusur bulmamış ve emeğe saygı göstermiştir." },
      { id: "b", text: "Yemeği hazırlayan anneme/babama teşekkür eder, tabağıma yiyebileceğim kadar alıp Bismillah ile yerim.", isCorrect: true, feedback: "Çok güzel! Nimete ve emeğe saygı göstererek Peygamberimizin sofra sünnetini yaşadın. (+15 ⭐)" }
    ]
  },
  {
    id: "sc5",
    category: "Sabır & Öfke Kontrolü",
    emoji: "🧱",
    question: "Saatlerce uğraşıp yaptığın legonu küçük kardeşin yanlışlıkla çarpıp devirdi. Çok sinirlendin. Ne yaparsın?",
    options: [
      { id: "a", text: "Derin bir nefes alır, yanlışlıkla yaptığını bilerek ona bağırmam ve 'Gel birlikte yeniden yapalım' derim.", isCorrect: true, feedback: "Muhteşem! Peygamberimiz 'Gerçek kahraman öfkelendiğinde kendini tutabilendir' buyurmuştur. (+15 ⭐)" },
      { id: "b", text: "Ben de ona bağırır ve onun oyuncağını bozarım.", isCorrect: false, feedback: "Öfkeyle bağırmak hem kardeşini üzer hem de sorunu çözmez. Sakin kalmayı deneyelim!" }
    ]
  },
  {
    id: "sc6",
    category: "Doğruluk & Özür",
    emoji: "⚽",
    question: "Evde top oynarken yanlışlıkla masadaki vazoyu düşürüp kırdın. Annen içeriden 'Ne oldu?' diye seslendi. Ne yaparsın?",
    options: [
      { id: "a", text: "Korkup suçu kedinin veya kardeşimin üzerine atarım.", isCorrect: false, feedback: "Yalan söylemek hatayı daha da büyütür. Mümin her zaman doğru sözlü olur." },
      { id: "b", text: "Doğruyu söyleyip özür dilerim ve parçaları toplarken dikkatlice yardım ederim.", isCorrect: true, feedback: "Harika bir cesaret! Doğruyu söylemek ve özür dilemek en büyük erdemdir. (+15 ⭐)" }
    ]
  }
];

export const kidsGlossaryCards = [
  { term: "El-Emîn", subtitle: "En Güvenilir İnsan", meaning: "Hiç yalan söylemeyen, sözünde duran ve herkese güven veren insan. Peygamberimizin güzel lakabı.", example: "Ben de verdiğim sözü tutarak El-Emîn olan Peygamberimize benzerim.", emoji: "🛡️" },
  { term: "Ensar", subtitle: "Yardımsever Dostlar", meaning: "Medine'de evini, sofrasını ve oyuncaklarını misafir gelen arkadaşlarıyla paylaşan cömert Müslümanlar.", example: "Okulumuza yeni gelen arkadaşıma yardım ederek Ensar gibi davrandım.", emoji: "🤝" },
  { term: "Muhacir", subtitle: "İyilik Yolcuları", meaning: "Allah'a olan sevgilerini özgürce yaşamak için Mekke'den Medine'ye göç eden sabırlı Müslümanlar.", example: "Muhacirler zorluklara sabredip Ensar ile kardeş oldular.", emoji: "🐪" },
  { term: "Tebessüm", subtitle: "Sadaka Olan Gülümseme", meaning: "Kalpleri ısıtan tatlı gülümseme; Peygamberimizin her gün yaptığı en güzel iyiliklerden biri.", example: "Sabah aileme ve öğretmenime tebessüm ederek selam verdim.", emoji: "😊" },
  { term: "Îsâr", subtitle: "Cömertliğin Zirvesi", meaning: "Kendi ihtiyacı varken bile elindeki güzelliği arkadaşına ve kardeşine ikram edebilme cömertliği.", example: "Son kalan kurabiyeyi kardeşime ikram ederek îsâr ahlakını yaşadım.", emoji: "🎁" },
  { term: "Sıla-i Rahim", subtitle: "Akraba Sevgisi", meaning: "Dedemizi, ninemizi, teyzemizi, amcamızı ve tüm akrabalarımızı ziyaret edip halini hatırını sormak.", example: "Hafta sonu dedemi ve ninemi arayarak sıla-i rahim yaptım.", emoji: "👨‍👩‍👧‍👦" },
  { term: "Suffe", subtitle: "İlk İlim Okulu", meaning: "Medine'de Peygamberimizin mescidinin yanında kurulan, genç sahabelerin okuma ve ahlak öğrendiği okul.", example: "Biz de kitap okuyup güzel ahlak öğrenerek Suffe öğrencileri gibi oluruz.", emoji: "📚" },
  { term: "Şükür & Hamd", subtitle: "Teşekkür Bilinci", meaning: "Sahip olduğumuz sağlık, aile, yemek ve tüm güzellikler için 'Elhamdülillah' diyerek Allah'a teşekkür etmek.", example: "Yemeğimi bitirince Elhamdülillah diyerek şükrettim.", emoji: "🤲" }
];

// ==========================================
// 10. NEBEVÎ PUSULA (KİŞİSELLEŞTİRİLMİŞ NİYET ROTALARI)
// ==========================================
export const propheticCompassPaths = [
  {
    id: "pusula-huzur",
    intent: "Kalp Huzuru & Sekînet Arıyorum",
    subtitle: "Darlık, hüzün ve stres anlarında nebevî teselli",
    badge: "Sekînet & Tevekkül",
    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
    verseOrHadith: "Kalpler ancak Allah'ı anmakla huzur bulur. (Ra'd, 28)",
    reflection: "Hz. Peygamber (s.a.v.) Sevr Mağarası'nın en dar anında Hz. Ebû Bekir'e 'Üzülme, Allah bizimle beraberdir' buyurarak huzurun dış şartlarda değil, ilahi beraberlik bilincinde olduğunu öğretmiştir.",
    todayStep: "Bugün sizi kaygılandıran bir mesele için elinizden gelen tedbiri yazın, ardından derin bir nefes alarak 'Hasbünallâhu ve ni'me'l-vekîl' deyin.",
    targetTab: "duygu-durumu",
    targetLabel: "Duygu Rehberine Git"
  },
  {
    id: "pusula-ahlak",
    intent: "Dilimi & Ahlakımı Güzelleştirmek İstiyorum",
    subtitle: "İnsanlarla iletişimde hilm, nezaket ve tebessüm",
    badge: "Hilm & Nezaket",
    arabic: "إِنَّمَا بُعِثْتُ لِأُتَمِّمَ مَكَارِمَ الْأَخْلَاقِ",
    verseOrHadith: "Ben ancak güzel ahlakı tamamlamak için gönderildim. (Muvatta', Hüsnü'l-Huluk, 8)",
    reflection: "Enes b. Mâlik (r.a.), on yıl hizmet ettiği Peygamber Efendimiz'in kendisine bir kez bile 'Öf!' demediğini, kimsenin yüzüne karşı kusur vurmadığını ve daima tebessümle muhatap olduğunu aktarır.",
    todayStep: "Bugün muhatap olduğunuz herkese tüm dikkatinizle yönelin, sözlerini kesmeden dinleyin ve ilk selamı siz verin.",
    targetTab: "semail-i-serif",
    targetLabel: "Şemâil-i Şerîf'i İncele"
  },
  {
    id: "pusula-ilim",
    intent: "İlim, Hikmet & İstikamet Arıyorum",
    subtitle: "Faydalı bilgi, tefekkür ve ortak akıl (İstişare)",
    badge: "İlim & İstişare",
    arabic: "رَبِّ زِدْنِي عِلْمًا",
    verseOrHadith: "Rabbim! İlmimi ve hikmetimi artır. (Tâhâ, 114)",
    reflection: "Medine'ye hicret edildiğinde ilk kurulan mekanlardan biri Ashâb-ı Suffe mektebi olmuştur. Muâz b. Cebel ve Zeyd b. Sâbit gibi genç sahabeler ilimle toplumun rehberi haline gelmiştir.",
    todayStep: "Bugün öğrendiğiniz bir sünneti veya sahabe kıssasını ailenizle akşam sofrasında paylaşarak bir ilim halkası kurun.",
    targetTab: "sahabeler",
    targetLabel: "Ashâb-ı Kirâm'ı Keşfet"
  },
  {
    id: "pusula-vefa",
    intent: "Aile & Kardeşlik Bağlarını Güçlendirmek İstiyorum",
    subtitle: "Sıla-i Rahim, vefa ve diğergamlık (Îsâr)",
    badge: "Vefa & Îsâr",
    arabic: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
    verseOrHadith: "Sizin en hayırlınız, ailesine karşı en hayırlı olanınızdır. (Tirmizî, Menâkıb, 63)",
    reflection: "Peygamber Efendimiz vefatından yıllar sonra bile Hz. Hatice validemizin dostlarına ikramlar gönderir, Ensar ve Muhacir arasındaki kardeşlik hukukunu vefa üzerine bina ederdi.",
    todayStep: "Bugün ihmal ettiğiniz bir akrabanızı veya dostunuzu hiçbir karşılık beklemeden sadece halini sormak için arayın.",
    targetTab: "tematik-ahlak",
    targetLabel: "Tematik Kıssalara Git"
  }
];

// ==========================================
// 11. KLASİK HİLYE-İ ŞERÎF LEVHASI VERİSİ
// ==========================================
export const hilyeSerifData = {
  besmele: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  gobekTitle: "Hz. Ali (r.a.) Rivayetiyle Şemâil ve Ahlak-ı Nebî",
  gobekText:
    "Hz. Peygamber (s.a.v.) ne çok uzun ne de kısa boyluydu; orta boylu ve nur yüzlüydü. Yüzünde ayın on dördü gibi parlak bir nur vardı. İnsanların en cömerdi, en doğru sözlüsü, en yumuşak huylusu ve arkadaşlığı en güzel olanıydı. Onu ansızın gören kimse vakarından dolayı heybet duyar; onunla tanışıp sohbet eden ise ona gönülden muhabbet bağlardı.",
  ayetArabic: "وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِينَ",
  ayetMeaning: "Seni ancak âlemlere rahmet olarak gönderdik. (Enbiyâ Suresi, 107. Ayet)",
  corners: ["Hz. Ebû Bekir (r.a.)", "Hz. Ömer (r.a.)", "Hz. Osman (r.a.)", "Hz. Ali (r.a.)"],
  source: "Tirmizî, Şemâilü'n-Nebî & TDV İslâm Ansiklopedisi, 'Hilye' Maddesi, Cilt 18"
};

// ==========================================
// 12. YETİŞKİNLER İÇİN İNTERAKTİF AHLAK İKİLEMLERİ (VAKA ANALİZİ)
// ==========================================
export const adultVakaScenarios = [
  {
    id: "vaka-1",
    tag: "Ticaret & İş Etiği",
    title: "Satışta Fark Edilmeyen Kusur İkilemi",
    situation:
      "Aracınızı veya bir ürününüzü satarken alıcının fark etmediği, ancak ileride masraf çıkarabilecek gizli bir kusur olduğunu biliyorsunuz. Piyasada herkes 'Alıcı kontrol etsin' diyerek susmayı normalleştiriyor.",
    options: [
      {
        id: "opt-1a",
        label: "Fiyatı biraz düşürürüm ama kusuru özellikle söylemem; sorarsa söylerim.",
        isProphetic: false,
        analysis:
          "Kusuru gizleyerek satış yapmak bereketi ortadan kaldırır. Hz. Peygamber 'Bir müslümanın, kusurunu açıkça belirtmeden ayıplı bir malı satması helal olmaz' buyurmuştur.",
        citation: "Hadislerle İslam, Cilt 6, s. 92"
      },
      {
        id: "opt-1b",
        label: "Alıcı sormadan önce tüm kusurları şeffafça açıklar, helalleşerek satış yaparım.",
        isProphetic: true,
        analysis:
          "Nebevî ticaret ahlakına tam uygun davranış! Hz. Peygamber 'Alıcı ve satıcı doğru söyler ve kusuru açıklarlarsa alışverişleri bereketlenir; gizler ve yalan söylerlerse bereketi silinir' buyurmuştur.",
        citation: "Buhârî, Büyû', 19 & Hadislerle İslam, Cilt 6"
      }
    ]
  },
  {
    id: "vaka-2",
    tag: "Dijital Çağ & Dil Ahlakı",
    title: "Mesaj Gruplarında İfşa ve Zan",
    situation:
      "Bulunduğunuz bir iş veya komşu mesajlaşma grubunda, tanıdığınız bir kişi hakkında doğruluğu kesin olmayan, küçük düşürücü bir iddia paylaşıldı ve herkes üzerine yorum yapıyor.",
    options: [
      {
        id: "opt-2a",
        label: "İddianın doğrulanmadığını hatırlatır, gıybet ve tecessüse ortak olmamak için konuyu kapatırım.",
        isProphetic: true,
        analysis:
          "Tam bir mümin feraseti! Hz. Peygamber 'Kim yanında din kardeşinin onuru zedelenirken onu savunursa, Allah da onu korur' buyurmuş; Hucurât Suresi 6. ayet de haberi tahkik etmeyi emretmiştir.",
        citation: "Kur'an Yolu Tefsiri, Hucurât 6-12"
      },
      {
        id: "opt-2b",
        label: "Yorum yazmam ama mesajı başka bir arkadaşıma 'Bak ne diyorlar' diye iletirim.",
        isProphetic: false,
        analysis:
          "Doğrulanmamış bir sözü yaymak da sorumluluk doğurur. Efendimiz 'Kişiye her duyduğunu anlatması yalan olarak yeter' (Müslim, Mukaddime, 5) buyurmuştur.",
        citation: "Hadislerle İslam, Cilt 3, s. 325"
      }
    ]
  },
  {
    id: "vaka-3",
    tag: "Sosyal İlişkiler & Hilm",
    title: "Haksız ve Kaba Bir Üslupla Karşılaşmak",
    situation:
      "Trafikte veya iş yerinde bir kişi kendi hatası olduğu halde size yüksek sesle ve kaba bir üslupla yüklendi. Çevredeki insanlar sizin vereceğiniz tepkiyi izliyor.",
    options: [
      {
        id: "opt-3a",
        label: "Ses tonumu yükseltmeden vakurla hakkımı ifade eder, kaba üsluba aynı kabalıkla karşılık vermem.",
        isProphetic: true,
        analysis:
          "Nebevî hilm ahlakı! Peygamber Efendimiz kendisine sertçe cübbesinden çeken bedevîye bile tebessümle ve yumuşaklıkla mukabele etmiş; 'Kötülüğü en güzel tavırla sav' (Fussilet, 34) ilkesini yaşamıştır.",
        citation: "Kur'an Yolu Tefsiri, Fussilet Suresi 34. Ayet"
      },
      {
        id: "opt-3b",
        label: "Ezilmemek için ondan daha sert bir ses tonuyla karşılık verip haddini bildiririm.",
        isProphetic: false,
        analysis:
          "Kabalığa kabalıkla karşılık vermek nefsi tatmin etse de nebevî ölçüyü zedeler. 'Gerçek pehlivan öfkelendiğinde nefsine hâkim olandır' hadisi bu anlar için rehberdir.",
        citation: "Hadislerle İslam, Cilt 3, s. 245"
      }
    ]
  }
];

// ==========================================
// 13. NEBEVÎ AHLAK YOLCULUĞU (ADIM ADIM MERTEBELER)
// ==========================================
export const sunnahJourneySteps = [
  { step: 1, threshold: 0, title: "Niyet & Başlangıç", desc: "Sünnet iklimine ilk adım ve halis niyet" },
  { step: 2, threshold: 3, title: "Tebessüm & Selam", desc: "3 içerik mütalaası ve nebevî nezaket" },
  { step: 3, threshold: 7, title: "Suffe Talebesi", desc: "7 içerik tamamlandı • İlim ve tefekkür halkası" },
  { step: 4, threshold: 12, title: "Hilm & İstikamet", desc: "12 içerik tamamlandı • Duygu ve üslup dengesi" },
  { step: 5, threshold: 18, title: "Vefa & Îsâr Ehli", desc: "18+ içerik tamamlandı • Yaşayan sünnet bilinci" }
];

// ==========================================
// 14. NEBEVÎ DUALAR VE ZİKİRLER REHBERİ
// ==========================================
export const propheticPrayersData = [
  {
    id: "dua-1",
    category: "Sabah & Akşam",
    title: "Sabah Uyanınca Okunan Şükür Duası",
    arabic: "الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    pronunciation: "Elhamdülillâhillezî ahyânâ ba'de mâ emâtenâ ve ileyhi'n-nüşûr.",
    meaning: "Bizi öldükten (uykudan) sonra dirilten Allah'a hamdolsun. Dönüş ancak O'nadır.",
    occasion: "Hz. Peygamber (s.a.v.) sabah uykudan uyandığında güne yeni bir hayat bilinci ve şükürle başlamak için bu duayı okurdu.",
    source: "Buhârî, Daavât, 7 & Hadislerle İslam, Cilt 1, s. 95"
  },
  {
    id: "dua-2",
    category: "Sabah & Akşam",
    title: "Gece Uykuya Geçerken Emanet Duası",
    arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
    pronunciation: "Bismikellâhümme emûtü ve ahyâ.",
    meaning: "Allah'ım! Senin isminle ölür (uyur) ve Senin isminle dirilir (uyanırım).",
    occasion: "Günün muhasebesini yaptıktan sonra abdestli olarak sağ tarafına yatan Efendimiz, ruhunu Allah'a emanet ederek uykuya geçerdi.",
    source: "Buhârî, Daavât, 8 & Hadislerle İslam, Cilt 8, s. 52"
  },
  {
    id: "dua-3",
    category: "Huzur & Sıkıntı Anı",
    title: "Üzüntü, Kaygı ve Darlık Anında Ferahlık Duası",
    arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ",
    pronunciation: "Allâhümme innî eûzü bike mine'l-hemmi ve'l-hazen, ve'l-aczi ve'l-kesel.",
    meaning: "Allah'ım! Kederden, hüzünden, acizlikten ve tembellikten Sana sığınırım.",
    occasion: "Enes b. Mâlik (r.a.), Hz. Peygamber'in gönül darlığı ve gelecek kaygısına karşı bu duayı sıkça okuduğunu nakletmiştir.",
    source: "Buhârî, Daavât, 36 & Hadislerle İslam, Cilt 2"
  },
  {
    id: "dua-4",
    category: "Huzur & Sıkıntı Anı",
    title: "Kalp Sabitliği ve İstikamet Duası",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    pronunciation: "Yâ Mukallibe'l-kulûb! Sebbit kalbî alâ dînik.",
    meaning: "Ey kalpleri hâlden hâle çeviren Allah'ım! Kalbimi dinin ve güzel ahlakın üzere sabit kıl.",
    occasion: "Hz. Ümmü Seleme (r.anhâ), Peygamber Efendimiz'in en çok yaptığı duanın bu istikamet niyazı olduğunu bildirmiştir.",
    source: "Tirmizî, Kader, 7 & Kur'an Yolu Tefsiri"
  },
  {
    id: "dua-5",
    category: "İlim, Aile & Bereket",
    title: "Faydalı İlim, Helal Rızık ve Salih Amel Duası",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
    pronunciation: "Allâhümme innî es'elüke ilmen nâfian ve rızkan tayyiben ve amelen mütekabbelen.",
    meaning: "Allah'ım! Senden faydalı bir ilim, helal ve temiz bir rızık ve kabul edilmiş salih bir amel dilerim.",
    occasion: "Hz. Peygamber her sabah namazının ardından güne başlarken bu üç temel nimeti Yüce Allah'tan niyaz ederdi.",
    source: "İbn Mâce, İkâme, 32 & Hadislerle İslam, Cilt 1"
  },
  {
    id: "dua-6",
    category: "İlim, Aile & Bereket",
    title: "Hayırlı Eş, Evlat ve Aile Huzuru Duası",
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا",
    pronunciation: "Rabbenâ heb lenâ min ezvâcinâ ve zürriyyâtinâ kurrate a'yünin vec'alnâ li'l-müttakîne imâmâ.",
    meaning: "Rabbimiz! Bize eşlerimizden ve nesillerimizden göz aydınlığı olacak salih kimseler bağışla ve bizi takva sahiplerine öncü kıl.",
    occasion: "Kur'an-ı Kerim'de Rahmân'ın has kullarının (İbâdü'r-Rahmân) aile yuvası için ettikleri örnek dua.",
    source: "Kur'an Yolu Tefsiri, Furkân Suresi 74. Ayet"
  },
  {
    id: "dua-7",
    category: "Günlük Hayat & İbadet",
    title: "Evden Çıkarken Tevekkül Duası",
    arabic: "بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ وَلَا حَوْلَ وَلَا قُوَّتَ إِلَّا بِاللَّهِ",
    pronunciation: "Bismillâh, tevekkeltü alellâh, ve lâ havle ve lâ kuvvete illâ billâh.",
    meaning: "Allah'ın adıyla çıkıyor ve Allah'a tevekkül ediyorum. Güç ve kuvvet ancak Allah'ın yardımıyladır.",
    occasion: "Bu duayı okuyarak evden çıkan kimseye 'Sana hidayet verildi, korundun ve ihtiyaçların görüldü' müjdesi verilmiştir.",
    source: "Ebû Dâvûd, Edeb, 102 & Hadislerle İslam, Cilt 3"
  },
  {
    id: "dua-8",
    category: "Günlük Hayat & İbadet",
    title: "Hz. Muâz'a Öğretilen Şükür ve İbadet Duası",
    arabic: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
    pronunciation: "Allâhümme einnî alâ zikrike ve şükrike ve hüsni ibâdetik.",
    meaning: "Allah'ım! Seni zikretmek, Sana şükretmek ve Sana en güzel biçimde kulluk etmek için bana yardım eyle.",
    occasion: "Hz. Peygamber'in genç sahabe Muâz b. Cebel'e 'Seni çok seviyorum, bu duayı asla terk etme' diyerek öğrettiği dua.",
    source: "Ebû Dâvûd, Vitir, 26 & TDV İslâm Ansiklopedisi"
  }
];

// ==========================================
// 15. TEMEL AHLAK HADİSLERİ SEÇKİSİ (40 HADİS GELENEĞİ)
// ==========================================
export const fortyHadithSelectionData = [
  {
    id: "hd-1",
    number: "1. Hadis",
    topic: "Niyet ve İhlas",
    title: "Ameller Niyetlere Göredir",
    arabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى",
    translation: "Ameller ancak niyetlere göredir ve herkese yalnızca niyet ettiği şey vardır.",
    vurudStory: "Hz. Ömer'in (r.a.) minberden naklettiği bu hadis, Medine'ye hicret ederken dünyevi bir gaye ile Allah ve Resûlü'nün rızasını hedefleyenlerin farkını açıklamak üzere irad edilmiştir.",
    commentary: "İslam ahlakında her davranışın değerini belirleyen temel ölçü halis niyettir. Gösterişten uzak, yalnızca Allah rızası için yapılan küçük bir iyilik bile büyük değer kazanır.",
    source: "Buhârî, Bed'ü'l-Vahy, 1 • Nevevî Kırk Hadis, No: 1"
  },
  {
    id: "hd-2",
    number: "2. Hadis",
    topic: "Güven ve Barış",
    title: "Elinden ve Dilinden Emin Olunan Müslüman",
    arabic: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    translation: "Gerçek Müslüman, diğer insanların onun elinden ve dilinden güvende olduğu kimsedir.",
    vurudStory: "Bir sahabenin 'Ey Allah'ın Resûlü! Müslümanların en faziletlisi kimdir?' sorusu üzerine Peygamber Efendimiz bu evrensel toplumsal güven ölçüsünü bildirmiştir.",
    commentary: "Mümin; çevresine korku veya zarar veren değil, sözüyle ve davranışıyla herkese güven ve emniyet aşılayan insandır.",
    source: "Buhârî, Îmân, 4 • Hadislerle İslam, Cilt 1"
  },
  {
    id: "hd-3",
    number: "3. Hadis",
    topic: "Diğergamlık ve Kardeşlik",
    title: "Kendin İçin İstediğini Kardeşin İçin de İstemek",
    arabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ",
    translation: "Sizden biriniz kendisi için arzu ettiği hayrı din kardeşi için de arzu etmedikçe olgun mümin olamaz.",
    vurudStory: "Enes b. Mâlik (r.a.) tarafından nakledilen bu hadis, Medine'de kurulan kardeşlik toplumunun kalbî ölçüsünü ortaya koymak üzere buyrulmuştur.",
    commentary: "Bencillik ve hasetten arınarak toplumun huzurunu kendi huzuru gibi görmek nebevî kardeşlik ahlakının temelidir.",
    source: "Buhârî, Îmân, 7 • Nevevî Kırk Hadis, No: 13"
  },
  {
    id: "hd-4",
    number: "4. Hadis",
    topic: "Merhamet",
    title: "Yeryüzündekilere Merhamet Etmek",
    arabic: "الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَٰنُ ارْحَمُوا مَنْ فِي الْأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ",
    translation: "Merhamet edenlere Rahmân olan Allah merhamet eder. Siz yeryüzündekilere merhamet edin ki göktekiler de size merhamet etsin.",
    vurudStory: "Abdullah b. Amr'ın (r.a.) naklettiği bu hadis, Peygamberimizin çocuklara ve canlılara gösterdiği şefkati hayretle karşılayan katı kalpli kimselere cevaben söylenmiştir.",
    commentary: "Nebevî merhamet yalnızca insanları değil; hayvanları, bitkileri ve tüm mahlûkatı kuşatan evrensel bir şefkat ilkesidir.",
    source: "Ebû Dâvûd, Edeb, 58 • Tirmizî, Birr, 16"
  },
  {
    id: "hd-5",
    number: "5. Hadis",
    topic: "İstikamet",
    title: "Allah'a İman Et ve Dosdoğru Ol",
    arabic: "قُلْ آمَنْتُ بِاللَّهِ ثُمَّ اسْتَقِمْ",
    translation: "'Allah'a iman ettim' de, sonra da dosdoğru ol!",
    vurudStory: "Tâifli sahabe Süfyân b. Abdullah es-Sekafî (r.a.), 'Ey Allah'ın Resûlü! Bana İslam hakkında öyle bir söz söyle ki sizden sonra kimseye sorma ihtiyacım kalmasın' dediğinde Efendimiz bu cevabı vermiştir.",
    commentary: "İman ile ahlaki tutarlılığı (istikamet) birbirinden ayrılmaz iki bütün olarak birleştiren en özlü nebevî düsturdur.",
    source: "Müslim, Îmân, 62 • Nevevî Kırk Hadis, No: 21"
  },
  {
    id: "hd-6",
    number: "6. Hadis",
    topic: "Hayâ ve Edep",
    title: "Hayâ İmandandır",
    arabic: "الْحَيَاءُ لَا يَأْتِي إِلَّا بِخَيْرٍ",
    translation: "Hayâ (utanma ve edep duygusu) insana yalnızca hayır ve güzellik getirir.",
    vurudStory: "Ensar'dan bir kimsenin, aşırı utangaç olan kardeşini 'Fazla hayâ sana zarar veriyor' diye azarladığını duyan Hz. Peygamber, 'Onu kendi hâline bırak, çünkü hayâ imandandır' buyurmuştur.",
    commentary: "Hayâ, insanı çirkin söz ve davranışlardan koruyan içsel bir ahlak kalkanıdır.",
    source: "Buhârî, Edeb, 77 • Müslim, Îmân, 60"
  },
  {
    id: "hd-7",
    number: "7. Hadis",
    topic: "Zaman ve Sorumluluk",
    title: "Faydasız İşleri Terk Etmek",
    arabic: "مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيهِ",
    translation: "Kişinin kendisini ilgilendirmeyen faydasız işleri ve sözleri terk etmesi, İslam'ının güzelliğindendir.",
    vurudStory: "Hz. Hüseyin (r.a.) ve Ebû Hüreyre (r.a.) tarafından rivayet edilen bu hadis, müminin zamanını ve zihnini lüzumsuz tartışmalardan korumasını öğütlemek üzere irad edilmiştir.",
    commentary: "Ömür ve dikkat sermayesini dedikodu, tecessüs ve boş meşgaleler yerine faydalı ilim ve salih amele yöneltmeyi öğretir.",
    source: "Tirmizî, Zühd, 11 • Nevevî Kırk Hadis, No: 12"
  },
  {
    id: "hd-8",
    number: "8. Hadis",
    topic: "Güzel Ahlak ve Takva",
    title: "İnsanlara Güzel Ahlakla Muamele Etmek",
    arabic: "اتَّقِ اللَّهَ حَيْثُمَا كُنْتَ وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ",
    translation: "Nerede olursan ol Allah'a karşı sorumluluğunun bilincinde ol; kötülüğün ardından hemen bir iyilik yap ki onu silsin ve insanlara güzel ahlakla muamele et.",
    vurudStory: "Hz. Peygamber, Ebû Zer el-Gıfârî (r.a.) ve Muâz b. Cebel'e (r.a.) hayat boyu rehber edinecekleri üç temel nasihat olarak bu hadisi vasiyet etmiştir.",
    commentary: "Kulun hem Yaratıcı'sı ile hem kendi vicdanıyla hem de toplumla olan ilişkisini üç cümlede özetleyen nebevî rehber.",
    source: "Tirmizî, Birr, 55 • Nevevî Kırk Hadis, No: 18"
  }
];

// ==========================================
// 16. VEDA HUTBESİ & MEDİNE VESİKASI (EVRENSEL İLKELER)
// ==========================================
export const universalDeclarationsData = [
  {
    id: "evr-1",
    document: "Veda Hutbesi (M. 632 • Arafat)",
    articleNo: "1. İlke",
    title: "Can, Mal ve Onur Dokunulmazlığı",
    quote: "Ey insanlar! Bu gününüz, bu ayınız ve bu şehriniz (Mekke) nasıl mukaddes ve dokunulmaz ise; kanlarınız, mallarınız ve ırzlarınız (onurunuz) da birbirinize öylece haramdır, dokunulmazdır.",
    principle: "İnsan hayatı, mülkiyet hakkı ve şahsiyet onuru hiçbir gerekçeyle ihlal edilemez evrensel koruma altındadır.",
    source: "Buhârî, Hac, 132 & TDV İslâm Ansiklopedisi, 'Vedâ Hutbesi' Maddesi"
  },
  {
    id: "evr-2",
    document: "Veda Hutbesi (M. 632 • Arafat)",
    articleNo: "2. İlke",
    title: "Irkçılığın Reddi ve İnsanların Eşitliği",
    quote: "Ey insanlar! Rabbiniz birdir, babanız da birdir; hepiniz Âdem'densiniz, Âdem ise topraktandır. Arap'ın Arap olmayana, beyazın siyaha hiçbir üstünlüğü yoktur; üstünlük ancak takva ve güzel ahlak iledir.",
    principle: "Soy, kabile, renk ve sınıf ayrımcılığını kökünden reddeden evrensel eşitlik bildirgesi.",
    source: "İbn Hanbel, V, 411 & Hadislerle İslam, Cilt 3"
  },
  {
    id: "evr-3",
    document: "Veda Hutbesi (M. 632 • Arafat)",
    articleNo: "3. İlke",
    title: "Kadın Hakları ve Aile Emaneti",
    quote: "Ey insanlar! Kadınların haklarını gözetmenizi ve bu hususta Allah'tan korkmanızı tavsiye ederim. Siz kadınları Allah'ın emaneti olarak aldınız. Sizin onlar üzerinde hakkınız, onların da sizin üzerinizde hakları vardır.",
    principle: "Aile yuvasını karşılıklı hak, nezaket ve ilahi emanet bilinci üzerine inşa eder.",
    source: "Müslim, Hac, 147 & Hadislerle İslam, Cilt 5"
  },
  {
    id: "evr-4",
    document: "Veda Hutbesi (M. 632 • Arafat)",
    articleNo: "4. İlke",
    title: "Kan Davalarının ve Ekonomik Sömürünün (Faizin) Kaldırılması",
    quote: "Cahiliye devrinden kalma her türlü ribâ (faiz) ve kan davası tamamen kaldırılmış, ayaklarımın altına alınmıştır. İlk kaldırdığım faiz amcam Abbas'ın faizi, ilk kaldırdığım kan davası da kendi akrabamız İbn Rebîa'nın kan davasıdır.",
    principle: "Hukuk ve adaleti tesis ederken kuralı önce kendi yakınlarından başlatma dürüstlüğünü ortaya koyar.",
    source: "Müslim, Hac, 147 & TDV İslâm Ansiklopedisi"
  },
  {
    id: "evr-5",
    document: "Medine Sözleşmesi (M. 622 • Medine)",
    articleNo: "5. İlke",
    title: "Birlikte Yaşama Hukuku ve Toplumsal Barış",
    quote: "Medine'de yaşayan Müslümanlar ve diğer topluluklar, şehrin savunulmasında, toplumsal barışın korunmasında ve haksızlığa karşı yardımlaşmada ortak sorumluluk taşırlar.",
    principle: "Farklı inanç ve kültürlerin yazılı bir hukuk sözleşmesi etrafında barış içinde bir arada yaşama modelini kurmuştur.",
    source: "TDV İslâm Ansiklopedisi, 'Medine Vesikası' Maddesi, Cilt 28"
  },
  {
    id: "evr-6",
    document: "Medine Sözleşmesi (M. 622 • Medine)",
    articleNo: "6. İlke",
    title: "Zulme Karşı Mazlumun Yanında Durmak ve Suçun Şahsiliği",
    quote: "Hiç kimse bir başkasının işlediği suçtan dolayı sorumlu tutulamaz. Haksızlığa ve zulme uğrayan kimseye, kim olduğuna bakılmaksızın yardım edilecektir.",
    principle: "Suçun şahsiliği ve mazlumun kimliğine bakılmaksızın korunması ilkesini anayasal güvenceye bağlamıştır.",
    source: "İbn Hişâm, es-Sîre & TDV İslâm Ansiklopedisi, Cilt 28"
  }
];

// ==========================================
// 17. 8 HAFTALIK AİLE VE OKUL DERS HALKASI MÜFREDATI
// ==========================================
export const weeklyCurriculumData = [
  {
    id: "hafta-1",
    weekNo: "1. Hafta",
    theme: "Niyet, Doğruluk ve Güven (El-Emîn Ahlakı)",
    hadith: "Ameller niyetlere göredir. • Bizi aldatan bizden değildir.",
    sahabe: "Hz. Ebû Bekir (r.a.) — Sarsılmaz Sadakat ve Doğruluk",
    reading: "Mekke'de Hacerülesved Hakemliği ve El-Emîn Sıfatı",
    discussion: "İnsanların bize gözü kapalı güvenebilmesi için günlük konuşmalarımızda ve sözlerimizde nelere dikkat etmeliyiz?",
    practice: "Bu hafta verilen her sözü ve buluşma saatini dakika şaşmadan yerine getirmek."
  },
  {
    id: "hafta-2",
    weekNo: "2. Hafta",
    theme: "Tebessüm, Selamlaşma ve Gönül Alma",
    hadith: "Din kardeşinin yüzüne tebessüm etmen senin için bir sadakadır.",
    sahabe: "Enes b. Mâlik (r.a.) — 10 Yıl Boyunca Hiç 'Öf' Denilmeyen Nezaket İklimi",
    reading: "Kuşu Ölen Küçük Umeyr'e Peygamberimizin Şefkati",
    discussion: "Evimizde ve iş/okul ortamımızda gerginliği azaltıp muhabbeti artırmak için selamlaşma dilimizi nasıl güzelleştirebiliriz?",
    practice: "Her sabah ev halkına ve karşılaşılan kişilere güler yüzle ilk selamı vermek."
  },
  {
    id: "hafta-3",
    weekNo: "3. Hafta",
    theme: "Öfke Kontrolü, Hilm ve Affedicilik",
    hadith: "Gerçek pehlivan güreşte yenen değil, öfkelendiği anda nefsine hâkim olandır.",
    sahabe: "Hz. Ömer (r.a.) — Hakkaniyet, Nefis Muhasebesi ve Tevazu",
    reading: "Tâif Yolculuğu ve İncinmelere Karşı Merhamet Duası",
    discussion: "Öfkelendiğimiz anda ilk 10 saniyeyi doğru yönetmek için Peygamberimizin öğrettiği hangi adımları uygulayabiliriz?",
    practice: "Tartışma anında ses tonunu yükseltmemek, oturmak ve sükûnetle dinlemek."
  },
  {
    id: "hafta-4",
    weekNo: "4. Hafta",
    theme: "Paylaşma, Cömertlik ve Kardeşlik (Îsâr)",
    hadith: "Kendileri ihtiyaç içinde olsalar bile kardeşlerini öz canlarına tercih ederler. (Haşr, 9)",
    sahabe: "Hz. Osman (r.a.) ve Abdurrahman b. Avf (r.a.) — Vakıf ve İnfak Ruhu",
    reading: "Medine'de Ensar ve Muhacir Kardeşliği",
    discussion: "Sahip olduğumuz imkanları sadece artan kısmıyla değil, en sevdiğimiz yönüyle paylaşmak hayatımıza ne katar?",
    practice: "Bu hafta bir komşuya veya ihtiyaç sahibine gönülden bir ikramda bulunmak."
  },
  {
    id: "hafta-5",
    weekNo: "5. Hafta",
    theme: "Aile İçi Nezaket ve Sıla-i Rahim",
    hadith: "Sizin en hayırlınız, ailesine karşı en hayırlı olanınızdır.",
    sahabe: "Hz. Hatice (r.anhâ) ve Hz. Fâtıma (r.anhâ) — Vefa ve Aile Huzuru",
    reading: "Peygamberimizin Ev İşlerine Yardımı ve Torunlarıyla Oyunu",
    discussion: "En güzel yüzümüzü ve en tatlı dilimizi dışarıya olduğu kadar kendi ev halkımıza da gösterebiliyor muyuz?",
    practice: "Ev işlerinde iş bölümüne katılmak ve uzaktaki bir aile büyüğünü arayıp halini sormak."
  },
  {
    id: "hafta-6",
    weekNo: "6. Hafta",
    theme: "İlim, Okuma ve Ortak Akıl (İstişare)",
    hadith: "Rabbim! İlmimi ve hikmetimi artır. (Tâhâ, 114)",
    sahabe: "Hz. Âişe (r.anhâ), Muâz b. Cebel (r.a.) ve Zeyd b. Sâbit (r.a.)",
    reading: "Ashâb-ı Suffe Mektebi ve İlk Vahiy ('Oku!')",
    discussion: "Dijital çağda bilgi kirliliğinden korunup faydalı ilme ulaşmak için okuma alışkanlığımızı nasıl düzenlemeliyiz?",
    practice: "Her akşam ekranları kapatıp ailece 20 dakika kitap ve siyer okuma saati yapmak."
  },
  {
    id: "hafta-7",
    weekNo: "7. Hafta",
    theme: "Çevre Bilinci, Canlılara Şefkat ve Kanaat",
    hadith: "Kıyamet kopuyor olsa bile elinizdeki fidanı dikin.",
    sahabe: "Ebû Hüreyre (r.a.) — Canlılara Merhamet ve Sünnet Muhafızlığı",
    reading: "Susayan Köpeğe Su Veren Yolcu ve Karınca Yuvasının Korunması",
    discussion: "Su, gıda ve enerji tüketiminde israfı önlemek neden doğrudan imani ve ahlaki bir sorumluluktur?",
    practice: "Sofrada ekmek/yemek israfını sıfırlamak ve sokak hayvanları için su kabı koymak."
  },
  {
    id: "hafta-8",
    weekNo: "8. Hafta",
    theme: "Adalet, İnsan Onuru ve Veda Hutbesi Mirası",
    hadith: "Üstünlük ancak takva ve güzel ahlak iledir.",
    sahabe: "Hz. Ali (r.a.) ve Bilâl-i Habeşî (r.a.) — Hakikat ve Eşitlik",
    reading: "Hilfü'l-Fudûl'dan Veda Hutbesi'ne Evrensel Adalet Çizgisi",
    discussion: "Bu 8 haftalık siyer ve ahlak yolculuğunda hayatımızda kalıcı hale getirdiğimiz en önemli üç sünnet hangisi oldu?",
    practice: "Kişisel tefekkür günlüğünü gözden geçirip yeni ay için sünnet hedefleri belirlemek."
  }
];

// ==========================================
// 18. KURUMSAL SİYER & AHLAK BİLGİ DEĞERLENDİRMESİ (10 SORU)
// ==========================================
export const siyerQuizData = [
  {
    id: "q1",
    question: "Hz. Peygamber'in (s.a.v.) gençliğinde Mekke'de haksızlığa uğrayan yerli ve yabancı herkesin hakkını savunmak için katıldığı adalet topluluğunun adı nedir?",
    options: ["Ashâb-ı Suffe", "Hilfü'l-Fudûl", "Dârünnedve", "Akabe Biatı"],
    correctIndex: 1,
    explanation: "Hilfü'l-Fudûl (Erdemliler İttifakı), Mekke'de mazlumların hakkını korumak için kurulmuş; Efendimiz peygamberlikten sonra da bu ittifakı övgüyle anmıştır. (TDV İslâm Ansiklopedisi, Cilt 18)"
  },
  {
    id: "q2",
    question: "Medine'ye hicret edildiğinde Mescid-i Nebevî'nin bitişiğinde kurulan ve İslam'ın ilk yatılı eğitim kurumu kabul edilen mekân hangisidir?",
    options: ["Suffe", "Sevr", "Kubâ", "Hira"],
    correctIndex: 0,
    explanation: "Suffe (ve burada yetişen Ashâb-ı Suffe), bizzat Hz. Peygamber'in nezaretinde Kur'an ve sünnet ilimlerinin öğrenildiği ilk eğitim merkezidir. (TDV İslâm Ansiklopedisi, Cilt 37)"
  },
  {
    id: "q3",
    question: "Birinci Akabe Biatı'ndan sonra Medine'ye İslam'ı ve Kur'an-ı Kerim'i öğretmek üzere gönderilen 'İlk Muallim' sahabe kimdir?",
    options: ["Bilâl-i Habeşî (r.a.)", "Mus'ab b. Umeyr (r.a.)", "Selmân-ı Fârisî (r.a.)", "Ebû Zer el-Gıfârî (r.a.)"],
    correctIndex: 1,
    explanation: "Mus'ab b. Umeyr (r.a.), tatlı dili ve hikmetli tebliğiyle Medine'de İslam'ın hızla yayılmasına vesile olan ilk muallimdir. (TDV İslâm Ansiklopedisi, Cilt 31)"
  },
  {
    id: "q4",
    question: "Kendisinin ihtiyacı olduğu halde sahip olduğu imkânı din kardeşine tercih etme erdemine İslam ahlakında ne ad verilir?",
    options: ["Tevekkül", "İstişare", "Îsâr", "Kaylûle"],
    correctIndex: 2,
    explanation: "Îsâr (diğergamlık), özellikle Medineli Ensar'ın Muhacir kardeşlerine gösterdiği ve Haşr Suresi 9. ayette övülen cömertlik zirvesidir. (TDV İslâm Ansiklopedisi, Cilt 22)"
  },
  {
    id: "q5",
    question: "On yaşından itibaren on yıl boyunca Hz. Peygamber'in yanında bulunan ve 'Bana bir kez bile öf demedi' sözüyle nebevî nezaketi nakleden sahabe kimdir?",
    options: ["Enes b. Mâlik (r.a.)", "Zeyd b. Sâbit (r.a.)", "Muâz b. Cebel (r.a.)", "Abdullah b. Mes'ûd (r.a.)"],
    correctIndex: 0,
    explanation: "Enes b. Mâlik (r.a.), on yıl boyunca Hz. Peygamber'in aile ve toplum içindeki zarif ahlakına en yakından şahitlik etmiştir. (Hadislerle İslam, Cilt 1)"
  },
  {
    id: "q6",
    question: "Hz. Peygamber'in fiziki özelliklerini, güzel ahlakını ve zarif yaşayışını yazılı olarak anlatan klasik İslam sanatları levhalarına ne ad verilir?",
    options: ["Mushaf-ı Şerîf", "Hilye-i Şerîf (Şemâil)", "Vakfiye", "İcâzetnâme"],
    correctIndex: 1,
    explanation: "Hilye-i Şerîf, başta Hz. Ali'nin (r.a.) rivayeti olmak üzere Peygamberimizin şemâilini ve ahlakını anlatan hüsn-i hat levhalarıdır. (TDV İslâm Ansiklopedisi, Cilt 18)"
  },
  {
    id: "q7",
    question: "Hz. Ebû Bekir döneminde kitap hâline getirilen ilk Kur'an-ı Kerim Mushafı'nı ve sonrasında çoğaltılması heyetini yöneten genç vahiy kâtibi sahabe kimdir?",
    options: ["Ebû Hüreyre (r.a.)", "Zeyd b. Sâbit (r.a.)", "Sa'd b. Muâz (r.a.)", "Hz. Hamza (r.a.)"],
    correctIndex: 1,
    explanation: "Zeyd b. Sâbit (r.a.), güçlü hafızası ve emanet bilinciyle hem vahiy kâtipliği yapmış hem de Mushaf heyetine başkanlık etmiştir. (TDV İslâm Ansiklopedisi, Cilt 44)"
  },
  {
    id: "q8",
    question: "Hicret sonrasında Mescid-i Nebevî inşa edilene kadar Hz. Peygamber'i yedi ay boyunca evinde misafir eden 'Mihmandâr-ı Nebî' unvanlı sahabe kimdir?",
    options: ["Ebû Eyyûb el-Ensârî (r.a.)", "Abdurrahman b. Avf (r.a.)", "Talha b. Ubeydullah (r.a.)", "Zübeyr b. Avvâm (r.a.)"],
    correctIndex: 0,
    explanation: "Halid b. Zeyd Ebû Eyyûb el-Ensârî (Eyüp Sultan), Peygamberimizi Medine'de ağırlama şerefine erişmiştir. (TDV İslâm Ansiklopedisi, Cilt 10)"
  }
];

// ==========================================
// 19. ÇOCUK MODÜLÜ EŞLEŞTİRME OYUNU VERİSİ
// ==========================================
export const kidsMatchingPairsData = [
  { id: "mp1", left: "El-Emîn", right: "Peygamberimizin 'En Güvenilir İnsan' lakabı" },
  { id: "mp2", left: "Hz. Ebû Bekir (r.a.)", right: "Sevr Mağarası'ndaki sadık dost (Es-Sıddîk)" },
  { id: "mp3", left: "Mus'ab b. Umeyr (r.a.)", right: "Medine'ye gönderilen ilk genç öğretmen" },
  { id: "mp4", left: "Ebû Hüreyre (r.a.)", right: "Hayvanları çok seven 'Kediciğin Babası'" },
  { id: "mp5", left: "Ensar", right: "Evini ve sofrasını paylaşan Medineli dostlar" },
  { id: "mp6", left: "Tebessüm", right: "Kalpleri ısıtan ve sadaka sayılan gülümseme" }
];

// ==========================================
// 20. 5 VAKİT NAMAZ EKSENLİ SÜNNET DURAKLARI & SAYISAL TESBİH/ZİKİR HEDEFLERİ
// ==========================================
export const fivePrayerAnchorsData = [
  {
    id: "vakit-sabah",
    prayerName: "Sabah (Fecir & Seher)",
    badge: "Bereket & İlim Vakti",
    sunnahTitle: "Seher Bereketinden İstifade ve İlim Duası",
    sunnahDesc: "Hz. Peygamber (s.a.v.) sabah namazından sonra güneş doğuncaya kadar tefekkür ve zikirle meşgul olur, 'Allah'ım! Ümmetimin sabah vakitlerini bereketli kıl' ve 'Senden faydalı ilim, helal rızık dilerim' diye dua ederdi.",
    zikirLabel: "Sabah Tesbihi (Sübhanallâhi ve bi-hamdihî)",
    targetCount: 33,
    source: "İbn Mâce, İkâme, 32 & Hadislerle İslam, Cilt 1"
  },
  {
    id: "vakit-ogle",
    prayerName: "Öğle (Zuhr & İş Ortası)",
    badge: "Dürüstlük & Kaylûle",
    sunnahTitle: "Helal Kazanç, Selamlaşma ve Kısa Dinlenme (Kaylûle)",
    sunnahDesc: "Günün en yoğun çalışma saatlerinde ticaret ve iş ahlakını korumak, insanlara güler yüzle muamele etmek ve imkân varsa zihni tazeleyen kısa öğle dinlenmesi (kaylûle) yapmak nebevî sünnettir.",
    zikirLabel: "Hamd ve Şükür (Elhamdülillâh)",
    targetCount: 33,
    source: "Hadislerle İslam, Cilt 4, s. 140"
  },
  {
    id: "vakit-ikindi",
    prayerName: "İkindi (Asr & İkram)",
    badge: "Komşuluk & İstiğfar",
    sunnahTitle: "Asrın Kıymetini Bilmek ve İstiğfar",
    sunnahDesc: "Günün son çalışma diliminde zaman israfından kaçınmak, bir komşunun veya ihtiyaç sahibinin halini hatırını sormak ve kalbi istiğfarla arındırmak sünnettir.",
    zikirLabel: "Günlük İstiğfar (Estağfirullâhe'l-Azîm)",
    targetCount: 33,
    source: "Kur'an Yolu Tefsiri, Asr Suresi & Hadislerle İslam"
  },
  {
    id: "vakit-aksam",
    prayerName: "Akşam (Mağrib & Aile)",
    badge: "Ev Huzuru & Sohbet",
    sunnahTitle: "Eve Selamla Girmek ve Aile Sofrası",
    sunnahDesc: "Hz. Peygamber akşam eve girdiğinde ailesine tatlı bir selam verir, sofrada bereket duası eder ve günün yorgunluğunu eşleri ve çocuklarıyla samimi sohbet ederek dinlendirirdi.",
    zikirLabel: "Salât ü Selâm (Allâhümme salli alâ Muhammed)",
    targetCount: 10,
    source: "Hadislerle İslam, Cilt 5 & Kur'an Yolu, Rûm 21"
  },
  {
    id: "vakit-yatsi",
    prayerName: "Yatsı (İşâ & Gece Muhasebesi)",
    badge: "Muhasebe & Emanet",
    sunnahTitle: "Gün Sonu Nefis Muhasebesi ve Abdestli Uyku",
    sunnahDesc: "Yatsı namazından sonra boş sohbeti terk edip günün muhasebesini yapmak, kırgınlık varsa affetmek ve abdestli olarak İhlâs, Felak, Nâs surelerini okuyup uykuya geçmek sünnettir.",
    zikirLabel: "Hz. Fâtıma'ya Öğretilen Gece Tekbiri (Allâhü Ekber)",
    targetCount: 34,
    source: "Buhârî, Daavât, 11 & Hadislerle İslam, Cilt 8"
  }
];

export const eveningMuhasabaQuestions = [
  {
    id: "mq1",
    question: "Bugün diğer insanlar benim elimden ve dilimden emin oldu mu; kimseyi kırdım mı?",
    principle: "El-Müslimü men selime'l-müslimûne min lisânihî ve yedih"
  },
  {
    id: "mq2",
    question: "Bugün aileme, bir komşuma veya arkadaşıma tebessüm ve iyilikle dokunabildim mi?",
    principle: "Et-Tebessümü fî vechi ehîke sadakatün"
  },
  {
    id: "mq3",
    question: "Bugün işimde, sözümde ve zamanımı kullanırken El-Emîn ahlakına sadık kaldım mı?",
    principle: "Men ğaşşenâ fe-leyse minnâ"
  }
];

// ==========================================
// 21. TDV İSLÂM ANSİKLOPEDİSİ MODELİ ÇAPRAZ BAĞLANTILAR ("BAKINIZ")
// ==========================================
export const crossReferencesMap = {
  "Hz. Ebû Bekir": ["Hz. Âişe", "Esma bint Ebû Bekir", "Hz. Ömer", "Tevekkül", "Muhacir"],
  "Hz. Ömer": ["Hz. Hafsa", "Saîd b. Zeyd", "Hz. Ebû Bekir", "İstişare", "Hilfü'l-Fudûl"],
  "Hz. Osman": ["Abdurrahman b. Avf", "Zeyd b. Sâbit", "Îsâr", "Hz. Ali"],
  "Hz. Ali": ["Hz. Fâtıma", "Hz. Hasan", "Hz. Hüseyin", "Ca'fer-i Tayyâr", "Suffe"],
  "Hz. Hatice": ["Hz. Fâtıma", "Sıla-i Rahim", "Hilfü'l-Fudûl", "Hz. Ebû Bekir"],
  "Hz. Âişe": ["Hz. Ebû Bekir", "Esma bint Ebû Bekir", "Hz. Ümmü Seleme", "Ebû Hüreyre"],
  "Hz. Fâtıma": ["Hz. Ali", "Hz. Hasan", "Hz. Hüseyin", "Hz. Hatice"],
  "Hz. Hasan": ["Hz. Hüseyin", "Hz. Fâtıma", "Hz. Ali", "İstişare"],
  "Hz. Hüseyin": ["Hz. Hasan", "Hz. Fâtıma", "Hz. Ali"],
  "Hz. Ümmü Seleme": ["Hz. Âişe", "İstişare", "Ca'fer-i Tayyâr"],
  "Hz. Hafsa": ["Hz. Ömer", "Zeyd b. Sâbit", "Hz. Âişe"],
  "Talha b. Ubeydullah": ["Zübeyr b. Avvâm", "Hz. Ebû Bekir", "Îsâr"],
  "Zübeyr b. Avvâm": ["Esma bint Ebû Bekir", "Talha b. Ubeydullah", "Hz. Hamza"],
  "Abdurrahman b. Avf": ["Hz. Osman", "Ensar", "Muhacir", "Îsâr"],
  "Sa'd b. Ebû Vakkâs": ["Mus'ab b. Umeyr", "Abdurrahman b. Avf", "Tevekkül"],
  "Saîd b. Zeyd": ["Hz. Ömer", "Hz. Ebû Bekir"],
  "Ebû Ubeyde b. Cerrâh": ["Muâz b. Cebel", "Hz. Ömer", "Hz. Ebû Bekir"],
  "Hz. Hamza": ["Ca'fer-i Tayyâr", "Zübeyr b. Avvâm", "Nesîbe Hatun"],
  "Ca'fer-i Tayyâr": ["Hz. Ali", "Hz. Ümmü Seleme", "Muhacir"],
  "Bilâl-i Habeşî": ["Suffe", "Hz. Ebû Bekir", "Ebû Zer el-Gıfârî"],
  "Mus'ab b. Umeyr": ["Sa'd b. Muâz", "Ensar", "Suffe"],
  "Abdullah b. Mes'ûd": ["Zeyd b. Sâbit", "Muâz b. Cebel", "Hz. Ali"],
  "Muâz b. Cebel": ["Ebû Ubeyde b. Cerrâh", "Zeyd b. Sâbit", "Ensar"],
  "Enes b. Mâlik": ["Hz. Âişe", "Ebû Hüreyre", "Ensar"],
  "Ebû Hüreyre": ["Suffe", "Enes b. Mâlik", "Hz. Âişe"],
  "Zeyd b. Sâbit": ["Hz. Hafsa", "Hz. Osman", "Muâz b. Cebel"],
  "Selmân-ı Fârisî": ["İstişare", "Suffe", "Ebû Zer el-Gıfârî"],
  "Ebû Zer el-Gıfârî": ["Suffe", "Selmân-ı Fârisî", "Bilâl-i Habeşî"],
  "Ebû Eyyûb el-Ensârî": ["Ensar", "Muhacir", "Sa'd b. Muâz"],
  "Sa'd b. Muâz": ["Mus'ab b. Umeyr", "Ensar", "Ebû Eyyûb el-Ensârî"],
  "Nesîbe Hatun": ["Talha b. Ubeydullah", "Hz. Hamza", "Ensar"],
  "Esma bint Ebû Bekir": ["Hz. Ebû Bekir", "Hz. Âişe", "Zübeyr b. Avvâm"],
  "Ensar": ["Muhacir", "Îsâr", "Ebû Eyyûb el-Ensârî", "Sa'd b. Muâz"],
  "Muhacir": ["Ensar", "Hz. Ebû Bekir", "Mus'ab b. Umeyr"],
  "Suffe": ["Ebû Hüreyre", "Bilâl-i Habeşî", "Selmân-ı Fârisî"],
  "Hilfü'l-Fudûl": ["Hz. Ebû Bekir", "Hz. Hatice", "İstişare"],
  "Sıla-i Rahim": ["Hz. Hatice", "Hz. Fâtıma", "Îsâr"],
  "Îsâr": ["Ensar", "Muhacir", "Abdurrahman b. Avf", "Hz. Osman"],
  "İstişare": ["Selmân-ı Fârisî", "Hz. Ümmü Seleme", "Tevekkül"],
  "Tevekkül": ["Hz. Ebû Bekir", "İstişare", "Esma bint Ebû Bekir"]
};
