// Calculatorul Anei V.2
/*
Ana vrea un upgrade la calculatorul de bacșiș, folosind aceleași reguli ca înainte - bacșiș 15% dacă valoarea facturii este între 50 și 300, iar dacă valoarea este diferită, bacșișul este de 20%.
Sarcinile voastre:
Scrieți o funcție calcTip care ia ca intrare orice valoare a facturii și returnează bacșișul corespunzător, calculat pe baza regulilor de mai sus. Utilizați tipul de funcție care vă place cel mai mult.
Și acum să folosim array! Deci, creați un array numit bills care să conțină datele de testare de mai jos.
Creați un array numit tips care conține valoarea bacșișului pentru fiecare factură, calculată din funcția creată anterior.
Creați un array cu totaluri care să conțină valorile totale, deci factura + bacșiș.
DATE DE TEST: 125, 555 și 44.
*/
const bills = [125, 555, 44];

function calcBacsis(nota) {
    return nota < 300 && nota >= 50 ? nota * 0.15 : nota * 0.2;
}

const tips = [calcBacsis(bills[0]), calcBacsis(bills[1]), calcBacsis(bills[2])];

// tips = [18.75, 111, 8.8]

console.log(tips);

const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];

console.log('total', total);


//------------------------------------------------------------//

// Ex.1 Inversați un array.
const myArray = ['hello', 'there', 30, true];
const reversedArray = myArray.reverse();
console.log(reversedArray); // --- output: [ true, 30, 'there', 'hello' ]

// Ex.2 Rotiți un array cu 1 poziție din stânga (primul element să devină ultimul).
let arr = [1, true, 'banana', 1984, 'Constance', 24];
let arr2 = arr.shift();
arr.push(arr2);
console.log(arr); // --- output: [ true, 'banana', 1984, 'Constance', 24, 1 ]

// Ex.3 Creați o funcție care va îmbina două array-uri și va returna rezultatul ca un nou array.
const arrConcat = function (arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(arrConcat([true, 14, 'Elba'], [false, 'Jim', 78])); // -- output: [ true, 14, 'Elba', false, 'Jim', 78 ]

// Ex.4 Creați o funcție care primește un array de numere și returnează un array care conține numai numerele pozitive.
const variousNumbers = [-13, 258, 2, -14, 23, -27, 123, -57, 67];
const posNumb = function(value) {
    return value >= 0;
};
const positiveNumbers = variousNumbers.filter(posNumb);
console.log(positiveNumbers); // --- output: [ 258, 2, 23, 123, 67 ]