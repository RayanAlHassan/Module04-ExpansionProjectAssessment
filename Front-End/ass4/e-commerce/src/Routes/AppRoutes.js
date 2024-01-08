import React from "react";
import { Route, Routes } from "react-router-dom";
import AllArticles from "../pages/AllArticles.js";
import ArticleDashboard from "../pages/ArticleDashboard.js";
import OneArticle from "../pages/OneArticle.js";
import ProtectedRoute from "./ProtectedRoute.js";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AllArticles />} />
      <Route
        path="/dashboard/*"
        element={
          <ProtectedRoute>
            <ArticleDashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/article/:id" element={<OneArticle />} />
    </Routes>
  );
}

export default AppRoutes;
