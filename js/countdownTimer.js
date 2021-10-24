export default class Timer {
  constructor({ selector, date }) {
    this.refs = {
      timer: document.getElementById(selector),
      date: new Date(date),
    };

    this.start = this.startTimer();
  }
  timerID = null;

  updateCountDown() {
    this.timerID = setTimeout(this.startTimer.bind(this), 1000);
  }

  startTimer() {
    let now = new Date();
    let date = this.refs.date;
    if (date - now <= 0) {
      clearTimeout(this.timerID);
      return this.convertDate(0);
    }

    const time = this.diffSubtract(now, date);
    let res = new Date(time);

    this.convertDate(res);
    this.updateCountDown();
  }

  diffSubtract(date1, date2) {
    return date2 - date1;
  }

  convertDate(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    this.render(days, hours, mins, secs);
  }

  render(days, hours, min, secs) {
    console.log(this.timerID);
    this.refs.timer.querySelector('span[data-value="days"]').textContent = days;
    this.refs.timer.querySelector('span[data-value="hours"]').textContent =
      hours;
    this.refs.timer.querySelector('span[data-value="mins"]').textContent = min;
    this.refs.timer.querySelector('span[data-value="secs"]').textContent = secs;
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}
