import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import "./HomeContent.css";

const HomeContent = ({
  texto,
  onClick,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <main>
      <h1>Tech Jobs</h1>
      <section>
        <div>
          <SearchBar
          texto={texto}
          placeholder={placeholder}
          onClick={onClick}
          type={type}
          onChange={onChange}
          value={value} />
        </div>
        <div>
          <h2>Filtros</h2>
        </div>
      </section>
      <section>
        <h2>Cards</h2>
      </section>
    </main>
  );
};

export default HomeContent;
