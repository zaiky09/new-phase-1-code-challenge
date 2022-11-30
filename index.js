//Challenge 1 - Student Grade Generator

let gradeCalculator = function (score, total) {

    //Letter grades to use

    let percentage = (score / total) * 100
    let letterGrade = ' '

    //Using if-else and else-if

    if (percentage >= 79) {
        letterGrade = 'A'
    }
        else if (percentage >= 60) {
            letterGrade = 'B'
        }
        else if (percentage >= 59) {
            letterGrade = 'C'
        }
        else if (percentage >= 40) {
            letterGrade = 'D'
        }
        else {
            letterGrade = 'E'
        }
    
    //Return
    return 'Your score is' + ' ' + letterGrade + ' ' + '(' + percentage + ')' + '%'    
}

//Using variable to call gradeCalculator
let result = gradeCalculator (67, 100)

//print using console.log
console.log(result)

//Challenge 2 - Speed Detector

function speedDetector(carSpeed) {
    const speedLimit = 70
    const speedRate = 5

//if statement

if (carSpeed <= 70) {
    return 'OK'
}

//variable declaration

const excessCarSpeed = carSpeed - speedLimit;

let demeritPoints = 0;

//For Loop

for(let i=0; i < excessCarSpeed; i+= speedRate) {
    demeritPoints += 1

    //If statement

    if(demeritPoints > 12) {
        return 'Licence Suspended'
    }
}
// Return Message

return `Points: ${demeritPoints}`;
}

// nnn
//Print message
console.log(speedDetector (199));

//Challenge 3 - Net Salary Calculator

//setting  values for gross salary calculation

 var grossSalary = basicSalary + benefits;

var basicSalary = 80000;
 var benefits = 40000;

 //NSSF 
 //using NSSF as a function, to calculate amount being charged based on gross salary
 var nssf = function(grossSalary) {
 if (grossSalary > 6000) {                                //Tier 1
    return 6000 * 0.06
 }
 else if (grossSalary <= 6000) {
    return grossSalary * 0.06
 }
 else {
    return 0
 }
 }

 //NHIF
 //using NHIF as a function, to calculate amount to be charged based on gross salary 
 var nhif = function(grossSalary) {
    if (grossSalary < 6000) {
        return 150;
    }
    else if (grossSalary >= 6000 && grossSalary < 8000) {
        return 300;
    }
    else if (grossSalary >= 8000 && grossSalary < 12000) {
        return 400;
    }
    else if (grossSalary >= 12000 && grossSalary < 15000) {
        return 500;
    }
    else if (grossSalary >= 15000 && grossSalary < 20000) {
        return 600;
    }
    else if (grossSalary >= 20000 && grossSalary <25000) {
        return 750;
    }
    else if (grossSalary >= 25000 && grossSalary < 30000) {
        return 850;
    }
    else if (grossSalary >= 30000 && grossSalary < 35000) {
        return 900;
    }
    else if (grossSalary >= 35000 && grossSalary < 40000) {
        return 950;
    }
    else if (grossSalary >= 40000 && grossSalary <45000) {
        return 1000;
    }
    else if (grossSalary >=45000 && grossSalary < 50000) {
        return 1100;
    }
    else if (grossSalary >= 50000 && grossSalary < 60000) {
        return 1200;
    }
    else if (grossSalary >= 60000 && grossSalary < 70000) {
        return 1300;
    }
    else if (grossSalary >= 70000 && grossSalary < 80000) {
        return 1400;
    }
    else if (grossSalary >= 80000 && grossSalary < 90000) {
        return 1500;
    }
    else if (grossSalary >= 90000 && grossSalary < 100000) {
        return 1600;
    }
    else {
        return 1700;
    }
 }

 //KRA
 //Calculating amount to be taxed
 var taxable = grossSalary - nssf
 var kra = function (taxable) {
    if (taxable <= 24000) {
        return taxable * 0.1;
    }
    else if (taxable > 24000 && taxable <= 32333) {
        return taxable * 0.25;
    }
    else {
        return taxable * 0.3
    }
 }

 //Paye
 
 var personalRelief = 2400
 var nhifRelief = nhif * 0.15

 var netIncome = function () {
    return grossSalary - nssf - nhif - kra
 }
 netIncome(80000) 

 