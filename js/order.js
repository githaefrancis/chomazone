class MakeOrder {
    constructor(meatType, quantity, joint) {
        this.meatType = meatType;
        this.quantity = quantity;
        this.joint = joint;
    }
} 
const meatPrice = [700, 600, 800];


$(document).ready(function () {
    $('#meat-order').submit(function (event) {
        event.preventDefault();
        quantity = $('qty').val();
        meatType = $('#typemeat').val();
        let quantity;
        let meatType;
        var price = meatPrice * quantity

        if(meatType = $('option#goat')) {
            return meatPrice[0] * quantity;
            alert(price);
        }else if(meatType = $('option#beef')) {
            return meatPrice[1] * quantity;
            alert(price);
        }else if(meatType = $('option#goat')) {
            return meatPrice[2] * quantity;
            alert(price);
        };

    });


});

let today=new Date(Date.now());
console.log(today.toLocaleString());
