import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/Navbar";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState("");
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!prompt) {
      toast({
        title: "Error",
        description: "Please enter a description first",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    // Here we would normally call the Flux.1 API
    // For now, we'll simulate a delay and use a placeholder
    setTimeout(() => {
      setGeneratedImage("https://placehold.co/600x400");
      setLoading(false);
      toast({
        title: "Success",
        description: "Your design has been generated!",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-primary">
            Generate Your Fashion Design
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <Textarea
              placeholder="Describe your dream design... (e.g., A summer dress with floral patterns in pastel colors)"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="mb-4 h-32"
            />
            <Button
              onClick={handleGenerate}
              className="w-full bg-primary hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? "Generating..." : "Generate Design"}
            </Button>
          </div>

          {generatedImage && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Your Design</h2>
              <img
                src={generatedImage}
                alt="Generated design"
                className="w-full rounded-lg"
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Index;