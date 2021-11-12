// const person: {
//     name: string;
//     age: number;
// } 
// const person:{
//     name: string;
//     age: number;
//     hobbies: string[];
//     role:[number, string];
// } 

enum Role { ADMIN, READ_ONLY, AUTHOR};

const person = {
    name: 'Simeon',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
    };


// person.role.push ('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user']

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);


for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    //console.log (hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR){
    console.log('is author');
}
