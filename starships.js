const  request = require(`request`);

function getAndSortStarshipsByname(){

var data, starships = []

return new Promise((resolve, reject)=>{

request(`https://swapi.dev/api/starships`, (error, response, body) => {

//convertendo a resposta para json
data = JSON.parse(body)

    //aplica uma função para cada objeto dentro do array de resultado.
    data.results.forEach(starship => {

        //add o nome de cada objeto de personagem dentro do array de personagem
        starships.push(starship.name)
        });
    
    //finaliza a promise retornando a array completa
    resolve( starships.sort());
})

})
}

module.exports={getAndSortStarshipsByname}