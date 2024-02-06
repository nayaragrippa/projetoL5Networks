const  request = require(`request`);

function getAndSortPlanetsByDiameter(){

var data, planets = []

return new Promise((resolve, reject)=>{

    request(`https://swapi.dev/api/planets`, (error, response, body) => {

    //convertendo a resposta para json
    data = JSON.parse(body)

        //aplica uma função para cada objeto dentro do array de resultado.
    data.results.forEach(planet => {

        //add o nome de cada objeto de personagem dentro do array de personagem
        planets.push({
            name:planet.name,
            diameter:parseFloat(planet.diameter)
            }
            )});
        //finaliza a promise retornando a array completa
        resolve( planets.sort((a,b)=> a.diameter-b.diameter));

        })
    })
    }

module.exports={getAndSortPlanetsByDiameter}