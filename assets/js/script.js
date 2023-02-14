
//objects
let stu = {
    name: "Chinara",
    surname: "Ibadova",
    address: "Lokbatan",
    phones: ["050", "055"],
    education: [
        { edu1: "Math teacher" },
        { edu2: "Software development" }
    ]
}

// console.log(stu);
// console.log(stu.name);
// console.log(stu.phones);
// for (const item of stu.education) {
//     console.log(item);
// }

let stu1 = {
    id: 1,
    name: "Chinara",
    surname: "Ibadova",
    address: "Lokbatan"
}
let stu2 = {
    id: 2,
    name: "Konul",
    surname: "Ibrahimova",
    address: "Neftciler"
}
let stu3 = {
    id: 3,
    name: "Roya",
    surname: "Meherremova",
    address: "Sumqayit"
}
let stu4 = {
    id: 4,
    name: "Jale",
    surname: "Abdullayeva",
    address: "Nizami"
}

let group = {
    name: "P135",
    capacity: 3,
    students: [],
    addStudent: function (student) {
        let dbStudent = this.students.find(s => s.id == student.id)
        if (dbStudent != undefined) {
            console.log("Student is already");
            return;
        }
        if (this.students.length == this.capacity) {
            console.log("Group is filled");
            return;
        }
        this.students.push(student)
    },
    updateStudent: function (student) {
        let dbStudent = this.students.find(s => s.id == student.id)
        if (dbStudent != undefined) {
            dbStudent.address = student.address;
        }
    },
    deleteStudents: function (id) {
        let dbStudent = this.students.find(s => s.id == id);
        let index = this.students.indexOf(dbStudent);
        if (dbStudent != undefined) {
            this.students.splice(index, 1)
        }
    },
    getStudents: function () {
        return this.students;
    }
}
let updatedStudent = {
    id: 1,
    address: "Goychay"
}

group.addStudent(stu1);
group.addStudent(stu2);
group.addStudent(stu3);
//group.addStudent(stu4);

// console.log(group.updateStudent(updatedStudent));
// console.log(group.deleteStudents(2));
// group.deleteStudents(3)
// console.log(group.getStudents());


let user = {
    name: "Chinara",
    age: 22,
    company: {
        name: "Code Academy",
        rooms: [
            {
                name: "Jupiter",
                capacity: 15,
                computers: ["HP", "Apple", "Lenovo"]
            },
            {
                name: "Saturn",
                capacity: 10,
                computers: ["HP", "Apple", "Legion"]
            }
        ]
    }

}
let showRoomCapacityByUser = () => {
    let rooms = user.company.rooms;
    for (const item of rooms) {
        if (item.name == "Jupiter") {
            console.log(item.capacity);
        }
    }
}
// showRoomCapacityByUser();
let showRoomComputersByUser = () => {
    let rooms = user.company.rooms;
    let comps = [];
    for (const item of rooms) {
        if (item.name == "Jupiter") {
            comps = item.computers;
        }
    }
    return comps;
}
// console.log(showRoomComputersByUser());

//class

class Car {
    constructor(name, spped) {
        this.name = name;
        this.spped = spped;
    }
    showCarDatas(color) {
        return (this.name).concat(this.spped, color)
    }

}
let car = new Car("Juke", 200);
// console.log(car.name);
// console.log(car.showCarDatas("white"));

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }
    eat() {
        return "Animal is eating";
    }

}
class Cat extends Animal {
    constructor(name, color, sound) {
        super(name, sound);
        this.color = color;
    }
}

let cat = new Cat("Cat", "Black", "miyau");
let animal = new Animal("Mestan", "miyauuu")
// console.log(animal.eat());
// console.log(cat.name + " " + cat.sound + " " + cat.color);

let arr = [1, 3, 5, 7]
// Array.prototype.arr="arr"
// console.log(arr.arr);

// Array.prototype.getArrElements = function(arr){
//     return arr
// }
// console.log(arr.getArrElements(arr));
// let name = "Chinara";
 let firstname = "";
String.prototype.showStr = (str) => {
    console.log(str);
}
// name.showStr("China");
// console.log(firstname.showStr("Chinara"));