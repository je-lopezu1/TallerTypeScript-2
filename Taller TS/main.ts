import { Serie } from "./serie.js";

import { series } from "./data.js";

const seriesTbody: HTMLElement = document.getElementById('series')!;
let seriesCbody: HTMLElement = document.getElementById('cards')!; 

console.log('Hola');

function seriesEnTablas(series: Serie[]) {
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                            <td>${serie.titulo}</td>
                            <td>${serie.plataforma}</td>
                            <td>${serie.numTemporadas}</td>`;
                            trElement.addEventListener("click", function(){mostrarCard(serie);});
        seriesTbody.appendChild(trElement);
    });
}


function getTemporadasPromedio(series: Serie[]): void {
    var suma = 0;
    const numSeries = series.length;
    series.forEach((series) => {
        suma += series.numTemporadas;
    });
    suma = suma / numSeries;
    let pElement= document.createElement("p")
    pElement.innerHTML =`Temporadas promedio: ${suma}`;

    seriesTbody.appendChild(pElement);
  }

  function mostrarCard(serie): void {
    console.log('mostrando cartas...');
    const seriesCbody: HTMLElement = document.getElementById('cards')!;
    clearDetalleSerie();
    let ulElement = document.createElement("ul");
    ulElement.innerHTML = `<li><img src="${serie.imagen}" class="card-img-top" alt="Imagen-Serie"></li>
                            <li style="font-weight: bold;">${serie.titulo}</li>
                            <li>${serie.descripcion}</li>`
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