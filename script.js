window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(" .pads div");
  const visual = document.querySelector(".visual");
  const btnSwitch = document.querySelector(".switch");
  const btnSwitchDark = document.querySelector(".switch-dark");

  const colors = [
    "#60d394",
    "#dae761",
    "#69d6e9",
    "#e98e52",
    "#d36fe0",
    "#db8282",
  ];

  // create a sounds here
  pads.forEach((pad, i) => {
    pad.addEventListener("click", function () {
      sounds[i].currentTime = 0;
      sounds[i].play();

      createBubbles(i);
    });
  });

  //   create function that makes bubbles!
  const createBubbles = (i) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[i];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visual.removeChild(this);
    });
  };

  // light mode
  btnSwitch.addEventListener("click", function () {
    document.body.classList.toggle("light");
    btnSwitch.classList.toggle("switch-btn");
  });
});
