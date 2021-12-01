$(() => {
  $("#merchant").on("submit", (e) => {
    e.preventDefault();
    let chomacode = $("#chomacode").val();
    alert(chomacode);
  });
});
