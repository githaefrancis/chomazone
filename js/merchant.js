$(() => {
  let chomaJoints = joints;

  $("#merchant").on("submit", (e) => {
    e.preventDefault();
    let inputtedCode = $("#chomacode").val();
    alert(inputtedCode);
    let merchantAuthenticated = getMerchant(parseInt(inputtedCode));
    if (merchantAuthenticated.length > 0) {
      $('#orders-view').text('');
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
    </section>

      <!-- footer section -->
    <section class="bottom">
        <footer>
            <div class="container d-flex justify-content-evenly ">
                <div class="get-intouch">
                    <h2>Get in touch</h2>
               <ul >
                   <li><a href="#"><i  class="fas fa-phone-alt"arial-hidden="true"></i></i></a>0702081966</li>
                   <li><a href="#"><i class="fas fa-envelope"arial-hidden="true"></i></a>Chomazone@yahoo.com</li>
                   <li><a href="#"><i class="fas fa-globe" arial-hidden="true"></i></a>WWW.choma.com</li>
    
                </ul>
                </div>
                <div class="FollowUS mx-">
                    <h2>Follow Us</h2>
                    <ul>
                       <a href="#"><i class="fab fa-twitter"></i></a>
                       <a href="#"><i class="fab fa-youtube"></i></a>
                       <a href="#"><i class="fab fa-facebook"></i></a>
                       <a href="#"><i class="fas fa-wifi"></i></a>
    
                    </ul>
                </div>
                <div class="keepIn mx-">
                    <h2>Keep in Touch</h2>
                    <p>Sign up to our mailing list  and we will send you interesting snippets
                        on all things marketing
                    </p>
                    <button class="btn btn-danger">Sign Up Now</button>
                </div>
            </div><br><br>
            <div class="footer-bottom">
                <p>About us  Services  privacy Statement</p>
                 <p>copyright &copy;2021 Choma Zone All rights  Reserved</p>
            </div>
    
        </footer>
    </section>
`);

$('#orders-list').append(`<tr>
<td><span>1</span></td>
<td><span>Francis</span></td>
<td><span>0711222340</span></td>
<td><span>Nairobi</span></td>
<td><span>Roasted Beef 1kg</span></td>
</tr>
<tr>
<th scope="row" colspan="3">Total</th>
<td><span class="total">0</span></td>
</tr>`);

window.location.href="#orders-view";
      alert("you are in");
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
