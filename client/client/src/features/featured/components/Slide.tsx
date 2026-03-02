import { Button } from "antd";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { categoryActions } from "../../../store/category";

export default function Slide({ bgUrl, title, desc, button, link, category_id }: { bgUrl: string, title: string, desc: string, button: string, link: string, category_id: number }) {
  const dispatch = useDispatch();

  return (
    <div style={{
      backgroundImage: `url(${bgUrl})`,
      backgroundSize: 'cover',         
      backgroundPosition: 'right 47%', 
      backgroundRepeat: 'no-repeat'

    }} className="flex items-center justify-between px-12 py-16 min-h-130">
      {/* Left content */}
      <div className="max-w-lg">
        <h2 className="text-4xl font-bold text-white">
          {title}
        </h2>

        <p className="mt-4 text-lg text-white">
          {desc}
        </p>

        <Button className="mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition">
          <NavLink to={link} onClick={() => dispatch(categoryActions.setCategory(category_id))}>
            {button}
          </NavLink>
        </Button>
      </div>

      {/* Right image */}
    </div>
  );
}
