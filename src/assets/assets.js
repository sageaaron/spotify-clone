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
    name: "Song One",
    image: img13,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:00",
  },
  {
    id: 1,
    name: "Song Two",
    image: img5,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:20",
  },
  {
    id: 2,
    name: "Song Three",
    image: img6,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:32",
  },
  {
    id: 3,
    name: "Song Four",
    image: img7,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:50",
  },
  {
    id: 4,
    name: "Song Five",
    image: img1,
    file: song2,
    desc: "Put a smile on your face with these happy tunes",
    duration: "3:10",
  },
  {
    id: 5,
    name: "Song Six",
    image: img12,
    file: song3,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:45",
  },
  {
    id: 6,
    name: "Song Seven",
    image: img2,
    file: song1,
    desc: "Put a smile on your face with these happy tunes",
    duration: "2:18",
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
    file: "https://archive.org/download/adventures_holmes_0811_librivox/adventuresofsherlockholmes_01_doyle_128kb.mp3",
  },
  {
    id: 1,
    name: "The War of the Worlds",
    host: "H.G. Wells",
    image: "https://picsum.photos/seed/pod2/200",
    desc: "The classic sci-fi tale of a Martian invasion of Earth",
    episode: "Ep. 1: The Eve of the War",
    duration: "22:00",
    file: "https://archive.org/download/war_of_the_worlds_librivox/waroftheworlds_01_wells_128kb.mp3",
  },
  {
    id: 2,
    name: "Pride and Prejudice",
    host: "Jane Austen",
    image: "https://picsum.photos/seed/pod3/200",
    desc: "Jane Austen's beloved romantic novel",
    episode: "Ep. 1: Chapter One",
    duration: "10:00",
    file: "https://archive.org/download/pride_and_prejudice_librivox/prideandprejudice_01_austen_128kb.mp3",
  },
  {
    id: 3,
    name: "The Jungle Book",
    host: "Rudyard Kipling",
    image: "https://picsum.photos/seed/pod4/200",
    desc: "The story of Mowgli raised by wolves in the Indian jungle",
    episode: "Ep. 1: Mowgli's Brothers",
    duration: "42:00",
    file: "https://archive.org/download/jungle_book_librivox/junglebook_01_kipling_128kb.mp3",
  },
  {
    id: 4,
    name: "Dracula",
    host: "Bram Stoker",
    image: "https://picsum.photos/seed/pod5/200",
    desc: "The original vampire horror story told through journals and letters",
    episode: "Ep. 1: Jonathan Harker's Journal",
    duration: "35:00",
    file: "https://archive.org/download/dracula_librivox/dracula_01_stoker_128kb.mp3",
  },
  {
    id: 5,
    name: "The Time Machine",
    host: "H.G. Wells",
    image: "https://picsum.photos/seed/pod6/200",
    desc: "A scientist travels far into the future and discovers humanity's fate",
    episode: "Ep. 1: Introduction",
    duration: "18:00",
    file: "https://archive.org/download/time_machine_librivox/thetimemachine_01_wells_128kb.mp3",
  },
];
