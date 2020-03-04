function greeter(name, age) {

    var message = name + " says hello!! He is " + age + " years old";

    return function greet() {

        console.log(message);

    };
    

}
var TestGreeter = greeter("Vinod", 28);

TestGreeter();


//Output //Vinod says hello!! He is 28 years old
