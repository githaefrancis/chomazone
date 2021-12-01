class MakeOrder {
    constructor(meatType, quantity, joint) {
        this.meatType = meatType;
        this.quantity = quantity;
        this.joint = joint;
    }
} 
const meatPrice = [700, 600, 800];
const deliveryPrice = [120]
var orderPrice;
var totalPrice;

$(document).ready(function () {
    $('#meat-order').submit(function (event) {
        event.preventDefault();

        let quantity;
        let meatType;
        quantity = $('input#qty').val();
        meatType = $('#typemeat').val();

        if(meatType == 'goat') {
            orderPrice = meatPrice[0] * parseFloat(quantity);
            
        }else if(meatType == 'beef') {
            orderPrice = meatPrice[1] * parseFloat(quantity);
            
            
        }else if(meatType == 'chicken') {
            orderPrice = meatPrice[2] * parseFloat(quantity);
            
        }else if(meatType == 'none') {
            alert('Please select the type of meat you would like')
        };
        
        $('#typemeat').val('none');
        $('input#qty').val('');

        
        var deliveryOption = $('[name=deliveryoption]:checked').val();

        totalPrice = orderPrice += parseInt(deliveryPrice);
        if (delivery) {
            alert('Your total cost will be ' + totalPrice);
        }else if(pickup) {
            alert('Your total cost will be ' + orderPrice);
        }

    });


});

// let today=new Date(Date.now());
// console.log(today.toLocaleString());
