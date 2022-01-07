import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Loader from "./Loader";
import { CATEGORIES } from "../schemas/categories";

const Header = () => {
  const { data, error, loading } = useQuery(CATEGORIES);
  if (loading) return <Loader />;
  if (error) return <p>Error occured</p>;
  console.log(data, error);
  return (
    <div className="header">
      <Link to="/">Home </Link>
      <nav className="categories">
        <span>Book by categories</span>
        {data.categories.data.map((category) => (
          <Link key={category.id} to={`/category/${category.id}`}>
            {category.attributes.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Header;
