setInterval(function () {
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");

  warsawDateElement.innerHTML = warsawTime.format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = warsawTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
});

setInterval(function () {
  let oxfordElement = document.querySelector("#oxford");
  let oxfordDateElement = oxfordElement.querySelector(".date");
  let oxfordTimeElement = oxfordElement.querySelector(".time");

  let oxfordTime = moment().tz("Europe/London");

  oxfordDateElement.innerHTML = oxfordTime.format("MMMM Do YYYY");
  oxfordTimeElement.innerHTML = oxfordTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
});

setInterval(function () {
  let buenosAiresElement = document.querySelector("#buenos-aires");
  let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
  let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");

  let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

  buenosAiresDateElement.innerHTML = buenosAiresTime.format("MMMM Do YYYY");
  buenosAiresTimeElement.innerHTML = buenosAiresTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
});

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm")} <small>${cityTime.format(
    "A"
  )}</small></div>
        </div>
        <a href="index.html">All cities</a>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
