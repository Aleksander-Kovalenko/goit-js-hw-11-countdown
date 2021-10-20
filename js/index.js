import Timer from "./countdownTimer.js";

const timer = new Timer({
  selector: "timer-1",
  date: new Date("Jul 17, 2022"),
});

timer.startTimer();
