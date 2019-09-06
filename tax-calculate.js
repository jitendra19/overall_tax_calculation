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
        // console.log((getTaxableIncome(income)*5)/100);    
        return (getTaxableIncome(income)*5)/100;
    } else if(income<1000001) {
        const taxableIncome = getTaxableIncome(income);
        // console.log(12500+((taxableIncome-500000)*20)/100);
        return 12500+((taxableIncome-250000)*20)/100;
    } else {
        const taxableIncome = getTaxableIncome(income);
        // console.log(12500+100000+((taxableIncome-1000000)*30)/100);
        return 12500+100000+((taxableIncome-750000)*30)/100;
    }
}

function getTaxableIncome(totalIncome, investment80C) {
    if(totalIncome>250000) {
      let remainingIncome = totalIncome-250000;
      if(investment80C) {
        if(remainingIncome >= investment80C) {
            return totalIncome-250000-investment80C;
        } else {
          return 0;  
        }          
      } 
      return totalIncome-250000;
    }
    return 0;
}

function getOverallTax(income, tax) {
    return (tax/income)*100;
}

var out = [];
var investment80C = prompt('any investment');
for(let i=1;i<=50;i++) {
  const income = i*100000;
  const tax = getAbsoluteTax(income, investment80C);
  const overallTax = getOverallTax(income, tax);
  out.push({income, tax, overallTax});
  // console.table(i*100000, getAbsoluteTax(i*100000));
}
console.table(out)
