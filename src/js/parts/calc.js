function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

		totalValue.innerHTML = 0;
	
    

    persons.addEventListener('change', function() {
        place.disabled = false;
        persons.value = persons.value.replace(/[^0-9]+/g, '');
        personsSum = +this.value;
        total = (daysSum + personsSum)*4000;
        
        if (persons.value == '' || restDays.value == '' || persons.value[0] == '0' || restDays.value[0] == '0') {
            totalValue.innerHTML = 0;

        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function() {
        place.disabled = false;
        restDays.value = restDays.value.replace(/[^0-9]+/g, '');
        daysSum = +this.value;
        total = (daysSum * personsSum)*10;
    
        if (persons.value == '' || restDays.value == '' || persons.value[0] == '0' || restDays.value[0] == '0')  {
            totalValue.innerHTML = 0;

        } else {
            
            totalValue.innerHTML = total;
        } 

    });

    place.addEventListener('change', function() {
        if (restDays.value == '' || persons.value == ''|| persons.value[0] == '0' || restDays.value[0] == '0') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });

    function changeBase() {
        if (restDays.value == '' || persons.value == ''|| persons.value[0] == '0' || restDays.value[0] == '0') {
            totalValue.innerHTML = 0;
            place.disabled = true;
        } else { 
            place.disabled = false;
        }
    }

    place.addEventListener('click', function() {
        changeBase()
    });

}

export default calc;