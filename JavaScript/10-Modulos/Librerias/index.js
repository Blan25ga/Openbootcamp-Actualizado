// libreria axioos de npm. (( Cliente HTTP basado en promesas para el navegador y node.js )) llamadas a servicios externos.
// se cra carpeta donde vamos a trabajar y luego el index correspondiente.
// npm init -y para aceptar todo por defecto y crear el package.json.
// Al package.json se le agrega el siguiente comando : Debajo de 'main', se agrega 'type' : 'module' para que se pueda importar desde afuera.  debjo de "scripts": { "start": "node index.js" } para que cuando se ejecute el comando npm start, se ejecute el index.js. y se borra lo que esta debajo de scripts al ingresar en el package.json.

// Importacion de axios con import
import axios from "axios";

axios
  .get("https://pokeapi.co/api/v2/pokemon/charmander")
  .then(function (response) {
    // handle success
    console.log("Success!!");
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log("Error!!");
    console.log(error);
  });
