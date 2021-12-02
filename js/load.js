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
    activeJoints.forEach((activeJoint) => {
      $(".locations").append(`   <div class="container mt-5">
    <div class="card">
        <div class="row">
            <div class="col-md-4">
             <img src="${activeJoint.images}" class="img-fluid">
            </div>
            <div class="col-md-8">
             <h2 class="card-title mt-3">${activeJoint.name}</h2>
             <p>${activeJoint.location}</p>
             <p>Open hours: ${activeJoint.hours}</p>
             <a class="btn see-more-button text-white" href="ordering.html" id="${activeJoint.id}">see more</a>
            </div>
        </div>
    </div>
  </div>`);
    });
  };
  // $("#img-joint").text(`${activeJoints[0].name} ${activeJoints[0].location}`);
  displayJoints(activeJoints);

  //redirect to order page
  $('.see-more-button').on('click',(e)=>{
    let selectedJointButton=e.target.id;
    alert(selectedJointButton);
    localStorage.setItem('selectedJoint',selectedJointButton.toString())
  })
});
