let loading = document.querySelector(".loading");
let show = document.querySelector(".show");
let grow = 0;

let loadingAnimation = setInterval(() => {
  if (grow === 101) {
    grow = grow;
  } else {
    loading.innerHTML = grow++ + " %";

    show.style.width = grow * 1.8 + "px";
  }
}, 30);

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
  clearInterval(loadingAnimation);
}, 4000);

setTimeout(() => {
  document.querySelector(".bgVid video").play();
}, 4000);

const split = new SplitText(".page1 .title h1", { type: "chars" });

gsap.from(split.chars, {
  y: 500,
  duration: 0.5,
  stagger: 0.02,
  delay: 5,
  ease: "power3.out",
});

// npx @tailwindcss/cli -i ./input.css -o ./output.css --watch
