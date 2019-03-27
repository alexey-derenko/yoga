function calc() {
    let inputs = document.querySelectorAll('.counter-block-input'),
    persons = document.querySelectorAll('.counter-block-input')[0],
    restDay = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total');
    // personSum = 0,
    // daysSum = 0,
    // total = 0;

    function animateValue(obj, start, end, duration) {
        let range = end - start,
            current = start,
            increment = end > start ? 1 : -1,
            stepTime = Math.abs(Math.floor(duration / range)),
            timer = setInterval(function () {
                current += increment;
                obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);
    }

    function validateCalcInput(input) {
        if (!input.match("^[ 0-9]+$")) {
            return input.slice(0, -1);
        } else {
            return input;
        }
    }

    function contCalc(people, days, place) {
        return (people * days) * 10 * place;
    }

    function checkCalcValue(input1, input2) {
        if (input1.value != '' && input2.value != '' && input2.value != 0 && input1.value != 0) {
            return true;
        } else {
            return false;
        }
    }

    totalValue.innerHTML = 0;

    inputs.forEach((item) => {
        item.addEventListener('input',()=>{
            item.value = validateCalcInput(item.value);
        });

        item.addEventListener('change', ()=>{
            if (checkCalcValue(persons,restDay)) { 
                //totalValue.innerHTML = contCalc(persons.value,restDay.value,place.options[place.selectedIndex].value);
                animateValue(totalValue,+totalValue.textContent,+contCalc(+persons.value,+restDay.value,+place.options[place.selectedIndex].value, 3000));
            } else { totalValue.innerHTML = 0}
        });

    });
    place.addEventListener('change', () => {
        if (checkCalcValue(persons,restDay)) { 
            animateValue(totalValue,+totalValue.textContent,+contCalc(+persons.value,+restDay.value,+place.options[place.selectedIndex].value, 3000));
        } else { totalValue.innerHTML = 0}
    });

}
export default calc;


// function calc() {
//     let persons = document.querySelectorAll('.counter-block-input')[0],
//         restDays = document.querySelectorAll('.counter-block-input')[1],
//         place = document.getElementById('select'),
//         totalValue = document.getElementById('total'),
//         personsSum = 0,
//         daysSum = 0,
//         total = 0;

// 		totalValue.innerHTML = 0;
	
    

//     persons.addEventListener('change', function() {
//         place.disabled = false;
//         persons.value = persons.value.replace(/[^0-9]+/g, '');
//         personsSum = +this.value;
//         total = (daysSum * personsSum)*10;
        
//         if (persons.value == '' || restDays.value == '' || persons.value[0] == '0' || restDays.value[0] == '0') {
//             totalValue.innerHTML = 0;

//         } else {
//             totalValue.innerHTML = total;
//         }
//     });

//     restDays.addEventListener('change', function() {
//         place.disabled = false;
//         restDays.value = restDays.value.replace(/[^0-9]+/g, '');
//         daysSum = +this.value;
//         total = (daysSum * personsSum)*10;
    
//         if (persons.value == '' || restDays.value == '' || persons.value[0] == '0' || restDays.value[0] == '0')  {
//             totalValue.innerHTML = 0;

//         } else {
            
//             totalValue.innerHTML = total;
//         } 

//     });

//     place.addEventListener('change', function() {
//         if (restDays.value == '' || persons.value == ''|| persons.value[0] == '0' || restDays.value[0] == '0') {
//             totalValue.innerHTML = 0;
//         } else {
//             let a = total;
//             totalValue.innerHTML = a * this.options[this.selectedIndex].value;
//         }
//     });

//     function changeBase() {
//         if (restDays.value == '' || persons.value == ''|| persons.value[0] == '0' || restDays.value[0] == '0') {
//             totalValue.innerHTML = 0;
//             place.disabled = true;
//         } else { 
//             place.disabled = false;
//         }
//     }

//     place.addEventListener('click', function() {
//         changeBase()
//     });

// }

// export default calc;