/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let rand=Math.random(); // Generates a random number between 0 and 1
console.log(rand);
let first,second,third;
if(rand<0.33){
    first="Crazy";
}
else if(rand<0.66){
    first="Amazing";
}
else{
    first="Fire";
}
rand=Math.random(); // Generates a random number between 0 and 1
console.log(rand);
if(rand<0.33){
    second="Engine";
}
else if(rand<0.66){
    second="Foods";
}
else{
    second="Garments";
}
rand=Math.random(); // Generates a random number between 0 and 1
console.log(rand);
if(rand<0.33){
    third="Bros";
}
else if(rand<0.66){
    third="Limited";
}
else{
    third="Hub";
}
let businessName = first + " " + second + " " + third;
console.log("Your business name is: " + businessName);