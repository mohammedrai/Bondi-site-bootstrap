let galetys = document.querySelectorAll(".our-work ul li");
let imgs = document.querySelectorAll(".our-work .row > div");
let imgsAray = Array.from(imgs);

galetys.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manegeİmg);
});

function removeActive() {
  galetys.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}
function manegeİmg() {
  imgsAray.forEach((e) => {
    e.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((e) => {
    e.style.display = "block";
  });
}

//----------------------------------------------------

