import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  );
};

export default CharacterList;
