// js/script.js

// Run when the page loads
window.onload = function() {
  console.log("Website loaded successfully!");

  // Check if welcome message was already shown this session
  if (!sessionStorage.getItem("welcomeShown")) {
    alert("Welcome OUR  UGC 1101 website!");
    sessionStorage.setItem("welcomeShown", "true"); // mark as shown
  }
};

// Example function for feedback button
function feedbackAlert() {
  alert("Thank you for your feedback!");
}
