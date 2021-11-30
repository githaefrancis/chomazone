

$(() => {
  let jointsList=joints;
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
      console.log("hooray")
      let result=jointsList.filter(joint=>joint.name==criteria);
      jointsList.forEach((joint) => {
        // console.log(joint);
        
      });
      console.log(result);
      console.log("sasawa");
    }
  };
  
getJoint("Kamakis");
});
