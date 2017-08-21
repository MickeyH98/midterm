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


$(function(){
  $(".wrapper").slideDown(3000);
})
