let form = document.querySelector('.form'),
formInputs = document.querySelectorAll('.js-input'),
inputPhone = document.querySelector('.js-input-phone'),
inputCheckbox = document.querySelector('.js-input-checkbox');

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.onsubmit = function () {
  let phoneVal = inputPhone.value,
  emptyInputs = Array.from(formInputs).filter(input => input.value === '');
  
  formInputs.forEach(function(input) {
    if (input.value === '') {
      input.classList.add('error');
      
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    console.log('inputs not filled');
    return false;
  }

  if (!validatePhone(phoneVal)) {
    console.log('phone not valid');
    inputPhone.classList.add('error');
    return false;
  } else {
    inputPhone.classList.remove('error');
  }

  if (!inputCheckbox.checked) {
    console.log('checkbox not checked');
    inputCheckbox.classList.add('error');
    return false;
  } else {
    inputCheckbox.classList.remove('error');
  }
  
}