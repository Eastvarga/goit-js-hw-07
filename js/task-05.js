const inputNameRef =  document.querySelector('input#name-input');
// console.dir(inputNameRef);
const nameOutputRef = document.querySelector('span#name-output');
// console.dir(nameOutputRef);
inputNameRef.addEventListener('input',(event)=>{
    if(event.target.value ===''){
    nameOutputRef.textContent = 'незнакомец';
    } else 
    nameOutputRef.textContent = event.target.value;
});