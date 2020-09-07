const copyarea = document.getElementById('copyemail');

copyarea.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const email = document.getElementById('email').innerText;
	textarea.value = email;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand('copy');
	textarea.remove();

	copiedMsg();
});

function copiedMsg() {
	const toshow = document.getElementById('copied');
	toshow.classList.remove('hidden');
	// setTimeout(() => {
	// 	toshow.classList.add('hidden');
	// }, 3000);
}
