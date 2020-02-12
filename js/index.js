// Your code goes here
const noHome = document.querySelector('.nav-link')
noHome.addEventListener('click', (e) => {
  e.preventDefault;
  console.log('link stopped')
})

 

const font = document.querySelectorAll('*')
font.forEach( e => {addEventListener('keydown', () => {
    let rainbow = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    e.style.color = rainbow;
    });
})

const blobPic = document.querySelectorAll('img')
blobPic.forEach(e => {e.addEventListener('click', () => {
    e.src = 'https://www.xda-developers.com/files/2018/07/google-blobmoji-emoji.png'
})})

blobPic.forEach(e => {e.addEventListener('dblclick', () =>{
    e.src = 'https://storage.googleapis.com/discordstreet/emojis/d5bfdb84-b82c-4696-ac60-b0970c37c892.png'
})})

blobPic.forEach(e => {window.addEventListener('resize', () =>{
    e.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Emoji_u1f631.svg/1200px-Emoji_u1f631.svg.png'
})})

var doit;
window.onresize = function() {
    clearTimeout(doit);
    doit = setTimeout(function() {
        blobPic.forEach(e => 
            e.src = 'https://blobs.gg/blobowo.f6df4156.png'
        );;
    }, 100);
};


