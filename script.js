let loading = document.querySelector(".loading");
let show = document.querySelector(".show");
let grow = 0;

let loadingAnimation = setInterval(() => {
  if (grow === 101) {
    grow = grow;
  } else {
    loading.innerHTML = grow++ + " %";

    show.style.width = grow * 2 + "px";
  }
}, 30);

setTimeout(() => {
  document.querySelector(".loader").style.display = "none";
  document.querySelector(".bgVid video").play();
  clearInterval(loadingAnimation);
}, 4000);
