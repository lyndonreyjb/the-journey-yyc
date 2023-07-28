// Add an event listener to the window for the scroll event
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  // Check the scroll position to determine if the background should be added or removed
  if (window.scrollY > 0) {
    navbar.classList.remove("md:bg-transparent"); // Add the background color
  } else {
    navbar.classList.add("md:bg-transparent"); // Remove the background color
  }
});
// Set the date we're counting down to
let countDownDate = new Date("Aug 28, 2023 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function () {
  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result to their respective elements
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

// Function to toggle the visibility of the mobile menu
function toggleMobileMenu() {
  const navbar = document.getElementById("navbar-default");
  navbar.classList.toggle("hidden"); // Toggle the "hidden" class to show/hide the menu
}

// Add an event listener for the phone mode button
const phoneModeButton = document.querySelector(
  '[data-collapse-toggle="navbar-default"]'
);
phoneModeButton.addEventListener("click", toggleMobileMenu);
