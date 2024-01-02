const logo = document.querySelector(".logo");
const headerMenu = document.querySelector(".header-menu");
const menuButton = document.querySelector(".small-menu");
const backTop = document.querySelector(".arrow");
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  const targetValue = parseInt(counter.getAttribute("data-target"));
  const countStart = parseInt(counter.innerText);

  const numberCounter = (countStart, targetValue) => {
    while (countStart <= targetValue) {
      const counterDisplay = (i) => {
        setTimeout(() => {
          counter.innerText = i;
        }, 30 * i);
      };
      counterDisplay(countStart);
      countStart += 1;
    }
  };
  numberCounter(countStart, targetValue);
});

menuButton.addEventListener("click", () => {
  headerMenu.classList.toggle("show");
});

backTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

document.onscroll = () => {
  headerMenu.classList.remove("show");
  if (window.scrollY) {
    document.querySelector(".nav").classList.add("sticky");
    document.querySelector(".logo").classList.add("sticky-logo");
  } else {
    document.querySelector(".nav").classList.remove("sticky");
    document.querySelector(".logo").classList.remove("sticky-logo");
  }
};
