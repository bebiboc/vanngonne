import { useState } from "react";
import { Coffee, Croissant, UtensilsCrossed } from "lucide-react";
import StoreCard from "./StoreCard";

const categories = [
  { id: "all", label: "All", icon: null },
  { id: "coffee", label: "Coffee Shops", icon: Coffee },
  { id: "bakery", label: "Bakeries", icon: Croissant },
  { id: "restaurant", label: "Hotel Restaurants", icon: UtensilsCrossed },
];

const stores = [
  {
    id: "1",
    name: "Le Petit Café",
    category: "Coffee Shop",
    categoryId: "coffee",
    emoji: "☕",
    image: "",
    rating: 4.8,
    distance: "0.3 km",
    pickupTime: "6:00 PM - 7:00 PM",
    originalPrice: 14.99,
    discountPrice: 4.99,
    itemsLeft: 3,
  },
  {
    id: "2",
    name: "Sweet Dreams Bakery",
    category: "Bakery",
    categoryId: "bakery",
    emoji: "🥐",
    image: "",
    rating: 4.9,
    distance: "0.5 km",
    pickupTime: "5:30 PM - 6:30 PM",
    originalPrice: 18.00,
    discountPrice: 5.99,
    itemsLeft: 5,
  },
  {
    id: "3",
    name: "Grand Hotel Kitchen",
    category: "Hotel Restaurant",
    categoryId: "restaurant",
    emoji: "🍽️",
    image: "",
    rating: 4.7,
    distance: "0.8 km",
    pickupTime: "9:00 PM - 10:00 PM",
    originalPrice: 28.00,
    discountPrice: 8.99,
    itemsLeft: 2,
  },
  {
    id: "4",
    name: "Morning Glory",
    category: "Coffee Shop",
    categoryId: "coffee",
    emoji: "🧁",
    image: "",
    rating: 4.6,
    distance: "0.4 km",
    pickupTime: "4:00 PM - 5:00 PM",
    originalPrice: 12.00,
    discountPrice: 3.99,
    itemsLeft: 7,
  },
  {
    id: "5",
    name: "The French Corner",
    category: "Bakery",
    categoryId: "bakery",
    emoji: "🍰",
    image: "",
    rating: 4.9,
    distance: "1.2 km",
    pickupTime: "7:00 PM - 8:00 PM",
    originalPrice: 22.00,
    discountPrice: 6.99,
    itemsLeft: 4,
  },
  {
    id: "6",
    name: "Riverside Inn Restaurant",
    category: "Hotel Restaurant",
    categoryId: "restaurant",
    emoji: "🍱",
    image: "",
    rating: 4.5,
    distance: "1.5 km",
    pickupTime: "8:30 PM - 9:30 PM",
    originalPrice: 35.00,
    discountPrice: 9.99,
    itemsLeft: 3,
  },
];

const BrowseStores = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStores = activeCategory === "all"
    ? stores
    : stores.filter((store) => store.categoryId === activeCategory);

  return (
    <section id="browse" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Available Now
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse surprise bags near you
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover amazing deals from local businesses in your area
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Store grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseStores;
