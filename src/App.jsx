import { useEffect, useState } from "react";
import "./App.css";

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
  const [personagem, setPersonagem] = useState(null);
  const [id, setId] = useState(1); 

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setPersonagem(data))
      .catch((err) => console.error(err));
  }, [id]); 

  const proximoPersonagem = () => {
    setId((prevId) => prevId + 1);
  };

  return (
    <div className="app">
      <h1 className="title">Personagem de Rick and Morty</h1>

      {personagem && (
        <div className="card">
          <img src={personagem.image} alt={personagem.name} />
          <h2>{personagem.name}</h2>
          <p>Status: {traducoes.status[personagem.status] || personagem.status}</p>
          <p>Espécie: {traducoes.species[personagem.species] || personagem.species}</p>
          <p>Gênero: {traducoes.gender[personagem.gender] || personagem.gender}</p>
          <p>
            Último episódio:{" "}
            <a
              href={personagem.episode[personagem.episode.length - 1]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver episódio
            </a>
          </p>
        </div>
      )}

      <button className="botao" onClick={proximoPersonagem}>
        Próximo Personagem
      </button>
    </div>
  );
}

export default App;
