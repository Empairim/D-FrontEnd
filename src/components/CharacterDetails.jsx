import { useEffect, useState } from "react";
import { getCharacter, deleteCharacter } from "../services/SailorRoutes";
import { useParams } from "react-router-dom";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacter(id);
      setCharacter(data);
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    await deleteCharacter(id);
    // Redirect to the character grid page
    window.location.href = "/";
  };

  if (!character) {
    return <div>Loading...</div>;
  }

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
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img
            src={character.image}
            alt={character.name}
            className="w-max h-max object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-lg text-center font-medium">
              {character.englishName}
            </h2>
            <p
              className={`${getClassName(
                character._id
              )} text-center font-cursive`}
            >
              {character.moon}
            </p>
            <div className=" flex justify-evenly">
              <button onClick={handleDelete}>Delete</button>
              <button>Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CharacterDetails;
