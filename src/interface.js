$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#temperature-up').click(function() {
    thermostat.increaseTemp();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.temperature)
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    updateTemperature();
  })

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    updateTemperature();
  })

  $('#powersaving-on').click(function() {
    thermostat.switchPowerSavingModeOn();
    updateTemperature();
  })

  $('#temperature-reset').click(function() {
    thermostat.resetTemp();
    updateTemperature();
  })
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.showEnergyUsage());
  }
});