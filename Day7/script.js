const audioFiles = [
    "./audios/28.mp3",
    "./audios/29.mp3",
    "./audios/30.mp3",
    "./audios/31.mp3",
    "./audios/32.mp3",
    "./audios/33.mp3",
    "./audios/34.mp3",
    "./audios/35.mp3",
    "./audios/36.mp3",
    "./audios/37.mp3",
    "./audios/38.mp3",
    "./audios/39.mp3",
    "./audios/40.mp3",
    "./audios/41.mp3",
    "./audios/42.mp3",
    "./audios/43.mp3",
    "./audios/44.mp3",
    "./audios/45.mp3",
    "./audios/46.mp3",
    "./audios/47.mp3",
    "./audios/48.mp3",
    "./audios/49.mp3",
    "./audios/50.mp3",
    "./audios/51.mp3",
    "./audios/52.mp3",
    "./audios/53.mp3",
    "./audios/54.mp3",
    "./audios/55.mp3",
    "./audios/56.mp3",
    "./audios/57.mp3",
    "./audios/58.mp3",
    "./audios/59.mp3",
    "./audios/60.mp3",
    "./audios/61.mp3",
    "./audios/62.mp3",
  ];

const div = document.querySelectorAll(".box div")

div.forEach((bar, audioFIle) => {
    bar.addEventListener("click", ()=>{
        const aud = new Audio(audioFiles[audioFIle])
        aud.play()
    })
})