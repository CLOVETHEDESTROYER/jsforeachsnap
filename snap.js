function displayArray() {
    const nameArray = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];

    nameArray.forEach(element => {
        for( let i = nameArray.length; i > 0; i++) {
            console.log(i);
        }
    }

}

function listToArray (nameArray) {
    return nameArray
}

/*
(value => {
    for(let i = nameArray.length; i > 0; i++) {
        console.log(i);*/


const nameArray = ['Bob', 'Jim', 'Matt', 'Mary', 'Suzy', 'Sarah'];

nameArray.forEach(element => console.log(element));
