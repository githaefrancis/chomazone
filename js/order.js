class MakeOrder {
    constructor(meatType, quantity, joint) {
        this.meatType = meatType;
        this.quantity = quantity;
        this.joint = joint;
    }
} 
const meatPrice = [700, 600, 800];
const deliveryPrice = []
var orderPrice;

$(document).ready(function () {
    $('#meat-order').submit(function (event) {
        event.preventDefault();

        let quantity;
        let meatType;
        quantity = $('input#qty').val();
        meatType = $('#typemeat').val();

        if(meatType == 'goat') {
            orderPrice = meatPrice[0] * parseInt(quantity);
            
        }else if(meatType == 'beef') {
            orderPrice = meatPrice[1] * parseInt(quantity);
            
            
        }else if(meatType == 'chicken') {
            orderPrice = meatPrice[2] * parseInt(quantity);
            
        };
        alert('Your order will cost Ksh.' + orderPrice);

        $('input#qty').val('');

    });


});

let today=new Date(Date.now());
console.log(today.toLocaleString());
