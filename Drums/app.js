class App {
  constructor() {
    this.sounds = [
      "./sounds/tink.wav",
      "./sounds/tink.wav",
      "./sounds/tink.wav",
      "./sounds/kick.wav",
      "./sounds/kick.wav",
      "./sounds/clap.wav",
      "./sounds/openhat.wav",
      "./sounds/kick.wav",
      "./sounds/kick.wav",
      "./sounds/clap.wav",
      "./sounds/openhat.wav",
      "./sounds/kick.wav",
      "./sounds/kick.wav",
      "./sounds/clap.wav",
      "./sounds/openhat.wav",
      "./sounds/kick.wav",
      "./sounds/kick.wav",
      "./sounds/clap.wav",
      "./sounds/openhat.wav",
      "./sounds/kick.wav",
      "./sounds/kick.wav",
      "./sounds/clap.wav",
      "./sounds/openhat.wav",
      "./sounds/kick.wav",
      "./sounds/kick.wav",
      "./sounds/clap.wav",
      "./sounds/openhat.wav",
    ];
    this.addEventListeners();
  }

  addEventListeners() {
    const button = document.getElementById("example");
    button.addEventListener("click", () => this.playExample());

    const keys = document.querySelectorAll(".key");
    keys.forEach((key) => {
      key.addEventListener("transitionend", (e) => this.removeTransition(e));
    });

    window.addEventListener("keydown", (e) => this.playSound(e));
  }

  playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;

    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }

  removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  playExample() {
    this.sounds.forEach((sound, index) => {
      setTimeout(() => {
        const audio = new Audio(sound);
        audio.play();
      }, index * 300);
    });
  }
}

new App();
