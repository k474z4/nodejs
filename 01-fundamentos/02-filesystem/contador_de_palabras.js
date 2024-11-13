const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const words = content.split(' ');


//---Solucion js function---

//filtra el contenido de words y reduce a minusculas aquellos string que contengan 'react'.
// const reactWordCount = words.filter(
//     (word) => word.toLowerCase().includes('react')
// ).length;


//---Solucion regular expression---

// Buscar en todo el documento aquellas ocurrencias que hagan juego de forma insensitiva asegurandonos que si no encuentra ninguna regrese 0.
const reactWordCount = content.match(/react/gi ?? []).length;


console.log('Palabras:', words.length);
console.log('Palabras React:', reactWordCount);