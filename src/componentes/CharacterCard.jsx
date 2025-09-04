import { useEffect, useState } from "react";

const CharacterCard = ({ character }) => {
  const [lastEpisode, setLastEpisode] = useState("");

  useEffect(() => {
    // Pega o último episódio da lista de episódios
    const lastEpUrl = character.episode[character.episode.length - 1];
    fetch(lastEpUrl)
      .then((res) => res.json())
      .then((data) => setLastEpisode(data.name));
  }, [character]);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 w-64">
      <img
        src={character.image}
        alt={character.name}
        className="rounded-xl w-full h-56 object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Espécie: {character.species}</p>
      <p>Gênero: {character.gender}</p>
      <p>Último episódio: {lastEpisode}</p>
    </div>
  );
};

export default CharacterCard;
