class Symptom {
    constructor(name, range = [0, 1], quantifiable = false, fn = 'none') {
        this.name = name;
        this.types = [];
        this.range = range;
        this.fn = fn;
        this.quantifiable = quantifiable;

        if (this.quantifiable) {
            
        } else {
            this.label = this.name;
        }
    }

    addType(name, quantity){
        if(this.quantifiable) {
            return 'Error!, los sintomas cuantificables no tienen tipos';
        } else {
            let type = {
                name: name,
                quantity: quantity
            };
            this.types.push(type);
        }
    }

    static toJSON(sym) {
        return JSON.parse(JSON.stringify(sym));
    }

    static registerSymptom(sym) {
        let r = Symptom.toJSON(sym);
        return db.collection('symptoms').doc(sym.name).set(r);
    }

    static async getSymptoms() {
        let data;
        db.collection('symptoms').get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.data());
            });
        });
    }

    static PAM(sis, dias) {
        return ((2 * dias) + sis) / 3;
    }

    static reversePAM(x) {

    }

    static generateRandomSymptoms(){
        let r = Math.floor((Math.random() * 3) + 3);
        
    }

}
