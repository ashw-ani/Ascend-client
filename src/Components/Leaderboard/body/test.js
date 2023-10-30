//Sheet Name : Webinar Data and Schedule Sheet - ( Developer Copy ) ( Chirag and Punnet ) https://script.google.com/macros/s/AKfycbzZVit23eopLK6YKy6pqLm2hZUIgGTGDorrkjEfE8TfSzLTcZ6OG8JWQ48sBz-GwAQRKQ/exec
var wDate;
var duration;
var apiUrl =
  "https://script.google.com/macros/s/AKfycbxF1cmQ1VAeGDokOD5dNoIGksAhIZKNP-0wuZvJJj77b1J-t77N51HxqgeyiB_DLzzdeQ/exec?programCode=Youtube&reqtype=date";
fetch(apiUrl) //api for the get request
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //  const tempdate=new Date('2023-10-16T05:00:00.000Z')
    wDate = new Date(data.wDateTime);
    var ourDate = new Date(data.wDateTime);
    duration = data.duration;
    duration = Capatilizer(duration);
    console.log(duration);
    var wDateTime = formatDate_(wDate);
    document.getElementById("wStartDate").innerText = wDateTime.date;
    document.getElementById("phonedate").innerText = wDateTime.date;
    document.getElementById("wStartTime").innerText = wDateTime.time;
    document.getElementById("phonetime").innerText = wDateTime.time;

    document.getElementById("wDuration").innerText = duration;
    document.getElementById("phoneduration").innerText = duration;

    // console.log(wDateTime)
    const handledTime = durationFinder(duration);
    const finalTime = addDurationToTime(
      ourDate,
      0,
      parseInt(handledTime.split(" ")[0]),
      0
    );

    const final = finaltimer(finalTime);
    document.getElementById("wStartTime").innerText += " " + final;
    document.getElementById("phonetime").innerText += " " + final;
    // console.log(parseInt(duration.split(' ')))
    // console.log('Final Time:', finalTime);
    setInterval("updateTimer()", 1000);
  });

console.log(handledTime);

//capatilizes the fetched duration
function Capatilizer(value) {
  const timearray = value.split(" ");
  const timelen = timearray.length;

  if (timelen >= 4) {
    timearray[1] = timearray[1].charAt(0).toUpperCase() + timearray[1].slice(1);
    timearray[3] = timearray[3].charAt(0).toUpperCase() + timearray[3].slice(1);
    return `${timearray[0]} ${timearray[1]} ${timearray[2]} ${timearray[3]}`;
  } else {
    timearray[1] = timearray[1].charAt(0).toUpperCase() + timearray[1].slice(1);
    return `${timearray[0]} ${timearray[1]}`;
  }
}

function durationFinder(data) {
  const dataArray = data.split(" ");
  const arrayLength = dataArray.length;

  if (arrayLength >= 4) {
    const hour = parseInt(dataArray[0]);
    const minute = parseInt(dataArray[2]);

    const totalTime = hour * 60 + minute;
    return `${totalTime} Minutes`;
  } else {
    const timeProperty = dataArray[1].toLowerCase();
    if (timeProperty == "hour" || timeProperty == "hours") {
      const hour = parseInt(dataArray[0]);
      const totalTime = hour * 60;
      return `${totalTime} Minutes`;
    } else {
      const totalTime = parseInt(dataArray[0]);
      return `${totalTime} Minutes`;
    }
  }
}
function finaltimer(handledTime) {
  const time_part_array = handledTime.split(":");
  let ampm = "AM";
  if (time_part_array[0] >= 12) {
    ampm = "PM";
  }
  if (time_part_array[0] > 12) {
    time_part_array[0] = time_part_array[0] - 12;
  }
  const formatted_time =
    time_part_array[0] + ":" + time_part_array[1] + " " + ampm;
  return formatted_time;
}

function addDurationToTime(initialTim, hours, minutes, seconds) {
  // Parse the initial time string to create a Date object
  //   const initialDate = new Date(initialTime);

  // Add the specified hours, minutes, and seconds to the Date object
  const initialDates = initialTim;
  console.log("new log", initialDates);
  initialDates.setHours(initialDates.getHours() + hours);
  initialDates.setMinutes(initialDates.getMinutes() + minutes);
  initialDates.setSeconds(initialDates.getSeconds() + seconds);

  const finalTime = initialDates.toTimeString().split(" ")[0];

  return finalTime;
}

// const finalTime = addDurationToTime(initialTime, 0,90,0); //

function formatDate_(date) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dateOrdinal = (d) => {
    return (
      d +
      (31 == d || 21 == d || 1 == d
        ? "st"
        : 22 == d || 2 == d
        ? "nd"
        : 23 == d || 3 == d
        ? "rd"
        : "th")
    );
  };
  const getTime = (date) => {
    var hrs = date.getHours();
    var mnts = date.getMinutes();
    var AMPM = hrs >= 12 ? "PM" : "AM";
    hrs = hrs % 12;
    hrs = hrs ? hrs : 12;
    mnts = mnts < 10 ? "0" + mnts : mnts;
    var result = hrs + ":" + mnts + " " + AMPM;
    return result;
  };
  const data_obj = {
    date: `${dateOrdinal(date.getDate())} ${
      months[date.getMonth()]
    }, ${date.getFullYear()}, ${days[date.getDay()]}`,
    time: `${getTime(date)} To `,
  };
  return data_obj;
  // return `🎯 ${dateOrdinal(date.getDate())} ${months[date.getMonth()]}, ${date.getFullYear()}, ${days[date.getDay()]} | 🕕 ${getTime(date)}`;
}
function updateTimer() {
  let future = wDate;
  let now = new Date();
  let diff = future - now;
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let mins = Math.floor(diff / (1000 * 60));
  let secs = Math.floor(diff / 1000);
  let d = days;
  let h = hours - days * 24;
  let m = mins - hours * 60;
  let s = secs - mins * 60;
  // document.querySelector(' .timerDays ').innerText = d;
  // document.querySelector(' .timerHours').innerText = h;
  // document.querySelector(' .timerMinutes').innerText = m;
  // document.querySelector(' .timerSeconds').innerText = s;
  document.querySelector(" .days ").innerText = d;
  document.querySelector(" .hours").innerText = h;
  document.querySelector(" .minutes").innerText = m;
  document.querySelector(" .seconds").innerText = s;
  document.querySelector(" .phonedays ").innerText = d;
  document.querySelector(" .phonehours").innerText = h;
  document.querySelector(" .phoneminutes").innerText = m;
  document.querySelector(" .phoneseconds").innerText = s;
  document.querySelector(" .newdays ").innerText = d;
  document.querySelector(" .newhours").innerText = h;
  document.querySelector(" .newminutes").innerText = m;
  document.querySelector(" .newseconds").innerText = s;
}
