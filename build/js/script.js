// Add an event listener to the window for the scroll event
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");

  // Check the scroll position to determine if the background should be added or removed
  if (window.scrollY > 0) {
    navbar.classList.add("bg-neutral-900"); // Add the background color
  } else {
    navbar.classList.remove("bg-neutral-900"); // Remove the background color
  }
});
// Set the date we're counting down to
let countDownDate = new Date("Aug 29, 2023 18: 00:00").getTime();

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
    const countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = "Event Now Live!";
    countdownElement.classList.add("event-live");
  }
}, 1000);

// Function to close the mobile menu
function closeMobileMenu() {
  const navbar = document.getElementById("navbar-default");
  navbar.classList.add("hidden"); // Add the "hidden" class to hide the menu
}

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

// Add an event listener to close the menu when a link inside it is clicked
const menuLinks = document.querySelectorAll("#navbar-default a");
menuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});
