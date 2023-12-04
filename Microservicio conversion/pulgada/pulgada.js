// pulgada.js
function convertirDePulgada(cantidad, unitTo) {
    switch (unitTo) {
        case "meter":
            return cantidad / 39.3701;
        case "foot":
            return cantidad / 12;
        case "inch":
            return cantidad;
        default:
            return NaN;
    }
}

module.exports = convertirDePulgada;
