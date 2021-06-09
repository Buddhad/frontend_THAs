let screen= document.getElementById('screen');

buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if(buttonText=='X')
        {
            buttonText='*';
        //    screen.value += screenValue;
           screen.value += buttonText;
        //    screenValue+=buttonText;
        
        }
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        }
        else if(buttonText == 'C'){
            screen.value = "";
           
        }
        else if(buttonText == '+'){
            screen.value += buttonText;
           
        }
        else if(buttonText == '-'){
            screen.value += buttonText;
        }
        else if(buttonText == '/'){
            screen.value += screenValue;
           
        }
        else{
           
            screen.value += screenValue;
        }

        })

}