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

gsap.from(".page1 .title h1", {
  y: 500,
  duration: 0.5,
  stagger: 0.02,
  delay: 5,
});

gsap.from(".title2", {
  x: 100,
  opacity: 0,
  duration: 0.5,
  delay: 5,
});

if (window.innerWidth < 768) {
  gsap.from(".page1 .title h1", {
    y: 500,
    duration: 0.5,
    stagger: 0.02,
    delay: 4.5,
  });

  gsap.from(".title2", {
    x: 100,
    opacity: 0,
    duration: 0.5,
    delay: 4.5,
  });

  gsap.to(".sImg", {
    delay: 4.5,
    bottom: "0%",
    duration: 1,
  });

}

 gsap.from(".page1 p, .page1 button", {
    opacity: 0,
    y: 100,
    delay: 5,
    duration: 0.5,
  });



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

  if (wasMobile && !isMobile) {
    location.reload();
  }

  wasMobile = isMobile;
}

window.addEventListener("load", toggleVisibility);
window.addEventListener("resize", toggleVisibility);

gsap.to(".bgVid,.bgImg", {
  scale: 0.9,
  rotate: 5,

  scrollTrigger: {
    trigger: ".page1",
    start: "20%",
    end: "80%",
    // markers:true,
    scrub: true,
  },
});


let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "-50%",
    end: "50%",
    scrub: true,
  },
});

tl.to(".page2 span", {
  color: "#FAEADE",
  stagger: 1,
});

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page2",
    start: "-30%",
    end: "0%",

    scrub: true,
  },
});

tl2.from(
  ".page2 div",
  {
    width: "0vw",
    opacity: 0,
    duration: 1,
  },
  "a"
);

tl2.from(
  ".page2 div h1",
  {
    opacity: 0,
    duration: 1,
  },
  "a"
);
