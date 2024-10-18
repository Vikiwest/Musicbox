
 // Simulated music database
 const musicDatabase = [
  {
      title: "Distraction",
      artist: "Polo G",
      image: "/images/POPO G DISTRACTION.jpg",
      audioSrc: "/audio/Polo_G__Distraction.mp3"
  },
  {
      title: "Moving",
      artist: "Omah-Lay",
      image: "/images/OMAHLAY.jpg",
      audioSrc: "/audio/Omah_Lay__Moving[_50522].mp3"
  },
  {
      title: "Abanikanda",
      artist: "Zinoleesky",
      image: "/images/ZINO NAIRA.jpg",
      audioSrc: "/audio/Zinoleesky__Abanikanda_ft_Naira_Marley[_50571].mp3"
  },
  {
    title: "Praise Jah in The Moonlight",
    artist: "YG Marley",
    image: "/images/YG MARLEY.jpg",
    audioSrc: "/audio/YG_Marley__Praise_Jah_In_The_Moonlight[_46018].mp3"
},
{
  title: "Why Uh Shoot",
  artist: "Polo G & Lil Durk",
  image: "/images/POLOG.jpg",
  audioSrc: "/audio/Polo_G__Why_Uh_Shoot_ft_Lil_Durk[_49909].mp3"
},
{
  title: "Iron Lion Zion",
  artist: "Bob Marley",
  image: "/images/Bob_marley_Iron Lion Zion.jpg",
  audioSrc: "/audio/[Waploaded]_Bob_marley_-_Iron_Lion_Zion-1460795287.mp3"
},
];

//Get the elements id from the html
const songListElement = document.getElementById('song-list');
const currentTitleElement = document.getElementById('current-title');
const currentArtistElement = document.getElementById('current-artist');
const currentImageElement = document.getElementById('current-image');
const audioPlayerElement = document.getElementById('audio-player');

// Function to load and display the song list
function loadSongs() {
  musicDatabase.forEach((song, index) => {
      const songElement = document.createElement('li');
      songElement.textContent = `${song.title} - ${song.artist}`;
      songElement.addEventListener('click', () => playSong(index));
      songListElement.appendChild(songElement);
  });
}

// Function to play the selected song
function playSong(index) {
  const selectedSong = musicDatabase[index];
  currentTitleElement.textContent = selectedSong.title;
  currentArtistElement.textContent = selectedSong.artist;
  currentImageElement.src = selectedSong.image;
  audioPlayerElement.src = selectedSong.audioSrc;
  audioPlayerElement.play();
}

// Load the song list on page load
window.onload = loadSongs;

