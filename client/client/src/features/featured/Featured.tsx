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

export default function Featured() {
  return (
    <div className="text-black bg-white mb-4">
      <Carousel arrows infinite={false} className="">
        <Slide></Slide>
        <Slide></Slide>
        <Slide></Slide>
        <Slide></Slide>
      </Carousel>
    </div>
  );
}
