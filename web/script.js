var person1 = { 
    FirstName: 'kandra',
    LastName: 'bharath',
    OfficeAdress: 'near coofee cafe'
};

var person2 = {
    FirstName: 'dama',
    LastName: 'ravi',
    OfficeAdress: 'near family resturant'
}

var person3 = {
    FirstName: 'nadendla',
    LastName: 'vamsi',
    OfficeAdress: 'near the beach road'
}

function printPerson(person){
    console.log("First Name: " + person.FirstName);
    console.log("Last Name: " + person.LastName);
    console.log("Office Adress: " + person.OfficeAdress);
}

printPerson(person1);
printPerson(person2);
printPerson(person3);