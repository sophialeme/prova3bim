import { useEffect, useState } from "react";
import "./App.css";

// Mapa de traduções
const traducoes = {
  status: {
    Alive: "Vivo",
    Dead: "Morto",
    unknown: "Desconhecido",
  },
  gender: {
    Male: "Masculino",
    Female: "Feminino",
    Genderless: "Sem gênero",
    unknown: "Desconhecido",
  },
  species: {
    Human: "Humano",
    Alien: "Alienígena",
    Humanoid: "Humanoide",
    Robot: "Robô",
    Animal: "Animal",
    Mythological: "Mitológico",
    Cronenberg: "Cronenberg",
    Disease: "Doença",
    unknown: "Desconhecido",
  },
};

function App() {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setPersonagens(data.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="app">
      <h1 className="title">Personagens de Rick and Morty</h1>
      <div className="grid">
        {personagens.map((char) => (
          <div key={char.id} className="card">
            <img src={char.image} alt={char.name} />
            <h2>{char.name}</h2>
            <p>Status: {traducoes.status[char.status] || char.status}</p>
            <p>Espécie: {traducoes.species[char.species] || char.species}</p>
            <p>Gênero: {traducoes.gender[char.gender] || char.gender}</p>
            <p>
              Último episódio:{" "}
              <a
                href={char.episode[char.episode.length - 1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver episódio
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
