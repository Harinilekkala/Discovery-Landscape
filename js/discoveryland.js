window.addEventListener('DOMContentLoaded', function () {
console.log("hello js is linked ======================");

let detailsArray = [
  { title: "Taymouth Castle",              desc: " The Hamptons Newyork", degrees:22.1 },
  { title: "Homewood Mountain & Lakeclub", desc: "Pertshire,Scotland" },
  { title: "Naples Beach Club",            desc: "desNaples,Floridacription2" },
  { title: "North shore preserve",         desc: " kaua'i,Hawaii" },
  { title: "James Island",                 desc: "Southern Gulf Islands,British Columbia,Canada" },
  { title: "Costaterra",                   desc: "Comporta,Portugal" },
];

let count = 0;
let prev = document.getElementById('previous');
let nxt = document.getElementById('next');
let _title = document.querySelector('.title');
let _degrees = document.querySelector('.weatherclass')
let _desc = document.querySelector('.description');

  _title.innerHTML = detailsArray[count].title;
  _desc.innerHTML = detailsArray[count].desc;
  _degrees.innerHTML = detailsArray[count].degrees;

  nxt.addEventListener("click", function () {
  console.log(nxt, count);
  if (count >= 0) {
    count++;
  }
  console.log("count", detailsArray[count].title);
  _title.innerHTML = detailsArray[count].title;
  _desc.innerHTML = detailsArray[count].desc;
  _degrees.innerHTML = detailsArray[count].degrees;
});

prev.addEventListener("click", function () {
  console.log(prev,count);
  if (count < 7) {
    count--;
  }
  console.log("count", detailsArray[count].title);
  _title.innerHTML = detailsArray[count].title;
  _desc.innerHTML = detailsArray[count].desc;
  _degrees.innerHTML = detailsArray[count].degrees;
});
})
