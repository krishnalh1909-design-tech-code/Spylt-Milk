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

gsap.from(".page1 .title h1",{
  y:500,
  duration:0.5,
  stagger:0.02,
  delay:5
},)

gsap.from(".title2",{
  x:100,
  opacity:0,
  duration:0.5,
  delay:5
})

// // // npx @tailwindcss/cli -i ./input.css -o ./output.css --watch

let wasMobile = window.innerWidth < 768;

function toggleVisibility() {
  const bgVid = document.querySelector(".bgVid");
  if (!bgVid) return;

  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    bgVid.style.display = "none";
  } else {
    bgVid.style.display = "block";
  }

  // Reload only when switching from mobile to desktop
  if (wasMobile && !isMobile) {
    location.reload();
  }

  wasMobile = isMobile;
}

window.addEventListener("load", toggleVisibility);
window.addEventListener("resize", toggleVisibility);

