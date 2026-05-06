import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import img7 from "./img7.jpg";
import img8 from "./img8.jpg";
import img9 from "./img9.png";
import img10 from "./img10.png";
import img11 from "./img11.png";
import img12 from "./img12.jpg";
import img13 from "./img13.jpg";
import img15 from "./img15.png";
import img16 from "./img16.jpg";
import song1 from "./song1.mp3";
import song2 from "./song2.mp3";
import song3 from "./song3.mp3";
import song4 from "./song4.mp3";
import song5 from "./song5.mp3";
import song6 from "./song6.mp3";
import song7 from "./song7.mp3";

export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: 0,
    name: "Release Radar",
    image: img15,
    desc: "Catch all the latest music from artists you follow, plus new singles picked for you. Updates every Friday.",
    bgColor: "#744210",
  },
  {
    id: 1,
    name: "Top 50 Global",
    image: img8,
    desc: "Your daily update of the most played tracks right now - Global.",
    bgColor: "#2a4365",
  },
  {
    id: 2,
    name: "Top 50 South Africa",
    image: img9,
    desc: "Your daily update of the most played tracks right now - South Africa.",
    bgColor: "#22543d",
  },
  {
    id: 3,
    name: "Discover Weekly",
    image: img11,
    desc: "Your shortcut to hidden gems, deep cuts and future faves, updated every Monday. You'll know when you hear it.",
    bgColor: "#234e52",
  },
  {
    id: 4,
    name: "Top Songs - South Africa",
    image: img10,
    desc: "Your weekly update of the most played tracks right now - South Africa.",
    bgColor: "#742a2a",
  },
  {
    id: 5,
    name: "Trending Global",
    image: img16,
    desc: "Your weekly update of the most played tracks right now - Global.",
    bgColor: "#44337a",
  },
];

export const songsData = [
  {
    id: 0,
    name: "Midnight Drift",
    image: img13,
    file: song1,
    desc: "Late night lo-fi beats to get lost in",
    duration: "5:16",
  },
  {
    id: 1,
    name: "Neon Rain",
    image: img5,
    file: song2,
    desc: "Hazy electronic textures for rainy evenings",
    duration: "3:12",
  },
  {
    id: 2,
    name: "Slow Burn",
    image: img6,
    file: song3,
    desc: "Chilled out grooves that simmer and breathe",
    duration: "2:57",
  },
  {
    id: 3,
    name: "City Pulse",
    image: img7,
    file: song4,
    desc: "Urban lo-fi with a subtle electronic heartbeat",
    duration: "3:30",
  },
  {
    id: 4,
    name: "Faded Frequencies",
    image: img1,
    file: song5,
    desc: "Warm analog tones drifting through the static",
    duration: "2:29",
  },
  {
    id: 5,
    name: "Glass Hour",
    image: img12,
    file: song6,
    desc: "Delicate electronic layers suspended in time",
    duration: "3:42",
  },
  {
    id: 6,
    name: "Still Motion",
    image: img2,
    file: song7,
    desc: "Minimal beats with a meditative lo-fi flow",
    duration: "3:55",
  },
];

export const podcastsData = [
  {
    id: 0,
    name: "The Adventures of Sherlock Holmes",
    host: "Arthur Conan Doyle",
    image: "https://picsum.photos/seed/pod1/200",
    desc: "Classic detective stories narrated by LibriVox volunteers",
    episode: "Ep. 1: A Scandal in Bohemia",
    duration: "38:00",
    file: "https://archive.org/download/adventures_sherlockholmes_1007_librivox/adventuresherlockholmes_01_doyle_64kb.mp3",
  },
  {
    id: 1,
    name: "The Adventures of Sherlock Holmes",
    host: "Arthur Conan Doyle",
    image: "https://picsum.photos/seed/pod2/200",
    desc: "Classic detective stories narrated by LibriVox volunteers",
    episode: "Ep. 2: The Red-Headed League",
    duration: "27:30",
    file: "https://archive.org/download/adventures_sherlockholmes_1007_librivox/adventuresherlockholmes_02_doyle_64kb.mp3",
  },
  {
    id: 2,
    name: "The Adventures of Sherlock Holmes",
    host: "Arthur Conan Doyle",
    image: "https://picsum.photos/seed/pod3/200",
    desc: "Classic detective stories narrated by LibriVox volunteers",
    episode: "Ep. 3: A Case of Identity",
    duration: "20:42",
    file: "https://archive.org/download/adventures_sherlockholmes_1007_librivox/adventuresherlockholmes_03_doyle_64kb.mp3",
  },
  {
    id: 3,
    name: "The Adventures of Sherlock Holmes",
    host: "Arthur Conan Doyle",
    image: "https://picsum.photos/seed/pod4/200",
    desc: "Classic detective stories narrated by LibriVox volunteers",
    episode: "Ep. 4: The Boscombe Valley Mystery",
    duration: "28:50",
    file: "https://archive.org/download/adventures_sherlockholmes_1007_librivox/adventuresherlockholmes_04_doyle_64kb.mp3",
  },
  {
    id: 4,
    name: "The Adventures of Sherlock Holmes",
    host: "Arthur Conan Doyle",
    image: "https://picsum.photos/seed/pod5/200",
    desc: "Classic detective stories narrated by LibriVox volunteers",
    episode: "Ep. 5: The Five Orange Pips",
    duration: "21:24",
    file: "https://archive.org/download/adventures_sherlockholmes_1007_librivox/adventuresherlockholmes_05_doyle_64kb.mp3",
  },
  {
    id: 5,
    name: "The Adventures of Sherlock Holmes",
    host: "Arthur Conan Doyle",
    image: "https://picsum.photos/seed/pod6/200",
    desc: "Classic detective stories narrated by LibriVox volunteers",
    episode: "Ep. 6: The Man With the Twisted Lip",
    duration: "27:24",
    file: "https://archive.org/download/adventures_sherlockholmes_1007_librivox/adventuresherlockholmes_06_doyle_64kb.mp3",
  },
];
