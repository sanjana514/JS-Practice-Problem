// Grading system based on marks
n=55;

if(n>=80 && n<=100){
    console.log('A');
}
else if(n>=60 && n<=79){
    console.log('B');
}
else if(n>=40 && n<=59){
    console.log('C');
}
else if(n<=39 && n>=0){
    console.log('F');
}
else{
    console.log('Invalid');
}