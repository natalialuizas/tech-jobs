import React from "react";
import SearchBar from "../../molecules/SearchBar/SearchBar";
import Card from '../../molecules/Card/Card'
import "./HomeContent.css";

const HomeContent = ({
  texto,
  onClick,
  type,
  placeholder,
  value,
  onChange,
  data
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
      {data ? (
       data.map(item => {
         let { logo,
          company,
          position,
          postedAt,
          contract,
          location,
          languages,
          tools} = item;

         return(
          <Card
          logo={logo}
          company={company}
          position={position}
          postedAt={postedAt}
          contract={contract}
          location={location}
          languages={languages}
          tools={tools}
          />
         )
       }))
       : (
       <h2>Nem uma vaga encontrada</h2>

       )}
      </section>
    </main>
  );
};

export default HomeContent;
