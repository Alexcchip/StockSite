let url = "https://api.polygon.io/v1/open-close/";
let ticker = "NFLX";
let yea = "/2022";
let mo = "-02-";
let da = "18";
let url2 = "?adjusted=true&apiKey=KVV51cHIUAc27CoerjSUKsaQX6o6IIxD";
let link;


function setup() {
  createCanvas(1920, 1080);
  background(236, 227, 252);
  textSize(55);
  textAlign(CENTER, CENTER);
  /*let inp = createInput('');
  inp.position(0, 0);
  inp.size(100);
  inp.input(myInputEvent);*/
  
}

function draw() {
  text(`${ticker}`, width / 2, height / 2);
  clearButton = createButton("Clear");
  clearButton.position((width / 2)+100, (height / 2)-100)
  clearButton.mousePressed(clearScr)
  highButton = createButton('High')
  highButton.position(width / 2, (height / 2)-100)
  highButton.mousePressed(high)
  lowButton = createButton('Low')
  lowButton.position((width / 2)-100, (height / 2)-100)
  lowButton.mousePressed(low)

  noLoop();
  
}

function clearScr() {
  background(236, 227, 252)
  console.log("test")
  textSize(55)
  textAlign(CENTER,CENTER)
  text(`${ticker}`, width / 2, height / 2);
  
}
/*function myInputEvent() {
  console.log(this.value());
  ticker = this.value()
  console.log(`The ticker is${ticker}`)
  noLoop();
}*/
function high() {
  findStockHigh();
}

function low() {
  findStockLow();
}

function findStockHigh() {
  loadJSON(url + ticker + yea + mo + da + url2, gotDataHigh);
}

function findStockLow() {
  loadJSON(url + ticker + yea + mo + da + url2, gotDataLow);
}

function gotDataHigh(data) {
  console.log(data.high);
  textAlign(CENTER, BOTTOM);
  textSize(70);
  let new_data = text(`${data.high}`, width / 2, height / 2 + 100);
  console.log("test")
}

function gotDataLow(data) {
  console.log(data.high);
  textAlign(CENTER, BOTTOM);
  textSize(70);
  let new_data = text(`${data.low}`, width / 2, height / 2 + 100);
  console.log("test")
}
