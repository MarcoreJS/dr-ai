/*var nuevo = new Symptom('cuerpo cortado');
nuevo.addType('grave', 1);

console.log(nuevo);

var sym = Symptom.toJSON(nuevo);

/*Symptom.registerSymptom(cualitativo).then((response) => {
    console.log(response);
});*/

const RANGE_SYMPTOMS = { MAX: 7, MIN: 4};
var append_string_sym = "";
var symptoms = [];

db.collection('diseases').get().then(diseases => {
    diseases.forEach(disease => {
        var num_symptoms = Useful.randomInt(RANGE_SYMPTOMS.MAX, RANGE_SYMPTOMS.MIN);
        symptoms = Disease.getRandomSymptoms(disease.data(), num_symptoms);
        console.log(symptoms);

        symptoms.forEach(sym => {
            let name = sym.name;
            name = name.charAt(0).toUpperCase() + name.slice(1);
            append_string_sym += "<h6>" + name + "</h6>";
        });

        $('#symptoms').append(append_string_sym);

    });
});

