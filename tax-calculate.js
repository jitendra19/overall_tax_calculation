/*
*   250000: 0%
*   500000: 5%
*   1000000: 20%
*   above that: 30%
*   find overall tax on salary 
*/
function getAbsoluteTax(income, investment80C) {
  const taxableIncome = getTaxableIncome(income, investment80C);
    if(taxableIncome<250001) {
        return (taxableIncome*5)/100;
    } else if (taxableIncome<750001) {
        return 12500+((taxableIncome-250000)*20)/100;
    } else if(taxableIncome>750000) {
        return 12500+100000+((taxableIncome-750000)*30)/100;
    }
    return 0;
}

function getTaxableIncome(totalIncome, investment80C) {
    if(totalIncome>250000) {
      let remainingIncome = totalIncome-250000;
      if(investment80C) {
        if(investment80C>=150000) {
           return remainingIncome-150000>-1 ? remainingIncome-150000 : 0;
        } else {
          return remainingIncome-investment80C>-1 ? remainingIncome-investment80C : 0;
        }                  
      } else {
        return remainingIncome;  
      }      
    }
    return 0;
}

function getOverallTax(income, tax) {
    return parseInt((tax/income)*100);
}

var out = [];
var investment80C = prompt('any investment');
for(let i=1;i<=20;i+=4) {
  const income = i*100000;
  const tax = getAbsoluteTax(income, investment80C);
  const overallTax = getOverallTax(income, tax);
  out.push({income, tax, overallTax});
}
console.table(out);
