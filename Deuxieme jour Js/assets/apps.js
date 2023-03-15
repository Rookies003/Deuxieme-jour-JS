// Déclarer une variable âge et lui assigner une valeur numérique.
let age = 25;
console.log(age);

// Déclarer une variable `name1` et lui assigner une valeur de type string, (chaine de caracteres)
let name1 = "Jean";
console.log(name1);

// Déclarer une variable `estConnecté` et lui assigner une valeur booleenne.
let estConnecté = true;
console.log(estConnecté);

// Déclarer une variable `tableau` et lui assigner une valeur de type tableau 1, 2, 3 comme valeurs (int).
let tableau = [1, 2, 3];
console.log(tableau);
// Afficher la valeur à l'index 1 du tableau.
console.log(tableau[1]);

// Déclarer une variable `objet1` et lui assigner une `prop1` et une `prop2` avec des valeurs de type string.
let objet1 = { prop1: "valeur1", prop2: "valeur2" };
console.log(objet1);

// Afficher la valeur de la proprité `prop1` de l'objet `objet1`
console.log(objet1.prop1);

// Déclarer deux variables `prenom1` et `prenom2` et leur assigner des valaurs numériques. Additionner ces deux nombres et afficher le résultat.
let prenom1 = 10;
let prenom2 = 20;
let resultat = prenom1 + prenom2;
console.log(resultat);

// Déclarer une variable `prenom1` et lui assigner une valeur de type chaine de caractères. Affichez le message "Bonjour, {prenom1} !"
// NB: Voir la contatenation de chaines de caractères.
prenom1 = "Marie";
console.log("Bonjour, " + prenom1 + " !");

// Déclarer une variable `age2` et lui assigner une valeur numérique. Vérifier si `age2` est supérieur ou égal à 18 et afficher "Majeur"         ou "Mineur" en fonction du résultat.
let age2 = 20;
if (age2 >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

// Déclarer une variable `temperature1` et lui assigner une valeur numérique en degrès celcius. Convertir cette température en degrès Fahrenheit et afficher le résultat.
let temperature1 = 30;
let temperatureFahrenheit = (temperature1 * 9/5) + 32;
console.log(temperatureFahrenheit);

// Déclarer une variable `tableau2` et lui assigner une valeur de type tableau contenant plusieurs valeurs. Accéder à la premère valeur du tableau et l'afficher.
let tableau2 = [1, 2, 3, 4]
console.log(tableau2[0]);

// Déclarer une variable `objet2` et lui assigner une valeur de type d'objet contenant plusieurs propriétés. Accéder à la valeur de la première propriété de l'objet l'afficher.
let objet2 = {prop1: "valeur1", prop2: "valeur2"};
console.log(objet2.prop1);

// Déclarer une variable `age3` et lui assigner une valeur numérique. Ajouter 1 à `age3` en utilisant l'opérateur d'incrémentation et afficher le résultat.
let age3 = 25;
age3++;
console.log(age3);
 
// Déclarer une variable `age4` et lui assigner une valeur numérique. Soustraire 1 à `age4` en utilisant l'opérateur de décrémentation et afficher le résultat.
let age4 = 26;
age4--;
console.log(age4);

// Déclarer deux variables "prenom2" et "nom2" et concaténer leur valeur dans une variable "nomComplet".
prenom2 = "Fred";
let nom2 = "Tétard";
let nomComplet = prenom2 + " " +nom2; // Concaténation des deux variables avec un espace entre elles
console.log(nomComplet);

// Déclarer une variable "age5" et afficher si elle est un jeune adulte (18-25 ans inclus) ou un adulte (26 ans et plus) dans les conditions, utilisez l'opérateur &&
let age5 = 20;
if (age5>= 18 && age5<= 25) {
    console.log("jeune adulte")
} else {
    console.log("adulte")
}
