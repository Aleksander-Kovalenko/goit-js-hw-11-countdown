export default class Timer {
  constructor({ selector, date }) {
    this.refs = {
      timer: document.getElementById(selector),
      date: new Date(date),
    };

    this.start = this.startTimer();
  }

  updateCountDown() {
    setTimeout(this.startTimer.bind(this), 1000);
  }

  startTimer() {
    let now = new Date();
    let date = this.refs.date;
    const time = this.diffSubtract(now, date);
    let res = new Date(time);

    this.convertDate(res);
    this.updateCountDown();
  }

  diffSubtract(date1, date2) {
    return date2 - date1;
  }

  convertDate(time) {
    // console.log(currentDate - time);
    /*
     * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
     * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
     */
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));

    /*
     * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
     * остатка % и делим его на количество миллисекунд в одном часе
     * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
     */
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    /*
     * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
     * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
     */
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    /*
     * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
     * миллисекунд в одной секунде (1000)
     */
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    this.render(days, hours, mins, secs);
  }

  render(days, hours, min, secs) {
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

// const timer = new Timer({
//   selector: "timer-1",
//   date: new Date("Jul 17, 2022"),
// });
