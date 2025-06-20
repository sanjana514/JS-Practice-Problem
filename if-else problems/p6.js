// Checks if n is within a valid range (0-100), then determines Pass or Fail.
n=10;

if (n < 0 || n > 100) {
    console.log("Invalid input");
}
else if(n>=33){
    console.log("Pass");
}
else{
    console.log("Fail");
}