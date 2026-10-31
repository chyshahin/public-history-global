// Placeholder editorial content for Public History Global.
// Replace these entries with your own verified research, audio files, and images.
// Each entry is written to be historically accurate at a general level, but should
// be reviewed, sourced, and expanded before publishing.

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  body: string[]
  author: string
  date: string
  region: string
  readTime: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: "silk-road-exchange-networks",
    title: "Beyond the Silk Road: Rethinking Eurasia's Exchange Networks",
    excerpt:
      "The overland routes linking East Asia to the Mediterranean were never a single road, but a shifting web of trade, faith, and disease that reshaped continents.",
    body: [
      "For more than a century, the term 'Silk Road' has stood in for a far messier reality: a constantly shifting set of caravan routes, river crossings, and mountain passes connecting Chang'an to Constantinople and countless points between.",
      "Silk was only one commodity among many. Merchants carried paper, glass, spices, horses, and — critically — ideas. Buddhism moved east along these corridors from South Asia into Central and East Asia, while Nestorian Christianity and later Islam moved with equal persistence.",
      "The network's importance was rarely constant. It expanded under stable empires like the Tang and the Mongol Yuan, when a traveler could reportedly cross the breadth of Asia under a single political umbrella, and contracted sharply during periods of regional fragmentation.",
      "Modern scholarship increasingly favors 'Silk Roads' — plural — to capture this reality: a layered system of maritime and overland routes rather than a single named highway, one whose legacies still shape trade and cultural exchange across Eurasia today.",
    ],
    author: "Dr. Amara Osei",
    date: "2024-11-02",
    region: "Central Asia",
    readTime: "7 min read",
    image: "/silk-road-caravan-illustration-historical.png",
  },
  {
    slug: "haitian-revolution-legacy",
    title: "The Haitian Revolution and the Limits of Enlightenment Liberty",
    excerpt:
      "The only successful large-scale slave revolt in history forced Europe and the Americas to confront the contradictions in their own revolutionary ideals.",
    body: [
      "When enslaved Africans and their descendants in Saint-Domingue rose up in 1791, they invoked the same language of liberty and rights that had animated the American and French Revolutions — and then went further than either had dared.",
      "Led first by figures like Toussaint Louverture and later Jean-Jacques Dessalines, the revolution dismantled the colony's plantation economy and, in 1804, produced the first independent Black republic in the Western Hemisphere: Haiti.",
      "The reaction from slaveholding powers was swift and punitive. France demanded a crushing indemnity for 'lost property' that Haiti spent over a century repaying, while the United States refused to recognize Haitian independence until 1862.",
      "Historians increasingly treat the Haitian Revolution not as a footnote to the Age of Revolutions but as its most radical expression — a direct challenge to the idea that liberty and equality could coexist with chattel slavery.",
    ],
    author: "Prof. Louis Charbonneau",
    date: "2024-10-18",
    region: "Caribbean",
    readTime: "9 min read",
    image: "/haitian-revolution-historical-painting-style.png",
  },
  {
    slug: "bronze-age-collapse",
    title: "The Bronze Age Collapse: One Crisis or Many?",
    excerpt:
      "Around 1200 BCE, the great palace civilizations of the Eastern Mediterranean fell within a few generations. Was it invasion, climate, or systems failure?",
    body: [
      "In the span of roughly a century, the Hittite Empire dissolved, Mycenaean palace centers were destroyed, and Egypt fended off a wave of seaborne raiders it called the 'Sea Peoples.' Trade networks that had linked the Eastern Mediterranean for centuries fractured.",
      "Earlier generations of historians favored a single dramatic cause — invasion, most often. Contemporary research points instead to a cascade of interlocking stresses: prolonged drought, earthquake clusters, and the fragility of highly centralized palace economies dependent on long-distance trade for tin and grain.",
      "Not every society collapsed equally. Egypt survived in weakened form; Assyria endured; Cyprus and parts of the Levant adapted. The unevenness of the collapse is itself a clue to how interconnected — and how brittle — the Late Bronze Age world had become.",
      "The period that followed, once dismissed as a 'dark age,' is now understood as a genuine reorganization of Mediterranean society, laying groundwork for the alphabet's spread, new political forms, and eventually the classical world.",
    ],
    author: "Dr. Amara Osei",
    date: "2024-09-27",
    region: "Eastern Mediterranean",
    readTime: "8 min read",
    image: "/bronze-age-ruins-mediterranean-historical.png",
  },
  {
    slug: "swahili-coast-city-states",
    title: "The Swahili Coast: Africa's Indian Ocean Cosmopolis",
    excerpt:
      "From Mogadishu to Kilwa, a chain of city-states built immense wealth on monsoon trade winds — and a culture that was African, Arab, Persian, and Indian all at once.",
    body: [
      "Long before European ships rounded the Cape of Good Hope, East African port cities like Kilwa, Mombasa, and Zanzibar were thriving nodes in an Indian Ocean trading world stretching from Arabia to China.",
      "The Swahili civilization that emerged was fundamentally African in origin, built by Bantu-speaking communities, but shaped by centuries of contact with Arab, Persian, and South Asian merchants who settled, intermarried, and traded gold, ivory, and enslaved people for textiles, porcelain, and glass.",
      "Swahili — both the language and the culture — reflects this synthesis: a Bantu grammatical structure carrying a vocabulary rich in Arabic loanwords, written for centuries in Arabic script before the introduction of Roman orthography.",
      "The arrival of Portuguese fleets in the late 15th century, followed by Omani domination, disrupted but did not erase this world. Ruins at Kilwa and the stone towns of Lamu and Zanzibar still bear witness to one of history's great cosmopolitan trading cultures.",
    ],
    author: "Dr. Njeri Wanjiru",
    date: "2024-09-05",
    region: "East Africa",
    readTime: "6 min read",
    image: "/swahili-coast-stone-town-historical.png",
  },
  {
    slug: "printing-press-reformation",
    title: "Gutenberg's Gamble: How Print Technology Fractured a Church",
    excerpt:
      "Movable type didn't cause the Reformation, but without it Martin Luther's ninety-five theses might have stayed a local dispute.",
    body: [
      "Johannes Gutenberg's mid-15th-century press did not immediately transform Europe. Its first major product, a Latin Bible, was aimed at existing markets for prestige manuscripts, not mass readership.",
      "What changed within decades was the cost and speed of reproducing text. By the time Martin Luther posted his grievances against indulgence sales in 1517, print shops across the German-speaking lands could turn a pamphlet around in days and distribute thousands of copies within weeks.",
      "Luther proved unusually adept at using the new medium, writing in German rather than Latin and favoring short, punchy pamphlets over dense theological treatises. His opponents in Rome, slower to adapt, found themselves consistently outpaced in the battle for public opinion.",
      "The result was not merely a religious schism but arguably Europe's first true mass-media event — a preview of how communication technology could outrun the institutions built to control information.",
    ],
    author: "Prof. Louis Charbonneau",
    date: "2024-08-14",
    region: "Europe",
    readTime: "7 min read",
    image: "/gutenberg-printing-press-workshop-historical.png",
  },
  {
    slug: "columbian-exchange-ecology",
    title: "The Columbian Exchange: An Ecological Revolution",
    excerpt:
      "1492 set in motion the largest transfer of plants, animals, people, and pathogens in human history — and the modern world's food supply is one of its lasting products.",
    body: [
      "Historian Alfred Crosby coined 'Columbian Exchange' to describe the biological transformation set off by sustained contact between the Eastern and Western Hemispheres after 1492.",
      "American crops — maize, potatoes, tomatoes, cacao, and chili peppers among them — spread across Africa, Europe, and Asia, in some cases becoming dietary staples within a few generations. The potato alone is credited with fueling significant population growth in early modern Europe.",
      "The exchange moved in both directions: horses, cattle, wheat, and sugarcane reshaped American landscapes and economies, often through coerced labor systems built specifically to grow them.",
      "The exchange's most devastating dimension was epidemiological. Smallpox, measles, and influenza, to which Indigenous American populations had no prior immunity, caused demographic collapse on a scale historians still debate — estimates for population decline across the Americas in the century after contact range as high as 90 percent in some regions.",
    ],
    author: "Dr. Njeri Wanjiru",
    date: "2024-07-30",
    region: "Global",
    readTime: "8 min read",
    image: "/columbian-exchange-crops-historical-illustration.png",
  },
]

export type PodcastEpisode = {
  slug: string
  episodeNumber: number
  title: string
  description: string
  date: string
  duration: string
  audioSrc: string
  image: string
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    slug: "ep-12-nonalignment",
    episodeNumber: 12,
    title: "The Non-Aligned Movement and the Cold War's Third Path",
    description:
      "Yugoslavia, India, Egypt, and Indonesia tried to chart a course between Washington and Moscow. We look at what non-alignment actually achieved — and where it fell short.",
    date: "2024-11-10",
    duration: "42 min",
    audioSrc: "",
    image: "/bandung-conference-1955-historical.png",
  },
  {
    slug: "ep-11-mansa-musa",
    episodeNumber: 11,
    title: "Mansa Musa and the Wealth of Mali",
    description:
      "A deep dive into the 14th-century ruler whose pilgrimage to Mecca reportedly disrupted gold markets across North Africa and the Mediterranean.",
    date: "2024-10-27",
    duration: "38 min",
    audioSrc: "",
    image: "/mali-empire-timbuktu-historical.png",
  },
  {
    slug: "ep-10-weimar",
    episodeNumber: 10,
    title: "Weimar Germany: Democracy Under Pressure",
    description:
      "Hyperinflation, political violence, and remarkable cultural output — how the Weimar Republic's fourteen years still shape debates about democratic fragility.",
    date: "2024-10-13",
    duration: "51 min",
    audioSrc: "",
    image: "/weimar-berlin-1920s-historical.png",
  },
  {
    slug: "ep-09-song-dynasty",
    episodeNumber: 9,
    title: "Song Dynasty China: The Almost-Industrial Revolution",
    description:
      "Movable type, paper money, and iron production at scales Europe wouldn't reach for centuries. Why didn't Song China industrialize first?",
    date: "2024-09-29",
    duration: "45 min",
    audioSrc: "",
    image: "/song-dynasty-china-historical-market.png",
  },
  {
    slug: "ep-08-partition",
    episodeNumber: 8,
    title: "Partition: The 1947 Division of British India",
    description:
      "One of the largest mass migrations in human history unfolded in a matter of months. We examine the decisions — and the improvisation — behind Partition.",
    date: "2024-09-15",
    duration: "49 min",
    audioSrc: "",
    image: "/1947-partition-india-historical.png",
  },
]

export type GalleryImage = {
  slug: string
  title: string
  caption: string
  era: string
  image: string
}

export const galleryImages: GalleryImage[] = [
  {
    slug: "gallery-bayeux",
    title: "The Bayeux Tapestry (detail)",
    caption:
      "An 11th-century embroidered narrative of the Norman Conquest of England, stretching nearly 70 meters.",
    era: "11th century",
    image: "/bayeux-tapestry-detail-historical-embroidery.png",
  },
  {
    slug: "gallery-terracotta",
    title: "The Terracotta Army",
    caption:
      "Thousands of life-sized statues buried with China's first emperor, Qin Shi Huang, around 210 BCE.",
    era: "3rd century BCE",
    image: "/terracotta-army-xian-historical.png",
  },
  {
    slug: "gallery-alhambra",
    title: "The Alhambra, Granada",
    caption:
      "A palace and fortress complex reflecting the artistic height of Nasrid rule in Al-Andalus.",
    era: "14th century",
    image: "/alhambra-granada-moorish-architecture-historical.png",
  },
  {
    slug: "gallery-benin-bronzes",
    title: "Benin Bronze Plaques",
    caption:
      "Cast plaques from the Kingdom of Benin documenting court life, looted by British forces in 1897.",
    era: "16th–17th century",
    image: "/benin-bronze-plaques-historical-artifact.png",
  },
  {
    slug: "gallery-machu-picchu",
    title: "Machu Picchu",
    caption:
      "An Inca citadel built high in the Andes, likely as a royal estate, abandoned within a century of construction.",
    era: "15th century",
    image: "/machu-picchu-inca-ruins-historical.png",
  },
  {
    slug: "gallery-nefertiti",
    title: "Bust of Nefertiti",
    caption:
      "A painted limestone bust of the Egyptian queen, discovered at Amarna in 1912.",
    era: "14th century BCE",
    image: "/nefertiti-bust-egyptian-historical-artifact.png",
  },
]
