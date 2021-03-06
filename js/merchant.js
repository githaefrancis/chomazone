$(() => {
  let chomaJoints = joints;

  $("#merchant").on("submit", (e) => {
    e.preventDefault();
    let inputtedCode = $("#chomacode").val();
    let merchantAuthenticated = getMerchant(parseInt(inputtedCode));
    if (merchantAuthenticated.length > 0) {
      $("#orders-view").text("");
      $("#orders-view").append(`<section class="images">
      <h1 class="text-center" id="merchant-view">Our specialty</h1>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 col-lg-4 text-center">
            <div class="card">
              <img src="./img/choma4.jpg" class="card-img-top" alt="" />
            </div>
            <a class="btn btn-warning my-2" href="#Roasted goat">Roasted Beef</a>
          </div>
          <div class="col-12 col-md-6 col-lg-4 text-center mb-3">
            <div class="card">
              <img
                src="./img/jose-ignacio-pompe-s-Z-h0fEiBM-unsplash.jpg"
                class="card-img-top"
                alt=""
              />
            </div>
            <a class="btn btn-warning my-2" href="#Roasted goat">Roasted goat</a>
          </div>
          <div class="col-12 col-md-6 col-lg-4 text-center">
            <div class="card">
              <img src="./img/choma3.jpg" class="card-img-top" alt="" />
            </div>
            <a class="btn btn-warning my-2" href="#Roasted goat">Roasted goat</a>
          </div>
        </div>
      </div>
    </section>
    <!-- orders table as viewed by seller -->
    <section>
      <div class="orders">
        <div class="container">
            <h1 class="text-center">Placed Orders</h1>
            <div class="table-responsive">
          <table class="table table-striped mb-5">
            <thead>
              <tr class="">
                <th scope="col">Order No.</th>
                <th class="" scope="col">Customer Name</th>
                <th class="" scope="col">Mobile Number</th>
                <th scope="col">Location</th>
                <th class="" scope="col">Order Item</th>
              </tr>
            </thead>
            <tbody id="orders-list">
              
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </section>

      <!-- footer section -->
      <!-- footer section -->
      <section class="bottom ">
      <footer class="">
          <div class="d-flex justify-content-evenly flex-wrap">
              <div class="get-intouch">
                  <h2>Get in touch</h2>
                  <hr>
                  <ul>
                      <li><a href="#"><i class="fas fa-phone-alt " arial-hidden="true"></i></i></a>0702081966</li>
                      <li><a href="#"><i class="fas fa-envelope " arial-hidden="true"></i></a>chomazone@yahoo.com</li>
                      <li><a href="#"><i class="fas fa-globe " arial-hidden="true"></i></a>www.choma.com</li>

                  </ul>
              </div>
              <div class="FollowUS ">
                  <h2 class="text-center">Follow Us</h2>
                  <hr>
                  <ul>

                      <li><a href="#"><i class="fab fa-twitter text-white"></i></a></li>
                      <li><a href="#"><i class="fab fa-youtube text-white"></i></a></li>
                      <li><a href="#"><i class="fab fa-facebook text-white"></i></a></li>
                      <li><a href="#"><i class="fab fa-instagram text-white"></i></a></li>

                  </ul>
              </div>
              <div class="keepIn-mx">
                  <h2>Keep in Touch</h2>
                  <hr>
                  <p id="#mailing">Sign up to our mailing list and we <br /> will send you interesting snippets <br />
                      on all things marketing
                  </p>
                  <a href="form.html"><button type="submit" class="btn btn-danger">Sign Up Now</button></a>
              </div>
          </div>


      </footer>

  </section>
  <div class="text-center policy">
      <p class="text-white pt-2">About us Services privacy Statement</p>
      <p class="px-5 pb-3 copyright">copyright &copy; <span class="text-white">2021 Choma Zone </span> All rights
          Reserved</p>
  </div>
`);
      let getLocalStorageState = () => {
        orders = JSON.parse(localStorage.getItem("placedOrders"));

        if (orders !== null) {
          return orders;
        } else return [];
      };

      let merchantOrderHistory = getLocalStorageState();
      console.log(merchantOrderHistory);

      let getOutletOrders = () => {
        let orderList = merchantOrderHistory.filter((order) => {
          return order.jointId == merchantAuthenticated[0].id;
        });
        return orderList;
      };
      console.log(getOutletOrders());
      currentOrderList = getOutletOrders();
      let orderTotal = 0;
      currentOrderList.forEach((singleOrder) => {
        orderTotal += singleOrder.total;
        console.log(orderTotal);

        $("#orders-list").append(`<tr>
  <td><span>${currentOrderList.indexOf(singleOrder) + 1}</span></td>
  <td><span>${singleOrder.customerName}</span></td>
  <td><span>${singleOrder.customerNumber}</span></td>
  <td><span>${singleOrder.deliveryLocation}</span></td>
  <td><span>Roasted ${singleOrder.meatType} ${
          singleOrder.quantity
        }kg</span></td>
  </tr>
  `);
      });

      $("#orders-list").append(`<tr>
      <th scope="row" colspan="3">Total</th>
      <td><span class="total">${orderTotal}</span></td>
      </tr>`);
      console.log(merchantAuthenticated[0].id);

      window.location.href = "#orders-view";
      alert("Welcome");
    } else {
      alert("wrong code");
    }
  });

  let getMerchant = (code) => {
    console.log("heeeeey");
    let merchant = chomaJoints.filter((joint) => {
      return joint.chomacode === code;
    });
    console.log(merchant);
    return merchant;
  };
});
