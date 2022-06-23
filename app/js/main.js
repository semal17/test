let val = document.querySelector('.form__input--range');
let sum = document.querySelector('.form__item-capt');
val.addEventListener("change", function(){
  sum.textContent = `${val.value} %`;
});

console.log(val.value);