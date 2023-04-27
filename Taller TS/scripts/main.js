import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var seriesCbody = document.getElementById('cards');
console.log('Hola');
function seriesEnTablas(series) {
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n                            <td>").concat(serie.titulo, "</td>\n                            <td>").concat(serie.plataforma, "</td>\n                            <td>").concat(serie.numTemporadas, "</td>");
        trElement.addEventListener("click", function () { mostrarCard(serie); });
        seriesTbody.appendChild(trElement);
    });
}
function getTemporadasPromedio(series) {
    var suma = 0;
    var numSeries = series.length;
    series.forEach(function (series) {
        suma += series.numTemporadas;
    });
    suma = suma / numSeries;
    var pElement = document.createElement("p");
    pElement.innerHTML = "Temporadas promedio: ".concat(suma);
    seriesTbody.appendChild(pElement);
}
function mostrarCard(serie) {
    console.log('mostrando cartas...');
    var seriesCbody = document.getElementById('cards');
    clearDetalleSerie();
    var ulElement = document.createElement("ul");
    ulElement.innerHTML = "<li><img src=\"".concat(serie.imagen, "\" class=\"card-img-top\" alt=\"Imagen-Serie\"></li>\n                            <li style=\"font-weight: bold;\">").concat(serie.titulo, "</li>\n                            <li>").concat(serie.descripcion, "</li>");
    seriesCbody.appendChild(ulElement);
}
function clearDetalleSerie() {
    while (seriesCbody.hasChildNodes()) {
        if (seriesCbody.firstChild != null) {
            seriesCbody.removeChild(seriesCbody.firstChild);
        }
    }
}
seriesEnTablas(series);
getTemporadasPromedio(series);
