class Disease {
    constructor(name) {
        this.name = name;
        this.symptoms = [];
        this.groups = [];
        this.causes = [];
    }

    addSymptom(sym) {
        this.symptoms.push(sym);
    }

    static getRandomSymptoms(disease, num_symptoms) {
        let r = [];
        for (let i = 0; i < num_symptoms; i++) {
            let symptoms = disease.symptoms;
            let pick = Useful.randomInt(symptoms.length, 0);
            let symptom = disease.symptoms[pick];
            if(r.includes(symptom)) {
                i--;
            } else {
                r.push(symptom);
            }
        }

        return r;
    }

}