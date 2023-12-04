// pie.js
function convertirDePie(cantidad, unitTo) {
    switch (unitTo) {
        case "meter":
            return cantidad / 3.28084;
        case "foot":
            return cantidad;
        case "inch":
            return cantidad * 12;
        default:
            return NaN;
    }
}

module.exports = convertirDePie;
