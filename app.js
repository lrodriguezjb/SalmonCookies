'use strict';
var mainEl = document.getElementById('cookieshop');

var insideEl = document.createElement('h1');
insideEl.textContent = 'Seattle: ';
mainEl.appendChild(insideEl);


var seattle = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'total'],
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  randomTotal: 0,
  hourTotal: function () {
    var randNums = Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookies ); this.randomTotal += randNums;
    return randNums;

  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var insideEl = document.createElement('li');
      insideEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      mainEl.appendChild(insideEl);
    }
    insideEl.textContent = `Total: ${this.randomTotal} cookies`;
    mainEl.appendChild(insideEl);
  },
};

seattle.render();


seattle.hourTotal();

// -----------------------------------------------------------------------------------------------------------------------------
var mainEl = document.getElementById('cookieshop');
var insideEl = document.createElement('h1');
insideEl.textContent = 'Tokyo: ';
mainEl.appendChild(insideEl);

var tokyo = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  minCust: 3,
  maxCust: 24,
  avgCookies: 1.2,
  randomTotal: 0,
  hourTotal: function () {
    var randNums = Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookies ); this.randomTotal += randNums;
    return randNums;

  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var insideEl = document.createElement('li');
      insideEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      mainEl.appendChild(insideEl);
    }
    insideEl.textContent = `Total: ${this.randomTotal} cookies`;
    mainEl.appendChild(insideEl);
  },
};

tokyo.render();


tokyo.hourTotal();

// -------------------------------------------------------------------------------

var mainEl = document.getElementById('cookieshop');
var insideEl = document.createElement('h1');
insideEl.textContent = 'Dubai: ';
mainEl.appendChild(insideEl);

var dubai = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  minCust: 11,
  maxCust: 38,
  avgCookies: 3.7,
  randomTotal: 0,
  hourTotal: function () {
    var randNums = Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookies ); this.randomTotal += randNums;
    return randNums;

  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var insideEl = document.createElement('li');
      insideEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      mainEl.appendChild(insideEl);
    }
    insideEl.textContent = `Total: ${this.randomTotal} cookies`;
    mainEl.appendChild(insideEl);
  },
};

dubai.render();


dubai.hourTotal();

// -----------------------------------------------------------------------------------------------------------------------------

var mainEl = document.getElementById('cookieshop');

var insideEl = document.createElement('h1');
insideEl.textContent = 'Paris: ';
mainEl.appendChild(insideEl);


var paris = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  minCust: 20,
  maxCust: 38,
  avgCookies: 2.3,
  hourTotal: function () {
    return Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookies );
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var insideEl = document.createElement('li');
      insideEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      mainEl.appendChild(insideEl);
    }
  },
};

paris.render();


paris.hourTotal();

// -----------------------------------------------------------------------------------------------------------------------------
var mainEl = document.getElementById('cookieshop');

var insideEl = document.createElement('h1');
insideEl.textContent = 'Lima: ';
mainEl.appendChild(insideEl);


var lima = {
  shopHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'],
  minCust: 2,
  maxCust: 16,
  avgCookies: 4.6,
  hourTotal: function () {
    return Math.floor( Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCookies );
  },

  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var insideEl = document.createElement('li');
      insideEl.textContent = `${this.shopHours[i]}: ${this.hourTotal()} cookies`;
      mainEl.appendChild(insideEl);
    }
  },
};

lima.render();


lima.hourTotal();



