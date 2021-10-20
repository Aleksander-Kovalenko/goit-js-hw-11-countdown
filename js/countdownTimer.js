class Timer {
  constructor({ selector, date }) {
    const refs = {
      timer: document.getElementById(selector),
      date: new Date(date),
    };

    startTimer();
    function startTimer() {
      const timerId = setTimeout(() => {
        let now = new Date();

        const time = diffSubtract(now, date);
        let res = new Date(time);

        convertDate(res);
        startTimer();
      }, 1000);
    }

    function diffSubtract(date1, date2) {
      return date2 - date1;
    }

    function convertDate(time) {
      // console.log(currentDate - time);
      /*
       * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
       * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
       */
      const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));

      /*
       * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
       * остатка % и делим его на количество миллисекунд в одном часе
       * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
       */
      const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      /*
       * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
       * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
       */
      const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      /*
       * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
       * миллисекунд в одной секунде (1000)
       */
      const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

      render(days, hours, mins, secs);
    }

    function render(days, hours, min, secs) {
      refs.timer.querySelector('span[data-value="days"]').textContent = days;
      refs.timer.querySelector('span[data-value="hours"]').textContent = hours;
      refs.timer.querySelector('span[data-value="mins"]').textContent = min;
      refs.timer.querySelector('span[data-value="secs"]').textContent = secs;
    }

    function pad(value) {
      return String(value).padStart(2, "0");
    }
  }
}

const timer = new Timer({
  selector: "timer-1",
  date: new Date("Jul 17, 2022"),
});
