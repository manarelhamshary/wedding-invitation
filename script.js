const envelope = document.getElementById("envelope");
const envelopeScreen = document.getElementById("envelopeScreen");
const inviteScreen = document.getElementById("inviteScreen");
const music = document.getElementById("music");

envelope.addEventListener("click", ()=>{
  music.play();
  envelopeScreen.style.display = "none";

  setTimeout(()=>{
    inviteScreen.classList.remove("hidden");
    inviteScreen.classList.add("open-animation");
  }, 300); // 0.3 ثانية
});
