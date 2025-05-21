import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const Base_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
//1000 elem
const datassss = {
  status: 'ok',
  news: [
    {
      id: 'd7c7cbdb-6726-45ff-9988-7a4806b4cf45',
      title: 'Alexa Bliss Praises WWE For Baby Accommodations',
      description:
        'Alexa Bliss is balancing the lifestyles of being a WWE Superstar and a full-time mom ... but she tells TMZ Sports her employer is making it a walk in the park.',
      url: 'https:\/\/www.tmz.com\/2025\/05\/18\/alexa-bliss-wwe-baby-accommodations\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/3d\/16by9\/2025\/05\/16\/3d795ffdd7f24abcbdafafe8b4be036f_xl.jpg',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 10:17:08 +0000',
    },
    {
      id: '0ddd95bc-d60f-490b-890c-e113557365dd',
      title: "'Money is tight when you're a teacher': Student loan borrowers brace for wage garnishment",
      description:
        'CNBC spoke with some of the student loan borrowers in default who are bracing for the consequences of wage garnishments and Social Security offsets. ',
      url: 'https:\/\/www.cnbc.com\/2025\/05\/18\/student-loan-wage-garnishment-borrowers-brace.html',
      author: 'Annie Nova,Ali McCadden',
      image:
        'https:\/\/image.cnbcfm.com\/api\/v1\/image\/108146720-1747403922038-gettyimages-2207473905-AFP_38PZ2RD.jpeg?v=1747403942&w=1920&h=1080',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 10:15:01 +0000',
    },
    {
      id: '53eb5739-958d-4c6b-9dc8-66e31b38b699',
      title: "'I own the store': Trump seeks a direct role in the economy",
      description:
        "From prices to tariffs to dealmaking, Trump's involvement in economic issues prompts both frustration and applause.",
      url: 'https:\/\/www.washingtonpost.com\/politics\/2025\/05\/18\/trump-economy-tariffs-taxes-trade\/',
      author: 'Naftali Bendavid',
      image: 'None',
      language: 'en',
      category: ['politics'],
      published: '2025-05-18 10:00:43 +0000',
    },
    {
      id: '62c29966-5391-4154-a5cc-8ee890aa57b3',
      title: 'The right reviled Francis. How will Pope Leo XIV confront the schism in the US church?',
      description:
        'Some conservatives rejected Francis for his leftist leanings, but Leo could be able to realize his forerunner\u2019s visions',
      url: 'https:\/\/www.theguardian.com\/world\/2025\/may\/18\/pope-leo-us-conservatives',
      author: 'Stephanie Kirchgaessner',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/95e458c1bcb5b76773326231fb9b300ece02ef6e\/289_0_2923_2339\/master\/2923.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=766ba9d22d89e9daf64c74defc9c86cf',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 10:00:32 +0000',
    },
    {
      id: '8afce9ef-7538-47fc-af46-435228114260',
      title: 'Jeanine Pirro is latest loyalist to join Fox News to Trump administration pipeline',
      description:
        'Tapping a TV host to lead one of the key US prosecutor\u2019s offices? For image-obsessed Trump it\u2019s a well-worn path',
      url: 'https:\/\/www.theguardian.com\/us-news\/2025\/may\/18\/jeanine-pirro-interim-attorney-fox-news-trump',
      author: 'Adam Gabbatt',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/8993ac146f30f92f86e9fafd66102750d4347be9\/320_0_3230_2583\/master\/3230.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=d479bbfca59ed17ce09599dd36099828',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 10:00:31 +0000',
    },
    {
      id: 'fb8bb273-f3da-40db-87e0-89ecbdbcb26d',
      title:
        'This is how we do it: \u2018I didn\u2019t want to issue an ultimatum \u2013 but sex is non-negotiable for me\u2019',
      description:
        'Iris likes to have sex often, but Eva found that the pressures of work had put her off. Now, they\u2019re both in a good place and having more and better sex',
      url: 'https:\/\/www.theguardian.com\/lifeandstyle\/2025\/may\/18\/this-is-how-we-do-it-i-didnt-want-to-issue-an-ultimatum-but-sex-is-non-negotiable-for-me',
      author: 'Naomi Larsson Pi\u00f1eda',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/68ac27ae85460cbc7ba138aebaef0c8a3aeacd19\/0_0_2000_1600\/master\/2000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=300d77f3ff5b8fd4ecac7e883b299f90',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 10:00:31 +0000',
    },
    {
      id: 'd965e072-0831-498a-8c4f-5ffef131291a',
      title: 'Surgeons Perform First Human Bladder Transplant',
      description:
        'Mr. Larrainzair, a husband and father of four, had survived a rare type of bladder cancer and a surgery to resect the bladder tumor had left him "without much of a bladder at all."...',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/health\/bladder-transplant-human.html',
      author: 'Emily Baumgaertner Nunn',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 10:00:27 +0000',
    },
    {
      id: '1c1f6141-bd89-4e4b-bcfb-6da596f0aafe',
      title: 'Your Android devices are getting several upgrades for free - including a big one for Auto',
      description:
        "With Google's next major Android update, you'll soon be able to access the powerful Gemini assistant wherever you are.",
      url: 'https:\/\/www.zdnet.com\/article\/your-android-devices-are-getting-several-upgrades-for-free-including-a-big-one-for-auto\/',
      author: '@ZDNET',
      image:
        'https:\/\/www.zdnet.com\/a\/img\/resize\/65c26d4ac88c59a1b25a47c0307a8b244a4df96b\/2025\/04\/10\/4da166e6-09fd-4627-9e7f-0c23d8964bbd\/dsc05261.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['business'],
      published: '2025-05-18 10:00:21 +0000',
    },
    {
      id: 'd902a070-f5a6-47a5-8ef6-7b558e9b5bf2',
      title: 'I changed 6 settings on my Roku TV to give it an instant performance boost',
      description:
        'Here are a few step-by-step methods to clear your Roku cache and boost performance in just minutes.',
      url: 'https:\/\/www.zdnet.com\/home-and-office\/home-entertainment\/i-changed-6-settings-on-my-roku-tv-to-give-it-an-instant-performance-boost\/',
      author: '@ZDNET',
      image:
        'https:\/\/www.zdnet.com\/a\/img\/resize\/d4b66186045321c7697e3423f936df2cc899c764\/2025\/05\/05\/369c550c-7117-4c04-ab58-a4627d676ce5\/3.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['business'],
      published: '2025-05-18 10:00:20 +0000',
    },
    {
      id: '26666ce2-86bf-4866-8989-1c34913e63d1',
      title: "This 3-in-1 robot vacuum kept my floors clean all season, and it's priced to compete",
      description:
        'Though not the first three-in-one robot vacuum on the market, the Ecovacs Deebot T30S Combo is one of the most affordable, especially with this deal.',
      url: 'https:\/\/www.zdnet.com\/home-and-office\/kitchen-household\/this-3-in-1-robot-vacuum-kept-my-floors-clean-all-season-and-its-priced-to-compete\/',
      author: '@ZDNET',
      image:
        'https:\/\/www.zdnet.com\/a\/img\/resize\/fff2e88ff7399a01e8a2f55f0284b19187ee611f\/2024\/05\/15\/53b951b9-40e8-4beb-97db-7af03cc8fe85\/8.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['business'],
      published: '2025-05-18 10:00:15 +0000',
    },
    {
      id: '447d0eff-28a4-46d5-aa54-818a87cefe97',
      title: "U.S. funding halted Africa's HIV crisis. Trump's cuts have forced a reckoning.",
      description:
        'How the abrupt withdrawal of U.S. foreign aid in Africa exposed its devastating downside for recipients.',
      url: 'https:\/\/www.washingtonpost.com\/world\/2025\/05\/18\/usaid-withdrawal-africa-healthcare\/',
      author: 'Chico Harlan, Ilan Godfrey',
      image: 'None',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 10:00:00 +0000',
    },
    {
      id: '3114b52f-32ab-4e66-9d04-8607603c9b7a',
      title: "Trump orders the government to stop enforcing rules he doesn't like",
      description:
        'Critics say the administration is breaking the law and sidestepping the rulemaking process that presidents of both parties have long followed.',
      url: 'https:\/\/www.washingtonpost.com\/nation\/2025\/05\/18\/trump-enforcement-halt-regulations-laws\/',
      author: 'Maxine Joselow, Hannah Natanson, Ian Duncan',
      image: 'None',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 10:00:00 +0000',
    },
    {
      id: '2856bc58-af6e-479c-ad3c-1ca67657aa5a',
      title: "Maryland and Georgetown men's lacrosse teams know each other well",
      description: 'Read more',
      url: 'https:\/\/www.washingtonpost.com\/sports\/2025\/05\/18\/maryland-georgetown-ncaa-lacrosse\/',
      author: 'Gene Wang',
      image: 'None',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 10:00:00 +0000',
    },
    {
      id: '23842fba-f185-4c05-b8c4-de28be908008',
      title: 'Ex-NBA Star Michael Carter-Williams Set To Make Boxing Debut, Hoping For Knockout',
      description:
        "Ex-NBA star Michael Carter-Williams is making his boxing debut on May 29 and he's hoping to knock out his opponent.",
      url: 'https:\/\/www.tmz.com\/2025\/05\/18\/ex-nba-michael-carter-williams-boxing-debut-knockout\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/45\/16by9\/2025\/04\/28\/45004cd2dc07445f9c1008c7211bcc63_xl.jpg',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 09:50:13 +0000',
    },
    {
      id: '88bf4954-e920-43f0-9537-c90ba136232d',
      title: "Celebrities' Renaissance Faire Round Up ... Huzzah!",
      description:
        "Good Day! Thou art most welcome to join us as we embark on a journey to the Renaissance Faire with Hollywood's lords n' ladies! From jousting to shopping for fine jewelry ... and chowin' down on turkey legs, your exciting adventure awaits!",
      url: 'https:\/\/www.tmz.com\/2025\/05\/18\/celebrities-renaissance-faire-round-up-photos\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/91\/16by9\/2025\/05\/12\/910a666762ab4acc81a19c8e9992a085_xl.jpg',
      language: 'fr',
      category: ['entertainment'],
      published: '2025-05-18 09:50:13 +0000',
    },
    {
      id: 'a8cc1961-068f-4183-bd3b-2f556b58a21f',
      title: "Diddy, Nelly & French Montana Discuss French's New Album in 2018 Studio Session",
      description:
        "Diddy's trial has many thinking about his alleged crimes ... but, he rose to fame for his musical acumen -- and, TMZ has a clip of him in his professional element from back in the day.",
      url: 'https:\/\/www.tmz.com\/2025\/05\/18\/diddy-nelly-french-montana-discuss-album-studio-session\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/79\/16by9\/2025\/05\/17\/7912d0de85f84573a78d88361a7f8963_xl.jpg',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 09:50:13 +0000',
    },
    {
      id: '1b74ead5-248b-416a-8d9b-b8734bd2d080',
      title: 'Elton John says UK government being \u2018absolute losers\u2019 over AI copyright plans',
      description:
        'Songwriter says he thinks it is a \u2018criminal offence\u2019 to let tech firms use protected work without permission',
      url: 'https:\/\/www.theguardian.com\/music\/2025\/may\/18\/elton-john-says-uk-government-being-absolute-losers-over-ai-copyright-plans',
      author: 'Dan Milmo',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/59002bb2bd76eae7ca75dd14353d3bae3ea682cf\/102_0_2656_2124\/master\/2656.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=0831f9941d4bcbcb7029400c0c9d1fdd',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 09:47:00 +0000',
    },
    {
      id: '2fa39ad3-249e-430f-9ca2-e910384186db',
      title: 'ECB\u2019s Lagarde Says Euro\u2019s Strength Is Counterintuitive, But Justified',
      description:
        'European Central Bank President Christine Lagarde said the recent rise of the euro against the dollar is a consequence of US President Donald Trump\u2019s erratic policies and an opportunity for Europe.\n\n\u201c...',
      url: 'https:\/\/www.ndtvprofit.com\/global-economics\/ecbs-lagarde-says-euros-strength-is-counterintuitive-but-justified',
      author: 'Bloomberg News',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2025-05-18%2Ffujytq7d%2F433034260.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 09:44:38 +0000',
    },
    {
      id: '04007832-878c-4aac-8ab6-cf952a6ac266',
      title: 'Adani Defence & Aerospace And Sparton Enter Partnership\nTo Indigenise Anti-Submarine Warfare Solutions',
      description:
        'Adani Defence & Aerospace, the defence arm of Adani Enterprises, has partnered with Sparton- a group company of Elbit Systems, for a strategic collaboration to assemble Anti-Submarine Warfare solutions for the Indian Navy, according a press release on Sunday.',
      url: 'https:\/\/www.ndtvprofit.com\/business\/adani-defence-aerospace-and-sparton-enter-partnershipto-indigenise-anti-submarine-warfare-solutions',
      author: 'Pallavi Nahata',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2025-05-18%2Fx5beh3kf%2F3a954054-06db-44dd-94fb-ba561a46a3a4.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 09:39:48 +0000',
    },
    {
      id: '14c9c52c-92cf-48b9-be93-2d1b72e751a6',
      title:
        "Conan O'Brien, Ryan Reynolds mock Meghan Markle's luxury jams, comparing it to his dad's job as food broker",
      description:
        "Conan O'Brien and Ryan Reynolds poked fun at Meghan Markle's recent foray into the jam industry this week, comparing her to Reynolds' father's work as a \"food broker.\"Reynolds was discussing his late father, James Reynolds,' different careers, telling the comedian on his \"Conan O'Brien Needs a Frien...",
      url: 'https:\/\/www.foxnews.com\/entertainment\/conan-obrien-ryan-reynolds-mock-meghan-markles-luxury-jams-comparing-his-dads-job-food-broker',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:30:15 +0000',
    },
    {
      id: 'f63ed8c1-cf70-4f93-a351-3b768acda433',
      title: 'Severe Weather Continues to Threaten the Middle of the U.S.',
      description:
        'Storms capable of producing hail larger than golf balls, strong winds and tornadoes are expected in the Great Plains on Sunday and Monday.',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/weather\/sunday-tornado-forecast-kansas-oklahoma-storms.html',
      author: 'Amy Graff',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:30:02 +0000',
    },
    {
      id: 'b1fc5962-883d-40e7-92b4-fd7273ef7664',
      title: "Pope Leo XIV calls for unity and 'missionary spirit' during inaugural mass at Vatican",
      description:
        '"I come to you as a brother," the pontiff told the faithful in his first homily.\n\nPope Leo XIV on his popemobile tours St. Peter\'s Square at the Vatican prior to the inaugural Mass of his pontificate,...',
      url: 'https:\/\/abcnews.go.com\/International\/pope-leo-xiv-tours-st-peters-square-popemobile\/story?id=121919621',
      author: 'Abc News',
      image:
        'https:\/\/i.abcnewsfe.com\/a\/70bfed56-f617-41ec-ad35-5199d4f1f173\/pope-main_1747553026722_hpMain_16x9.jpg?w=1600',
      language: 'en',
      category: ['national'],
      published: '2025-05-18 09:25:25 +0000',
    },
    {
      id: '4d478ceb-ed39-4235-b675-5d38596cfa40',
      title: 'Lancashire v Derbyshire, Somerset v Sussex and more: county cricket \u2013 live',
      description:
        'After a tumultuous few days, Lancashire ground their way past 450 against Derbyshire at Old Trafford. But despite the diligence of the batting, that wasn\u2019t why the people came. The only batter to ge...',
      url: 'https:\/\/www.theguardian.com\/sport\/live\/2025\/may\/18\/lancashire-v-derbyshire-somerset-v-sussex-and-more-county-cricket-live',
      author: 'Tanya Aldred',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/d5844505be2417abac937c33472630a2344ff48a\/323_0_6880_5504\/master\/6880.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=3f8b103c709384c38de0a783bb791b09',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 09:19:13 +0000',
    },
    {
      id: '5b2eca13-6677-4fd6-9b28-844319a6e260',
      title: 'India Largest Market For Electric Three-Wheelers: IEA',
      description:
        'This growing trend, it said, looks set to continue thanks to policy support under the new PM E-DRIVE scheme, which allocated budget in 2024 to support the roll-out of more than 3,00,000 electric 3Ws f...',
      url: 'https:\/\/www.ndtvprofit.com\/markets\/india-largest-market-for-electric-three-wheelers-iea',
      author: 'PTI',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2024-06%2F2e106f8d-151f-4c48-966a-8061886bb8ba%2Fmahindra_treo_67242.webp?rect=0%2C11%2C480%2C252&w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 09:18:53 +0000',
    },
    {
      id: '2d739e86-ee84-4776-ace2-3b8073b5cd94',
      title: 'IMF Imposes 11 New Conditions On Pakistan, Warns Against Risks To Bailout Programme: Report',
      description:
        'The International Monetary Fund has slapped 11 new conditions on Pakistan for the release of the next tranche of its bailout programme and warned that tensions with India could heighten risks to the s...',
      url: 'https:\/\/www.ndtvprofit.com\/world\/imf-imposes-11-new-conditions-on-pakistan-warns-against-risks-to-bailout-programme-report',
      author: 'PTI',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2025-05-18%2Ffmhlmdx3%2FKarachistockexchange4729587341.jpg?rect=0%2C79%2C800%2C420&w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 09:18:37 +0000',
    },
    {
      id: '5322d98f-a1c0-41a1-9504-d23f046db04b',
      title: "India's Smartphone Exports Soar, Surpassing Petroleum Products, Diamonds In FY25",
      description:
        "India's smartphone exports surged nearly fivefold to the US and about fourfold to Japan in the past three years, propelling the segment to surpass petroleum products and diamonds as the country's top ...",
      url: 'https:\/\/www.ndtvprofit.com\/business\/indias-smartphone-exports-soar-surpassing-petroleum-products-diamonds-in-fy25',
      author: 'PTI',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2025-05-18%2F5lbssh9m%2Fdaniel-romero-TpXoTb1uR5A-unsplash.jpg?rect=0%2C43%2C3800%2C1995&w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 09:18:15 +0000',
    },
    {
      id: 'de6bfd90-6068-4297-873c-347e2bcd5e7d',
      title: 'BellRing Brands Stock: A Clearing Event Is Over, Upgrade To Buy (NYSE:BRBR)',
      description:
        "BellRing Brands' earnings disappointed due to high expectations, despite solid results and reaffirmed guidance. Read why I rate BRBR stock a Buy.",
      url: 'https:\/\/seekingalpha.com\/article\/4787913-bellring-brands-a-clearing-event-is-over-upgrade-to-buy?source=feed_all_articles',
      author: 'Modern Time Value Investing',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1479720563\/image_1479720563.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 09:15:19 +0000',
    },
    {
      id: 'd4a2ff67-2f4a-4f67-934f-9acaf07b8a3d',
      title:
        'Pope Leo holding inaugural mass at the Vatican in front of thousands as crowds chant \u2018Viva il Papa\u2019',
      description:
        'Pope Leo XIV spoke of unity and communion as the pillars of the Catholic Church during his first homily',
      url: 'https:\/\/www.yahoo.com\/news\/pope-leo-holding-inaugural-mass-075527572.html',
      author: 'Tom Watling',
      image: 'https:\/\/media.zenfs.com\/en\/the_independent_577\/bd2820448f0e5fae3f6fdc0a6fb6ff2b',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:11:01 +0000',
    },
    {
      id: '949c0eac-0299-436d-9c3e-7c9398c4d95b',
      title: 'Vital Farms: A High-Growth Outlier In The Defensive Staples Sector',
      description:
        'Vital Farms is expanding its supply chain, aiming to increase capacity by 30% in FY25 and boost household penetration. Read why I rate VITL stock a Buy.',
      url: 'https:\/\/seekingalpha.com\/article\/4787912-vital-farms-high-growth-outlier-in-the-defensive-staples-sector?source=feed_all_articles',
      author: 'Abdul-Rahman Bhery',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/2181053669\/image_2181053669.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 09:10:07 +0000',
    },
    {
      id: '73c009de-1ae7-4479-90c6-3984dca6e048',
      title: 'Orion S.A.: The Clock Is Ticking (NYSE:OEC)',
      description:
        'Orion trades at low multiples with potential upside from new plants and steady cash flow, but faces execution risks. Find out why OEC stock is downgraded to buy.',
      url: 'https:\/\/seekingalpha.com\/article\/4787911-orion-clock-is-ticking?source=feed_all_articles',
      author: 'Vince Martin',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/2183253022\/image_2183253022.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 09:08:24 +0000',
    },
    {
      id: '52d7fa6f-5af3-4b37-bcb6-dfea8d15978e',
      title: 'Paramount Resources: Long-Term Strategy Summarized',
      description:
        'I analyze oil and gas companies like Paramount Resources and related companies in my service, Oil & Gas Value Research, where I look for undervalued names in the oil and gas space. I break down everyt...',
      url: 'https:\/\/seekingalpha.com\/article\/4787910-paramount-resources-long-term-strategy-summarized?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1809229209\/image_1809229209.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 09:04:39 +0000',
    },
    {
      id: '8ff4e8b7-de3a-4e6c-b557-c9269d5a5534',
      title: 'The 1-Minute Market Report May 18, 2025',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787909-the-1-minute-market-report-may-18-2025?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 09:03:44 +0000',
    },
    {
      id: '25a0f510-2112-4675-ac54-cdddddc835b7',
      title: 'Climber scales Everest for 19th time, breaking record for most climbs by a non-Sherpa',
      description:
        'A British mountain guide has scaled Mount Everest for the 19th time, breaking his own record for the most ascents of the world\u2019s highest mountain by a non-Sherpa guide',
      url: 'https:\/\/abcnews.go.com\/International\/wireStory\/british-climber-scales-everest-19th-time-breaking-record-121920329',
      author: 'ABC News',
      image:
        'https:\/\/i.abcnewsfe.com\/a\/82e20f69-ebcb-4485-a756-f5bab6762a69\/wirestory_39ad0fba4f799f0fe725fced9ccda17b_16x9.jpg?w=1600',
      language: 'en',
      category: ['national'],
      published: '2025-05-18 09:02:26 +0000',
    },
    {
      id: 'a2c3825d-f778-4df9-9778-428095773f52',
      title:
        "Apple iPhone Production In US 'Not Feasible,' Samsung's Surprise Launch And More: This Week In Appleverse",
      description: '',
      url: 'https:\/\/www.benzinga.com\/news\/25\/05\/45483794\/apple-iphone-production-in-us-not-feasible-samsungs-surprise-launch-and-more-this-week-in-appleverse',
      author: 'Navdeep Yadav',
      image:
        'https:\/\/cdn.benzinga.com\/files\/images\/story\/2025\/05\/18\/Rimini--Italy---December-05--2015-Apple-.jpeg?width=1200&height=800&fit=crop',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 09:02:00 +0000',
    },
    {
      id: 'e25814db-5436-42e7-92ea-2f73d3bc7c34',
      title: 'Why Buttigieg, Walz, Beshear and Other Democrats Are Already Teasing 2028 Bids',
      description:
        'Senator Ruben Gallego of Arizona, Gov. Tim Walz of Minnesota and Gov. Andy Beshear of Kentucky are among a group of Democrats widely seen as possible candidates for president in 2028....',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/us\/politics\/democrats-2028-presidential-election.html',
      author: 'Lisa Lerer and Reid J. Epstein',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:01:21 +0000',
    },
    {
      id: 'd3b96c7f-cbcb-44c8-b628-4f8e72beddc1',
      title: "New York Liberty's Championship Ring Is a First in More Ways Than One",
      description: "There's a secret under all that bling.",
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/style\/new-york-liberty-championship-ring.html',
      author: 'Vanessa Friedman',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:46 +0000',
    },
    {
      id: 'e0d9a71a-ac99-4c6b-a93d-5a840a6a0a80',
      title: 'Video: Inside a Plan to Shut Down Pro-Palestinian Activism',
      description:
        'What is Project Esther? Katie J.M. Baker, a national investigative correspondent for The New York Times, explores the Heritage Foundation\u2019s plan to shut down pro-Palestinian activism, as well as actions taken by the Trump administration that appear to mirror its goals.',
      url: 'https:\/\/www.nytimes.com\/video\/us\/politics\/100000010154898\/inside-a-plan-to-shut-down-pro-palestinian-activism.html',
      author: 'Katie J.M. Baker, Farah Otero-Amad, Christina Shaman, James Surdam and Gabriel Blanco',
      image:
        'https:\/\/static01.nyt.com\/images\/2025\/05\/11\/us\/politics\/THUMBNAIL\/THUMBNAIL-facebookJumbo.jpg?video-overlay',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:38 +0000',
    },
    {
      id: 'fc163cad-aea9-49da-b5e8-f190a90c3ba7',
      title: "AI breakthrough allows doctors to 'see' dangerous blood clots forming",
      description:
        "AI technology could be used to detect potentially deadly blood clots before they strike.That's according to scientists at the University of Tokyo, who say they have created a non-invasive way to observe clotting activity in blood as it occurs.The new artificial intelligence tool uses a powerful micr...",
      url: 'https:\/\/www.foxnews.com\/health\/ai-breakthrough-allows-doctors-see-dangerous-blood-clots-forming',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:37 +0000',
    },
    {
      id: '3280e73f-3a02-4cb8-b7e7-26ed6fd77a47',
      title: 'Meet the small-business owner suing Trump over tariffs',
      description:
        'PENSACOLA, Florida \u2014 After a long day promoting her new cookbook, entrepreneur Emily Ley sank into her couch and began writing about the threat that President Donald Trump\u2019s tariffs posed to her nine-...',
      url: 'https:\/\/www.washingtonpost.com\/politics\/2025\/05\/18\/trump-tariffs-small-business-lawsuits\/',
      author: 'Cat Zakrzewski',
      image:
        'https:\/\/www.washingtonpost.com\/wp-apps\/imrs.php?src=https:\/\/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com\/public\/U2YPXOVI3XALAC2UF5EGVOQNSE_size-normalized.JPG&w=1440',
      language: 'en',
      category: ['politics'],
      published: '2025-05-18 09:00:33 +0000',
    },
    {
      id: '6ffc8f73-010b-47d7-beb0-5157bec2209a',
      title: '\u2018Goodison Park has been part of saving my life\u2019: Everton fans mourn club\u2019s Mersey move',
      description:
        'Jamie Yates was heavily medicated, in a secure mental health unit, and in the middle of a breakdown when he had a profound dream. He was back in Liverpool, walking with his daughter along the tightly ...',
      url: 'https:\/\/www.theguardian.com\/football\/2025\/may\/18\/goodison-park-everton-mersey-football',
      author: 'Alexandra Topping',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/bbc1ad02668d8d404946273f55b031dc4e622b2f\/1049_0_2835_2268\/master\/2835.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8a532cb2819a5ce0cf4532ee2ce05a20',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 09:00:30 +0000',
    },
    {
      id: '503633f6-aa25-4162-9a2b-7e0e312029e8',
      title: "Inside the Heritage Foundation's Plan to Crush the U.S. Palestinian Movement",
      description: 'The Heritage Foundation headquarters in Washington, D.C....',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/us\/project-esther-heritage-foundation-palestine.html',
      author: 'Katie J.M. Baker',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:26 +0000',
    },
    {
      id: '35eba799-8b33-40d5-9008-fb181e2a9f21',
      title: "Minnesota Iron Miners Lost Their Jobs, But Not Their Faith in Trump's Tariffs",
      description: 'The 85-foot-tall "Iron Man" monument in Chisholm, Minn....',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/business\/trump-tariffs-mining-steel.html',
      author: 'Talmon Joseph Smith and Tim Gruber',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:17 +0000',
    },
    {
      id: '1199de90-257b-48ac-9f77-adb06082922b',
      title: "The Role My Parents Never Expected: Raising My Sister's Kids",
      description: 'Jane with two of her grandchildren....',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/magazine\/grandparents-families-children-kids.html',
      author: 'Frances Dodds',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:14 +0000',
    },
    {
      id: '367d928f-083e-4a92-9196-617f5594b9d4',
      title:
        "Diddy's former prot\u00e9g\u00e9 Aubrey O'Day confirms she won't testify at rapper's sex-trafficking trial",
      description:
        "Sean \"Diddy\" Combs' former prot\u00e9g\u00e9 Aubrey O'Day has confirmed that she will not be testifying in the former rapper's ongoing sex-trafficking trial.In 2005, the 41-year-old singer rose to fame when she appeared on Diddy's MTV show \"Making the Band\" and became a member of the girls' group Danity Kane....",
      url: 'https:\/\/www.foxnews.com\/entertainment\/diddys-former-protege-aubrey-oday-confirms-she-not-testify-rappers-sex-trafficking-trial',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:11 +0000',
    },
    {
      id: '62f94f3c-1861-4f00-b53a-e1e35bc178fc',
      title: "Energized by Kennedy, Texas 'Mad Moms' Are Chipping Away at Vaccine Mandates",
      description:
        '"We\'re excited about having individuals in the federal government who will actually cooperate with us. But what exactly that means, we don\'t know," said Rebecca Hardy, the co-founder of Texans for Vaccine Choice....',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/us\/politics\/texas-moms-vaccine-mandates.html',
      author: 'Sheryl Gay Stolberg',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:08 +0000',
    },
    {
      id: '2725e795-1704-4541-bd25-07268342b2e0',
      title: "Frank Sinatra armed himself after learning he was on Charles Manson's hit list: book",
      description:
        "The summer of 1969 haunted everyone in Hollywood \u2014 including Frank Sinatra.The late singer's hairdresser, Joseph Paris, recalled how the star was among those targeted by Charles Manson and his followers after masterminding the gruesome murders of pregnant actress Sharon Tate and six others.Paris rec...",
      url: 'https:\/\/www.foxnews.com\/entertainment\/frank-sinatra-armed-himself-learning-charles-mansons-hit-list-book',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 09:00:06 +0000',
    },
    {
      id: '98a5601f-6254-4dba-84a6-febfc4fa341a',
      title: "Bukele's crackdown pushes top Salvadoran journalists to flee",
      description:
        'SAN SALVADOR \u2014 Their news site had just exposed details of Salvadoran President Nayib Bukele\u2019s alleged deals with the country\u2019s gangs. Now the three journalists were faced with a choice they had long ...',
      url: 'https:\/\/www.washingtonpost.com\/world\/2025\/05\/18\/bukele-authoritarian-el-faro-salvador\/',
      author: 'Samantha Schmidt',
      image:
        'https:\/\/www.washingtonpost.com\/wp-apps\/imrs.php?src=https:\/\/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com\/public\/FPY66CATGIXD27PX3YXUEBMI2I_size-normalized.jpg&w=1440',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 09:00:04 +0000',
    },
    {
      id: '0dadac70-ea91-4edc-aaaa-566f4e8010f1',
      title: 'A study finds stacking bricks differently could help this country fight air pollution',
      description:
        'A study finds stacking bricks differently could help this country fight air pollution\n\ntoggle caption Ahmed Salahuddin\/NurPhoto via Getty Images\/NurPhoto\n\nDuring the dry winter months in Bangladesh, t...',
      url: 'https:\/\/www.npr.org\/sections\/goats-and-soda\/2025\/05\/18\/nx-s1-5389880\/bangladesh-pollution-coal-bricks-air-quality',
      author: 'Jonathan Lambert',
      image:
        'https:\/\/npr.brightspotcdn.com\/dims3\/default\/strip\/false\/crop\/6720x3780+0+350\/resize\/1400\/quality\/100\/format\/jpeg\/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Fa1%2F20%2Fd2bd05dc4fe5b9cbe7b492f6bfc8%2Findia-brick-kilns-1.jpg',
      language: 'en',
      category: ['entertaiment'],
      published: '2025-05-18 09:00:00 +0000',
    },
    {
      id: '8fa95278-ee96-4ab4-a564-f41c883c2743',
      title: 'Touchscreen-Stift-Test: Mit welchem Stift gelingen Notizen & Co. am besten?',
      description:
        'Ob Zeichnen, Unterschreiben oder Notieren: Auf einem Tablet sehen von Hand gezogene Linien und Schlenker meist unbeholfen aus. Im schlimmsten Fall sind schnell angefertigte Vermerke oder Skizzen im An...',
      url: 'https:\/\/www.computerbild.de\/bestenlisten\/Touchscreen-Stift-Test-39695709.html',
      author: 'Robin Smans',
      image:
        'https:\/\/i.computer-bild.de\/imgs\/1\/5\/6\/2\/7\/4\/1\/7\/Apple-Pencil-Pro-im-Test-2516-1024x576-ef6e026fd9491ecc.jpg',
      language: 'de',
      category: ['technology'],
      published: '2025-05-18 09:00:00 +0000',
    },
    {
      id: '2b9b3fdb-75ed-4ac1-8752-6535c0118a22',
      title: "For Democrats, there's no escaping (for now) the Biden hangover from 2024",
      description:
        'The verdict is in. Joe Biden is to blame. So too are the advisers who protected him in the White House by hiding his frailties. Together they unwittingly choreographed the comeback of President Donald...',
      url: 'https:\/\/www.washingtonpost.com\/politics\/2025\/05\/18\/biden-democrats-2024-aging-books-trump\/',
      author: 'Dan Balz',
      image:
        'https:\/\/www.washingtonpost.com\/wp-apps\/imrs.php?src=https:\/\/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com\/public\/PBDA5RHQ5FCKF6IQ4W4F23CIUU.JPG&w=1440',
      language: 'en',
      category: ['politics'],
      published: '2025-05-18 09:00:00 +0000',
    },
    {
      id: '4c6c43e6-8300-4da4-b149-a9fb9de0bb7d',
      title: 'Losing faith: Rural religious colleges are among the most endangered',
      description:
        'Losing faith: Rural religious colleges are among the most endangered\n\ntoggle caption Mike Rundle for The Hechinger Report\n\nDAVENPORT, Iowa \u2014 The Catholic prayer for the faithful echoed off the limesto...',
      url: 'https:\/\/www.npr.org\/2025\/05\/18\/nx-s1-5381012\/rural-religious-colleges-facing-threats',
      author: 'Jon Marcus',
      image:
        'https:\/\/npr.brightspotcdn.com\/dims3\/default\/strip\/false\/crop\/5799x3262+0+302\/resize\/1400\/quality\/100\/format\/jpeg\/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F75%2Fca%2Fa3446f8c497d8ee10b17f7083b8e%2Fhe-religious-colleges-34.jpg',
      language: 'en',
      category: ['entertaiment'],
      published: '2025-05-18 09:00:00 +0000',
    },
    {
      id: '7816369d-b518-4003-942e-cb206892e4d0',
      title: 'Toast: This Is Just The Beginning (Rating Upgrade)',
      description:
        'Toast shows strong growth, operating leverage, and expanding market presence through AI and enterprise wins. See why TOST stock is upgraded to buy.',
      url: 'https:\/\/seekingalpha.com\/article\/4787908-toast-just-beginning?source=feed_all_articles',
      author: 'Amrita Roy',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1371372574\/image_1371372574.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:57:10 +0000',
    },
    {
      id: '9fc5e208-5a13-45e6-9cd7-3f5f01ad440a',
      title: 'Quantitative Look At GLD, COT Reports Point To Continued Growth',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787907-quantitative-look-at-gld-cot-reports-point-to-continued-growth?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:53:38 +0000',
    },
    {
      id: '4f519708-34ca-41f2-b5f2-a77f39655975',
      title: "35 Barron's Pro-Picks: One Ideal May DiviDog",
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787906-35-barrons-pro-picks-one-ideal-may-dividog?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:51:28 +0000',
    },
    {
      id: '772de8e9-9bc2-4c0a-9c4a-c23a32827a48',
      title: "How Are Trump's Tariffs Impacting Commodities?",
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787905-how-are-trumps-tariffs-impacting-commodities?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:42:00 +0000',
    },
    {
      id: '154a8fb5-f03e-4f1d-b555-2d4c5b795dc1',
      title: "Celebs Get Their Green on for St. Patrick's Day 2025",
      description:
        "Rockin' green to celebrate St. Patrick's Day, some of Hollywood's biggest celebs are in the spirit -- and lucky for you, we're spillin' the brew!",
      url: 'https:\/\/www.tmz.com\/2025\/03\/17\/celebs-get-their-green-on-for-st-patricks-day\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/8a\/16by9\/2025\/03\/17\/8ade405d093e40fd94ddcd5064876256_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '8188a74a-ab08-4746-b93c-2dac8f47b87a',
      title: "Lil Nas X Pours Shots Down Fans' Mouths at Album Release Party",
      description:
        'Play video content\n\nLil Nas X helped get his fans all liquored up during his album release party over the weekend, pouring booze straight into mouths as he performed for a packed crowd!\n\nNas took the ...',
      url: 'https:\/\/www.tmz.com\/2025\/03\/17\/lil-nas-x-album-release-party-pours-liquor-fans-mouths\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/7a\/16by9\/2025\/03\/17\/7a3ac831186e40d7bf35dbf7bbddac2c_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '0f366b26-79e9-4ba0-a255-0cd4cdef798d',
      title: 'Justin Bieber Throwing Private Coachella Party at Festival Fairgrounds',
      description:
        "Justin Bieber's trying something new at Coachella this year ... hosting a private party for his wife and some Hollywood friends ... and it's on the festival fairgrounds.",
      url: 'https:\/\/www.tmz.com\/2025\/04\/11\/justin-bieber-throwing-private-coachella-party\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/cc\/16by9\/2025\/04\/11\/cc9feb3c3f134b63ba48fee3467008b0_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: 'a570bd38-c613-4539-9c1f-ad7ee2958ac3',
      title: 'Coachella Day 2 Fest Goes Double or Nothing With VIP Parties and Music!',
      description:
        'The California desert locked into the vibes of the Coachella Music and Arts Festival and Hollywood made the most of all the hot parties and exclusive oasis events the fest had to offer!',
      url: 'https:\/\/www.tmz.com\/2025\/04\/13\/celebrity-coachella-day-2-party-pool-fashion-photos\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/60\/16by9\/2025\/04\/13\/60cfd0c507384ca8974d46993a11c67e_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '022ffb34-0d87-4c72-b63d-f84c11a2eabd',
      title: 'Rob Gronkowski Says Bill Belichick Has Open Invite to Gronk Beach Party',
      description:
        'Play video content TMZSports.com\n\nRob Gronkowski is set to let loose at his Gronk Beach party in Las Vegas on WrestleMania Sunday ... and even though Bill Belichick is busy getting the Tar Heels ready...',
      url: 'https:\/\/www.tmz.com\/2025\/04\/15\/rob-gronkowski-gronk-beach-bill-belichick-jordon-hudson\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/f7\/16by9\/2025\/04\/14\/f72b1dbcbf1f49c3a3c730eb826b8ecb_xl.jpg',
      language: 'pl',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '9de33087-b9fb-4461-83c2-853686abe25b',
      title: 'Justin Bieber Vibes to Own Music at Friday Nights in the Desert, on Video',
      description:
        "Play video content TMZ.com\n\nJustin Bieber's revealing what music gets him grooving ... his own stuff -- 'cause he was vibing to a couple of his well-known tracks at an invite-only event near Coachella...",
      url: 'https:\/\/www.tmz.com\/2025\/04\/20\/justin-bieber-vibes-music-friday-night-desert\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/e3\/16by9\/2025\/04\/20\/e3c93a91d00742268b2f683a603bd985_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '2e2c4e34-cd41-4f9e-b498-089e52d29ea1',
      title: 'Kevin Costner Chats Up Mystery Woman at Raspoutine Night Club',
      description:
        "Kevin Costner's more rolling stone than a 'Yellowstone' ... 'cause he's seemingly flirting with a women at bars -- and, we've got photos that show the whole interaction.",
      url: 'https:\/\/www.tmz.com\/2025\/05\/04\/kevin-costner-parties-at-raspoutine-night-club-with-mystery-woman\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/c9\/16by9\/2025\/05\/04\/c96847d92bc742eaaf8804ce94431847_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '3c199515-a27a-4569-9b93-32314640ffde',
      title: 'Pregnant Rihanna and A$AP Rocky Lead Star-Studded Met Gala After-Party',
      description:
        "Rihanna and A$AP Rocky were the life of their MET Gala after-party Monday night with a bevy of other A-listers showing up to have fun and to see the main attraction -- RiRi's new bun in the oven!",
      url: 'https:\/\/www.tmz.com\/2025\/05\/06\/asap-rocky-rihanna-ray-ban-met-gala-after-party\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/62\/16by9\/2025\/05\/06\/62c2e62ce1ac4f2ba8a2222918bbbd2c_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: 'daf5ddd9-9578-435b-8dcc-babc3574d5d6',
      title: 'Jenelle Evans Throwing NYC Divorce Party After David Eason Split',
      description:
        'Jenelle Evans is hosting a divorce party at a New York City strip club after her split from David Eason.',
      url: 'https:\/\/www.tmz.com\/2025\/05\/07\/jenelle-evans-divorce-party-split-david-eason-spearmint-rhino-nyc\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/9c\/16by9\/2025\/05\/07\/9c31bb161d7d4f71ad01d7dc3ef2a1e6_xl.jpg',
      language: 'en',
      category: ['celebrity', 'entertainment'],
      published: '2025-05-18 08:40:38 +0000',
    },
    {
      id: '0b970511-2585-4bcf-97e9-1d88b53bbddd',
      title: "Powerplay By Turkey? Erdogan Grabbing Macron's Finger Makes Headlines",
      description:
        'French President Emmanuel Macron and his Turkish counterpart, Recep Tayyip Erdogan, shared an unusual interaction during the European Political Community (EPC) summit in Tirana that has sparked buzz online.',
      url: 'https:\/\/www.ndtv.com\/world-news\/watch-turkeys-erdogan-grabs-emmanuel-macrons-finger-doesnt-let-go-8444306',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/li8p6mds_trukeyfrance-_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 08:39:56 +0000',
    },
    {
      id: 'f18d2d98-400a-4470-ada3-1a6fc04bf31a',
      title: 'Uber Driver Saves Passenger Suffering Brain Haemorrhage Mid-Ride In US',
      description:
        'Taras Zvir, 38, had just started driving part-time for the ride-hailing app while working on his own startup.',
      url: 'https:\/\/www.ndtv.com\/world-news\/uber-driver-saves-passenger-suffering-brain-haemorrhage-mid-ride-in-us-8444318',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/0siueeno_anderson_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 08:39:56 +0000',
    },
    {
      id: '0d47c55e-888b-4852-927b-7ef34fad1823',
      title: 'Here Comes the Sun: Warren Buffett and more',
      description:
        'Here Comes the Sun: Warren Buffett and more Investor Warren Buffett sits down with Norah O\'Donnell to discuss "Becoming Katharine Graham," the documentary highlighting his late friend\'s career as CEO ...',
      url: 'https:\/\/www.cbsnews.com\/video\/here-comes-the-sun-warren-buffett-and-more\/',
      author: 'CBS News',
      image:
        'https:\/\/assets1.cbsnewsstatic.com\/hub\/i\/r\/2025\/04\/13\/2a601021-d684-4fd6-8461-a2856f0b25e7\/thumbnail\/1200x630\/39ed6c4808d1e39ec1ffc2aaadeae8ba\/0412-hcts-buffet-full-3668604-640x360.jpg?v=6df9366690ed146f169dd0670c453f91',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 08:35:03 +0000',
    },
    {
      id: 'f2f18c95-0925-4767-9ff0-a8405b7f5b77',
      title: 'Terex: Too Many Macro Headwinds',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787904-terex-too-many-macro-headwinds?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:34:06 +0000',
    },
    {
      id: 'fb5d9fd5-dfa8-4095-af76-a7d1641e29dc',
      title: 'Central Coast Mariners complete fairytale after A-League Women grand final shootout',
      description:
        'The weight of the world was on Bianca Galic\u2019s shoulders. After 120 minutes of football, nothing could separate her Central Coast Mariners and Melbourne Victory and the first-ever shootout to decide an...',
      url: 'https:\/\/www.theguardian.com\/football\/2025\/may\/18\/melbourne-victory-central-coast-mariners-aleague-women-grand-final-shootout-champions-report',
      author: 'Joey Lynch',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/4b081217ba3589e895c8091fdd3e3d460419ee0f\/485_0_4553_3642\/master\/4553.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=675c3cc710bfab25e74e5256b5782fed',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 08:33:27 +0000',
    },
    {
      id: '0392d66d-9638-46e8-a9b9-2f4f348e080b',
      title:
        'Italy\u2019s Cinecitt\u00e0 Studios Veers Towards Digital Age With Large LED Wall as New Soundstage Prepares to Host Mel Gibson\u2019s \u2018Passion of the Christ\u2019 Sequel',
      description:
        'Following the glory days of Hollywood filmmaking in Rome during the 1950s and 1960s, Italy is once again becoming a magnet for international productions \u2013 particularly from Hollywood. And the main dri...',
      url: 'https:\/\/variety.com\/2025\/film\/global\/cinecitta-led-wall-new-soundstage-mel-gibson-1236401727\/',
      author: 'Nick Vivarelli',
      image: 'https:\/\/variety.com\/wp-content\/uploads\/2025\/05\/2215380704.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 08:30:47 +0000',
    },
    {
      id: '89f2992f-1261-4094-a1f6-142ba8d57250',
      title: 'India Beckons the Musks: Errol to Arrive After Maye\u2019s Visit',
      description:
        'Errol Musk\u2014father of tech billionaire Elon Musk\u2014is set to arrive in New Delhi on June 1st for a week-long trip signalling a growing interest from the Musk family in India\u2019s emerging business opportuni...',
      url: 'https:\/\/www.ndtvprofit.com\/business\/india-beckons-the-musks-errol-to-arrive-after-mayes-visit',
      author: 'Aishwarya Patil',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2025-05-18%2Fg66y5o6o%2FHero-Image.png?w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 08:30:36 +0000',
    },
    {
      id: '7e6dc875-8622-4631-859d-7c3d61168119',
      title: 'Premier League Soccer: Stream Everton vs. Southampton\u00a0From Anywhere',
      description: "It's the Toffees final game at Goodison Park.",
      url: 'https:\/\/www.cnet.com\/tech\/services-and-software\/premier-league-soccer-stream-everton-vs-southampton-from-anywhere\/',
      author: 'See full bio',
      image:
        'https:\/\/www.cnet.com\/a\/img\/resize\/e0ab07468f168d88f7aed7f1a0f9c055d1e4f713\/hub\/2025\/05\/18\/a880f4d7-1207-47ad-b701-0cc1f210044f\/gettyimages-2198525454.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['game', 'entertainment'],
      published: '2025-05-18 08:30:04 +0000',
    },
    {
      id: 'efcd1c23-ee3a-4c14-9896-e8a5404ef6bf',
      title: 'Alphabet: Buy More The Best AI Play At A Reasonable Valuation',
      description:
        'I have been thinking about covering Google (NASDAQ: GOOG ) (NASDAQ: GOOGL ) for a little while. Google has been one of the best examples of AI success in the generational AI growth megatrend. To me, G...',
      url: 'https:\/\/seekingalpha.com\/article\/4787903-alphabet-buy-more-the-best-ai-play-at-a-reasonable-valuation?source=feed_tag_long_ideas',
      author: 'SeekingAlpha.com',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1163973538\/image_1163973538.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:25:51 +0000',
    },
    {
      id: 'c617ff06-c78a-4248-935c-da3120c73be7',
      title: 'British Climber Makes 19th Ascent Of Everest, Most By A Non-Sherpa',
      description:
        "A British climber beat his own record for the most climbs of Mount Everest by a non-Sherpa, making his 19th ascent of the world's highest mountain.",
      url: 'https:\/\/www.ndtv.com\/world-news\/british-climber-makes-19th-ascent-of-everest-most-by-a-non-sherpa-8444233',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2022-05\/gnirqdqo_kenton-cool_625x300_16_May_22.jpeg?im=FitAndFill,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 08:24:21 +0000',
    },
    {
      id: '1caff97c-4402-4d3a-9242-936ab51441b8',
      title: 'High-Ranking Swedish Diplomat, Questioned Over Spying Charge, Found Dead',
      description:
        'A high-ranking Swedish diplomat who was recently detained and questioned on suspicion of espionage has died, his lawyer confirmed on Friday.',
      url: 'https:\/\/www.ndtv.com\/world-news\/swedish-diplomat-held-for-espionage-dies-amid-ongoing-investigation-8444042',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-05\/lhh82erc_swedish-foreign-ministry-stockholm-reuters_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 08:21:18 +0000',
    },
    {
      id: '9092a0d9-1697-4d03-b08a-ae9ef690954b',
      title: 'GoDaddy: Clicking On Growth But A Domain Of Doubt On Valuation Multiples',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787902-godaddy-clicking-on-growth-but-a-domain-of-doubt-on-valuation-multiples?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:19:24 +0000',
    },
    {
      id: '033266ba-5ebc-4cf7-9733-532cf8c1a589',
      title: "May's 5 Dividend Growth Stocks With Yields Up To 7.04%",
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787901-may-5-dividend-growth-stocks?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:18:59 +0000',
    },
    {
      id: '1c471dd7-dcb4-4882-8e27-d9ce8cfcd1ed',
      title: 'Children burnt to death in tents as Israel intensifies strikes across Gaza',
      description:
        'The Israeli military has killed hundreds of Palestinians in the past several days as it expands its ground invasion.',
      url: 'https:\/\/www.aljazeera.com\/news\/2025\/5\/18\/children-among-over-100-palestinians-killed-in-israeli-barrage-across-gaza?traffic_source=rss',
      author: 'Apps Support',
      image:
        'https:\/\/www.aljazeera.com\/wp-content\/uploads\/2025\/05\/ap_6829972368089-1747556131.jpg?resize=1920%2C1440',
      language: 'en',
      category: ['news', ' politics', ' middle east'],
      published: '2025-05-18 08:12:11 +0000',
    },
    {
      id: '17d8ec67-4e9b-4a99-aac4-00d4ff2c4a54',
      title: 'CrowdStrike: Why I Have No Plans To Sell (NASDAQ:CRWD)',
      description:
        "Editor's note: Seeking Alpha is proud to welcome Royston Roche as a new contributing analyst. You can become one too! Share your best investment idea by submitting your article for review to our edito...",
      url: 'https:\/\/seekingalpha.com\/article\/4787899-crowdstrike-why-i-have-no-plans-to-sell?source=feed_tag_long_ideas',
      author: 'Royston Roche',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1255728449\/image_1255728449.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:06:07 +0000',
    },
    {
      id: 'd29cfbe3-57aa-456d-8d8a-c5a68729a2ed',
      title: 'Week in Pictures: From deadly storms in US to forced displacement in Gaza',
      description:
        'From Palestinian commemorations of the Nakba, or \u201ccatastrophe\u201d, of their mass dispossession during the creation of Israel in 1948 to floods in Argentina, here is a look at the week in photos....',
      url: 'https:\/\/www.aljazeera.com\/gallery\/2025\/5\/18\/week-in-pictures-deadly-storms-in-the-us-to-forced-displacement-in-gaza?traffic_source=rss',
      author: 'Apps Support',
      image:
        'https:\/\/www.aljazeera.com\/wp-content\/uploads\/2025\/05\/2025-05-17T161857Z_435536133_RC2QJEA2O0Z4_RTRMADP_3_POPE-LEO-HOLYYEAR-PROCESSION-1747551036.jpg?resize=1920%2C1440',
      language: 'en',
      category: ['news', ' politics', ' middle east'],
      published: '2025-05-18 08:04:52 +0000',
    },
    {
      id: 'dce91c93-3247-4c26-83ee-d2a45f1ee537',
      title: 'WuXi Biologics: Eyes On Long-Term Risks And Near-Term Outlook (Rating Downgrade)',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787898-wuxi-biologics-long-term-risks-near-term-outlook?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 08:04:32 +0000',
    },
    {
      id: 'a3d8a39e-c770-425a-8125-31cbf927803c',
      title: 'Medicaid payments barely keep hospital mental health units afloat. Federal cuts could sink them',
      description:
        "SPENCER, Iowa - This town's hospital is a holdout on behalf of people going through mental health crises. The facility's leaders have pledged not to shutter their inpatient psychiatric unit, \u2026 Click to Continue \u00bb",
      url: 'https:\/\/www.miamiherald.com\/news\/nation-world\/national\/article306669931.html#storylink=rss',
      author: 'webmaster',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-18 08:03:14 +0000',
    },
    {
      id: '98ea66ba-bf39-46a3-9b5c-2275554c27c3',
      title: "Scientists join the fight against basement flooding in Chicago: 'The cavalry is coming'",
      description:
        "CHICAGO -- When Nedra Sims Fears was growing up in Chicago's Chatham neighborhood in the 1960s and '70s, the basement of her family home flooded at least six times. Twice, \u2026 Click to Continue \u00bb",
      url: 'https:\/\/www.miamiherald.com\/news\/nation-world\/national\/article306669971.html#storylink=rss',
      author: 'webmaster',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-18 08:03:14 +0000',
    },
    {
      id: '53604ce0-1d2f-4293-9e84-0cf7fbeebc1f',
      title: 'As Trump administration floods the zone to combat crime in Indian Country, wariness prevails',
      description:
        'MORTON, Minn. \u2013 Sitting on a bench surrounded by Lower Sioux Community members, Ana Negrete presented two industrial-sized bins to the tribe\'s leaders in a somber exchange. "I hope this \u2026 Click to Continue \u00bb',
      url: 'https:\/\/www.miamiherald.com\/news\/nation-world\/national\/article306669936.html#storylink=rss',
      author: 'webmaster',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-18 08:03:14 +0000',
    },
    {
      id: '23b99679-8c16-4e91-a189-c4672b0513ed',
      title: '1989 Chile World Cup Qualifier Scandal Spotlighted in \u2018Simulacro\u2019 (EXCLUSIVE)',
      description:
        'Chile\u2019s Villano Producciones and Storyboard Media are teaming with Viven Film (Switzerland) and Chilean actor-producer Benjam\u00edn Vicu\u00f1a (\u201cLocked Up,\u201d \u201cFuga\u201d) to sign a co-production agreement for the f...',
      url: 'https:\/\/variety.com\/2025\/film\/global\/chile-world-cup-scandal-simulacro-1236401585\/',
      author: 'Jamie Lang',
      image: 'https:\/\/variety.com\/wp-content\/uploads\/2025\/05\/SIMULACRO-CANNES.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 08:02:57 +0000',
    },
    {
      id: 'cb17f838-6b4e-426d-816e-3c5fcd40adf1',
      title: "Donald Trump Plans Call With Russia's Putin To End Bloodbath In Ukraine",
      description:
        "President Donald Trump said he'll have a phone call with Russian President Vladimir Putin on Monday morning to discuss how to stop the war in Ukraine.",
      url: 'https:\/\/www.ndtv.com\/world-news\/donald-trump-plans-call-with-russias-putin-to-end-bloodbath-in-ukraine-8444091',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-02\/nho28n2o_trump-putin-zelensky_625x300_20_February_25.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 08:01:39 +0000',
    },
    {
      id: 'a2c49011-72ba-4273-bf14-8fd45f782bf2',
      title: 'Bomb hits California reproductive health clinic which FBI calls \u2018terrorism\u2019',
      description:
        'NewsFeed Bomb hits California reproductive health clinic which FBI calls \u2018terrorism\u2019\n\nVideo shows aftermath of an explosion outside a fertility clinic in Palm Springs, California that killed one perso...',
      url: 'https:\/\/www.aljazeera.com\/video\/newsfeed\/2025\/5\/18\/bomb-hits-california-reproductive-health-clinic-which-fbi-calls?traffic_source=rss',
      author: 'Apps Support',
      image:
        'https:\/\/www.aljazeera.com\/wp-content\/uploads\/2025\/05\/image-1747555231.jpg?resize=1920%2C1080&quality=80',
      language: 'en',
      category: ['news', ' politics', ' middle east'],
      published: '2025-05-18 08:01:24 +0000',
    },
    {
      id: '37fadc71-f725-4748-a929-8de0a2233594',
      title: 'Karen Read judge blocks Sandra Birchmore mentions; expert says cases should be wake-up call for police',
      description:
        "A Massachusetts judge has agreed to bar references to an unrelated, botched murder investigation in Karen Read's second trial on murder and other charges in the 2022 death of her Boston police officer boyfriend, John O'Keefe.\u00a0Police in Canton, a suburb about 20 miles south of Boston, inaccurately de...",
      url: 'https:\/\/www.foxnews.com\/us\/karen-read-judge-blocks-sandra-birchmore-mentions-expert-says-cases-should-be-wakeup-call-police',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 08:00:57 +0000',
    },
    {
      id: 'dc039009-b546-4e7e-8e65-868f577a6912',
      title: "Former Playboy twins expose dark reality behind mansion's glamorous facade",
      description:
        'For four years, former Playboy playmates - and twins - Karissa and Kristina Shannon were thought to have been living a life of luxury and glamour inside the Playboy mansion with boyfriend Hugh Hefner. But behind closed doors, the Florida natives were fighting to survive a web of trauma-filled experi...',
      url: 'https:\/\/www.foxnews.com\/entertainment\/former-playboy-twins-expose-dark-reality-behind-mansions-glamorous-facade',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 08:00:43 +0000',
    },
    {
      id: '9af2622d-3afa-44be-8d53-1d5ef283459d',
      title: "Woman confronts cannibal father who murdered her 'second mom' in chilling reunion",
      description:
        'For the first time in four years, Jamie-Lee Arrow was ready to sit face-to-face with her father, the "Skara Cannibal."It was October 2024, and the 23-year-old, now a mother to two young children, was hoping to be reunited with the man she knew and loved."I had no idea how he would react," Arrow told...',
      url: 'https:\/\/www.foxnews.com\/us\/woman-confronts-cannibal-father-who-murdered-her-second-mom-chilling-reunion',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 08:00:32 +0000',
    },
    {
      id: '843acb22-8488-467b-b279-4e953a05fd6d',
      title:
        'Hairy Biker Si King\u2019s Honest Playlist: \u2018Led Zeppelin is perfect for when you\u2019re speeding along\u2019',
      description:
        'The chef, author and presenter wants to be John Bonham and might be found busting out Baker Street at karaoke, but which song reminds him of lost love?',
      url: 'https:\/\/www.theguardian.com\/music\/2025\/may\/18\/si-king-honest-playlist-led-zeppelin-eagles-gerry-rafferty',
      author: 'Rich Pelley',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/ec137840cc6fa1e7b02d1ed1880f243f9b2f0372\/484_825_3340_2670\/master\/3340.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=bb0e10ae3efdaf314e85fac997fca861',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 08:00:28 +0000',
    },
    {
      id: '72e1be2e-4aad-488d-9145-e3db05567331',
      title: "Researchers uncover the odd reason an 'unusual' mummy survived the centuries",
      description:
        'WARNING: This article contains graphic images. Reader discretion is advised.Researchers have uncovered the reason an "unusual" 18th-century mummy was preserved so well in Austria \u2013 and it\'s highly abnormal.A study about the mummy was recently published in the journal Frontiers in Medicine. The so-ca...',
      url: 'https:\/\/www.foxnews.com\/travel\/researchers-uncover-odd-reason-unusual-mummy-survived-centuries',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 08:00:18 +0000',
    },
    {
      id: 'd9b5ef86-f534-482f-91ed-b690d05a7b6b',
      title: "Hollywood gets millions in tax credits despite Newsom's $12 billion black hole",
      description:
        "Gov. Gavin Newsom (D-CA) spent the last week blaming President Donald Trump for a $12 billion budget deficit that led to tough cuts in the state's healthcare services, but he had no qualms about carving out more than $750 million a year in tax credits for Hollywood.\nThe money is for the expansion of...",
      url: 'https:\/\/www.washingtonexaminer.com\/news\/entertainment\/3414424\/hollywood-millions-tax-credits-newsom-budget-black-hole\/',
      author: 'Barnini Chakraborty',
      image: 'None',
      language: 'en',
      category: ['politics'],
      published: '2025-05-18 08:00:00 +0000',
    },
    {
      id: 'd7d914ae-26bc-49ca-b381-e4fc813dc5bc',
      title: 'World Health Organization Looks Ahead To Life Without The US',
      description:
        'World Health Organization officials will join donors and diplomats with one question - how to cope with crises without their main funder, the US.',
      url: 'https:\/\/www.ndtv.com\/world-news\/world-health-organization-looks-ahead-to-life-without-the-us-8444043',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-04\/m9jnpr8g_world-health-organisation_625x300_25_April_25.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:55:29 +0000',
    },
    {
      id: 'e033cd96-6756-4899-8fcc-fa23505e1c6e',
      title: 'First US Pope Leo XIV Takes To Popemobile Ahead Of Inaugural Mass',
      description:
        "Pope Leo XIV, the first US pontiff, made his debut tour of St Peter's Square in a popemobile, greeting tens of thousands of pilgrims and well-wishers ahead of his inauguration mass.",
      url: 'https:\/\/www.ndtv.com\/world-news\/first-us-pope-leo-xiv-takes-to-popemobile-ahead-of-inaugural-mass-8444038',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/n2sf2fos_popemobile_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:52:40 +0000',
    },
    {
      id: 'd3a2e617-f76d-4389-85fc-d42f920bd582',
      title: 'Women\u2019s FA Cup final, last Premier League game at Goodison Park and more \u2013 matchday live',
      description:
        'Key events 1h ago Will Still leading contender for Southampton job\n\n3h ago Preamble Show key events only Please turn on JavaScript to use this feature\n\nnow 11.00 BST The Manchester United defender Gab...',
      url: 'https:\/\/www.theguardian.com\/football\/live\/2025\/may\/18\/womens-fa-cup-final-premier-league-la-liga-and-more-matchday-live',
      author: 'Emillia Hawkins',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/4f2aa55a286ae4f3395db7a2c93652846368551f\/602_0_5000_4000\/master\/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e410a69e4626980506769cf1dcabe008',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:50:05 +0000',
    },
    {
      id: '3006229c-17fc-41d3-8fac-651923a469b9',
      title:
        "Texas AG Ken Paxton sued over new rule to rein in 'rogue' DAs by allowing him access to their case records",
      description:
        "Five Texas district attorneys are suing state Attorney General Ken Paxton, challenging new rules that would give his office broad authority to access their office's case records, according to a new report.\u00a0In the two lawsuits filed on Friday, the district attorneys said the rule, in effect since Apr...",
      url: 'https:\/\/www.foxnews.com\/politics\/texas-ag-ken-paxton-sued-over-new-rule-rein-rogue-das-allowing-him-access-case-records',
      author: 'foxnews',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 07:44:27 +0000',
    },
    {
      id: '4df46e9c-61e3-413e-8b66-e1c4aa2217ae',
      title: 'McKesson: Sustained Rally Backed By Strong Financials',
      description:
        'Mr. Mavroudis is a professional portfolio manager specializing in institutional and private portfolios. He focuses on risk management, which is accompanied by in-depth financial market analysis (funda...',
      url: 'https:\/\/seekingalpha.com\/article\/4787896-mckesson-sustained-rally-backed-by-strong-financials?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1832658001\/image_1832658001.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 07:40:32 +0000',
    },
    {
      id: '8c202743-4402-4f60-b1e7-e12bedac58e9',
      title: 'McKesson Stock: Sustained Rally Backed By Strong Financials (NYSE:MCK)',
      description:
        'Mr. Mavroudis is a professional portfolio manager specializing in institutional and private portfolios. He focuses on risk management, which is accompanied by in-depth financial market analysis (funda...',
      url: 'https:\/\/seekingalpha.com\/article\/4787896-mckesson-sustained-rally-backed-by-strong-financials?source=feed_tag_long_ideas',
      author: 'Symeon Mavroudis',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1832658001\/image_1832658001.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 07:40:32 +0000',
    },
    {
      id: '0575d352-c0c1-4657-a50f-3e596698b962',
      title: 'Engie: Higher Guidance And DPS Floor, Buy Confirmed',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787895-engie-higher-guidance-and-dps-floor-buy-confirmed?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 07:38:28 +0000',
    },
    {
      id: '65b9e37f-59ba-4efa-b268-9c4ec879d2da',
      title: "Vladimir Putin's Spy Agency Used Sex, Drugs, To Exploit Elon Musk: Ex-FBI Agent",
      description:
        'Jonathan Buma claimed Russian intelligence, GRU, actively ran special operations to influence top Silicon Valley figures like Elon Musk and venture capitalist Peter Thiel.',
      url: 'https:\/\/www.ndtv.com\/world-news\/vladimir-putin-backed-russian-spy-agency-targeted-elon-musk-using-sex-and-drugs-ex-fbi-agent-jonathan-buma-8443881',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/kdu85gv_elon-musk_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:38:09 +0000',
    },
    {
      id: 'ccae724c-5302-4341-8f9b-d0a31f11dd4d',
      title: 'Romanians cast ballots in tense presidential run-off',
      description:
        'The election result could reshape the direction of the pro-EU and NATO member nation bordering war-torn Ukraine.',
      url: 'https:\/\/www.aljazeera.com\/news\/2025\/5\/18\/romanians-cast-ballots-in-tense-presidential-run-off?traffic_source=rss',
      author: 'Apps Support',
      image:
        'https:\/\/www.aljazeera.com\/wp-content\/uploads\/2025\/05\/2025-05-18T043850Z_50242755_RC24KEAIAGWS_RTRMADP_3_ROMANIA-ELECTION-1747548479.jpg?resize=1920%2C1440',
      language: 'en',
      category: ['news', ' politics', ' middle east'],
      published: '2025-05-18 07:33:29 +0000',
    },
    {
      id: '5d503245-5d38-4472-86d0-98d5374fe4d4',
      title: 'Saints\u2019 fightback defies Itoje and provides perfect Champions Cup final sendoff',
      description:
        'It ended with the Lions captain in forlorn negotiation with the referee. Australians may be encouraged that Maro Itoje was unable to work his magic to save Saracens\u2019 match, to save their season.\n\nThey...',
      url: 'https:\/\/www.theguardian.com\/sport\/2025\/may\/18\/northampton-comeback-saracens-perfect-champions-cup-final-send-off',
      author: 'Michael Aylwin',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/12b8f38eebb72d8ab0c848053078208e63cce154\/300_0_3193_2555\/master\/3193.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b9388eaf9d1aa5e8cf5ba4d51a831a67',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:30:28 +0000',
    },
    {
      id: 'ce2e53b5-d960-4461-b09c-b1137e5d6fea',
      title: 'Medical Properties Trust Stock: 2025 Could Be A Rebound Year (NYSE:MPW)',
      description:
        'Medical Properties Trust delivered stable Q1 earnings, maintains a 1.75x dividend coverage, and has a 37% discount to book. Learn why MPW stock is a strong buy.',
      url: 'https:\/\/seekingalpha.com\/article\/4787893-medical-properties-trust-2025-could-be-a-rebound-year?source=feed_tag_long_ideas',
      author: 'The Asian Investor',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/2155522886\/image_2155522886.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 07:27:21 +0000',
    },
    {
      id: '36e4d59e-24ab-4091-8118-588dd3be72e5',
      title: 'Booz Allen Hamilton: Building The Digital Backbone Of U.S. National Security',
      description:
        'Booz Allen offers AI and cybersecurity solutions with strong financials, growing contracts, and strategic partnerships. Read why BAH stock is a Buy.',
      url: 'https:\/\/seekingalpha.com\/article\/4787889-booz-allen-hamilton-building-the-digital-backbone-of-us-national-security?source=feed_tag_long_ideas',
      author: 'Alpha Compounder',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1974905472\/image_1974905472.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 07:20:09 +0000',
    },
    {
      id: '4eba631f-b400-46b0-90fb-989d273c8aba',
      title: 'Russian "Dream Teacher" Forced 11-Year-Old Student To Touch Her, Jailed',
      description:
        'A married school teacher in Russia was arrested and jailed for 9 years for sexually abusing her 11-year-old student.',
      url: 'https:\/\/www.ndtv.com\/world-news\/russian-teacher-anna-plaksyuk-jailed-for-sexual-abuse-of-11-year-old-student-8443604',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/247nrh7_russian-teacher-anna-plaksyuk_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:18:37 +0000',
    },
    {
      id: '25e38755-ee9d-4e6d-aef2-a13c08e9413d',
      title: 'Chris Brown Charged, in Custody for Alleged 2023 Assault',
      description:
        'Chris Brown in April 2025. Photo: Scott Legato\/Getty Images\n\nWill court dates get in the way of his tour dates? On Wednesday, May 14, Chris Brown posted \u201cFREE TORY\u201d on his Instagram Story as a show of...',
      url: 'https:\/\/www.vulture.com\/article\/chris-brown-arrested-charges.html',
      author: 'Jennifer Zhan',
      image:
        'https:\/\/pyxis.nymag.com\/v1\/imgs\/7fd\/4ce\/d0a975de853bbb05ce3fdf0ea66cd732a8-chrisbrown.1x.rsocial.w1200.jpg',
      language: 'en',
      category: ['entertainment', 'movie', 'art', 'television'],
      published: '2025-05-18 07:17:58 +0000',
    },
    {
      id: '3c067e7a-8261-4aae-91b0-e0d582d08f2f',
      title: 'Links 5\/17\/2025 | naked capitalism',
      description:
        'Imagine stepping into the silent darkness of a cave, only to be confronted by the powerful forms of bison, rendered in clay by hands that lived and breathed 14,000 years ago. Deep within the Le Tuc d\u2019...',
      url: 'https:\/\/www.nakedcapitalism.com\/2025\/05\/links-5-17-2025.html',
      author: 'Yves Smith',
      image:
        'https:\/\/www.nakedcapitalism.com\/wp-content\/uploads\/2025\/05\/Screenshot-2025-05-17-at-12.43.47\u202fPM.png',
      language: 'en',
      category: ['news', ' business', ' finances', ' money', ' banking'],
      published: '2025-05-18 07:10:14 +0000',
    },
    {
      id: '91155da3-2a8c-46e6-956e-e53d4f9acf10',
      title: "IMF's Big Warning And 11 New Conditions For Pakistan After Op Sindoor: Report",
      description:
        'The new conditions imposed on Pakistan include the parliamentary approval of a new Rs 17.6 trillion budget, an increase in the debt servicing surcharge.',
      url: 'https:\/\/www.ndtv.com\/world-news\/imfs-big-warning-and-11-new-conditions-to-pakistan-after-op-sindoor-report-8443747',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-03\/lnimqhi8_shehbaz-sharif_625x300_25_March_25.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:07:33 +0000',
    },
    {
      id: '874ce9d8-de5e-4025-b89b-99359086ec03',
      title: 'Original Sin: book on Biden\u2019s health decline reopens Democratic party\u2019s wounds',
      description:
        'The book by Jake Tapper and Alex Thompson presents a scathing account of a president cocooned from reality \u2013 and fuels questions about his role in the party',
      url: 'https:\/\/www.theguardian.com\/news\/ng-interactive\/2025\/may\/18\/biden-book-health-original-sin',
      author: 'David Smith',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/6741d099186318fe9eaf03332b49e40dfac59b56\/0_0_5000_3999\/master\/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=e2a33022cffa20db2dda23a24c129845',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:04:57 +0000',
    },
    {
      id: '825194a4-2b8c-4fde-a4c0-dccc1e532b11',
      title: 'Ten dead in \u2018brutal\u2019 attacks by Isis-linked militants on Mozambique wildlife reserve',
      description:
        'Thousands have been displaced and conservation work halted as series of killings jeopardises decades of work in Niassa, one of Africa\u2019s biggest protected areas',
      url: 'https:\/\/www.theguardian.com\/environment\/2025\/may\/18\/mozambique-niassa-militant-islamist-isis-attacks-aoe',
      author: 'Patrick Greenfield',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/d0f35f662690d937a0b2c7c4f9cbf03b9834e6f7\/350_0_1494_1195\/master\/1494.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=e7a151d9287af3eb154b5568867f2c9d',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 07:00:29 +0000',
    },
    {
      id: '1e8f4433-67e2-47c8-a3a7-a0cf9e15a2d4',
      title: 'This article won\u2019t change your mind. Here\u2019s why | Sarah Stein Lubrano',
      description:
        'Evidence shows that arguing our case rarely convinces others. It\u2019s social relationships and actions that have that power, says author Sarah Stein Lubrano',
      url: 'https:\/\/www.theguardian.com\/commentisfree\/2025\/may\/18\/change-mind-evidence-arguing-social-relationships',
      author: 'Sarah Stein Lubrano',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/49377db07331347dd199e91838e3ba341aa3a22d\/247_0_2917_2334\/master\/2917.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&s=bd532e12794eb1042178123c61c89620',
      language: 'en',
      category: ['science'],
      published: '2025-05-18 07:00:28 +0000',
    },
    {
      id: '824ffe84-0bc6-496f-807d-71910ff03c61',
      title: 'New Jersey, State of Constant Motion, Learns to Live With Immobility',
      description:
        "Trains are idle, the airport is hobbled and large holes have opened on a major highway. The state's residents have time to reflect, and get mad.",
      url: 'https:\/\/www.nytimes.com\/2025\/05\/18\/nyregion\/new-jersey-transportation-plagues.html',
      author: 'Dan Barry',
      image: 'None',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 07:00:23 +0000',
    },
    {
      id: '4b9fea4d-5625-4b3b-971d-2e055c79a6b3',
      title: 'On This Day, May 18: Wilson signs Selective Service Act amid WWI - UPI.com',
      description:
        '1 of 5 | The DC War Memorial, which honors District residents who died in World War I, sits on the National Mall. On May 18, 1917, President Wilson signed the Selective Service Act of 1917 by which th...',
      url: 'https:\/\/www.upi.com\/Top_News\/2025\/05\/18\/thisday-may18\/4691747530112\/',
      author: 'Upi Staff',
      image:
        'https:\/\/cdnph.upi.com\/sv\/ph\/og\/upi\/4691747530112\/2025\/1\/fce24d0ecf4cb34e51e61b04cda2dc2b\/v1.5\/On-This-Day-Wilson-signs-Selective-Service-Act-amid-WWI.jpg',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 07:00:07 +0000',
    },
    {
      id: '0dcab95b-cc82-4463-8105-7d0527b2a7ef',
      title: 'On This Day, May 18: Wilson signs Selective Service Act amid WWI',
      description:
        'On this date in history: In 1896, the U.S. Supreme Court handed down the Plessy vs. Ferguson decision that determined "separate but equal" racial \u2026',
      url: 'https:\/\/www.miamiherald.com\/living\/article306669516.html',
      author: 'UPI Staff',
      image: 'None',
      language: 'en',
      category: ['congress'],
      published: '2025-05-18 07:00:07 +0000',
    },
    {
      id: 'd8af7d36-2354-463f-8060-5488329498ee',
      title: 'Famous birthdays for May 18: George Strait, Ai Weiwei - UPI.com',
      description:
        'Movies \/\/ 1 day ago\n\nRalph Fiennes to take over President Snow role in \'Hunger Games: Sunrise on the Reaping\'\n\nMay 16 (UPI) -- "Conclave" actor Ralph Fiennes will replace the late Donald Sutherland as...',
      url: 'https:\/\/www.upi.com\/Entertainment_News\/2025\/05\/18\/famous-birthdays-may18\/7381747530119\/',
      author: 'Upi Staff',
      image:
        'https:\/\/cdnph.upi.com\/sv\/ph\/og\/upi\/7381747530119\/2025\/1\/9c35b6e3077002934be850d43b4989e7\/v1.5\/Famous-birthdays-for-May-18-George-Strait-Ai-Weiwei.jpg',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 07:00:06 +0000',
    },
    {
      id: '7727070f-7763-46d5-a778-d526afbf1a06',
      title: 'HighPeak Energy: Strong Operational Performance, But Term Loan Maturity Approaches',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787888-highpeak-energy-strong-operational-performance-but-term-loan-maturity-approaches?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 06:56:06 +0000',
    },
    {
      id: '907f179b-d0e1-4b5c-834f-776f66628628',
      title: "Today's NYT Connections: Sports Edition Hints, Answers for May 18 #237",
      description:
        "Here's today's Connections: Sports Edition answer and hints for groups. These clues will help you solve The New York Times' popular puzzle game, Connections: Sports Edition, every day.",
      url: 'https:\/\/www.cnet.com\/tech\/gaming\/todays-nyt-connections-sports-edition-hints-and-answers-for-may-18-237\/',
      author: 'See full bio',
      image:
        'https:\/\/www.cnet.com\/a\/img\/resize\/a51721727ac6b71b8d078d611ca37505b9006739\/hub\/2024\/10\/16\/ae3b5078-3ced-47c9-91dd-6b5b1b1a5809\/connections-sports-edition-6832.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['movie', 'music', 'entertainment'],
      published: '2025-05-18 06:55:06 +0000',
    },
    {
      id: '32145f68-d241-4f94-b9b3-5598b6873f84',
      title: 'WILDSIDE Yohji Yamamoto and Starbucks Reserve Reunite for Third Collab in Tokyo',
      description:
        'Summary\n\nWILDSIDE Yohji Yamamoto and Starbucks Reserve Roastery Tokyo launch their third collaboration on May 20\n\nThe collection includes apparel and lifestyle goods, like a reversible souvenir jacket...',
      url: 'https:\/\/hypebeast.com\/2025\/5\/wildside-yohji-yamamoto-x-starbucks-reserve-collaboration-info',
      author: 'Arthur Parkhouse',
      image:
        'https:\/\/image-cdn.hypb.st\/https%3A%2F%2Fhypebeast.com%2Fimage%2F2025%2F05%2F18%2Fwildside-yohji-yamamoto-x-starbucks-reserve-collaboration-info-tw.jpg?w=1080&cbr=1&q=90&fit=max',
      language: 'en',
      category: ['fashion', 'lifestyle'],
      published: '2025-05-18 06:52:23 +0000',
    },
    {
      id: '6fa7668d-c3dd-4e44-85df-5b6da10b01b9',
      title: 'Explained: How Mexican Navy Ship Collided With Brooklyn Bridge In New York',
      description:
        'The Mexican Navy training ship Cuauhtemoc, which hit the Brooklyn Bridge on Saturday night, apparently lost power moments before the crash, forcing it to head towards the bridge, the New York police department said.',
      url: 'https:\/\/www.ndtv.com\/world-news\/explained-how-mexican-navy-ship-collided-with-brooklyn-bridge-in-new-york-nypd-8443689',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-05\/vv24cpe_mexico-ship-crash_625x300_18_May_25.jpeg?im=FaceCrop,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 06:51:28 +0000',
    },
    {
      id: '82cca44a-5f9c-49c8-abea-5f2394294316',
      title: "Today's NYT Mini Crossword Answers for May 18 - CNET",
      description:
        "Here's today's NYT Mini Crossword answer. These answers will help you solve New York Times' popular crossword game, Mini Crossword, every day!",
      url: 'https:\/\/www.cnet.com\/tech\/gaming\/todays-nyt-mini-crossword-answers-for-sunday-may-18\/',
      author: 'See full bio',
      image:
        'https:\/\/www.cnet.com\/a\/img\/resize\/5a44b4083f306f5c685f3e792be0473edc33c848\/hub\/2024\/07\/19\/a459b55d-d069-4efa-bab4-4a28dfe8cc45\/nyt-mini-crossword.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['movie', 'music', 'entertainment'],
      published: '2025-05-18 06:49:35 +0000',
    },
    {
      id: 'e58b31c0-7c55-4070-a3f4-22147cb70a3b',
      title: 'Alibaba: Pullback Sets Up Compelling Long-Term Opportunity (Rating Upgrade)',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787887-alibaba-pullback-sets-up-compelling-long-term-opportunity?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 06:47:38 +0000',
    },
    {
      id: '764f3233-7bbb-4439-a00c-54b8ae1d49ab',
      title: 'VWOB: Simple Emerging Market Bond ETF, Above-Average Dividend Yield, Compelling Spreads',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787886-vwob-emerging-market-bond-etf-above-average-dividend-yield-compelling-spreads?source=feed_tag_etf_portfolio_strategy',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 06:46:58 +0000',
    },
    {
      id: '6e1249ab-f10f-40ef-80da-6129349048b1',
      title: 'Ukraine reports largest drone attack from Russia since war began',
      description:
        'One woman killed in Kyiv region in air offensive that follows first direct peace talks between the two sides',
      url: 'https:\/\/www.theguardian.com\/world\/2025\/may\/18\/ukraine-reports-largest-drone-attack-from-russia-since-war-began',
      author: 'Peter Beaumont',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/b063b1bc2f8278f92b97fb2780181a5167e43ae2\/774_362_4547_3638\/master\/4547.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=833eb27de8a28166a5f8aeb19d8dc51e',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 06:45:44 +0000',
    },
    {
      id: 'c015be81-a193-4708-b6c1-d086e4d2b4c6',
      title: '"Resident Playbook" Stars Say Goodbye + Thank Viewers Ahead Of Tonight\'s Finale | Soompi',
      description:
        'The stars of tvN\u2019s \u201cResident Playbook\u201d have shared their thoughts ahead of tonight\u2019s finale! A spin-off of the hit series \u201cHospital Playlist,\u201d \u201cResident',
      url: 'https:\/\/www.soompi.com\/article\/1745620wpp\/resident-playbook-stars-say-goodbye-thank-viewers-ahead-of-tonights-finale',
      author: 'eclipse01',
      image: 'https:\/\/0.soompi.io\/wp-content\/uploads\/2025\/05\/17234150\/Resident-Playbook-9.jpg',
      language: 'en',
      category: ['entertainment', 'music', 'fashion', 'kpop'],
      published: '2025-05-18 06:44:39 +0000',
    },
    {
      id: 'f6dd29e1-0409-48d9-ba78-f8489d31338e',
      title: 'Altisource Portfolio Solutions (NASDAQ:ASPS) Shares to Reverse Split on Wednesday, May 28th',
      description:
        "Altisource Portfolio Solutions S.A. (NASDAQ:ASPS - Free Report)'s stock is set to reverse split on Wednesday, May 28th. The 1-8 reverse split was announced on Tuesday, May 13th. The number of shares owned by shareholders will be adjusted after the closing bell on Tuesday, May 27th.",
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/altisource-portfolio-solutions-nasdaqasps-shares-to-reverse-split-on-wednesday-may-28th-2025-05-16\/',
      author: 'MarketBeat',
      image:
        'https:\/\/www.marketbeat.com\/logos\/altisource-portfolio-solutions-sa-logo-1200x675.png?v=20240611080950',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:44:19 +0000',
    },
    {
      id: '273c1b9f-b662-486d-beb8-170e16ca544e',
      title: 'Canadian Natural Resources Limited (TSE:CNQ) Receives Consensus Rating of "Moderate Buy" from Brokerages',
      description:
        'Shares of Canadian Natural Resources Limited (TSE:CNQ - Get Free Report) (NYSE:CNQ) have earned a consensus rating of "Moderate Buy" from the fourteen ratings firms that are presently  covering the company, Marketbeat Ratings reports. Five equities research analysts have rated the stock with a hold ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/canadian-natural-resources-limited-tsecnq-receives-consensus-rating-of-moderate-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/canadian-natural-resources-limited-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:41:53 +0000',
    },
    {
      id: '6b84319e-9353-41a4-9665-69968b54a122',
      title: 'PrairieSky Royalty Ltd. (TSE:PSK) Receives Consensus Recommendation of "Moderate Buy" from Analysts',
      description:
        'PrairieSky Royalty Ltd. (TSE:PSK - Get Free Report) has been given an average recommendation of "Moderate Buy" by the seven brokerages that are  covering the stock, MarketBeat reports. Three investment analysts have rated the stock with a hold recommendation, two have given a buy recommendation and ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/prairiesky-royalty-ltd-tsepsk-receives-consensus-recommendation-of-moderate-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/prairiesky-royalty-ltd-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:41:53 +0000',
    },
    {
      id: '0757596a-ca58-45ed-bf51-62effee184ce',
      title: 'Customers Bancorp, Inc. (NYSE:CUBI) Given Consensus Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of Customers Bancorp, Inc. (NYSE:CUBI - Get Free Report) have earned an average recommendation of "Moderate Buy" from the ten ratings firms that are currently  covering the stock, MarketBeat Ratings reports. Five investment analysts have rated the stock with a hold rating, four have given a b',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/customers-bancorp-inc-nysecubi-given-consensus-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/customers-bancorp-inc-logo-1200x675.jpg?v=20220510135759',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:41:52 +0000',
    },
    {
      id: 'cb41b284-f72a-4bd2-8099-de6aff803f38',
      title: 'Cogeco Communications Inc. (TSE:CCA) Given Average Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of Cogeco Communications Inc. (TSE:CCA - Get Free Report) have earned a consensus recommendation of "Moderate Buy" from the nine analysts that are currently  covering the company, Marketbeat.com reports. Three analysts have rated the stock with a hold recommendation, five have issued  a buy r',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/cogeco-communications-inc-tsecca-given-average-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/cogeco-cable-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:41:52 +0000',
    },
    {
      id: '9a2a8b61-61e4-4a87-b87d-fb69e0a46d02',
      title:
        'Indonesian Cinema Legend Garin Nugroho and Director Razka Robby Ertanto Launch \u2018Spirit of the Kantil\u2019 at Cannes Market (EXCLUSIVE)',
      description:
        'Celebrated Indonesian filmmaker Garin Nugroho, one of Southeast Asia\u2019s most important cinematic voices, has unveiled his latest production venture at the Cannes Market alongside director Razka Robby E...',
      url: 'https:\/\/variety.com\/2025\/film\/news\/garin-nugroho-razka-robby-ertanto-spirit-of-the-kantil-cannes-market-1236401666\/',
      author: 'Naman Ramachandran',
      image: 'https:\/\/variety.com\/wp-content\/uploads\/2025\/05\/Kantil-Concept-art.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 06:40:00 +0000',
    },
    {
      id: 'df9cb22d-28cd-45b6-8b20-cf8223435541',
      title:
        'How I went from a no name tech company to a 250k TC job at one of the biggest tech companies in the world.',
      description:
        'I used to work at a small startup in the midwest. Like real small. We had maybe 12 people total and I was doing backend stuff basically by myself. We built software for manufacturing companies and it was alright but kind of boring and nobody outside our town ever heard of us. I was there for a littl...',
      url: 'https:\/\/dev.to\/tigerwoodsenjoyer\/how-i-went-from-a-no-name-tech-company-to-a-250k-tc-job-at-one-of-the-biggest-tech-companies-in-the-420n',
      author: 'tiger woods',
      image: 'None',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:39:03 +0000',
    },
    {
      id: '54e79568-981e-41ec-b946-02cc169fbf9c',
      title: 'What Helped You Finally Understand PHP OOP Concepts?',
      description:
        "Object-Oriented Programming (OOP) in PHP can be confusing at first \u2014 especially if you're coming from...",
      url: 'https:\/\/dev.to\/codeliner\/what-helped-you-finally-understand-php-oop-concepts-517a',
      author: 'Shariful Ehasan',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fhzfzhl9evx89c3q09q7r.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:36:34 +0000',
    },
    {
      id: '016445f2-bc2c-496e-897d-8cb5f0f7bc0e',
      title: 'Alibaba Group Holding Limited (NYSE:BABA) Given Average Rating of "Buy" by Brokerages',
      description:
        'Alibaba Group Holding Limited (NYSE:BABA - Get Free Report) has earned a consensus recommendation of "Buy" from the fifteen brokerages that are currently  covering the firm, MarketBeat Ratings reports. Fourteen analysts have rated the stock with a buy rating and one  has issued  a strong buy rating ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/alibaba-group-holding-limited-nysebaba-given-average-rating-of-buy-by-brokerages-2025-05-18\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/alibaba-group-holding-limited-logo-1200x675.png?v=20221020143329',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:36:12 +0000',
    },
    {
      id: '3ed1a27a-1a6e-4b7b-bf89-f6c3af54cb05',
      title: 'Post and Pre Increment Operators',
      description:
        'Notes1:\n\n\npackage IncrementOperators;\n\npublic class Post {\npublic static void main(String[] args) {\n int no = 1; \n no = no+1; \/\/no+=1 --> no++; \n System.out.println(no); \/\/2\n\n}\n}\n\n\n\noutput:\n2\nNotes2:\n\n\npackage IncrementOperators;\n\npublic class Post2 {\npublic static void main(String[] args) {\n int no...',
      url: 'https:\/\/dev.to\/pavithra_c_butterfly\/post-and-pre-increment-operators-5ahg',
      author: 'Pavithra C',
      image: 'None',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:34:19 +0000',
    },
    {
      id: '6554893a-5279-410c-9f9b-b3badd405fda',
      title: 'AU Deals: How the Moza MTP and MTLP Throttle up the Realism, Cheapest Prices, and More!',
      description: 'Why bolting in a Moza MTP Throttle and MTLP Panel felt like quite the sim-pit level up.',
      url: 'https:\/\/www.ign.com\/articles\/au-deals-how-the-moza-mtp-and-mtlp-throttle-up-the-realism-cheapest-prices-and-more',
      author: 'Adam Mathew',
      image: 'https:\/\/assets-prd.ignimgs.com\/2025\/05\/17\/1-1747440672178.jpg?width=1280',
      language: 'en',
      category: ['entertainment', 'game'],
      published: '2025-05-18 06:33:45 +0000',
    },
    {
      id: '0bc52655-9fd8-49ab-a9a4-5fbb63ce32d0',
      title: 'Which JavaScript Loop Do You Use the Most and Why?',
      description:
        'JavaScript gives us multiple ways to loop through data and execute repetitive tasks, each with its...',
      url: 'https:\/\/dev.to\/codeliner\/which-javascript-loop-do-you-use-the-most-and-why-1ifk',
      author: 'Shariful Ehasan',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F0lcgw9svggxs8faq86ep.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:33:34 +0000',
    },
    {
      id: '31133209-5cd8-46c8-88bb-0beaab77abaf',
      title: "Lashkar-Linked Man, NIA-Charged Scholar Join Trump's White House Board",
      description:
        'One once trained with the Pakistan-based terror outfit Lashkar-e-Taiba; the other was charged by the National Investigation Agency (NIA) for "provocative" speeches that allegedly influenced terrorists.',
      url: 'https:\/\/www.ndtv.com\/world-news\/ismail-royer-shaykh-hamza-yusuf-lashkar-linked-man-nia-charged-scholar-join-trumps-white-house-board-8443518',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-05\/asb6bhfk_white-house-board-appointment-_625x300_18_May_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 06:32:19 +0000',
    },
    {
      id: '00825622-ae8e-4496-8676-0f0b59afa8bc',
      title: 'BlackRock (NYSE:BLK) Now Covered by Analysts at StockNews.com',
      description:
        'Equities research analysts at StockNews.com initiated coverage on shares of BlackRock (NYSE:BLK - Get Free Report) in a note issued to investors on Friday. The brokerage set a "hold" rating on the ass...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/blackrock-nyseblk-now-covered-by-analysts-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/blackrock-inc-logo-1200x675.gif',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:43 +0000',
    },
    {
      id: 'dcfbd95c-976d-4b3a-a866-04d9eab3aba2',
      title: 'Albany International (NYSE:AIN) Rating Increased to Buy at StockNews.com',
      description:
        'Albany International (NYSE:AIN - Get Free Report) was upgraded by stock analysts at StockNews.com from a "hold" rating to a "buy" rating in a research report issued on Friday.\n\nGet Albany Internationa...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/albany-international-nyseain-rating-increased-to-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/albany-international-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:43 +0000',
    },
    {
      id: 'bc88d5ac-bfb0-4743-a1a4-8d87e51c8bc2',
      title: 'Bar Harbor Bankshares (NYSE:BHB) Earns Hold Rating from Analysts at StockNews.com',
      description:
        'Investment analysts at StockNews.com began coverage on shares of Bar Harbor Bankshares (NYSE:BHB - Get Free Report) in a research note issued to investors on Friday. The brokerage set a "hold" rating ...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/bar-harbor-bankshares-nysebhb-earns-hold-rating-from-analysts-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/generic-stocks9.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:43 +0000',
    },
    {
      id: 'a6b5b6fa-c1c4-472b-ae33-25e8d5f83eb9',
      title: 'CrossAmerica Partners (NYSE:CAPL) Raised to "Strong-Buy" at StockNews.com',
      description:
        'CrossAmerica Partners (NYSE:CAPL - Get Free Report) was upgraded by analysts at StockNews.com from a "buy" rating to a "strong-buy" rating in a report issued on Friday.\n\nGet CrossAmerica Partners aler...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/crossamerica-partners-nysecapl-raised-to-strong-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/crossamerica-partners-lp-logo-1200x675.jpg?v=20240515093923',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:42 +0000',
    },
    {
      id: 'a0af77be-4632-49a0-b792-dd950a9e8a0c',
      title: 'Community Bank System (NYSE:CBU) Upgraded by StockNews.com to "Hold" Rating',
      description:
        'Community Bank System (NYSE:CBU - Get Free Report) was upgraded by stock analysts at StockNews.com from a "sell" rating to a "hold" rating in a research report issued to clients and investors on Frida...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/community-bank-system-nysecbu-upgraded-by-stocknewscom-to-hold-rating-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/community-bank-system-inc-logo-1200x675.png?v=20221117163102',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:42 +0000',
    },
    {
      id: 'aa48e6df-34ed-41da-955d-c8750deb2cb3',
      title: 'Camden Property Trust (NYSE:CPT) Lowered to Sell Rating by StockNews.com',
      description:
        'Camden Property Trust (NYSE:CPT - Get Free Report) was downgraded by stock analysts at StockNews.com from a "hold" rating to a "sell" rating in a research note issued to investors on Friday.\n\nGet Camd...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/camden-property-trust-nysecpt-lowered-to-sell-rating-by-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/camden-property-trust-logo-1200x675.png?v=20221107155936',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:42 +0000',
    },
    {
      id: '6a97e533-bf9b-4339-9ed7-4e7f87c24baa',
      title: 'Carlisle Companies (NYSE:CSL) Raised to "Hold" at StockNews.com',
      description:
        'Carlisle Companies (NYSE:CSL - Get Free Report) was upgraded by equities research analysts at StockNews.com from a "sell" rating to a "hold" rating in a research note issued on Friday.\n\nGet Carlisle C...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/carlisle-companies-nysecsl-raised-to-hold-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/carlisle-companies-incorporated-logo-1200x675.png?v=20221107155655',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:41 +0000',
    },
    {
      id: '8125b676-4dc0-4cb0-adce-ead2cd22c1dd',
      title: 'VAALCO Energy (NYSE:EGY) Rating Lowered to Hold at StockNews.com',
      description:
        'VAALCO Energy (NYSE:EGY - Get Free Report) was downgraded by investment analysts at StockNews.com from a "buy" rating to a "hold" rating in a report issued on Friday.\n\nGet VAALCO Energy alerts: Sign U...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/vaalco-energy-nyseegy-rating-lowered-to-hold-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/vaalco-energy-inc-logo-1200x675.png?v=20240521090322',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:41 +0000',
    },
    {
      id: 'd15ba350-e650-4926-afa2-8f9c9eaaefe3',
      title: 'Edwards Lifesciences (NYSE:EW) Rating Lowered to Hold at StockNews.com',
      description:
        'Edwards Lifesciences (NYSE:EW - Get Free Report) was downgraded by StockNews.com from a "buy" rating to a "hold" rating in a research report issued to clients and investors on Friday.\n\nGet Edwards Lif...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/edwards-lifesciences-nyseew-rating-lowered-to-hold-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/edwards-lifesciences-co-logo-1200x675.jpg?v=20221021144646',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:40 +0000',
    },
    {
      id: '1a4c22cc-1e6d-4fdf-90f1-2640242ce789',
      title: 'Kennametal (NYSE:KMT) Rating Increased to Buy at StockNews.com',
      description:
        'Kennametal (NYSE:KMT - Get Free Report) was upgraded by investment analysts at StockNews.com from a "hold" rating to a "buy" rating in a research note issued on Friday.\n\nGet Kennametal alerts: Sign Up...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/kennametal-nysekmt-rating-increased-to-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/kennametal-inc-logo-1200x675.png?v=20240426131204',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:39 +0000',
    },
    {
      id: '311ee861-a61c-40da-82bb-5479a7377143',
      title: 'Snap-on (NYSE:SNA) Upgraded to Buy at StockNews.com',
      description:
        'Snap-on (NYSE:SNA - Get Free Report) was upgraded by equities research analysts at StockNews.com from a "hold" rating to a "buy" rating in a report released on Friday.\n\nGet Snap-on alerts: Sign Up\n\nA ...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/snap-on-nysesna-upgraded-to-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/snap-on-incorporated-logo-1200x675.gif',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:39 +0000',
    },
    {
      id: 'b257ed11-b365-4e70-95d6-2c7de7a7dcf4',
      title: 'Sasol (NYSE:SSL) Rating Lowered to Hold at StockNews.com',
      description:
        'Sasol (NYSE:SSL - Get Free Report) was downgraded by stock analysts at StockNews.com from a "buy" rating to a "hold" rating in a research report issued on Friday.\n\nGet Sasol alerts: Sign Up\n\nSeparatel...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sasol-nysessl-rating-lowered-to-hold-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/sasol-limited-logo-1200x675.png?v=20240426110318',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:38 +0000',
    },
    {
      id: '7081eb42-95e3-4e48-9a10-371ba2d219a2',
      title: 'Transcontinental Realty Investors (NYSE:TCI) Earns Sell Rating from Analysts at StockNews.com',
      description:
        'Analysts at StockNews.com initiated coverage on shares of Transcontinental Realty Investors (NYSE:TCI - Get Free Report) in a research note issued on Friday. The firm set a "sell" rating on the real e...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/transcontinental-realty-investors-nysetci-earns-sell-rating-from-analysts-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/transcontinental-realty-investors-inc-logo-1200x675.PNG',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:38 +0000',
    },
    {
      id: '9e1ca774-bb14-4b54-af94-8df37cb6627a',
      title: 'StockNews.com Downgrades Tootsie Roll Industries (NYSE:TR) to Hold',
      description:
        'Tootsie Roll Industries (NYSE:TR - Get Free Report) was downgraded by StockNews.com from a "buy" rating to a "hold" rating in a research note issued to investors on Friday.\n\nGet TR alerts: Sign Up\n\nTo...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/stocknewscom-downgrades-tootsie-roll-industries-nysetr-to-hold-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/tootsie-roll-industries-inc-logo-1200x675.png',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:37 +0000',
    },
    {
      id: 'c54880b5-613e-43da-a9df-7a1b75be0cac',
      title: 'Townsquare Media (NYSE:TSQ) Lowered to Hold Rating by StockNews.com',
      description:
        'Townsquare Media (NYSE:TSQ - Get Free Report) was downgraded by equities research analysts at StockNews.com from a "strong-buy" rating to a "hold" rating in a research report issued to clients and inv...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/townsquare-media-nysetsq-lowered-to-hold-rating-by-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/townsquare-media-inc-logo-1200x675.jpg?v=20221222072255',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:37 +0000',
    },
    {
      id: '213302ca-d85a-463c-80fb-ffbdc7884a8d',
      title: 'Adicet Bio (NASDAQ:ACET) Coverage Initiated at StockNews.com',
      description:
        'Equities researchers at StockNews.com assumed coverage on shares of Adicet Bio (NASDAQ:ACET - Get Free Report) in a research note issued on Friday. The brokerage set a "hold" rating on the stock.\n\nGet...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/adicet-bio-nasdaqacet-coverage-initiated-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/adicet-bio-inc-logo-1200x675.png?v=20221207142755',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:35 +0000',
    },
    {
      id: 'f0019d7c-106f-4a12-a336-7d64dcae1d10',
      title: 'Adaptimmune Therapeutics (NASDAQ:ADAP) Earns Buy Rating from Analysts at StockNews.com',
      description:
        'Analysts at StockNews.com began coverage on shares of Adaptimmune Therapeutics (NASDAQ:ADAP - Get Free Report) in a report issued on Friday. The brokerage set a "buy" rating on the biotechnology compa...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/adaptimmune-therapeutics-nasdaqadap-earns-buy-rating-from-analysts-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/adaptimmune-therapeutics-plc-logo-1200x675.png?v=20221219115240',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:35 +0000',
    },
    {
      id: 'a05cfd85-8f11-4026-9b2f-3019b6e9a074',
      title: 'Barrett Business Services (NASDAQ:BBSI) Stock Rating Lowered by StockNews.com',
      description:
        'Barrett Business Services (NASDAQ:BBSI - Get Free Report) was downgraded by equities research analysts at StockNews.com from a "strong-buy" rating to a "hold" rating in a research report issued on Fri...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/barrett-business-services-nasdaqbbsi-stock-rating-lowered-by-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/barrett-business-services-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:29:34 +0000',
    },
    {
      id: '874974c1-b3e1-4fa9-a98c-ddafcd285660',
      title: 'Nifty In Technical Charts: Is FOMO Back, Looks Like',
      description:
        "It's been quite a difficult market of late. First, it took its time to move down from the last projected time and date and chose to go sideways. Then it gave a signal, and the war games started. This ...",
      url: 'https:\/\/www.ndtvprofit.com\/markets\/nifty-in-technical-charts-is-fomo-back-looks-like',
      author: 'Ck Narayan',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2025-05-12%2F53cdjmc8%2Fworkplace-of-manager-or-executive-in-office-glass-2025-03-09-20-58-08-utc.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 06:28:28 +0000',
    },
    {
      id: 'ff41624d-42db-45a8-9784-173087806561',
      title:
        'Cannes Cam\u00e9ra d\u2019Or Winner Anthony Chen Begins Production on \u2018We Are All Strangers,\u2019 Completing His \u2018Growing Up\u2019 Trilogy (EXCLUSIVE)',
      description:
        'Exactly 12 years after winning the Cam\u00e9ra d\u2019Or at Cannes with his debut feature \u201cIlo Ilo,\u201d Singaporean filmmaker Anthony Chen has begun production on \u201cWe Are All Strangers,\u201d the third and final film i...',
      url: 'https:\/\/variety.com\/2025\/film\/news\/anthony-chen-we-are-all-strangers-1236401630\/',
      author: 'Naman Ramachandran',
      image: 'https:\/\/variety.com\/wp-content\/uploads\/2025\/05\/Anthony-Chen1.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 06:28:06 +0000',
    },
    {
      id: '2e0f098c-8984-408e-ab12-525d913577b0',
      title: '\ud83d\ude80 Introducing the Best Code to Image Generator App \u2014 Turn Code Into Art!',
      description:
        '\ud83d\ude80 Code to Image Generator App is Live!\n\nI\u2019m excited to announce the launch of the Code to Image Generator App \u2014 your new favorite tool to effortlessly transform code snippets into visually stunning im...',
      url: 'https:\/\/dev.to\/myogeshchavan97\/introducing-the-code-to-image-generator-app-turn-code-into-art-2l89',
      author: 'Yogesh Chavan',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ftik2v3mran896ijxr8k7.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:24:58 +0000',
    },
    {
      id: '952f7e26-122f-48f6-a18d-030153322807',
      title: 'India Hits $770 Million In Imports From Bangladesh With Port Restrictions',
      description:
        "India's move to curb imports from Bangladesh will hit goods worth $770 million (Rs 6,600 crore) from Bangladesh, covering nearly 42% of bilateral imports. The Directorate General of Foreign Trade on Saturday imposed port restrictions on the import of certain goods from Bangladesh to India. However, ...",
      url: 'https:\/\/www.ndtvprofit.com\/business\/india-hits-770-million-in-imports-from-bangladesh-with-port-restrictions',
      author: 'Rishabh Bhatnagar',
      image:
        'https:\/\/media.assettype.com\/bloombergquint%2F2024-12-27%2F27fu561l%2Findustrial-port-container-yard.jpg?w=1200&auto=format%2Ccompress&ogImage=true',
      language: 'en',
      category: ['general', 'business'],
      published: '2025-05-18 06:24:00 +0000',
    },
    {
      id: '91b7d844-2a25-4fca-840e-921ae2dbc833',
      title: 'Many inspired at Yoga Warriors event',
      description:
        "LITTLE ROCK, Ark. \u2013 Many people use yoga as form of relaxing the muscles and mind, but Fox16's Donna Terrell changed that dynamic after losing her daughter Queah, (pronounced Quaya), to Colon Cancer.\nShe was Queah's caregiver when she was sick, and says she grew to love yoga. So now she's using the ...",
      url: 'https:\/\/www.kark.com\/news\/local-news\/many-inspired-at-yoga-warriors-event\/',
      author: 'Whitney Thomas',
      image: 'None',
      language: 'en',
      category: ['regional', 'little-rock', 'arkansas'],
      published: '2025-05-18 06:23:04 +0000',
    },
    {
      id: 'ace2ad16-5530-4bc7-a0c6-bc27ae17b3f7',
      title: "A's return to Oracle Park for first time since Oakland departure draws mixed emotions from fans",
      description:
        "Current, former A's fans attend team's first series in San Francisco since move to Sacramento\n\nCurrent, former A's fans attend team's first series in San Francisco since move to Sacramento\n\nCurrent, f...",
      url: 'https:\/\/www.cbsnews.com\/sacramento\/news\/athletics-return-to-oracle-park-for-first-time-since-oakland-departure\/',
      author: 'Amanda',
      image:
        'https:\/\/assets3.cbsnewsstatic.com\/hub\/i\/r\/2025\/05\/18\/55e43e6c-451c-4c92-901f-6b5b6b0e444f\/thumbnail\/1200x630\/45a669ab10ce4174380772755125b0b6\/snapshot-2025-05-17t232030-279.jpg?v=6df9366690ed146f169dd0670c453f91',
      language: 'en',
      category: ['regional', 'scaramento', 'california'],
      published: '2025-05-18 06:22:28 +0000',
    },
    {
      id: 'c9785875-f2d5-48af-8830-9c4e4285e65a',
      title: 'Parsons Co. (NYSE:PSN) Given Consensus Rating of "Moderate Buy" by Analysts',
      description:
        'Parsons Co. (NYSE:PSN - Get Free Report) has been assigned a consensus rating of "Moderate Buy" from the twelve brokerages that are currently  covering the company, Marketbeat.com reports. Five analysts have rated the stock with a hold rating and seven have issued  a buy rating on  the company. The ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/parsons-co-nysepsn-given-consensus-rating-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/parsons-co-logo-1200x675.png?v=20240308095821',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:20 +0000',
    },
    {
      id: '464017b1-d54e-4ebd-9d5e-eeb6e7226f3b',
      title: 'UWM Holdings Co. (NYSE:UWMC) Receives Consensus Recommendation of "Hold" from Analysts',
      description:
        'UWM Holdings Co. (NYSE:UWMC - Get Free Report) has been assigned a consensus recommendation of "Hold" from the seven ratings firms that are  covering the stock, MarketBeat Ratings reports. Five research analysts have rated the stock with a hold rating and two have assigned  a buy rating to  the comp',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/uwm-holdings-co-nyseuwmc-receives-consensus-recommendation-of-hold-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/uwm-holdings-co-class-logo-1200x675.jpg?v=20210329130001',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:20 +0000',
    },
    {
      id: '2b26f6c9-39d3-48c0-9edd-f113760d7a7f',
      title: 'Flywire Co. (NASDAQ:FLYW) Receives Consensus Rating of "Hold" from Analysts',
      description:
        'Flywire Co. (NASDAQ:FLYW - Get Free Report) has been assigned a consensus rating of "Hold" from the fifteen ratings firms that are currently  covering the stock, MarketBeat.com reports. One research analyst  has rated the stock with a sell recommendation, ten have assigned  a hold recommendation and',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/flywire-co-nasdaqflyw-receives-consensus-rating-of-hold-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/flywire-co-logo-1200x675.jpg?v=20221123110420',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:19 +0000',
    },
    {
      id: 'e9a812c3-13e3-49b3-aea5-85ba24ba42a0',
      title:
        'Arrowhead Pharmaceuticals, Inc. (NASDAQ:ARWR) Given Consensus Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of Arrowhead Pharmaceuticals, Inc. (NASDAQ:ARWR - Get Free Report) have been given a consensus recommendation of "Moderate Buy" by the nine brokerages that are currently  covering the firm, MarketBeat.com reports. Three investment analysts have rated the stock with a hold rating and six have ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/arrowhead-pharmaceuticals-inc-nasdaqarwr-given-consensus-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/arrowhead-pharmaceuticals-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:19 +0000',
    },
    {
      id: 'e1ad2f2e-44a6-44df-95d1-645b04e6f4e3',
      title: 'CDW Co. (NASDAQ:CDW) Given Consensus Rating of "Moderate Buy" by Analysts',
      description:
        'CDW Co. (NASDAQ:CDW - Get Free Report) has received an average rating of "Moderate Buy" from the eight analysts that are presently  covering the company, MarketBeat reports. Four research analysts have rated the stock with a hold rating and four have assigned  a buy rating to  the company. The avera',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/cdw-co-nasdaqcdw-given-consensus-rating-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/cdw-corporation-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:18 +0000',
    },
    {
      id: 'f0219dfb-e495-429b-aea1-123b6f5e33d0',
      title: 'Jack in the Box Inc. (NASDAQ:JACK) Given Average Rating of "Hold" by Analysts',
      description:
        'Jack in the Box Inc. (NASDAQ:JACK - Get Free Report) has been given a consensus rating of "Hold" by the eighteen ratings firms that are  covering the company, Marketbeat reports. One investment analyst  has rated the stock with a sell recommendation, ten have issued  a hold recommendation and seven ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/jack-in-the-box-inc-nasdaqjack-given-average-rating-of-hold-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/jack-in-the-box-inc-logo-1200x675.png',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:18 +0000',
    },
    {
      id: '4538e6f0-4fac-4082-ba37-9449907da934',
      title: 'Henry Schein, Inc. (NASDAQ:HSIC) Receives Consensus Recommendation of "Moderate Buy" from Analysts',
      description:
        'Shares of Henry Schein, Inc. (NASDAQ:HSIC - Get Free Report) have been assigned an average recommendation of "Moderate Buy" from the eleven brokerages that are presently  covering the stock, MarketBeat.com reports. Five equities research analysts have rated the stock with a hold recommendation, five',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/henry-schein-inc-nasdaqhsic-receives-consensus-recommendation-of-moderate-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/henry-schein-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:18 +0000',
    },
    {
      id: '890f746c-44d0-44cd-ab87-f3d99235ca83',
      title: 'Warner Bros. Discovery, Inc. (NASDAQ:WBD) Given Consensus Recommendation of "Moderate Buy" by Brokerages',
      description:
        'Shares of Warner Bros. Discovery, Inc. (NASDAQ:WBD - Get Free Report) have been given an average rating of "Moderate Buy" by the twenty-one research firms that are  covering the stock, MarketBeat.com reports. Ten analysts have rated the stock with a hold rating and eleven have given a buy rating to ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/warner-bros-discovery-inc-nasdaqwbd-given-consensus-recommendation-of-moderate-buy-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/warner-bros-discovery-inc--logo-1200x675.png?v=20220412132025',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:17 +0000',
    },
    {
      id: 'b86a5ee4-cb66-400e-8a5c-646c9f2c4a6b',
      title: 'Maravai LifeSciences Holdings, Inc. (NASDAQ:MRVI) Given Consensus Recommendation of "Hold" by Brokerages',
      description:
        'Shares of Maravai LifeSciences Holdings, Inc. (NASDAQ:MRVI - Get Free Report) have been given a consensus recommendation of "Hold" by the twelve analysts that are  covering the firm, Marketbeat Ratings reports. One research analyst  has rated the stock with a sell rating, seven have issued  a hold r',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/maravai-lifesciences-holdings-inc-nasdaqmrvi-given-consensus-recommendation-of-hold-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image:
        'https:\/\/www.marketbeat.com\/logos\/maravai-lifesciences-holdings-inc-logo-1200x675.png?v=20240502162532',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:16 +0000',
    },
    {
      id: 'fb3110c0-974b-4064-8361-13b5d0e825f0',
      title: 'Eldorado Gold Co. (NYSE:EGO) Receives Consensus Recommendation of "Moderate Buy" from Analysts',
      description:
        'Eldorado Gold Co. (NYSE:EGO - Get Free Report) (TSE:ELD) has been given a consensus recommendation of "Moderate Buy" by the six ratings firms that are currently  covering the company, Marketbeat Ratings reports. Three equities research analysts have rated the stock with a hold recommendation, two ha',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/eldorado-gold-co-nyseego-receives-consensus-recommendation-of-moderate-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/eldorado-gold-co-logo-1200x675.png?v=20240426090515',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:15 +0000',
    },
    {
      id: 'a6d493ff-622f-44a7-b906-712c511e1a9a',
      title:
        'Interactive Brokers Group, Inc. (NASDAQ:IBKR) Given Consensus Recommendation of "Moderate Buy" by Brokerages',
      description:
        'Shares of Interactive Brokers Group, Inc. (NASDAQ:IBKR - Get Free Report) have been given a consensus recommendation of "Moderate Buy" by the eight research firms that are  covering the stock, MarketBeat Ratings reports. One analyst  has rated the stock with a hold rating and seven have given a buy ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/interactive-brokers-group-inc-nasdaqibkr-given-consensus-recommendation-of-moderate-buy-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/interactive-brokers-group-inc-logo-1200x675.jpg?v=20190904155325',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:15 +0000',
    },
    {
      id: 'dc7b767a-13b6-41fb-9921-6ca9544be813',
      title: 'AppFolio, Inc. (NASDAQ:APPF) Receives Average Rating of "Moderate Buy" from Brokerages',
      description:
        'Shares of AppFolio, Inc. (NASDAQ:APPF - Get Free Report) have been assigned a consensus rating of "Moderate Buy" from the eight analysts that are  covering the company, MarketBeat Ratings reports. One analyst  has rated the stock with a sell rating, two have issued  a hold rating, four have assigned',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/appfolio-inc-nasdaqappf-receives-average-rating-of-moderate-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/appfolio-inc-logo-1200x675.jpg?v=20240410093007',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:14 +0000',
    },
    {
      id: '7107bccc-0d07-4288-89ff-b1469600336f',
      title: 'MAG Silver Corp. (NYSEAMERICAN:MAG) Given Consensus Recommendation of "Moderate Buy" by Analysts',
      description:
        'MAG Silver Corp. (NYSEAMERICAN:MAG - Get Free Report) has earned a consensus recommendation of "Moderate Buy" from the seven research firms that are currently  covering the stock, Marketbeat reports. Four analysts have rated the stock with a hold recommendation, two have issued  a buy recommendation',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/mag-silver-corp-nyseamericanmag-given-consensus-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/mag-silver-corp-logo-1200x675.jpg?v=20241015101851',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:14 +0000',
    },
    {
      id: '27aa4d08-1fc1-48d2-8359-3856c493bd68',
      title: 'Schr\u00f6dinger, Inc. (NASDAQ:SDGR) Given Average Recommendation of "Buy" by Analysts',
      description:
        'Schr\u00f6dinger, Inc. (NASDAQ:SDGR - Get Free Report) has been given a consensus rating of "Buy" by the six analysts that are presently  covering the firm, MarketBeat Ratings reports. One equities research analyst  has rated the stock with a hold recommendation, four have given a buy recommendation and ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/schrdinger-inc-nasdaqsdgr-given-average-recommendation-of-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/schr\u00f6dinger-inc-logo-1200x675.png?v=20240515085346',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:13 +0000',
    },
    {
      id: 'b7c6da9c-4df0-4f1b-891e-33f7b008f075',
      title: 'Biomea Fusion, Inc. (NASDAQ:BMEA) Given Average Recommendation of "Buy" by Analysts',
      description:
        'Shares of Biomea Fusion, Inc. (NASDAQ:BMEA - Get Free Report) have received a consensus recommendation of "Buy" from the twelve brokerages that are  covering the company, Marketbeat.com reports. One equities research analyst  has rated the stock with a hold rating, nine have issued  a buy rating and',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/biomea-fusion-inc-nasdaqbmea-given-average-recommendation-of-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/biomea-fusion-inc-logo-1200x675.png?v=20221216144502',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:13 +0000',
    },
    {
      id: 'b75ac6e0-3242-4b57-ae33-0772dde2bad7',
      title: 'Voyager Therapeutics, Inc. (NASDAQ:VYGR) Receives Average Rating of "Buy" from Brokerages',
      description:
        'Shares of Voyager Therapeutics, Inc. (NASDAQ:VYGR - Get Free Report) have been given an average recommendation of "Buy" by the eight brokerages that are presently  covering the company, Marketbeat Ratings reports. Seven investment analysts have rated the stock with a buy rating and one  has issued  ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/voyager-therapeutics-inc-nasdaqvygr-receives-average-rating-of-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/voyager-therapeutics-inc-logo-1200x675.png?v=20221216131945',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:12 +0000',
    },
    {
      id: '08185b43-16f8-4893-a990-997b083440fb',
      title: 'COPT Defense Properties (NYSE:CDP) Receives Consensus Rating of "Moderate Buy" from Analysts',
      description:
        'COPT Defense Properties (NYSE:CDP - Get Free Report) has received an average recommendation of "Moderate Buy" from the seven research firms that are  covering the firm, MarketBeat Ratings reports. Two equities research analysts have rated the stock with a hold recommendation and five have given a bu',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/copt-defense-properties-nysecdp-receives-consensus-rating-of-moderate-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/copt-defense-properties-logo-1200x675.jpg?v=20230920074128',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:12 +0000',
    },
    {
      id: '09b3e746-4b91-4c4a-b1c6-0fda3d4eece9',
      title: 'Workiva Inc. (NYSE:WK) Receives Consensus Recommendation of "Buy" from Analysts',
      description:
        'Workiva Inc. (NYSE:WK - Get Free Report) has earned an average rating of "Buy" from the ten brokerages that are presently  covering the company, Marketbeat reports. Ten research analysts have rated the stock with a buy recommendation.  The average 1 year target price among brokers that have issued a',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/workiva-inc-nysewk-receives-consensus-recommendation-of-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/workiva-inc-logo-1200x675.png',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:12 +0000',
    },
    {
      id: '8995400a-2178-40e4-9e64-2b784afedd65',
      title: 'Nurix Therapeutics, Inc. (NASDAQ:NRIX) Given Average Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of Nurix Therapeutics, Inc. (NASDAQ:NRIX - Get Free Report) have been given an average recommendation of "Moderate Buy" by the nineteen brokerages that are presently  covering the company, Marketbeat reports. Three investment analysts have rated the stock with a hold rating and sixteen have a',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/nurix-therapeutics-inc-nasdaqnrix-given-average-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/nurix-therapeutics-inc-logo-1200x675.png?v=20221208153304',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:10 +0000',
    },
    {
      id: '3a317426-456c-4761-8799-dfe2b049901f',
      title: 'Dayforce Inc (NYSE:DAY) Receives Average Recommendation of "Moderate Buy" from Brokerages',
      description:
        'Shares of Dayforce Inc (NYSE:DAY - Get Free Report) have been given a consensus rating of "Moderate Buy" by the fifteen analysts that are presently  covering the firm, Marketbeat Ratings reports. Six investment analysts have rated the stock with a hold rating and nine have assigned  a buy rating to ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/dayforce-inc-nyseday-receives-average-recommendation-of-moderate-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/dayforce-inc-logo-1200x675.jpg?v=20240206112455',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:07 +0000',
    },
    {
      id: '59429aa4-23ce-4d8a-9a43-943e7b2b8056',
      title: 'Relay Therapeutics, Inc. (NASDAQ:RLAY) Given Consensus Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of Relay Therapeutics, Inc. (NASDAQ:RLAY - Get Free Report) have been given an average recommendation of "Moderate Buy" by the twelve ratings firms that are presently  covering the company, Marketbeat reports. Two analysts have rated the stock with a hold recommendation and ten have issued  a',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/relay-therapeutics-inc-nasdaqrlay-given-consensus-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/relay-therapeutics-inc-logo-1200x675.png?v=20210329152018',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:07 +0000',
    },
    {
      id: 'b46fb5a1-ad6b-4f98-80d7-63603b22315a',
      title: 'Liquidia Co. (NASDAQ:LQDA) Receives Average Rating of "Buy" from Analysts',
      description:
        'Liquidia Co. (NASDAQ:LQDA - Get Free Report) has received a consensus recommendation of "Buy" from the nine analysts that are presently  covering the stock, Marketbeat.com reports. One analyst  has rated the stock with a hold rating, six have issued  a buy rating and two have given a strong buy rati',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/liquidia-co-nasdaqlqda-receives-average-rating-of-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/liquidia-co-logo-1200x675.png?v=20221213131103',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:05 +0000',
    },
    {
      id: '10c4c1e4-61b8-4362-80e8-c7b3e94858a8',
      title: 'Kosmos Energy Ltd. (NYSE:KOS) Given Consensus Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of Kosmos Energy Ltd. (NYSE:KOS - Get Free Report) have earned a consensus recommendation of "Moderate Buy" from the six analysts that are currently  covering the stock, Marketbeat reports. Three investment analysts have rated the stock with a hold recommendation and three have assigned  a bu',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/kosmos-energy-ltd-nysekos-given-consensus-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/kosmos-energy-ltd-logo-1200x675.jpg?v=20221121172133',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:22:05 +0000',
    },
    {
      id: '664bb02b-5f38-407c-8975-9d00d106d10e',
      title: 'Pickup truck strikes, kills woman in South Los Angeles',
      description:
        'A motorist struck and killed a female pedestrian in South Los Angeles on Saturday night, officials confirmed to KTLA.\nIt happened around 9:20 p.m. in the Vermont Vista neighborhood, according to the Los Angeles Police Department.\nDetails are limited, but police said that the woman was hit by a gray ...',
      url: 'https:\/\/ktla.com\/news\/local-news\/pickup-truck-strikes-kills-woman-in-south-los-angeles\/',
      author: 'Lily Dallow',
      image: 'None',
      language: 'en',
      category: ['regional', 'california'],
      published: '2025-05-18 06:21:04 +0000',
    },
    {
      id: 'd55c801a-c1ca-4c6c-b294-4cac67de1587',
      title: 'Adding Alt Text to Images in PDF Documents',
      description:
        'Adding Alt Text to Images in PDF Documents\n\nAlternative text (alt text) is one of the most critical components of PDF accessibility. These text descriptions enable people who cannot see images\u2014includi...',
      url: 'https:\/\/dev.to\/revisepdf\/adding-alt-text-to-images-in-pdf-documents-3263',
      author: 'Calum',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzyxd39tw2czeio0o1xpo.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:20:16 +0000',
    },
    {
      id: 'a6c51819-d4ea-46f7-bd26-6d044ae07b0b',
      title: 'Dorman Products (NASDAQ:DORM) Upgraded at StockNews.com',
      description:
        'Dorman Products (NASDAQ:DORM - Get Free Report) was upgraded by stock analysts at StockNews.com from a "buy" rating to a "strong-buy" rating in a research note issued on Friday.\n\nGet Dorman Products a...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/dorman-products-nasdaqdorm-upgraded-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/dorman-products-logo-1200x675.png',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:31 +0000',
    },
    {
      id: '21220ffb-8d21-4e01-99d7-9996455796e4',
      title: 'DXP Enterprises (NASDAQ:DXPE) Lowered to "Hold" Rating by StockNews.com',
      description:
        'DXP Enterprises (NASDAQ:DXPE - Get Free Report) was downgraded by equities research analysts at StockNews.com from a "buy" rating to a "hold" rating in a research note issued on Friday.\n\nGet DXP Enter...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/dxp-enterprises-nasdaqdxpe-lowered-to-hold-rating-by-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/dxp-enterprises-inc-logo-1200x675.png?v=20240521133616',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:30 +0000',
    },
    {
      id: '8879fd86-5fa3-4376-924e-bbfa3e8b17bd',
      title: 'eGain (NASDAQ:EGAN) Upgraded to Strong-Buy at StockNews.com',
      description:
        'eGain (NASDAQ:EGAN - Get Free Report) was upgraded by equities research analysts at StockNews.com from a "buy" rating to a "strong-buy" rating in a report issued on Friday.\n\nGet eGain alerts: Sign Up\n...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/egain-nasdaqegan-upgraded-to-strong-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/egain-co-logo-1200x675.png?v=20221215083500',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:27 +0000',
    },
    {
      id: '45640fe8-ec59-4387-a543-455d63dc9419',
      title: 'StockNews.com Initiates Coverage on Eltek (NASDAQ:ELTK)',
      description:
        'Investment analysts at StockNews.com initiated coverage on shares of Eltek (NASDAQ:ELTK - Get Free Report) in a report issued on Friday. The brokerage set a "hold" rating on the technology company\'s s...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/stocknewscom-initiates-coverage-on-eltek-nasdaqeltk-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/eltek-ltd-logo-1200x675.png?v=20240830134244',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:26 +0000',
    },
    {
      id: '210e6cba-4e25-448d-b54c-72237f1dac26',
      title: 'FARO Technologies (NASDAQ:FARO) Earns Buy Rating from Analysts at StockNews.com',
      description:
        'Analysts at StockNews.com began coverage on shares of FARO Technologies (NASDAQ:FARO - Get Free Report) in a research note issued to investors on Friday. The firm set a "buy" rating on the scientific ...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/faro-technologies-nasdaqfaro-earns-buy-rating-from-analysts-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/faro-technologies-inc-logo-1200x675.png?v=20240522125938',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:25 +0000',
    },
    {
      id: '2358b76f-7480-40dc-8990-a146a49ed546',
      title: 'Norfolk State men win fourth MEAC outdoor track and field title in a row',
      description:
        'COLLEGE MEN\u2019S TRACK AND FIELD\n\nThe Norfolk State men\u2019s track and field team captured its fourth consecutive Mid-Eastern Athletic Conference outdoor championship Saturday at Dick Price Stadium. The Spa...',
      url: 'https:\/\/www.dailypress.com\/2025\/05\/18\/norfolk-state-win-fourth-meac-outdoor-track-and-field-title-in-a-row\/',
      author: 'Staff Reports',
      image: 'https:\/\/www.dailypress.com\/wp-content\/uploads\/2025\/05\/TVP-L-SP-NSU-TRAK.jpg?w=1024&h=448',
      language: 'en',
      category: ['regional', 'norfolk', 'virginia'],
      published: '2025-05-18 06:19:25 +0000',
    },
    {
      id: 'ab341eca-f2d5-48b2-918c-00270892ee37',
      title: 'L.B. Foster (NASDAQ:FSTR) Upgraded by StockNews.com to Buy Rating',
      description:
        'L.B. Foster (NASDAQ:FSTR - Get Free Report) was upgraded by equities researchers at StockNews.com from a "hold" rating to a "buy" rating in a research report issued on Friday.\n\nGet L.B. Foster alerts:...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/lb-foster-nasdaqfstr-upgraded-by-stocknewscom-to-buy-rating-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/lb-foster-logo-1200x675.png?v=20240522160027',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:23 +0000',
    },
    {
      id: '4eafae99-c765-46d7-b6e3-c3814fd1fd10',
      title: 'H&E Equipment Services (NASDAQ:HEES) Now Covered by Analysts at StockNews.com',
      description:
        'Analysts at StockNews.com initiated coverage on shares of H&E Equipment Services (NASDAQ:HEES - Get Free Report) in a research note issued to investors on Friday. The firm set a "hold" rating on the i...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/he-equipment-services-nasdaqhees-now-covered-by-analysts-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/hamp;e-equipment-services-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:22 +0000',
    },
    {
      id: '6d66998a-00b0-4a53-945a-98a7fae234a5',
      title: 'StockNews.com Initiates Coverage on Gencor Industries (NASDAQ:GENC)',
      description:
        'Analysts at StockNews.com began coverage on shares of Gencor Industries (NASDAQ:GENC - Get Free Report) in a note issued to investors on Friday. The firm set a "hold" rating on the stock.\n\nGet Gencor ...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/stocknewscom-initiates-coverage-on-gencor-industries-nasdaqgenc-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/gencor-industries-inc-logo-1200x675.png?v=20230608061451',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:22 +0000',
    },
    {
      id: '4e7e2ea0-9cfb-49bd-9c2d-41b3fbeb78bf',
      title: 'Kimball Electronics (NASDAQ:KE) Upgraded by StockNews.com to Buy Rating',
      description:
        'Kimball Electronics (NASDAQ:KE - Get Free Report) was upgraded by equities research analysts at StockNews.com from a "hold" rating to a "buy" rating in a note issued to investors on Friday.\n\nGet Kimba...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/kimball-electronics-nasdaqke-upgraded-by-stocknewscom-to-buy-rating-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/kimball-electronics-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:20 +0000',
    },
    {
      id: '03731984-6302-4a20-bc5c-a104d8ee8071',
      title: 'StockNews.com Initiates Coverage on Liberty Broadband (NASDAQ:LBRDK)',
      description:
        'Analysts at StockNews.com started coverage on shares of Liberty Broadband (NASDAQ:LBRDK - Get Free Report) in a note issued to investors on Friday. The brokerage set a "sell" rating on the stock.\n\nGet...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/stocknewscom-initiates-coverage-on-liberty-broadband-nasdaqlbrdk-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/liberty-broadband-co-logo-1200x675.png?v=20240424094158',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:19 +0000',
    },
    {
      id: '6da4668f-2545-47e6-983d-b00d2e71c199',
      title: 'MercadoLibre (NASDAQ:MELI) Cut to "Hold" at StockNews.com',
      description:
        'MercadoLibre (NASDAQ:MELI - Get Free Report) was downgraded by analysts at StockNews.com from a "buy" rating to a "hold" rating in a research note issued on Friday.\n\nGet MercadoLibre alerts: Sign Up\n\n...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/mercadolibre-nasdaqmeli-cut-to-hold-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/mercadolibre-inc-logo-1200x675.png',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:18 +0000',
    },
    {
      id: '7f601d8b-c7a8-423f-b261-50a90de21f46',
      title: 'Motorcar Parts of America (NASDAQ:MPAA) Raised to "Strong-Buy" at StockNews.com',
      description:
        'Motorcar Parts of America (NASDAQ:MPAA - Get Free Report) was upgraded by investment analysts at StockNews.com from a "buy" rating to a "strong-buy" rating in a note issued to investors on Friday.\n\nGe...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/motorcar-parts-of-america-nasdaqmpaa-raised-to-strong-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/motorcar-parts-of-america-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:14 +0000',
    },
    {
      id: '5516621f-89d7-4828-9709-86a2e0405101',
      title: 'Potbelly (NASDAQ:PBPB) Lowered to "Hold" Rating by StockNews.com',
      description:
        'Potbelly (NASDAQ:PBPB - Get Free Report) was downgraded by analysts at StockNews.com from a "buy" rating to a "hold" rating in a report released on Friday.\n\nGet Potbelly alerts: Sign Up\n\nA number of o...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/potbelly-nasdaqpbpb-lowered-to-hold-rating-by-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/potbelly-corp-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:13 +0000',
    },
    {
      id: '1fa5cc99-2dd5-4e6f-9db9-d3623f6515dd',
      title: 'OSI Systems (NASDAQ:OSIS) Upgraded at StockNews.com',
      description:
        'OSI Systems (NASDAQ:OSIS - Get Free Report) was upgraded by analysts at StockNews.com from a "sell" rating to a "hold" rating in a report issued on Friday.\n\nGet OSI Systems alerts: Sign Up\n\nA number o...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/osi-systems-nasdaqosis-upgraded-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/osi-systems-inc-logo-1200x675.png?v=20221129144657',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:13 +0000',
    },
    {
      id: '21fd1ca1-1c79-456f-a1d1-604fd659f467',
      title: 'PTC Therapeutics (NASDAQ:PTCT) Rating Lowered to Buy at StockNews.com',
      description:
        'PTC Therapeutics (NASDAQ:PTCT - Get Free Report) was downgraded by equities research analysts at StockNews.com from a "strong-buy" rating to a "buy" rating in a report issued on Friday.\n\nGet PTC Thera...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/ptc-therapeutics-nasdaqptct-rating-lowered-to-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/ptc-therapeutics-inc-logo-1200x675.png?v=20240503130217',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:12 +0000',
    },
    {
      id: '181558b2-8dcb-46bd-bc0b-96629e2700b0',
      title: 'SkyWest (NASDAQ:SKYW) Rating Increased to Buy at StockNews.com',
      description:
        'SkyWest (NASDAQ:SKYW - Get Free Report) was upgraded by research analysts at StockNews.com from a "hold" rating to a "buy" rating in a research report issued on Friday.\n\nGet SkyWest alerts: Sign Up\n\nS...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/skywest-nasdaqskyw-rating-increased-to-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/skywest-inc-logo-1200x675.png?v=20221206124135',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:11 +0000',
    },
    {
      id: 'ede674f2-d200-4774-98fd-b94670dce0b6',
      title: 'SS&C Technologies (NASDAQ:SSNC) Upgraded by StockNews.com to Strong-Buy Rating',
      description:
        'SS&C Technologies (NASDAQ:SSNC - Get Free Report) was upgraded by equities research analysts at StockNews.com from a "buy" rating to a "strong-buy" rating in a research note issued to investors on Fri...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/ssc-technologies-nasdaqssnc-upgraded-by-stocknewscom-to-strong-buy-rating-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/ssc-technologies-holdings-inc-logo-1200x675.png?v=20231228134920',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:11 +0000',
    },
    {
      id: 'b3154345-e7d0-4ed6-afaf-8543cae5ece1',
      title: 'NortonLifeLock (NASDAQ:NLOK) Now Covered by StockNews.com',
      description:
        'Analysts at StockNews.com assumed coverage on shares of NortonLifeLock (NASDAQ:NLOK - Get Free Report) in a research note issued on Friday. The firm set a "buy" rating on the stock.\n\nGet NortonLifeLoc...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/nortonlifelock-nasdaqnlok-now-covered-by-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/nortonlifelock-inc-logo-1200x675.jpg?v=20230322063115',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:10 +0000',
    },
    {
      id: 'e9d62837-04fd-465b-ae4c-72a92e78ff3d',
      title: 'Bio-Techne (NASDAQ:TECH) Rating Increased to Buy at StockNews.com',
      description:
        'Bio-Techne (NASDAQ:TECH - Get Free Report) was upgraded by stock analysts at StockNews.com from a "hold" rating to a "buy" rating in a note issued to investors on Friday.\n\nGet Bio-Techne alerts: Sign ...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/bio-techne-nasdaqtech-rating-increased-to-buy-at-stocknewscom-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/bio-techne-co-logo-1200x675.png?v=20221107151934',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:10 +0000',
    },
    {
      id: '9c6a4bba-e296-4d80-a6ee-79739347a303',
      title: 'StockNews.com Downgrades Twin Disc (NASDAQ:TWIN) to Hold',
      description:
        'Twin Disc (NASDAQ:TWIN - Get Free Report) was downgraded by equities research analysts at StockNews.com from a "strong-buy" rating to a "hold" rating in a research report issued on Friday.\n\nGet Twin D...',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/stocknewscom-downgrades-twin-disc-nasdaqtwin-to-hold-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/twin-disc-inc-logo-1200x675.gif',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:19:09 +0000',
    },
    {
      id: '83cc836c-cd83-4f52-9da8-a383a445c371',
      title:
        "Comment on Shanghai's Liberation Daily Interviewed Michael Hudson: The Trade Conflict Has Brought Irreversible Impacts, Trump Is Compromising Himself by Yves Smith",
      description:
        'Yves here. While Michael Hudson\u2019s wide-ranging and harsh critique of US economic and social practices is thoroughly deserved, and our failings have been compounded by absolutely terrible leadership, I...',
      url: 'https:\/\/www.nakedcapitalism.com\/2025\/05\/shanghais-liberation-daily-interviewed-michael-hudson-the-trade-conflict-has-brought-irreversible-impacts-trump-is-compromising-himself.html',
      author: 'Yves Smith',
      image: 'https:\/\/www.nakedcapitalism.com\/favicon.ico',
      language: 'en',
      category: ['news', ' business', ' finances', ' money', ' banking'],
      published: '2025-05-18 06:18:19 +0000',
    },
    {
      id: 'c5280d86-e36b-4e72-93f9-30647e66d5d2',
      title: 'Understanding the punycode Deprecation Warning in Node.js',
      description:
        "If you\u2019ve seen this warning in your Node.js application recently you're not alone. In this post, we\u2019ll break down what this warning means, why it happens, and how to fix it.\n\n\n\n( node:xxxx ) [ DEP0040...",
      url: 'https:\/\/dev.to\/bharathvaj_ganesan\/understanding-the-punycode-deprecation-warning-in-nodejs-5ffe',
      author: 'Bharathvaj',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F3zrz9c6mnbbpvyvm5ky2.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:18:10 +0000',
    },
    {
      id: '74bb4b87-f678-49ac-b26f-bbb827ff7793',
      title: 'Bloody, bare footprints at Minneapolis murder scene lead to decadeslong search for answers',
      description:
        'Minnesota crime scene investigators captured footage when they got their first look inside a high-rise apartment in Minneapolis. According to police reports, at around 5:30 p.m. on June 13, 1993, a te...',
      url: 'https:\/\/www.cbsnews.com\/news\/jeanie-childs-jerry-westrom-minneapolis-cold-case-murder\/',
      author: 'Erin',
      image:
        'https:\/\/assets2.cbsnewsstatic.com\/hub\/i\/r\/2025\/05\/18\/60638b84-0ad0-4987-94a9-29a66db1aec2\/thumbnail\/1200x630\/6dd90e3c6cf7f87a4ec325415bfc49c2\/childs-footprints.jpg?v=6df9366690ed146f169dd0670c453f91',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 06:16:48 +0000',
    },
    {
      id: '6163624b-40ed-4c72-8904-f3a23e0b95ec',
      title: 'Westfield residents gather to support local man who was paralyzed in a skiing accident',
      description:
        'WESTFIELD, Mass. (WWLP) - Westfield residents gathered earlier Saturday evening to support a local man who was paralyzed in a skiing accident. \n28 -year-old Garrett Wheeler faced this life changing moement back in January. He is now paralyzed from the waist down and is facing a lifetime of mobility ...',
      url: 'https:\/\/www.wwlp.com\/news\/local-news\/westfield-residents-gather-to-support-local-man-who-was-paralyzed-in-a-skiing-accident\/',
      author: 'Kayleigh Thomas',
      image: 'None',
      language: 'en',
      category: ['regional', 'springfield', 'massachusetts'],
      published: '2025-05-18 06:16:10 +0000',
    },
    {
      id: '49c47d5c-b78b-45e6-acf9-9b75800d984b',
      title: 'High school softball: Southern Section playoff results and updated pairings',
      description:
        'More to Read\n\nNote: Semifinals (all divisions) May 24; Finals (all divisions) May 30-31.\n\n(Games at 3:15 p.m. unless noted)\n\nNewsletter Get our high school sports newsletter\n\nPrep Rally is devoted to ...',
      url: 'https:\/\/www.latimes.com\/sports\/highschool\/story\/2025-05-17\/prep-softball-southern-section-playoff-results',
      author: 'Los Angeles Times staff',
      image:
        'https:\/\/ca-times.brightspotcdn.com\/dims4\/default\/7334a2a\/2147483647\/strip\/true\/crop\/5183x2721+1+505\/resize\/1200x630!\/quality\/75\/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F7e%2Ff5%2F73acafab4bb3b340d7cd76d005b2%2Fpexels-pixabay-257970-1.jpg',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 06:15:08 +0000',
    },
    {
      id: '6e32f1ac-dfaa-4da2-b5fa-316b56487177',
      title: 'Police investigating death of 3-month-old baby | Honolulu Star-Advertiser',
      description:
        'Police are investigating the death of a 3-month-old baby boy, who was found unresponsive at 7:08 a.m. today in Kalihi.',
      url: 'https:\/\/www.staradvertiser.com\/2025\/05\/17\/breaking-news\/police-investigating-death-of-3-month-old-baby\/',
      author: 'Star-Advertiser Staff',
      image:
        'https:\/\/www.staradvertiser.com\/wp-content\/uploads\/2025\/05\/web1_web1_hpd_HPD_honolulu_police_20200115.jpg',
      language: 'en',
      category: ['regional'],
      published: '2025-05-18 06:15:00 +0000',
    },
    {
      id: 'fd7cbb61-4241-4ce5-a509-6d778512d177',
      title: "I'm About to Ship My First EdTech-Focused App \ud83d\ude80",
      description:
        'Hi everyone \ud83d\udc4b,\n\nAfter months of coffee-fueled nights, hallway feedback, and testing between classes, I\u2019m thrilled (and nervous) to say\u2014I\u2019m about to ship my very first EdTech-focused app: Rucks.\n\n\ud83c\udf92...',
      url: 'https:\/\/dev.to\/rono0365\/im-about-to-ship-my-first-edtech-focused-app-316h',
      author: 'Rono',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4zp4m8j9ywxexlg7md95.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:14:28 +0000',
    },
    {
      id: 'a5a6eb27-dc74-417e-8787-ceccb115c9c0',
      title: '\ud83e\udde0 Difference Between pydantic and mypy',
      description:
        '\ud83e\udde9 Summary for Developers  Use Pydantic when you need to validate and clean data at runtime,...',
      url: 'https:\/\/dev.to\/muskanfatim\/difference-between-pydantic-and-mypy-24al',
      author: 'Muskan Fatima',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fzx25h26humux09qykugy.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:12:22 +0000',
    },
    {
      id: '6b4df39b-a094-43c1-bbd2-fe954fae78e3',
      title: '\ud83d\ude80 Setting Up PostgreSQL with Prisma ORM in a Node.js Project (Using Docker)',
      description:
        "In my recent Node.js project, I set up a PostgreSQL database using Prisma ORM\u2014one of the most efficient and type-safe ORMs available. I used docker to run postgres on my linux machine\nHere's a detailed walkthrough of the setup\u2014from pulling the Docker image to generating the Prisma client. If you're ...",
      url: 'https:\/\/dev.to\/tush03\/setting-up-postgresql-with-prisma-orm-in-a-nodejs-project-using-docker-ock',
      author: 'Tushar Patil',
      image: 'None',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:11:20 +0000',
    },
    {
      id: '19285740-66a4-49cd-85ca-6c61f05c1f92',
      title: 'Patients of Palm Springs fertility clinic grateful embryos are safe',
      description:
        '"It doesn\'t matter what side or religion or wherever you come from, to take that opportunity, to have a family, and to grow life, away from somebody is so profoundly wrong just in every way," Catrina Sheldon said.',
      url: 'https:\/\/www.kcra.com\/article\/patients-palm-springs-fertility-clinic-grateful-embryos-safe-explosion\/64803081',
      author: 'kcra',
      image:
        'https:\/\/kubrick.htvapps.com\/htv-prod-media.s3.amazonaws.com\/images\/fertility-clinic-explosion-682974d56d919.png?crop=0.787xw:1.00xh;0,0&resize=640:*',
      language: 'en',
      category: ['regional', 'scaramento', 'california'],
      published: '2025-05-18 06:10:00 +0000',
    },
    {
      id: '3dc35600-d89c-46f0-92bd-cb021d44078f',
      title:
        'Twin Directors Tarzan and Arab Nasser on Spaghetti Western \u2018Once Upon a Time in Gaza\u2019: \u2018With What Is Happening, the Title Is Even More Appropriate\u2019',
      description:
        'Gaza-born twin brothers Tarzan and Arab Nasser are back in Cannes with \u201cOnce Upon a Time in Gaza,\u201d their riff on the Western genre which, though not explicitly political, is certainly timely. Starting...',
      url: 'https:\/\/variety.com\/2025\/film\/global\/twin-directors-tarzan-arab-nasser-once-upon-a-time-in-gaza-1236400972\/',
      author: 'Nick Vivarelli',
      image: 'https:\/\/variety.com\/wp-content\/uploads\/2025\/05\/OUATG.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 06:09:20 +0000',
    },
    {
      id: 'b92e79a6-1dbd-455d-90ea-66f78840ed45',
      title: 'Introducing My First Blogs Website: A Fresh Blog Space',
      description:
        "Hey Dev Community!  I'm Varun Gautam, a 9th-grade student and passionate web developer from Delhi...",
      url: 'https:\/\/dev.to\/borgbyte_hub\/introducing-my-first-blogs-website-a-fresh-blog-space-3m5p',
      author: 'Borgbyte Hub',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F74anor94aj4pr5wkcsmq.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:08:04 +0000',
    },
    {
      id: 'dacd993f-3af6-4beb-895c-382eef1c5cbd',
      title: 'Blackstone (NYSE:BX) Shares Unloaded Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Blackstone Inc. (NYSE:BX). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Blackstone stock on April 14th. The trade occurred in the Representative\'s "MORGAN STANLE',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/blackstone-nysebx-shares-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/the-blackstone-group-lp-logo-1200x675.gif',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:33 +0000',
    },
    {
      id: 'c22c3d02-558b-40d5-9403-d5cab01cafb6',
      title: 'Sen. Tommy Tuberville Sells Archer-Daniels-Midland Company (NYSE:ADM) Shares',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of Archer-Daniels-Midland Company (NYSE:ADM). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in Archer-Daniels-Midland stock on April 15th. Senator Tommy Tuberville also recently made ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sen-tommy-tuberville-sells-archer-daniels-midland-company-nyseadm-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/archer-daniels-midland-co-logo-1200x675.jpg?v=20200424121557',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:32 +0000',
    },
    {
      id: '7ee2c4ae-793d-42a1-8912-73a39f32df66',
      title: 'Duke Energy (NYSE:DUK) Stock Unloaded Sen. Tommy Tuberville',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of Duke Energy Co. (NYSE:DUK). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in Duke Energy stock on April 15th. Senator Tommy Tuberville also recently made the following trade(s): So',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/duke-energy-nyseduk-stock-unloaded-sen-tommy-tuberville-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/duke-energy-corp-logo-1200x675.gif',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:28 +0000',
    },
    {
      id: 'dfa3ae29-f108-4cb6-b7a3-9098c9802924',
      title: 'Sen. Tommy Tuberville Sells CSX Co. (NASDAQ:CSX) Shares',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of CSX Co. (NASDAQ:CSX). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in CSX stock on April 15th. Senator Tommy Tuberville also recently made the following trade(s): Sold $15,001 - $',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sen-tommy-tuberville-sells-csx-co-nasdaqcsx-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/csx-co-logo-1200x675.png?v=20231214113911',
      language: 'tr',
      category: ['finance'],
      published: '2025-05-18 06:06:28 +0000',
    },
    {
      id: '2eade0b2-8c9b-4085-9c94-0e5aef1e9fb8',
      title: 'Bristol-Myers Squibb (NYSE:BMY) Stock Unloaded Sen. Tommy Tuberville',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of Bristol-Myers Squibb (NYSE:BMY). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $1,001 and $15,000 in Bristol-Myers Squibb stock on April 15th. Senator Tommy Tuberville also recently made the following',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/bristol-myers-squibb-nysebmy-stock-unloaded-sen-tommy-tuberville-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/bristol-myers-squibb-logo-1200x675.png?v=20240129123917',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:27 +0000',
    },
    {
      id: '6097103e-b5f4-4816-b943-1892f22f18ed',
      title: 'Sen. Tommy Tuberville Sells Off Shares of Constellation Brands, Inc. (NYSE:STZ)',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of Constellation Brands, Inc. (NYSE:STZ). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in Constellation Brands stock on April 15th. Senator Tommy Tuberville also recently made the fo',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sen-tommy-tuberville-sells-off-shares-of-constellation-brands-inc-nysestz-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/constellation-brands-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:26 +0000',
    },
    {
      id: '0a1c6a83-70b5-48ae-bd6c-85b67630c46a',
      title: 'Sen. Tommy Tuberville Sells Off Shares of The Goldman Sachs Group, Inc. (NYSE:GS)',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of The Goldman Sachs Group, Inc. (NYSE:GS). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in The Goldman Sachs Group stock on April 15th. Senator Tommy Tuberville also recently made t',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sen-tommy-tuberville-sells-off-shares-of-the-goldman-sachs-group-inc-nysegs-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/goldman-sachs-logo-1200x675.gif',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:25 +0000',
    },
    {
      id: 'f7d100b3-2866-4f0a-8807-8cfc72d89398',
      title: 'Sen. Tommy Tuberville Sells Mastercard Incorporated (NYSE:MA) Stock',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of Mastercard Incorporated (NYSE:MA). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in Mastercard stock on April 15th. Senator Tommy Tuberville also recently made the following trade(',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sen-tommy-tuberville-sells-mastercard-incorporated-nysema-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/mastercard-incorporated-logo-1200x675.png?v=20221020142959',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:23 +0000',
    },
    {
      id: 'c0fd06e8-2a16-4957-b96d-65a164b2690b',
      title: 'Sen. Tommy Tuberville Sells Amgen Inc. (NASDAQ:AMGN) Stock',
      description:
        'Senator Tommy Tuberville (R-Alabama)  recently sold shares of Amgen Inc. (NASDAQ:AMGN). In a filing disclosed on May 15th, the Senator disclosed that they had sold between $15,001 and $50,000 in Amgen stock on April 15th. Senator Tommy Tuberville also recently made the following trade(s): Sold $15,0',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sen-tommy-tuberville-sells-amgen-inc-nasdaqamgn-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/amgen-inc-logo-1200x675.jpg?v=20231228113741',
      language: 'tr',
      category: ['finance'],
      published: '2025-05-18 06:06:22 +0000',
    },
    {
      id: '9da03515-c181-4045-95f8-add720bdebb0',
      title: 'Rep. Josh Gottheimer Sells Hillman Solutions Corp (NASDAQ:HLMN) Shares',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Hillman Solutions Corp (NASDAQ:HLMN). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Hillman Solutions stock on April 17th. The trade occurred in the Representativ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-hillman-solutions-corp-nasdaqhlmn-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/hillman-solutions-corp-logo-1200x675.png?v=20210719055740',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:19 +0000',
    },
    {
      id: 'c4297ded-6fcd-41e4-97f4-165e7f0ccb72',
      title: 'Rep. Josh Gottheimer Sells Off Shares of Cadre Holdings, Inc. (NYSE:CDRE)',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Cadre Holdings, Inc. (NYSE:CDRE). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Cadre stock on April 17th. The trade occurred in the Representative\'s "MORGAN STAN',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-off-shares-of-cadre-holdings-inc-nysecdre-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/cadre-holdings-inc-logo-1200x675.png?v=20240502163151',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:17 +0000',
    },
    {
      id: 'ab723b0d-51b2-4647-a706-e377442a8a61',
      title: 'Advanced Energy Industries (NASDAQ:AEIS) Stock Unloaded Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Advanced Energy Industries, Inc. (NASDAQ:AEIS). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Advanced Energy Industries stock on April 17th. The trade occurred i',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/advanced-energy-industries-nasdaqaeis-stock-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/advanced-energy-industries-inc-logo-1200x675.png?v=20241107131550',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:15 +0000',
    },
    {
      id: 'a1a83c56-0cef-4f33-9593-d7344a3fe93b',
      title: 'Rep. Josh Gottheimer Sells PAR Technology Co. (NYSE:PAR) Shares',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of PAR Technology Co. (NYSE:PAR). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in PAR Technology stock on April 17th. The trade occurred in the Representative\'s "MORGA',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-par-technology-co-nysepar-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/par-technology-co-logo-1200x675.png?v=20221208145153',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:15 +0000',
    },
    {
      id: 'ced7c484-4fad-411b-9cf0-c34c67519dbc',
      title: 'Rep. Josh Gottheimer Sells Starbucks Co. (NASDAQ:SBUX) Stock',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Starbucks Co. (NASDAQ:SBUX). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Starbucks stock on April 17th. The trade occurred in the Representative\'s "MORGAN STANL',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-starbucks-co-nasdaqsbux-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/starbucks-co-logo-1200x675.png?v=20231214122544',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:14 +0000',
    },
    {
      id: 'af3acf79-9772-4525-8f56-de852cea7207',
      title: 'Union Pacific (NYSE:UNP) Shares Unloaded Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Union Pacific Co. (NYSE:UNP). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Union Pacific stock on April 17th. The trade occurred in the Representative\'s "MORGAN ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/union-pacific-nyseunp-shares-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/union-pacific-co-logo-1200x675.png?v=20231212201221',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:13 +0000',
    },
    {
      id: 'd4b1690d-fae5-4427-9b2d-3318b83ae81d',
      title: 'Rep. Josh Gottheimer Sells Corning Incorporated (NYSE:GLW) Shares',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Corning Incorporated (NYSE:GLW). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $15,001 and $50,000 in Corning stock on April 17th. The trade occurred in the Representative\'s "MORGAN ST',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-corning-incorporated-nyseglw-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/corning-incorporated-logo-1200x675.png?v=20240125072404',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:13 +0000',
    },
    {
      id: '0498312e-81b5-495e-9b21-7d2d9679513b',
      title: 'U.S. Physical Therapy (NYSE:USPH) Stock Unloaded Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of U.S. Physical Therapy, Inc. (NYSE:USPH). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in U.S. Physical Therapy stock on April 17th. The trade occurred in the Repres',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/us-physical-therapy-nyseusph-stock-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/us-physical-therapy-inc-logo-1200x675.jpg?v=20240509151906',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:12 +0000',
    },
    {
      id: '75d603d8-4e76-4e93-a71c-ece18e020f8e',
      title: 'Twilio (NYSE:TWLO) Stock Unloaded Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Twilio Inc. (NYSE:TWLO). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Twilio stock on April 17th. The trade occurred in the Representative\'s "MORGAN STANLEY - SE',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/twilio-nysetwlo-stock-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/twilio-inc-logo-1200x675.png?v=20240119115818',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:11 +0000',
    },
    {
      id: '4c922ce6-863d-4b6d-bbc1-66434603a266',
      title: 'Rep. Josh Gottheimer Sells TE Connectivity Ltd. (NYSE:TEL) Stock',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of TE Connectivity Ltd. (NYSE:TEL). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $15,001 and $50,000 in TE Connectivity stock on April 17th. The trade occurred in the Representative\'s "M',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-te-connectivity-ltd-nysetel-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/te-connectivity-ltd-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:10 +0000',
    },
    {
      id: '5dbac6ce-c866-4d68-bec7-36955d01404f',
      title: 'Rep. Josh Gottheimer Sells Thermon Group Holdings, Inc. (NYSE:THR) Stock',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Thermon Group Holdings, Inc. (NYSE:THR). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Thermon Group stock on April 17th. The trade occurred in the Representative',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-sells-thermon-group-holdings-inc-nysethr-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/thermon-group-holdings-inc-logo-1200x675.png?v=20221208140809',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:09 +0000',
    },
    {
      id: 'ce552be4-fe83-4236-a33d-7ccaef664c62',
      title: 'Enerpac Tool Group (NYSE:EPAC) Shares Unloaded Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of Enerpac Tool Group Corp. (NYSE:EPAC). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Enerpac Tool Group stock on April 17th. The trade occurred in the Representati',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/enerpac-tool-group-nyseepac-shares-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/enerpac-tool-group-corp-logo-1200x675.png?v=20240524073400',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:08 +0000',
    },
    {
      id: '60270a0d-1ad4-4a85-9b58-b076a14fa8bc',
      title: 'Techtronic Industries (OTCMKTS:TTNDY) Stock Acquired Rep. Josh Gottheimer',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently bought shares of Techtronic Industries Company Limited (OTCMKTS:TTNDY). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in Techtronic Industries stock on April 21st. The trade occu',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/techtronic-industries-otcmktsttndy-stock-acquired-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image:
        'https:\/\/www.marketbeat.com\/logos\/techtronic-industries-company-limited-logo-1200x675.png?v=20240522065943',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:08 +0000',
    },
    {
      id: '375900e8-95f1-4da8-8107-1d998e255e0d',
      title: 'Rep. Josh Gottheimer Buys Tri Pointe Homes, Inc. (NYSE:TPH) Stock',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently bought shares of Tri Pointe Homes, Inc. (NYSE:TPH). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in Tri Pointe Homes stock on April 21st. The trade occurred in the Representativ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-buys-tri-pointe-homes-inc-nysetph-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/tri-pointe-homes-inc-logo-1200x675.png?v=20240424143431',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:07 +0000',
    },
    {
      id: '5a7076d2-a256-4365-bd98-6281656dc12a',
      title:
        'Rep. Josh Gottheimer Purchases Shares of Perusahaan Perseroan (Persero) PT Telekomunikasi Indonesia Tbk (NYSE:TLK)',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently bought shares of Perusahaan Perseroan (Persero) PT Telekomunikasi Indonesia Tbk (NYSE:TLK). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in Perusahaan Perseroan (Persero) PT Tel',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-purchases-shares-of-perusahaan-perseroan-persero-pt-telekomunikasi-indonesia-tbk-nysetlk-2025-05-16\/',
      author: 'MarketBeat',
      image:
        'https:\/\/www.marketbeat.com\/logos\/perusahaan-perseroan-(persero)-pt-telekomunikasi-indonesia-tbk-logo-1200x675.png?v=20240509145312',
      language: 'msa',
      category: ['finance'],
      published: '2025-05-18 06:06:07 +0000',
    },
    {
      id: 'f093b3d2-3d47-4315-a8ee-73fa02f62e47',
      title: 'Rep. Josh Gottheimer Sells KKR & Co. Inc. (NYSE:KKR) Shares',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently sold shares of KKR & Co. Inc. (NYSE:KKR). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in KKR & Co. Inc. stock on April 14th. The trade occurred in the Representative\'s "MORGAN ST',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/kkr-co-inc-nysekkr-stock-unloaded-rep-josh-gottheimer-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/kkr--co-inc-logo-1200x675.jpg?v=20221024140836',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:07 +0000',
    },
    {
      id: '984358bf-80ad-46bb-ba6b-2a985b2abb97',
      title: 'Rep. Josh Gottheimer Buys D.R. Horton, Inc. (NYSE:DHI) Stock',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently bought shares of D.R. Horton, Inc. (NYSE:DHI). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in D.R. Horton stock on April 21st. The trade occurred in the Representative\'s "MORGA',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-buys-dr-horton-inc-nysedhi-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/dr-horton-inc-logo-1200x675.png?v=20231220092459',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:06 +0000',
    },
    {
      id: '57693b4d-9264-4c25-8300-9fdad62327ee',
      title: 'Rep. Julie Johnson Sells Off Shares of Blackstone Inc. (NYSE:BX)',
      description:
        'Representative Julie Johnson (D-Texas)  recently sold shares of Blackstone Inc. (NYSE:BX). In a filing disclosed on May 14th, the Representative disclosed that they had sold between $1,001 and $15,000 in Blackstone stock on April 22nd. The trade occurred in the Representative\'s "CHASE BROKERAGE ACCO',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-julie-johnson-sells-off-shares-of-blackstone-inc-nysebx-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/the-blackstone-group-lp-logo-1200x675.gif',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:05 +0000',
    },
    {
      id: '2945c2b4-40f6-41d9-95c1-b400759b49e0',
      title: 'Rep. Josh Gottheimer Buys Cheniere Energy, Inc. (NYSE:LNG) Shares',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently bought shares of Cheniere Energy, Inc. (NYSE:LNG). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in Cheniere Energy stock on April 22nd. Representative Josh Gottheimer also recen',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-buys-cheniere-energy-inc-nyselng-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/cheniere-energy-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:05 +0000',
    },
    {
      id: '83dc0d61-761a-43e1-b909-da2f92320061',
      title: 'Rep. Josh Gottheimer Buys RTX Co. (NYSE:RTX) Shares',
      description:
        'Representative Josh Gottheimer (D-New Jersey)  recently bought shares of RTX Co. (NYSE:RTX). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in RTX stock on April 23rd. The trade occurred in the Representative\'s "MORGAN STANLEY - SELECT',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-josh-gottheimer-buys-rtx-co-nysertx-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/raytheon-technologies-co-logo-1200x675.PNG?v=20201013154408',
      language: 'de',
      category: ['finance'],
      published: '2025-05-18 06:06:04 +0000',
    },
    {
      id: 'd04b738e-0a72-4ee7-9ba5-22da2ae6229c',
      title: 'Analog Devices (NASDAQ:ADI) Stock Acquired Rep. Thomas H. Kean, Jr.',
      description:
        'Representative Thomas H. Kean, Jr. (R-New Jersey)  recently bought shares of Analog Devices, Inc. (NASDAQ:ADI). In a filing disclosed on May 15th, the Representative disclosed that they had bought between $1,001 and $15,000 in Analog Devices stock on April 24th. The trade occurred in the Representat',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/analog-devices-nasdaqadi-stock-acquired-rep-thomas-h-kean-jr-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/Analog_devices_logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:03 +0000',
    },
    {
      id: '47f0bcd6-df72-40e8-bdd1-107a5a14d872',
      title: 'Fiserv (NYSE:FI) Stock Acquired Rep. Thomas H. Kean, Jr.',
      description:
        'Representative Thomas H. Kean, Jr. (R-New Jersey)  recently bought shares of Fiserv, Inc. (NYSE:FI). In a filing disclosed on May 15th, the Representative disclosed that they had bought between $1,001 and $15,000 in Fiserv stock on April 24th. The trade occurred in the Representative\'s "KEAN FAMILY ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/fiserv-nysefi-stock-acquired-rep-thomas-h-kean-jr-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/fiserv-inc-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:06:01 +0000',
    },
    {
      id: '8caccdfd-2e1f-4251-9bf4-bbf89397bbec',
      title: 'Rep. Thomas H. Kean, Jr. Buys Prologis, Inc. (NYSE:PLD) Stock',
      description:
        'Representative Thomas H. Kean, Jr. (R-New Jersey)  recently bought shares of Prologis, Inc. (NYSE:PLD). In a filing disclosed on May 15th, the Representative disclosed that they had bought between $1,001 and $15,000 in Prologis stock on April 24th. The trade occurred in the Representative\'s "KEAN FA',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-thomas-h-kean-jr-buys-prologis-inc-nysepld-stock-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/800px-ProLogis_logo.svg-1200x675.png',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:05:58 +0000',
    },
    {
      id: 'd6271854-6d28-4ea1-859f-419d98035981',
      title: 'Rep. Thomas H. Kean, Jr. Sells Franklin Resources, Inc. (NYSE:BEN) Shares',
      description:
        'Representative Thomas H. Kean, Jr. (R-New Jersey)  recently sold shares of Franklin Resources, Inc. (NYSE:BEN). In a filing disclosed on May 15th, the Representative disclosed that they had sold between $1,001 and $15,000 in Franklin Resources stock on April 28th. The trade occurred in the Represent',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-thomas-h-kean-jr-sells-franklin-resources-inc-nyseben-shares-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/franklin-resources-inc-logo-1200x675.png?v=20221107161938',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:05:58 +0000',
    },
    {
      id: '281bbfc2-fa82-47ac-93a2-1e5a75538887',
      title: 'Rep. Julie Johnson Purchases Shares of Fidelity National Information Services, Inc. (NYSE:FIS)',
      description:
        'Representative Julie Johnson (D-Texas)  recently bought shares of Fidelity National Information Services, Inc. (NYSE:FIS). In a filing disclosed on May 14th, the Representative disclosed that they had bought between $1,001 and $15,000 in Fidelity National Information Services stock on April 22nd. Th',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/rep-julie-johnson-purchases-shares-of-fidelity-national-information-services-inc-nysefis-2025-05-16\/',
      author: 'MarketBeat',
      image:
        'https:\/\/www.marketbeat.com\/logos\/fidelity-national-information-services-inc-logo-1200x675.png?v=20221021151040',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:05:57 +0000',
    },
    {
      id: 'd8217016-e580-4109-9de0-92f587c40a61',
      title: "Congo's coltan miners dig for world's tech \u2014 and struggle regardless of who is in charge",
      description:
        'RUBAYA, Congo (AP) \u2014 Nestled in the green hills of Masisi territory in Congo, the artisanal Rubaya mining site hums with the sound of generators, as hundreds of men labor by hand to extract coltan, a ...',
      url: 'https:\/\/www.marketbeat.com\/articles\/congos-coltan-miners-dig-for-worlds-tech--and-struggle-regardless-of-who-is-in-charge-2025-05-18\/',
      author: 'The Associated Press',
      image:
        'https:\/\/www.marketbeat.com\/images\/associated-press\/congo-coltan-mining-2025-05-18-1-primaryphoto.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 06:04:08 +0000',
    },
    {
      id: '1312819f-1d29-43c0-9cac-896192c6289d',
      title: 'Top 16 Django Questions for Intermediate to Advanced Developers',
      description:
        'Leapcell: The Best of Serverless Web Hosting\n\n16 Common Advanced Django Questions\n\nWhen moving from beginner to advanced Django development, developers often encounter complex and challenging issues. ...',
      url: 'https:\/\/dev.to\/leapcell\/top-16-django-questions-for-intermediate-to-advanced-developers-5ff4',
      author: 'Leapcell',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fsa6118dzqvsdeq8kmovw.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 06:02:26 +0000',
    },
    {
      id: '4d5f7366-4846-4df5-be63-f8ecccca4db4',
      title: 'China slaps anti-dumping duties on plastics from US, EU, Japan, Taiwan',
      description:
        "BEIJING (Reuters) -China on Sunday announced anti-dumping duties as high as 74.9% on imports of POM copolymers, a type of engineering plastic, from the United States, the European Union, Japan and Taiwan.  The commerce ministry's findings conclude a probe launched in May 2024, shortly after the U.S....",
      url: 'https:\/\/finance.yahoo.com\/news\/china-announces-anti-dumping-duties-060113340.html',
      author: 'Colleen Howe',
      image: 'https:\/\/media.zenfs.com\/en\/reuters.com\/563db809370f10d11a11225c7dd08688',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 06:01:13 +0000',
    },
    {
      id: 'bf100ff6-6b1c-465f-9ce5-2f9ab01b06be',
      title: 'The Footprint',
      description:
        'A woman is murdered in her home and the pivotal clue at the crime is a bloody footprint her killer left behind. "48 Hours" correspondent Erin Moriarty reports.',
      url: 'https:\/\/www.cbsnews.com\/video\/the-footprint\/',
      author: 'CBS News',
      image:
        'https:\/\/assets3.cbsnewsstatic.com\/hub\/i\/r\/2025\/05\/18\/df662e7c-0802-4750-a838-b22c8cb77348\/thumbnail\/1200x630\/515def2d47ab794369913cc762794224\/10pm-3764304-640x360.jpg?v=6df9366690ed146f169dd0670c453f91',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 06:01:02 +0000',
    },
    {
      id: '775d5277-4596-47f4-b496-2d60287ccd52',
      title: 'Bolivian \u2018cholitas\u2019 play high altitude golf \u2013 in pictures',
      description:
        'At La Paz Golf Club in Bolivia, indigenous cholitas play a round on their day off from looking after the grounds at one of the world\u2019s highest courses',
      url: 'https:\/\/www.theguardian.com\/world\/gallery\/2025\/may\/18\/bolivian-cholitas-play-high-altitude-golf-in-pictures',
      author: 'Photographs Michael Dunn',
      image:
        'https:\/\/i.guim.co.uk\/img\/media\/d76422cea25f6661335311283f6d1567dc2a0768\/153_0_2333_1867\/master\/2333.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&s=921b9d94f624d518ee2a308b35086ea4',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 06:00:27 +0000',
    },
    {
      id: '1681f6d9-a288-43e4-bef3-d440151bcea8',
      title: 'Pope Leo XIV to be formally installed on Sunday',
      description:
        'VATICAN CITY \u2014 The Catholic church is preparing to inaugurate its 267th pontiff Sunday in an incense-laced rite heralding the start of a novel papacy \u2014 one filled by a White Sox fan and former mission...',
      url: 'https:\/\/www.washingtonpost.com\/world\/2025\/05\/18\/pope-leo-inauguration-st-peters\/',
      author: 'Anthony Faiola',
      image:
        'https:\/\/www.washingtonpost.com\/wp-apps\/imrs.php?src=https:\/\/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com\/public\/DAWD3RMEFYBT4EEA5ML2U2HBGE_size-normalized.jpg&w=1440',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 06:00:23 +0000',
    },
    {
      id: 'caad3b61-7431-41e5-8353-a59f42749035',
      title:
        'AI deals that the US struck with the UAE and Saudi Arabia reinforce its AI leadership, but raise security concerns that the US can mitigate through safeguards (SemiAnalysis)',
      description: 'From SemiAnalysis. View the full context on Techmeme.',
      url: 'https:\/\/www.techmeme.com\/250518\/p7',
      author: 'techmeme',
      image:
        'https:\/\/i0.wp.com\/semianalysis.com\/wp-content\/uploads\/2025\/05\/ChatGPT-Image-May-15-2025-05_42_46-PM.png?fit=1200%2C800&ssl=1',
      language: 'en',
      category: ['technology'],
      published: '2025-05-18 06:00:01 +0000',
    },
    {
      id: 'cbf50ba0-bfcd-4ec0-94fe-7a5ca560e6cc',
      title: 'Interfor Co. (TSE:IFP) Given Consensus Rating of "Hold" by Analysts',
      description:
        'Shares of Interfor Co. (TSE:IFP - Get Free Report) have been given an average rating of "Hold" by the seven analysts that are presently  covering the stock, MarketBeat Ratings reports. Five research analysts have rated the stock with a hold recommendation, one  has given a buy recommendation and one',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/interfor-co-tseifp-given-consensus-rating-of-hold-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/interfor-corp-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:33 +0000',
    },
    {
      id: '9e8b2fb2-6e17-4e25-87c2-8f6ab374d57f',
      title: 'AutoCanada Inc. (TSE:ACQ) Given Average Rating of "Moderate Buy" by Brokerages',
      description:
        'AutoCanada Inc. (TSE:ACQ - Get Free Report) has been given an average recommendation of "Moderate Buy" by the nine research firms that are  covering the company, MarketBeat reports. One research analyst  has rated the stock with a sell rating, four have assigned  a hold rating, two have given a buy ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/autocanada-inc-tseacq-given-average-rating-of-moderate-buy-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/autocanada-inc-logo-1200x675.jpg?v=20240606110339',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:32 +0000',
    },
    {
      id: '793111df-2372-4eac-a7fb-a0560b2c71d8',
      title: 'Haleon plc (NYSE:HLN) Receives Consensus Rating of "Moderate Buy" from Brokerages',
      description:
        'Shares of Haleon plc (NYSE:HLN - Get Free Report) have been given a consensus rating of "Moderate Buy" by the nine ratings firms that are  covering the stock, MarketBeat.com reports. Five analysts have rated the stock with a hold rating, three have given a buy rating and one  has given a strong buy ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/haleon-plc-nysehln-receives-consensus-rating-of-moderate-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/haleon-plc-logo-1200x675.png?v=20220726113645',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:31 +0000',
    },
    {
      id: '457687fc-ee0c-4857-86a9-e678074214d7',
      title: 'Verona Pharma plc (NASDAQ:VRNA) Receives Consensus Rating of "Buy" from Analysts',
      description:
        'Shares of Verona Pharma plc (NASDAQ:VRNA - Get Free Report) have been assigned a consensus rating of "Buy" from the nine research firms that are presently  covering the stock, Marketbeat Ratings reports. Eight research analysts have rated the stock with a buy recommendation and one  has assigned  a ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/verona-pharma-plc-nasdaqvrna-receives-consensus-rating-of-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/verona-pharma-plc-logo-1200x675.png?v=20221206110702',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:30 +0000',
    },
    {
      id: '1849a659-4dec-44fe-9898-2ddd56249892',
      title: 'Astrana Health, Inc. (NASDAQ:ASTH) Given Average Rating of "Moderate Buy" by Analysts',
      description:
        'Shares of Astrana Health, Inc. (NASDAQ:ASTH - Get Free Report) have earned a consensus recommendation of "Moderate Buy" from the ten ratings firms that are currently  covering the firm, MarketBeat Ratings reports. Three equities research analysts have rated the stock with a hold recommendation, six ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/astrana-health-inc-nasdaqasth-given-average-rating-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/astrana-health-logo-1200x675.jpg?v=20240306114940',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:29 +0000',
    },
    {
      id: 'f7c09b25-4ca4-458a-9d1d-38a2e5f040c4',
      title: 'Ligand Pharmaceuticals Incorporated (NASDAQ:LGND) Given Consensus Recommendation of "Buy" by Brokerages',
      description:
        'Shares of Ligand Pharmaceuticals Incorporated (NASDAQ:LGND - Get Free Report) have earned an average rating of "Buy" from the seven brokerages that are currently  covering the company, Marketbeat.com reports. Seven investment analysts have rated the stock with a buy recommendation.  The average twel',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/ligand-pharmaceuticals-incorporated-nasdaqlgnd-given-consensus-recommendation-of-buy-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image:
        'https:\/\/www.marketbeat.com\/logos\/ligand-pharmaceuticals-incorporated-logo-1200x675.jpg?v=20240503131612',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:28 +0000',
    },
    {
      id: '2ef28b54-6a3d-4729-b87c-0243ad90084d',
      title: 'B&M European Value Retail S.A. (LON:BME) Given Average Recommendation of "Moderate Buy" by Analysts',
      description:
        'Shares of B&M European Value Retail S.A. (LON:BME - Get Free Report) have earned an average recommendation of "Moderate Buy" from the seventeen ratings firms that are currently  covering the stock, MarketBeat Ratings reports. Two equities research analysts have rated the stock with a sell recommenda',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/bm-european-value-retail-sa-lonbme-given-average-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/bm-european-value-retail-sa-logo-1200x675.png?v=20221117103309',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:27 +0000',
    },
    {
      id: 'a0e5826c-c232-4608-9ac1-5003d77c810f',
      title: 'The Sage Group plc (LON:SGE) Given Average Recommendation of "Hold" by Brokerages',
      description:
        'The Sage Group plc (LON:SGE - Get Free Report) has been assigned an average rating of "Hold" from the seven brokerages that are presently  covering the stock, Marketbeat.com reports. Two research analysts have rated the stock with a sell recommendation, two have issued  a hold recommendation and thr',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/the-sage-group-plc-lonsge-given-average-recommendation-of-hold-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/the-sage-group-plc-logo-1200x675.png?v=20221109170444',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:26 +0000',
    },
    {
      id: '76f0ea16-4718-419f-ab2d-c25d6264bef2',
      title: 'Carpenter Technology Co. (NYSE:CRS) Given Consensus Rating of "Moderate Buy" by Analysts',
      description:
        'Shares of Carpenter Technology Co. (NYSE:CRS - Get Free Report) have been given a consensus recommendation of "Moderate Buy" by the six brokerages that are presently  covering the stock, Marketbeat reports. One research analyst  has rated the stock with a hold rating and five have assigned  a buy ra',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/carpenter-technology-co-nysecrs-given-consensus-rating-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/carpenter-technology-co-logo-1200x675.png?v=20200526133948',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:25 +0000',
    },
    {
      id: 'e77f73a0-0f10-42ae-b6ad-1a74c22d357f',
      title: 'The Gap, Inc. (NYSE:GAP) Receives Consensus Recommendation of "Moderate Buy" from Analysts',
      description:
        'Shares of The Gap, Inc. (NYSE:GAP - Get Free Report) have earned a consensus recommendation of "Moderate Buy" from the fourteen analysts that are  covering the company, MarketBeat reports. Six research analysts have rated the stock with a hold rating and eight have given a buy rating to  the company',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/the-gap-inc-nysegap-receives-consensus-recommendation-of-moderate-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/the-gap-inc-logo-1200x675.png?v=20240923141103',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:23 +0000',
    },
    {
      id: '6e99cc28-871a-4fa0-a8f4-7e220c892486',
      title: 'Edgewise Therapeutics, Inc. (NASDAQ:EWTX) Given Consensus Rating of "Moderate Buy" by Analysts',
      description:
        'Edgewise Therapeutics, Inc. (NASDAQ:EWTX - Get Free Report) has been given an average rating of "Moderate Buy" by the nine analysts that are  covering the firm, Marketbeat Ratings reports. Two equities research analysts have rated the stock with a hold recommendation and seven have assigned  a buy r',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/edgewise-therapeutics-inc-nasdaqewtx-given-consensus-rating-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/edgewise-therapeutics-inc-logo-1200x675.png?v=20221209142457',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:20 +0000',
    },
    {
      id: '7bbc8358-3506-4530-8285-6fa2d8412f8c',
      title: '3D Systems Co. (NYSE:DDD) Receives Average Recommendation of "Hold" from Analysts',
      description:
        '3D Systems Co. (NYSE:DDD - Get Free Report) has earned an average rating of "Hold" from the five brokerages that are currently  covering the company, MarketBeat reports. Three investment analysts have rated the stock with a hold recommendation and two have issued  a buy recommendation on  the compan',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/3d-systems-co-nyseddd-receives-average-recommendation-of-hold-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/3d-systems-logo-1200x675.jpg',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:20 +0000',
    },
    {
      id: 'bdb38341-d187-49d1-b3ba-9d9520a1ce7f',
      title: 'Four Corners Property Trust, Inc. (NYSE:FCPT) Given Consensus Rating of "Moderate Buy" by Brokerages',
      description:
        'Four Corners Property Trust, Inc. (NYSE:FCPT - Get Free Report) has been given a consensus recommendation of "Moderate Buy" by the six ratings firms that are currently  covering the firm, MarketBeat Ratings reports. Three analysts have rated the stock with a hold recommendation and three have assign',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/four-corners-property-trust-inc-nysefcpt-given-consensus-rating-of-moderate-buy-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/four-corners-property-trust-inc-logo-1200x675.png?v=20240503121255',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:19 +0000',
    },
    {
      id: 'ce1329e2-76c9-4f0e-9581-ae88a92d95dc',
      title: 'Centerspace (NYSE:CSR) Given Average Rating of "Moderate Buy" by Brokerages',
      description:
        'Shares of Centerspace (NYSE:CSR - Get Free Report) have been given a consensus recommendation of "Moderate Buy" by the nine research firms that are presently  covering the company, MarketBeat Ratings reports. Four equities research analysts have rated the stock with a hold rating, four have assigned',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/centerspace-nysecsr-given-average-rating-of-moderate-buy-by-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/centerspace-logo-1200x675.png?v=20221206112415',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:19 +0000',
    },
    {
      id: '20b9b1dc-5460-461d-997f-ffb09dd950e7',
      title: 'Air France-KLM SA (OTCMKTS:AFLYY) Given Consensus Rating of "Hold" by Analysts',
      description:
        'Air France-KLM SA (OTCMKTS:AFLYY - Get Free Report) has earned an average recommendation of "Hold" from the eight brokerages that are presently  covering the stock, MarketBeat Ratings reports. Two analysts have rated the stock with a sell recommendation, five have assigned  a hold recommendation and',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/air-france-klm-sa-otcmktsaflyy-given-consensus-rating-of-hold-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/air-france-klm-sa-logo-1200x675.jpg?v=20240606081330',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:18 +0000',
    },
    {
      id: '487a3166-26d9-4add-bf0d-0f52f4b58214',
      title: 'Ladder Capital Corp (NYSE:LADR) Receives Average Rating of "Buy" from Analysts',
      description:
        'Shares of Ladder Capital Corp (NYSE:LADR - Get Free Report) have been given a consensus rating of "Buy" by the six research firms that are  covering the firm, MarketBeat reports. One research analyst  has rated the stock with a hold recommendation, four have given a buy recommendation and one  has g',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/ladder-capital-corp-nyseladr-receives-average-rating-of-buy-from-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/ladder-capital-corp-logo-1200x675.png?v=20240426160041',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:17 +0000',
    },
    {
      id: 'c0f0a537-1bcd-41b4-bebc-11261d93249d',
      title: 'IAMGOLD Co. (TSE:IMG) Receives Consensus Rating of "Buy" from Brokerages',
      description:
        'Shares of IAMGOLD Co. (TSE:IMG - Get Free Report) (NYSE:IAG) have earned a consensus rating of "Buy" from the seven brokerages that are  covering the company, Marketbeat reports. Two investment analysts have rated the stock with a hold rating, one  has assigned  a buy rating and four have given a st',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/iamgold-co-tseimg-receives-consensus-rating-of-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/iamgold-co-logo-1200x675.png?v=20240605074343',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:15 +0000',
    },
    {
      id: '69137004-0675-40c2-95d0-2a2d48f3b37c',
      title: 'Intuitive Machines, Inc. (NASDAQ:LUNR) Receives Consensus Rating of "Moderate Buy" from Brokerages',
      description:
        'Shares of Intuitive Machines, Inc. (NASDAQ:LUNR - Get Free Report) have received an average rating of "Moderate Buy" from the eight ratings firms that are  covering the firm, MarketBeat Ratings reports. One investment analyst  has rated the stock with a sell recommendation, one  has assigned  a hold',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/intuitive-machines-inc-nasdaqlunr-receives-consensus-rating-of-moderate-buy-from-brokerages-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/intuitive-machines-inc-logo-1200x675.jpg?v=20230216064036',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:13 +0000',
    },
    {
      id: 'fc587b27-0de6-4ea6-a911-0228e16b1a40',
      title: 'Vertical Aerospace Ltd. (NYSE:EVTL) Given Consensus Recommendation of "Moderate Buy" by Analysts',
      description:
        'Vertical Aerospace Ltd. (NYSE:EVTL - Get Free Report) has received an average rating of "Moderate Buy" from the six ratings firms that are presently  covering the stock, Marketbeat reports. One analyst  has rated the stock with a sell recommendation, one  has given a hold recommendation and four hav',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/vertical-aerospace-ltd-nyseevtl-given-consensus-recommendation-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/vertical-aerospace-ltd-logo-1200x675.png?v=20240529093538',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:11 +0000',
    },
    {
      id: 'db301c69-7e13-4db7-836e-7d2808e6933a',
      title: 'Imperial Oil Limited (NYSEAMERICAN:IMO) Given Consensus Rating of "Hold" by Analysts',
      description:
        'Imperial Oil Limited (NYSEAMERICAN:IMO - Get Free Report) (TSE:IMO) has received a consensus rating of "Hold" from the six research firms that are  covering the company, MarketBeat Ratings reports. Two analysts have rated the stock with a sell rating, two have issued  a hold rating and two have assi',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/imperial-oil-limited-nyseamericanimo-given-consensus-rating-of-hold-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/imperial-oil-limited-logo-1200x675.png?v=20221101143043',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:10 +0000',
    },
    {
      id: 'a1201907-379f-4452-9052-104eb6115297',
      title: 'Sable Offshore Corp. (NYSE:SOC) Given Average Rating of "Moderate Buy" by Analysts',
      description:
        'Shares of Sable Offshore Corp. (NYSE:SOC - Get Free Report) have been given a consensus rating of "Moderate Buy" by the seven brokerages that are currently  covering the company, Marketbeat.com reports. One equities research analyst  has rated the stock with a sell recommendation, five have given a ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/sable-offshore-corp-nysesoc-given-average-rating-of-moderate-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/sable-offshore-corp-logo-1200x675.png?v=20240521134955',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:09 +0000',
    },
    {
      id: 'e7066a3e-e3ee-431e-84a9-294650296445',
      title: 'Nkarta, Inc. (NASDAQ:NKTX) Given Consensus Rating of "Buy" by Analysts',
      description:
        'Nkarta, Inc. (NASDAQ:NKTX - Get Free Report) has received an average rating of "Buy" from the eight analysts that are presently  covering the stock, Marketbeat reports. One analyst  has rated the stock with a hold rating, five have given a buy rating and two have issued  a strong buy rating on  the ',
      url: 'https:\/\/www.marketbeat.com\/instant-alerts\/nkarta-inc-nasdaqnktx-given-consensus-rating-of-buy-by-analysts-2025-05-16\/',
      author: 'MarketBeat',
      image: 'https:\/\/www.marketbeat.com\/logos\/nkarta-inc-logo-1200x675.png?v=20210510073007',
      language: 'en',
      category: ['finance'],
      published: '2025-05-18 05:57:07 +0000',
    },
    {
      id: '9ae321e5-cbf4-4cbf-9719-173f79a39efc',
      title: "Scarlett Johansson Gets Revenge on Michael Che for Crude 'SNL' Joke",
      description:
        "Scarlett Johansson finally got her revenge against Michael Che for his crude 'Weekend Update' Joke Swap punchline in Saturday Night Live's season 50 \u2026",
      url: 'https:\/\/www.miamiherald.com\/entertainment\/us-weekly\/article306668751.html',
      author: 'Justin Harp',
      image: 'None',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 05:57:00 +0000',
    },
    {
      id: '7b327def-f3f7-4f25-96e1-b49faa4e4117',
      title: '13th World opened Palmer fright park for "Halfway to Halloween"',
      description:
        "PALMER, Mass. (WWLP) - It's only May, but we're already halfway to Halloween. 13th World Fright Park made its second appearance in Palmer, bringing a chilling experience for all who dared to enter.\n\"I just loved it last time I came, and I really wanted to come back, especially since it's not Hallowe...",
      url: 'https:\/\/www.wwlp.com\/news\/local-news\/hampden-county\/13th-world-opened-palmer-fright-park-for-halfway-to-halloween\/',
      author: 'Kayleigh Thomas',
      image: 'None',
      language: 'en',
      category: ['regional', 'springfield', 'massachusetts'],
      published: '2025-05-18 05:56:10 +0000',
    },
    {
      id: 'da9cf5ac-4ba1-4b71-a086-2098408e8f1b',
      title: 'As the only child of immigrants, I know the discomfort of moving into the middle class',
      description:
        'I\u2019ll never forget the feeling of awe \u2013 and acute discomfort \u2013 the first time I walked into The Age\u2019s newsroom.\n\nI was 22 and, for as long as I could remember, had wanted to work with the big (news) wi...',
      url: 'https:\/\/www.theage.com.au\/lifestyle\/life-and-relationships\/as-the-only-child-of-immigrants-i-know-the-discomfort-of-moving-into-the-middle-class-20250227-p5lfod.html?ref=rss',
      author: 'Caroline Zielinski',
      image:
        'https:\/\/static.ffx.io\/images\/$zoom_0.2341%2C$multiply_0.7554%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_0\/t_crop_custom\/q_86%2Cf_auto\/t_theage_opinion_no_age_social_wm\/bcce2e50bdb3524b714c1a919e55647239f9ff3c',
      language: 'en',
      category: ['lifestyle'],
      published: '2025-05-18 05:55:25 +0000',
    },
    {
      id: '44ed1883-a22c-4969-a017-aafa9b58cedd',
      title: 'Avoiding the God Object - A Guide to Better Software Design',
      description:
        "In software design, a God Object (or God Class) is a class that knows too much or does too much. It's a common code smell that tends to emerge as a system evolves without proper boundaries.\n\n \n \n What Is a God Object?\n\nA God Object violates the Single Responsibility Principle by taking on multiple r...",
      url: 'https:\/\/dev.to\/bharathvaj_ganesan\/avoiding-the-god-object-a-guide-to-better-software-design-3l7p',
      author: 'Bharathvaj',
      image: 'None',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 05:55:04 +0000',
    },
    {
      id: '57750a35-50a4-4ab7-87ca-78031c8b2c59',
      title: "Hundreds of homes up for sale as residents flee coastal town: 'All the destruction'",
      description: "It's a risky proposition.",
      url: 'https:\/\/www.yahoo.com\/news\/hundreds-homes-sale-residents-flee-055500733.html',
      author: 'Mike Taylor',
      image:
        'https:\/\/s.yimg.com\/ny\/api\/res\/1.2\/Ob3hnkqKM_E.KuMTEQYeHQ--\/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-\/https:\/\/media.zenfs.com\/en\/the_cool_down_737\/772b729a9ce83be2d97c5e18f666a7ba',
      language: 'en',
      category: ['general'],
      published: '2025-05-18 05:55:00 +0000',
    },
    {
      id: '9747b676-3db1-4a50-b2fe-e34223da8272',
      title: 'India Cine Hub Drives Film Production Growth, International Collaboration',
      description:
        'India Cine Hub has enhanced international film collaborations, with substantial results to show for its efforts. ',
      url: 'https:\/\/variety.com\/2025\/film\/news\/india-cine-hub-film-production-growth-international-collaboration-1236379158\/',
      author: 'Naman Ramachandran',
      image: 'https:\/\/variety.com\/wp-content\/uploads\/2025\/04\/Luccas-World.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 05:55:00 +0000',
    },
    {
      id: 'facf22fb-3d68-48bb-bfb8-b01efcb4da6a',
      title: "Right on 'cue: Barbecue winners take home trophies, cash",
      description:
        'Jody Callahan\n\nJody Callahan graduated with degrees in journalism and economics from what is now known as the University of Memphis. He has covered news in Memphis for more than 25 years....',
      url: 'https:\/\/dailymemphian.com\/article\/51960',
      author: 'Jody Callahan',
      image: 'https:\/\/thememphian.blob.core.windows.net\/sized\/162414_1200',
      language: 'en',
      category: ['regional', 'tennessee', 'memphis'],
      published: '2025-05-18 05:53:22 +0000',
    },
    {
      id: 'e290f0e5-cefa-4a7e-b336-10afd7a94f0d',
      title: "\u2b1c\ufe0f AI told me to move to Estonia, so I'm eating bread now",
      description:
        'This isn\u2019t a record of migration. It\u2019s just me, chewing on bread.\n\n\ud83d\ude0e When I asked GPT \u201cWhere would I fit in?\u201d\n\nI was born and raised in Japan.\n\nThe only language I speak is Japanese.\n\nStill, sometimes...',
      url: 'https:\/\/dev.to\/uka_aidev\/ai-told-me-to-move-to-estonia-so-im-eating-bread-now-2e71',
      author: 'UKA',
      image:
        'https:\/\/media2.dev.to\/dynamic\/image\/width=1000,height=500,fit=cover,gravity=auto,format=auto\/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F1mvlyopzel39zo22kth9.png',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 05:51:22 +0000',
    },
    {
      id: '75774462-1319-4259-830d-8cb702d344a0',
      title: 'Woman arrested after leading officers on 100-mile pursuit through Southern California',
      description:
        'A woman was arrested after leading officers on a 100-mile pursuit across multiple Southern California counties.\nOn Saturday morning, Simi Valley police responded to reports that a woman was refusing to leave the Ronald Reagan Presidential Library premises.\nWhen an officer arrived, they spotted the s...',
      url: 'https:\/\/ktla.com\/news\/local-news\/woman-arrested-after-leading-officers-on-100-mile-pursuit-through-southern-california\/',
      author: 'Vivian Chow',
      image: 'None',
      language: 'en',
      category: ['regional', 'california'],
      published: '2025-05-18 05:51:07 +0000',
    },
    {
      id: 'abb64bed-4b04-4174-bac2-39afae9f25a1',
      title:
        'Kirill Serebrennikov on Cannes Premiere \u2018The Disappearance of Josef Mengele,\u2019 a Portrait of Fugitive Nazi Doctor',
      description:
        'The Russian filmmaker and provocateur returns to the Cannes Film Festival with a gripping portrait of the final years of the fugitive Nazi doctor.',
      url: 'https:\/\/variety.com\/2025\/film\/global\/kirill-serebrennikov-cannes-premiere-the-disappearance-of-josef-mengele-1236401466\/',
      author: 'Christopher Vourlias',
      image:
        'https:\/\/variety.com\/wp-content\/uploads\/2025\/05\/MixCollage-17-May-2025-08-18-AM-9199.jpg?w=1000&h=563&crop=1',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-18 05:51:00 +0000',
    },
    {
      id: '3016a0cd-dcdb-4a53-8e52-2b5ad1cb1a9b',
      title: 'Study Guide for Working with Operating Systems (DOS, Windows, Linux) - BCA Semester 2 - MCU Bhopal',
      description:
        'This guide is designed to help BCA Semester 2 students at MCU Bhopal prepare for the Working with Operating Systems (DOS, Windows, Linux) exam. The guide covers the important topics from the syllabus, key commands, and sample questions explained in simple terms for beginners.\n\n \n \n Unit 1: Fundament...',
      url: 'https:\/\/dev.to\/abhishek_gupta_f080622fe3\/study-guide-for-working-with-operating-systems-dos-windows-linux-bca-semester-2-mcu-bhopal-29e3',
      author: 'Abhishek Gupta',
      image: 'None',
      language: 'en',
      category: ['programming'],
      published: '2025-05-18 05:50:07 +0000',
    },
    {
      id: '4455fde7-218b-4d5c-bccd-6efed01cdda0',
      title: "Video: Mexican Navy Ship Hits New York's Brooklyn Bridge, 2 Dead",
      description:
        'At least two people died and 19 others were injured after a Mexican Navy training ship crashed into the Brooklyn Bridge in New York on Saturday.',
      url: 'https:\/\/www.ndtv.com\/world-news\/brooklyn-bridge-video-mexican-navy-ship-hits-new-york-bridge-people-seen-hanging-on-to-masts-8442539',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/13l8cccc_brooklyn-bridge_625x300_18_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-18 05:49:16 +0000',
    },
    {
      id: '9b0c5829-6285-43b5-ab92-848e70011645',
      title: "High school volleyball: Southern Section boys' championship results",
      description: "CIF Southern Section boys' volleyball division championship results....",
      url: 'https:\/\/www.latimes.com\/sports\/highschool\/story\/2025-05-17\/high-school-volleyball-southern-section-boys-championship-results',
      author: 'Los Angeles Times staff',
      image:
        'https:\/\/ca-times.brightspotcdn.com\/dims4\/default\/4566d6a\/2147483647\/strip\/true\/crop\/4256x2394+0+219\/resize\/1200x675!\/quality\/75\/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F3e%2Fe1%2Fffffdbdc4ae9aacdbcf5402230f7%2Fhttps-delivery.gettyimages.com%2Fdownloads%2F1136460183.jpg',
      language: 'en',
      category: ['sports'],
      published: '2025-05-18 05:47:11 +0000',
    },
    {
      id: '3a7d661c-a702-41d2-82db-924a4a4c6fdf',
      title: 'Vandenberg Space Force Base to test launch unarmed U.S. military nuclear missile',
      description:
        'Vandenberg Space Force Base announced the U.S. military will be test-launching an unarmed nuclear missile from northern Santa Barbara County early Wednesday morning.\nSouthern California residents awake between the scheduled launch hours of 12:01 a.m. and 5:01 a.m. on May 21 might be able to hear or ...',
      url: 'https:\/\/ktla.com\/news\/local-news\/vandenberg-space-force-base-to-test-launch-unarmed-u-s-military-nuclear-missile\/',
      author: 'Lily Dallow',
      image: 'None',
      language: 'en',
      category: ['regional', 'california'],
      published: '2025-05-18 05:46:40 +0000',
    },
    {
      id: 'bd20a2d5-d63d-4d0b-9a1a-1cb31c49ebee',
      title: 'Han Ji Min Sheds Tears In Front Of An Angry Son Suk Ku In "Heavenly Ever After" | Soompi',
      description:
        'Will Han Ji Min finally regain her memories on the next episode of \u201cHeavenly Ever After\u201d? JTBC\u2019s \u201cHeavenly Ever After\u201d is a transcendent romance drama',
      url: 'https:\/\/www.soompi.com\/article\/1745602wpp\/han-ji-min-sheds-tears-in-front-of-an-angry-son-suk-ku-in-heavenly-ever-after',
      author: 'eclipse01',
      image: 'https:\/\/0.soompi.io\/wp-content\/uploads\/2025\/05\/17230117\/Han-Ji-Min-Son-Suk-Ku-1.jpg',
      language: 'da',
      category: ['entertainment', 'music', 'fashion', 'kpop'],
      published: '2025-05-18 05:46:09 +0000',
    },
    {
      id: '3c72d30c-242e-403e-a08a-7ef747022f5f',
      title: 'Enterprise Products Partners: Shares Are Too Cheap',
      description: '',
      url: 'https:\/\/seekingalpha.com\/article\/4787879-enterprise-products-partners-shares-too-cheap?source=feed_all_articles',
      author: 'SeekingAlpha.com',
      image: 'None',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-18 05:45:19 +0000',
    },
    {
      id: '39334b23-ce60-4143-a34b-85d993284bdc',
      title:
        "Nvidia's deals with Saudi Arabia's Humain and the UAE's G42 highlight its strategy to diversify beyond Big Tech customers by partnering with nation states (Financial Times)",
      description: 'From Financial Times. View the full context on Techmeme.',
      url: 'https:\/\/www.techmeme.com\/250518\/p6',
      author: 'techmeme',
      image:
        'https:\/\/www.ft.com\/__origami\/service\/image\/v2\/images\/raw\/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8d38d397-d842-4aa5-8b3a-fc2300aaf091.jpg?source=next-article&fit=scale-down&quality=highest&width=700&dpr=1',
      language: 'en',
      category: ['technology'],
      published: '2025-05-18 05:45:01 +0000',
    },
  ],
  page: 1,
};

const dataLatestNews = {
  status: 'ok',
  news: [
    {
      id: '16df3498-3e21-467d-a1b7-48a7f3647c40',
      title: 'Kettering Health hit by system-wide outage after ransomware attack',
      description:
        'Kettering Health, a healthcare network that operates 14 medical centers in Ohio, was forced to cancel inpatient and outpatient procedures following a cyberattack that caused a system-wide technology outage.',
      url: 'https:\/\/www.bleepingcomputer.com\/news\/security\/kettering-health-hit-by-system-wide-outage-after-ransomware-attack\/',
      author: 'Sergiu Gatlan',
      image: 'https:\/\/www.bleepstatic.com\/content\/hl-images\/2025\/05\/21\/Kettering-Health.jpg',
      language: 'en',
      category: ['programming'],
      published: '2025-05-21 11:45:08 +0000',
    },
    {
      id: '1b8a3fd4-0e3b-4a72-802e-30ac3576c057',
      title: 'Did Soccer Originate in Scotland? New Claim Draws Jeers in England.',
      description:
        'The discovery of a 17th-century "foot-ball" pitch in Scotland would relocate the birthplace of the modern game.',
      url: 'https:\/\/www.nytimes.com\/2025\/05\/21\/science\/archaeology-soccer-england-scotland.html',
      author: 'Franz Lidz',
      image: 'None',
      language: 'en',
      category: ['world'],
      published: '2025-05-21 11:37:56 +0000',
    },
    {
      id: 'a5c27da7-b36b-430f-a425-d07a52fc30cc',
      title: 'GOP Budget Would Finally Defund Planned Parenthood',
      description:
        'Every single dollar that flows to Planned Parenthood enables the abortion giant to expand its abortion empire.',
      url: 'https:\/\/thefederalist.com\/2025\/05\/21\/gop-budget-would-finally-defund-democrat-mega-donor-planned-parenthood\/',
      author: 'Zachary Mettler',
      image: 'https:\/\/thefederalist.com\/wp-content\/uploads\/2025\/05\/ppsign.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:37:25 +0000',
    },
    {
      id: '3ef7fb76-b4e1-4739-bbc9-614678922dba',
      title: 'Greek opposition slams Athens for opposing EU decision to review trade ties with Israel',
      description:
        "\u2018Government is exposing our country internationally with its stance,\u2019 says main opposition party on Athens standing against EU move taken in light of Gaza 'catastrophe' - Anadolu Ajans\u0131",
      url: 'https:\/\/www.aa.com.tr\/en\/europe\/greek-opposition-slams-athens-for-opposing-eu-decision-to-review-trade-ties-with-israel\/3575154',
      author: 'https:\/\/twitter.com\/anadoluagency',
      image:
        'https:\/\/cdnuploads.aa.com.tr\/uploads\/Contents\/2025\/05\/21\/thumbs_b_c_09f7192bc9f83c3ef67fd2493360b317.jpg?v=143712',
      language: 'en',
      category: ['regional', 'europe'],
      published: '2025-05-21 11:36:59 +0000',
    },
    {
      id: 'eecafb41-cc65-4437-afec-cbb934746d5e',
      title: "Here's Everything You Missed From Trump's Middle East Trip",
      description:
        "Trump's tradition-breaking Middle East visit shows he sees the Gulf Arab States as pivotal in changing the current dynamic.",
      url: 'https:\/\/thefederalist.com\/2025\/05\/21\/heres-everything-you-missed-from-trumps-historic-trip-to-the-middle-east\/',
      author: 'Jim Hanson',
      image:
        'https:\/\/thefederalist.com\/wp-content\/uploads\/2025\/05\/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-New-Twitter-Card-Template-3.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:36:59 +0000',
    },
    {
      id: 'ab497537-d43a-4b3e-ab90-120275787b0a',
      title: 'Congress Must Grill Biden About Whether He Was Actually POTUS',
      description:
        'The American people have a right to know who was actually in charge of the executive branch, with all its awesome power, for four years.',
      url: 'https:\/\/thefederalist.com\/2025\/05\/21\/congress-needs-to-grill-joe-biden-about-whether-he-was-actually-president\/',
      author: 'Brad Schaeffer',
      image:
        'https:\/\/thefederalist.com\/wp-content\/uploads\/2025\/05\/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-New-Twitter-Card-Template-21.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:35:43 +0000',
    },
    {
      id: '2b508e6c-7d61-459e-a5c5-a3e782fb3be4',
      title: 'TCS gets Rs 2,903 crore BSNL order for 4G rollout at 18,685 sites',
      description:
        'BSNL places Rs 2,903 crore APO with TCS for planning and maintenance of 4G network; Tejas Networks to supply RAN equipment worth Rs 1,525 crore',
      url: 'https:\/\/www.business-standard.com\/industry\/news\/tcs-gets-rs-2903-cr-4g-network-order-from-bsnl-across-18685-sites-125052101178_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-21 11:35:38 +0000',
    },
    {
      id: '93c2125d-079c-45ee-9541-13d413f51415',
      title: 'West Point Trades Real Reform For Illusory Paper Compliance',
      description:
        'If the academy cannot produce officers loyal to the Constitution, its leadership is not just failing, it is compromising national security.',
      url: 'https:\/\/thefederalist.com\/2025\/05\/21\/west-point-trades-real-reform-for-illusory-paper-compliance\/',
      author: 'Will Thibeau',
      image: 'https:\/\/thefederalist.com\/wp-content\/uploads\/2025\/05\/meninuniform.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:35:36 +0000',
    },
    {
      id: 'b8335217-aaa8-458e-9cc9-74c50f37d7dc',
      title: "Biden's Cancer Diagnosis Raises Serious Questions About Who Made These 5 Decisions",
      description:
        "Biden's cancer diagnosis calls into question whether he was really the one behind some of the most important decisions of his presidency.",
      url: 'https:\/\/thefederalist.com\/2025\/05\/21\/bidens-cancer-diagnosis-raises-serious-questions-about-who-made-these-5-decisions\/',
      author: 'Brianna Lyman',
      image:
        'https:\/\/thefederalist.com\/wp-content\/uploads\/2025\/05\/Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-Copy-of-New-Twitter-Card-Template-9.jpg',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:34:24 +0000',
    },
    {
      id: '416771d6-ce75-4824-a3db-9c3b444c4c1b',
      title: "Dems Said 'Democracy Is On The Ballot' While Pushing Biden",
      description:
        'Democrats told the American people to vote for Joe Biden, knowing full well he was incapable of running the country.',
      url: 'https:\/\/thefederalist.com\/2025\/05\/21\/democrats-told-you-democracy-is-on-the-ballot-and-wanted-you-to-vote-for-someone-who-wasnt-even-in-charge\/',
      author: 'Breccan F. Thies',
      image: 'https:\/\/thefederalist.com\/wp-content\/uploads\/2025\/05\/Copy-of-New-Twitter-Card-Template-70.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:31:25 +0000',
    },
    {
      id: '683bc313-7cc9-4466-b9c6-3aaba421d3a6',
      title: 'Why Trump\u2019s biggest global allies aren\u2019t very happy with him',
      description:
        "Benjamin Netanyahu, Israel's prime minister, right, and Viktor Orb\u00e1n, Hungary's prime minister, at the Buda Castle in Budapest, Hungary, on April 3. | Akos Stiller\/Bloomberg via Getty Images\n\nIs President Donald Trump leading a vanguard of right-wing populist world leaders, working together to lay w...",
      url: 'https:\/\/www.vox.com\/world-politics\/413676\/trump-allies-orban-netanyahu-modi',
      author: 'Joshua Keating',
      image:
        'https:\/\/platform.vox.com\/wp-content\/uploads\/sites\/2\/2025\/05\/gettyimages-2207654865.jpg?quality=90&strip=all&crop=0%2C10.752607989199%2C100%2C78.494784021602&w=1200',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:30:00 +0000',
    },
    {
      id: 'baa9da5b-8180-4ca3-b137-781fdef9755e',
      title: '60% resolution plans under IBC approved in last three years: IBBI data',
      description:
        'IBBI data reveals 30,000 cases with defaults of Rs 13.8 trillion settled pre-admission under IBC till December 2024; creditor recovery at 32.8 per cent by March 2025',
      url: 'https:\/\/www.business-standard.com\/industry\/news\/ibc-resolutions-rise-sharply-60-cleared-in-last-three-years-ibbi-125052101171_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-21 11:28:26 +0000',
    },
    {
      id: '4ec47b1a-eaa4-46a5-b176-471ef86b24a3',
      title: '"That Calling Is There": Donald Trump Jr On Running For President',
      description:
        'US President Donald Trump\'s eldest son Donald Trump Jr said in Qatar on Wednesday that he could maybe run for president one day, adding "that calling is there."',
      url: 'https:\/\/www.ndtv.com\/world-news\/that-calling-is-there-donald-trump-jr-on-running-for-us-president-8470360',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2023-11\/tf1ebcqg_donald-trump-jr_625x300_13_November_23.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-21 11:25:19 +0000',
    },
    {
      id: 'd8198718-3921-4086-b5a2-2b73076f6b20',
      title: 'Deepening Rift Between Muhammad Yunus, Bangladesh Army Chief?',
      description:
        'A round of meetings in Bangladesh has once again led major differences between Bangladesh Army Chief General Waker-Uz-Zaman and Chief Adviser of the interim government Muhammad Yunus, per reports.',
      url: 'https:\/\/www.ndtv.com\/world-news\/deepening-rift-between-muhammad-yunus-bangladesh-army-chief-8470313',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-05\/esqfhimg_bangaldesh_625x300_21_May_25.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-21 11:23:39 +0000',
    },
    {
      id: 'c2c405ba-b980-44ba-b183-74af8b6c5a1a',
      title: 'DP World to invest $2.5bn in 2025 to expand global logistics footprint',
      description: '\u2026 the Port of Posorja in Ecuador, extending the dock to 700 \u2026',
      url: 'https:\/\/world.einnews.com\/article\/814691102\/Z5DEReL1ItoxSspC?ref=rss',
      author: 'einnews',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-21 11:23:11 +0000',
    },
    {
      id: '213816cf-0dbf-4b40-8a41-c44f822518ba',
      title: 'Tottenham and Man United fans clash ahead of Europa League final',
      description:
        'Clashes between fans of Tottenham and Manchester United have been reported ahead of the Europa League final in Spain on Wednesday. Confrontations took place in the center of Bilbao and in some nearby cities where many of the supporters were staying to avoid overpriced accommodation in the host city....',
      url: 'https:\/\/japantoday.com\/category\/sports\/tottenham-and-man-united-fans-clash-ahead-of-europa-league-final',
      author: 'AP',
      image:
        'https:\/\/media.japantoday.com\/img\/store\/30\/dd\/08f9d3855fad2aaf795c5a431a42a605d4c5\/download\/_w1700.jpeg',
      language: 'en',
      category: ['general'],
      published: '2025-05-21 11:22:59 +0000',
    },
    {
      id: 'f6d2f330-2681-49a4-90db-2ebb40fe40f4',
      title: "Trump's 'Golden Dome' May Resume Arms Control Contacts: Kremlin",
      description:
        'The Kremlin indicated on Wednesday that President Donald Trump\'s "Golden Dome" missile shield plans could force the resumption in the foreseeable future of contacts between Moscow and Washington about nuclear arms control.',
      url: 'https:\/\/www.ndtv.com\/world-news\/us-president-donald-trump-golden-dome-may-resume-arms-control-contacts-kremlin-8470793',
      author: 'ndtv',
      image:
        'https:\/\/c.ndtvimg.com\/2025-05\/b9i5ra28_donald-trump_625x300_17_May_25.jpeg?im=FeatureCrop,algorithm=dnn,width=1200,height=738',
      language: 'en',
      category: ['world'],
      published: '2025-05-21 11:21:57 +0000',
    },
    {
      id: '2f230b8c-77e2-4175-b323-8afb2d740f73',
      title: 'China, ASEAN complete CAFTA 3.0 negotiations',
      description:
        '\u2026 of Chinese Ministry of Commerce in Beijing, China. \/;VCG\n The building of Chinese \u2026 Ministry of Commerce in Beijing, China. \/;VCG\n China \u2026 guarantees for building a China-ASEAN mega market while supplying \u2026',
      url: 'https:\/\/world.einnews.com\/article\/814690886\/eE-ae9zU5FurS0TI?ref=rss',
      author: 'einnews',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-21 11:21:49 +0000',
    },
    {
      id: '30fbe2f3-22ed-4b88-a8c9-d044caf09a21',
      title: 'Iran Executes Man Convicted In 2023 Azerbaijan Embassy Attack',
      description:
        "A man charged over a fatal shooting at Azerbaijan's embassy in the Iranian capital, Tehran, was executed on Wednesday, Iran's judiciary news outlet Mizan said.",
      url: 'https:\/\/www.ndtv.com\/world-news\/iran-executes-man-convicted-in-2023-azerbaijan-embassy-attack-8469686',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/q5otd12k_azerbaijan-embassy_625x300_21_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-21 11:21:49 +0000',
    },
    {
      id: 'de9b36ec-48c0-423a-8dd3-7333677687ae',
      title: 'AVTL IPO to open on May 26, price band fixed at \u20b9223-235 per share',
      description:
        'Price band fixed at Rs 223 to 235 per share; offer to close on May 28; net proceeds to be used for debt repayment, LPG terminal acquisition and general corporate purposes',
      url: 'https:\/\/www.business-standard.com\/markets\/ipo\/aegis-vopak-terminals-ipo-to-open-on-may-26-seeks-rs-2800-cr-125052101161_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-21 11:21:44 +0000',
    },
    {
      id: '159557a4-0a78-4351-99aa-fc23e3789018',
      title: "'Chinese flag on the moon': Possibility pushing NASA into lunar space race",
      description:
        '\u2026 flew. Now with the Chinese making significant progress in human \u2026 Tech.\n Can China beat NASA to the moon?\n "The Chinese have really \u2026 I do believe that the Chinese are definitely advancing their efforts \u2026 technical abilities of the Chinese," said Platt.\n Platt also \u2026',
      url: 'https:\/\/world.einnews.com\/article\/814690716\/q8KWSw-7MD3_4l0x?ref=rss',
      author: 'einnews',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-21 11:21:01 +0000',
    },
    {
      id: 'a843200c-f467-4a70-98b2-4d2f0c8a2af7',
      title: '4 Ex-Military Friends Scale Mount Everest, Used This Gas To Climb Faster',
      description:
        'A British team of veteran ex-special forces soldiers summited Everest on Wednesday, expedition organisers said, in a bid to fly from London, climb the highest peak and return home within seven days.',
      url: 'https:\/\/www.ndtv.com\/world-news\/4-ex-military-friends-scale-mount-everest-used-this-gas-to-climb-faster-8469974',
      author: 'ndtv',
      image: 'https:\/\/c.ndtvimg.com\/2025-05\/s2e2n98_british-climbers_625x300_21_May_25.jpeg',
      language: 'en',
      category: ['world'],
      published: '2025-05-21 11:19:59 +0000',
    },
    {
      id: '87b626af-d2c6-45e5-9c2c-60f007d5169d',
      title: 'First Look at the Xiaomi 16: Design and Features Revealed',
      description:
        'Xiaomi 16 will launch in September with Snapdragon 8 Elite 2, a 6,800mAh battery, and upgraded design and camera.',
      url: 'https:\/\/www.gizchina.com\/2025\/05\/21\/first-look-at-the-xiaomi-16-design-and-features-revealed\/',
      author: 'Abdullah Mustapha',
      image: 'https:\/\/www.gizchina.com\/wp-content\/uploads\/images\/2025\/05\/xiaomi-16-2.jpg',
      language: 'en',
      category: ['technology'],
      published: '2025-05-21 11:16:27 +0000',
    },
    {
      id: '359678c5-de26-47fa-9fdb-106ac3549938',
      title:
        'Giorgi Vashadze: I express my full support to the German Ambassador, Peter Fischer - the attack against him in Batumi is a shameful, unacceptable and anti-Georgian act',
      description:
        'I express my full support to the German Ambassador, Peter Fischer. The attack against him in Batumi is a shameful, unacceptable and anti-Georgian act, - the leader of the Strategy Builder, Giorgi Vashadze, writes on social media.\n According to him, this was \u2026',
      url: 'https:\/\/world.einnews.com\/article\/814688926\/5vx166EvGA3cc4ST?ref=rss',
      author: 'einnews',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-21 11:13:59 +0000',
    },
    {
      id: 'a8ba1411-dac5-4e46-a2d9-2bc798ad6aaf',
      title:
        'Zahid reaffirms govt support for Bumiputera empowerment, follow-up talks with stakeholders set for Friday',
      description:
        'KUALA LUMPUR, May 21 \u2014 The government remains firmly committed to supporting and strengthening policies and initiatives aligned with Bumiputera economic aspirations, to ensure...',
      url: 'https:\/\/www.malaymail.com\/news\/malaysia\/2025\/05\/21\/zahid-reaffirms-govt-support-for-bumiputera-empowerment-follow-up-talks-with-stakeholders-set-for-friday\/177647',
      author: 'Malay Mail',
      image: 'https:\/\/www.malaymail.com\/malaymail\/uploads\/images\/2025\/05\/21\/278223.JPG',
      language: 'en',
      category: ['general', 'regional'],
      published: '2025-05-21 11:12:37 +0000',
    },
    {
      id: 'aa094004-6ae6-4302-8eec-30c6792fd03f',
      title: 'This solar GPS tracker has exceptional location accuracy, plus an infinite battery life',
      description:
        "Impressive battery life, broad GNSS support, and an affordable price make Garmin's eTrex Solar a top-notch GPS tracker.",
      url: 'https:\/\/www.zdnet.com\/article\/this-solar-gps-tracker-has-exceptional-location-accuracy-plus-an-infinite-battery-life\/',
      author: '@ZDNET',
      image:
        'https:\/\/www.zdnet.com\/a\/img\/resize\/f1850b9eab9a1b8269edb8b78380c77a72ebdb7f\/2024\/02\/11\/effa4d58-572b-4dd8-bc04-3712c02737f5\/garmin-etrex-solar3.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['technology'],
      published: '2025-05-21 11:10:14 +0000',
    },
    {
      id: '9f7379dd-b744-42df-8d2a-cf823f91127a',
      title: 'IndiGo Q4 results: Net profit soars 62% to \u20b93,067 crore, dividend declared',
      description:
        "IndiGo Q4 FY25 result: Interglobe Aviation's board has recommended a dividend of \u20b910 per equity share...",
      url: 'https:\/\/www.business-standard.com\/companies\/quarterly-results\/indigo-q4-result-fy25-interglobe-aviation-profit-share-dividend-125052101134_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business', 'entrepreneur', 'finance'],
      published: '2025-05-21 11:09:48 +0000',
    },
    {
      id: '8f7418ce-1df8-4ae9-af10-013fb8b3ad7a',
      title: 'Isaiah Hartenstein vying to become second German to win NBA title',
      description:
        '\u2026 Herbert, the man who guided Germany to those successes, had \u2026 Germany came in 2018.\n However, in an April interview with the German \u2026 the United States. He chose Germany \u2013 the country where he \u2026 town of Quakenbr\u00fcck in northern Germany, after his father Florian, \u2026',
      url: 'https:\/\/world.einnews.com\/article\/814687256\/tw8OzDRh0hh1VWIu?ref=rss',
      author: 'einnews',
      image: 'None',
      language: 'en',
      category: ['national'],
      published: '2025-05-21 11:07:36 +0000',
    },
    {
      id: 'b74d3d6c-6e38-4406-bdf3-66624e74c438',
      title: 'If You Must Buy A Mag7 Company, Choose Google (NASDAQ:GOOG)',
      description: "Discover why Alphabet's stock is a cautious 'Buy' for long-term investors.",
      url: 'https:\/\/seekingalpha.com\/article\/4788770-if-you-must-buy-a-mag7-company-choose-google?source=feed_symbol_GOOG',
      author: 'Daniel Sch\u00f6nberger',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/2195892457\/image_2195892457.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-21 11:07:10 +0000',
    },
    {
      id: '9ab6466a-01aa-4675-a901-9e55e105e1bb',
      title: 'How pro-Europe, pro-US Poland offers the EU a model for how to handle Trump',
      description:
        'As the EU crafts responses to Washington\u2019s agendas on defence and trade, it might look to Warsaw for inspiration.',
      url: 'https:\/\/theconversation.com\/how-pro-europe-pro-us-poland-offers-the-eu-a-model-for-how-to-handle-trump-256137',
      author: 'Ma\u0142gorzata Zachara-Szyma\u0144ska',
      image:
        'https:\/\/images.theconversation.com\/files\/668417\/original\/file-20250516-62-3qfwqw.jpg?ixlib=rb-4.1.0&rect=0%2C447%2C5363%2C2681&q=45&auto=format&w=1356&h=668&fit=crop',
      language: 'en',
      category: ['regional', 'warsaw'],
      published: '2025-05-21 11:06:39 +0000',
    },
  ],
  page: 1,
};

export const getNews = async ({ page_number = 1, page_size = 10, category, keywords }) => {
  try {
    /* const response = await axios.get(`${Base_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        let clone = structuredClone(datassss);
        let result, response;
        if (category) {
          result = datassss.news.filter(item => {
            let flag = false;
            item.category.forEach(elem => {
              if (elem === category) flag = true;
            });
            if (flag) return item;
          });
        }
        if (keywords) {
          result = datassss.news.filter(item => item.title.includes(keywords));
        }

        if (result !== undefined) {
          response = result.splice(page_number - 1, page_size); //[{},{}]
        } else {
          response = clone.news.splice(page_number - 1, page_size); //[{},{}]
        }
        resolve({ news: response });
      }, 500);
    });
  } catch (error) {
    console.log(error);
  }
};

const categories = [
  'regional',
  'technology',
  'lifestyle',
  'business',
  'general',
  'programming',
  'science',
  'entertainment',
  'world',
  'sports',
  'finance',
  'academia',
  'politics',
  'health',
  'opinion',
  'food',
  'game',
  'fashion',
  'academic',
  'crap',
  'travel',
  'culture',
  'economy',
  'environment',
  'art',
  'music',
  'notsure',
  'CS',
  'education',
  'redundant',
  'television',
  'commodity',
  'movie',
  'entrepreneur',
  'review',
  'auto',
  'energy',
  'celebrity',
  'medical',
  'gadgets',
  'design',
  'EE',
  'security',
  'mobile',
  'estate',
  'funny',
];

export const getLatestNews = async () => {
  try {
    /*     const response = await axios.get(`${Base_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve({ news: dataLatestNews.news });
      }, 500);
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = async () => {
  try {
    /*     const response = await axios.get(`${Base_URL}available/categories`, {
      params: {
        apiKey: API_KEY,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve({ categories: categories });
      }, 500);
    });
  } catch (error) {
    console.log(error);
  }
};
