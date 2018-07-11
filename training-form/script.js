var nuevo = new Symptom('cuerpo cortado');
nuevo.addType('grave', 1);

console.log(nuevo);

var sym = Symptom.toJSON(nuevo);

/*Symptom.registerSymptom(cualitativo).then((response) => {
    console.log(response);
});*/
