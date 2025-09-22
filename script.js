let loading = document.querySelector(".loading");
let show = document.querySelector(".show");
let grow = 0;

// setTimeout(() => {
//   document.querySelector(".loader").style.display = "none";
//   document.querySelector(".bgVid video").play();
// }, 4000);

setInterval(() => {
  if (grow === 101) {
    grow = grow;
  } else {
    loading.innerHTML = grow++ + " %";

    show.style.width = grow * 2 + "px";
  }
}, 30);
