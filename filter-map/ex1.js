/* Array.prototype.map ET filter - Exercice 1

Il s'agit d'écrire une fonction getJediNames, qui reçoit en argument un tableau
de personnages de Star Wars (objets), chacun ayant deux propriétés :
- name: nom du personnage
- side: le côté de la Force où il se situe ('light' ou 'dark')

En utilisant filter puis map, la fonction doit renvoyer les noms des Jedis, c'est-à-dire les personnages du côté lumineux (pour ceux qui
  auraient passé les 40 dernières années dans une caverne en Lozère !)

Tableau en entrée:*/
let table = [
  { name: 'Yoda', side: 'light' },
  { name: 'Count Dooku', side: 'dark' },
  { name: 'Obiwan Kenobi', side: 'light' },
  { name: 'Mace Windu', side: 'light' },
  { name: 'Darth Sidious', side: 'dark' },
  { name: 'Darth Maul', side: 'dark' }
]
/*
Sortie attendue:
['Yoda', 'Obiwan Kenobi', 'Mace Windu']

*/

const getJedisNames = characters => {
  let filtered = characters.filter(value => value.side=='light');
  let mapped = filtered.map(bla => bla.name)
  return mapped
};
let nombre;
/*let machin = getJedisNames(table);
console.log(machin)*/

module.exports = getJedisNames;