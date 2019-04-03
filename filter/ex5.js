/* Array.prototype.filter - Exercice 5

Ecrire une fonction searchWordFilter, qui attends deux paramètres:
1. un tableau de chaînes (par exemple des noms de produits, de films, etc.)
2. un terme de recherche

La fonction doit renvoyer un tableau ne contenant que les éléments dont le nom contient
la chaîne recherchée.

Il y a là aussi plusieurs façons d'écrire cette fonction, en utilisant indexOf ou includes.
Une petite difficulté supplémentaire: la recherche être "case insensitive" (insensible à la
casse), c'est-à-dire qu'une recherche sur 'star' ne doit pas éliminer les chaînes contenant
'Star'.

Exemple d'entrée:
  
1. tableau de chaînes
  */
let table = [
    'Mad Max: Fury Road',
    'Interstellar',
    'Revenge of the Nerds',
    'Revenge of the Pink Panther',
    'Star Wars: Episode I - The Phantom Menace',
    'Star Wars: Episode II - Attack of the Clones',
    'Star Wars: Episode III - Revenge of the Sith'
  ]

/*2. terme de recherche: 'revenge'


==> Sortie attendue:
  [
    'Revenge of the Nerds',
    'Revenge of the Pink Panther',
    'Star Wars: Episode III - Revenge of the Sith'
  ]


 */
const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

const searchWordFilter = (items, search) => {
  search.toLowerCase();
  //let newTab = items.map(bla => bla.toLowerCase());
  let newProdTab = items.filter(bla => (bla.indexOf(search.toLowerCase()) != -1 || bla.indexOf(search.toUpperCase()) != -1) || bla.indexOf(capitalize(search)) != -1);
  return newProdTab;
}
//let nombre;
//let machin = searchWordFilter(table, 'st')
//console.log(machin)
// Ne pas modifier l'export
module.exports = searchWordFilter;
