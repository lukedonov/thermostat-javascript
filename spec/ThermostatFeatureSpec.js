'use strict'

describe('Can adjust temperature', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('can increase temperature', function() {
    thermostat.increaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(21);
  });
  
  it('can decrease temperature', function() {
    thermostat.decreaseTemp();
    expect(thermostat.getCurrentTemp()).toEqual(19);
  });

});

describe('Saving mode', function(){
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('turns on power saving mode', function (){
    // thermostat.powerSavingOn();
    expect(thermostat.maxTemp()).toEqual(25);
  });

  it('turns off power saving mode', function (){
    thermostat.powerSavingOff();
    expect(thermostat.maxTemp()).toEqual(32);
  });

});
