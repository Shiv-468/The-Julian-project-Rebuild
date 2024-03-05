const tabcontant = document.querySelectorAll(".tabcontant");
const firstcontant = document.querySelector(".tabcontant");
const fistactivetab = document.querySelector(".allbtn .tabbtn");
tabcontant.forEach(e => e.style.display = "none");
firstcontant.style.display = "block";
fistactivetab.classList.add("active");
function clickhere(tabs) {
  tabcontant.forEach(e => e.style.display = "none");
  const selectcontant = document.getElementById(tabs)
  selectcontant.style.display = "block";
  const tabsactive = document.querySelectorAll(".allbtn .tabbtn")
  tabsactive.forEach(e => e.classList.remove("active"))
  const selecttab = document.querySelector(`.tabbtn[onclick = "clickhere('${tabs}')"]`)
  selecttab.classList.add("active")
}

const menuicon = document.querySelector(".menuicon");
const menulist = document.querySelector(".menulist");
menuicon.addEventListener("click", () => {
  menulist.classList.toggle("show");
  document.body.classList.toggle("overflow-hidden");
  menuicon.classList.toggle("show");
});
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


