//Declarations
console.log("Welcome to Musica");
let audioIndex=0;
let audioElement=new Audio('1.mp3');
let masterplay=document.getElementById('masterplay');
let progressbar=document.getElementById('progressbar');
let gif=document.getElementById('gif');
let masterSongname=document.getElementById('masterSongname');

let songs=[
     {songName:"Samjh mai aya kya(Emiway).mp3",filePath:"1.mp3", coverPath:"1.jepg"},
     {songName:"Sheikh Chilli(Raftaar).mp3",filePath:"2.mp3", coverPath:"2.jpeg"},
     {songName:"Giraftaar(Emiway).mp3",filePath:"3.mp3", coverPath:"3.jpeg"},
     {songName:"Awein Hai(Raftaar).mp3",filePath:"4.mp3", coverPath:"4.jpeg"},
     {songName:"Khatam(emiway).mp3",filePath:"5.mp3", coverPath:"5.jpeg"},
     {songName:"Khuja Mat(MC stan).mp3",filePath:"6.mp3", coverPath:"6.jpeg"},
     {songName:"Nishu(Ikka).mp3",filePath:"7.mp3", coverPath:"7.jpeg"},
     {songName:"Machaenge(Emiway).mp3",filePath:"8.mp3", coverPath:"8.jpeg"},
]
//Music play
 audioElement=new Audio('1.mp3');
 masterplay.addEventListener('click',()=>{
   if(audioElement.paused|| audioElement.currenTime<=0){
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
    masterSongname.innerText=songs[audioIndex].songName;
    gif.style.opacity=1;
   }
   else{
    audioElement.pause();
    masterplay.classList.remove('fa-pause-circle');
    masterplay.classList.add('fa-play-circle');
    gif.style.opacity=0;

   }
// music bar adjustment
 })
 audioElement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
  progressbar.value=progress;
 })
 progressbar.addEventListener('change',()=>{
   audioElement.currentTime=progressbar.value * (audioElement.duration/100);
 })
 const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('playbutton')).forEach((element)=>{
  element.classList.remove('fa-pause-circle');
  element.classList.add('fa-play-circle');

  })
 }
 Array.from(document.getElementsByClassName('playbutton')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    audioIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src= `${audioIndex+1}.mp3`;
    masterSongname.innerText=songs[audioIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

 })
 })
 document.getElementById('next').addEventListener('click',()=>{
  if(audioIndex>9){
    audioIndex=0;
    audioElement.src='1.mp3';
    audioElement.currentTime=0;
    audioElement.play();
  }
  else{
    audioIndex+=1;
  }
    audioElement.src= `${audioIndex+1}.mp3`;
    masterSongname.innerText=songs[audioIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  
 })
 document.getElementById('back').addEventListener('click',()=>{
  if(audioIndex<=0){
    audioIndex=0;
    audioElement=new Audio('9.mp3')
    audioElement.currentTime=0;
    audioElement.play();
  }
  else{
    audioIndex-=1;
  }
    audioElement.src= `${audioIndex+1}.mp3`;
    masterSongname.innerText=songs[audioIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();

    gif.style.opacity=1;
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
  
 })
 
