const countdownDisplay = document.getElementById("countdown-display");

function renderCountdown() {
  const christmas = 25;

  // Task:
  // - Get today's date (you only need the day).
  const date = new Date();
  const today = date.getDate();

  // - Calculate remaining days.
  const remainingDays = christmas - today;

  // - Display remaining days in countdownDisplay.
  countdownDisplay.innerHTML = remainingDays;
}

renderCountdown();

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.
