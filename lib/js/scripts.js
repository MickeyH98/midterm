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
