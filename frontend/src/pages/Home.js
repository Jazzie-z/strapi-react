import React from "react";
import { Link } from "react-router-dom";
// import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import { useQuery } from "@apollo/client";
import { BOOKS } from "../schemas/book";
const Home = () => {
  // const { data, error, loading } = useFetch("http://localhost:1337/api/books");
  const { data, error, loading } = useQuery(BOOKS);
  if (loading) return <Loader />;
  if (error) return <p>Error occured</p>;
  console.log(data);
  return (
    <div>
      {data.books.data.map(({ attributes: book, id }) => (
        <div key={id} className="card">
          <div className="author">{book.author}</div>
          <h2>{book.title}</h2>
          {book.categories.data.map(({ attributes }) => (
            <small key={attributes.name}>{attributes.name}</small>
          ))}
          <p>{book.description}</p>
          <Link to={`/details/${id}`}>Read more</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
