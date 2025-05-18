export interface Post {
  id: number
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  author: string
  readTime: string
  description?: string
}

export interface Posts {
  [key: number]: Post
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Street Food Paradise in Bangkok: A Local\'s Guide to Authentic Thai Cuisine',
    excerpt: 'Explore Bangkok\'s vibrant street food scene with our comprehensive guide to the best local dishes, markets, and hidden gems',
    content: `# Street Food Paradise in Bangkok: A Local's Guide to Authentic Thai Cuisine

Bangkok's street food scene is a vibrant tapestry of flavors, aromas, and culinary traditions that have been passed down through generations. This comprehensive guide will take you through the city's best food spots, from bustling night markets to hidden local gems.

## 🏮 Best Food Markets & Districts

### Yaowarat (Chinatown)
• Best Time: Evening after 6 PM
• Famous for seafood and Chinese-Thai fusion
• Must-try dishes: Grilled seafood, bird's nest soup
• Local tip: Follow the crowds to find the best stalls

### Ratchada Train Night Market
• Operating hours: Thursday to Sunday, 5 PM - 1 AM
• Known for trendy food stalls and Instagram-worthy views
• Popular for young locals and food photographers
• Great variety of both traditional and modern Thai dishes

### Or Tor Kor Market
• Premium fresh produce and prepared foods
• Clean and organized environment
• Best for authentic Thai ingredients
• Perfect for morning food exploration

## 🍜 Essential Thai Street Food Dishes

### 1. Pad Thai
The iconic stir-fried rice noodles featuring:
• Fresh river prawns
• Pressed tofu
• Bean sprouts
• Crushed peanuts
• Perfect sweet-sour-savory balance

### 2. Som Tam (Green Papaya Salad)
A refreshing and spicy salad containing:
• Shredded green papaya
• Cherry tomatoes
• Long beans
• Dried shrimp
• Peanuts and chili

### 3. Mango Sticky Rice
Thailand's beloved dessert:
• Sweet ripe mango
• Glutinous rice
• Warm coconut cream sauce
• Optional: crispy mung beans

## ⏰ Best Times for Food Adventures

### Morning (6 AM - 11 AM)
• Fresh market experiences
• Traditional Thai breakfast
• Best time for boat noodles
• Less crowded, more local atmosphere

### Afternoon (11 AM - 4 PM)
• Air-conditioned food courts
• Modern Thai fusion
• Perfect for beating the heat
• Great for food photography

### Evening (4 PM - Late)
• Street food prime time
• Night market experiences
• Best variety of options
• Lively atmosphere

## 🌶️ Spice Level Guide

### Mild
• Ask for "pet nit noy" (a little spicy)
• Perfect for beginners
• Still flavorful without overwhelming heat
• Good starting point for Thai cuisine

### Medium
• "pet pan glang" (medium spicy)
• Balanced heat level
• True Thai flavors
• Most popular with locals

### Spicy
• "pet mak" (very spicy)
• For experienced spice lovers
• Authentic Thai heat levels
• Not recommended for beginners

## 💡 Pro Tips for Street Food Success

### Food Safety
• Choose busy stalls with high turnover
• Watch for clean preparation areas
• Drink bottled water only
• Observe local eating habits

### Best Practices
• Eat where locals eat
• Try different variations of dishes
• Keep small bills handy
• Learn basic Thai phrases

### Cultural Etiquette
• Use spoon and fork (no knife needed)
• Share dishes family-style
• Respect food vendors
• Be patient during busy times

## 🗺️ Recommended Food Tours

### Self-Guided Routes
1. Yaowarat Evening Food Walk
2. Sukhumvit Soi 38 Night Market
3. Old Town Heritage Food Trail
4. Weekend Market Food Adventure

### Guided Experiences
• Morning fresh market tours
• Evening street food walks
• Cooking class combinations
• Photography food tours

Remember to stay hydrated and pace yourself - Bangkok's street food scene is vast and exciting, but it's best enjoyed slowly and mindfully to fully appreciate each unique flavor and experience.`,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    category: 'Food Guide',
    date: 'March 15, 2024',
    author: 'Sarah Johnson',
    readTime: '12 min read',
  },
  {
    id: 2,
    title: 'Istanbul\'s Hidden Food Treasures: From Ancient Bazaars to Modern Eateries',
    excerpt: 'Discover the rich culinary heritage of Istanbul through its traditional markets, local specialties, and best-kept secret restaurants',
    content: `# Istanbul's Hidden Food Treasures: From Ancient Bazaars to Modern Eateries

Istanbul's culinary scene is a fascinating blend of ancient traditions and modern innovations, where centuries-old recipes meet contemporary cooking techniques. Join us on a gastronomic journey through this historic city's most delicious secrets.

## 🏺 Historic Food Markets

### Grand Bazaar (Kapalı Çarşı)
• World's oldest covered market
• Traditional Turkish delight shops
• Spice vendors and coffee roasters
• Historic food stalls and cafes
• Local artisanal products

### Spice Bazaar (Mısır Çarşısı)
• Aromatic spices and herbs
• Turkish delight varieties
• Local honey and nuts
• Traditional coffee and tea
• Authentic food souvenirs

### Kadıköy Market
• Fresh seafood section
• Local produce stands
• Traditional meyhanes
• Street food vendors
• Regional specialties

## 🍖 Must-Try Turkish Dishes

### 1. Traditional Kebabs
Various styles including:
• Adana kebab (spicy lamb)
• İskender kebab (yogurt-topped)
• Şiş kebab (grilled cubes)
• Döner kebab (rotating meat)
• Pide kebab (Turkish pizza)

### 2. Meze Selection
Essential appetizers:
• Hummus
• Babaganoush
• Haydari (yogurt dip)
• Patlıcan salatası (eggplant)
• Çiğ köfte (raw meatballs)

### 3. Street Food Favorites
Popular quick bites:
• Simit (sesame bread rings)
• Lahmacun (thin meat pizzas)
• Kokoreç (grilled offal)
• Midye dolma (stuffed mussels)
• Kumpir (loaded potatoes)

## ☕ Turkish Coffee Culture

### Traditional Coffee Houses
• Historic establishments
• Fortune telling rituals
• Traditional brewing methods
• Social gathering spots
• Cultural heritage sites

### Modern Cafes
• Third-wave coffee shops
• Fusion Turkish coffee
• Contemporary atmosphere
• Local coffee roasters
• Innovative presentations`,
    image: 'https://images.unsplash.com/photo-1527838832700-5059252407fa',
    category: 'Travel & Food',
    date: 'March 10, 2024',
    author: 'Mehmet Yılmaz',
    readTime: '15 min read',
  },
  {
    id: 3,
    title: 'Authentic Pasta Making in Florence: A Hands-on Culinary Experience',
    excerpt: 'Learn the secrets of traditional Italian pasta making from Florence\'s expert chefs, from fresh ingredients to perfect techniques',
    content: `# Authentic Pasta Making in Florence: A Hands-on Culinary Experience

Discover the art of traditional Italian pasta making in the heart of Tuscany. This comprehensive guide takes you through the essential techniques, ingredients, and cultural significance of pasta making in Florence.

## 🌾 Essential Ingredients

### Flour Selection
• Type 00 flour
• Semolina flour
• Ancient grain varieties
• Local Tuscan flours
• Organic options

### Fresh Ingredients
• Farm-fresh eggs
• Extra virgin olive oil
• Local herbs
• Seasonal vegetables
• Regional cheeses

## 👩‍🍳 Basic Techniques

### Dough Making
• Proper flour ratio
• Egg incorporation
• Kneading techniques
• Resting time
• Temperature control

### Shaping Methods
• Rolling by hand
• Using a pasta machine
• Traditional shapes
• Regional variations
• Common mistakes to avoid

## 🍝 Classic Pasta Types

### Fresh Pasta Varieties
1. Tagliatelle
2. Pappardelle
3. Ravioli
4. Tortellini
5. Fettuccine

### Regional Specialties
• Pici (hand-rolled spaghetti)
• Crespelle (Florentine crepes)
• Gnudi (ricotta dumplings)
• Strozzapreti
• Maltagliati

## 🥫 Traditional Sauces

### Classic Combinations
• Ragù alla Bolognese
• Pomodoro
• Butter and sage
• Wild boar sauce
• Pesto alla Genovese

### Seasonal Variations
• Spring: Fresh herbs and vegetables
• Summer: Light tomato-based
• Fall: Mushroom and truffle
• Winter: Rich meat sauces

## 🏺 Tools & Equipment

### Essential Tools
• Wooden board
• Rolling pin
• Pasta machine
• Pasta wheel
• Drying rack

### Modern Additions
• Stand mixer
• Pasta extruder
• Ravioli mold
• Pasta stamps
• Storage containers

## 📚 Learning Resources

### Cooking Schools
• Traditional academies
• Private workshops
• Market-to-table classes
• Family-run schools
• Professional courses

### Local Experiences
• Home cooking classes
• Market tours
• Farm visits
• Wine pairing sessions
• Cultural workshops

## 💡 Pro Tips

### Dough Making
• Room temperature ingredients
• Proper kneading technique
• Adequate resting time
• Correct hydration
• Quality control

### Storage & Serving
• Proper drying methods
• Storage conditions
• Cooking times
• Sauce pairing
• Presentation techniques

Remember that pasta making is both an art and a science - patience and practice are key to mastering these traditional techniques. Each region of Italy has its own unique pasta traditions, and Florence offers some of the most authentic learning experiences available.`,
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    category: 'Culinary Workshop',
    date: 'March 5, 2024',
    author: 'Isabella Romano',
    readTime: '10 min read',
  },
  {
    id: 4,
    title: 'Ultimate Tokyo Ramen Guide: From Traditional to Modern Bowls',
    excerpt: 'Navigate Tokyo\'s diverse ramen scene with our expert guide to the best shops, styles, and secret spots for authentic Japanese ramen',
    content: `# Ultimate Tokyo Ramen Guide: From Traditional to Modern Bowls

Dive into Tokyo's incredible ramen culture with our comprehensive guide to the city's best ramen shops, different styles, and insider tips for finding your perfect bowl.

## 🍜 Ramen Styles

### Shoyu (Soy Sauce)
• Clear brown broth
• Traditional flavor base
• Wheat noodles
• Chashu pork
• Marinated bamboo shoots

### Miso
• Rich, hearty broth
• Fermented soybean paste
• Thick noodles
• Corn and butter
• Spicy variations

### Tonkotsu (Pork Bone)
• Creamy white broth
• Long-simmered pork bones
• Thin noodles
• Soft-boiled egg
• Black garlic oil

### Shio (Salt)
• Light, clear broth
• Delicate flavors
• Medium noodles
• Simple toppings
• Seafood variations

## 📍 Top Ramen Districts

### Shinjuku
• Famous chains
• Hidden local spots
• Late-night options
• Modern innovations
• Tourist-friendly

### Shibuya
• Trendy shops
• Fusion styles
• Instagram-worthy bowls
• Young crowd
• International options

### Nakano
• Traditional shops
• Local favorites
• Affordable prices
• Authentic atmosphere
• Off-tourist-track spots

## 🥢 Ordering Guide

### Vending Machine Tips
• Look for pictures
• Common buttons
• Extra toppings
• Customization options
• Payment methods

### Customization Terms
• Noodle firmness
• Broth richness
• Oil amount
• Spice level
• Extra toppings

## ⏰ Best Times to Visit

### Peak Hours
• Lunch rush (11:30-14:00)
• Dinner time (18:00-20:00)
• Late night (22:00-02:00)
• Weekend afternoons
• Holiday periods

### Off-Peak Times
• Early morning
• Mid-afternoon
• Early dinner
• Weekday mornings
• Rainy days

## 💡 Pro Tips

### Etiquette
• Slurping is good
• Use both spoon and chopsticks
• Eat while hot
• Don't share bowls
• Quick eating is normal

### Photography
• Ask before taking photos
• Be quick and discrete
• Avoid flash
• Respect other diners
• Best lighting spots

## 🗺️ Famous Shops

### Traditional Masters
1. Nakiryu (Michelin-starred)
2. Tsuta (Michelin-starred)
3. Fuunji (Tsukemen specialist)
4. Rokurinsha (Tokyo Station)
5. Menya Musashi (Multiple locations)

### Modern Innovators
1. Afuri (Yuzu ramen)
2. Mensho (Creative styles)
3. Soranoiro (Vegetable ramen)
4. Kikanbo (Spicy miso)
5. Tsurutontan (Udon fusion)

Remember that each ramen shop has its own unique style and specialties. Don't be afraid to try different variations and find your personal favorite among Tokyo's countless options.`,
    image: 'https://images.unsplash.com/photo-1557872943-16a5ac26437e',
    category: 'Food Guide',
    date: 'March 1, 2024',
    author: 'Kenji Tanaka',
    readTime: '12 min read',
  },
  {
    id: 5,
    title: 'Wine Tasting in Bordeaux: A Journey Through France\'s Premier Wine Region',
    excerpt: 'Experience the finest wines of Bordeaux with our comprehensive guide to top châteaux, tasting techniques, and wine pairing tips',
    content: `# Wine Tasting in Bordeaux: A Journey Through France's Premier Wine Region

Embark on a sophisticated wine journey through Bordeaux, France's most prestigious wine region. Learn about the different appellations, tasting techniques, and how to make the most of your wine tourism experience.

## 🍷 Wine Regions

### Left Bank
• Médoc estates
• Graves region
• Margaux
• Saint-Julien
• Pauillac

### Right Bank
• Saint-Émilion
• Pomerol
• Fronsac
• Côtes de Bordeaux
• Satellite appellations

### Key Grapes
• Cabernet Sauvignon
• Merlot
• Cabernet Franc
• Sauvignon Blanc
• Sémillon

## 🏰 Château Visits

### Famous Estates
• First Growth châteaux
• Historic properties
• Modern wineries
• Family estates
• Boutique producers

### Visit Planning
• Advance booking required
• Tour options
• Tasting packages
• Transportation
• Seasonal considerations

## 🍇 Tasting Techniques

### Visual Examination
• Color intensity
• Clarity
• Viscosity
• Age indicators
• Wine legs

### Aroma Analysis
• Primary aromas
• Secondary aromas
• Tertiary aromas
• Bouquet development
• Common descriptors

### Palate Evaluation
• Structure
• Balance
• Length
• Complexity
• Quality assessment

## 🧀 Food Pairings

### Classic Combinations
• Regional cheeses
• Local meats
• Seafood
• Desserts
• Seasonal produce

### Pairing Principles
• Balance of flavors
• Weight matching
• Acid harmony
• Tannin considerations
• Temperature service

## 📅 Best Times to Visit

### Spring (March-May)
• Bud break
• Mild weather
• En primeur week
• Less crowded
• Beautiful scenery

### Summer (June-August)
• Veraison period
• Warm weather
• Outdoor activities
• Festival season
• Long daylight hours

### Fall (September-October)
• Harvest season
• Perfect weather
• Special events
• Wine festivals
• Autumn colors

## 💡 Visitor Tips

### Transportation
• Hire a driver
• Join organized tours
• Public transport
• Bike rentals
• Walking routes

### Accommodation
• Wine châteaux stays
• Boutique hotels
• City center options
• Country houses
• Wine-themed properties

## 📚 Wine Education

### Basic Knowledge
• Wine terminology
• Tasting notes
• Regional styles
• Wine laws
• Storage tips

### Advanced Topics
• Terroir influence
• Vintage variations
• Winemaking techniques
• Aging potential
• Investment considerations

Remember that Bordeaux wine tasting is about quality over quantity. Take time to appreciate each wine's unique characteristics and the rich history behind every château you visit.`,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb',
    category: 'Wine & Culture',
    date: 'February 28, 2024',
    author: 'Pierre Dubois',
    readTime: '15 min read',
  },
  {
    id: 6,
    title: 'Mexican Street Tacos: The Ultimate Guide to Authentic Flavors',
    excerpt: 'Master the art of Mexican street tacos with our detailed guide to traditional recipes, best ingredients, and top taco spots across Mexico',
    content: `# Mexican Street Tacos: The Ultimate Guide to Authentic Flavors

Discover the rich world of Mexican street tacos, from traditional preparations to regional variations. Learn about the best ingredients, cooking techniques, and where to find the most authentic tacos across Mexico.

## 🌮 Classic Taco Varieties

### Meat Options
• Al Pastor (marinated pork)
• Carne Asada (grilled beef)
• Pollo (seasoned chicken)
• Chorizo (spiced sausage)
• Barbacoa (slow-cooked meat)

### Seafood Selections
• Pescado (fish)
• Camarón (shrimp)
• Pulpo (octopus)
• Atún (tuna)
• Marlín (marlin)

### Vegetarian Choices
• Hongos (mushrooms)
• Nopales (cactus)
• Papas (potatoes)
• Rajas (poblano strips)
• Frijoles (beans)

## 🌶️ Essential Salsas

### Red Salsas
• Salsa Roja
• Salsa Taquera
• Chile de Árbol
• Salsa Borracha
• Chipotle

### Green Salsas
• Salsa Verde
• Avocado Salsa
• Jalapeño Crema
• Salsa Criolla
• Tomatillo

## 🥑 Traditional Garnishes

### Fresh Toppings
• Cilantro
• Onions
• Lime wedges
• Radishes
• Cucumber

### Prepared Additions
• Guacamole
• Pickled vegetables
• Grilled onions
• Roasted jalapeños
• Queso fresco

## 📍 Regional Specialties

### Mexico City
• Suadero
• Campechanos
• Canasta
• De Guisado
• Al Pastor

### Baja California
• Fish Tacos
• Shrimp Tacos
• Marlin Tacos
• Smoked Tuna
• Lobster

### Yucatan
• Cochinita Pibil
• Poc Chuc
• Relleno Negro
• Escabeche
• Tikin Xic

## 🌽 Tortilla Basics

### Corn Varieties
• White corn
• Yellow corn
• Blue corn
• Red corn
• Ancient varieties

### Preparation Methods
• Hand-pressed
• Machine-made
• Thickness variations
• Double tortilla
• Toasting techniques

## 💡 Taco Etiquette

### Eating Tips
• Use hands
• Tilt your head
• Bite size
• Salsa application
• Lime squeezing

### Ordering Guide
• Common terms
• Portion sizes
• Customization
• Payment customs
• Tipping etiquette

## ⏰ Best Times to Eat

### Morning
• Breakfast tacos
• Market stalls
• Fresh ingredients
• Less crowded
• Cool temperatures

### Afternoon
• Lunch rush
• Street vendors
• Full selection
• Social atmosphere
• Best variety

### Evening
• Late night spots
• Party crowds
• Special preparations
• Night markets
• Street festivals

Remember that authentic Mexican tacos are simple, fresh, and flavorful. The key is quality ingredients and proper preparation techniques rather than excessive toppings or modifications.`,
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47',
    category: 'Food Guide',
    date: 'February 25, 2024',
    author: 'Carlos Ruiz',
    readTime: '12 min read',
  }
] 