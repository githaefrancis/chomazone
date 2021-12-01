$(() => {
  let jointsList = joints;
  console.log(jointsList);

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
      console.log(result);
      console.log("sasawa");
      return result;
    }
  };

  //   <<
  //   << << < HEAD
  //   let activeJoints = getJoint("Nairobi");

  //   $("#joints").text(`${activeJoints[0].name} ${activeJoints[0].location}`);
  // }); ===
  // === =
  // let activeJoints = getJoint("house nairobi");

  //display on load

  // use "all" as the filter parameter to show all
  let displayJoints = (activeJoints) => {
    activeJoints.forEach(activeJoint => {
      $("#img-joint").append(`<img src="${activeJoint.images}" width="480px"/>
  <p>${activeJoint.name}</p>

          <p>${activeJoint.location}</p>
          <p>Hours Open: ${activeJoint.hours}</p>
          <button id=${activeJoint.id}>See More</button>
  `);

    })
  }
  // $("#img-joint").text(`${activeJoints[0].name} ${activeJoints[0].location}`);
  displayJoints(activeJoints)


})