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

function getTaxableIncome({totalIncome, investment80C, _80G, _80TTA, HRA}) {   
    investment80C = investment80C ? investment80C>150000 
                                      ? 150000 : investment80C
                                    : 0;  
    _80G = _80G ? _80G : 0;
    _80TTA = _80TTA ? _80TTA : 0;
    HRA = HRA ? HRA : 0;

    const totaltax =  parseInt(investment80C) + parseInt(_80G) + parseInt(_80TTA) + parseInt(HRA);

    if(totalIncome>250000) {
      let remainingIncome = totalIncome-250000;
      if(totaltax) {
        // if(investment80C>=150000) {
        //   return remainingIncome-150000>-1 ? remainingIncome-150000 : 0;
        // } else {
          return remainingIncome-totaltax-40000 > -1 ? remainingIncome-totaltax-40000 : 0;
        // }                  
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
var investment80C = prompt('Any investment under 80C?');
var _80G = prompt('Any donation on 100% under 80G?');
var _80TTA = prompt('80TTA saving bank account interest max 10k?');
var HRA = prompt('HRA on rent?');
for(let i=1;i<=50;i++) {
  const totalIncome = i*100000;
  const tax = getAbsoluteTax({totalIncome, investment80C, _80G, _80TTA, HRA});
  const overallTax = getOverallTax(totalIncome, tax);
  out.push({totalIncome, tax, overallTax});
}
console.table(out);
