import { useMemo, useRef, useState } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";

type MegaData = {
  popular: string[];
  more: string[];
  promo: { title: string; subtitle: string; cta: string; imgUrl: string };
};

const DATA: Record<string, MegaData> = {
  Sports: {
    popular: [
      "Cycling",
      "Fitness & Yoga",
      "Fishing",
      "Camping",
      "Team sports",
      "Scooters",
    ],
    more: [
      "Watersports",
      "Winter sports",
      "Box & MMA",
      "Swimming",
      "Running watches",
      "Deals",
    ],
    promo: {
      title: "Sports & leisure",
      subtitle: "Check the latest offers",
      cta: "Shop now",
      imgUrl:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=60",
    },
  },

  Electronics: {
    popular: ["Laptops", "Phones", "Audio", "Gaming", "Cameras"],
    more: ["Smart home", "Drones", "Wearables", "Accessories", "Deals"],
    promo: {
      title: "Electronics",
      subtitle: "Top picks this week",
      cta: "Browse",
      imgUrl:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=60",
    },
  },

  Fashion: {
    popular: ["Men", "Women", "Shoes", "Watches", "Bags"],
    more: ["Streetwear", "Luxury", "Vintage", "Accessories", "Sales"],
    promo: {
      title: "Fashion",
      subtitle: "New season styles",
      cta: "Discover",
      imgUrl:
        "https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=1200&q=60",
    },
  },

  Home: {
    popular: ["Furniture", "Kitchen", "Lighting", "Decor", "Garden"],
    more: ["Storage", "DIY", "Tools", "Smart home", "Deals"],
    promo: {
      title: "Home & Garden",
      subtitle: "Upgrade your space",
      cta: "Explore",
      imgUrl:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=60",
    },
  },

  Motors: {
    popular: ["Car parts", "Motorcycles", "Accessories", "Tools"],
    more: ["Car care", "Tyres", "Electronics", "Garage", "Deals"],
    promo: {
      title: "Motors",
      subtitle: "Everything for your ride",
      cta: "Shop now",
      imgUrl:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60",
    },
  },

  Collectibles: {
    popular: ["Trading cards", "Coins", "Comics", "Memorabilia"],
    more: ["Art", "Antiques", "Toys", "Limited editions"],
    promo: {
      title: "Collectibles & Art",
      subtitle: "Rare finds await",
      cta: "Browse",
      imgUrl:
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=60",
    },
  },

  Health: {
    popular: ["Skincare", "Supplements", "Fitness gear"],
    more: ["Personal care", "Medical devices", "Wellness", "Deals"],
    promo: {
      title: "Health & Beauty",
      subtitle: "Feel your best",
      cta: "Shop now",
      imgUrl:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=60",
    },
  },
};


function MegaPanel({
  data,
  onEnter,
  onLeave,
}: {
  data: MegaData;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div onMouseEnter={onEnter} onMouseLeave={onLeave} className="w-[980px] rounded-2xl bg-white shadow-2xl p-6">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <div className="font-semibold text-gray-900 mb-3">Most popular categories</div>
          <ul className="space-y-2">
            {data.popular.map((x) => (
              <li key={x} className="text-gray-700 hover:text-gray-900 cursor-pointer">
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-3">
          <div className="font-semibold text-gray-900 mb-3">More categories</div>
          <ul className="space-y-2">
            {data.more.map((x) => (
              <li key={x} className="text-gray-700 hover:text-gray-900 cursor-pointer">
                {x}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6">
          <div className="relative overflow-hidden rounded-2xl h-[240px]">
            <img src={data.promo.imgUrl} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative p-6 text-white">
              <div className="text-3xl font-bold leading-tight">{data.promo.title}</div>
              <div className="mt-2 text-lg opacity-90">{data.promo.subtitle}</div>
              <button className="mt-6 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100">
                {data.promo.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopNavMegaMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<keyof typeof DATA>("Category1");
  const closeTimer = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = window.setTimeout(() => setOpen(false), 150);
  };

  const onEnterCategory = (key: keyof typeof DATA) => {
    clearCloseTimer();
    setActive(key);
    setOpen(true);
  };

  const overlay = useMemo(
    () => (
      <MegaPanel
        data={DATA[active]}
        onEnter={() => {
          clearCloseTimer();
          setOpen(true);
        }}
        onLeave={scheduleClose}
      />
    ),
    [active]
  );

  return (
    <div className="bg-white border-b pb-10">
      {/* wrapper = hover area for BOTH nav + dropdown */}
      <div
        ref={wrapperRef}
        className="max-w-6xl mx-auto px-4 py-3 text-gray-700"
        onMouseEnter={clearCloseTimer}
        onMouseLeave={scheduleClose}
      >
        <Dropdown
          open={open}
          dropdownRender={() => overlay}
          placement="bottomLeft"
          overlayStyle={{ paddingTop: 10 }}
          // KEY: render popup inside wrapper so hovering it doesn't "leave" the area
          getPopupContainer={() => wrapperRef.current ?? document.body}
        >
          <div className="flex w-full justify-between">
            {Object.keys(DATA).map((key) => (
              <div
                key={key}
                onMouseEnter={() => onEnterCategory(key as keyof typeof DATA)}
                className={`cursor-pointer hover:text-black ${
                  active === key ? "text-black font-semibold" : ""
                }`}
              >
                {key}
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
