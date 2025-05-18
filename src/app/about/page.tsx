export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-playfair mb-8">About Global Food Prints</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg mb-6">
          Welcome to Global Food Prints, where we explore the world&apos;s most fascinating cuisines and travel destinations. Our mission is to share authentic food experiences and cultural insights from around the globe.
        </p>
        
        <h2 className="text-2xl font-playfair mb-4">Our Story</h2>
        <p className="mb-6">
          Global Food Prints was born from a passion for food, travel, and cultural exploration. We believe that food is the universal language that connects people across borders and cultures.
        </p>
        
        <h2 className="text-2xl font-playfair mb-4">What We Do</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Share authentic food experiences from around the world</li>
          <li>Provide detailed travel guides and cultural insights</li>
          <li>Connect food lovers with local culinary traditions</li>
          <li>Showcase unique destinations and hidden gems</li>
        </ul>
        
        <h2 className="text-2xl font-playfair mb-4">Our Values</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Authenticity</h3>
            <p>We believe in presenting genuine, unfiltered experiences that reflect the true essence of each destination.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Cultural Respect</h3>
            <p>We approach every culture with respect and aim to promote understanding through food and travel.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
            <p>We promote responsible travel and sustainable food practices in all our content.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p>We foster a community of food and travel enthusiasts who share our passion for global cuisine.</p>
          </div>
        </div>
        
        <h2 className="text-2xl font-playfair mb-4">Join Our Journey</h2>
        <p className="mb-6">
          Whether you&apos;re a seasoned traveler or an armchair food enthusiast, we invite you to join us on this delicious adventure around the world. Follow our blog for regular updates, travel tips, and mouthwatering stories.
        </p>
      </div>
    </div>
  )
} 