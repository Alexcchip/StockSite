let url = "https://api.polygon.io/v1/open-close/";
let ticker;
let yea;
let mo;
let da;
let url2 = "?adjusted=true&apiKey=KVV51cHIUAc27CoerjSUKsaQX6o6IIxD";
let link;
let set = false
let input;
function setup() {
  createCanvas(1920, 1080);
  background(236, 227, 252);
  textSize(70);
  inp = createInput('Enter Ticker (go/enter to select)');
  inp.position((width / 2)-85, (height / 2)-150);
  inp.size(185);
  inp.changed(inpTicker);
  textSize(25)
  text(`Created by: Alexander Weinberger
 Contact: aw700m@bhsec.bard.edu`, width / 4, (height * .65));
  clearButton = createButton("Clear");
  clearButton.position((width / 2)+45, (height / 2)-100)
  clearButton.mousePressed(clearScr)
  highButton = createButton('High')
  highButton.position(width / 2, (height / 2)-100)
  highButton.mousePressed(high)
  lowButton = createButton('Low')
  lowButton.position((width / 2)-43, (height / 2)-100)
  lowButton.mousePressed(low)
  selectTickerButton = createButton("Go")
  selectTickerButton.position((width/2)+95,(height/2)-100)
  selectTickerButton.mousePressed(selectTicker)
  dateinp = createInput('Day (Ex: 03.28.2005)');
  dateinp.position((width / 2)-85, (height / 2)-200);
  dateinp.size(185);
  dateinp.changed(dateParser);
  noLoop()
}

function dateParser() {
  
  date = str(dateinp.value());
  console.log(typeof(date));
  let dateArray = date.split('.');
  console.log(dateArray[0],dateArray[1],dateArray[2]);
  mo = str("-" + str(dateArray[0]) + "-")
  da = str(dateArray[1])
  yea = str( "/" + str(dateArray[2]))
  console.log(mo,typeof(da),typeof(yea))
}
function inpTicker() {
  ticker = inp.value()
  console.log(`${ticker} inp`)
  clearScr(1)
  textSize(55)
  text(`${ticker}`, width / 2, height / 2);
}


function selectTicker() {
  console.log("BUtton was pressed",mo)
  ticker = inp.value()
}
function clearScr(reason) {
  if (reason == 1) {
    background(236, 227, 252)
    textSize(55)
    text(`${ticker}`, width / 2, height / 2);
    console.log("CSR 1")
    textSize(25)
    text(`Created by: Alexander Weinberger
 Contact: aw700m@bhsec.bard.edu`, width / 4, (height * .65));
    textSize(70)
  }
  else {
    console.log("ELSE CLSR")
    setup()
    textSize(70)
  }
}

function high() {
  findStockHigh();
} 

function low() {
  findStockLow();
}

function findStockHigh() {
  console.log(mo,da,yea + "yyy")
  loadJSON(url + ticker + yea + mo + da + url2, gotDataHigh);
}

function findStockLow() {
  console.log(mo,da,yea +" lowww testttt")
  loadJSON(url + ticker + yea + mo + da + url2, gotDataLow);
}

function gotDataHigh(data) {
  console.log(mo,da,yea)
  console.log(data.high);
  textAlign(CENTER, BOTTOM);
  textSize(70);
  if (set == true) {
    clearScr(1)  
  }   
  else {
    set = true
    console.log("high set true")
  }
  let new_data = text(`$${data.high}`, width / 2, height / 2 + 100);
  console.log(`${data.high} testing`)
}

function gotDataLow(data) {
  console.log(data.high);
  textAlign(CENTER, BOTTOM);
  textSize(70);
  if (set == true) {
    console.log("set true running low")
    clearScr(1)  
  }   
  else {
    set = true
    console.log("low set true")
  }
  let new_data = text(`${data.low}`, width / 2, height / 2 + 100);
  console.log("test")
}
