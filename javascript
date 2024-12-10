function updateClock() {
  const clockElement = document.getElementById("digitalClock");
  
  // Get current time
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  // Format time as HH:MM:SS
  const currentTime = `${hours}:${minutes}:${seconds}`;
  
  // Update the clock element
  clockElement.textContent = currentTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();
