let lowerCase = 'abcdefghijklmnopqrstuvqxyz';
let upperCase = lowerCase.toUpperCase();
let nums = '0123456789';
let specialChars = '!@#$%^&*()';
let chars = lowerCase.split('').concat(upperCase.split(''),
nums.split(''),
specialChars.split(''));

const generateEl = document.getElementById('generate');
generateEl.addEventListener('click', populatePasswords);

let pass1El = document.getElementById('pass-1');
let pass2El = document.getElementById('pass-2');
let pass3El = document.getElementById('pass-3');
let pass4El = document.getElementById('pass-4');
let passwordButtons = [pass1El, pass2El, pass3El, pass4El];

function generatePassword() {
	password = '';
	for (let i = 0; i < 10; i++) {
		password += chars[randomInt(0, chars.length - 1)];
	}
	return password;
}

// produces a random integer in range [m, n]
function randomInt(m, n) {
	return Math.floor(Math.random() * (n - m + 1)) + m;
}

function populatePasswords() {
	for (let el of passwordButtons) {
		el.textContent = generatePassword();
		el.addEventListener('click', copyText);
		el.title  = 'click to copy';
	}
}

function copyText(el) {
	navigator.clipboard.writeText(el.target.textContent);
}
