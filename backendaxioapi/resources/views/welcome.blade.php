<!DOCTYPE html>
<html lang="en">

<head>
	<title>Frontend React || Backend Laravel API || 12 Jan 2023</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="icon" type="image/png" href="{{ asset('loginassets/images/icons/favicon.ico')}}" />

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/vendor/bootstrap/css/bootstrap.min.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/fonts/font-awesome-4.7.0/css/font-awesome.min.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/fonts/iconic/css/material-design-iconic-font.min.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/vendor/animate/animate.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/vendor/css-hamburgers/hamburgers.min.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/vendor/animsition/css/animsition.min.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/vendor/select2/select2.min.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/vendor/daterangepicker/daterangepicker.css') }}">

<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/css/util.css') }}">
<link rel="stylesheet" type="text/css" href="{{ asset('loginassets/css/main.css') }}">

	<meta name="robots" content="noindex, follow">
	<script
		nonce="cfd50b4b-e7ac-443b-a1be-fd42f2852b24">(function (w, d) { !function (eK, eL, eM, eN) { eK.zarazData = eK.zarazData || {}; eK.zarazData.executed = []; eK.zaraz = { deferred: [], listeners: [] }; eK.zaraz.q = []; eK.zaraz._f = function (eO) { return function () { var eP = Array.prototype.slice.call(arguments); eK.zaraz.q.push({ m: eO, a: eP }) } }; for (const eQ of ["track", "set", "debug"]) eK.zaraz[eQ] = eK.zaraz._f(eQ); eK.zaraz.init = () => { var eR = eL.getElementsByTagName(eN)[0], eS = eL.createElement(eN), eT = eL.getElementsByTagName("title")[0]; eT && (eK.zarazData.t = eL.getElementsByTagName("title")[0].text); eK.zarazData.x = Math.random(); eK.zarazData.w = eK.screen.width; eK.zarazData.h = eK.screen.height; eK.zarazData.j = eK.innerHeight; eK.zarazData.e = eK.innerWidth; eK.zarazData.l = eK.location.href; eK.zarazData.r = eL.referrer; eK.zarazData.k = eK.screen.colorDepth; eK.zarazData.n = eL.characterSet; eK.zarazData.o = (new Date).getTimezoneOffset(); if (eK.dataLayer) for (const eX of Object.entries(Object.entries(dataLayer).reduce(((eY, eZ) => ({ ...eY[1], ...eZ[1] }))))) zaraz.set(eX[0], eX[1], { scope: "page" }); eK.zarazData.q = []; for (; eK.zaraz.q.length;) { const e_ = eK.zaraz.q.shift(); eK.zarazData.q.push(e_) } eS.defer = !0; for (const fa of [localStorage, sessionStorage]) Object.keys(fa || {}).filter((fc => fc.startsWith("_zaraz_"))).forEach((fb => { try { eK.zarazData["z_" + fb.slice(7)] = JSON.parse(fa.getItem(fb)) } catch { eK.zarazData["z_" + fb.slice(7)] = fa.getItem(fb) } })); eS.referrerPolicy = "origin"; eS.src = "../../../cdn-cgi/zaraz/sd0d9.js?z=" + btoa(encodeURIComponent(JSON.stringify(eK.zarazData))); eR.parentNode.insertBefore(eS, eR) };["complete", "interactive"].includes(eL.readyState) ? zaraz.init() : eK.addEventListener("DOMContentLoaded", zaraz.init) }(w, d, 0, "script"); })(window, document);</script>
</head>

<body>
	<div class="limiter">
		<div class="container-login100" style="background-image: url({{asset('loginassets/images/bg-01.jpg') }});">
			<div class="wrap-login100">
				<form class="login100-form validate-form">
					<span class="login100-form-logo">
						<i class="zmdi zmdi-landscape"></i>
					</span>
					<span class="login100-form-title p-b-34 p-t-27">
                    React API || 12-01-2023
					</span>
					<div class="wrap-input100 validate-input" data-validate="Enter username">
						<input class="input100" type="text" name="username" placeholder="Username">
						<span class="focus-input100" data-placeholder="&#xf207;"></span>
					</div>
					<div class="wrap-input100 validate-input" data-validate="Enter password">
						<input class="input100" type="password" name="pass" placeholder="Password">
						<span class="focus-input100" data-placeholder="&#xf191;"></span>
					</div>
					<div class="contact100-form-checkbox">
						<input class="input-checkbox100" id="ckb1" type="checkbox" name="remember-me">
						<label class="label-checkbox100" for="ckb1">
							Remember me
						</label>
					</div>
					<div class="container-login100-form-btn">
						<button class="login100-form-btn">
							Login
						</button>
					</div>
					<div class="text-center p-t-90">
						<a class="txt1" href="#">
							Forgot Password?
						</a>
					</div>
				</form>
			</div>
		</div>
	</div>
	<div id="dropDownSelect1"></div>

    <script src="{{ asset('loginassets/vendor/jquery/jquery-3.2.1.min.js') }}"></script>

<script src="{{ asset('loginassets/vendor/animsition/js/animsition.min.js') }}"></script>

<script src="{{ asset('loginassets/vendor/bootstrap/js/popper.js') }}"></script>
<script src="{{ asset('loginassets/vendor/bootstrap/js/bootstrap.min.js') }}"></script>

<script src="{{ asset('loginassets/vendor/select2/select2.min.js') }}"></script>

<script src="{{ asset('loginassets/vendor/daterangepicker/moment.min.js') }}"></script>
<script src="{{ asset('loginassets/vendor/daterangepicker/daterangepicker.js') }}"></script>

<script src="{{ asset('loginassets/vendor/countdowntime/countdowntime.js') }}"></script>

<script src="{{ asset('loginassets/js/main.js')}}"></script>

	<script src="{{ asset('loginassets/js/main.js') }}"></script>

	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag() { dataLayer.push(arguments); }
		gtag('js', new Date());

		gtag('config', 'UA-23581568-13');
	</script>
	<script defer
		src="https://static.cloudflareinsights.com/beacon.min.js/vaafb692b2aea4879b33c060e79fe94621666317369993"
		integrity="sha512-0ahDYl866UMhKuYcW078ScMalXqtFJggm7TmlUtp0UlD4eQk0Ixfnm5ykXKvGJNFjLMoortdseTfsRT8oCfgGA=="
		data-cf-beacon='{"rayId":"787c3d8c6eaaba5c","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2022.11.3","si":100}'
		crossorigin="anonymous"></script>
</body>

</html>
