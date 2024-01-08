import React, {useEffect,useState} from "react";
import { Link } from "react-router-dom";
import ArticleDashboard from "./ArticleDashboard";
import axios from "axios";
import { response } from "express";

const AllArticles = () => {
        const { articals, setArticals } = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch and display all articles
  // Each card should have a "View More" button to redirect to OneArticle page
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/artical/view-all`)
      .then((response) => {
        setArticals(response.data);
        setIsLoading(false);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []); // Corrected placement of the dependency array

  return (
    <div>
      <h2>All Articles</h2>
   
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {articals.map((article) => (
              <tr key={article.id}>
                <td>{article.id}</td>
                <td>{article.title}</td>
                <td>
                  <Link to={`/article/${article.id}`}>Show More</Link>
                  {/* <button onClick={() => onDelete(article.id)}>Delete</button> */}
                  {/* <button onClick={() => onUpdate(article.id)}>Update</button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/add-article">Add Article</Link>
   
      <Link to="/article/1">View More</Link>
      {/* Add more articles */}
    </div>
  );
};

export default AllArticles;
