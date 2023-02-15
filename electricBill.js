/*purpose to make a algorithm which will calculate the elctric bill by mentioning the units
The electric tariff:
1-100  :6
101-300:7.50
301-500:8.90
>500   :10
*/
//  var units
var chargeableUnits =0
var amount = 0
var value = 0
function electricBill(units){
    if (units>500){
        value = units - 500
        chargeableUnits=value*10
        amount += chargeableUnits
        units = units - value
    }
    if (units>300){
        value = units - 300
        chargeableUnits=value*8.9
        amount += chargeableUnits
         units = units - value
    }
    if (units>100){
        value = units - 100
        chargeableUnits=value*7.5
        amount += chargeableUnits
         units = units - value
    }
    if (units>0){   
        chargeableUnits=units*6
        amount += chargeableUnits
    }
        return amount
}
var Bill = electricBill(600)
console.log(Bill)