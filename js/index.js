import Timer from "./countdownTimer.js";

const timer = new Timer({
  selector: "timer-1",
  date: new Date("Oct 26, 2021"),
});

timer.startTimer();
