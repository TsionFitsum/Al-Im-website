import React from "react";
import "../../App.css"; // Import Tailwind styles

function Manufacturing() {
  return (
    <div className="font-sans bg-gray-50">
      {/* Navbar */}
      <nav className="bg-green-700 text-white sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <a href="#home" className="text-2xl font-bold">
            Our Products
          </a>
          <ul className="flex space-x-6">
            <li>
              <a href="#edible-oil" className="hover:text-yellow-300 transition">
                Edible Oil
              </a>
            </li>
            <li>
              <a href="#wezam" className="hover:text-yellow-300 transition">
                Wezam
              </a>
            </li>
            <li>
              <a href="#zala" className="hover:text-yellow-300 transition">
                Zala
              </a>
            </li>
            <li>
              <a
                href="#animal-health"
                className="hover:text-yellow-300 transition"
              >
                Animal Health
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gray-100 text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to Our Products Page
          </h1>
          <p className="text-lg text-gray-600">
            Explore our diverse range of high-quality products that cater to
            your needs.
          </p>
        </div>
      </section>

      {/* Edible Oil Section */}
      <Section
        id="edible-oil"
        title="Edible Oil"
        description="Our edible oils are processed with care to ensure the highest quality and nutritional value."
        items={[
          { name: "Sunflower Oil", description: "Rich in Vitamin E and ideal for healthy cooking." },
          { name: "Palm Oil", description: "Perfect for frying with a high smoke point." },
          { name: "Soybean Oil", description: "A versatile oil for everyday cooking and baking." },
        ]}
      />

      {/* Wezam (Coffee) Section */}
      <Section
        id="wezam"
        title="Wezam (Coffee)"
        description="Experience the rich aroma and exceptional taste of our premium coffee."
        items={[
          { name: "Arabica Coffee", description: "Delicately flavored and sourced from high-altitude farms." },
          { name: "Robusta Coffee", description: "Strong, bold, and packed with caffeine for energy." },
        ]}
      />

      {/* Zala Section */}
      <Section
        id="zala"
        title="Zala (Oil Seeds, Pulses & Spices)"
        description="We supply premium oil seeds, pulses, and spices to meet your culinary and nutritional needs."
        items={[
          { name: "Sesame Seeds", description: "Rich in healthy fats and antioxidants." },
          { name: "Chickpeas", description: "A protein-packed pulse for various dishes." },
          { name: "Turmeric", description: "A spice known for its flavor and health benefits." },
        ]}
      />

      {/* Animal Health Medicines Section */}
      <Section
        id="animal-health"
        title="Animal Health Medicines"
        description="Ensuring the well-being of animals with our trusted veterinary medicines."
        items={[
          { name: "Antibiotics", description: "Effective solutions to treat animal infections." },
          { name: "Vitamins & Supplements", description: "Boost animal health and productivity." },
          { name: "Vaccines", description: "Prevention is better than cure with our reliable vaccines." },
        ]}
      />

      {/* Footer */}
      <footer className="bg-green-700 text-white text-center py-4">
        <p>© 2024 Our Products. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Section Component
function Section({ id, title, description, items }) {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 border rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Manufacturing;


