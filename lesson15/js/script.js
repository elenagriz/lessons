let form = document.querySelector('.forma');
let validateBtn = form.querySelector('.input');
/*var username = form.querySelector('.username');
var tel = form.querySelector('.tel');
var accord = form.querySelector('.accord');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('clicked on validate');
  console.log('Имя: ', username.value);
  console.log('Телефон: ', tel.value);
  console.log('Согласие: ', accord.value);
})*/

let fields = form.querySelectorAll('.field')
form.addEventListener('submit', function (event) {
  event.preventDefault()
  for (let i = 0; i < fields.length; i++) {
    if (!fields[i].value) {
      console.log('Пустое поле', fields[i])
      let error = document.createElement('div')
      error.className='error'
      error.style.color = 'red'
      error.innerHTML = 'Поле не может быть пустым'
      form[i].parentElement.insertBefore(error, fields[i])
    }
  }
})