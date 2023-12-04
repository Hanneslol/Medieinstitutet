import './style.css'


const countdown = () => {

  const countDate = new Date("December 24, 2023 00:00:00").getTime();
  console.log(countDate)
  const countNow = new Date().getTime()
  const countDif = countDate - countNow;

  console.log(countDif)

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;


  // const textSecond = countDif / second;
  // const textMinute = countDif / minute;
  // const textHour = countDif / hour;
  const textDay = Math.floor(countDif / day);
  const textHour = Math.floor((countDif % day) / hour);
  const textMinute = Math.floor((countDif % hour) / minute);
  const textSecond = Math.floor((countDif % minute) / second);
  const textMillisecond = Math.floor(countDif % second);

  // const textDay = Math.trunc(countDif / day);

  // const textDayTrunc = Math.trunc(textDay);
  // const textSecondTrunc = Math.trunc(textSecond);
  // const textMinuteTrunc = Math.trunc(textMinute);
  // const textHourTrunc = Math.trunc(textHour);

  // console.log(textSecondTrunc)

  // console.log(textDayTrunc)

  console.log(textDay)
  console.log(textHour)
  console.log(textMinute)
  console.log(textSecond)

  document.querySelector(".day").innerHTML = textDay;
  document.querySelector(".hour").innerHTML = textHour;
  document.querySelector(".minute").innerHTML = textMinute;
  document.querySelector(".second").innerHTML = textSecond;
  document.querySelector(".millisecond").innerHTML = textMillisecond;


}

setInterval(countdown, 1)
