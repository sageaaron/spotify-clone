import { useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const activePill =
    "bg-white text-black px-4 py-1 rounded-full cursor-pointer text-sm font-semibold";
  const inactivePill =
    "bg-black/40 text-white px-4 py-1 rounded-full cursor-pointer text-sm font-semibold hover:bg-black/60 transition";

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold py-4">
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black/40 p-2 rounded-full cursor-pointer hover:bg-black/60 transition"
            src={assets.arrow_left}
            alt="Arrow Left Icon"
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black/40 p-2 rounded-full cursor-pointer hover:bg-black/60 transition"
            src={assets.arrow_right}
            alt="Arrow Right Icon"
            onClick={() => navigate(+1)}
          />
        </div>

        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-full hidden md:block cursor-pointer hover:scale-105 transition">
            Explore Premium
          </p>
          <p className="bg-black/40 text-white py-1 px-4 rounded-full text-[15px] cursor-pointer hover:bg-black/60 transition">
            Install App
          </p>
          <p className="bg-green-500 text-black text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition">
            SA
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p
          onClick={() => navigate("/")}
          className={isActive("/") ? activePill : inactivePill}
        >
          All
        </p>
        <p
          onClick={() => navigate("/music")}
          className={isActive("/music") ? activePill : inactivePill}
        >
          Music
        </p>
        <p
          onClick={() => navigate("/podcasts")}
          className={isActive("/podcasts") ? activePill : inactivePill}
        >
          Podcasts
        </p>
      </div>
    </>
  );
};

export default Navbar;
