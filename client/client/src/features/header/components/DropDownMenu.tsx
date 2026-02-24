import { Dropdown } from "antd";
import type { CategoryMenuItem } from "../Header";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../store/category";

export default function DropdownMenu({ categories }: { categories: CategoryMenuItem[] }) {
  const dispatch = useDispatch();

  const setSubcategory = (subId : number, catId : number) => {
    dispatch(categoryActions.setCategory(catId));
    dispatch(categoryActions.setSubcategory(subId));
  }

  return (
    <nav className="flex gap-20 items-center justify-center h-18">
      {categories.map((category) => (
        <Dropdown
          key={category.id}
          trigger={["hover"]}
          placement="bottom"
          dropdownRender={() => (
            <div className="bg-white shadow-xl rounded-lg p-6 w-130 flex gap-12">

              <div className="flex-1">
                <h4 className="font-semibold mb-3 text-gray-800">Most popular</h4>
                <ul className="space-y-2 text-gray-700">
                  {category.subcategories.left.map((sub) => (
                    <li
                      key={sub.id}
                      className="hover:text-blue-600 cursor-pointer"
                      onClick={() => setSubcategory(sub.id, category.id)}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold mb-3 text-gray-800">More categories</h4>
                <ul className="space-y-2 text-gray-700">
                  {category.subcategories.right.map((sub) => (
                    <li
                      key={sub.id}
                      className="hover:text-blue-600 cursor-pointer"
                      onClick={() => setSubcategory(sub.id, category.id)}
                    >
                      {sub.name}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}
        >
          <span className="cursor-pointer px-4 py-2 hover:text-blue-600 text-black">
            <NavLink
                  to="/products"
                  onClick={() => dispatch(categoryActions.setCategory(category.id))}
                >
                  {category.name}
                </NavLink>
          </span>
        </Dropdown>
      ))}
    </nav>
  );
}
