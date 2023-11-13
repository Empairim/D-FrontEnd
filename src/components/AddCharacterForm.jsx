import { useState } from "react";
import { createcharacter } from "../services/SailorRoutes";

const AddCharacterForm = () => {
  const [characterData, setCharacterData] = useState({
    name: "",
    japaneseName: "",
    englishName: "",
    moon: "",
    image: "",
  });

  const handleChange = (event) => {
    setCharacterData({
      ...characterData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createcharacter(characterData);
      // Redirect to the character grid page after the character is created
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <form onSubmit={handleSubmit}>
        <div
          className="mb-4 bg-pink-500 rounded-md"
          style={{
            backgroundImage:
              "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            font: "italic ",
          }}
        >
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={characterData.name}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div
          className="mb-4 bg-pink-500 rounded-md"
          style={{
            backgroundImage:
              "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            font: "italic ",
          }}
        >
          <label
            htmlFor="japaneseName"
            className="block text-gray-700 font-bold mb-2"
          >
            Japanese Name
          </label>
          <input
            type="text"
            name="japaneseName"
            id="japaneseName"
            value={characterData.japaneseName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div
          className="mb-4 bg-pink-500 rounded-md"
          style={{
            backgroundImage:
              "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            font: "italic ",
          }}
        >
          <label
            htmlFor="englishName"
            className="block text-gray-700 font-bold mb-2"
          >
            English Name
          </label>
          <input
            type="text"
            name="englishName"
            id="englishName"
            value={characterData.englishName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div
          className="mb-4 bg-pink-500 rounded-md"
          style={{
            backgroundImage:
              "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            font: "italic ",
          }}
        >
          <label htmlFor="moon" className="block text-gray-700 font-bold mb-2">
            Moon
          </label>
          <input
            type="text"
            name="moon"
            id="moon"
            value={characterData.moon}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div
          className="mb-4 bg-pink-500 rounded-md"
          style={{
            backgroundImage:
              "url('https://media.tenor.com/yGH5RwRTBwEAAAAi/stars-glitter.gif')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            font: "italic ",
          }}
        >
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            value={characterData.image}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="flex justify-center bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Character
        </button>
      </form>
    </div>
  );
};

export default AddCharacterForm;
