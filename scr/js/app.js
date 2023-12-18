
var s2 = document.getElementById('s2');
s2.style.backgroundColor = '#F2F2F2';
 var profileImg = document.querySelector('.hero-section');
profileImg.style.height = '511px';
var profileImg = document.querySelector('.hero-section__profile--img');
profileImg.style.border = 'none';
profileImg.style.backgroundColor = '#F2F2F2';
profileImg.style.height = '511px';




document.getElementById('myForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;

  if (name === '' || email === '' || subject === '' || message === '') {
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


        