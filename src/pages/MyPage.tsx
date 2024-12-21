import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";

interface Design {
  id: number;
  image: string;
  prompt: string;
  date: string;
}

const MyPage = () => {
  const [designs, setDesigns] = useState<Design[]>([
    {
      id: 1,
      image: "https://placehold.co/300x400",
      prompt: "Summer dress with floral patterns",
      date: "2024-02-20",
    },
    {
      id: 2,
      image: "https://placehold.co/300x400",
      prompt: "Minimalist winter coat",
      date: "2024-02-19",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-primary">
          My Designs
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design) => (
            <div
              key={design.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={design.image}
                alt={design.prompt}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-600 mb-2">{design.prompt}</p>
                <p className="text-sm text-gray-400">{design.date}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MyPage;