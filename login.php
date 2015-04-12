<!--
Author: W3layouts
Author URL: http://w3layouts.com
License: Creative Commons Attribution 3.0 Unported
License URL: http://creativecommons.org/licenses/by/3.0/
-->
<!DOCTYPE html>
<html>	
<head>
<title>Bs_Signup Form with Flat Responsive widget Design :: w3layouts</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="keywords" content="Bootstrap Responsive Templates, Iphone Compatible Templates, Smartphone Compatible Templates, Ipad Compatible Templates, Flat Responsive Templates"/>
<link href="css/login-style.css" rel='stylesheet' type='text/css' />
<link href="css/register-style.css" rel='stylesheet' type='text/css' />
<!--webfonts-->
<link href='http://fonts.googleapis.com/css?family=Ubuntu+Condensed' rel='stylesheet' type='text/css'>
<!--//webfonts-->

</head>

<body>

 <!--SIGN UP-->
		<div id="login-form" class="login-form">
					<div class="head-info">
						<h1><span>AskGirls</span> - Sign In</h1>
					</div>
						
				<ul class="form">
					<li>
					<input type="text" class="email" placeholder="User name" required=""/><a href="#" class=" icon user"></a>
					</li>
					<li>
						<input type="password" class="password" placeholder="password" required=""/><a href="#" class=" icon lock"></a>
					</li>
					<div class="p-container">
								
								<a href="#" id="login_button" class="hvr-bounce-to-bottom">LOGIN</a>
							<div class="clear"> </div>
					</div>
				</ul>
				<div class="social-icons">
							<div class="but-bottom">
					<div class="p-container">
								<label class="checkbox"><input type="checkbox" name="checkbox" checked><i></i>Remember Me</label>
					</div>
							<a href="#" class="trouble" onclick="forgetPw();"><p>Forgot Password ?</p></a><div class="clear"> </div></div>
							<div class="clear"> </div>
				</div>
				<div class="sign-up">
					<a href="#" class="sign-left">Want new account ?</a>
					<a id="register" class="signup play-icon popup-with-zoom-anim" href="#small-dialog2">Sign Up</a>
					<!-- pop-up-box -->
				<script type="text/javascript" src="js/modernizr.custom.min.js"></script>    
				<link href="css/popuo-box.css" rel="stylesheet" type="text/css" media="all" />
				<script src="js/jquery.magnific-popup.js" type="text/javascript"></script>
			<!--//pop-up-box -->
<div id="small-dialog2" class="mfp-hide">
				<div class="signup">
					<h3>Signup</h3>
					<h4><a href="#">let's get started</a></h4> 
					<input type="text" class="email" placeholder="User name" required=""/>
					<input type="text" class="email" placeholder="Email adress" required=""/>
					<input type="password" placeholder="Password" required=""/>
					<input type="submit"  value="Signup"/>
				</div>
			</div>	
			<script>
						$(document).ready(function() {
						$('.popup-with-zoom-anim').magnificPopup({
							type: 'inline',
							fixedContentPos: false,
							fixedBgPos: true,
							overflowY: 'auto',
							closeBtnInside: true,
							preloader: false,
							midClick: true,
							removalDelay: 100,
							mainClass: 'my-mfp-zoom-in'
						});
																						
						});
				</script>
		</div>

					<div class="clear"> </div>
				</div>
				
				
		<div id="register-form" class="register-form" >
					<div class="register-head-info">
						<h1><span>AskGirls</span> - Register</h1>
					</div>
			<div class="register-left">
				<ul class="form">
					<li>
						<input type="text" class="email" placeholder="Account Name" required=""/><a href="#" class=" icon user"></a>
					</li>
					<li>
						<input type="text" class="email" placeholder="Email Address" required=""/><a href="#" class=" icon lock"></a>
					</li>
					<li>
						<a href="#" class="boy-image" id="boy-image" value="0"><img src="images/boy.png" /></a>
						<a href="#" class="girl-image" id="girl-image" value="0"><img  src="images/girl.png" /></a>
					</li>
				</ul>
			</div>
			<div class="register-right">
				<ul class="form">
					<li>
					<input type="password" class="password" placeholder="Password" required=""/><a href="#" class="icon lock"></a>
					</li>
					<li>
						<input type="password" class="password" placeholder="Confirm Password" required=""/><a href="#" class=" icon lock"></a>
					</li>
					
					
					<div class="p-container">
								
								<a href="#" id="register_button" class="hvr-bounce-to-bottom">Register</a>
							<div class="clear"> </div>
					</div>
				</ul>
				<div class="social-icons">
							<div class="but-bottom">
					</div>
							<div class="clear"> </div>
				</div>
				<div class="back-login">
					<a href="#" class="sign-left">Already have an account ?</a>
					<a id="login" class="signup" href="#">Login</a>
					<!-- pop-up-box -->
				</div>

					<div class="clear"> </div>
				</div>
		</div>


<script src="js/jquery.min.js"></script>
<script src="js/jquery.transit.min.js"></script>
<script src="js/onloadFunc.js"></script>
</body>
</html>