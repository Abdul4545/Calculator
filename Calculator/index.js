let string = "";

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (eve) => {

        if(eve.target.innerHTML == 'CE'){
            string = "";
            document.querySelector('input').value = string;
        }

        else if(eve.target.innerHTML == 'C')
        {
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }

        else if(eve.target.innerHTML == 'x')
        {
            string = string + '*';
            document.querySelector('input').value = string;

        }

        else if(eve.target.innerHTML == '÷')
        {
            string = string + '/';
            document.querySelector('input').value = string;

        }

        else if(eve.target.innerHTML == '=') {
            var result;
            try
            {
                result = eval(string);
            }

            catch(error)
            {
                result = 'Invalid Expression';
            }
            string = result;
            document.querySelector('input').value = string;
        }


        else
        {
            console.log(eve.target);
            string = string + eve.target.innerHTML;
            document.querySelector('input').value = string;
        }
        
    })
});