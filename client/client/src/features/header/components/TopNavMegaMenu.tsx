import { useMemo, useRef, useState, useEffect } from "react";
import { Dropdown } from "antd";
import type { MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../store/category";

export type CategoryMenuItem = {
  id: number;
  name: string;
  subcategories: { id: number; name: string; categoryId: number }[];
};

const PROMO = {
  subtitle: "Top picks this week",
  cta: "Browse",
  imgUrl:
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=60",
};

function splitSubcategories(subcategories: CategoryMenuItem["subcategories"]) {
  const mid = Math.ceil(subcategories.length / 2);
  return {
    left: subcategories.slice(0, mid),
    right: subcategories.slice(mid),
  };
}

function MegaPanel({
  category,
  onEnter,
  onLeave,
}: {
  category: CategoryMenuItem;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const { left, right } = splitSubcategories(category.subcategories);

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="w-[980px] rounded-2xl bg-white shadow-2xl p-6"
    >
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <div className="font-semibold text-gray-900 mb-3">
            Most popular categories
          </div>
          <ul className="space-y-2">
            {left.map((x) => (
              <li
                key={x.id}
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                <NavLink to="/products">{x.name}</NavLink>
                
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-3">
          <div className="font-semibold text-gray-900 mb-3">
            More categories
          </div>
          <ul className="space-y-2">
            {right.map((x) => (
              <li
                key={x.id}
                className="text-gray-700 hover:text-gray-900 cursor-pointer"
              >
                {x.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-6">
          <div className="relative overflow-hidden rounded-2xl h-[240px]">
            <img
              src={PROMO.imgUrl}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative p-6 text-white">
              <div className="text-3xl font-bold leading-tight">
                {category.name}
              </div>
              <div className="mt-2 text-lg opacity-90">{PROMO.subtitle}</div>
              <button className="mt-6 bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100">
                {PROMO.cta}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TopNavMegaMenu({
  categories,
}: {
  categories: CategoryMenuItem[];
}) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<number | null>(null);
  const dispatch = useDispatch();
  const closeTimer = useRef<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (categories.length > 0 && active === null) {
      setActive(categories[0].id);
    }
  }, [categories, active]);

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

  const onEnterCategory = (id: number) => {
    clearCloseTimer();
    setActive(id);
    setOpen(true);
  };

  const activeCategory = useMemo(
    () => categories.find((c) => c.id === active) ?? null,
    [categories, active],
  );

  const overlay = useMemo(
    () =>
      activeCategory ? (
        <MegaPanel
          category={activeCategory}
          onEnter={() => {
            clearCloseTimer();
            setOpen(true);
          }}
          onLeave={scheduleClose}
        />
      ) : null,
    [activeCategory],
  );

  return (
    <div className="bg-white border-b pb-10">
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
          getPopupContainer={() => wrapperRef.current ?? document.body}
        >
          <div className="flex w-full justify-between">
            {categories.map((category) => (
              <div
                key={category.id}
                onMouseEnter={() => onEnterCategory(category.id)}
                className={`cursor-pointer hover:text-black ${
                  active === category.id ? "text-black font-semibold" : ""
                }`}
              >
                <NavLink
                  to="/products"
                  onClick={() => dispatch(categoryActions.setCategory(category.id))}
                >
                  {category.name}
                </NavLink>
              </div>
            ))}
          </div>
        </Dropdown>
      </div>
    </div>
  );
}
