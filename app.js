'use strict';

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allShops = [];



// -------------------------------------TOGETHER-----------------------------------------------------------------START

function Shop(location, minCust, maxCust, avgCookie) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.salesPerHour = [];
  this.dailyTotalSales = 0;

  // This Function creates a loop that  takes the length of shop hours and then creates random numbers to then push it to the array salesPerHour.
  this.salesCounter = function () {
    for (var i = 0; i < shopHours.length; i++) {
      var randomNumber = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookie);
      this.salesPerHour.push(randomNumber);

    }
  };

  // This function takes the sales per hour length and creates a total setting the counter equal to salesPerHour
  this.dailyTotal = function() {
    for (var i = 0; i < this.salesPerHour.length; i++) {
      this.dailyTotalSales += this.salesPerHour[i];
    }
  };


  // Here I am calling the function so that my code is executed.
  this.salesCounter();
  this.dailyTotal();

  // I am now pushing this information to the array allShops
  allShops.push(this);

}

// -------------------------------------TOGETHER-----------------------------------------------------------------END


// -------------------------------------TOGETHER-----------------------------------------------------------------START

// Creating all new Shops!!
var seattle = new Shop('Seattle', 23, 65, 6.3);
var tokyo = new Shop('Tokyo',3, 24, 1.2);
var dubai = new Shop('Dubai', 11, 38, 3.7);
var paris = new Shop('Paris', 20, 38, 2.3);
var lima = new Shop('Lima',2,16,4.6);


// -------------------------------------TOGETHER-----------------------------------------------------------------END


// -------------------------------------TOGETHER-----------------------------------------------------------------START

// Tables

var tablebody = document.getElementById('tableElement');

var headerRow = function () {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('th');
  thElement.textContent = 'Store Location';
  trElement.appendChild(thElement);

  for (var i=0; i < shopHours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = shopHours[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = 'Daily Total Sales';
  trElement.appendChild(tdElement);

  tablebody.appendChild(trElement);
};

headerRow();

Shop.prototype.render = function () {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('td');
  thElement.textContent = this.location;
  trElement.appendChild(thElement);

  for ( var i =0; i < shopHours.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.salesPerHour[i];
    trElement.appendChild(tdElement);
  }


  var totalElement = document.createElement('td');
  totalElement.textContent = this.dailyTotalSales;
  trElement.appendChild(tdElement);
  tablebody.appendChild(trElement);
};


var totalRow = function () {
  var trElement = document.createElement('tr');
  var thElement = document.createElement('td');
  thElement.textContent = 'Total: ';
  trElement.appendChild(thElement);

  for (var i = 0; i < shopHours.length; i++) {
    var tdElement = document.createElement ('td');
    var finalTotal = 0;
    for ( var o = 0; o < allShops.length; o++) {
      finalTotal += allShops[o].salesPerHour[i];
      tdElement.textContent = finalTotal;
      trElement.appendChild(tdElement);
    }
  }
  var finaLTotal = o;
  for (var l = 0; l < allShops.length; l++) {
    finaLTotal += allShops[l].dailyTotalSales;
  }


  var lastRow = document.createElement('td');
  lastRow.textContent = finaLTotal;
  trElement.appendChild(lastRow);
  tablebody.appendChild(trElement);
};

totalRow();



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
totalRow();

var newForm = document.getElementById('newForm');
newForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  console.log('event.target.inputElementNewLocation.value:', event.target.inputElementNewLocation.value);


  this.location = event.target.inputElementNewLocation.value;
  this.minCust = event.target.inputElementMinimumCustomers.value;
  this.maxCust = event.target.inputElementMaximumCustomers.value;
  this.avgCookie = event.target.inputElementMaximumCustomers.value;

  var newLocation = new Shop(this.location, this.minCust, this.maxCust, this.avgCookie);
  allShops.push(newLocation);

  tablebody.removeChild(tablebody.lastChild);

  newLocation.render();

  totalRow();

  alert(`The new location added is ${this.location} and the minimum amount of customers is: ${this.minCust}, maximum amount of customers is: ${this.maxCust} and average cookies are: ${this.avgCookie}`);
}