const  request = require(`request`);


var data, characters = [] , url;

url = 'https://swapi.dev/api/people';

function getAndSortCharactsByname(url, callback){

    return new Promise((resolve, reject)=>{
            
            request(url, (error, response, body) => {

            data = JSON.parse(body)

            url = data.next

            if(data.next != null){

                data.results.forEach(person => {
                    
                    characters.push(person.name);

                });

                callback(url,getAndSortCharactsByname).then(()=> resolve(characters.sort()));

            }
            
            else
            { 
                resolve(characters.sort())
            }

            })
        }

    )
}

function cbGetAndSortCharactsByname(){

    return new Promise((resolve, reject)=>{

    getAndSortCharactsByname(url,getAndSortCharactsByname).then((v)=>resolve(v))

})
}

module.exports={cbGetAndSortCharactsByname}