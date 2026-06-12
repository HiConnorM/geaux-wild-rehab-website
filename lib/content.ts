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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Opossum/3-possum.jpg',
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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Squirrel/3-squirrels.jpg',
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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Rabbit/3-rabbits.JPG',
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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/RedFox/Ginger-the-fox.jpg',
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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Coyote/coyote.jpg',
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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Bobcat/bobcat-1.PNG',
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
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Beaver/beaver-in-tank.jpg',
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
  },
  {
    id: 'gray-fox',
    name: 'Gray Fox',
    scientificName: 'Urocyon cinereoargenteus',
    description: "Louisiana's native fox, the gray fox is the only canid in North America that can climb trees. Shy and secretive, they are rarely seen despite being common throughout the state.",
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/GrayFox/gray-fox.jpg',
    category: 'mammal',
    habitat: 'Found in mixed hardwood forests, brushy areas, and forest edges throughout Louisiana. They prefer areas with dense cover and often den in hollow logs, rocky outcrops, or underground burrows. Unlike red foxes, gray foxes strongly prefer forested habitats.',
    diet: 'Omnivorous, eating rabbits, mice, birds, insects, fruits, nuts, and berries. They are more omnivorous than red foxes and consume more plant material. Their diet shifts seasonally depending on availability.',
    behavior: 'Primarily nocturnal and crepuscular. Gray foxes are unique among canids for their ability to climb trees — they use this skill to escape predators and forage for fruit. They live in small family groups and both parents raise kits. They communicate through barks, growls, and scent marking.',
    lifespan: '6–8 years in the wild',
    foundWildTips: [
      'Gray fox kits alone outside a den are usually fine — mom is nearby hunting',
      'A fox seen during daylight is not necessarily sick — mothers often hunt during the day',
      'Injured gray foxes require professional handling — do not attempt to catch one yourself',
      'Orphaned kits that approach humans are desperate and need immediate help',
      'Never attempt to keep a fox as a pet — it is illegal and harmful to the animal'
    ],
    funFacts: [
      'Gray foxes are the only canid in North America that can climb trees',
      'They use their semi-retractable claws to grip bark like a cat',
      'Despite their name, gray foxes often have rusty red patches on their sides and neck',
      'They are one of the oldest living members of the dog family — dating back 10 million years',
      'Gray foxes can rotate their forearms much more than other canids, aiding in climbing',
      'Their bushy tail has a black stripe down the top, distinguishing them from red foxes'
    ],
    conservationStatus: 'Least Concern — Populations are stable throughout their range',
    commonInjuries: ['Vehicle strikes', 'Mange', 'Orphaned kits', 'Dog attacks', 'Illegal trapping']
  },
  {
    id: 'otter',
    name: 'North American River Otter',
    scientificName: 'Lontra canadensis',
    description: 'Playful and charismatic, river otters are a sign of healthy waterways. Louisiana\'s extensive wetland system supports one of the largest otter populations in the country.',
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Otter/otter.jpg',
    category: 'mammal',
    habitat: "Found in rivers, lakes, swamps, coastal marshes, and bayous throughout Louisiana. They require clean water with abundant fish and dense bankside vegetation for denning. Louisiana's wetlands provide ideal habitat and the state has one of the highest otter densities in North America.",
    diet: 'Primarily fish, but also crayfish, frogs, turtles, snakes, and occasionally small birds or mammals. They are opportunistic and will eat whatever is most abundant. A single otter may eat 15–20% of its body weight in food each day.',
    behavior: 'Semi-aquatic and highly social, otters live in family groups. They are famous for their playful behavior — sliding down muddy or snowy banks, wrestling, and chasing each other. They are active year-round and can swim at speeds up to 7 mph. Otters communicate through whistles, growls, and scent marking.',
    lifespan: '8–9 years in the wild, up to 21 years in captivity',
    foundWildTips: [
      'Otter pups found alone on a riverbank may be abandoned — observe from a distance for several hours',
      'Never handle a wild otter — they have a powerful bite and sharp teeth',
      'A lethargic or disoriented otter in daylight likely needs professional help',
      'Otters can travel long distances overland — one on a road is not necessarily injured',
      'Contact a licensed rehabilitator immediately if you find an injured or orphaned otter'
    ],
    funFacts: [
      'River otters can hold their breath for up to 8 minutes',
      'They have the densest fur of any mammal — up to one million hairs per square inch',
      'Otters slide down muddy banks purely for fun — not just for transportation',
      'They can close their ears and nostrils when diving',
      'Otter pups cannot swim at birth — their mother must teach them',
      'Louisiana has more river otters per square mile than almost any other state'
    ],
    conservationStatus: 'Least Concern — Populations have rebounded strongly after mid-20th century declines',
    commonInjuries: ['Fishing line entanglement', 'Vehicle strikes', 'Orphaned pups', 'Oil contamination', 'Trap injuries']
  },
  {
    id: 'armadillo',
    name: 'Nine-banded Armadillo',
    scientificName: 'Dasypus novemcinctus',
    description: "Louisiana's armored oddity, the nine-banded armadillo is one of the most distinctive mammals in the state. Though they look prehistoric, they are gentle insectivores that pose no threat to humans.",
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Armadillo/transparent-armadillo.png',
    category: 'mammal',
    habitat: 'Common throughout Louisiana in forests, brushy areas, grasslands, and suburban neighborhoods. They prefer loose, moist soil for digging burrows and foraging for insects. Armadillos can have up to 12 active burrows in their home range, often sharing them with other wildlife.',
    diet: 'Primarily insectivorous, eating beetles, grubs, ants, termites, worms, and other invertebrates found by digging in soil and leaf litter. They use their excellent sense of smell to locate prey up to 6 inches underground. They occasionally eat small vertebrates, berries, and fungi.',
    behavior: 'Mostly solitary and crepuscular to nocturnal, armadillos have poor eyesight but an exceptional sense of smell. When threatened, they curl slightly and rely on their armor for protection, or flee in a surprising burst of speed. They are strong swimmers and can walk along river bottoms.',
    lifespan: '7–10 years in the wild, up to 23 years in captivity',
    foundWildTips: [
      'Armadillos seen during daylight may be sick — healthy ones are usually nocturnal',
      'A disoriented or lethargic armadillo needs professional help immediately',
      'Baby armadillos found alone without a mother nearby need a rehabilitator',
      'Do not handle armadillos with bare hands — they can carry leprosy bacteria',
      'An armadillo crossing a road is not injured — give it time and space to pass'
    ],
    funFacts: [
      'Armadillos always give birth to identical quadruplets from a single fertilized egg',
      'Their name is Spanish for "little armored one"',
      'They can hold their breath for up to 6 minutes, allowing them to walk underwater',
      'Armadillos are one of only two known mammals that can contract leprosy',
      'Their armor is made of bone covered with tough skin — not scales',
      'Armadillos expanded into Louisiana in the early 20th century from Texas'
    ],
    conservationStatus: 'Least Concern — Populations are expanding throughout the southeastern United States',
    commonInjuries: ['Vehicle strikes', 'Dog attacks', 'Orphaned young', 'Disorientation from illness', 'Trap injuries']
  },
  {
    id: 'muskrat',
    name: 'Muskrat',
    scientificName: 'Ondatra zibethicus',
    description: 'Semi-aquatic rodents that are a cornerstone of Louisiana marsh ecosystems. Muskrats build distinctive dome-shaped lodges from vegetation and play a vital role in managing wetland plant growth.',
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Muskrat/muskrat.jpg',
    category: 'mammal',
    habitat: "Found in marshes, swamps, ponds, streams, and coastal wetlands throughout Louisiana. They prefer areas with shallow water and abundant emergent vegetation like cattails and bulrush. Louisiana's coastal marshes provide ideal habitat, and the state historically supported one of the largest muskrat populations in North America.",
    diet: 'Primarily herbivorous, eating aquatic plants including cattails, sedges, rushes, and water lilies — consuming both roots and above-ground parts. They occasionally eat mussels, crayfish, frogs, and fish. Muskrats are important marsh managers, pruning vegetation and keeping waterways open.',
    behavior: 'Semi-aquatic and active year-round, muskrats are most active at dawn and dusk. They build dome-shaped lodges from vegetation or burrow into bank walls, with underwater entrances. They are strong swimmers and can remain submerged for up to 15 minutes. They live in family groups and defend territories aggressively.',
    lifespan: '3–4 years in the wild',
    foundWildTips: [
      'Baby muskrats found alone and crying are likely orphaned and need help',
      'Muskrats found far from water may be lost or injured — observe before intervening',
      'A muskrat active during midday is unusual and may need attention',
      'Wear gloves when handling muskrats — they bite hard when frightened',
      'Contact a licensed rehabilitator before attempting to capture or transport a muskrat'
    ],
    funFacts: [
      'Muskrats produce a musky odor from glands near the base of their tail — hence the name',
      'They can swim backwards as well as forwards',
      'A muskrat can eat approximately one-third of its body weight in vegetation per day',
      'Muskrat lodges provide nesting sites for Canada geese, ducks, and turtles',
      'Louisiana muskrats were once the foundation of the state\'s fur trade industry',
      'They have partially webbed hind feet and use their flattened tail as a rudder'
    ],
    conservationStatus: 'Least Concern — Common throughout their range, though coastal wetland loss threatens Louisiana populations',
    commonInjuries: ['Vehicle strikes', 'Orphaned young', 'Trap injuries', 'Predator attacks', 'Habitat loss displacement']
  },
  {
    id: 'weasel',
    name: 'Long-tailed Weasel',
    scientificName: 'Neogale frenata',
    description: 'The long-tailed weasel is Louisiana\'s smallest carnivore — a fierce and agile hunter that punches far above its weight. Despite their tiny size, they are formidable predators that play an important role in controlling rodent populations.',
    image: 'https://47nfhzdy2aifew9v.public.blob.vercel-storage.com/Weasel/weasel.jpg',
    category: 'mammal',
    habitat: 'Found in a variety of habitats across Louisiana including forests, open fields, farmland, and marshes — anywhere that supports adequate prey populations. They typically den in burrows abandoned by other animals, under tree roots, or in rock crevices, often lining the nest with fur from their prey.',
    diet: 'Obligate carnivores with a diet dominated by small mammals, especially mice, voles, rats, and rabbits. They also eat birds, eggs, frogs, and insects. Weasels hunt by scent and can follow prey into burrows. They often kill more than they can eat immediately and cache excess prey.',
    behavior: 'Solitary and highly active, weasels have a very high metabolism and must eat frequently. They are active day and night and do not hibernate. Despite their small size they are bold, fearless hunters that will attack prey many times their own size. They communicate through scent marking and high-pitched squeaks and trills.',
    lifespan: '1–3 years in the wild, up to 10 years in captivity',
    foundWildTips: [
      'Weasel kits found without a mother are fragile and need immediate professional care',
      'A weasel seen in daylight is not necessarily sick — they are active around the clock',
      'Do not handle weasels bare-handed — they deliver a surprisingly powerful bite',
      'An injured or lethargic weasel requires prompt attention from a licensed rehabilitator',
      'Keep domestic animals away from any found weasel to reduce additional stress'
    ],
    funFacts: [
      'Long-tailed weasels can kill prey up to ten times their own body weight',
      'Their slender bodies allow them to chase mice and voles directly into burrows',
      'In northern states their coat turns white in winter — in Louisiana it stays brown year-round',
      'They have a distinctive bounding gallop and often stand upright on their hind legs to survey surroundings',
      'A group of weasels is called a "colony," "gang," or "pack"',
      'Weasels can enter a torpor-like state to conserve energy during food scarcity'
    ],
    conservationStatus: 'Least Concern — Populations are generally stable, though rarely seen due to their secretive nature',
    commonInjuries: ['Vehicle strikes', 'Cat and dog attacks', 'Orphaned kits', 'Trap injuries', 'Rodenticide poisoning']
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
    answer: 'No.',
  },
  {
    id: '4',
    category: 'Care & Handling',
    question: 'What should I do while waiting for help?',
    answer: 'Place the animal in a secure carrier with ventilation, lined with soft cloth (no loops or threads). Keep it in a warm, dark, quiet place away from children and pets. Do NOT give food or water unless specifically instructed by a rehabilitator.',
  },
  {
    id: '5',
    category: 'Care & Handling',
    question: 'Is it safe to touch the animal?',
    answer: 'Never handle wildlife without proper PPE. Always wear gloves and long sleeves at minimum. Even small animals can bite or scratch when scared or in pain. If you are bitten or scratched, seek medical attention immediately.',
  },
  {
    id: '6',
    category: 'Support & Volunteering',
    question: 'How can I help Geaux Wild Rehab?',
    answer: 'You can support us by donating, purchasing items from our Amazon Wishlist, or spreading awareness on social media. Every contribution helps us save more Louisiana wildlife.',
  },
  {
    id: '7',
    category: 'Support & Volunteering',
    question: 'Do you offer wildlife transport assistance?',
    answer: 'Yes! We accept transport volunteers who can help pick up and deliver injured or orphaned animals to our facility. If you are interested in helping with transport, please reach out via our contact page.',
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
  animalsRescued: 1500,
  speciesHelped: 24,
  volunteersActive: 58,
  yearsServing: 2021, // used as "Est. 2021"
  releaseRate: 82,
  callsAnswered: 3500,
}
