const drumkit = document.getElementById("drumkit");

document.addEventListener("keydown", playSoundPad);

const sounds = {
  KeyW: "assets/sounds/kick.mp3",
  KeyE: "assets/sounds/hi-hat.wav",
  KeyR: "assets/sounds/beatbox-snare-2025.wav",
  KeyT: "assets/sounds/female-voice.wav",
  KeyY: "assets/sounds/check.wav",
  KeyU: "assets/sounds//chopped-mixed-vocal-fx.wav",
};

function getSoundAudio(keyCode) {
  const sound = new Audio(sounds[keyCode]);
  return sound;
}

function playSoundPad(event) {
  const key = event.code;
  const btn = drumkit.querySelector(`.drumkit-btn[data-key=${key}`);

  if (!btn) return;

  btn.classList.add("playing");
  removeTransition();

  const sound = getSoundAudio(key);
  sound.play();
}

function removeTransition() {
  const btns = document.querySelectorAll(".drumkit-btn");
  btns.forEach((btn) => btn.addEventListener("transitionend", removeClass));
}

function removeClass() {
  this.classList.remove("playing");
}
