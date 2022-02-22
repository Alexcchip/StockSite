let url = "https://api.polygon.io/v1/open-close/";
let ticker = "AAPL";
let yea = "/2021";
let mo = "-06-";
let da = "18";
let url2 = "?adjusted=true&apiKey=KVV51cHIUAc27CoerjSUKsaQX6o6IIxD";
let link;
let dataChoice = close;
function setup() {
  createCanvas(1920, 1080);
  background(236, 227, 252);
  textSize(55);
  textAlign(CENTER, CENTER);
}

function draw() {
  text(`${ticker}`, width / 2, height / 2);
  noLoop()
}

function mousePressed() {
  d = dist(mouseX, mouseY, 960, 540);
  if (d < 50) {
    findStock();
  }
}

function findStock() {
  loadJSON(url + ticker + yea + mo + da + url2, gotData);
}

function gotData(data) {
  console.log(data.high);
  textAlign(CENTER, BOTTOM);
  textSize(70);
  let new_data = text(`${data.high}`, width / 2, height / 2 + 100);
  console.log("test")
}
