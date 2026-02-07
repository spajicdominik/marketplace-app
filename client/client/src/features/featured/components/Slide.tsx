import { Button } from "antd";

export default function Slide() {
  return (
    <div className="flex items-center justify-between bg-[url('https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=60')]  px-12 py-16 min-h-130">
      {/* Left content */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-white">
          Build an elite collection
        </h2>

        <p className="mt-4 text-lg text-white">
          Choose your next adventure from thousands of finds.
        </p>

        <Button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
          Start your journey
        </Button>
      </div>

      {/* Right image */}
    </div>
  );
}
