window.addEventListener("DOMContentLoaded", function () {
  console.log("hello js is linked ======================");

  let detailsArray = [
    {
      title: "Taymouth Castle",
      desc: " The Hamptons Newyork",
      degrees: "22°C",
      mph: "700 mph",
      celsius: "173 °C",
      location: "30.139339°N/-98.022342°W",
    },
    {
      title: "Makena",
      desc: "Pertshire,Scotland",
      degrees: "23°C",
      mph: "701 mph",
      celsius: "175 °C",
      location: "30.1395656°N/-98.034545°W",
    },
    {
      title: "Naples Beach Club",
      desc: "desNaples,Floridacription2",
      degrees: "24°C",
      mph: "766 mph",
      celsius: "172°C",
      location: "30.13645657°N/-98.024545°W",
    },
    {
      title: "North shore preserve",
      desc: " kaua'i,Hawaii",
      degrees: "32°C",
      mph: "224 mph",
      celsius: "234°C",
      location: "23.454556°N/-98.025454°W",
    },
    {
      title: "James Island",
      desc: "Southern Gulf Islands,British Columbia,Canada",
      degrees: "39°C",
      mph: "234 mph",
      celsius: "374 °C",
      location: "32.2454545°N/-23.0343442°W",
    },
    {
      title: "Costaterra",
      desc: "Comporta,Portugal",
      degrees: "20°C",
      mph: "233 mph",
      celsius: "245 °C",
      location: "18.3424245°N/-98.234343°W",
    },
    {
      title: "Barbuda Ocean Club",
      desc: "arbuda,West Indies",
      degrees: "25°C",
      mph: "723 mph",
      celsius: "625 °C",
      location: "33.3243439°N/-98.876482°W",
    },
    {
      title: "Driftwood ",
      desc: "Austin,Texas",
      degrees: "27°C",
      mph: "702 mph",
      celsius: "342 °C",
      location: "30.3434339°N/-98.432342°W",
    },
    {
      title: "Traubadour",
      desc: "Nashiville,Tennessee",
      degrees: "35°C",
      mph: "720 mph",
      celsius: "233 °C",
      location: "30.2343439°N/-98.343442°W",
    },
    {
      title: "Playa Grande",
      desc: "Rio San Juan,Dominician Republic",
      degrees: "26°C",
      mph: "733 mph",
      celsius: "233 °C",
      location: "30.3334239°N/-98.133342°W",
    },
    {
      title: "Chilenobay",
      desc: "Cabo Son Lucas , Mexico",
      degrees: "45°C",
      mph: "723 mph",
      celsius: "123 °C",
      location: "30.334341°N/-98.32342°W",
    },
    {
      title: "The Summit",
      desc: "Las Vegas , Nevada",
      degrees: "23°C",
      mph: "723 mph",
      celsius: "163 °C",
      location: "30.1234339°N/-98.332342°W",
    },
    {
      title: "Dune Deck",
      desc: "Westhampton Beach , NY",
      degrees: "32°C",
      mph: "720 mph",
      celsius: "243 °C",
      location: "30.14343449°N/-98.023242°W",
    },
    {
      title: "Silo Ridge",
      desc: "Amenia , New York",
      degrees: "24°C",
      mph: "454 mph",
      celsius: "767 °C",
      location: "30.1554333°N/-98.4354342°W",
    },
    {
      title: "Makena",
      desc: "Maui, Hawaii",
      degrees: "34°C",
      mph: "723 mph",
      celsius: "978 °C",
      location: "30.16876549°N/-98.4545345°W",
    },
    {
      title: "Yellow Stone Club",
      desc: "Big Sky , Montana",
      degrees: "34°C",
      mph: "343 mph",
      celsius: "987 °C",
      location: "30.7437479°N/-98.24432242°W",
    },
    {
      title: "Gozzer Ranch",
      desc: "Coeur d'Alene , Idaho",
      degrees: "23°C",
      mph: "703 mph",
      celsius: "231 °C",
      location: "30.1331339°N/-98.0323242°W",
    },
    {
      title: "Madison",
      desc: "La Quinta , Calfornia",
      degrees: "31°C",
      mph: "234 mph",
      celsius: "134 °C",
      location: "30.33434439°N/-98.333342°W",
    },
    {
      title: "Baker's Bay",
      desc: "Great Guana Cay , Bahamas",
      degrees: "23°C",
      mph: "726 mph",
      celsius: "145 °C",
      location: "30.2444219°N/-98.5757542°W",
    },
    {
      title: "Hideway",
      desc: "Le Quinta , Calfornia",
      degrees: "45°C",
      mph: "703 mph",
      celsius: "153 °C",
      location: "30.21333239°N/-98.122342°W",
    },
    {
      title: "Mountaintop",
      desc: "Cashiers , North Carolina",
      degrees: "24°C",
      mph: "723 mph",
      celsius: "233 °C",
      location: "30.232339°N/-98.03342°W",
    },
    {
      title: "Mirabel",
      desc: "Scottsdale , Arizona",
      degrees: "43°C",
      mph: "723 mph",
      celsius: "333 °C",
      location: "30.139339°N/-98.022342°W",
    },
    {
      title: "Kuki'o",
      desc: "Kohala , Hawaii",
      degrees: "33°C",
      mph: "132 mph",
      celsius: "312 °C",
      location: "30.113239°N/-98.022342°W",
    },
    {
      title: "Vaquero",
      desc: "Westlake , Texas",
      degrees: "34°C",
      mph: "233 mph",
      celsius: "373 °C",
      location: "30.23434339°N/-98.34342°W",
    },
    {
      title: "Iron Horse",
      desc: "Whitefish , Montana",
      degrees: "34°C",
      mph: "734 mph",
      celsius: "645 °C",
      location: "30.1234349°N/-98.022133°W",
    },
    {
      title: "Cordevalle",
      desc: "Silicon Valley , Calfornia",
      degrees: "24°C",
      mph: "700 mph",
      celsius: "132 °C",
      location: "30.1313332°N/-98.02132°W",
    },
    {
      title: "Estancia",
      desc: "Scottsdale , Arizona",
      degrees: "34°C",
      mph: "233 mph",
      celsius: "765 °C",
      location: "30.765669°N/-98.0224242°W",
    },
    {
      title: "Makena",
      desc: "Maui, Hawaii",
      degrees: "37°C",
      mph: "293 mph",
      celsius: "323 °C",
      location: "30.324319°N/-98.02122°W",
    },
    {
      title: "Chilenobay",
      desc: "Cabo Son Lucas , Mexico",
      degrees: "37°C",
      mph: "627 mph",
      celsius: "765 °C",
      location: "30.1321339°N/-98.086263°W",
    },
    {
      title: "Traubadour",
      desc: "Nashiville,Tennessee",
      degrees: "23°C",
      mph: "786 mph",
      celsius: "173 °C",
      location: "30.13454533°N/-98.07576322°W",
    },
  ];

  let count = 0;

  let _title = document.querySelector(".title");
  let _desc = document.querySelector(".description");
  let prev = document.getElementById("previous");
  let nxt = document.getElementById("next");
  let _degrees = document.getElementById("weather");
  let _mph = document.getElementById("megaperhr");
  let _celsius = document.getElementById("celsiusdirection");
  let _location = document.getElementById("map");

  _title.innerHTML = detailsArray[count].title;
  _desc.innerHTML = detailsArray[count].desc;
  _degrees.innerHTML = detailsArray[count].degrees;
  _mph.innerHTML = detailsArray[count].mph;
  _celsius.innerHTML = detailsArray[count].celsius;
  _location.innerHTML = detailsArray[count].location;

  nxt.addEventListener("click", function () {
    console.log(nxt, count);
    if (count >= 0) {
      count++;
    }
    console.log("count", detailsArray[count].title);
    _title.innerHTML = detailsArray[count].title;
    _desc.innerHTML = detailsArray[count].desc;
    _degrees.innerHTML = detailsArray[count].degrees;
    _mph.innerHTML = detailsArray[count].mph;
    _celsius.innerHTML = detailsArray[count].celsius;
    _location.innerHTML = detailsArray[count].location;
  });

  prev.addEventListener("click", function () {
    console.log(prev, count);
    if (count < 40) {
      count--;
    }
    console.log("count", detailsArray[count].title);
    _title.innerHTML = detailsArray[count].title;
    _desc.innerHTML = detailsArray[count].desc;
    _degrees.innerHTML = detailsArray[count].degrees;
    _mph.innerHTML = detailsArray[count].mph;
    _celsius.innerHTML = detailsArray[count].celsius;
    _location.innerHTML = detailsArray[count].location;
  });
});
