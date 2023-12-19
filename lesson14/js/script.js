function sumInput() {
  let arr = [];
  let sum = 0;
  while (true) {
    let element = prompt('Введите число', 0);
    if (element === '' || element === null || !isFinite(element)) 
            break;
    arr.push(+element);
    }
     
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
     
  return(sum);
  }
  
alert( sumInput() );