// Mock content data - structured for easy CMS migration later

export interface Species {
  id: string
  name: string
  scientificName: string
  description: string
  image: string
  category: 'mammal' | 'bird' | 'reptile'
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

// Species data
export const species: Species[] = [
  {
    id: 'raccoon',
    name: 'Raccoon',
    scientificName: 'Procyon lotor',
    description: 'Intelligent and adaptable mammals known for their distinctive black mask and ringed tail.',
    image: '/images/species/raccoon.jpg',
    category: 'mammal',
  },
  {
    id: 'opossum',
    name: 'Virginia Opossum',
    scientificName: 'Didelphis virginiana',
    description: "North America's only marsupial, opossums are beneficial for controlling ticks and pests.",
    image: '/images/species/opossum.jpg',
    category: 'mammal',
  },
  {
    id: 'squirrel',
    name: 'Eastern Gray Squirrel',
    scientificName: 'Sciurus carolinensis',
    description: 'One of the most common wildlife species we rehabilitate, especially orphaned babies.',
    image: '/images/species/squirrel.jpg',
    category: 'mammal',
  },
  {
    id: 'rabbit',
    name: 'Eastern Cottontail',
    scientificName: 'Sylvilagus floridanus',
    description: 'Common rabbits that are frequently orphaned when nests are disturbed.',
    image: '/images/species/rabbit.jpg',
    category: 'mammal',
  },
  {
    id: 'fox',
    name: 'Red Fox',
    scientificName: 'Vulpes vulpes',
    description: 'Beautiful and elusive canids that occasionally need rehabilitation assistance.',
    image: '/images/species/fox.jpg',
    category: 'mammal',
  },
  {
    id: 'songbird',
    name: 'Songbirds',
    scientificName: 'Various species',
    description: 'Various songbird species including mockingbirds, cardinals, and blue jays.',
    image: '/images/species/songbird.jpg',
    category: 'bird',
  },
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
    answer: 'Use caution when handling any wild animal. Wear gloves when possible. Even small animals can bite when scared. If you are bitten, seek medical attention. Some species can carry rabies, so never handle bats, raccoons, foxes, or skunks without proper protection.',
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
    title: "Rocky's Road to Recovery",
    excerpt: 'Found orphaned after a storm, this tiny raccoon kit beat the odds and returned to the wild.',
    content: `
      <p>During a severe spring storm, a concerned citizen found a tiny raccoon kit, barely a week old, crying beside a fallen tree. The mother was nowhere to be found after extensive searching.</p>
      
      <p>When Rocky arrived at Geaux Wild Rehab, he weighed just 120 grams and was severely dehydrated. Our team immediately began round-the-clock care, feeding him specialized formula every 2-3 hours.</p>
      
      <p>Over the following months, Rocky grew stronger. He learned essential survival skills alongside other orphaned raccoons, foraging for food and climbing with confidence.</p>
      
      <p>After four months of rehabilitation, Rocky was ready for release. He was returned to a protected wooded area where he could thrive. This is why we do what we do.</p>
    `,
    heroImage: '/images/stories/rocky-raccoon.jpg',
    date: '2024-08-15',
    tags: ['success-story', 'release'],
    species: ['raccoon'],
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
  animalsRescued: 847,
  speciesHelped: 32,
  volunteersActive: 45,
  yearsServing: 8,
}
