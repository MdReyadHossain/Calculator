let display = document.getElementById("screen");
let regex = /[-+./* 0-9]/


document.addEventListener("keydown", function (event) {
    if (event.key == 'Backspace')
        wipe();

    else if (event.key == 'Enter')
        calc();

    else if (regex.test(event.key))
        show(event.key)
})

function allClear() {
    display.value = null;
}

function clear() {
    display.value -= display.value[display.value.length - 1]
}

function show(value) {
    display.value += value;
    console.log(display.value[display.value.length - 1]);
}

function calc() {
    display.value = eval(display.value);
}