import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 pl-8 cursor-pointer"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="Search Icon" />
          <p className="font-bold">Search</p>
        </div>
      </div>

      <div className="bg-[#121212] h-[85%] rounded flex flex-col">
        <div className="pl-8 pr-4 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img className="w-6" src={assets.stack_icon} alt="Stack Icon" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Add Icon" />
          </div>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create Your First Playlist</h1>
          <p className="font-light">It's Easy! We Will Help You</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Create Playlist
          </button>
        </div>

        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Let's Find Some Podcasts To Follow</h1>
          <p className="font-light">We'll Keep You Updated On New Episodes</p>
          <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
            Browse Podcasts
          </button>
        </div>

        <div className="mt-auto m-2 p-4 text-[#a7a7a7] text-xs flex flex-col gap-2">
          <p>
            This is a fan-made Spotify clone built for educational and portfolio
            purposes only. It is not affiliated with, endorsed by, or connected
            to Spotify AB in any way.
          </p>
          <p>
            All Spotify branding, trademarks, and logos are the property of
            Spotify AB. Song and album artwork are used purely for demonstration
            and are not intended for commercial use.
          </p>

          <p className="font-semibold text-white text-sm">
            © {new Date().getFullYear()} Built By - Sage Aaron Padayachee
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
