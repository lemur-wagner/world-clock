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
