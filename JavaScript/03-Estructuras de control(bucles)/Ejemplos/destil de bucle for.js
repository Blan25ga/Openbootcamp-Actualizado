//DESTILACION DE BUCLE FOR

//for ([expresion-inicial]; [condicion]; [expresion-final])sentencia

//EXPRECION INICIAL
//Una expresión (incluyendo las expresiones de asignación) o la declaración de variable. Típicamente se utiliza para usarse como variable contador. Esta expresión puede opcionalmente declarar nuevas variables con la palabra clave var. Estas variables no son locales del bucle, es decir, están en el mismo alcance en el que está el bucle for. El resultado de esta expresión es descartado.

//CONDICION
//Una expresión para ser evaluada antes de cada iteración del bucle. Si esta expresión se evalúa como verdadera, se ejecuta sentencia. Esta comprobación condicional es opcional. Si se omite, la condición siempre se evalúa como verdadera. Si la expresión se evalúa como falsa, la ejecución salta a la primera expresión que sigue al constructor de for.

//EXPRECION FINAL
//Una expresión para ser evaluada al final de cada iteración del bucle. Esto ocurre antes de la siguiente evaluación de la condicion. Generalmente se usa para actualizar o incrementar la variable contador.

//SENTENCIA
//Una sentencia que se ejecuta mientras la condición se evalúa como verdadera. Para ejecutar múltiples sentencias dentro del bucle, utilice una sentencia block ({ ... }) para agrupar aquellas sentecias.

//Ejemplos:
//La siguiente sentencia for comienza mediante la declaración de la variable i y se inicializa a 0. Comprueba que i es menor que nueve, realiza las dos sentencias con éxito e incrementa i en 1, hasta que i sea menor que 9.

//   for (var i = 0; i < 9; i++) {
//   n += i;
//   mifuncion(n);
//}
