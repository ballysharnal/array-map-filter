/* Array.prototype.filter - Exercice 6

Ecrire une fonction filterOffensiveComments, qui attend deux paramètres, tous deux
des tableaux de chaînes de caractères :
1. des commentaires sur un fil d'actualité ou une vidéo.
2. une liste de mots "grossiers" ou "offensifs" à bannir

La fonction doit éliminer les commentaires contenant au moins un des mots "bannis".

Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
*/
let table = [
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY",
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]/*
2. mots à bannir: */
let mots = ['bloody', 'damn']
/*
Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/

const filterOffensiveComments = (comments, bannedWords) => {
  let newTabTempo = [];
  newTabTempo.push(comments.filter(bla));
  return newTabTempo;
}
let nombre;
//let machin = filterOffensiveComments(table, mots)
//console.log(machin)
// Ne pas modifier l'export
module.exports = filterOffensiveComments;