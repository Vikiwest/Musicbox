// Select elements
const audioPlayer = document.getElementById("audio-player");
const playButton = document.getElementById("play-btn");
const pauseButton = document.getElementById("pause-btn");
const stopButton = document.getElementById("stop-btn");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const volumeSlider = document.getElementById("volume-slider");
const progressSlider = document.getElementById("progress-slider");
const seekBackwardButton = document.getElementById("seek-backward-btn");
const seekForwardButton = document.getElementById("seek-forward-btn");
const trackImage = document.getElementById("track-image");
const trackName = document.getElementById("track-name");
const trackArtist = document.getElementById("track-artist");



const playlist = [
    {
      src: "audio/Polo_G__Distraction.mp3",
      img: "/images/POPO G DISTRACTION.jpg",
      title: "Distraction",
      artist: "Polo G",
    },
    {
      src: "audio/Zinoleesky__Abanikanda_ft_Naira_Marley[_50571].mp3",
      img: "/images/ZINO NAIRA.jpg",
      title: "Abanikanda",
      artist: "Zinoleesky & Naira Marley",
    },
    {
      src: "audio/[Waploaded]_Bob_marley_-_Iron_Lion_Zion-1460795287.mp3",
      img: "/images/Bob_marley_Iron Lion Zion.jpg",
      title: "Iron Lion Zion",
      artist: "Bob Marley",
    },
    {
         src: "/audio/YG_Marley__Praise_Jah_In_The_Moonlight[_46018].mp3",
         img: "/images/YG MARLEY.jpg",
        title: "Praise Jah in The Moonlight",
        artist: "YG Marley",
       
       
    }
  ];
let currentTrackIndex = 0;


function loadTrack(index) {
    audioPlayer.src = playlist[index].src;
    trackImage.src = playlist[index].img;
    trackName.textContent = playlist[index].title;
    trackArtist.textContent = playlist[index].artist;
}

// Load the first track and image
loadTrack(currentTrackIndex);


playButton.addEventListener("click", () => {
    audioPlayer.play();
});


pauseButton.addEventListener("click", () => {
    audioPlayer.pause();
});


stopButton.addEventListener("click", () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});


volumeSlider.addEventListener("input", (event) => {
    audioPlayer.volume = event.target.value;
});

// Update progress bar as audio plays
audioPlayer.addEventListener("timeupdate", () => {
    const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressSlider.value = progress;
});

// Seek through the audio
progressSlider.addEventListener("input", (event) => {
    const seekTime = (event.target.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTime;
});

// Play the next track
nextButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
});

// Play the previous track
prevButton.addEventListener("click", () => {
    currentTrackIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
});

// Seek backward by 10 seconds
seekBackwardButton.addEventListener("click", () => {
    audioPlayer.currentTime = Math.max(0, audioPlayer.currentTime - 10); // Prevent going below 0
});

// Seek forward by 10 seconds
seekForwardButton.addEventListener("click", () => {
    audioPlayer.currentTime = Math.min(audioPlayer.duration, audioPlayer.currentTime + 10); // Prevent going beyond duration
});
