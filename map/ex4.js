/* Array.prototype.map - Exercice 4

Ecrire une fonction getCirclesProperties, qui prend en entrée un tableau de nombres (entiers ou non),
représentant les rayons de cercles, et calcule, pour chacun, la circonférence et la surface de ces cercles.

Formules pour les calculs :
* Ciconférence  =  2 * Pi * rayon
* Diamètre      =  Pi * rayon * rayon

En JavaScript, la valeur de Pi est donnée par Math.PI.
Comme on n'a pas besoin d'une très grande précision en sortie,
il t'est demandé de ramener chaque valeur calculée à trois chiffres
après la virgule, en utilisant la méthode toFixed des nombres (Google est ton ami).

La fonction devra retourner, pour chaque rayon du tableau d'entrée, un objet ayant cette "forme":
{
  radius: R,
  circumference: C
  surface: S
}

où R est le rayon donné en entrée, C et S les valeurs que tu dois calculer.

Exemple de tableau d'entrée :

let table = [1, 3, 4.5, 7]
/*
Tableau de sortie correspondant (toFixed transforme les nombres en chaînes)

[
  {
    radius: 1,
    circumference: "6.283",
    surface: "3.142"
  },
  {
    radius: 2,
    circumference: "12.566",
    surface: "12.566"
  },
  {
    radius: 7,
    circumference: "43.982",
    surface: "153.938"
  },
  {
    radius: 11,
    circumference: "69.115",
    surface: "380.133"
  }
]
*/

const getCirclesProperties = radiuses => radiuses.map(bla => {
  let truc = bla;
  bla = {
    radius: Math.floor(radiuses[radiuses.indexOf(bla)]),
    circumference: Math.floor (2*Math.PI*radiuses[radiuses.indexOf(bla)]),
    surface: Math.floor (Math.PI * radiuses[radiuses.indexOf(bla)]*radiuses[radiuses.indexOf(bla)]),
  };
  //console.log(bla)
  return bla
})
/*let machin = getCirclesProperties(table);
console.log(machin)*/
let nombre;


// Ne pas modifier l'export
module.exports = getCirclesProperties;
