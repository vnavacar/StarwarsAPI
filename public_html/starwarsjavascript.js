/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var pagina = 0; // 0 para obtenerPelliculas, 1 obtenerpelicula, 2 personaje, 3 planeta, 4 vehiculo, 5 nave, 6 especie

window.onload = async() => {
    
   // const abc = await obtenerDatosSWAPI("adb");

   // console.log(abc);
    obtenerPeliculas();
    
};


async function obtenerPeliculas(){
    
    pagina = 0 ;
    const Peliculas = await obtenerDatosSWAPI("https://swapi.dev/api/films/"); 
    clear();

         console.log("intentando escribir");
         console.log(Peliculas);

         listContainer = document.getElementById('list');
         listElement = document.createElement('ul');
         listContainer.appendChild(listElement);
         //listElement = document.createElement('ul');
         //document.getElementById('list').appendChild(listElement);
          
          
    for (let i = 0; i < Peliculas.results.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = Peliculas.results[i].title;
        if(pagina !== 0){
            return ;
        }
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
    document.getElementById("textcrawl").innerHTML="";

    //document.getElementById('list').removeChild();
    const parent = document.getElementById("list");
    //removeAllChildNodes(document.querySelector('#list'));
    removeAllChildNodes(parent);
    //document.getElementById("list").innerHTML = "";
    
}





async function obtenerPelicula(URL){
    
    pagina = 1;
     //var URL = "films/"+numero ;
    clear();
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    console.log(Pelicula);
    console.log("intentando escribir pelicula");
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.title);
    objetivo.appendChild(texto);

    listContainer = document.getElementById('list');
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);


    document.getElementById('textcrawl').innerHTML = Pelicula.opening_crawl; // funciona
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Personajes:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    
    for (let i = 0; i < Pelicula.characters.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.characters[i]);
        if(pagina !== 1){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPersonaje(Pelicula.characters[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de personages
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Planetas:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.planets.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.planets[i]);
        if(pagina !== 1){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPlaneta(Pelicula.planets[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de planetas
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Naves:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.starships.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.starships[i]);
        if(pagina !== 1){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerNave(Pelicula.starships[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de naves
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Vehiculos:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.vehicles.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.vehicles[i]);
        if(pagina !== 1){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerVehiculo(Pelicula.vehicles[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de vehiculos
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Especies:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.species.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.species[i]);
        if(pagina !== 1){
            return ;
        }
        
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
    
    pagina = 2;
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir personaje");
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.name);
    objetivo.appendChild(texto);
    /*
    listContainer = document.createElement('div');
    listElement = document.createElement('ul');
    document.getElementById('list').appendChild(listContainer);
    listContainer.appendChild(listElement);*/
    
    listContainer = document.getElementById('list');
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        if(pagina !== 2){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "vehiculos:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.vehicles.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.vehicles[i]);
        if(pagina !== 2){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerVehiculo(Pelicula.vehicles[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de vehiculos
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Naves:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.starships.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.starships[i]);
        if(pagina !== 2){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerNave(Pelicula.starships[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de naves

}//obtenerPersonaje

async function obtenerNave(URL){
    
    pagina = 5;
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir nave");
    
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.name);
    objetivo.appendChild(texto);

    listContainer = document.getElementById('list');
    listElement = document.createElement('ul');
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
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        if(pagina !== 5){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    

}//obtenerNave

async function obtenerVehiculo(URL){
    pagina = 4;
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir vehiculo");
    
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.name);
    objetivo.appendChild(texto);
    
    listContainer = document.getElementById('list');
    listElement = document.createElement('ul');
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
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        if(pagina !== 4){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    

}//obtenerVehiculo

async function obtenerPlaneta(URL){
    
    pagina = 3;
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir Planeta");
    
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.name);
    objetivo.appendChild(texto);
    
    listContainer = document.getElementById('list');
    listElement = document.createElement('ul');
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
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        if(pagina !== 3){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    istItem = document.createElement('li');
    listItem.innerHTML = "Personajes:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.residents.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerName(Pelicula.residents[i]);
        if(pagina !== 3){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPersonaje(Pelicula.residents[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de personajes
    
    

}//obtenerPlaneta


async function obtenerEspecie(URL){
    pagina = 6;
    
    const Pelicula = await obtenerDatosSWAPI(URL);
    clear();
    
    console.log(Pelicula);
    console.log("intentando escribir Especie");
    
    objetivo = document.getElementById('nombrepelicula');
    texto = document.createTextNode(" "+Pelicula.name);
    objetivo.appendChild(texto);
    
    listContainer = document.getElementById('list');
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Nombre:"+Pelicula.name;
    listElement.appendChild(listItem);
    
    
    listItem = document.createElement('li');
    listItem.innerHTML = "Designacion:"+Pelicula.designation;
    listElement.appendChild(listItem);
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
        
    listItem = document.createElement('li');
    listItem.innerHTML = "Peliculas:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
    listElement.appendChild(listItem);
    
    for (let i = 0; i < Pelicula.films.length; i++) {
        
        listItem = document.createElement('li');
        listItem.innerHTML = await obtenerTituloPelicula(Pelicula.films[i]);
        if(pagina !== 6){
            return ;
        }
        
        listItem.addEventListener('click', function(){
            obtenerPelicula(Pelicula.films[i]);
          }); 
    
        listElement.appendChild(listItem);
    } // lista de peliculas
    
    listElement = document.createElement('ul');
    listContainer.appendChild(listElement);
    
    istItem = document.createElement('li');
    listItem.innerHTML = "Personajes:";
    listItem.style.color = "orange";
    listItem.style.textAlign = "center";
    listItem.style.fontSize = "x-large";
    listItem.style.fontWeight = "bold";
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
     
}
