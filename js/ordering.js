prices = [700, 600, 800];
function Order(
  meatType,
  quantity,
  delivery,
  instructions,
  customerName,
  customerNumber,
  jointId
) {
  this.meatType = meatType;
  this.quantity = quantity;
  this.delivery = delivery;
  this.deliveryAmount = 150;
  this.instructions = instructions;
  this.customerName = customerName;
  this.customerNumber = customerNumber;
  this.jointId = jointId;
  this.unitPrice = 0;
  this.total = 0;
}
Order.prototype.getOrderTotal = function () {
  console.log(this.meatType);
  if (this.meatType == "goat") {
    this.unitPrice = prices[0];
    console.log(this.unitPrice);
  } else if (this.meatType == "beef") {
    this.unitPrice = prices[1];
    console.log("yes");
  } else if (this.meatType == "chicken") {
    this.unitPrice = prices[2];
    console.log(yeah);
  }

  if (this.delivery) {
    this.total = this.unitPrice * this.quantity + 150;
  } else this.total = this.unitPrice * this.quantity;

  return this.total;
};

$(() => {
  let clickedJoint = parseInt(localStorage.getItem("selectedJoint"));

  let getOrderJoint = (id) => {
    console.log("heeeeey");
    let orderJoints = joints.filter((joint) => {
      return joint.id === id;
    });
    console.log(orderJoints);
    return orderJoints;
  };

  let selectedJoint = getOrderJoint(clickedJoint);

  $("#profile").append(`<div class="">
  <h1>Name: ${selectedJoint[0].name}</h1>
  <p> ${selectedJoint[0].location}</p>
  <h2>Hours : <span>${selectedJoint[0].hours}</span></h2>
  
</div>
<div class="avatar">
<img src="${selectedJoint[0].images}"  class="img-fluid rounded-circle" alt="">
</div>
</div>`);
  //orders

  let orders = [];

  let getLocalStorageState = () => {
    orders = JSON.parse(localStorage.getItem("placedOrders"));

    if (orders !== null) {
      return orders;
    } else return [];
  };
  //read order form inputs
  $("#order-form").submit((e) => {
    alert("form submitted");
    e.preventDefault();
    let meatType = $("#typemeat").val();
    let quantity = parseInt($("#quantity").val());
    let instruction = $("#instruction").val();
    let delivery = $("[name=delivery]:checked").val();
    let deliveryLocaion = $("#deliveryLocation").val();
    let customerName = $("#customer-name").val();
    let customerNumber = $("#customer-number").val();
    if (delivery == "pickup") {
      delivery = false;
      console.log(delivery);
    } else if (delivery == "delivery") {
      delivery = true;
      console.log(delivery);
    }
    let currentOrder = getLocalStorageState();
    currentOrder.push(
      new Order(
        meatType,
        quantity,
        delivery,
        instruction,
        customerName,
        customerNumber,
        selectedJoint[0].id
      )
    );
    console.log((currentOrder[currentOrder.length-1]).getOrderTotal());
    localStorage.setItem("placedOrders", JSON.stringify(currentOrder));

    console.log(getLocalStorageState());
  });

  // alt submit

  // document.getElementById('orderform').addEventListener('submit',(e)=>{
  //   e.preventDefault;
  //   alert('submitte');
  // })
});
