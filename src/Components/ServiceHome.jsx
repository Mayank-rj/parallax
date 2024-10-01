import React from "react";
import "./ServiceHome.css";

export default function ServiceHome() {
  return (
    <div className="container">
      {/* Sticky Box 1 */}
      <div className="sticky-box yellow-box">
        <h2>SERVICE 1</h2>
      </div>

      {/* Sticky Box 2 */}
      <div className="sticky-box red-box">
        <h2>SERVICE 2</h2>
      </div>

      {/* Sticky Box 3 */}
      <div className="sticky-box blue-box">
        <h2>SERVICE 3</h2>
      </div>
    </div>
  );
}
