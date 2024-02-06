const express = require('express');
const characters = require('./characters')
const starships = require('./starships')
const planets = require('./planets')
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render("main/main")
}

);

app.get('/characters', (req, res) => {
   characters.cbGetAndSortCharactsByname()
         .then((v)=>{
         res.render('characters/characters', {pessoas: v})
      })
 });

 app.get('/planets', (req, res) => {

   planets.getAndSortPlanetsByDiameter()
         .then((v)=>{
         res.render('planets/planets', {planets: v})
      })
 });

 app.get('/starships', (req, res) => {
   starships.getAndSortStarshipsByname()
   .then((v)=>{
      res.render('starships/starships', {starships: v})
   })
 });

app.listen('8080',()=>{
    console.log('O servidor funfou');
})