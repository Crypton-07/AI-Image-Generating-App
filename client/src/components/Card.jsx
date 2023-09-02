/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { download } from "../assets";
import { downloadImage } from "../utils";
const Card = ({ _id, name, photo, prompt }) => {
  return (
    <div className="rounded-xl group relative shadow-card hover:shadow-cardhover card">
      <img
        className="w-full h-auto object-cover rounded-xl"
        src={photo}
        alt={prompt}
      />
      <div className="group-hover:flex flex-col max-h-[94%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-3 p-4 rounded-md ease-in duration-200">
        <p className="text-white text-md overflow-y-auto prompt">{prompt}</p>
        <div className="mt-4 flex justify-between items-center gap-2">
          <div className="flex justify-center gap-2">
            <div className="w-6 h-6 rounded-full object-cover bg-green-600 flex justify-center items-center text-white font-bold text-xs">
              {name[0]}
            </div>
            <p className="text-white text-xs font-bold flex items-center">
              {name}
            </p>
          </div>
          <button
            className="outline-none bg-transparent border-none"
            type="button"
            onClick={() => downloadImage(_id, photo)}
          >
            <img
              className="w-5 h-5 object-contain invert"
              src={download}
              alt="download icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
