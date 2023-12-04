// metro.js
function convertirDeMetro(cantidad, unitTo) {
    switch (unitTo) {
        case "meter":
            return cantidad;
        case "foot":
            return cantidad * 3.28084;
        case "inch":
            return cantidad * 39.3701;
        default:
            return NaN;
    }
}

module.exports = convertirDeMetro;