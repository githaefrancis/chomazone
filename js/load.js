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
      var matchExpression=new RegExp(`.*${criteria}.*`,`g`);
      // let result = jointsList.filter((joint) => joint.name == criteria);
      let result = jointsList.filter((joint) => matchExpression.test(joint.name) ||matchExpression.test(joint.location) );
      
      // jointsList.forEach((joint) => {
      //   // console.log(joint);

      // });
      console.log(result);
      console.log("sasawa");
      return result;
    }
  };

  let activeJoints = getJoint("Pritt Nairobi");

  $("#joints").text(`${activeJoints[0].name} ${activeJoints[0].location}`);
});
