import Navbar from "./Navbar";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";
import { podcastsData } from "../assets/assets";

const DisplayPodcasts = () => {
  const { track, playerStatus, audioRef, setTrack, setPlayerStatus } =
    useContext(PlayerContext);

  const handlePlay = (podcast) => {
    setTrack({
      id: `podcast-${podcast.id}`,
      name: podcast.episode,
      desc: podcast.name,
      image: podcast.image,
      file: podcast.file,
    });
    setTimeout(() => {
      audioRef.current.play();
      setPlayerStatus(true);
    }, 0);
  };

  const isPlaying = (podcast) =>
    playerStatus && track.id === `podcast-${podcast.id}`;

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Popular Podcasts</h1>
        <div className="flex overflow-auto gap-2">
          {podcastsData.map((item) => (
            <div
              key={item.id}
              onClick={() => handlePlay(item)}
              className="min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
            >
              <img
                className="rounded w-full"
                src={item.image}
                alt={item.name}
              />
              <p
                className={`font-bold mt-2 mb-1 ${isPlaying(item) ? "text-green-400" : "text-white"}`}
              >
                {item.name}
              </p>
              <p className="text-slate-400 text-sm">{item.host}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Episodes</h1>
        <div className="flex flex-col gap-2">
          {podcastsData.map((item) => (
            <div
              key={item.id}
              onClick={() => handlePlay(item)}
              className={`flex items-center gap-4 p-3 rounded cursor-pointer hover:bg-[#ffffff26] ${isPlaying(item) ? "bg-[#ffffff15]" : ""}`}
            >
              <img
                className="w-16 h-16 rounded shrink-0"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1">
                <p
                  className={`font-bold ${isPlaying(item) ? "text-green-400" : "text-white"}`}
                >
                  {item.episode}
                </p>
                <p className="text-slate-300 text-sm font-semibold">
                  {item.name}
                </p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                <p className="text-slate-500 text-xs mt-1">
                  {item.host} • {item.duration}
                </p>
              </div>
              <p className="text-slate-400 text-sm hidden sm:block">
                {item.duration}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayPodcasts;
