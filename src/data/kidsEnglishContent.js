// ==========================================
// COMPLETE ENGLISH LOCALIZATION FOR THE KIDS PORTAL
// Covers: 5 Medals, 12 Stories, 9 Good Deeds, 30-Day Calendar,
// 6 Young Sahabes, 8 Glossary Cards, 6 Scenarios, 6 Matching Pairs,
// 4 Riddles, and All 32 Fards + 12 Q&A Quiz Questions.
// ==========================================

export const enKidsBadgesMap = {
  b1: { title: "Al-Amin Medal", desc: "Earned for honesty and trustworthiness!" },
  b2: { title: "Sun of Smiles", desc: "Earned for spreading warmth and kindness!" },
  b3: { title: "Mercy Ambassador", desc: "Earned for caring for animals and nature!" },
  b4: { title: "Ansar Friend", desc: "Earned for generosity and sharing!" },
  b5: { title: "Suffah Star", desc: "Earned for loving knowledge and learning!" }
};

export const enKidsTaskCatMap = {
  "Ev & Aile": "Home & Family",
  "Nezaket & Arkadaşlık": "Kindness & Friendship",
  "Doğa & Emanet": "Nature & Care"
};

export const enKidsAgeMap = {
  "Tümü": "All Ages",
  "4-6 Yaş": "Ages 4–6",
  "7-12 Yaş": "Ages 7–12"
};

export const enKidsTasksMap = {
  kt1: { title: "I helped my mom or dad with a chore today with a big smile" },
  kt2: { title: "I started my meal with 'Bismillah' and finished without wasting food" },
  kt3: { title: "I tidied up my room and wished my family a peaceful goodnight" },
  kt4: { title: "I was the first to greet my friends and elders warmly today" },
  kt5: { title: "I shared my toy, pencil, or snack with a sibling or friend" },
  kt6: { title: "I spoke kindly all day and remembered to say 'thank you' and 'sorry'" },
  kt7: { title: "I placed fresh water or food outside for birds or stray cats" },
  kt8: { title: "I turned off the tap while washing hands and brushing my teeth" },
  kt9: { title: "I watered a plant or put litter into the trash bin" }
};

export const enKidsStoriesMap = {
  ks1: {
    category: "Empathy & Compassion",
    title: "Little Umayr and His Pet Bird",
    story: "Little Umayr had a tiny pet bird named Nughayr that he loved very much. One day the little bird passed away, and Umayr sat sadly with tears in his eyes. Prophet Muhammad ﷺ noticed his sadness right away, knelt down to his level, and gently asked with a warm voice: 'O Abu Umayr, what happened to little Nughayr?' That tender care comforted Umayr's heart immediately.",
    lesson: "Our Prophet ﷺ cared deeply about children's feelings—even small sorrows mattered to him.",
    actionTip: "If a friend or sibling feels sad today, sit beside them and ask kindly how you can cheer them up.",
    familyQuestion: "When you feel upset about something small, what kind words help your heart feel better?",
    didYouKnow: "Prophet Muhammad ﷺ gave little Umayr the playful grown-up nickname 'Abu Umayr' to make him feel special and loved!"
  },
  ks2: {
    category: "Honesty & Trust",
    title: "The Most Trustworthy Young Man: Al-Amin",
    story: "Even as a young man in Mecca, Prophet Muhammad ﷺ was famous for never telling a lie and always keeping his promises. Whenever travelers left town, they trusted him with their most precious belongings because they knew he would guard them safely. Everyone called him 'Al-Amin'—The Trustworthy One.",
    lesson: "Being truthful and keeping promises makes everyone trust and love us.",
    actionTip: "Keep every promise you make today and return anything you borrow right on time.",
    familyQuestion: "Why do people feel so happy and safe around an honest friend?",
    didYouKnow: "Even before he became a prophet at age 40, the whole city of Mecca chose him as a fair peacemaker!"
  },
  ks3: {
    category: "Kindness to Animals",
    title: "The Traveler and the Thirsty Dog",
    story: "On a hot desert journey, a traveler grew very thirsty and climbed down a well to drink cool water. When he climbed back out, he saw a tired dog panting and licking damp earth from thirst. The traveler felt deep mercy, climbed back down, filled his shoe with water, and held it for the dog to drink. Prophet Muhammad ﷺ told us God was so pleased with this kindness that He forgave all the traveler's mistakes.",
    lesson: "Showing mercy to animals is a wonderful good deed that Allah loves very much.",
    actionTip: "Put a clean bowl of water outside for birds, cats, or dogs when the weather is warm.",
    familyQuestion: "How can our family help take care of animals in our neighborhood?",
    didYouKnow: "Our Prophet ﷺ said: 'In every living creature there is a reward for kindness!'"
  },
  ks4: {
    category: "Gentle Correction",
    title: "The Date Tree and Little Rafi",
    story: "Young Rafi once threw stones at someone's date palm trees to knock down sweet dates. When brought to Prophet Muhammad ﷺ, he didn't shout or scold him. Instead, he stroked Rafi's head softly and said: 'My dear son, do not throw stones at the trees; eat the dates that have fallen on the ground.' Then he prayed for Rafi's happiness and blessings.",
    lesson: "When someone makes a mistake, gentle guidance teaches much better than anger.",
    actionTip: "If your little sibling makes a mistake today, show them the right way softly without yelling.",
    familyQuestion: "How does it feel when someone explains a mistake kindly instead of scolding?",
    didYouKnow: "Rafi never forgot that gentle touch on his head for the rest of his life!"
  },
  ks5: {
    category: "Warmth & Cheerfulness",
    title: "The Charity of a Bright Smile",
    story: "Prophet Muhammad ﷺ was the most cheerful and welcoming person. He taught his friends that you don't need lots of money to give charity—even smiling sincerely at someone brightens their day and counts as a beautiful charity before Allah!",
    lesson: "A warm smile costs nothing yet fills hearts with joy and earns great reward.",
    actionTip: "Give at least five people a big, genuine smile today—starting with your family!",
    familyQuestion: "Who made you smile today, and how can you make someone else smile tomorrow?",
    didYouKnow: "Companions said they never saw anyone smile more often than Prophet Muhammad ﷺ."
  },
  ks6: {
    category: "Brotherhood & Sharing",
    title: "The Table of Brotherhood: Ansar & Muhajirun",
    story: "When Muslims migrated from Mecca to Medina leaving behind their homes, the people of Medina (the Ansar) welcomed them with open arms. They shared their homes, gardens, and meals as true brothers and sisters. Prophet Muhammad ﷺ paired them together in the most beautiful brotherhood in history.",
    lesson: "Sharing what we have turns strangers into lifelong brothers and sisters.",
    actionTip: "Share your favorite snack or toy with a friend or classmate today.",
    familyQuestion: "What makes sharing feel even happier than keeping everything for ourselves?",
    didYouKnow: "'Ansar' means 'Helpers'—because they helped their guests so generously!"
  },
  ks7: {
    category: "Respect for Elders",
    title: "Carrying an Elderly Woman's Heavy Bag",
    story: "While walking down a dusty road, Prophet Muhammad ﷺ saw an elderly woman struggling to carry a heavy bundle. Without waiting to be asked, he stepped forward with a gentle smile, lifted the bag onto his own shoulders, and walked with her all the way to her door.",
    lesson: "Helping elderly people and honoring them is one of the finest Prophetic manners.",
    actionTip: "Offer to carry a grocery bag or bring a glass of water for your parents or grandparents today.",
    familyQuestion: "What small ways can we make our grandparents or older neighbors feel loved?",
    didYouKnow: "Our Prophet ﷺ said: 'Showing honor to an elderly person is part of honoring Allah.'"
  },
  ks8: {
    category: "Protecting Nature",
    title: "Protecting Baby Birds and an Ant Nest",
    story: "During a journey, some companions spotted a tiny bird's nest with two chicks and gently picked them up. The mother bird began fluttering above them in distress. Seeing this, Prophet Muhammad ﷺ immediately asked: 'Who has distressed this mother over her babies? Return her chicks to the nest right away!' He also forbade harming ant nests.",
    lesson: "Every tiny bird, insect, and animal is Allah's creation and deserves our protection.",
    actionTip: "Be gentle with trees, flowers, and tiny insects whenever you play in the park.",
    familyQuestion: "Why is it important to leave bird nests and animals safe in nature?",
    didYouKnow: "Our Prophet ﷺ even encouraged planting trees as a charity that keeps giving for years!"
  },
  ks9: {
    category: "Family Love",
    title: "A Loving Grandfather: Hasan and Husayn",
    story: "Prophet Muhammad ﷺ loved his grandsons Hasan and Husayn dearly. Sometimes while he was in prostration during prayer, little Hasan or Husayn would playfully climb onto his back! Our Prophet ﷺ stayed in prostration a little longer until his grandson climbed down happily on his own.",
    lesson: "Love, patience, and playful warmth make family bonds joyful and strong.",
    actionTip: "Give your mom, dad, or sibling a warm hug and tell them you love them today.",
    familyQuestion: "What is your favorite game or happy memory to share with your family?",
    didYouKnow: "He called Hasan and Husayn 'my two sweet basil flowers in this world'!"
  },
  ks10: {
    category: "Table Manners",
    title: "Table Manners Taught to Little Umar",
    story: "When young Umar ibn Abi Salamah ate beside Prophet Muhammad ﷺ, his hand wandered all over the shared platter. The Prophet ﷺ smiled kindly and taught him three golden table rules: 'Young man, say Bismillah, eat with your right hand, and eat from what is right in front of you.'",
    lesson: "Saying Bismillah, eating politely, and thanking Allah makes every meal blessed.",
    actionTip: "Practice all three table rules at dinner tonight and say 'Alhamdulillah' at the end!",
    familyQuestion: "Why is eating together as a family with good manners so special?",
    didYouKnow: "Umar said he followed those three golden rules for his entire life!"
  },
  ks11: {
    category: "Loyalty & Gratitude",
    title: "Remembering Umm Mihjan Who Cleaned the Mosque",
    story: "An elderly woman named Umm Mihjan quietly loved cleaning the Prophet's Mosque every day. When she passed away at night, people didn't want to wake the Prophet ﷺ. The next morning he noticed she was missing, asked about her, and went personally to pray for her—showing that every quiet helper is deeply treasured.",
    lesson: "Every person who keeps our spaces clean and serves quietly deserves our deep respect and thanks.",
    actionTip: "Say a warm 'thank you' to someone who cleans your school, building, or neighborhood.",
    familyQuestion: "Who are the quiet helpers in our daily life whom we can thank more often?",
    didYouKnow: "In Islam, keeping mosques, schools, and streets clean is a beloved act of faith!"
  },
  ks12: {
    category: "Compassion",
    title: "Father of the Kitten: Abu Hurayrah",
    story: "One of the Prophet's ﷺ dearest companions loved cats so much that he carried a tiny rescued kitten in his sleeve to keep it warm and safe. Seeing this tenderness, Prophet Muhammad ﷺ affectionately nicknamed him 'Abu Hurayrah'—meaning 'Father of the Kitten!'",
    lesson: "Loving and caring for gentle creatures softens our hearts and brings joy.",
    actionTip: "Be extra gentle whenever you see a kitten or pet, and never startle animals.",
    familyQuestion: "What animal do you love most, and how can we care for it kindly?",
    didYouKnow: "Abu Hurayrah (r.a.) memorized and shared more Prophetic sayings than any other companion!"
  }
};

export const enKidsYoungSahabesMap = {
  ys1: {
    name: "Young Ali (r.a.)",
    ageTitle: "10 Years Old • Courage & Wisdom",
    virtue: "Bravery & Loyalty",
    story: "He grew up right inside Prophet Muhammad's ﷺ home, became the first child to embrace Islam, and showed incredible courage and love of learning from a very young age.",
    quote: "True bravery means standing by what is right and loving wisdom."
  },
  ys2: {
    name: "Anas ibn Malik (r.a.)",
    ageTitle: "10 Years Old • 10 Years Beside the Prophet ﷺ",
    virtue: "Politeness & Service",
    story: "Anas assisted Prophet Muhammad ﷺ for ten whole years starting at age ten. He learned beautiful manners directly from him and shared over 2,000 hadiths with the world.",
    quote: "Helping others with a cheerful heart brings great blessings."
  },
  ys3: {
    name: "Asma bint Abi Bakr (r.a.)",
    ageTitle: "Brave Helper of the Hijrah",
    virtue: "Courage & Generosity",
    story: "During the Migration to Medina, Asma bravely carried food and water to the Cave of Thawr, tearing her waistband in two to tie the supplies—earning the noble title 'She of the Two Belts.'",
    quote: "Resourcefulness and courage help us overcome big challenges."
  },
  ys4: {
    name: "Zayd ibn Thabit (r.a.)",
    ageTitle: "Young Genius of Languages & Writing",
    virtue: "Love of Learning",
    story: "At the Prophet's ﷺ encouragement, young Zayd learned a new foreign language in just two weeks! He became a scribe of revelation and helped preserve the Quran.",
    quote: "Reading, writing, and learning languages let us serve humanity."
  },
  ys5: {
    name: "Mus'ab ibn Umayr (r.a.)",
    ageTitle: "First Youth Teacher of Medina",
    virtue: "Gentle Communication",
    story: "Sent by the Prophet ﷺ to teach Islam in Medina, young Mus'ab won hearts with his calm voice, bright smile, and respectful answers to every question.",
    quote: "Kind words and patience open every heart."
  },
  ys6: {
    name: "Lady Fatimah (r.a.)",
    ageTitle: "Beloved Daughter of the Prophet ﷺ",
    virtue: "Kindness & Modesty",
    story: "Whenever Fatimah entered the room, Prophet Muhammad ﷺ stood up to welcome her warmly. She shared her own food with orphans and travelers and mirrored her father's noble manners.",
    quote: "Love and respect between parents and children fill a home with light."
  }
};

export const enKidsGlossaryList = [
  { term: "Al-Amin", subtitle: "Trustworthy", meaning: "Someone who always tells the truth and keeps promises safely.", example: "Everyone in Mecca called our Prophet ﷺ 'Al-Amin'!" },
  { term: "Ansar", subtitle: "Helpers", meaning: "The generous people of Medina who warmly welcomed guests.", example: "Helping a new classmate feel welcome is like being an Ansar!" },
  { term: "Muhajir", subtitle: "Traveler for Faith", meaning: "Those who migrated from Mecca to Medina for their faith.", example: "Being patient during big changes shows Muhajir spirit." },
  { term: "Tabassum", subtitle: "Warm Smile", meaning: "Smiling sincerely at others to brighten their day.", example: "A genuine smile is a wonderful charity!" },
  { term: "Ithar", subtitle: "Generous Sharing", meaning: "Happily sharing what you love with someone who needs it more.", example: "Offering the bigger piece of cake to your friend is Ithar." },
  { term: "Silat al-Rahim", subtitle: "Family Love", meaning: "Visiting, calling, and caring for parents, grandparents, and relatives.", example: "Calling grandma on the weekend keeps family ties strong!" },
  { term: "Suffah", subtitle: "First School", meaning: "The learning circle built right beside the Prophet's Mosque.", example: "Loving books and asking questions makes you a Suffah learner!" },
  { term: "Shukr & Hamd", subtitle: "Gratitude", meaning: "Thanking Allah from the heart for all His wonderful blessings.", example: "Saying 'Alhamdulillah' after meals fills our heart with peace." }
];

export const enKidsScenariosMap = {
  sc1: {
    category: "Honesty (Al-Amin)",
    question: "You find a classmate's favorite colorful pencil case on the school playground, and nobody saw you pick it up. What would you do?",
    options: [
      { id: "a", text: "Take it straight to the teacher or find my friend to return it right away.", isCorrect: true, feedback: "Bravo! Just like 'Al-Amin', returning lost items makes everyone trust you! (+15 ⭐)" },
      { id: "b", text: "Keep it in my backpack for a few days because it looks really cool.", isCorrect: false, feedback: "Think how sad your friend must feel! Returning it right away brings real happiness." }
    ]
  },
  sc2: {
    category: "Friendship & Welcome",
    question: "At the park, a new kid who just moved to your neighborhood is sitting alone watching everyone play. What would you do?",
    options: [
      { id: "a", text: "Walk over with a warm smile, say 'Salam / Hello!' and invite them to join our game.", isCorrect: true, feedback: "Wonderful! Just like the Ansar of Medina, you welcomed a new friend warmly! (+15 ⭐)" },
      { id: "b", text: "Ignore them and keep playing only with my old friends.", isCorrect: false, feedback: "Our Prophet ﷺ always included people who felt left out. Let's invite them next time!" }
    ]
  },
  sc3: {
    category: "Saving Water",
    question: "While brushing your teeth, you notice the faucet is running full blast the whole time. What would you do?",
    options: [
      { id: "a", text: "Turn off the tap while brushing and turn it back on only to rinse.", isCorrect: true, feedback: "Awesome! Our Prophet ﷺ taught us never to waste water—even beside a river! (+15 ⭐)" },
      { id: "b", text: "Leave it running because there is plenty of water at home.", isCorrect: false, feedback: "Water is a precious gift from Allah! Turning off the tap protects our planet." }
    ]
  },
  sc4: {
    category: "Gratitude at the Table",
    question: "At dinner, the meal on the table isn't your favorite dish. What is the Prophetic way to respond?",
    options: [
      { id: "a", text: "Never criticize the food; say 'Thank you' for the effort and eat politely what I can.", isCorrect: true, feedback: "Amazing manners! Prophet Muhammad ﷺ never once criticized any food! (+15 ⭐)" },
      { id: "b", text: "Make a face and complain loudly that I don't like this food.", isCorrect: false, feedback: "Complaining hurts the feelings of whoever cooked with love. Gratitude is much sweeter!" }
    ]
  },
  sc5: {
    category: "Patience & Anger Control",
    question: "Your little sibling accidentally knocks down the Lego tower you spent an hour building! You feel super frustrated. What do you do?",
    options: [
      { id: "a", text: "Take a deep breath, stay calm without yelling, and invite them to rebuild it together.", isCorrect: true, feedback: "True hero! Prophet Muhammad ﷺ said the strongest person controls anger with kindness! (+15 ⭐)" },
      { id: "b", text: "Shout loudly and break their toys in return.", isCorrect: false, feedback: "Anger hurts hearts, whereas patience turns accidents into happy teamwork!" }
    ]
  },
  sc6: {
    category: "Truthfulness",
    question: "While playing indoors, you accidentally knock over a small flower vase. Nobody saw it happen. What do you do?",
    options: [
      { id: "a", text: "Tell my parents the truth honestly, say sorry, and offer to help clean up.", isCorrect: true, feedback: "So brave and honest! Truthfulness always earns Allah's love and your parents' trust! (+15 ⭐)" },
      { id: "b", text: "Blame the cat or pretend I didn't see what happened.", isCorrect: false, feedback: "Telling the truth takes courage, and parents always appreciate an honest heart!" }
    ]
  }
};

export const enKidsMatchingMap = {
  mp1: { left: "Al-Amin", right: "Title meaning 'The Most Trustworthy'" },
  mp2: { left: "Abu Bakr (r.a.)", right: "Best friend & companion on the Hijrah journey" },
  mp3: { left: "Mus'ab ibn Umayr (r.a.)", right: "First young teacher sent to Medina" },
  mp4: { left: "Abu Hurayrah (r.a.)", right: "Companion nicknamed 'Father of the Kitten'" },
  mp5: { left: "Ansar", right: "Generous hosts of Medina who shared everything" },
  mp6: { left: "Tabassum", right: "A warm smile that counts as charity" }
};

export const enKidsCalendarMap = {
  1: "Greet your parents with a warm smile and 'Assalamu Alaikum!'",
  2: "Say 'Bismillah' before every meal and 'Alhamdulillah' afterward.",
  3: "Put a clean bowl of water outside for birds or cats.",
  4: "Tidy up your bed and toys without waiting to be asked.",
  5: "Call your grandparents or an elderly relative to say hello.",
  6: "Turn off the tap while brushing your teeth to save water.",
  7: "Share a snack, pencil, or toy happily with a friend.",
  8: "Say a warm 'thank you' to three people today.",
  9: "Read or listen to one Prophetic story with your family.",
  10: "Pick up a piece of litter and put it in the trash bin.",
  11: "Give a sincere compliment to make someone smile.",
  12: "Help set or clear the dinner table cheerfully.",
  13: "Finish your plate today with zero food waste.",
  14: "Water a plant or flower at home or in the garden.",
  15: "Listen carefully without interrupting when someone speaks.",
  16: "Say 'Sorry' kindly if you accidentally upset someone.",
  17: "Learn one new beautiful name or saying of Prophet Muhammad ﷺ.",
  18: "Send blessings (Salawat) upon Prophet Muhammad ﷺ 10 times.",
  19: "Write or draw a cheerful thank-you note for mom or dad.",
  20: "Turn off unused lights to protect energy and Earth.",
  21: "Invite someone sitting alone to join your game.",
  22: "Keep a small secret or promise faithfully all day.",
  23: "Make a sweet prayer before going to sleep tonight.",
  24: "Help a younger child tie their shoes or find something.",
  25: "Name 3 blessings you are super thankful for today.",
  26: "Speak with a calm, soft voice even if you feel annoyed.",
  27: "Put away your shoes neatly at the doorway.",
  28: "Learn 3 new fards from the 32 Fards Workshop!",
  29: "Share a kind smile with a neighbor.",
  30: "Celebrate completing 30 Days of Sunnah & Good Deeds!"
};

export const enKidsRiddlesMap = {
  "blm-1": {
    category: "Companion",
    clues: [
      "I was Prophet Muhammad's ﷺ closest lifelong friend.",
      "We traveled together during the Migration (Hijrah) and sheltered in the Cave of Thawr.",
      "Because I always believed the Prophet immediately, I was called 'As-Siddiq' (The Truthful)."
    ],
    question: "Who am I?",
    options: ["Abu Bakr as-Siddiq (r.a.)", "Bilal al-Habashi (r.a.)", "Zayd ibn Thabit (r.a.)"],
    explanation: "Awesome! Abu Bakr (r.a.) was the Prophet's closest friend and companion in the Cave of Thawr."
  },
  "blm-2": {
    category: "Companion",
    clues: [
      "I loved animals so much that I carried a rescued kitten in my sleeve.",
      "Prophet Muhammad ﷺ gave me the sweet nickname 'Father of the Kitten.'",
      "I stayed at the Suffah school and memorized more hadiths than anyone else."
    ],
    question: "Who am I?",
    options: ["Mus'ab ibn Umayr (r.a.)", "Abu Hurayrah (r.a.)", "Umar ibn al-Khattab (r.a.)"],
    explanation: "Spot on! Abu Hurayrah (r.a.) is famous for both his love of cats and preserving Prophetic wisdom."
  },
  "blm-3": {
    category: "Historic Place",
    clues: [
      "I was the very first Islamic school built right beside the Prophet's Mosque.",
      "Young companions gathered here to learn reading, writing, and noble character.",
      "My students were known as 'Ahl al-Suffah' (The People of the Bench)."
    ],
    question: "What place am I?",
    options: ["The Suffah School", "Cave of Hira", "Cave of Thawr"],
    explanation: "Brilliant! The Suffah School was the first learning center in Islamic history."
  },
  "blm-4": {
    category: "Sunnah",
    clues: [
      "I am a wonderful good deed you can do every single day without spending a penny.",
      "Whenever you share me, other people's hearts immediately feel warmer.",
      "Prophet Muhammad ﷺ said: 'Offering me to your brother or sister is charity!'"
    ],
    question: "What Sunnah am I?",
    options: ["A Warm Smile (Tabassum)", "Midday Rest", "Consultation"],
    explanation: "Yay! A warm smile is one of the easiest and most beloved Sunnahs of our Prophet ﷺ."
  }
};

export const enFardsCategoriesMap = {
  iman: {
    title: "Pillars of Faith (Iman)",
    summary: "The 6 beautiful truths we believe in with our heart",
    memoryTip: "6 Pillars of Faith: Allah, Angels, Books, Prophets, Day of Judgment & Divine Decree!"
  },
  islam: {
    title: "Pillars of Islam",
    summary: "The 5 foundational acts of worship in Islam",
    memoryTip: "5 Pillars of Islam: Shahada, Prayer, Fasting, Zakat & Hajj!"
  },
  abdest: {
    title: "Fards of Wudu (Ablution)",
    summary: "The 4 essential parts washed/wiped to get clean for prayer",
    memoryTip: "4 Fards of Wudu: Face, Arms (with elbows), 1/4 of Head (Masah) & Feet!"
  },
  gusul: {
    title: "Fards of Ghusl (Full Bath)",
    summary: "The 3 essential steps for complete physical purity",
    memoryTip: "3 Fards of Ghusl: Rinse Mouth, Rinse Nose & Wash Whole Body!"
  },
  teyemmum: {
    title: "Fards of Tayammum",
    summary: "Dry ablution with clean earth when water is unavailable",
    memoryTip: "2 Fards of Tayammum: Intention + Two strikes wiping face and arms!"
  },
  "namaz-dis": {
    title: "Conditions Before Prayer",
    summary: "The 6 essential preparations before starting prayer (Salah)",
    memoryTip: "6 Conditions: Wudu Purity, Clean Clothes/Place, Modest Dress, Qibla, Time & Intention!"
  },
  "namaz-ic": {
    title: "Pillars Inside Prayer",
    summary: "The 6 essential actions performed inside prayer (Salah)",
    memoryTip: "6 Pillars: Opening Takbir, Standing, Recitation, Bowing, Prostration & Final Sitting!"
  }
};

export const enFardsItemsMap = {
  "fard-1": { title: "Belief in the Oneness of Allah", kidDesc: "Allah is the One and Only Creator who made us, our families, the stars, flowers, and the whole universe. He sees, hears, and loves us.", tip: "Every beautiful thing in nature reminds us of Allah." },
  "fard-2": { title: "Belief in His Angels", kidDesc: "Angels are pure beings created from light who always obey Allah—like Gabriel (Jibril), Michael (Mika'il), Israfil, and Azra'il.", tip: "Kind angels record all our good deeds every day." },
  "fard-3": { title: "Belief in His Revealed Books", kidDesc: "Allah sent holy books to guide humanity: the Torah, Psalms, Gospel, and our final protected book, the Holy Quran.", tip: "The Quran is the final message preserved forever." },
  "fard-4": { title: "Belief in His Prophets", kidDesc: "Prophets are the finest role models who taught Allah's guidance—from the first prophet Adam (a.s.) to the final prophet Muhammad ﷺ.", tip: "Prophet Muhammad ﷺ is a mercy and role model for all worlds." },
  "fard-5": { title: "Belief in the Day of Judgment", kidDesc: "After this world comes eternal life in the Hereafter, where every smile, kindness, and good deed will be richly rewarded by Allah.", tip: "Good deeds lead to the joyful gardens of Paradise." },
  "fard-6": { title: "Belief in Divine Decree (Qadar)", kidDesc: "Everything in the universe unfolds within Allah's wisdom and knowledge. We do our very best and trust Allah with the outcome.", tip: "Work hard first, then trust Allah calmly (Tawakkul)." },
  "fard-7": { title: "Declaring the Shahada", kidDesc: "Saying from the heart: 'I bear witness that there is no god worthy of worship except Allah, and Muhammad is His servant and messenger.'", tip: "The Shahada is the shining key of faith." },
  "fard-8": { title: "Performing the Five Daily Prayers", kidDesc: "Standing before Allah five times a day (Fajr, Dhuhr, Asr, Maghrib, Isha) to thank Him and speak with Him in peace.", tip: "Prayer is our five daily moments of peace with Allah." },
  "fard-9": { title: "Fasting in Ramadan", kidDesc: "Fasting from dawn to sunset during the blessed month of Ramadan to build patience, gratitude, and empathy for those in need.", tip: "Fasting strengthens both our heart and our kindness." },
  "fard-10": { title: "Giving Zakat (Charity)", kidDesc: "Wealthy Muslims share a portion of their wealth once a year with people in need, bringing blessing and brotherhood.", tip: "Sharing never shrinks wealth—it multiplies blessings!" },
  "fard-11": { title: "Performing Hajj (Pilgrimage)", kidDesc: "Muslims who are able in health and means visit Mecca once in a lifetime to circle the Kaaba and pray together.", tip: "The Kaaba unites Muslims from every corner of the Earth." },
  "fard-12": { title: "Washing the Face", kidDesc: "Washing the entire face gently with clean water from the hairline to the chin and from ear to ear.", tip: "Use just enough water without wasting a drop." },
  "fard-13": { title: "Washing Both Arms Including Elbows", kidDesc: "Washing the right arm first, then the left arm, from fingertips all the way past the elbows.", tip: "Make sure your elbows get fully wet!" },
  "fard-14": { title: "Wiping (Masah) One-Quarter of the Head", kidDesc: "Wiping at least one-quarter of the head with a wet hand.", tip: "Following the Sunnah, you may gently wipe the whole head." },
  "fard-15": { title: "Washing Both Feet Including Ankles", kidDesc: "Washing the right foot first, then the left foot, between the toes and including the ankles.", tip: "Don't forget the heels and ankle bones!" },
  "fard-16": { title: "Rinsing the Mouth Thoroughly", kidDesc: "Taking clean water into the mouth and rinsing every part thoroughly.", tip: "If not fasting, swish gently toward the back of the mouth." },
  "fard-17": { title: "Rinsing the Nose Gently", kidDesc: "Drawing a little clean water gently into the nostrils and cleaning them.", tip: "Be gentle and thorough when rinsing." },
  "fard-18": { title: "Washing the Entire Body", kidDesc: "Washing the whole body from head to toe so not even a tiny spot remains dry.", tip: "Remember behind the ears and between fingers and toes." },
  "fard-19": { title: "Making Intention (Niyyah)", kidDesc: "When water isn't available or cannot be used for health reasons, intending in your heart to make Tayammum for Allah's sake.", tip: "Islam is a religion of ease and mercy." },
  "fard-20": { title: "Striking Clean Earth & Wiping Face and Arms", kidDesc: "Placing both palms lightly on clean earth/stone once to wipe the face, and a second time to wipe the right and left arms.", tip: "1st strike for the face, 2nd strike for both arms!" },
  "fard-21": { title: "Ritual Purity (Wudu / Ghusl)", kidDesc: "Having valid Wudu (or Ghusl when needed) before beginning prayer.", tip: "'Hadath' means being without wudu; 'Taharah' means purity." },
  "fard-22": { title: "Clean Body, Clothes & Prayer Space", kidDesc: "Ensuring our body, clothing, and prayer rug are clean and free from impurities.", tip: "We stand before Allah neat and spotless." },
  "fard-23": { title: "Dressing Modestly (Satr al-Awrah)", kidDesc: "Wearing clean, modest, respectful attire suitable for prayer.", tip: "Dressing respectfully shows honor for prayer." },
  "fard-24": { title: "Facing the Qibla (Kaaba)", kidDesc: "Turning our face toward the sacred Kaaba in Mecca during prayer.", tip: "Muslims worldwide all turn toward the same direction." },
  "fard-25": { title: "Praying in Its Proper Time", kidDesc: "Performing each of the five prayers after its proper time begins.", tip: "The call to prayer (Adhan) announces the prayer time." },
  "fard-26": { title: "Making Intention (Niyyah)", kidDesc: "Knowing in our heart which prayer we are about to offer for Allah's pleasure.", tip: "Intention lives in the heart." },
  "fard-27": { title: "Opening Takbir ('Allahu Akbar')", kidDesc: "Raising our hands and saying 'Allahu Akbar' (God is the Greatest) to begin prayer.", tip: "'Iftitah' means opening—prayer opens with Takbir." },
  "fard-28": { title: "Standing (Qiyam)", kidDesc: "Standing respectfully before Allah during prayer for those who are able.", tip: "Keep your eyes calmly looking toward the place of prostration." },
  "fard-29": { title: "Reciting the Quran (Qira'ah)", kidDesc: "Reciting Surah Al-Fatihah and verses or short chapters from the Quran while standing.", tip: "Short chapters like Al-Ikhlas and Al-Kawthar are wonderful to memorize!" },
  "fard-30": { title: "Bowing (Ruku)", kidDesc: "Placing hands on knees with a straight back and glorifying Allah: 'Subhana Rabbiyal-Azim.'", tip: "Keep your back and head nice and level." },
  "fard-31": { title: "Prostration (Sujud)", kidDesc: "Placing forehead, nose, palms, knees, and toes gently on the ground in humble closeness to Allah.", tip: "Our Prophet ﷺ said we are closest to Allah during Sujud!" },
  "fard-32": { title: "Final Sitting (Qa'dah Akhirah)", kidDesc: "Sitting at the end of prayer long enough to recite Tashahhud before ending with greetings of peace (Salam).", tip: "We end prayer wishing peace to the right and left!" }
};

export const enFardsQuizMap = {
  "q32-1": {
    category: "Overview",
    question: "Which numbers add up to make the 32 Fards?",
    options: [
      "Faith (6) + Islam (5) + Wudu (4) + Ghusl (3) + Tayammum (2) + Prayer (12)",
      "Faith (5) + Islam (6) + Wudu (3) + Ghusl (4) + Tayammum (4) + Prayer (10)",
      "Faith (4) + Islam (5) + Wudu (5) + Ghusl (3) + Tayammum (3) + Prayer (12)"
    ],
    explanation: "Awesome! 6 + 5 + 4 + 3 + 2 + 12 = 32. It counts down from 6 to 2, plus 12 for Prayer!"
  },
  "q32-2": {
    category: "Pillars of Faith",
    question: "Which of the following is NOT one of the 6 Pillars of Faith (Iman)?",
    options: ["Belief in Angels", "Giving Zakat (Charity)", "Belief in Books and Prophets"],
    explanation: "Spot on! Giving Zakat is one of the 5 Pillars of Islam, not the 6 Pillars of Faith."
  },
  "q32-3": {
    category: "Pillars of Islam",
    question: "What is the first Pillar of Islam and the shining key to becoming Muslim?",
    options: ["Declaring the Shahada", "Making Tayammum", "Bowing in Ruku"],
    explanation: "Bravo! The 5 Pillars begin with the Shahada, followed by Prayer, Fasting, Zakat, and Hajj."
  },
  "q32-4": {
    category: "Fards of Wudu",
    question: "How many Fards does Wudu have, and what are they?",
    options: [
      "3 Fards: Mouth, nose, and arms",
      "4 Fards: Face, arms (with elbows), wiping 1/4 of the head, and feet (with ankles)",
      "5 Fards: Hands, mouth, nose, ears, and neck"
    ],
    explanation: "Super! Face, arms, wiping 1/4 of the head, and feet are the 4 Fards of Wudu."
  },
  "q32-5": {
    category: "Fards of Wudu",
    question: "What is it called when we wipe at least one-quarter of our head with a wet hand during Wudu?",
    options: ["Qiyam", "Masah (Wiping)", "Takbir"],
    explanation: "Correct! Wiping with a wet hand is called 'Masah'."
  },
  "q32-6": {
    category: "Fards of Ghusl",
    question: "What are the 3 Fards of Ghusl (Full Bath)?",
    options: [
      "Rinsing the mouth, rinsing the nose, and washing the entire body",
      "Washing the face, wiping the head, and washing the feet",
      "Intention, facing the Qibla, and saying Takbir"
    ],
    explanation: "Wonderful! Mouth, nose, and washing the entire body with no dry spot left!"
  },
  "q32-7": {
    category: "Tayammum",
    question: "What is dry ablution with clean earth called when water isn't available, and how many Fards does it have?",
    options: [
      "Tayammum — and it has 2 Fards (Intention + Two strikes wiping face and arms)",
      "Ghusl — and it has 3 Fards",
      "Qira'ah — and it has 4 Fards"
    ],
    explanation: "Great job! Tayammum has 2 Fards and shows that Islam is a religion of ease."
  },
  "q32-8": {
    category: "Prayer Conditions",
    question: "What is turning our face toward the sacred Kaaba in Mecca before prayer called?",
    options: ["Satr al-Awrah", "Facing the Qibla (Istiqbal al-Qibla)", "Final Sitting"],
    explanation: "Right! Facing the Qibla is one of the 6 essential conditions before starting prayer."
  },
  "q32-9": {
    category: "Prayer Conditions",
    question: "Ensuring our body, clothes, and prayer space are clean is which condition of prayer?",
    options: ["Cleanliness from Impurities (Najasah)", "Opening Takbir", "Recitation"],
    explanation: "Correct! Clean body, clothes, and prayer mat keep our prayer pure and respectful."
  },
  "q32-10": {
    category: "Prayer Pillars",
    question: "What is saying 'Allahu Akbar' to start the prayer called?",
    options: ["Sujud", "Ruku", "Opening Takbir (Takbir al-Iftitah)"],
    explanation: "Bravo! Prayer begins with the Opening Takbir ('Allahu Akbar')."
  },
  "q32-11": {
    category: "Prayer Pillars",
    question: "Standing in prayer is called 'Qiyam'. What is reciting verses from the Quran while standing called?",
    options: ["Qira'ah (Recitation)", "Niyyah", "Time"],
    explanation: "Awesome! Reciting the Quran in prayer is called 'Qira'ah'."
  },
  "q32-12": {
    category: "Prayer Pillars",
    question: "What is the final sitting at the end of prayer before giving Salam called?",
    options: ["Modest Dress", "Final Sitting (Qa'dah Akhirah)", "Wudu Purity"],
    explanation: "Perfect! The Final Sitting (Qa'dah Akhirah) is the 32nd and final Fard!"
  }
};
