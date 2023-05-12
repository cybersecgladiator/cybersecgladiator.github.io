<script src="https://carrier.formcarry.com/js/v1.js"></script>
<script>
  formcarry({
    // replace this "you-form-id-in-formcarry" with your form id that you can get it from the dashboard.
    form: "7zGChmvrtYX",
    // id or class name of the form element, only form element allowed
    // works with css selectors
    // # <= for id
    // . <= for class
    element: "#my-sweet-form",
    // Success callback, you can show alert messages
    // or redirect the user in this function
    onSuccess: function(response){
      alert(response)
    },
    // Error callback, a good place to show errors 🗿
    onError: function(error){
      alert(error)
    }
  });
</script>