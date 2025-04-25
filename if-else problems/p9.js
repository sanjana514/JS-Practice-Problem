password = "Admin@123"; // এখানে তুমি চাইলে ইনপুট দিতে পারো
// let password = ""; // এটা দিয়ে চেক করতে পারো empty case
// let password = "WrongPass"; // এটা দিয়ে চেক করতে পারো ভুল case

if (password === "") {
    console.log("Password cannot be empty");
} 
else if (password === "Admin@123") {
    console.log("Login Successful");
} 
else {
    console.log("Incorrect Password");
}
