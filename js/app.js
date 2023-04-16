//* Splide
new Splide(".splide", {
  type: "loop",
  autoScroll: {
    speed: 2,
  },
}).mount(window.splide.Extensions);

//* COUNTDOWN
// Set the date to countdown to
const countdown = document.querySelector(".countdown");

// set the date we're counting down to
const countDownDate = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;

// update the countdown every second
const interval = setInterval(function () {
  // get today's date and time
  const now = new Date().getTime();

  // find the distance between now and the countdown date
  const distance = countDownDate - now;

  // calculate days, hours, minutes, and seconds remaining
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display the result in the countdown element
  countdown.innerHTML = `
      <div class="days">${days.toString().padStart(2, "0")}</div>
      <div class="hours">${hours.toString().padStart(2, "0")}</div>
      <div class="minutes">${minutes.toString().padStart(2, "0")}</div>
      <div class="seconds">${seconds.toString().padStart(2, "0")}</div>
  `;

  // if the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(interval);
    countdown.innerHTML = "Countdown finished";
  }
}, 1000);

//* OWL CAROUSEL
let owl = $(".owl-carousel");
owl.owlCarousel({
  responsiveClass: true,
  responsive: {
    0: {
      items: 4,
    },
    600: {
      items: 5,
      nav: true,
    },
    1000: {
      items: 7,
      nav: true,
      loop: true,
    },
  },
  items: 6,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [1000]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

//* ICON
feather.replace();

//* TOGGLE BAR MENU
const troliLogin = document.querySelector(".group-troli-login");
const menuBar = document.querySelector("#menu-bar");

menuBar.addEventListener("click", () => {
  troliLogin.classList.toggle("active");
});
