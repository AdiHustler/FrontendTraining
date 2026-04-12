const form = document.getElementById('signupForm')

form.addEventListener('submit', function (e) {
  e.preventDefault()

  let isValid = true

  const username = document.getElementById('username')
  const email = document.getElementById('email')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirmPassword')

  clearErrors()

  // Username validation
  if (username.value.length < 3 || username.value.length > 25) {
    setError(username, 'usernameError', 'Username must be 3 to 25 characters.')
    isValid = false
  } else {
    setSuccess(username)
  }

  // Simple email regex
  const emailRegex = /^\S+@\S+\.\S+$/

  if (!emailRegex.test(email.value)) {
    setError(email, 'emailError', 'Enter a valid email.')
    isValid = false
  } else {
    setSuccess(email)
  }

  // Simple password regex
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/

  if (!passwordRegex.test(password.value)) {
    setError(
      password,
      'passwordError',
      'Password must contain uppercase, lowercase, number and 8 characters.',
    )
    isValid = false
  } else {
    setSuccess(password)
  }

  // Confirm password
  if (confirmPassword.value !== password.value) {
    setError(confirmPassword, 'confirmPasswordError', 'Passwords do not match.')
    isValid = false
  } else {
    setSuccess(confirmPassword)
  }

  if (isValid) {
    alert('Sign up successful!')
    form.reset()
  }
})

function setError(input, errorId, message) {
  input.classList.add('error')
  input.classList.remove('success')
  document.getElementById(errorId).textContent = message
}

function setSuccess(input) {
  input.classList.remove('error')
  input.classList.add('success')
}

function clearErrors() {
  const errors = document.querySelectorAll('small')
  errors.forEach((error) => (error.textContent = ''))

  const inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.classList.remove('error')
    input.classList.remove('success')
  })
}
