let selectedMonth = 1;

function localDate(yearNum = 2021, monthNum = 1, dayNum = 1) {
  // this = {}
  //   console.log(this, arguments);

  this._d = new Date(yearNum, monthNum - 1, dayNum);
  this.getDate = function () {
    return localDateObj._d.getDate();
  };

  const localDateObj = {
    _d: new Date(yearNum, monthNum - 1, dayNum),
    getDate() {
      return localDateObj._d.getDate();
    },
    getMonthNum() {
      return localDateObj._d.getMonth() + 1;
    },
    getMonthName() {
      return localDate.MONTHES[localDateObj._d.getMonth()];
    },
    getFullYear() {
      return localDateObj._d.getFullYear();
    },
    getDay() {
      return (localDateObj._d.getDay() - 1 + 7) % 7;
    },
    getDayNames() {
      return localDate.DAYS[localDateObj.getDay()];
    },
    toString() {
      return `${localDateObj.getDayNames()}, ${localDateObj.getDate()} ${
        localDate.MONTHESINDAY[localDateObj._d.getMonth()]
      } ${localDateObj.getFullYear()}`;
    },
  };

  return localDateObj;
}
console.log(">>>", localDate("", 9));

localDate.MONTHES = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
]; // ипользуем ф-цию как объект
localDate.MONTHESINDAY = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];
localDate.DAYS = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

// console.log(localDate(2020, 12, 28));

function calendar(monthNum, yearNum, rootSelector) {
  const firstDay = localDate(yearNum, monthNum, 1);
  const lastDay = localDate(yearNum, monthNum + 1, 0);
  const monthDays = [];
  const lastDayNum = lastDay.getDate() + 6 - lastDay.getDay();
  let _rootEl = document.querySelector(rootSelector); // создаем new календарь
  let _headerEl, _dayNamesEl, _daysEl;

  if (_rootEl === null) {
    _rootEl = document.createElement("div");

    _rootEl.className = "calendar";
  } else {
    _headerEl = _rootEl.querySelector(".calendar__title");
    _dayNamesEl = _rootEl.querySelector(".calendar__body--title");
    _daysEl = _rootEl.querySelector(".calendar__body--day.day");
  }

  if (!_headerEl) {
    _headerEl = document.createElement("div");
    _headerEl.className = "calendar__title";
  }

  if (!_dayNamesEl) {
    _dayNamesEl = document.createElement("ul");
    _dayNamesEl.className = "calendar__body--title";

    // localDate.DAYS.forEach(dayName => {
    //     const dayEl = document.createElement('li');

    //     dayEl.innerText = dayName;

    //     _dayNamesEl.append(dayEl);
    // });

    const dayNamesColl = localDate.DAYS.map((dayName) => {
      //
      const dayEl = document.createElement("li");

      dayEl.innerText = dayName;

      return dayEl;
    });

    _dayNamesEl.append(...dayNamesColl);
  }

  if (!_daysEl) {
    _daysEl = document.createElement("ul");
    _daysEl.className = "calendar__body--day day";
  }

  _rootEl.append(_headerEl, _dayNamesEl, _daysEl);

  for (let dayNum = 1 - firstDay.getDay(); dayNum <= lastDayNum; dayNum++) {
    monthDays.push(localDate(yearNum, monthNum, dayNum));
  }

  function _fillHeader() {
    _headerEl.innerHTML = `<span class="arrow-left"><</span>${firstDay.getMonthName()} ${firstDay.getFullYear()}<span class="arrow-right">></span>`; // получили шапку 3го календаря
  }

  function _renderDay(localDay) {
    // получили дни new календаря
    const el = document.createElement("li");
    const today = new Date();

    el.className = "calendar-day";
    debugger;
    if (new Date() == new Date(yearNum, monthNum, localDay.getDate())) {
      const span = document.createElement("span");
      el.append(span);
      span.innerText = localDay.getDate();
      console.log(el);
      el.className = "calendar-day day__activ";
    } else {
      el.innerText = localDay.getDate();
    }
    // console.log( )

    if (localDay.getMonthNum() !== monthNum) {
      el.classList.add("day__new_month");
    }

    return el;
  }

  function _fillDays() {
    const monthDaysColl = monthDays.map(_renderDay);
    _daysEl.innerText = "";
    _daysEl.append(...monthDaysColl);
  }

  _fillHeader();
  _fillDays();
  monthSelect();

  _daysEl.after(getSeparator());
  _headerEl.after(getSeparator());

  return {
    _rootEl,
    _headerEl,
    _dayNamesEl,
    _daysEl,
    firstDay,
    lastDay,
    monthDays,
    render() {
      return _rootEl;
    },
  };
}

function monthSelect() {
  const button_left = document.querySelector(".arrow-left");
  const button_right = document.querySelector(".arrow-right");

  button_left.addEventListener("click", (event) => {
    document.querySelector(".second-calendar").innerHTML = "";
    calendar(--selectedMonth, 2021, ".second-calendar");
  });
  button_right.addEventListener("click", (event) => {
    document.querySelector(".second-calendar").innerHTML = "";
    calendar(++selectedMonth, 2021, ".second-calendar");
  });
}

function getSeparator() {
  const _separation = document.createElement("hr");
  _separation.className = "calendar__separation";
  return _separation;
}

const secondCalendar = calendar(selectedMonth, 2021, ".second-calendar");

console.log(secondCalendar);
localDate.call({}, 2025, 2, 22);
// document.body.append( secondCalendar.render() );

// function iniciali(imia, familia, otchectvo, selector) {
//     let x = document.querySelector(selector);
//     x.innerHTML = `<p>${imia} ${familia} ${otchectvo}</p>`;
//     //return imia + familia + otchectvo;
// }

// console.log(iniciali('Vasya ','Ivanov ', 'Petrovich', '.test'))
