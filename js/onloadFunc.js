
document.getElementById( 'register' ).onclick = function() {
	register();

}
document.getElementById( 'login' ).onclick = function() {
	dismissRegister();

}
document.getElementById( 'boy-image' ).onclick = function() {
	pickboy();

}
document.getElementById( 'girl-image' ).onclick = function() {
	pickgirl();

}
function pickboy(){
	document.getElementById('boy-image').style.opacity='1.0';
	document.getElementById('boy-image').value = "1";
	document.getElementById('girl-image').style.opacity='0.5';
	document.getElementById('girl-image').value = "0";
//	alert("document.getElementById('girl-image').value"+document.getElementById('girl-image').value);
}
function pickgirl(){
	document.getElementById('girl-image').style.opacity='1.0';
	document.getElementById('girl-image').value = "1";
	document.getElementById('boy-image').style.opacity='0.5';
	document.getElementById('boy-image').value = "0";
//	alert("document.getElementById('girl-image').value"+document.getElementById('girl-image').value);
}
function register(){
	
	$(".login-form").transition({
		  opacity: 0.03, scale: 0.8,
		  duration: 500,
		  easing: 'out',
		  complete: function() {
			 $(".register-form").css({ scale: 0.6 }); 
			 showRegister();	
			document.getElementById('login-form').style.visibility='hidden'; 
				  
		  }
		});

}

function showRegister(){
	document.getElementById('register-form').style.visibility='visible'; 
	$(".register-form").transition({
		  opacity: 1, scale: 1,
		  duration: 400,
		  easing: 'in',
		  complete: function() {		  
		  }
		});
}

function dismissRegister(){
	$(".register-form").transition({
		  opacity: 0.03, scale: 0.8,
		  duration: 500,
		  easing: 'out',
		  complete: function() {
			 $(".login-form").css({ scale: 0.6 }); 
			 showLogin();	
			document.getElementById('register-form').style.visibility='hidden'; 
				  
		  }
		});
}
function showLogin(){
	document.getElementById('login-form').style.visibility='visible'; 
	$(".login-form").transition({
		  opacity: 1.0, scale: 1,
		  duration: 400,
		  easing: 'in',
		  complete: function() {		  }
		});
}