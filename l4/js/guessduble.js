let answer = parseInt(Math.random() * 100);
let tryCount = 0;
let maxTryCount = 6;

let userNumber = 1;
let userCounter1 = 0;
let userCounter2 = 0;

function userFlag(x) {
    if (userNumber === 1) {
        return userNumber = 2;
    } else {
        return userNumber = 1;
    }
}

function readInt() {
    let number = document.getElementById("userAnswer").value;
    return parseInt(number);
    // return +document.getElementById("userAnswer").value;
}

function write(text) {
    document.getElementById("info").innerHTML = text;
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}

document.getElementById("userNumber").innerHTML = "Игрок № " + userNumber;

function guess() {

    tryCount++;
    let userAnswer = readInt();
    let countUser = maxTryCount - tryCount;

    let userF = userFlag(userNumber);
    document.getElementById("userNumber").innerHTML = "Игрок № " + userF;

    if (userAnswer === answer && tryCount <= maxTryCount) {

        if (countUser === 0) {
            write("Игра закончена<br>Правильный ответ: " + answer);
            hide("button");
            hide("userAnswer");
            hide("userNumber");

            userCounter2++;

            document.getElementById("userResult").innerHTML = "Игрок № 1 колличество угаданных чисел = " + userCounter1 + "</br>" +
                "Игрок № 2 колличество угаданных чисел = " + userCounter2;
        } else {

            write("<b>Вы угадали осталось ходов = " + countUser);

            if (userF === 1) {
                userCounter2++;
            } else {
                userCounter1++;
            }
        }
    } else if (tryCount >= maxTryCount) {

        write("Игра закончена<br>Правильный ответ: " + answer);
        hide("button");
        hide("userAnswer");
        hide("userNumber");

        document.getElementById("userResult").innerHTML = "Игрок № 1 колличество угаданных чисел = " + userCounter1 + "</br>" +
            "Игрок № 2 колличество угаданных чисел = " + userCounter2;

    } else if (userAnswer > answer) {
        write("Вы ввели слишком большое число<br>Попробуйте еще раз. Введите число от 1 до 100");
    } else if (userAnswer < answer) {
        write("Вы ввели слишком маленькое число<br>Попробуйте еще раз. Введите число от 1 до 100");
    }
}
