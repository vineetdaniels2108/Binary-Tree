// Recursive Sigma 

function sigma(value){
    num = Math.round(value);
    if (num > 0){
        if (num == 0){
            return 0;
        }
        return num + sigma(num -1)
    }
    else if (num < 0){
        if (num == 0){
            return 0;
        }
        return num + sigma(num +1)
    }

}


function factorial(value){
    num = Math.round(value);
    if (num > 0){
        if (num == 1){
            return 1;
        }
        return num * sigma(num -1)
    }
    else if (num < 0){
        return "Cannot do a factorial on a negative number"
    }

}