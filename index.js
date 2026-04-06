const feetConversion = 3.281
const gallonConversion = 0.264
const poundConversion = 2.204
const convertForm = document.getElementById("convert-form");
const unitInput = document.getElementById("unit-input")
const lengthEl = document.getElementById("length-el")   
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

function convertUnits(value, conversion) {
    let valueInMetric = (value * conversion).toFixed(3)
    let valueInImperial = (value / conversion).toFixed(3)
    
    return [valueInMetric, valueInImperial]
}

function getUserInput() {
    return Number(unitInput.value)
}

function renderLengthText(userInput, metricValue, imperialValue) {
    return `${userInput} meters = ${metricValue} feet | ${userInput} feet = ${imperialValue} meters`
}

function renderVolumeText(userInput, metricValue, imperialValue) {
    return `${userInput} liters = ${metricValue} gallons | ${userInput} gallons = ${imperialValue} liters`
}

function renderMassText(userInput, metricValue, imperialValue) {
    return `${userInput} kilos = ${metricValue} pounds | ${userInput} pounds = ${imperialValue} kilos`
}

function focusInput() {
    unitInput.focus();
}

convertForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
    const value = getUserInput()
    const [lengthMetric, lengthImperial] = convertUnits(value, feetConversion)
    const [volumeMetric, volumeImperial] = convertUnits(value, gallonConversion)
    const [massMetric, massImperial] = convertUnits(value, poundConversion)
    
    lengthEl.textContent = renderLengthText(value, lengthMetric, lengthImperial)
    volumeEl.textContent = renderVolumeText(value, volumeMetric, volumeImperial)
    massEl.textContent = renderMassText(value, massMetric, massImperial)
    
    // Focus the input after the user converts a value
    focusInput();
})

// Focus the input on page load
focusInput()
