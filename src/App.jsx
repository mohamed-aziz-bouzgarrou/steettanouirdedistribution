import React from "react";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
      <Routes>
            <Route path="/" element={<h1>HOME ROUTE</h1>} />
                  <Route path="/products" element={<h1>PRODUCTS ROUTE</h1>} />
                        <Route path="*" element={<h1>NOT FOUND ROUTE</h1>} />
                            </Routes>
                              );
                              }