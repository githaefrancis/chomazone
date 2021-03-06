prices = [700, 600, 800];

let specialtyPrices = {
  chuckRoast: 500,
  clodRoast: 700,
  brisket: 580,
  stripLoinRoast: 650,
  roastedGoat: 700,
  tenderLoin: 600,
};
function Order(
  meatType,
  quantity,
  delivery,
  instructions,
  customerName,
  customerNumber,
  jointId,
  deliveryLocation
) {
  this.meatType = meatType;
  this.quantity = quantity;
  this.delivery = delivery;
  this.deliveryLocation = deliveryLocation;
  this.deliveryAmount = 150;
  this.instructions = instructions;
  this.customerName = customerName;
  this.customerNumber = customerNumber;
  this.jointId = jointId;
  this.unitPrice = 0;
  this.total = 0;
}
Order.prototype.getOrderTotal = function () {
  // console.log(this.meatType);
  // if (this.meatType == "goat") {
  //   this.unitPrice = prices[0];
  //   console.log(this.unitPrice);
  // } else if (this.meatType == "beef") {
  //   this.unitPrice = prices[1];
  //   console.log("yes");
  // } else if (this.meatType == "chicken") {
  //   this.unitPrice = prices[2];
  //   console.log(yeah);
  // }
  this.unitPrice = specialtyPrices[this.meatType];
  console.log(this.unitPrice);
  if (this.delivery) {
    this.total = this.unitPrice * this.quantity + 150;
  } else this.total = this.unitPrice * this.quantity;

  return this.total;
};

$(() => {
  let clickedJoint = parseInt(localStorage.getItem("selectedJoint"));

  let getOrderJoint = (id) => {
    let orderJoints = joints.filter((joint) => {
      return joint.id === id;
    });
    console.log(orderJoints);
    return orderJoints;
  };

  let selectedJoint = getOrderJoint(clickedJoint);
  console.log(selectedJoint[0].hours);
  $("#profile").append(`<div class="">
  <h1 class="outletName">${selectedJoint[0].name}</h1>
  <p class="outletLocation"> ${selectedJoint[0].location}</p>
  <h2 class="outletHours">Hours : <span class="text-white">${selectedJoint[0].hours}</span></h2>
  
</div>
<div class="avatar">
<img src="${selectedJoint[0].images}"  class="img-fluid rounded-circle" alt="">
</div>
</div>`);

  let displayableName = (rawName) => {
    if (rawName == "chuckRoast") {
      return "Chuck Roast @500/kg";
    } else if (rawName == "clodRoast") {
      return "Clod Roast @700/kg";
    } else if (rawName == "brisket") {
      return "Brisket @580/Kg";
    } else if (rawName == "tenderLoin") {
      return "Tenderloin @600/Kg";
    } else if (rawName == "stripLoinRoast") {
      return "Strip Loin Roast @650/Kg";
    } else if (rawName == "roastedGoat") {
      return "Roasted Goat @700/Kg";
    }
  };
  //order-form
  $("form").on("change", () => {
    let selectedDeliveryOption = $("[name=delivery]:checked").val();
    console.log(selectedDeliveryOption);
    $("#itemDisplay").text(displayableName($("#typemeat").val()));
    if (selectedDeliveryOption == "delivery") {
      $("#deliveryDiv").removeClass("d-none");
    } else {
      $("#deliveryDiv").addClass("d-none");
    }
  });

  //orders
  $("#order-source").text(selectedJoint[0].name);
  let orders = [];

  let getLocalStorageState = () => {
    orders = JSON.parse(localStorage.getItem("placedOrders"));

    if (orders !== null) {
      return orders;
    } else return [];
  };
  //read order form inputs
  $("#order-form").submit((e) => {
    $("#orderModal").modal("show");
    // confirm order details

    // $('.modal-body').append("new Order");
    //confirm order details
    e.preventDefault();
    let meatType = $("#typemeat").val();
    let quantity = parseInt($("#quantity").val());
    let instruction = $("#instruction").val();
    let delivery = $("[name=delivery]:checked").val();
    let deliveryLocation = $("#deliveryLocation").val();
    let customerName = $("#customer-name").val();
    let customerNumber = $("#customer-number").val();
    if (delivery == "pickup") {
      console.log(delivery);
      delivery = false;
    } else if (delivery == "delivery") {
      delivery = true;
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
        selectedJoint[0].id,
        deliveryLocation
      )
    );
    console.log(currentOrder[currentOrder.length - 1].getOrderTotal());
    if(currentOrder[currentOrder.length - 1].deliveryLocation){
      let displayableLocation="Location: " + currentOrder[currentOrder.length - 1].deliveryLocation
    }
    else if(!(currentOrder[currentOrder.length - 1].deliveryLocation)){
      let displayableLocation="Pickup"
    }
    $(".modal-body").text("");
    $(".modal-body").append(
      `Your order item is ${
        currentOrder[currentOrder.length - 1].meatType
      }<p>Quantity ${currentOrder[currentOrder.length - 1].quantity} Kgs</p><p>Total amount: ${currentOrder[currentOrder.length - 1].total}</p><p>Delivery Location: ${currentOrder[currentOrder.length - 1].deliveryLocation}</p>`
    );
    localStorage.setItem("placedOrders", JSON.stringify(currentOrder));

    console.log(getLocalStorageState());

    document.getElementById("order-form").reset();
    $("#itemDisplay").text(displayableName($("#typemeat").val()));
  });

  // alt submit

  // document.getElementById('orderform').addEventListener('submit',(e)=>{
  //   e.preventDefault;
  //   alert('submitte');
  // })
});
