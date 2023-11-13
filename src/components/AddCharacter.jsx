import { Link } from "react-router-dom";

const AddCharacterButton = () => {
  return (
    <Link to="/characters/new">
      <div className="relative w-16 h-16 rounded-lg overflow-hidden">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
          alt="Add Character"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex justify-center items-center">
          <span className="text-white text-4xl font-bold">+</span>
        </div>
      </div>
    </Link>
  );
};

export default AddCharacterButton;
