import React from "react";
import Dashboard from "../dashboard/Dashboard";
import { Navigate, Route, Routes } from "react-router-dom";
import Places from "../main/Places";
import Explain from "../main/Explain";
import Layout from "../layout/Layout";
import Book from "../main/Book";
import Footer from "../layout/components/Footer";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/">
          <Route path="dashboard" element={<Dashboard />} />
          <Route
            path=""
            element={<Navigate to="/dashboard" replace={true} />}
          />
          <Route
            path="*"
            element={<Navigate to="/dashboard" replace={true} />}
          />
        </Route>
        <Route>
          <Route path="places" element={<Places />} />
          <Route path="explain" element={<Explain />} />
          <Route path="book" element={<Book />} />
          <Route path="footer" element={<Footer />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
      </Route>
    </Routes>
  );
};

export default Routing;
