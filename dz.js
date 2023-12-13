class Dweller {
    constructor(name, sex, age) {
        this.name = name;
        this.sex = sex;
        this.age = age;
    }
}

class Flat {
    residents = [];

    addResident (resident) {
        this.residents.push(resident);
    }
}

class House {
    constructor(maxFlats){
        this.flat = [];
        this.maxFlats = maxFlats;
    }

    addFlats (flat) {
        if(this.flat.length >= this.maxFlats) {
            console.log('Превышенно количество квартир');
        } else {
            this.flat.push(flat);
        }
    }
}

const dweller1 = new Dweller('Ivan', 'male', 30);
const dweller2 = new Dweller('Alena', 'female', 27);
const dweller3 = new Dweller('Misha', 'male', 50);
const dweller4 = new Dweller('Ira', 'female', 48);
const dweller5 = new Dweller('Valeriy', 'male', 20);
const dweller6 = new Dweller('Olga', 'female', 19);
const dweller7 = new Dweller('Vasya', 'male', 38);
const dweller8 = new Dweller('Tanya', 'female', 35);
const dweller9 = new Dweller('Ira', 'female', 15);
const dweller10 = new Dweller('Taras', 'male', 10);
const dweller11 = new Dweller('Yura', 'male', 38);

const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();
const flat5 = new Flat();//умышленно сделал превышение квартир

flat1.addResident(dweller1);
flat1.addResident(dweller2);
flat2.addResident(dweller3);
flat2.addResident(dweller4);
flat3.addResident(dweller5);
flat3.addResident(dweller6);
flat4.addResident(dweller7);
flat4.addResident(dweller8);
flat4.addResident(dweller9);
flat4.addResident(dweller10);
flat5.addResident(dweller11);

const house1 = new House(4);

house1.addFlats(flat1);
house1.addFlats(flat2);
house1.addFlats(flat3);
house1.addFlats(flat4);
house1.addFlats(flat5);

console.log(house1);
