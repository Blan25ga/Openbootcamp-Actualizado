import { LEVELS } from "./levels.enum";


export class Task {  // task es una clase de modelo de datos de tarea que se usa en el componente TaskList.js
    name = "";
    description = "";
    completed = false;
    level = LEVELS.NORMAL;

    constructor(name, description, completed, level) { // constructor con iniciacion de cada una de las propiedades 
        this.name = name;
        this.description = description;
        this.completed = completed;
        this.level = level
    }
}






