export interface Tip {
  id: number
  title: string
  description: string
  image: string
  category: string
  author: string
  date: string
  readTime: string
  content: string
  tips: string[]
  relatedTopics: string[]
}

export interface Tips {
  [key: number]: Tip
}

export const tips: Tips = {
  1: {
    id: 1,
    title: 'Smart Packing Essentials',
    description: 'Learn how to pack efficiently for any trip duration',
    image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931',
    category: 'Packing',
    author: 'Emily Chen',
    date: 'March 20, 2024',
    readTime: '10 min read',
    content: `# Smart Packing Essentials

Learn the art of efficient packing with our comprehensive guide. Whether you're going on a weekend getaway or a month-long adventure, these tips will help you pack smarter.

## Essential Categories

### Clothing
• Roll don't fold
• Pack versatile pieces
• Use packing cubes
• Layer for weather changes
• Choose wrinkle-resistant fabrics

### Toiletries
• Travel-sized containers
• Multi-use products
• Solid toiletries
• Clear bags for security
• Essential medications

### Electronics
• Universal adapter
• Portable charger
• Cord organizer
• Backup battery
• Essential cables`,
    tips: [
      'Use packing cubes',
      'Roll clothes to save space',
      'Make a packing list',
      'Pack versatile items',
      'Consider laundry options'
    ],
    relatedTopics: [
      'Travel Organization',
      'Minimalist Travel',
      'Long-term Travel'
    ]
  },
  2: {
    id: 2,
    title: 'Electronics & Gadgets Guide',
    description: 'Must-have tech items and how to pack them safely',
    image: 'https://images.unsplash.com/photo-1519219788971-8d9797e0928e',
    category: 'Packing',
    author: 'David Kim',
    date: 'March 19, 2024',
    readTime: '12 min read',
    content: `# Electronics & Gadgets Packing Guide

Master the art of packing and protecting your valuable electronics while traveling. From essential gadgets to safety tips, we've got you covered.

## Essential Categories

### Power Management
• Universal power adapter
• Portable power bank
• Surge protector
• USB hub
• Cable organizer

### Photography Gear
• Camera protection
• Memory card storage
• Lens cleaning kit
• Tripod options
• Waterproof cases

### Entertainment Devices
• Tablet/e-reader
• Noise-canceling headphones
• Portable speaker
• Gaming devices
• Storage solutions`,
    tips: [
      'Use protective cases',
      'Organize cables with ties',
      'Back up devices before travel',
      'Consider voltage differences',
      'Pack chargers in carry-on'
    ],
    relatedTopics: [
      'Digital Security',
      'Travel Photography',
      'Tech Essentials'
    ]
  },
  3: {
    id: 3,
    title: 'Minimalist Travel',
    description: 'Travel light with just a carry-on, no matter the trip length',
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd',
    category: 'Packing',
    author: 'Sarah Wilson',
    date: 'March 18, 2024',
    readTime: '15 min read',
    content: `# Minimalist Travel Guide

Learn how to travel light and smart with just a carry-on bag. Perfect for any trip length, this guide will help you embrace minimalist travel.

## Essential Categories

### Clothing Strategy
• Capsule wardrobe
• Mix-and-match pieces
• Quick-dry fabrics
• Layering techniques
• Compression bags

### Multi-use Items
• Convertible clothing
• 3-in-1 toiletries
• Dual-purpose shoes
• Versatile accessories
• Travel-sized tools

### Organization
• Digital documents
• Minimal toiletries
• Essential electronics
• Compact accessories
• Space-saving bags`,
    tips: [
      'Choose versatile clothing',
      'Pack travel-sized items',
      'Use digital alternatives',
      'Plan laundry options',
      'Focus on essentials only'
    ],
    relatedTopics: [
      'Sustainable Travel',
      'Capsule Wardrobe',
      'Urban Backpacking'
    ]
  },
  4: {
    id: 4,
    title: 'Solo Travel Safety',
    description: 'Essential safety tips for solo travelers',
    image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
    category: 'Safety',
    author: 'Alex Martinez',
    date: 'March 18, 2024',
    readTime: '12 min read',
    content: `# Solo Travel Safety Guide

Stay safe while exploring the world on your own with these essential tips and best practices for solo travelers.

## Essential Categories

### Personal Safety
• Research destinations thoroughly
• Share itinerary with family
• Stay aware of surroundings
• Trust your instincts
• Keep emergency contacts handy

### Accommodation Safety
• Book first night in advance
• Read recent reviews
• Choose well-lit locations
• Keep valuables secure
• Have backup options

### Transportation Safety
• Use reputable services
• Avoid night travel
• Share ride details
• Keep belongings close
• Learn local transport apps`,
    tips: [
      'Share itinerary with family',
      'Keep documents secure',
      'Stay aware of surroundings',
      'Trust your instincts',
      'Have backup plans'
    ],
    relatedTopics: [
      'Digital Security',
      'Travel Insurance',
      'Emergency Planning'
    ]
  },
  5: {
    id: 5,
    title: 'Digital Security',
    description: 'Protect your data and devices while traveling',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
    category: 'Safety',
    author: 'Sarah Chen',
    date: 'March 17, 2024',
    readTime: '10 min read',
    content: `# Digital Security While Traveling

Keep your digital life secure while exploring the world with these essential cybersecurity tips and practices.

## Essential Categories

### Device Security
• Use strong passwords
• Enable two-factor authentication
• Install security updates
• Encrypt your devices
• Back up your data

### Network Safety
• Use trusted Wi-Fi networks
• Enable VPN protection
• Avoid public computers
• Be careful with Bluetooth
• Monitor connections

### Financial Security
• Use travel-specific cards
• Monitor transactions
• Enable notifications
• Use secure ATMs
• Keep emergency funds`,
    tips: [
      'Use a reliable VPN',
      'Enable device encryption',
      'Backup before travel',
      'Use secure networks',
      'Monitor accounts regularly'
    ],
    relatedTopics: [
      'Cybersecurity',
      'Identity Protection',
      'Online Privacy'
    ]
  },
  6: {
    id: 6,
    title: 'Health & Insurance',
    description: 'Stay healthy and prepared for emergencies abroad',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
    category: 'Safety',
    author: 'Dr. Michael Park',
    date: 'March 16, 2024',
    readTime: '15 min read',
    content: `# Travel Health & Insurance Guide

Ensure a safe and healthy journey with comprehensive health preparation and insurance coverage tips.

## Essential Categories

### Health Preparation
• Get necessary vaccinations
• Pack basic medications
• Research local healthcare
• Carry medical records
• Know emergency numbers

### Insurance Coverage
• Compare travel policies
• Understand coverage limits
• Keep policy documents
• Save emergency contacts
• Know claim procedures

### Emergency Planning
• Locate nearby hospitals
• Learn basic phrases
• Keep medical ID card
• Have backup prescriptions
• Plan for emergencies`,
    tips: [
      'Get travel insurance',
      'Check vaccination requirements',
      'Pack essential medications',
      'Know emergency numbers',
      'Carry medical documents'
    ],
    relatedTopics: [
      'Travel Medicine',
      'Emergency Response',
      'Medical Tourism'
    ]
  },
  7: {
    id: 7,
    title: 'Budget Travel Hacks',
    description: 'Travel more for less with smart money-saving tips',
    image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4',
    category: 'Budget',
    author: 'Maria Garcia',
    date: 'March 15, 2024',
    readTime: '15 min read',
    content: `# Budget Travel Hacks

Master the art of budget travel with these money-saving strategies and smart planning tips.

## Essential Categories

### Accommodation Savings
• Book in advance
• Use reward points
• Consider hostels
• Try house sitting
• Compare platforms

### Transportation Tips
• Find flight deals
• Use public transit
• Walk when possible
• Share rides
• Get travel passes

### Food & Activities
• Cook your own meals
• Find free activities
• Use local markets
• Get city passes
• Join free tours`,
    tips: [
      'Book in advance',
      'Travel in shoulder season',
      'Use public transport',
      'Cook your own meals',
      'Find free activities'
    ],
    relatedTopics: [
      'Points and Miles',
      'Budget Accommodation',
      'Local Transportation'
    ]
  },
  8: {
    id: 8,
    title: 'Points & Miles Guide',
    description: 'Maximize travel rewards for free flights and hotels',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
    category: 'Budget',
    author: 'James Wilson',
    date: 'March 14, 2024',
    readTime: '12 min read',
    content: `# Travel Points & Miles Guide

Learn how to earn and maximize travel rewards for free flights, hotel stays, and upgrades.

## Essential Categories

### Credit Card Strategy
• Choose right cards
• Meet spending requirements
• Track bonus categories
• Maximize points
• Avoid annual fees

### Airlines Programs
• Join loyalty programs
• Track mile expiration
• Find sweet spots
• Book award flights
• Use airline partners

### Hotel Rewards
• Compare programs
• Stack benefits
• Use point transfers
• Find best value
• Get elite status`,
    tips: [
      'Choose right credit cards',
      'Track points and miles',
      'Look for transfer bonuses',
      'Book in advance',
      'Be flexible with dates'
    ],
    relatedTopics: [
      'Credit Card Rewards',
      'Loyalty Programs',
      'Travel Hacking'
    ]
  },
  9: {
    id: 9,
    title: 'Local Transportation',
    description: 'Navigate public transport like a local',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
    category: 'Budget',
    author: 'Tom Anderson',
    date: 'March 13, 2024',
    readTime: '10 min read',
    content: `# Local Transportation Guide

Master public transportation systems worldwide and travel like a local while saving money.

## Essential Categories

### Public Transit
• Research routes
• Get transit cards
• Download apps
• Learn schedules
• Save offline maps

### Alternative Options
• Bike sharing
• Walking routes
• Ride sharing
• Car rentals
• Local taxis

### Money Saving
• Buy passes
• Find discounts
• Compare options
• Avoid peak times
• Share rides`,
    tips: [
      'Get local transit apps',
      'Buy multi-day passes',
      'Learn basic routes',
      'Travel off-peak',
      'Keep offline maps'
    ],
    relatedTopics: [
      'Urban Navigation',
      'Public Transport',
      'City Exploration'
    ]
  },
  10: {
    id: 10,
    title: 'Travel Photography Basics',
    description: 'Capture amazing travel memories with any camera',
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
    category: 'Photography',
    author: 'David Wong',
    date: 'March 12, 2024',
    readTime: '10 min read',
    content: `# Travel Photography Basics

Learn how to capture stunning travel photos that tell a story, regardless of your camera type or experience level.

## Camera Basics

### Composition
• Rule of thirds
• Leading lines
• Framing
• Perspective
• Balance

### Lighting
• Golden hour
• Blue hour
• Natural light
• Shadow play
• Artificial light

### Settings
• Aperture
• Shutter speed
• ISO
• White balance
• Focus modes`,
    tips: [
      'Learn basic composition',
      'Shoot during golden hour',
      'Back up your photos',
      'Tell a story',
      'Respect local customs'
    ],
    relatedTopics: [
      'Mobile Photography',
      'Photo Editing',
      'Camera Gear'
    ]
  },
  11: {
    id: 11,
    title: 'Mobile Photography',
    description: 'Pro tips for stunning photos with your smartphone',
    image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc',
    category: 'Photography',
    author: 'Lisa Chen',
    date: 'March 11, 2024',
    readTime: '12 min read',
    content: `# Mobile Photography Guide

Master the art of capturing professional-quality photos using just your smartphone with these essential tips and techniques.

## Essential Skills

### Camera Features
• Portrait mode
• Night mode
• HDR settings
• Burst mode
• Manual controls

### Composition Tips
• Grid overlay
• Negative space
• Symmetry
• Color theory
• Minimalism

### Advanced Techniques
• Long exposure
• Panorama shots
• Time-lapse
• Macro photography
• Motion blur`,
    tips: [
      'Clean your lens regularly',
      'Use grid lines for composition',
      'Avoid digital zoom',
      'Edit with care',
      'Master your phone\'s features'
    ],
    relatedTopics: [
      'Photo Editing Apps',
      'Social Media Photography',
      'Travel Photography'
    ]
  },
  12: {
    id: 12,
    title: 'Best Photo Locations',
    description: 'Find the most Instagram-worthy spots anywhere',
    image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
    category: 'Photography',
    author: 'Mark Thompson',
    date: 'March 10, 2024',
    readTime: '15 min read',
    content: `# Finding Perfect Photo Locations

Discover how to find and capture the most stunning photo locations during your travels, from iconic landmarks to hidden gems.

## Location Types

### Natural Landscapes
• Mountain vistas
• Coastal scenes
• Desert landscapes
• Forest trails
• Waterfalls

### Urban Spots
• Rooftop views
• Street art
• Historic architecture
• City parks
• Night cityscapes

### Hidden Gems
• Local markets
• Quiet alleyways
• Secret gardens
• Abandoned places
• Local cafes`,
    tips: [
      'Research locations beforehand',
      'Visit during off-peak hours',
      'Check weather conditions',
      'Respect local rules',
      'Find unique angles'
    ],
    relatedTopics: [
      'Landscape Photography',
      'Urban Photography',
      'Travel Planning'
    ]
  }
}

export const tipCategories = {
  packing: [
    {
      id: 1,
      title: 'Smart Packing Essentials',
      description: 'Learn how to pack efficiently for any trip duration',
      image: 'https://images.unsplash.com/photo-1553531384-cc64ac80f931',
      category: 'Packing',
    },
    {
      id: 2,
      title: 'Electronics & Gadgets Guide',
      description: 'Must-have tech items and how to pack them safely',
      image: 'https://images.unsplash.com/photo-1519219788971-8d9797e0928e',
      category: 'Packing',
    },
    {
      id: 3,
      title: 'Minimalist Travel',
      description: 'Travel light with just a carry-on, no matter the trip length',
      image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd',
      category: 'Packing',
    },
  ],
  safety: [
    {
      id: 4,
      title: 'Solo Travel Safety',
      description: 'Essential safety tips for solo travelers',
      image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b',
      category: 'Safety',
    },
    {
      id: 5,
      title: 'Digital Security',
      description: 'Protect your data and devices while traveling',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3',
      category: 'Safety',
    },
    {
      id: 6,
      title: 'Health & Insurance',
      description: 'Stay healthy and prepared for emergencies abroad',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
      category: 'Safety',
    },
  ],
  budget: [
    {
      id: 7,
      title: 'Budget Travel Hacks',
      description: 'Travel more for less with smart money-saving tips',
      image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4',
      category: 'Budget',
    },
    {
      id: 8,
      title: 'Points & Miles Guide',
      description: 'Maximize travel rewards for free flights and hotels',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888',
      category: 'Budget',
    },
    {
      id: 9,
      title: 'Local Transportation',
      description: 'Navigate public transport like a local',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957',
      category: 'Budget',
    },
  ],
  photography: [
    {
      id: 10,
      title: 'Travel Photography Basics',
      description: 'Capture amazing travel memories with any camera',
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd',
      category: 'Photography',
    },
    {
      id: 11,
      title: 'Mobile Photography',
      description: 'Pro tips for stunning photos with your smartphone',
      image: 'https://images.unsplash.com/photo-1581591524425-c7e0978865fc',
      category: 'Photography',
    },
    {
      id: 12,
      title: 'Best Photo Locations',
      description: 'Find the most Instagram-worthy spots anywhere',
      image: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60',
      category: 'Photography',
    },
  ],
} 