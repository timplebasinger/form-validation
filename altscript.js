//Moved not used code from prior commits to this file

//Event listeners *****Basic Form Validation*****
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username)
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if(!isValidEmail(email.value)) {
    showError(email, 'Email is not valid')
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else {
    showSuccess(password)
  }

  if (password2.value === '') {
    showError(password2, 'Password 2 is required');
  } else {
    showSuccess(password2)
  }

});
