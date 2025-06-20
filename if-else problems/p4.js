n=2028;

if(n%400==0){
    console.log(`${n} is leap year!!`);
}
else if(n%4==0){
    console.log(`${n} is leap year!!`);
}
else if(n%100==0){
    console.log(`${n} is not leap year!!`);
}
else{
    console.log(`${n} is not leap year!`);
}