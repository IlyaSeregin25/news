import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const Base_URL = import.meta.env.VITE_NEWS_BASE_API_URL;

const datassss = {
  status: 'ok',
  news: [
    {
      id: '72e2e200-d3ec-47d6-8266-086c9c0d1b36',
      title: 'UnitedHealth Group shares plunge 18% on reported DOJ probe into possible Medicare fraud',
      description:
        'Shares of UnitedHealth Group are down roughly 49% this year following a string of setbacks for the company.',
      url: 'https:\/\/www.cnbc.com\/2025\/05\/15\/unitedhealth-group-stock-doj-investigation-report.html',
      author: 'Annika Kim Constantino',
      image:
        'https:\/\/image.cnbcfm.com\/api\/v1\/image\/107387719-1710440031527-gettyimages-516917444-UNITEDHEALTH_GROUP.jpeg?v=1747318684&w=1920&h=1080',
      language: 'en',
      category: ['general'],
      published: '2025-05-15 14:55:14 +0000',
    },
    {
      id: 'b1446e02-77c5-449b-a342-b2253b448433',
      title: 'LTO suspends license of bus driver involved in Edsa tunnel mishap',
      description:
        'MANILA, Philippines \u2014 The Land Transportation Office (LTO) has suspended the license of the bus driver involved in the multi-vehicle accident in the Edsa-Quezon Avenue tunnel in Quezon',
      url: 'https:\/\/newsinfo.inquirer.net\/2060666\/lto-suspends-license-of-bus-driver-involved-in-edsa-tunnel-mishap',
      author: 'Zacarian Sarao',
      image: 'https:\/\/newsinfo.inquirer.net\/files\/2022\/09\/LTO-license-logo-filephoto-090822.jpg',
      language: 'en',
      category: ['general'],
      published: '2025-05-15 14:54:49 +0000',
    },
    {
      id: '058e451c-a3a2-4765-b5b2-d7774a5fbb19',
      title: 'Cognizant says winning large and mega deals regularly helping growth',
      description:
        'With 24 large deals won last year and four in Q1, Cognizant says its ecosystem for securing mega contracts is key to regaining a top-four global IT services ranking',
      url: 'https:\/\/www.business-standard.com\/companies\/start-ups\/cognizant-large-deals-fuel-growth-targets-top-4-it-services-spot-125051501598_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:47:40 +0000',
    },
    {
      id: '52b70fa8-e55c-4188-85c5-345c8ab8d0c2',
      title: 'Vi files fresh plea with SC on AGR matter, hearing likely next week',
      description:
        'Telco seeks waiver of over \u20b930,000 crore of Adjusted Gross Revenue (AGR) dues towards penalties and interest as Supreme Court hearing is expected on 19 May',
      url: 'https:\/\/www.business-standard.com\/companies\/news\/vodafone-idea-files-fresh-supreme-court-plea-on-agr-dues-125051501590_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:44:13 +0000',
    },
    {
      id: 'd874f940-e91e-4174-9b0a-adba8222b1ca',
      title: 'ITC Hotels net profit rises 41% to \u20b9257 cr in first quarter after demerger',
      description:
        'Hospitality major targets 220 operational hotels with over 20,000 keys by 2030 and sees robust growth in room revenue, ADR and occupancy in post-demerger quarter',
      url: 'https:\/\/www.business-standard.com\/companies\/quarterly-results\/itc-hotels-net-profit-up-41-percent-in-first-quarter-after-demerger-125051501580_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:42:19 +0000',
    },
    {
      id: 'e617756f-3eeb-4c5e-9730-5c644fd7ffaa',
      title: 'Equity mutual fund cash levels soar for 5th month on global uncertainties',
      description: 'April cash-holding surges to 7.2% from 6.9% in March',
      url: 'https:\/\/www.business-standard.com\/markets\/mutual-fund\/equity-mutual-fund-cash-levels-soar-for-5th-month-on-global-uncertainties-125051501575_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:40:32 +0000',
    },
    {
      id: '55209e61-a635-4c8b-a632-9171c89f299b',
      title: 'Famous Families of Hollywood For International Family Day!',
      description:
        "It's International Family Day, so we whipped up the famous families of Hollywood who have more than made a name for themselves -- With TV shows, starring in Blockbuster films and endless product deals, these families are EVERYWHERE!",
      url: 'https:\/\/www.tmz.com\/2025\/05\/15\/famous-families-of-hollywood\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/30\/16by9\/2025\/05\/14\/301022c285434b4da4cb9a76dec74e3d_xl.jpg',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-15 14:39:25 +0000',
    },
    {
      id: '66c770a6-f033-4897-971c-db5bc9b68c51',
      title: 'Justin Bieber Smiles With a Bong While Creating Music in Iceland',
      description:
        "Justin Bieber's got nothing to hide ... because he's posting everything on social media -- including a new pic with a bong in his lap.",
      url: 'https:\/\/www.tmz.com\/2025\/05\/15\/justin-bieber-bong-making-music-iceland\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/be\/16by9\/2025\/05\/15\/bedbc759d9d0442e9e99379b5faf35b2_xl.jpg',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-15 14:39:25 +0000',
    },
    {
      id: '79941c2e-0928-465c-962d-2be94a134ef4',
      title: 'Chris Brown Arrested in UK Over Alleged Bottle-Throwing Incident',
      description:
        'Chris Brown is in trouble with the law again ... the R&B singer got arrested Thursday in the United Kingdom over a bottle-throwing incident at a nightclub two years ago ... TMZ has confirmed.',
      url: 'https:\/\/www.tmz.com\/2025\/05\/15\/chris-brown-arrested-england-bottle-throwing\/',
      author: 'TMZ Staff',
      image: 'https:\/\/imagez.tmz.com\/image\/48\/16by9\/2025\/05\/15\/485a9186794e4519a902346a5bd57c52_xl.jpg',
      language: 'en',
      category: ['entertainment'],
      published: '2025-05-15 14:39:25 +0000',
    },
    {
      id: '4dd80ae9-77dd-419d-85b0-ff33a2e0c064',
      title: 'Gerry Adams: Reporter rejects reckless journalism claim over BBC report',
      description:
        "Reporter rejects 'reckless journalism' claim in Adams libel trial\n\n2 hours ago Share Save Julian O'Neill BBC News NI crime and justice correspondent Share Save\n\nPA Media Gerry Adams, pictured on Thurs...",
      url: 'https:\/\/www.bbc.com\/news\/articles\/cvg5pw5ldvyo',
      author: "Julian O'Neill",
      image:
        'https:\/\/ichef.bbci.co.uk\/news\/1024\/branded_news\/a44d\/live\/ed097b60-317d-11f0-9705-29fcd10d0f7c.jpg',
      language: 'en',
      category: ['regional'],
      published: '2025-05-15 14:37:36 +0000',
    },
    {
      id: '3d507a71-790e-42f0-89fe-528505d4b7c0',
      title: "President's invocation of Article 143, experts say rare but not first time",
      description:
        "President Murmu's referral to the Supreme Court under Article 143(1) revives a rare constitutional tool used to seek advisory opinions on complex legal questions",
      url: 'https:\/\/www.business-standard.com\/india-news\/president-invokes-article-143-rare-but-not-unprecedented-experts-say-125051501570_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:34:07 +0000',
    },
    {
      id: 'a231d162-7a46-473b-8b8b-a8b915ce6eb7',
      title: 'Tech Wrap May 15: BGMI update, Dell Plus laptops, Vivo V50 Elite edition',
      description:
        "Krafton releases BGMI 3.8 update. Dell launches Copilot Plus AI PCs. Vivo V50 Elite edition launched. Microsoft tests 'Hey Copilot' voice command. YouTube tests new ad format",
      url: 'https:\/\/www.business-standard.com\/technology\/tech-news\/tech-wrap-may-15-bgmi-update-dell-plus-laptops-vivo-v50-elite-edition-125051501282_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:33:40 +0000',
    },
    {
      id: 'b7098034-5831-4b79-89d6-18cfad595ab9',
      title: "Giro d'Italia: Former champion Jai Hindley out of stage six after mass crash",
      description:
        "Former Giro d'Italia champion Jai Hindley is out of stage six of the Giro d'Italia after he was involved in a mass crash which saw several competitors unseated.",
      url: 'https:\/\/www.bbc.com\/sport\/cycling\/articles\/c780x03ejgko',
      author: '@BBCSport',
      image:
        'https:\/\/ichef.bbci.co.uk\/ace\/branded_sport\/1200\/cpsprodpb\/eb7a\/live\/5c0f70d0-6139-11ee-ac8c-9d18dbc280ea.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-15 14:33:02 +0000',
    },
    {
      id: '8b8de45e-d427-4f8c-a86b-c458ae961e9d',
      title: "This Greek island is Europe's most overtouristed destination, according to new report",
      description: '',
      url: 'https:\/\/www.euronews.com\/travel\/2025\/05\/15\/this-greek-island-is-europes-most-overtouristed-destination-according-to-new-report',
      author: 'Rebecca Ann Hughes',
      image: '',
      language: 'en',
      category: ['lifestyle', 'travel'],
      published: '2025-05-15 14:31:20 +0000',
    },
    {
      id: '5db88024-4db5-4234-b261-fbd028486cf4',
      title: 'RTX 5090 laptop GPU shows no real-world performance gains over the RTX 4090',
      description:
        "Facepalm: If you're planning to buy a new gaming laptop powered by the RTX 5090 mobile, you might want to hold onto your wallet a little longer. A noted hardware reviewer who tested the new GPU claims...",
      url: 'https:\/\/www.techspot.com\/news\/107929-rtx-5090-laptop-gpu-shows-no-real-world.html',
      author: 'Kishalaya Kundu',
      image: 'https:\/\/www.techspot.com\/images2\/news\/bigimage\/2025\/05\/2025-05-15-image-9.jpg',
      language: 'en',
      category: ['technology'],
      published: '2025-05-15 14:31:00 +0000',
    },
    {
      id: '337542bd-ab56-4fd9-add6-9c91fc965db1',
      title: 'Easing investment norms: Lower-rated corporate bonds attract FPIs',
      description:
        "RBI's move to scrap short-term and concentration limits opens doors for FPIs to explore high-yield, lower-rated corporate bonds amid attractive returns and easing inflation",
      url: 'https:\/\/www.business-standard.com\/markets\/news\/fpis-may-turn-to-lower-rated-corporate-bonds-after-norms-eased-125051501563_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:28:15 +0000',
    },
    {
      id: '9ae980ec-543d-4718-a461-9dcbad9134bc',
      title: 'MIAL drops plan to cut flights, halt cargo operations after govt nudge',
      description: 'Civil aviation ministry intervened after protest from airlines, cargo operators',
      url: 'https:\/\/www.business-standard.com\/industry\/aviation\/mial-drops-plan-to-cut-flights-halt-cargo-operations-after-govt-nudge-125051501567_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:28:08 +0000',
    },
    {
      id: '5651bd8d-7d1b-441e-b809-47aef8b2e9b1',
      title: 'Microsoft set to pull the plug on Bing Search APIs',
      description:
        'Microsoft is retiring Bing Search APIs on August 11, directing customers toward AI products as an alternative.\n\nThe Bing Search APIs allowed users to add search capabilities to their applications. The...',
      url: 'https:\/\/www.theregister.com\/2025\/05\/15\/bing_search_apis_retired\/',
      author: 'Richard Speed',
      image: 'https:\/\/regmedia.co.uk\/2024\/05\/24\/shutterstock_bing.jpg',
      language: 'en',
      category: ['technology'],
      published: '2025-05-15 14:27:15 +0000',
    },
    {
      id: '1098386f-af08-4d36-875e-ccaa891e856a',
      title: 'Walmart confirms worst fears about tariffs',
      description: "Walmart has confirmed Trump's tariffs will have enormous effects for its shoppers.",
      url: 'https:\/\/www.dailymail.co.uk\/yourmoney\/consumer\/article-14715771\/Walmart-confirms-worst-fears-tariffs.html?ns_mchannel=rss',
      author: 'Alice Wright',
      image: 'https:\/\/i.dailymail.co.uk\/1s\/2025\/05\/15\/13\/98331935-0-image-a-8_1747312404485.jpg',
      language: 'en',
      category: ['national'],
      published: '2025-05-15 14:23:50 +0000',
    },
    {
      id: 'b0374502-323d-40fb-a501-9be3764ce36c',
      title: "What is CarPlay Ultra? Apple's next-gen auto system explained",
      description:
        'Apple\u2019s long-promised next-generation CarPlay automotive system is finally ready to roll out, but you\u2019ll need to be a high roller to take it for a spin.\n\nThe new infotainment system, first announced i...',
      url: 'https:\/\/www.trustedreviews.com\/explainer\/what-is-carplay-ultra',
      author: 'Chris Smith',
      image:
        'https:\/\/www.trustedreviews.com\/wp-content\/uploads\/sites\/7\/2025\/05\/Apple-CarPlay-Ultra-Maps-centre.jpg',
      language: 'en',
      category: ['technology'],
      published: '2025-05-15 14:23:39 +0000',
    },
    {
      id: '5a0b2348-0c4e-4933-970e-57c25cefed76',
      title: 'NFA Western Visayas set to roll out P20-per-kilogram rice',
      description:
        'ILOILO CITY \u2014 The National Food Authority (NFA) 6 (Western Visayas) is prepared to roll out the P20-per-kilogram rice program dubbed \u201cBenteng Bigas Meron Na!\u201d (BBM',
      url: 'https:\/\/newsinfo.inquirer.net\/2060641\/nfa-western-visayas-set-to-roll-out-p20-per-kilogram-rice',
      author: 'Perla Lena',
      image: 'https:\/\/newsinfo.inquirer.net\/files\/2025\/05\/Screen-Shot-2025-05-15-at-2.18.32-PM-scaled.png',
      language: 'en',
      category: ['general'],
      published: '2025-05-15 14:23:15 +0000',
    },
    {
      id: '54cd0b4b-2824-4af5-9c97-24838e2c8cd9',
      title: "Trump calls US a 'stupid country' over birthright citizenship for illegals",
      description:
        "Donald Trump urges US Supreme Court to end birthright citizenship for children of undocumented or temporary migrants, calling the current policy a 'scam' and criticising nationwide court orders...",
      url: 'https:\/\/www.business-standard.com\/immigration\/trump-supreme-court-birthright-us-citizenship-undocumented-immigration-125051501525_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business', 'entrepreneur', 'finance'],
      published: '2025-05-15 14:22:12 +0000',
    },
    {
      id: 'cd9f3319-f0e9-4839-bbc4-be39b4a5eb11',
      title: 'Man, 32, on the brink of death after taking popular medication',
      description:
        'A bodybuilder was left fighting for his life after years of abusing a drug, with experts warning that more people could be at risk.',
      url: 'https:\/\/www.dailymail.co.uk\/health\/article-14715213\/fit-man-death-popular-medication-warn-gym-goers.html?ns_mchannel=rss',
      author: 'Luke Chafer',
      image: 'https:\/\/i.dailymail.co.uk\/1s\/2025\/05\/15\/11\/98404991-0-image-m-11_1747305244309.jpg',
      language: 'en',
      category: ['national'],
      published: '2025-05-15 14:21:50 +0000',
    },
    {
      id: '42121de2-da3e-4e24-99be-2b6d71ed5ec8',
      title: 'Chime Financial Starts U.S. IPO Effort On High Growth And Operating Breakeven',
      description:
        'He also leads the investing group IPO Edge , which offers actionable information on growth stocks through first-look IPO filings, previews on upcoming IPOs, an IPO calendar for tracking what\u2019s on the ...',
      url: 'https:\/\/seekingalpha.com\/article\/4787097-chime-financial-starts-us-ipo-effort-on-high-growth-and-operating-breakeven?source=feed_tag_ipo_analysis',
      author: 'SeekingAlpha.com',
      image:
        'https:\/\/static.seekingalpha.com\/cdn\/s3\/uploads\/getty_images\/1445983308\/image_1445983308.jpg?io=getty-c-w1536',
      language: 'en',
      category: ['business', 'finance'],
      published: '2025-05-15 14:21:33 +0000',
    },
    {
      id: 'b33e5169-6856-4d92-934f-3588368c324a',
      title: "Pakistan's nuclear weapons should be placed under IAEA supervision: Rajnath",
      description:
        "EAM Jaishankar says ties with Pakistan will remain 'strictly bilateral'; reiterates Indus Waters Treaty will stay in abeyance until cross-border terrorism ends...",
      url: 'https:\/\/www.business-standard.com\/external-affairs-defence-security\/news\/pakistan-s-nuclear-weapons-should-be-placed-under-iaea-supervision-rajnath-125051501548_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business', 'entrepreneur', 'finance'],
      published: '2025-05-15 14:21:21 +0000',
    },
    {
      id: '06eddee0-d95f-4964-8c7d-4958da77d95e',
      title: 'JSW Energy Q4 results: Net profit rises 20% to \u20b9464 cr, revenue up 15%',
      description:
        "The company's revenue from operations fell by 15.7 per cent to \u20b93,189.39 crore in the Q4FY25, it had reported a revenue of \u20b92,755.87 crore in Q4FY24...",
      url: 'https:\/\/www.business-standard.com\/companies\/quarterly-results\/jsw-energy-q4fy25-results-net-profit-up-revenue-down-from-last-year-125051501486_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business', 'entrepreneur', 'finance'],
      published: '2025-05-15 14:21:00 +0000',
    },
    {
      id: 'd8534f1d-2caa-4fa7-9011-0472016de4e9',
      title: "Oil prices dip as Trump says US is 'getting close' to Iran deal",
      description:
        'Oil prices fell as much as 3 per cent by Thursday afternoon after President Donald Trump said the US was close to reaching a nuclear accord with Iran.\n\nThe price of Brent crude, the global benchmark, ...',
      url: 'https:\/\/www.dailymail.co.uk\/money\/markets\/article-14715481\/Oil-prices-fall-Trump-says-US-getting-close-Iran-nuclear-deal.html?ns_mchannel=rss',
      author: 'Harry Wise',
      image: 'https:\/\/i.dailymail.co.uk\/1s\/2025\/05\/15\/14\/98412177-0-image-m-10_1747316868449.jpg',
      language: 'en',
      category: ['national'],
      published: '2025-05-15 14:20:41 +0000',
    },
    {
      id: '8471644d-e1c5-4f54-a514-6952c9194277',
      title: 'These budget earbuds have no business sounding this good for the price',
      description:
        "ZDNET's key takeaways The CMF Buds 2 Plus are the most premium pair of earbuds from the Nothing sub-brand.\n\nAt $79, they're one of the best-sounding and most feature-rich earbuds in the price segment....",
      url: 'https:\/\/www.zdnet.com\/article\/these-budget-earbuds-have-no-business-sounding-this-good-for-the-price\/',
      author: 'Prakhar Khanna',
      image:
        'https:\/\/www.zdnet.com\/a\/img\/resize\/cb6147ff99a0b30901feb3ffb010ffaadf3b0ccc\/2025\/05\/14\/4ab2c178-68bd-404e-b5eb-d2db6eb1f0c2\/img-20250514-173041.jpg?auto=webp&fit=crop&height=675&width=1200',
      language: 'en',
      category: ['regional'],
      published: '2025-05-15 14:20:00 +0000',
    },
    {
      id: '32b0069b-22de-4917-8eae-9f3d9aac40f9',
      title: 'Kennedy, defending downsizing, clashes with Democrats in tense hearings',
      description:
        'Health Kennedy, defending downsizing, clashes with Democrats in tense hearings \u201cI don\u2019t think people should be taking advice, medical advice from me,\u201d the health secretary said. Secretary of Health an...',
      url: 'https:\/\/www.boston.com\/news\/health\/2025\/05\/15\/kennedy-defending-downsizing-clashes-with-democrats-in-tense-hearings\/',
      author: 'New York Times Service',
      image:
        'https:\/\/bdc2020.o0bc.com\/wp-content\/uploads\/2025\/05\/Senate_HHS_Kennedy_70802-6825f165a2939-768x432.jpg',
      language: 'en',
      category: ['politics', 'world'],
      published: '2025-05-15 14:19:55 +0000',
    },
    {
      id: '550efdde-a2bc-40a0-934e-dfdea98624c5',
      title: 'Bologna beat AC Milan 1-0 to win first Italian Cup title in 51 years',
      description:
        'Bologna ended a 51-year wait for a major trophy when it beat AC Milan 1-0 to win the Italian Cup.\nDan Ndoye returned from injury to score the only goal and help Bologna to its first Italian Cup since 1974. The club, which is owned by Canadian Joey Saputo, has only won two second-division titles in b...',
      url: 'https:\/\/www.business-standard.com\/sports\/football-news\/bologna-beat-ac-milan-1-0-to-win-first-italian-cup-title-in-51-years-125051500253_1.html',
      author: 'business-standard',
      image: 'None',
      language: 'en',
      category: ['business'],
      published: '2025-05-15 14:19:25 +0000',
    },
  ],
  page: 1,
};

export const getNews = async (page_number = 1, page_size = 10) => {
  try {
    /* const response = await axios.get(`${Base_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
      },
    });
    return response.data; */
    return await new Promise(resolve => {
      setTimeout(() => {
        let clone = structuredClone(datassss).news.splice(page_number, page_size);
        resolve({ news: clone });
      }, 500);
    });
  } catch (error) {
    console.log(error);
  }
};
