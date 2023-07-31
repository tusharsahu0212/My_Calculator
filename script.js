const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eigth = document.getElementById("eigth");
const nine = document.getElementById("nine");
const ten = document.getElementById("ten");
const zero = document.getElementById("zero");

const pluse = document.getElementById("pluse");
const minuse = document.getElementById("minuse");
const multi = document.getElementById("multi");
const devide = document.getElementById("devide");
const decimal = document.getElementById("decimal");
const equal = document.getElementById("equal");


const cut = document.getElementById("cut");

const text = document.getElementById("text1");
// text.innerHTML = "";
let value = text.innerHTML;
let first, second;
let flag = 1;
let firstLength = 0;


zero.addEventListener("click", (e) => {
    value = value + "0";
    text.innerHTML = value;
})

one.addEventListener("click", (e) => {
    value = value + "1";
    text.innerHTML = value;
})

two.addEventListener("click", (e) => {
    value = value + "2";
    text.innerHTML = value;
})

three.addEventListener("click", (e) => {
    value = value + "3";
    text.innerHTML = value;
})

four.addEventListener("click", (e) => {
    value = value + "4";
    text.innerHTML = value;
})

five.addEventListener("click", (e) => {
    value = value + "5";
    text.innerHTML = value;
})

six.addEventListener("click", (e) => {
    value = value + "6";
    text.innerHTML = value;
})

seven.addEventListener("click", (e) => {
    value = value + "7";
    text.innerHTML = value;
})

eigth.addEventListener("click", (e) => {
    value = value + "8";
    text.innerHTML = value;
})

nine.addEventListener("click", (e) => {
    value = value + "9";
    text.innerHTML = value;
})

decimal.addEventListener("click", (e) => {

    if (flag == 1) {
        value = value + ".";
        text.innerHTML = value;
        flag = 0;
    }

})

cut.addEventListener("click", (e) => {

    if (value === "Infinity")
        value = "";

    if (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/') {
        flag = 0
    }

    if (value[value.length - 1] == '.') {
        flag = 1;
    }

    value = value.slice(0, value.length - 1)
    text.innerHTML = value;

})


pluse.addEventListener("click", () => {

    if (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/') {
        value = value.substring(0, value.length - 1) + '+';
        text.innerHTML = value;
    } else {
        value = value + "+";
        text.innerHTML = value;
    }




    flag = 1;

})

minuse.addEventListener("click", () => {

    if (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/') {
        value = value.substring(0, value.length - 1) + '-';
        text.innerHTML = value;
    } else {
        value = value + "-";
        text.innerHTML = value;
    }

    flag = 1;

})

multi.addEventListener("click", () => {

    if (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/') {
        value = value.substring(0, value.length - 1) + '*';
        text.innerHTML = value;
    } else {
        value = value + "*";
        text.innerHTML = value;
    }

    flag = 1;

})

devide.addEventListener("click", () => {

    if (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/') {
        value = value.substring(0, value.length - 1) + '/';
        text.innerHTML = value;
    } else {
        value = value + "/";
        text.innerHTML = value;
    }

    flag = 1;

})

equal.addEventListener("click", () => {

    let result;

    if (value[value.length - 1] == '+' || value[value.length - 1] == '-' || value[value.length - 1] == '*' || value[value.length - 1] == '/') {

        result = eval(value.substring(0, value.length - 1)).toString();
        value = result + value[value.length - 1];
        text.innerHTML = value;

    } else {
        result = eval(value.substring(0)).toString();
        value = result;
        text.innerHTML = value;
    }

    flag = 1;

})