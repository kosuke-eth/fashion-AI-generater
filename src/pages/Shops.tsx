import { Navbar } from "@/components/Navbar";

interface Shop {
  id: number;
  name: string;
  image: string;
  description: string;
  rating: number;
}

const Shops = () => {
  const shops: Shop[] = [
    {
      id: 1,
      name: "Fashion Forward",
      image: "https://placehold.co/400x300",
      description: "Contemporary fashion with a sustainable approach",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Style Studio",
      image: "https://placehold.co/400x300",
      description: "Curated collection of designer pieces",
      rating: 4.6,
    },
    {
      id: 3,
      name: "Trendy Threads",
      image: "https://placehold.co/400x300",
      description: "Affordable fashion for everyone",
      rating: 4.5,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          Recommended Shops
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {shops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={shop.image}
                alt={shop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{shop.name}</h3>
                <p className="text-gray-600 mb-4">{shop.description}</p>
                <div className="flex items-center">
                  <span className="text-accent font-semibold">{shop.rating}</span>
                  <span className="text-yellow-400 ml-1">★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Shops;