const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');
checkBtn.addEventListener('click', () => {
  const lowerReplaced = textInput.value.toLowerCase().replace(/[^A-Za-z0-9]/g, '');
  if (textInput.value === '') {
    alert('please input a value');
  } else if (textInput.value.length === 1) {
    result.innerHTML = `${textInput.value} is a palindrome`;
    textInput.value = '';
  } else if (lowerReplaced === [...lowerReplaced].reverse().join('')) {
    result.innerHTML = `${textInput.value} is a palindrome`;
    textInput.value = '';
  } else {
    result.innerHTML = `${textInput.value} is not a palindrome`;
    textInput.value = '';
  }
});
