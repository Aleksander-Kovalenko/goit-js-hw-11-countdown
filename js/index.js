import Timer from "./countdownTimer.js";

const timer = new Timer({
  selector: "timer-1",
  date: new Date("Apr 01, 2022"),
});

timer.startTimer();
