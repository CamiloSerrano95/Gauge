var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.45, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support
    staticZones: [
        { strokeStyle: "#BFFF00", min: 0, max: 19 }, // Red from 100 to 130
        { strokeStyle: "#0174DF", min: 19, max: 60 }, // Yellow
        { strokeStyle: "#FFBF00", min: 60, max: 80 }, // Yellow
        { strokeStyle: "#DF0101", min: 80, max: 100 }  // Red
    ],
    staticLabels: {
        font: "10px sans-serif",  // Specifies font
        labels: [20, 60, 80, 100],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    }
};

var targetOne = document.getElementById('meterOne'); // your canvas element
var targetTwo = document.getElementById('meterTwo'); // your canvas element
var gaugeOne = new Gauge(targetOne).setOptions(opts); // create sexy gauge!
var gaugeTwo = new Gauge(targetTwo).setOptions(opts); // create sexy gauge!

gaugeOne.maxValue = 100; // set max gauge value
gaugeOne.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gaugeOne.animationSpeed = 32; // set animation speed (32 is default value)
//gaugeOne.set(50); // set actual value

gaugeTwo.maxValue = 100; // set max gauge value
gaugeTwo.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gaugeTwo.animationSpeed = 32; // set animation speed (32 is default value)

setInterval(function () {
    var randomOne = 1 + Math.round(60 * Math.random())
    var randomTwo = 1 + Math.round(60 * Math.random())

    gaugeOne.set(randomOne); // set actual value
    gaugeTwo.set(randomTwo); // set actual value
    
    var statusPerson = document.getElementById("percentageOne").innerHTML = "Estado persona " + randomOne + "%";
    var statusHome = document.getElementById("percentageTwo").innerHTML = "Estado hogar " + randomTwo+"%";
}, 1300);

//gaugeTwo.set(50); // set actual value