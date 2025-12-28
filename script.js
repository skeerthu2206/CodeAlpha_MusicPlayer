const songs = [
  {
    title: "Let Me Down Slowly",
    artist: "Alec Benjamin",
    src: "music/let_me_down_slowly.mp3",
    cover: "images/purple1.jpg"
  },
  {
    title: "Wavin' Flag",
    artist: "K'naan",
    src: "music/waving_flag.mp3",
    cover: "images/purple2.jpg"
  },
  {
    title: "Blue",
    artist: "Yung Kai",
    src: "music/blue.mp3",
    cover: "images/purple3.jpg"
  }
];

let index = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const playBtn = document.getElementById("playBtn");


loadSong();

function loadSong() {
  audio.src = songs[index].src;
  title.textContent = songs[index].title;
  artist.textContent = songs[index].artist;
  cover.src = songs[index].cover;
}
function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}




function nextSong() {
  index = (index + 1) % songs.length;
  loadSong();
  audio.play();               // music starts
  playBtn.textContent = "⏸";  // show pause icon
}


function prevSong() {
  index = (index - 1 + songs.length) % songs.length;
  loadSong();
  audio.play();               // music starts
  playBtn.textContent = "⏸";  // show pause icon
}


audio.addEventListener("timeupdate", () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

progress.addEventListener("input", () => {
  if (audio.duration) {
    audio.currentTime = (progress.value * audio.duration) / 100;
  }
});

volume.addEventListener("input", () => {
  audio.volume = volume.value;
});
