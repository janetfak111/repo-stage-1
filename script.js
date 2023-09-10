// Function to get the current day of the week
function getCurrentDayOfTheWeek() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  return dayOfWeek;
}

// Function to update the current UTC time in 24-hour format with milliseconds
function updateCurrentUTCTime() {
  const currentTimeInMilliseconds = Date.now();
  const currentTime = new Date(currentTimeInMilliseconds);
  const hours = currentTime.getUTCHours().toString().padStart(2, "0");
  const minutes = currentTime.getUTCMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getUTCSeconds().toString().padStart(2, "0");
  const milliseconds = currentTime
    .getUTCMilliseconds()
    .toString()
    .padStart(3, "0");

  const timeString = `${hours}:${minutes}:${seconds}.${milliseconds}`;
  document.querySelector(
    '[data-testid="currentUTCTime"]'
  ).textContent = `Current UTC Time: ${timeString}`;
}

// Update the current day of the week initially
document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
).textContent = `Current Day: ${getCurrentDayOfTheWeek()}`;

// Update the current UTC time initially
updateCurrentUTCTime();

// Update the current UTC time every millisecond
setInterval(updateCurrentUTCTime, 1);
