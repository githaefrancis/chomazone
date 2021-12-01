function myFunction() {

  var input = document.getElementById("input-location").value;
  filter = input.toUpperCase();
  // var locationClass = document.getElementsByClassName("search-location");
  var locationpara = document.getElementsByTagName("search-location");

  for (i = 0; i < locationpara.length; i++) {
    p = locationpara[i].getElementsByTagName("p")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none"
    }
  }
}