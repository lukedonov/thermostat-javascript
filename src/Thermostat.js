'use strict'

function Thermostat(){
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this._maxTemp = 25;
};

Thermostat.prototype.getCurrentTemp = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.maxTemp = function () {
  return this._maxTemp;
};

Thermostat.prototype.powerSavingOn = function () {
  this._maxTemp = 25;
};

Thermostat.prototype.powerSavingOff = function () {
  this._maxTemp = 32;
};
