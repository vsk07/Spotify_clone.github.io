console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Turn Up the Speakers", filePath: "song1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Come With Me(Extended Mix)", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Bassjackers & MAKJ - DERP", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "My Heart", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Invincible", filePath: "songs/7.mp3", coverPath: "cover/7.jpg"},
    {songName: "Rock Musik Legend So you", filePath: "songs/8.mp3", coverPath: "cover/8.jpg"},
    {songName: "High on Music", filePath: "songs/9.mp3", coverPath: "cover/9.jpg"},
    {songName: "Different Heaven & EH!DE", filePath: "songs/10.mp3", coverPath: "cover/10.jpg"},
    {songName: "Ab Tere Dil Mein To", filePath: "songs/11.mp3", coverPath: "cover/11.png"},
    {songName: "Bapu Tere Karke", filePath: "songs/12.mp3", coverPath: "cover/12.jpg"},
    {songName: "Dil Ke Paas", filePath: "songs/13.mp3", coverPath: "cover/11.png"},
    {songName: "Dil Maang Raha Hai full song", filePath: "songs/14.mp3", coverPath: "cover/14.png"},
    {songName: "Dil Maang Raha Hai-Ringtone", filePath: "songs/15.mp3", coverPath: "cover/15.png"},
    {songName: "Manga Yahi Duawa Main", filePath: "songs/16.mp3", coverPath: "cover/15.png"},
    {songName: "llegal Weap", filePath: "songs/17.mp3", coverPath: "cover/14.png"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})