import { useEffect, useState } from "react";
import { getCharacters } from "../services/SailorRoutes";
import { Link } from "react-router-dom";
import AddCharacterButton from "./AddCharacter.jsx";

const CharacterGrid = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters();
      setCharacters(data);
    };
    fetchData();
  }, []);

  const getClassName = (id) => {
    switch (id) {
      //character Id hard coded but meh
      case "65440e18f2ef7f176825f84f":
        return "text-blue-500";
      case "65440e18f2ef7f176825f852":
        return "text-orange-500";
      case "65440e18f2ef7f176825f84e":
        return "text-pink-500";
      case "65440e18f2ef7f176825f853":
        return "text-yellow-500";
      case "65440e18f2ef7f176825f854":
        return "text-gray-500";
      case "65440e18f2ef7f176825f850":
        return "text-red-500";
      case "65440e18f2ef7f176825f851":
        return "text-green-500";
      case "65440e18f2ef7f176825f855":
        return "text-cyan-500";
      case "65440e18f2ef7f176825f856":
        return "text-blue-800";
      case "65440e18f2ef7f176825f857":
        return "text-purple-500";
      default:
        return "text-pink-500";
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <AddCharacterButton />
        <div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 flex-wrap"
          style={{ gridTemplateRows: "repeat(3, 1fr)", height: "400px" }}
        >
          {characters.map((character) => (
            <Link
              key={character._id}
              to={`/characters/${character._id}`}
              className="bg-white rounded-lg shadow-md"
              style={{ height: "100%" }}
            >
              <img
                src={character.image}
                alt={character.name}
                className="w-48 h-48 object-cover rounded-t-lg cursor-pointer transform transition-all duration-300 hover:scale-110"
              />
              <div className="p-4">
                <h2
                  className="text-lg text-center font-medium m-3"
                  style={{
                    backgroundImage:
                      "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    font: "italic ",
                  }}
                >
                  {character.englishName}
                </h2>
                <p
                  style={{
                    backgroundImage:
                      "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    font: "italic ",
                  }}
                  className={`${getClassName(
                    character._id
                  )} text-center font-cursive`}
                >
                  {character.moon}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CharacterGrid;
