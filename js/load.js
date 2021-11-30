$(() => {
  let jointsList=[];

  
  $.getJSON("./assets/joints.json", (data) => {
  //returns an object containing an array of joints under the keyname joints
    populateJointsList(data);

    });
    
    function populateJointsList(data){
     //save array of objects
      jointsList=data.joints;
      console.log(jointsList);
    }
  
  
});
