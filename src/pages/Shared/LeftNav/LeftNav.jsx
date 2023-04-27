import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4 className="mb-5">All Category</h4>
      <div>
        {categories.map((category) => (
          <div key={category.id} className='mb-4'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-secondary bg-opacity-25 p-3 text-black rounder text-decoration-none rounded" : "text-black text-decoration-none"
              }
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
