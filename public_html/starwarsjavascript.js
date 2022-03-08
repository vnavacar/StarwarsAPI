/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = async() => {
    
   // const abc = await obtenerDatosSWAPI("adb");

   // console.log(abc);
    obtenerPeliculas();
    
};


async function obtenerPeliculas(){
    
    
    const Peliculas = await obtenerDatosSWAPI("https://swapi.dev/api/films/"); 
    clear();

         console.log("intentando escribir");
         console.log(Peliculas);

         listContainer = document.createElement('div');
         listElement = document.createElement('ul');
         document.getElementById('list').appendChild(listContainer);
         listContainer.appendChild(listElement);
         //listElement = document.createElement('ul');
         //document.getElementById('list').appendChild(listElement);
          
          
    for (let i = 0; i < Peliculas.results.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = Peliculas.results[i].title;
        
        listItem.addEventListener('click', function(){
              obtenerPelicula(Peliculas.results[i].url); //film_id no coincide con films/numero , usamos url entonces
          }); //funciona!
        
        console.log(Peliculas.results[i].title);
        listElement.appendChild(listItem);
        
    }
         listElement = '';
         console.log("Escritura completa?");
         
}

function removeAllChildNodes(parent) { // experimentando
    console.log("Probando removechild");

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

async function clear(){ //funciona?
    
    console.log("Limpiando lista");
    //document.getElementById("list").innerHTML = "";
    document.getElementById("nombrepelicula").innerHTML="Consulta:";
    //document.getElementById('list').removeChild();
    const parent = document.getElementById("list");
    //removeAllChildNodes(document.querySelector('#list'));
    removeAllChildNodes(parent);
    //document.getElementById("list").innerHTML = "";
    
}





async function obtenerPelicula(URL){
    
     //var URL = "films/"+numero ;
    clear();
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    //clear();
    console.log(Pelicula);
    console.log("intentando escribir pelicula");
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.title);
    
    //clear();
    
    objetivo.appendChild(texto);

    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);// test
    //document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = Pelicula.opening_crawl;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Personajes:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.characters.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.characters[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPersonaje(Pelicula.characters[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de personages
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Planetas:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.planets.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.planets[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPlaneta(Pelicula.planets[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de planetas
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Naves:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.starships.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.starships[i]);
        
        listItem.addEventListener('click', function(){
            obtenerNave(Pelicula.starships[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de naves
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Vehiculos:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.vehicles.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.vehicles[i]);
        
        listItem.addEventListener('click', function(){
            obtenerVehiculo(Pelicula.vehicles[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de vehiculos
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Especies:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.species.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.species[i]);
        
        listItem.addEventListener('click', function(){
            obtenerEspecie(Pelicula.species[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de especies

}//obtenerPelicula

async function obtenerName(URL){
    
    const Personaje = await obtenerDatosSWAPI(URL);
    return Personaje.name;
}
async function obtenerTituloPelicula(URL){
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    return Pelicula.title;
}

async function obtenerPersonaje(URL){
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir personaje");
    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    listItem = document.createElement('li');
    listItem.innerHTML = "vehiculos:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.vehicles.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.vehicles[i]);
        
        listItem.addEventListener('click', function(){
            obtenerVehiculo(Pelicula.vehicles[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de vehiculos
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Naves:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.starships.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.starships[i]);
        
        listItem.addEventListener('click', function(){
            obtenerNave(Pelicula.starships[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de naves

}//obtenerPersonaje

async function obtenerNave(URL){
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir nave");
    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Modelo:"+Pelicula.model;
    listElement.appendChild(listItem);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Fabricante:"+Pelicula.manufacturer;
    listElement.appendChild(listItem);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    

}//obtenerNave

async function obtenerVehiculo(URL){
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir vehiculo");
    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Modelo:"+Pelicula.model;
    listElement.appendChild(listItem);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Fabricante:"+Pelicula.manufacturer;
    listElement.appendChild(listItem);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    

}//obtenerVehiculo

async function obtenerPlaneta(URL){
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir Planeta");
    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Clima:"+Pelicula.climate;
    listElement.appendChild(listItem);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Terreno:"+Pelicula.terrain;
    listElement.appendChild(listItem);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    istItem = document.createElement('li');
    listItem.innerHTML = "Personajes:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.residents.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.residents[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPersonaje(Pelicula.residents[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de personajes
    
    

}//obtenerPlaneta


async function obtenerEspecie(URL){
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir Especie");
    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Designacion:"+Pelicula.designation;
    listElement.appendChild(listItem);
    
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    istItem = document.createElement('li');
    listItem.innerHTML = "Personajes:";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.people.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.people[i]);
        
        listItem.addEventListener('click', function(){
            obtenerPersonaje(Pelicula.people[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de personajes
    
    

}//obtenerEspecie


   
function obtenerDatosSWAPI(url){ 

    
    //para debug
    //url = "films";
    //debug
    
    //var apiURL = "https://swapi.dev/api/"+url ;
    console.log("intentando obtener: "+url );

    return fetch(url)
            .then (r => r.json());
     
};
