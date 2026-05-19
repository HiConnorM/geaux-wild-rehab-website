// Mock content data - structured for easy CMS migration later

export interface Species {
  id: string
  name: string
  scientificName: string
  description: string
  image: string
  category: 'mammal'
  // Extended info for detail pages
  habitat: string
  diet: string
  behavior: string
  lifespan: string
  foundWildTips: string[]
  funFacts: string[]
  conservationStatus: string
  commonInjuries: string[]
}

export interface FAQ {
  id: string
  category: string
  question: string
  answer: string
}

export interface Story {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  heroImage: string
  date: string
  tags: string[]
  species: string[]
}

// Safely format a "YYYY-MM-DD" date string without timezone shifting.
// new Date("2024-08-15") parses as midnight UTC, which shifts the day back
// in behind-UTC timezones and causes SSR/client hydration mismatches.
export function formatDate(
  dateStr: string,
  options: Intl.DateTimeFormatOptions = { month: 'long', day: 'numeric', year: 'numeric' }
): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-US', options)
}

// Comprehensive Species data - Mammals only (no birds)
export const species: Species[] = [
  {
    id: 'opossum',
    name: 'Virginia Opossum',
    scientificName: 'Didelphis virginiana',
    description: "North America's only marsupial, opossums are gentle, beneficial animals that help control tick and pest populations. Despite their appearance, they are docile and rarely aggressive.",
    image: '/images/animals/opossum.svg',
    category: 'mammal',
    habitat: 'Opossums inhabit deciduous forests, farmland, and urban areas throughout Louisiana. They are adaptable and can make dens in hollow logs, tree cavities, brush piles, under porches, or in attics. They do not dig their own burrows but use abandoned dens of other animals.',
    diet: 'Highly opportunistic omnivores that eat insects, snails, slugs, small rodents, frogs, carrion, fruits, and vegetables. A single opossum can eat up to 5,000 ticks per season, making them incredibly beneficial for controlling tick-borne diseases in your yard.',
    behavior: 'Primarily nocturnal and solitary, opossums are nomadic and rarely stay in one area for more than a few days. When threatened, they may hiss, show their teeth, or "play possum" - entering an involuntary catatonic state that can last from minutes to hours. They have a very low body temperature, which makes them nearly immune to rabies.',
    lifespan: '1-2 years in the wild, up to 4 years in captivity',
    foundWildTips: [
      'If you find a dead opossum, always check the pouch for babies - they may still be alive',
      'Baby opossums smaller than 7 inches (nose to rump) need professional care',
      'Opossums "playing dead" should be left alone in a safe area - they will revive on their own',
      'An opossum in your yard is beneficial - they eat ticks, snails, and other pests',
      'Opossums do NOT carry rabies due to their low body temperature'
    ],
    funFacts: [
      'Opossums are virtually immune to rabies due to their low body temperature',
      'A single opossum can eat up to 5,000 ticks in one season',
      'They have 50 teeth - more than any other North American land mammal',
      'Baby opossums are the size of a honeybee when born and must crawl to the pouch',
      '"Playing possum" is an involuntary response - they cannot control when it happens',
      'They have opposable thumbs on their hind feet, like primates'
    ],
    conservationStatus: 'Least Concern - Populations are stable, though urban development poses challenges',
    commonInjuries: ['Vehicle strikes', 'Dog attacks', 'Orphaned joeys', 'Cat attacks', 'Poisoning from pest control']
  },
  {
    id: 'squirrel',
    name: 'Eastern Gray Squirrel',
    scientificName: 'Sciurus carolinensis',
    description: 'One of the most common wildlife species we rehabilitate, especially orphaned babies in spring and fall. These acrobatic rodents are essential for forest regeneration through their seed-caching behavior.',
    image: '/images/animals/squirrel.svg',
    category: 'mammal',
    habitat: 'Abundant in hardwood and mixed forests, parks, and suburban neighborhoods across Louisiana. They build large nests called "dreys" from leaves and twigs high in trees, and also use tree cavities. They are highly adaptable to urban environments.',
    diet: 'Primarily herbivorous, eating nuts (especially acorns and hickory), seeds, tree buds, bark, fungi, and occasionally insects or bird eggs. They cache thousands of nuts each fall, and their "forgotten" caches help regenerate forests by planting new trees.',
    behavior: 'Diurnal (active during day), most active in early morning and late afternoon. They do not hibernate but may stay in nests during extreme weather. Squirrels are highly territorial and communicate through tail movements and vocalizations. They can jump up to 10 times their body length.',
    lifespan: '6-12 years in the wild',
    foundWildTips: [
      'Baby squirrels on the ground may be waiting for mom - observe from a distance for 4-6 hours',
      'If the baby is cold, injured, or covered in flies, it needs immediate help',
      'Place a warm water bottle wrapped in cloth near fallen babies to keep them warm while waiting',
      'A baby squirrel that approaches humans is likely desperate and needs help',
      'Keep cats and dogs away from the area while waiting for the mother to return'
    ],
    funFacts: [
      'Squirrels can find buried nuts by smell, even under a foot of snow',
      'They plant thousands of trees each year by forgetting where they buried nuts',
      'Their ankle joints rotate 180 degrees, allowing them to climb down trees headfirst',
      'Squirrels have four front teeth that never stop growing',
      'They can fall from heights of 100 feet without injury due to their body/tail design',
      'A squirrel\'s brain is roughly the size of a walnut'
    ],
    conservationStatus: 'Least Concern - Very abundant throughout their range',
    commonInjuries: ['Orphaned babies (nest destruction)', 'Cat attacks', 'Falls from nests', 'Vehicle strikes', 'Electrocution from power lines']
  },
  {
    id: 'rabbit',
    name: 'Eastern Cottontail',
    scientificName: 'Sylvilagus floridanus',
    description: 'Common rabbits that are frequently orphaned when nests are disturbed by mowing, pets, or construction. Despite their adorable appearance, cottontails are challenging to rehabilitate and have a high stress sensitivity.',
    image: '/images/animals/rabbit.svg',
    category: 'mammal',
    habitat: 'Found in meadows, fields, forest edges, and suburban areas throughout Louisiana. They create shallow nest depressions called "forms" in tall grass, often in lawns, gardens, and other areas humans frequent. They do not burrow like European rabbits.',
    diet: 'Herbivorous, eating grasses, clover, wildflowers, garden vegetables, bark, and twigs. In winter, they consume more woody plants and bark. They practice cecotrophy - re-eating special droppings to extract additional nutrients.',
    behavior: 'Crepuscular (most active at dawn and dusk), cottontails are solitary and highly alert. When threatened, they freeze or flee in a zigzag pattern at speeds up to 18 mph. Mothers visit nests only twice daily (dawn and dusk) to avoid attracting predators. Baby rabbits are independent at just 3-4 weeks old.',
    lifespan: '1-3 years in the wild',
    foundWildTips: [
      'Mother rabbits only visit nests twice daily - an "abandoned" nest is usually not abandoned',
      'If the nest is disturbed, gently cover it with grass and leave it alone',
      'To test if mom is returning: place string in a pattern over the nest - if moved by morning, mom visited',
      'Baby rabbits with open eyes and fur that are 4-5 inches long can survive on their own',
      'NEVER relocate a nest - the mother will not find her babies',
      'Rabbits are extremely stress-sensitive - handling can cause fatal shock'
    ],
    funFacts: [
      'Baby cottontails are independent at just 3-4 weeks old',
      'Rabbits can see nearly 360 degrees around them with minimal blind spots',
      'They can run up to 18 mph in a zigzag pattern to escape predators',
      'A rabbit\'s teeth never stop growing - they wear down through constant chewing',
      'Mother rabbits only nurse their babies about 5 minutes per day',
      'Cottontails are not related to the domestic rabbits kept as pets'
    ],
    conservationStatus: 'Least Concern - Common throughout their range',
    commonInjuries: ['Orphaned babies (lawn mowing, pet exposure)', 'Cat attacks', 'Dog attacks', 'Capture shock', 'Nest destruction']
  },
  {
    id: 'fox',
    name: 'Red Fox',
    scientificName: 'Vulpes vulpes',
    description: 'Beautiful and intelligent canids that are primarily shy and avoid human contact. Red foxes play an important role in controlling rodent populations and are rarely a threat to humans or pets.',
    image: '/images/animals/fox.svg',
    category: 'mammal',
    habitat: 'Adaptable to many environments including forests, grasslands, farmland, and increasingly suburban areas in Louisiana. They den in underground burrows (often expanded from other animals\' dens), under sheds, or in hollow logs. Fox families often use the same den site for generations.',
    diet: 'Opportunistic omnivores that primarily eat small mammals (mice, voles, rabbits), but also consume birds, insects, fruits, berries, and carrion. They cache excess food for later consumption. A single fox can eat 3-5 pounds of food per day.',
    behavior: 'Primarily crepuscular and nocturnal, though may be seen during day, especially when raising kits. They are generally solitary except during breeding season and while raising young. Foxes communicate through over 28 different vocalizations, including the famous "screaming" call.',
    lifespan: '3-5 years in the wild, up to 14 years in captivity',
    foundWildTips: [
      'Fox kits playing alone outside a den are usually fine - mom is nearby hunting',
      'A fox seen during the day is not necessarily sick - they often hunt during daylight when raising kits',
      'If you find an injured adult fox, do NOT approach - contact a professional immediately',
      'Orphaned fox kits will approach humans when desperate for food - this indicates they need help',
      'Never attempt to keep a fox as a pet - it is illegal and harmful to the animal'
    ],
    funFacts: [
      'Red foxes can hear a mouse squeak from 150 feet away',
      'They can run up to 30 mph and jump over 6-foot fences',
      'Fox kits are born deaf and blind, but grow incredibly fast',
      'They use the earth\'s magnetic field to hunt, "pouncing" with incredible accuracy',
      'A fox\'s tail (called a "brush") helps them balance and keeps them warm in winter',
      'Red foxes have been known to play with dogs and form unusual friendships'
    ],
    conservationStatus: 'Least Concern - Widespread and adaptable',
    commonInjuries: ['Vehicle strikes', 'Mange', 'Orphaned kits', 'Illegal trapping', 'Dog attacks']
  },
  {
    id: 'coyote',
    name: 'Coyote',
    scientificName: 'Canis latrans',
    description: 'Highly adaptable canids that have expanded their range dramatically across North America. Often misunderstood, coyotes are intelligent, family-oriented animals that help control rodent and deer populations.',
    image: '/images/animals/coyote.svg',
    category: 'mammal',
    habitat: 'Incredibly adaptable, coyotes thrive in forests, prairies, deserts, swamps, and even urban centers across Louisiana. They dig their own dens or enlarge existing burrows. Urban coyotes often live in parks, golf courses, and green spaces within cities.',
    diet: 'Highly opportunistic omnivores eating primarily small mammals (rabbits, mice, rats), but also deer, birds, insects, fruits, and in urban areas, pet food and garbage. They are one of nature\'s most effective rodent control agents.',
    behavior: 'Coyotes can be active any time but are primarily crepuscular and nocturnal. They live in family groups with complex social structures. Pairs often mate for life and both parents care for pups. They communicate through an impressive array of howls, yips, and barks - a single coyote can sound like multiple animals.',
    lifespan: '10-14 years in the wild',
    foundWildTips: [
      'Coyote pups without parents nearby for several hours may need help',
      'Adult coyotes should NEVER be approached - contact wildlife authorities',
      'A coyote that seems unafraid of humans may be sick or habituated - keep your distance',
      'If you encounter a coyote, make yourself large and loud to encourage it to leave',
      'Sick or injured coyotes require professional handling - do not attempt rescue yourself'
    ],
    funFacts: [
      'Coyotes can run up to 43 mph, making them one of the fastest North American mammals',
      'Their name comes from the Aztec word "coyotl"',
      'A coyote pair typically mates for life',
      'They can interbreed with domestic dogs (coydogs) and wolves (coywolves)',
      'Coyotes have expanded their range 40% since the 1950s despite human persecution',
      'They can hear a mouse moving under snow from several feet away'
    ],
    conservationStatus: 'Least Concern - Populations are thriving and expanding',
    commonInjuries: ['Vehicle strikes', 'Mange', 'Orphaned pups', 'Illegal shooting', 'Trap injuries']
  },
  {
    id: 'bobcat',
    name: 'Bobcat',
    scientificName: 'Lynx rufus',
    description: 'Louisiana\'s native wild cat, bobcats are solitary, elusive predators that play a vital role in maintaining healthy ecosystems. Despite their fierce appearance, they are extremely shy and rarely seen by humans.',
    image: '/images/animals/bobcat.svg',
    category: 'mammal',
    habitat: 'Found throughout Louisiana in forests, swamps, coastal marshes, and even suburban fringes with adequate cover. They require dense vegetation for stalking prey and typically den in rock crevices, hollow logs, brush piles, or under fallen trees.',
    diet: 'Obligate carnivores that primarily hunt rabbits, squirrels, mice, and birds. They can take down prey much larger than themselves, including young deer. Bobcats are ambush predators, stalking prey with extreme patience before pouncing.',
    behavior: 'Solitary and highly territorial, bobcats are most active at dawn and dusk. Males have territories up to 30 square miles that overlap with several females. They are excellent climbers and swimmers but prefer to hunt on the ground. Despite their size, bobcats are extremely secretive.',
    lifespan: '7-10 years in the wild, up to 25 years in captivity',
    foundWildTips: [
      'Bobcat kittens alone may not be orphaned - mother cats leave kittens while hunting',
      'NEVER approach an adult bobcat - they can cause serious injury',
      'If you see a bobcat acting strangely (unafraid, aggressive, disoriented), contact wildlife authorities',
      'Orphaned bobcat kittens need specialized care from licensed rehabilitators',
      'Keep pets indoors if a bobcat is frequenting your area'
    ],
    funFacts: [
      'Bobcats are named for their short "bobbed" tail, which has a distinctive black tip',
      'They can leap up to 12 feet to catch prey',
      'A bobcat\'s spots help them blend into dappled forest light',
      'They have excellent hearing with ear tufts that may help direct sound',
      'Bobcats are about twice the size of domestic cats',
      'They are the most common wild cat in North America'
    ],
    conservationStatus: 'Least Concern - Populations are stable throughout most of their range',
    commonInjuries: ['Vehicle strikes', 'Orphaned kittens', 'Illegal trapping', 'Dog attacks', 'Mange']
  },
  {
    id: 'beaver',
    name: 'North American Beaver',
    scientificName: 'Castor canadensis',
    description: 'Nature\'s engineers, beavers create wetland habitats that benefit countless other species. Their dams help control flooding, improve water quality, and create critical habitats throughout Louisiana\'s waterways.',
    image: '/images/animals/beaver.svg',
    category: 'mammal',
    habitat: 'Found in streams, rivers, ponds, and wetlands throughout Louisiana. They construct dams from branches, mud, and stones, creating deep ponds to protect their lodge entrances from predators. Beaver ponds create habitat for fish, waterfowl, and many other species.',
    diet: 'Herbivorous, eating bark, leaves, and twigs from deciduous trees (especially willow, aspen, and cottonwood), as well as aquatic plants, roots, and water lily tubers. They store branches underwater near their lodge for winter food supply.',
    behavior: 'Primarily nocturnal, beavers live in family groups called colonies. Both parents care for young (kits), and older siblings often help raise younger ones. They are famous for their dam-building behavior, which can dramatically alter landscapes. Beavers communicate through vocalizations, scent marking, and their famous tail-slap warning signal.',
    lifespan: '10-15 years in the wild, up to 24 years in captivity',
    foundWildTips: [
      'Baby beavers (kits) found alone on land likely need help - mothers don\'t leave them unattended',
      'If you find a beaver on a road, do NOT push it into water - it may be injured',
      'Injured beavers should only be handled by professionals due to their powerful bite',
      'A beaver out during the day is not necessarily sick - they are sometimes active in daylight',
      'Never relocate a beaver yourself - contact licensed wildlife rehabilitators'
    ],
    funFacts: [
      'Beaver teeth are orange because of iron in the enamel, which makes them extra strong',
      'They can hold their breath for up to 15 minutes underwater',
      'A beaver\'s flat tail stores fat and helps regulate body temperature',
      'They have clear eyelids (like goggles) that let them see underwater',
      'Beaver dams can be over 2,000 feet long',
      'They were nearly hunted to extinction for their fur but have made a remarkable comeback'
    ],
    conservationStatus: 'Least Concern - Populations have recovered well from historical overhunting',
    commonInjuries: ['Vehicle strikes', 'Orphaned kits', 'Dog attacks', 'Trap injuries', 'Illegal shooting']
  }
]

// FAQ data
export const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Found Wildlife',
    question: 'I found a baby animal - what should I do?',
    answer: 'First, observe from a distance. Many baby animals are not actually orphaned - the mother may be nearby. If the animal is injured, in immediate danger, or you have confirmed the mother is deceased, contact us immediately. Do not attempt to feed the animal.',
  },
  {
    id: '2',
    category: 'Found Wildlife',
    question: 'How do I know if an animal needs help?',
    answer: 'Signs that an animal needs help include: visible injuries, blood, or broken limbs; the animal is cold or wet; flies or maggots are present; the animal is crying continuously; a dead parent is nearby; or the animal was caught by a cat or dog.',
  },
  {
    id: '3',
    category: 'Found Wildlife',
    question: 'Can I keep the wild animal as a pet?',
    answer: 'No. It is illegal to keep native wildlife as pets in Louisiana without proper permits. Wild animals have specialized needs and belong in the wild. Our goal is always to rehabilitate and release animals back to their natural habitat.',
  },
  {
    id: '4',
    category: 'Care & Handling',
    question: 'What should I do while waiting for help?',
    answer: 'Place the animal in a ventilated box lined with soft cloth (no loops or threads). Keep it in a warm, dark, quiet place away from children and pets. Do NOT give food or water unless specifically instructed by a rehabilitator.',
  },
  {
    id: '5',
    category: 'Care & Handling',
    question: 'Is it safe to touch the animal?',
    answer: 'Use caution when handling any wild animal. Wear gloves when possible. Even small animals can bite when scared. If you are bitten, seek medical attention. Some species can carry rabies, so never handle bats, foxes, or skunks without proper protection.',
  },
  {
    id: '6',
    category: 'Support & Volunteering',
    question: 'How can I help Geaux Wild Rehab?',
    answer: 'You can support us by donating, purchasing items from our Amazon Wishlist, volunteering your time, or spreading awareness. Every contribution helps us save more Louisiana wildlife.',
  },
  {
    id: '7',
    category: 'Support & Volunteering',
    question: 'Do you accept volunteers?',
    answer: 'Yes! We are always looking for dedicated volunteers to help with animal care, transport, facility maintenance, and administrative tasks. Fill out our volunteer interest form to get started.',
  },
  {
    id: '8',
    category: 'About Our Work',
    question: 'What happens to animals after rehabilitation?',
    answer: 'Our ultimate goal is to release every animal back into the wild. Animals are carefully evaluated and must meet specific health and behavioral criteria before release. We choose release sites that provide appropriate habitat.',
  },
]

// Stories data
export const stories: Story[] = [
  {
    id: '1',
    slug: 'rocky-raccoon-recovery',
    title: "A Fox Kit's Road to Recovery",
    excerpt: 'Found orphaned after a storm, this tiny fox kit beat the odds and returned to the wild.',
    content: `
      <p>During a severe spring storm, a concerned citizen found a tiny fox kit, barely two weeks old, crying beside a fallen tree. The mother was nowhere to be found after extensive searching.</p>
      
      <p>When the kit arrived at Geaux Wild Rehab, he weighed just 150 grams and was severely dehydrated. Our team immediately began attentive care, feeding him specialized formula every 2-3 hours.</p>
      
      <p>Over the following months, the kit grew stronger. He learned essential survival skills alongside other orphaned foxes, foraging for food and developing natural hunting instincts.</p>
      
      <p>After four months of rehabilitation, he was ready for release. He was returned to a protected wooded area where he could thrive. This is why we do what we do.</p>
    `,
    heroImage: '/images/stories/rocky-raccoon.jpg',
    date: '2024-08-15',
    tags: ['success-story', 'release'],
    species: ['fox'],
  },
  {
    id: '2',
    slug: 'opossum-mama-rescue',
    title: 'Saving Mama Opossum and Her Babies',
    excerpt: 'An injured mother opossum with a pouch full of babies gets a second chance.',
    content: `
      <p>When animal control brought us an injured female opossum, we discovered she had eight tiny joeys still attached in her pouch. The mother had been hit by a car but miraculously, her babies were unharmed.</p>
      
      <p>We treated the mother's injuries while carefully monitoring the babies. Opossum joeys are incredibly fragile at this stage, smaller than a jellybean.</p>
      
      <p>Over weeks of careful rehabilitation, the mother healed completely and continued nursing her babies. As they grew, we watched them ride on her back just as they would in the wild.</p>
      
      <p>The entire family was released together once the joeys were old enough to survive independently. A happy ending for this resilient marsupial family.</p>
    `,
    heroImage: '/images/stories/opossum-family.jpg',
    date: '2024-06-22',
    tags: ['success-story', 'rescue', 'family'],
    species: ['opossum'],
  },
  {
    id: '3',
    slug: 'squirrel-season-2024',
    title: 'Squirrel Season: A Record Year',
    excerpt: 'Our busiest squirrel season yet taught us valuable lessons about community support.',
    content: `
      <p>Spring 2024 brought an unprecedented number of orphaned squirrels to our facility. After several severe storms knocked down countless trees, we received over 100 baby squirrels in just one month.</p>
      
      <p>Our small team was overwhelmed, but the community stepped up in amazing ways. Volunteers signed up for feeding shifts, donations poured in for formula and supplies, and local businesses offered support.</p>
      
      <p>Each squirrel received individual care, with feeding schedules every 3-4 hours for the youngest babies. As they grew, we transitioned them to outdoor enclosures where they could practice climbing and foraging.</p>
      
      <p>By late summer, we had successfully released over 90 squirrels back into suitable habitats. This experience showed us the incredible power of community in wildlife rehabilitation.</p>
    `,
    heroImage: '/images/stories/squirrel-season.jpg',
    date: '2024-09-01',
    tags: ['update', 'community', 'squirrels'],
    species: ['squirrel'],
  },
]

// Content loader functions (for future CMS integration)
export async function getSpecies(): Promise<Species[]> {
  // TODO: Replace with CMS fetch (e.g., Sanity)
  return species
}

export async function getSpeciesById(id: string): Promise<Species | undefined> {
  return species.find((s) => s.id === id)
}

export async function getFAQs(): Promise<FAQ[]> {
  return faqs
}

export async function getFAQsByCategory(category: string): Promise<FAQ[]> {
  return faqs.filter((faq) => faq.category === category)
}

export async function getStories(): Promise<Story[]> {
  return stories.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getStoryBySlug(slug: string): Promise<Story | undefined> {
  return stories.find((s) => s.slug === slug)
}

export async function getStoriesByTag(tag: string): Promise<Story[]> {
  return stories.filter((s) => s.tags.includes(tag))
}

export async function getStoriesBySpecies(speciesId: string): Promise<Story[]> {
  return stories.filter((s) => s.species.includes(speciesId))
}

// Impact stats
export const impactStats = {
  animalsRescued: 1247,
  speciesHelped: 24,
  volunteersActive: 58,
  yearsServing: 6,
  releaseRate: 78,
  callsAnswered: 3500,
}
