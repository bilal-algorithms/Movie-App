import React from "react";
import { useState } from "react";
import Search from "./components/search";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <h1>
            <img src="./hero.png" alt="hero banner" />
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
