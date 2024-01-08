import React from "react";
import { useParams } from "react-router-dom";

const OneArticle = () => {
  const { id } = useParams();

  // Fetch and display details of the article with the specified ID

  return (
    <div>
      <h2>Article Details</h2>
      {/* Display details of the article */}
      <p>Article ID: {id}</p>
      {/* Add more details */}
    </div>
  );
};

export default OneArticle;
