// Arrays of different text and colours
var data = [
    {text : "Welcome to ToolsWeb, your gateway to innovative Software solutions that empower your business to succeed in a rapidly changing world. With our cutting-edge tools and expert partners.",                    color : "whitesmoke"},
    {text : "Access the power of cutting-edge technology at ToolsWeb's secure login portal leading you to the part of greatness and innovation. Making the world a better place",                                        color : "whitesmoke"},
    {text : "Sign in to unlock a world or tailor-made software development expertise at your finger tips. where seasoned professionals collaborate seamlessly to transform your ideas into cutting-edge solutions.",     color : "whitesmoke"},
    {text : "Get ready to collaborate and create with ease on ToolsWeb's platform, where innovative features streamline the development process, enabling seamless communication and efficient project management" ,     color : "whitesmoke"},
    {text : "Start your journey with ToolsWeb, where innovation meets creativity, empowering you to unleash the full potential of your projects. Dive into a dynamic ecosystem designed to fuel inspiration",            color : "whitesmoke"}
];

// Linking label to an object
var label = document.getElementById("dynamicLabel");

// Creating a variable as a starting point
// var index = 0;

/** Function to change the text and color
function changeLabelText(){
    label.textContent = data[index].text;
    label.style.color = data[index].color;
    index = (index + 1) % data.length;
}

// changing the paragraph text and color every 3 seconds (3000 milliseconds)
setInterval(changeLabelText, 3000);

**/

function changeLabelText() {
    // Generate a random index within the range of the data array length
    var randomIndex = Math.floor(Math.random() * data.length);
    
    // Update kelvin with the text and color of the randomly selected element
    label.textContent = data[randomIndex].text;
    label.style.color = data[randomIndex].color;
}

// Call the function initially to display a random element
changeLabelText();

// Change the paragraph text and color randomly every 5 seconds (3000 milliseconds)
setInterval(changeLabelText, 3000); // Change every 5 seconds


// Creating a User-defined function to switch layouts with one button

function switchLayout(){
// -- creating variables and linking them to respective elements
var x = document.getElementById("login")
var y = document.getElementById("Signup")
var button = document.getElementById("switchButton")
var label  = document.getElementById("member")

// -- If Else Statement 
if(button.textContent == "Signup")
    {
        y.style.left = "10%";
        x.style.left = "-90%";
        button.textContent = "Login";
        label.textContent = "Already a Member";
    }
    else
    {
        x.style.left = "10%";
        y.style.left = "-90%";
        button.textContent = "Signup";
        label.textContent = "Not a Member";

    }

}