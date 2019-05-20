let stop = false, age = 23;

age > 18 ? (
    console.log("OK, you can go."),
    console.log("execute <continue.html>")
) : (
    stop = true,
    console.log("Sorry, you are much too young!")
);
