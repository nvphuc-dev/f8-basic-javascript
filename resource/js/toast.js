// Toast function
function toast({
	title = '',
	message = '',
	type = '',
	duration = 3000
}){
	const main = document.getElementById('toast');
	if(main){
		const icons = {
			success: 'fa-regular fa-circle-check',
			info: 'fa-solid fa-circle-info',
			warning: 'fa-solid fa-triangle-exclamation',
			error: 'fa-solid fa-triangle-exclamation',
		};
		const icon = icons[type];
		const delay = (duration / 1000).toFixed(2);

		const toast = document.createElement('div');
		toast.classList.add('toast', `toast--${type}`);
		toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`;
		toast.innerHTML = `
			<div class="toast__icon"><i class="${icon}"></i></div>
			<div class="toast__body">
				<h3 class="toast__title">${title}</h3>
				<p class="toast__msg">${message}</p>
			</div>
			<div class="toast__close"><i class="fa-solid fa-xmark"></i></div>
		`;
		main.appendChild(toast);
		// Auto remove toast
		const autoRemoveId = setTimeout(function(){
			main.removeChild(toast);
		}, duration + 1000);

		// Remove toast when click
		toast.onclick = function(e){
			if(e.target.closest('.toast__close')){
				main.removeChild(toast);
				clearTimeout(autoRemoveId);
			}
		}
	}
}