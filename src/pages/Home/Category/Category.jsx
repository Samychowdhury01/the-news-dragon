import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";


const Category = () => {
  const categoryNews = useLoaderData();
  const [showAll, setShowAll] = useState(true)
  return (
    <div>
      {
        categoryNews.slice(0, showAll ? 5 : 26).map(news => <NewsCard
        key={news._id}
        news={news}
        ></NewsCard>)
      }

      <div className="text-center">
      <button onClick={()=> setShowAll(false)} className="btn btn-dark"> Show All</button>
      </div>
    </div>
  );
};

export default Category;
