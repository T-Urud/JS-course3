// !== utilisé dans la condition indique qu’on cherche à tester si variable est différente de la valeur

// Rappel types de données
let string = "Chaine";
let number = 25;
let boolean = true;
let maVariable; //type Undefined
// console.log(typeof string);

// Tableaux
// dans un objet on met {}, dans un tableau on met []

let array = ["Lyon", "Paris", "Nantes"];
// console.log(array[1][4]);

let array2 = ["lyon", true, 26, [1, 2], { nom: "denis" }];
// console.log(array2[4].nom);

let objet = {
  pseudo: "denis",
  age: 33,
  technos: ["JS", "React", "NodeJS"],
  admin: false,
};
// console.log(objet.technos[1][3]);

// Rajoute élément
// objet.adress = "22 rue du code";
// console.log(objet);

let data = [
  {
    pseudo: "denis",
    age: 33,
    technos: ["JS", "React", "NodeJS"],
    admin: false,
  },
  {
    pseudo: "amin",
    age: 21,
    technos: ["Css", "React", "NodeJS"],
    admin: true,
  },
  {
    pseudo: "jawad",
    age: 55,
    technos: ["Php", "React", "NodeJS"],
    admin: false,
  },
];

// console.log(data[2].pseudo);

// -----------------------------
// Les structures de controle
// -----------------------------

if (data[0].age > data[1].age) {
  // console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  // console.log(data[0].pseudo + " est moins agé que " + data[1].pseudo);
}

// valeur à tester ? si vrai : si faux          écriture possible de if/else

// While (peu utilisé)
let w = 0;

while (w < 10) {
  w++;
  // console.log("La valeur de w est de : " + w);
}

// Do while (rare)
let d = 0;

do {
  d++;
  // console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  // document.body.innerHTML += `<li>${user.pseudo} - ${user.age}ans</li>`;
}

// console.log(data.length); CONNAITRE TAILLE DU TABLEAU

// on déclare la valeur de i | jusqu'où on boucle | on incrémente i si la condition 2 n'est pas remplie
for (i = 0; i < data.length; i++) {
  // console.log(data[i].technos[0]);
  // document.body.innerHTML += "<h2>" + data[i].pseudo + "</h2>";
  // document.body.innerHTML += `<h2> ${data[i].pseudo} </h2>`;
}

// Switch
document.body.addEventListener("click", (e) => {
  // console.log(e.target.id);

  switch (e.target.id) {
    case "js":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "purple";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// ****************** METHODES STRING ***************
// méthode = une fonction déja codée (ex: addEventListener)

let string2 = "Javascript est un langage orienté objet";

// console.log(typeof string2);
// console.log(eval("1" + 2)); additionne le string 1 et le number 2 donc = 12
// console.log(eval(parseInt("1") + 2)); transforme string en number donc = 3
// console.log(isNaN(string2)); pour savoir si c'est un number ou pas

// console.log(string2.length);
// console.log(string2[string2.length - 1]); mettre -1 pour afficher dernier caractère. index (commence à 0) pas égal à length (commence à 1).

// console.log(string2.indexOf("langage")); quand c'est un terme qu'il ne trouve pas, retourne à -1. Permet de localiser

// let newString = string2.slice(2);
// let newString = string2.slice(5, 17);
// console.log(newString);

// console.log(string2.split("i")); permet de d'isoler et de mettre dans un tableau

// console.log(string2.toLocaleLowerCase()); met toute la chaîne en minuscule
// console.log(string2.toLocaleUpperCase()); majuscules

// console.log(string2.replace("Javascript", "PHP"));

// ******************* METHODES NUMBER *************************

let number2 = 45.8881;
let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(2)); garde chiffre après la virgule
// console.log(parseInt(numberString)); chiffre entier
// console.log(parseFloat(numberString)); chiffre avec virgule

// -------------------------
// Math

// console.log(Math.PI);
// console.log(Math.round(4.6)); arrondi tout court
// console.log(Math.floor(4.6)); arrondi inférieur systématiquement
// console.log(Math.ceil(4.1)); arrondi supérieur systématiquement
// console.log(Math.pow(2, 7)); puissance (** marche aussi)
// console.log(Math.sqrt(16)); racine carré

// console.log(Math.floor(Math.random() * 50));

// ********************* METHODES ARRAY **************************

let array3 = ["JS", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

// Fusion de tableaux (2 méthodes: CONCAT et SPREAD OPERATOR)

let newArray = array3.concat(array4);
// let newArray = [...array3, ...array4];
// console.log(newArray);

// console.log(array3.join(' ')); insérer des caractères entre éléments du tableau (très utilisée)

// console.log(array3.slice(1));
// console.log(newArray.slice(2, 4)); une part

// TRUE / FALSE
// console.log(array3.every((language) => language == "Php")); tous
// console.log(array3.some((language) => language == "Php")); 1seul minimum

// let shift = array3.shift(); enleve 1er élément du tableau
// console.log(array3);

// console.log(array3.pop()); retire dernier élément

// Manipuler donnnées dans un tableau
// const restArray = array3.splice(1, 1, "C++"); change le Php avec C++
// const restArray = array3.splice(0, 2, ...array4);
// console.log(array3);

// IMPORTANT //
let arrayNumber = [4, 75, 41, 1, 12];

// console.log(arrayNumber.reduce((x, y) => x + y)); additionne tous les nbs
// arrayNumber.push(17); ajoute élément

// !!!!!!! FILTER (filter élément, garder ce qu'on veut), SORT (trier), MAP (lister (un peu comme un forEach)) !!!!!!

// console.log(arrayNumber.filter((number) => number > 10));
// console.log(arrayNumber.sort());
// console.log(arrayNumber.sort((a, b) => a - b));

document.body.innerHTML += arrayNumber
  .map((number) => `<li>${number}</li>`)
  .join("");

// ************************** METHODES OBJECTS ************************

document.body.innerHTML += data
  .filter((user) => user.pseudo.includes("d"))
  .sort((a, b) => b.age - a.age)
  .map(
    (user) =>
      `
      <div class="user-card">
        <h2>${user.pseudo}</h2>
        <p>Age: ${user.age}</p>
        <p>Status: ${user.admin ? "Modérateur" : "Membre"}</p>
      </div>
    `
  )
  .join("");

// ---------------
// Les Dates
// ---------------

// date classique
let date = new Date();

// Timestamp (nb de secondes depuis 01/01/1970)
let timestamp = Date.parse(date);

// IsoString
let iso = date.toISOString();
// console.log(date.toISOString());

const dateParser = (chaine) => {
  let newDate = new Date(chaine).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
};

// console.log(dateParser(date));
// console.log(dateParser(timestamp));

// ---------------------------------
// LE DESTRUCTURING
// ----------------------------------

let moreData = {
  destVar: ["element 1", "element 2"],
};

const { destVar } = moreData;
// équivaut à const destVar = moreData.destVar

// console.log(moreData.destVar);
// console.log(destVar);

let array5 = [70, 80, 90];
let [x, y, z] = array5;

// console.log(x);
// console.log(y);
// console.log(z);

console.log(iso);
const dateDestructuring = (chaine) => {
  let newDate = chaine.split("T")[0];
  let [y, m, d] = newDate.split("-");
  return [d, m, y].join("/");
};
console.log(dateDestructuring(iso));

// --------------------------------------------------------------------
// Les Datasets (peut remplacer id ou class, stocker des données peu communes)
// --------------------------------------------------------------------

const h3js = document.getElementById("js");
// console.log(h3js.dataset.lang);

const h3 = document.querySelectorAll("h3");
h3.forEach((language) => console.log(language.dataset.lang));

// ---------------------------------
// Les Regex
// ---------------------------------

let separator = 5455662562;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));

let fruit = ["bana", "abr", "pech", "pomm", "fra"];
let counter = 0;
while (counter < fruit.length) {
  if (fruit[counter] == "pech") {
    console.log("courgette");
  }
  console.log(fruit[counter]);
  counter++;
}
console.log(fruit[3]);
