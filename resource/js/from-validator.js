// Đối tượng 'Validator'
function Validator(options){
	// console.log(options.form);

	let selectorRules = {};

	// Hàm thực hiện validate
	function validate(inputElement, rule){
		let errorElement = inputElement.parentElement.querySelector(options.error);
		let errorMessage;

		// lấy ra các rules của selector
		let rules = selectorRules[rule.selector];
		let lengthRules = rules.length;
		// console.log(rules);
		// lặp qua từng rule và kiểm tra
		// nếu có lỗi dừng việc kiểm tra
		for(let i = 0; i < lengthRules; i++){
			errorMessage = rules[i](inputElement.value);
			if(errorMessage) break;
		}

		if(errorMessage){
			errorElement.innerText = errorMessage;
			inputElement.parentElement.classList.add('invalid');
		}else{
			errorElement.innerText = '';
			inputElement.parentElement.classList.remove('invalid');
		}

		return !errorMessage;
	}

	// Lấy element của form cần validate
	let formElement = document.querySelector(options.form);
	if(formElement){
		// khi submit form
		formElement.onsubmit = function(e){
			e.preventDefault();

			let isFormValid = true;
			// lặp qua từng rule và validate
			options.rules.forEach(function(rule){
				let inputElement = formElement.querySelector(rule.selector);
				let isValid = validate(inputElement, rule);
				if(!isValid){
					isFormValid = false;
				}
			});

			if(isFormValid){
				// console.log('Không có lỗi');
				//trường hợp submit với javascript
				if(typeof options.onSubmit === 'function'){
					let enableInputs = formElement.querySelectorAll('[name]:not([disabled])');
					// console.log(enableInputs);
					let formValues = Array.from(enableInputs).reduce(function(values, input){
						return (values[input.name] = input.value) && values;
					}, {});
					// console.log(formValues);

					options.onSubmit(formValues);
				} else{ //trường hợp submit với hành vi mặc định
					formElement.submit();
				}
			}
			// else{ // Mặc định để hiển thị validate
			// 	console.log('Có lỗi');
			// }
		}

		// lặp qua mỗi rule và xử lý (lắng nghe sự kiện blur, inut, ...)
		// console.log(formElement);
		// console.log(options.rules);
		options.rules.forEach(function(rule){
			// console.log(rule.selector);
			// Lưu lại các rules cho mỗi input
			if(Array.isArray(selectorRules[rule.selector])){
				selectorRules[rule.selector].push(rule.test);
				// console.log(rules);
			} else{
				selectorRules[rule.selector] = [rule.test];
			}

			let inputElement = formElement.querySelector(rule.selector);
			// console.log(inputElement);
			if(inputElement){
				// Xử lý khi trường hợp blur khỏi input
				inputElement.onblur = function(){
					// console.log('blur ' + rule.selector);
					// 1 lấy value: inputElement.value
					// 2 test func: rule.test
					validate(inputElement, rule);
				}

				//Xử lý mỗi khi người dùng nhập vào input
				inputElement.oninput = function(){
					let errorElement = inputElement.parentElement.querySelector(options.error);
					errorElement.innerText = '';
					inputElement.parentElement.classList.remove('invalid');
				}
			}
		});
		// console.log(selectorRules);
	}
}

// Định nghĩa rule
// Nguyên tắc chung của các rules:
// 1. Khi có lỗi => trả ra message lội
// 2. Khi hợp lệ => Không trả ra gì cả (undefined)
Validator.isRequired = function(selector, message){
	return {
		selector: selector,
		test: function(value){
			return value.trim() ? undefined : message || 'Vui lòng nhập trường này';
		}
	};
}

Validator.isEmail = function(selector, message){
	return {
		selector: selector,
		test: function(value){
			let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return regex.test(value) ? undefined : message || 'Email không hợp lệ';
		}
	};
}

Validator.minLength = function(selector, min, message){
	return {
		selector: selector,
		test: function(value){
			return value.length >= min ? undefined : message || `Vui lòng nhập tối thiểu ${min} ký tự`;
		}
	};
}

Validator.isComfimed = function(selector, getConfirmValue, message){
	return {
		selector: selector,
		test: function(value){
			return value === getConfirmValue() ? undefined : message || 'Giá trị nhập vào không chính xác!';
		}
	};
}