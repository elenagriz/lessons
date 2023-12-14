let surname = prompt('Ваша фамилия?');
let firstname = prompt('Как Вас зовут?');
let age = prompt('Сколько Вам лет?');
let question = confirm('Вы мужчина?');

let retired;
let gender;

if (question === true && age >= 65) {
    gender = 'мужчина';
    retired = 'да';
} else {
    if (question === true && age < 65) {
        gender = 'мужчина';
        retired = 'нет';
    } else {
        if (question === false && age >= 60) {
            gender = 'женщина';
            retired = 'да';
        } else {
            gender = 'женщина';
            retired = 'нет';
        }
    }
}

alert(`Ваше имя: ${firstname}` + '\n' + `Ваша фамилия: ${surname}` + '\n' + `Ваш пол: ${gender}` + '\n' + `Вы на пенсии: ${retired}`);