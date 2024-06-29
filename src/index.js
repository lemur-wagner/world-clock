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
  let curitibaElement = document.querySelector("#curitiba");
  let curitibaDateElement = curitibaElement.querySelector(".date");
  let curitibaTimeElement = curitibaElement.querySelector(".time");

  let curitibaTime = moment().tz("Brazil/East");

  curitibaDateElement.innerHTML = curitibaTime.format("MMMM Do YYYY");
  curitibaTimeElement.innerHTML = curitibaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
});

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = ` 
  <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
