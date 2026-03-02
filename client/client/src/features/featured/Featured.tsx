import { Carousel } from "antd";
import Slide from "./components/Slide";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "60vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export type CarouselItems = {
  bgUrl: string,
  title: string,
  desc: string,
  button: string,
  link : string,
  category_id : number
}

const items: CarouselItems[] = [
  {
    bgUrl : "http://localhost:8080/uploads/main-page/electronics.png",
    title : "Discover electronics!",
    desc : "Find your perfect electronic device.",
    button : "Start now!",
    link : "/products",
    category_id : 1
  },
  {
    bgUrl : "http://localhost:8080/uploads/main-page/gaming.png",
    title : "Start gaming!",
    desc : "Choose from a wide variety of consoles.",
    button : "Start searching!",
    link : "/products",
    category_id : 3
  },
  {
    bgUrl : "http://localhost:8080/uploads/main-page/home-appliances.png",
    title : "Everything for your home!",
    desc : "Get your home to another level with new home appliances",
    button : "Discover more!",
    link : "/products",
    category_id : 2
  }
]

export default function Featured() {
  return (
    <div className="text-black bg-white mb-4 shadow-2xl">
      <Carousel arrows autoplay className="">
        {items.map((item) => <Slide bgUrl={item.bgUrl} title={item.title} desc={item.desc} button={item.button} link={item.link} category_id={item.category_id}/>)}
      </Carousel>
    </div>
  );
}
