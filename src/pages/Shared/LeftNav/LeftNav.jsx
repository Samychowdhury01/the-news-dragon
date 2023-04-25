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
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id} className='mb-4'>
            <NavLink
              className={({ isActive }) =>
                isActive ? "bg-secondary bg-opacity-25 p-2 text-black" : "text-black text-decoration-none"
              }
              to={`/category/${category.id}`}
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
