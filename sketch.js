let url = "https://api.polygon.io/v1/open-close/";
let ticker;
let yea = "/2022";
let mo = "-02-";
let da = "18";
let url2 = "?adjusted=true&apiKey=KVV51cHIUAc27CoerjSUKsaQX6o6IIxD";
let link;
let set = false
let input;
function setup() {
  createCanvas(1920, 1080);
  background(236, 227, 252);
  textSize(70);
  textAlign(CENTER, CENTER);
  inp = createInput('Enter Ticker (press enter to select)');
  inp.position((width / 2)-85, (height / 2)-200);
  inp.size(205);
  inp.changed(inpTicker);
  
}

function inpTicker() {
  ticker = inp.value()
  console.log(ticker)
  clearScr()
  textSize(55)
  textAlign(CENTER,CENTER)
  text(`${ticker}`, width / 2, height / 2);
}
function draw() {
  textSize(25)
  text(`Created by: Alexander Weinberger
 Contact: aw700m@bhsec.bard.edu`, width / 4, (height * .65));
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
  textSize(25)
  text(`Created by: Alexander Weinberger
 Contact: aw700m@bhsec.bard.edu`, width / 4, (height * .65));
  textSize(70)
  noLoop()
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
  if (set == true) {
    clearScr()  
  }   
  else {
    set = true
  }
  let new_data = text(`$${data.high}`, width / 2, height / 2 + 100);
  console.log(`${data.high} testing`)
}

function gotDataLow(data) {
  console.log(data.high);
  textAlign(CENTER, BOTTOM);
  textSize(70);
  if (set == true) {
    clearScr()  
  }   
  else {
    set = true
  }
  let new_data = text(`$${data.low}`, width / 2, height / 2 + 100);
  console.log("test")
}
