const numberForm = document.querySelector("#number-form");
const harshadNumList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultTag = document.querySelector("#result");

numberForm.addEventListener("submit", (e) => {
    // Prevent default behviour of the form
    e.preventDefault();

    // Get the number
    const number = document.getElementById("number").value;

    // Check if it's harshad or not
    isHarshad(number);
})

const isHarshad = (number) => {

    // If the number is a negative number
    if (number < 0) {
        // Return a notification and clear the form
        document.getElementById("number").value = "";
        resultTag.innerHTML = "A harshad number cannot be negative number";
        resultTag.className = "text-danger";
        return;
    }

    // If the number is a 0 to 10 number
    if (harshadNumList.indexOf(parseInt(number)) != -1) {
        // It is a harshad
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is a harshad number";
        resultTag.className = "text-success";
        return;
    }

    // Split the whole number into single number
    const numberCharArray = number.split("");

    // Sum them up
    let sum = numberCharArray.reduce((a, b) => {
        return parseInt(a) + parseInt(b);
    });
    //console.log(sum);

    // Check if the number is divisible by the sum of their digits
    if (parseInt(number) % sum == 0) {
        // If true print out "It is a harshad number"
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is a harshad number";
        resultTag.className = "text-success";
    } else {
        // If false print out "It is not a harshad number"
        document.getElementById("number").value = "";
        resultTag.innerHTML = "It is not a harshad number";
        resultTag.className = "text-danger";
    }
}