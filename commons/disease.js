class Disease {
    constructor(name){
        this.name = name;
        this.symptoms = [];
        this.groups = [];
        this.causes = [];
    }

    addSymptom(sym) {
        this.symptoms.push(sym);
    }
}