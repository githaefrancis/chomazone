$(() => {
  let jointsList = joints;
  console.log(jointsList);

  let testArray = [1, 2, 4, 5];
  console.log(testArray[1]);
  // get joints
  let getJoint = (criteria) => {
    if (criteria == "all") {
      console.log("hello");
      return jointsList;
    } else {
      console.log(criteria);
      console.log("hooray");
      var matchExpression = new RegExp(`.*${criteria}.*`, `ig`);
      // let result = jointsList.filter((joint) => joint.name == criteria);
      let result = jointsList.filter(
        (joint) =>
        matchExpression.test(joint.name) ||
        matchExpression.test(joint.location)
      );

      // jointsList.forEach((joint) => {
      //   // console.log(joint);

      // });
      return result;
    }
  };

  let activeJoints = getJoint("all");

  //display on load

  // use "all" as the filter parameter to show all
  let displayJoints = (activeJoints) => {
    $(".locations").text("");
    $(".locations").append(`<h1><span class="our">CHOMA ZONES</span><span class="special"> IN NAIROBI</span></h1>`);
    if (activeJoints.length > 0) {
      activeJoints.forEach((activeJoint) => {
        $(".locations").append(`   <div class="container mt-5"> 
    <div class="card">
        <div class="row">
            <div class="col-md-4">
             <img src="${activeJoint.images}" class="img-fluid">
            </div>
            <div class="col-md-8 joint-body">
             <h2 class="card-title mt-3 zones-names">${activeJoint.name}</h2>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star"></i>
             <i class="fas fa-star-half-alt"></i>
             <p class= "zones-location"><i class="fas fa-map-marker-alt"> </i> ${activeJoint.location}</p>
             <hr class="fw-5"/>
             <p class="zones-hours">Open hours: ${activeJoint.hours}</p>
             <a class="btn see-more-button text-white" href="ordering.html" id="${activeJoint.id}">see more</a>
            </div>
        </div>
    </div>
  </div>`);
      });
    } else {
      $('.locations').append(`<h2 class="text-center">No results found</h2>`);
    }

    $('.see-more-button').on('click', (e) => {
      let selectedJointButton = e.target.id;
      localStorage.setItem('selectedJoint', selectedJointButton.toString())
    })
  };
  // $("#img-joint").text(`${activeJoints[0].name} ${activeJoints[0].location}`);
  displayJoints(activeJoints);
  $('#searchButton').on('click', (e) => {
    console.log('#searchBar');
    let searchWord = $('#searchBar').val().trim();
    if (searchWord.length > 0) {
      console.log(searchWord);
      activeJoints = getJoint(searchWord);
      displayJoints(activeJoints);

    } else {
      return;
    }
    window.location.href = "#location-section"

  })

  $('#searchBar').keyup((e) => {
    if (e.keyCode === 13) {
      console.log("entered");
      e.preventDefault();
      $('#searchButton').click();
    }
  });

  $('#searchBar').keydown(() => {
    if ($('#searchBar').val().trim.length === 0) {
      console.log("empty");
      displayJoints(getJoint("all"));
    }
  })
  //redirect to order page
  $('.see-more-button').on('click', (e) => {
    let selectedJointButton = e.target.id;
    localStorage.setItem('selectedJoint', selectedJointButton.toString())
  })

  $("#contact").on("submit", function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#pass").val();
    console.log(name);

    if (!name || !email || !password) {
      alert("fill all the values");
      $(myForm)[0].reset();
      return false;
    } else {
      alert(`${name} we have received your message. Thank you for reaching out to us.`);
      $(myForm)[0].reset();
      return true;
    }

  })
});