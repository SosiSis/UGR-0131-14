document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
  
    if (email === '' || subject === '' || message === '') {
      // Display error message if any field is empty
      alert('Please fill in all fields');
    } else {
      // All fields are filled, display success message
      alert('Submitted');
      // You can also proceed with form submission using:
      // e.target.submit();
    }
  });
  
  var textarea = document.getElementById('message');
  textarea.style.width = "100%";
  textarea.style.height = "200px";
