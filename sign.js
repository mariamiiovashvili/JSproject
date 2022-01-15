// let signupoverlay = document.getElementById('signup-overlay');
// let signupcontent = document.getElementById('signup-content');
// let signupclose = document.getElementById('signup-close');

// signUp.addEventListener('click', () => {

// 	signupoverlay.classList.add('signup-show');

// 	let divFormContainer = document.createElement('div');
// 		divFormContainer.classList.add('form-container');
	
// 	let form = document.createElement('form');
// 		form.setAttribute('action', '#');
// 		form.setAttribute('method', 'POST');
// 		form.setAttribute('id', 'signup_form');
		
// 	let emailLabel = document.createElement('label');
// 		emailLabel.setAttribute('for', 'useremail');
// 		emailLabel.textContent = "Email";
	
// 	let emailInput = document.createElement('input');
// 		emailInput.setAttribute('type', 'email');
// 		emailInput.setAttribute('name', 'useremail');
// 		emailInput.setAttribute('id', 'useremail');
// 		emailInput.setAttribute('placeholder', 'Enter Email');
	
// 	let passwordLable = document.createElement('label');
// 		passwordLable.setAttribute('for', 'password');
// 		passwordLable.textContent = "Password";
	
// 	let passwordInput = document.createElement('input');
// 		passwordInput.setAttribute('type', 'password');
// 		passwordInput.setAttribute('name', 'password');
// 		passwordInput.setAttribute('id', 'password');
// 		passwordInput.setAttribute('placeholder', 'Enter Password');

// 	let eyeSignUp = document.createElement('i');
// 		eyeSignUp.classList.add('far', 'fa-eye');
// 		eyeSignUp.setAttribute('id', 'eye-signUp');
	
// 	let eyeSlashSignUp = document.createElement('i');
// 		eyeSlashSignUp.classList.add('far', 'fa-eye-slash');
// 		eyeSlashSignUp.setAttribute('id', 'eye-slash-signUp');
// 		eyeSlashSignUp.style.display = 'none';
	
// 	let repeatPasswordLable = document.createElement('label');
// 		repeatPasswordLable.setAttribute('for', 'repeat-password');
// 		repeatPasswordLable.textContent = "Repeat Password";
	
// 	let repeatPasswordInput = document.createElement('input');
// 		repeatPasswordInput.setAttribute('type', 'password');
// 		repeatPasswordInput.setAttribute('name', 'repeat-password');
// 		repeatPasswordInput.setAttribute('id', 'repeat_password');
// 		repeatPasswordInput.setAttribute('placeholder', 'Repeat Password');

// 	let aTag = document.createElement('a');
// 		aTag.setAttribute('href', 'https://policies.google.com/terms?hl=en-US');
// 		aTag.setAttribute('target', '_blank');
// 		aTag.textContent = "Agree to Terms and Conditions";
	
// 	let ckeckboxLable = document.createElement('label');
// 		ckeckboxLable.setAttribute('for', 'checkbox');
	
// 	let checkboxInput = document.createElement('input');
// 		checkboxInput.setAttribute('type', 'checkbox');
// 		checkboxInput.setAttribute('name', 'checkbox');
// 		checkboxInput.setAttribute('id', 'checkbox');
// 		checkboxInput.setAttribute('checked', 'checked');

// 	let signupbutton = document.createElement('button');
// 		signupbutton.setAttribute('type', 'submit');
// 		signupbutton.setAttribute('id', 'signup-button');
// 		signupbutton.textContent = "Sign Up";

// 		let divEmailSignUp = document.createElement('div');
// 		divEmailSignUp.classList.add('divEmailSignUp-container');
		
// 			let errorEmailDiv = document.createElement('div');
// 				errorEmailDiv.classList.add('errorSignUpDiv');
// 				errorEmailDiv.setAttribute('id', 'err_signUpn_useremail');

// 		let divPswrdSignUP = document.createElement('div');
// 		divPswrdSignUP.classList.add('divPswrdSignUP-container');

// 			let errorPswrdDiv = document.createElement('div');
// 				errorPswrdDiv.classList.add('errorSignUpDiv');
// 				errorPswrdDiv.setAttribute('id', 'err_signUpn_password');

// 		let divRepeatPswrdSignUP = document.createElement('div');
// 		divRepeatPswrdSignUP.classList.add('divRepeatPswrdSignUP-container');
			
// 			let errorRepeatPswrdDiv = document.createElement('div');
// 				errorRepeatPswrdDiv.classList.add('errorSignUpDiv');
// 				errorRepeatPswrdDiv.setAttribute('id', 'err_signUpn_repeat-password');

// 		let divChekBoxSignUP = document.createElement('div');
// 		divChekBoxSignUP.classList.add('divChekBoxSignUP-container');

// 			let errorCheckDiv = document.createElement('div');
// 				errorCheckDiv.classList.add('errorSignUpDiv');
// 				errorCheckDiv.setAttribute('id', 'err_signUpn_checkbox');

// 		divEmailSignUp.appendChild(emailLabel);
// 		divEmailSignUp.appendChild(emailInput);
// 		divEmailSignUp.appendChild(errorEmailDiv);
// 		divFormContainer.appendChild(divEmailSignUp);
// 		divPswrdSignUP.appendChild(passwordLable);
// 		divPswrdSignUP.appendChild(passwordInput);
// 		divPswrdSignUP.appendChild(errorPswrdDiv);

// 		divPswrdSignUP.appendChild(eyeSignUp);
// 		divPswrdSignUP.appendChild(eyeSlashSignUp);

// 		divFormContainer.appendChild(divPswrdSignUP);
// 		divRepeatPswrdSignUP.appendChild(repeatPasswordLable);
// 		divRepeatPswrdSignUP.appendChild(repeatPasswordInput);
// 		divRepeatPswrdSignUP.appendChild(errorRepeatPswrdDiv);
// 		divFormContainer.appendChild(divRepeatPswrdSignUP);
// 		ckeckboxLable.appendChild(checkboxInput);
// 		ckeckboxLable.appendChild(aTag);
// 		divChekBoxSignUP.appendChild(ckeckboxLable);
// 		divChekBoxSignUP.appendChild(errorCheckDiv);
// 		divFormContainer.appendChild(divChekBoxSignUP);
// 		divFormContainer.appendChild(signupbutton);
// 		form.appendChild(divFormContainer);
// 		signupcontent.appendChild(form);


// 		let eyeshowSignUp = document.getElementById('eye-signUp');
// 		let eyehideSignUp = document.getElementById('eye-slash-signUp');
// 		let pswrdShowSignUp = document.getElementById('password');
// 		let repeatpswrdShowSignUp = document.getElementById('repeat_password');
	
// 		eyeshowSignUp.addEventListener('click', () => {
					
// 			if(pswrdShowSignUp.type === 'password'){
// 				eyeshowSignUp.style.display = 'none';
// 				eyehideSignUp.style.display = 'inline-block';
// 				pswrdShowSignUp.type = 'text';
// 				repeatpswrdShowSignUp.type = 'text';
// 			}
// 			eyehideSignUp.addEventListener('click', () =>{
				
// 				if(pswrdShowSignUp.type === 'text'){
// 					eyeshowSignUp.style.display = 'inline-block';
// 					eyehideSignUp.style.display = 'none';
// 					pswrdShowSignUp.type = 'password';
// 					repeatpswrdShowSignUp.type = 'password';
// 				}
// 			});        
// 		});



// 	signup_form.addEventListener('submit', signUp_item => {
// 		signUp_item.preventDefault();
// 		let error_signUp = {};
// 		let form_signUp = signUp_item.target;

// 		let useremail = form_signUp.querySelector('#useremail').value;
// 			if(!useremail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
// 				error_signUp.useremail = 'Invalid Email Adress!';
// 			}
// 			if(useremail == ''){
// 				error_signUp.useremail = 'Please Enter Your Email!';
// 			}

// 		let password = form_signUp.querySelector('#password').value;
// 		let repeat_password =  form_signUp.querySelector('#repeat_password').value;
// 			if(password.length < 6){
// 				error_signUp.password = 'Please Enter Minimum 6 Symbols!';
// 			}
// 			if(password & repeat_password == ''){
// 				error_signUp.password = 'Password Must Be Filled!';
// 			}
// 			if(password != repeat_password){
// 				error_signUp.password = 'Password Do not Match!';
// 			}

// 		let checkbox = form_signUp.querySelector('#checkbox').checked;
// 			if(!checkbox){
// 				error_signUp.checkbox = 'Please Agree Our Terms and Conditions!';
// 			}

// 		form_signUp.querySelectorAll('.errorSignUpDiv').forEach(item => {
// 			item.textContent = '';
// 		});	

// 		for (let element in error_signUp){
// 			let signUpErrDiv = document.getElementById('err_signUpn_' + element);
// 				if(signUpErrDiv){
// 					signUpErrDiv.textContent = error_signUp[element];
// 				}
// 		}

// 		if(Object.keys(error_signUp).length == 0){
// 			form_signUp.submit();
// 		}
// 	});

// 	signupclose.addEventListener('click', () => {
// 		signupcontent.innerHTML = '';
// 		signupoverlay.classList.remove('signup-show');
// 	});
// });

// let signinoverlay = document.getElementById('signin-overlay');
// let signincontent = document.getElementById('signin-content');
// let signinclose = document.getElementById('signin-close');

// signIn.addEventListener('click', () => {

// 	signinoverlay.classList.add('signin-show');
	
// 	let formSignIn = document.createElement('form');
// 		formSignIn.setAttribute('action', '#');
// 		formSignIn.setAttribute('method', 'POST');
// 		formSignIn.setAttribute('id', 'signin-form');

// 	let divFormContainerSignIn = document.createElement('div');
// 		divFormContainerSignIn.classList.add('form-container-signin');

// 	let emailLableSignIn = document.createElement('label');
// 		emailLableSignIn.setAttribute('for', 'useremail-signin');
// 		emailLableSignIn.textContent = "Email";
// 		emailLableSignIn.classList.add('email-lbl-signIn');
	
// 	let emailInputSignIn = document.createElement('input');
// 		emailInputSignIn.setAttribute('type', 'email');
// 		emailInputSignIn.setAttribute('name', 'useremail-signin');
// 		emailInputSignIn.setAttribute('id', 'useremail-signin');
// 		emailInputSignIn.setAttribute('placeholder', 'Enter Email'); 	
	
// 	let passwordLableSignIn = document.createElement('label');
// 		passwordLableSignIn.setAttribute('for', 'password-signin');
// 		passwordLableSignIn.textContent = "Password";
// 		passwordLableSignIn.classList.add('pswrd-lbl-signIn');
		
// 	let passwordInputSignIn = document.createElement('input');
// 		passwordInputSignIn.setAttribute('type', 'password');
// 		passwordInputSignIn.setAttribute('name', 'password-signin');
// 		passwordInputSignIn.setAttribute('id', 'password-signin');
// 		passwordInputSignIn.setAttribute('placeholder', 'Enter Password');

// 	let eyeSignIn = document.createElement('i');
// 		eyeSignIn.classList.add('far', 'fa-eye');
// 		eyeSignIn.setAttribute('id', 'eye');
// 		// eyeSignIn.setAttribute('onclick', 'showpswrd()');

// 	let eyeSlashSignIn = document.createElement('i');
// 		eyeSlashSignIn.classList.add('far', 'fa-eye-slash');
// 		eyeSlashSignIn.setAttribute('id', 'eye-slash');
// 		// eyeSlashSignIn.setAttribute('onclick', 'showpswrd()');
// 		eyeSlashSignIn.style.display = 'none';

// 	let ckeckboxLableSignIn = document.createElement('label');
// 		ckeckboxLableSignIn.setAttribute('for', 'checkbox');
// 		ckeckboxLableSignIn.textContent = "Remember Me";
// 		ckeckboxLableSignIn.classList.add('chckbx-lbl-signIn');

// 	let checkboxInputSignIn = document.createElement('input');
// 		checkboxInputSignIn.setAttribute('type', 'checkbox');
// 		checkboxInputSignIn.setAttribute('name', 'checkbox');
// 		checkboxInputSignIn.setAttribute('id', 'checkbox');
// 		checkboxInputSignIn.setAttribute('checked', 'checked');	

// 	let signinbutton = document.createElement('button');
// 		signinbutton.setAttribute('type', 'submit');
// 		signinbutton.setAttribute('id', 'signin-button');
// 		signinbutton.textContent = "Sign In";	

// 		let divEmailSignIn = document.createElement('div');
// 			divEmailSignIn.classList.add('divEmailSignIN-container');

// 			let errEmailDiv = document.createElement('div');
// 				errEmailDiv.classList.add('errDiv');
// 				errEmailDiv.setAttribute('id', 'err_signIn_email');
			
// 		let divPswrdSignIn = document.createElement('div');
// 			divPswrdSignIn.classList.add('divPswrdSignIn-container');

// 			let errPswrdDiv = document.createElement('div');
// 				errPswrdDiv.classList.add('errDiv');
// 				errPswrdDiv.setAttribute('id', 'err_signIn_password');

// 		let divChekBoxSignIn = document.createElement('div');
// 			divChekBoxSignIn.classList.add('divChekBoxSignIn-container');

// 	divEmailSignIn.appendChild(emailLableSignIn);
// 	divEmailSignIn.appendChild(emailInputSignIn);
// 	divEmailSignIn.appendChild(errEmailDiv);
// 	divFormContainerSignIn.appendChild(divEmailSignIn);
// 	divPswrdSignIn.appendChild(passwordLableSignIn);
// 	divPswrdSignIn.appendChild(passwordInputSignIn);
// 	divPswrdSignIn.appendChild(errPswrdDiv);
// 	divPswrdSignIn.appendChild(eyeSignIn);
// 	divPswrdSignIn.appendChild(eyeSlashSignIn);
// 	divFormContainerSignIn.appendChild(divPswrdSignIn);
// 	ckeckboxLableSignIn.appendChild(checkboxInputSignIn);
// 	divChekBoxSignIn.appendChild(ckeckboxLableSignIn);
// 	divFormContainerSignIn.appendChild(divChekBoxSignIn);
// 	divFormContainerSignIn.appendChild(signinbutton);
// 	formSignIn.appendChild(divFormContainerSignIn);
// 	signincontent.appendChild(formSignIn);

// 	let eyeshow = document.getElementById('eye');
// 	let eyehide = document.getElementById('eye-slash');
// 	let pswrdShowSignIn = document.getElementById('password-signin');

// 	eyeshow.addEventListener('click', () => {
		        
//         if(pswrdShowSignIn.type === 'password'){
// 			eyeshow.style.display = 'none';
// 			eyehide.style.display = 'inline-block';
// 			pswrdShowSignIn.type = 'text';
//         }
// 		eyehide.addEventListener('click', () =>{
			
// 			if(pswrdShowSignIn.type === 'text'){
// 				eyeshow.style.display = 'inline-block';
// 				eyehide.style.display = 'none';
// 				pswrdShowSignIn.type = 'password';
// 			}
// 		});        
// 	});

// 	formSignIn.addEventListener('submit', signIn_item => {
// 		signIn_item.preventDefault();

// 		let error_signInValidation = {};
// 		let form_SignIn = signIn_item.target;

// 		let email = form_SignIn.querySelector('#useremail-signin').value;
// 		 	if(!email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
// 				error_signInValidation.email = 'Invalid Email Adress!';
// 			 }
// 			if(email == ''){
// 				error_signInValidation.email = 'Please Enter Your Email!';
// 			}

// 		let password = form_SignIn.querySelector('#password-signin').value; 	 
// 			 if(password.length < 6){
// 				error_signInValidation.password = 'Please Enter Minimum 6 Symbols!';
// 			 }
// 			if(password == ''){
// 				error_signInValidation.password = 'Password Must Be Filled!';
// 			}

// 		form_SignIn.querySelectorAll('.errDiv').forEach(item => {
// 			item.textContent = '';
// 		});	 

// 		for (let erritem in error_signInValidation){

// 			let errordiv = document.getElementById('err_signIn_' + erritem);	
// 				if(errordiv){
// 					errordiv.textContent = error_signInValidation[erritem];
// 			}
// 		}

// 		// sign in cookies

// // 		let signIn_user_checkBox = document.getElementById('checkbox');

// // 		if(signIn_user_checkBox.checked){
// // 			let save_user = document.getElementById('useremail-signin').value;
// // 			let save_pswrd = document.getElementById('password-signin').value;
// // 			Cookies.set('user_bank', save_user);
// // 			Cookies.set('user_bank', save_user, {expires: 0.1});
// // 			Cookies.set('user_pswrd', save_pswrd);
// // 			Cookies.set('user_pswrd', save_pswrd, {expires: 0.1});
// // 		}else{
// // 			Cookies.remove('user_bank');
// // 			Cookies.remove('user_pswrd');
// // 		}

// // 			let savedUser = Cookies.get('user_bank');
// // 			let savedPswrd = Cookies.get('user_pswrd');
// // 			if(savedUser){
// // 				document.getElementById('useremail-signin').value = savedUser;
// // 			}
// // 			if (savedPswrd) {
// // 				document.getElementById('password-signin').value = savedPswrd;
// // 			}

// // 		if(Object.keys(error_signInValidation).length == 0){
// // 			form_SignIn.submit();
// // 		}
// // 	});

// // 	signinclose.addEventListener('click', () => {
// // 		signincontent.innerHTML = '';
// // 		signinoverlay.classList.remove('signin-show');
// // 	});
// // });

// //  send email validation

// // let send_email_form = document.getElementById('send_email_form');

// // send_email_form.addEventListener('submit', function(item){
// // 	item.preventDefault();

// // 	let error_sendEmail = {};
// // 	let sndemailtrgt = item.target;

// // 	let sendEmailDiv = document.createElement('div');
// // 	sendEmailDiv.classList.add('sendEmail');
// // 	sendEmailDiv.setAttribute('id', 'send_email');
// // 	send_email_form.appendChild(sendEmailDiv);

// // 	let sendEmail  = sndemailtrgt.querySelector('#email').value;
// // 		if(!sendEmail.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
// // 			error_sendEmail.sendEmail = 'Invalid Email Adress!';
// // 		}

// // 	for (let errevent in error_sendEmail){

// // 		let senderrordiv = document.getElementById('send_email');	
// // 			if(senderrordiv){
// // 				senderrordiv.textContent = error_sendEmail[errevent];
// // 		}
// // 	}	

// // 	if(Object.keys(error_sendEmail).length == 0){
// // 		sndemailtrgt.submit();
// // 	}	
// // });



let button = document.querySelector('.button');
let input = document.querySelector('.input');
let ulList = document.querySelector('.ul-list');
let form = document.querySelector('.form-wrp');

form.addEventListener('submit', function(event){
    event.preventDefault();
    let value = input.value;

    if(value != ''){
    let li = document.createElement('li');

    let btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');
    btnDelete.textContent = '🗙';
    btnDelete.addEventListener('click', function(){
        li.remove();
    })

    li.textContent = value;
    li.appendChild(btnDelete);
    ulList.appendChild(li);
    input.value = '';
    }
});


document.querySelector('.clear-list').addEventListener('click',function(){
    ulList.innerHTML = '';
})




let signup = document.querySelectorAll('.header-sign navBarActive');
let signupoverlay = document.getElementById('overlay');
let closeSignup = document.getElementById('close');

 signup.forEach( item => {
	 item.addEventListener('click', () => {
		overlay.classList.add('show');
});

closeSignup.addEventListener('click', () => {
	signupoverlay.classList.remove('show');
});
});
