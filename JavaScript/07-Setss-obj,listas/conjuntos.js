var familia = new Set([
  "Gabriel",
  "Tamara",
  "Daniel",
  "Maximiliano",
  "Cristian",
  "Fernando",
]); // set con nombre de mi familia.
console.log(familia); // Set { 'Gabriel', 'Tamara', 'Daniel', 'Maximiliano', 'Cristian', 'Fernando' }

familia.add("Gabriel"); // se duplica el elemento 'Gabriel'
console.log(familia); // Set { 'Gabriel', 'Tamara', 'Daniel', 'Maximiliano', 'Cristian', 'Fernando', 'Gabriel' }

familia.add("Javascript"); // se agrega un elemento, 'Javascript'
console.log(familia); // Set { 'Gabriel', 'Tamara', 'Daniel', 'Maximiliano', 'Cristian', 'Fernando', 'Javascript' }
