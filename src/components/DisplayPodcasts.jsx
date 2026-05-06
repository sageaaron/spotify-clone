import Navbar from "./Navbar";

const podcastsData = [
  {
    id: 0,
    name: "Tech Talks Daily",
    host: "Neil C. Hughes",
    image: "https://picsum.photos/seed/pod1/200",
    desc: "Daily tech news and insights",
  },
  {
    id: 1,
    name: "The Daily",
    host: "The New York Times",
    image: "https://picsum.photos/seed/pod2/200",
    desc: "What's happening in the world today",
  },
  {
    id: 2,
    name: "Lex Fridman Podcast",
    host: "Lex Fridman",
    image: "https://picsum.photos/seed/pod3/200",
    desc: "Conversations about science and humanity",
  },
  {
    id: 3,
    name: "How I Built This",
    host: "Guy Raz",
    image: "https://picsum.photos/seed/pod4/200",
    desc: "Stories behind the world's best-known companies",
  },
  {
    id: 4,
    name: "Darknet Diaries",
    host: "Jack Rhysider",
    image: "https://picsum.photos/seed/pod5/200",
    desc: "True stories from the dark side of the internet",
  },
  {
    id: 5,
    name: "Crime Junkie",
    host: "Ashley Flowers",
    image: "https://picsum.photos/seed/pod6/200",
    desc: "A weekly true crime podcast",
  },
];

const DisplayPodcasts = () => {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Popular Podcasts</h1>
        <div className="flex overflow-auto gap-2">
          {podcastsData.map((item) => (
            <div
              key={item.id}
              className="min-w-45 p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
            >
              <img
                className="rounded w-full"
                src={item.image}
                alt={item.name}
              />
              <p className="font-bold mt-2 mb-1">{item.name}</p>
              <p className="text-slate-200 text-sm">{item.host}</p>
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
              className="flex items-center gap-4 p-3 rounded hover:bg-[#ffffff26] cursor-pointer"
            >
              <img
                className="w-16 h-16 rounded"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="font-bold">{item.name}</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
                <p className="text-slate-500 text-xs mt-1">{item.host}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayPodcasts;
