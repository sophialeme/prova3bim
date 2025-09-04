import CharacterList from "../components/CharacterList";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-6 bg-green-500 text-white text-2xl font-bold">
        Rick and Morty Characters
      </header>
      <CharacterList />
    </div>
  );
};

export default Home;
