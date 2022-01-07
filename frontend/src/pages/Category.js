import React from "react";
import { CATEGORY_BY_ID } from "../schemas/categories";
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Category = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(CATEGORY_BY_ID, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error occured</p>;
  console.log(data);
  return (
    <div>
      <h2>{data.category.data.attributes.name}</h2>
      {data.category.data.attributes.books.data.map(
        ({ attributes: book, id }) => (
          <div key={id} className="card">
            <div className="author">{book.author}</div>
            <h2>{book.title}</h2>
            {book.categories.data.map(({ attributes }) => (
              <small key={attributes.name}>{attributes.name}</small>
            ))}

            <p>{book.description}</p>
            <Link to={`/details/${id}`}>Read more</Link>
          </div>
        )
      )}
    </div>
  );
};

export default Category;
