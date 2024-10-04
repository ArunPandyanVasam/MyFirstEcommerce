// Name: Arun Pandyan Vasam
// Date: june/06/2023
var headsetQuantity=0;
var sonyHeadset = 'Sony Headset';
var headsetPrice = 50;
var headsetPriceDisplay = '$50';
function getHeadsetQuantity(){
    headsetQuantity = parseInt(prompt ("Product Quantity: "));
    if (headsetQuantity<=0 || isNaN(headsetQuantity)){
        alert('Please enter a valid product quantity.');
        
    }
    
    else {
        //alert(`You have ordered ${headset} headsets.`);
        
        //headsetQuantity+=headsetQuantity;
    }

}

function headsetCheckout() {
    if (headsetQuantity>0){
        
        document.write(`${sonyHeadset}&nbsp&nbsp&nbsp ${headsetQuantity} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${headsetPriceDisplay} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${headsetQuantity*headsetPrice} <br>`)
    }
    
}
    

var consoleQuantity=0;
var redGear = 'Red Gear';
var consolePrice = 250;
var consolePriceDisplay = '$250';
function getConsoleQuantity(){
    consoleQuantity = parseInt(prompt ("Product Quantity: "));
    if (consoleQuantity<0 || isNaN(consoleQuantity)){
        alert('Please enter a valid product quantity.');
        
    }
    else {
        //alert(`You have ordered ${Console} consoles.`);
        //consoleQuantity+=consoleQuantity;
    }
    
}

function ConsoleCheckout() {
    if (consoleQuantity>0){
        document.write(`${redGear}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${consoleQuantity} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${consolePriceDisplay} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${consoleQuantity*consolePrice} <br>`)
    }
}

var laptopQuantity=0;
var mac = 'Mac Book';
var macPrice = 1500;
var macPriceDisplay = '$1500';
function getlaptopQuantity(){
    laptopQuantity = parseInt(prompt ("Product Quantity: "));
    if (laptopQuantity<0 || isNaN(laptopQuantity)){
        alert('Please enter a valid product quantity.');
        
    }
    else {
        //alert(`You have ordered ${laptop} laptops.`);
        //laptopQuantity+=laptopQuantity;
    }
    
}

function laptopCheckout() {
    if (laptopQuantity>0){
        document.write(`${mac}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${laptopQuantity} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${macPriceDisplay} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${laptopQuantity*macPrice} <br>`)
    }
}

var mobileQuantity=0;
var samsung = 'Samsung';
var samsungPrice = 1000;
var samsungPriceDisplay = '$1000';
function getMobileQuantity(){
    mobileQuantity = parseInt(prompt ("Product Quantity: "));
    if (mobileQuantity<0 || isNaN(mobileQuantity)){
        alert('Please enter a valid product quantity.');
        
    }
    else {
        //alert(`You have ordered ${Mobile} mobiles.`);
        //mobileQuantity+=mobileQuantity;
    }
    
}

function mobileCheckout() {
    if (mobileQuantity>0){
        document.write(`${samsung}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${mobileQuantity} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${samsungPriceDisplay} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${mobileQuantity*samsungPrice} <br>`)
    }
}

var watchQuantity=0;
var fastTrack = 'Fasttrack';
var watchPrice = 500;
var watchPriceDisplay = '$500';
function getWatchQuantity(){
    watchQuantity = parseInt(prompt ("Product Quantity: "));
    if (watchQuantity<0 || isNaN(watchQuantity)){
        alert('Please enter a valid product quantity.');
        
    }
    else {
        //alert(`You have ordered ${Watch} watches.`);
        //watchQuantity+=watchQuantity;
    }
    
}

function watchCheckout() {
    if (watchQuantity>0){
        document.write(`${fastTrack}&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${watchQuantity} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ${watchPriceDisplay} &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp $${watchQuantity*watchPrice} <br>`)
    }
}

function checkOut() {
    var name = prompt("Name to mention in the order: ");
    if (isNaN(name)) {
    document.write(`Customer Name:  ${name} <br>`);
    receiptPrint();
    laptopCheckout();
    mobileCheckout();
    watchCheckout();
    ConsoleCheckout();
    headsetCheckout();
    addTax();

    }
    else {
        alert(`Please enter your name`);
    }
}

function addTax() {
    var total = (headsetQuantity*headsetPrice+consoleQuantity*consolePrice+laptopQuantity*macPrice+mobileQuantity*samsungPrice+watchQuantity*watchPrice);
    var totalTax = (total*13)/100;
    document.write(`Total Amount= $${total} <br>`)
    document.write(`Tax@13% of total amount = $${totalTax}`);
}

function receiptPrint() {
    document.write(`Product: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp  Quantity: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Cost: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Totalcost: <br>`);
}
    



