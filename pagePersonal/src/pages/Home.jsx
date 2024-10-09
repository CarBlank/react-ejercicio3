import React from "react";

const Home = ({ dishes }) => {
  return (
    <>
      <h1>Home</h1>
      <ul className="dish-list">
        {dishes.map((dish) => (
          <li key={dish.id} className="dish-card">
            <h3>{dish.name}</h3>
            <p>{dish.description}</p>
            <p>Price: ${dish.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
