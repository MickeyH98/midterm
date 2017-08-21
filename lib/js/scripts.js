$( "#commentForm" ).validate({
  rules: {
    fname: {
      required: true
    },
    lname: {
      required: true
    },
    email: {
      required: true
    }
  }
});


$(document).ready(function(){
  $(".wrapper").slideDown(3000);
})
