const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', 'palindrome');

function palindrome() {
  if (textInput.value === '') {
    alert('please input a value');
    result.innerHTML = '';
    return;
  }

  const processedStr = textInput.value.replace(/[\W_]/g, '').toLowerCase();
  let ispalindrome = true;

  for (let i = 0; i < Math.floor(processedStr.length / 2); i++) {
    if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
      ispalindrome = false;
      break;
    }
  }

  if (ispalindrome) {
    result.innerHTML = `${textInput.value }  is a palindrome`;
  } else {
    result.innerHTML = `${textInput.value}  is not a palindrome`;
  }
}
