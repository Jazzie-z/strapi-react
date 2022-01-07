import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { useQuery } from "@apollo/client";
import { BOOK_BY_ID } from "../schemas/book";

const BookDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(BOOK_BY_ID, {
    variables: { id },
  });
  if (loading) return <Loader />;
  if (error) return <p>Error occured</p>;
  const book = data.book.data.attributes;
  return (
    <div className="card">
      <div className="author">{book.author}</div>
      <h2>{book.title}</h2>
      {book.categories.data.map(({ attributes }) => (
        <small key={attributes.name}>{attributes.name}</small>
      ))}
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetails;
