// Header
const navbar = document.getElementById("navbar");
if (navbar) {
	navbar.outerHTML = `
	<div id="navbar-placeholder">
		<nav id="navbar" class="pagoole-navbar navbar-expand-lg navbar-dark fixed-top">
		  <div style="visibility: hidden;" id="top"></div>	
		<div class="w100p df jic aic">
				<div class="col-lg-2">
					<div class="logo">
						<a href="index.html">
							<!--<img src="https://www.pagoole.com/assets/images/pagoole.png" alt="Pagoole Logo" />-->
							<span class="pagoole"></span>
						</a>
					</div>
				</div>
				<div class="col-lg-8">
					<div id="navbar-center">
						<div id="search-div" class="wrap">
							<div class="pagoole-search">
								<input id="searchBox" onkeyup="filterList()" title="Type what you lost or found!"
									type="text" class="pagoole-searchTerm" placeholder="What are you looking for?">

								<button id="btnSearch" onclick="filterList()" type="button" class="pagoole-searchButton"
									aria-label="Search">
									<!-- <i class="fa fa-search"></i> -->
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"
										height="24px">
										<path
											d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z" />
									</svg>
								</button>
							</div>
						</div>
					</div>
					<div id="searchSuggestions"></div>
				</div>
				<div class="col-lg-2 df aic jcfe gap10px">
					<!-- Application List Button -->
					<!-- Profile Button --> 
					<button id="btnAppsList" aria-label="Applications"
						class="btn ml12px back-color dropbtn border-radius-logo applist"
						onclick="showApps();">
						<div class="bento-menu">
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
							<div class="bento-dot"></div>
						</div>
					</button>
					<a id="myPfofile" href="javascript:void(0);"
						class="float-right profile-picture back-color border-radius-logo"
						onclick="showProfile();">
						<img src="https://www.pagoole.com/assets/images/pagoole.png" alt="Pagoole Logo" />							
					</a>
					
				</div>
			</div>
		</nav>

		<!-- Application List -->
		<div id="allApps" class="dropdown-content apps-margin scroll">
			<!-- <div id="apps-arrow"></div>-->
			<h4 style="text-align: center;">My Applications</h4>
				<hr />
			<div class="apps tooltip-cust">
				<a href="https://oracleapex.com/ords/r/shafiqadmin/discount-shop/login" class="discount-app">
					<img class="app-wise-logo center" alt="Pagoole Discount Shop"
						src="https://www.pagoole.com/assets/images/pagoole-discount-logo128x128.png">
					<div class="appname">Pagole Discount Shop</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/lams/login" class="lost-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/pagoole-lost-logo.png">
					<div class="appname">Pagoole Lost</div>
				</a>
				<a href="https://pagoole.com/dynamic-report-project.html" class="report-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/logo-pagoole-report-project.png">
					<div class="appname">Pagoole Dynamic Report Project</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/ituhin2/home" class="index-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/pagoole-index.jpg">
					<div class="appname">Index</div>
				</a>
			</div>
			<hr />
			<h6 style="text-align: center; color: #1900d5;">About Applications</h6>
			<div class="apps tooltip-cust">
			<a href="https://pagoole.com/pagoole-discount-shop.html" class="discount-app">
					<img class="app-wise-logo center" alt="Pagoole Discount Shop"
						src="https://www.pagoole.com/assets/images/pagoole-discount-logo128x128.png">
					<div class="appname">About Pagole Discount Shop</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/ituhin2/home" class="found-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/shafiq_cumilla.jpg">
					<div class="appname">LAMS : Lost And Found Asset Management System.</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/shafiq-test/home" class="test-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/profile-picture.jpg">
					<div class="appname">Test Application For Oracle Apex Testing.</div>
				</a>
			</div>
		</div>

		<div id="myProfile" class="dropdown-content apps-margin scroll" style="display:none;">
			<h4 style="text-align: center;">Accounts</h4>
			<div>
				<hr />
				<a href="https://www.pagoole.com/login.html" class="profile-app">
					<img class="app-wise-logo center" alt="Login"/>
			</div>
		</div>
	</div>
</div>
`;
}

const pagooleNavbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
	if (window.scrollY > 50) {
		pagooleNavbar.classList.add("shrink");
	} else {
		pagooleNavbar.classList.remove("shrink");
	}
});

// Close the dropdown if the user clicks outside of it
// Close dropdowns if user clicks outside
window.onclick = function (event) {
	var myProfile = document.getElementById("myProfile");
	var allApps = document.getElementById("allApps");
	var btnApps = document.getElementById("btnAppsList");
	var btnProfile = document.getElementById("myPfofile"); // your profile button

	// Close allApps dropdown if clicked outside
	if (!allApps.contains(event.target) && !btnApps.contains(event.target)) {
		if (allApps.style.display === "block") {
			allApps.style.display = "none";
		}
	}

	// Close myProfile dropdown if clicked outside
	if (!myProfile.contains(event.target) && !btnProfile.contains(event.target)) {
		if (myProfile.style.display === "block") {
			myProfile.style.display = "none";
		}
	}
};

// Toggle all apps dropdown
function showApps() {
	var x = document.getElementById("allApps");
	if (x.style.display === "none" || !x.style.display) {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

// Toggle profile dropdown
function showProfile() {
	var myProfile = document.getElementById("myProfile");
	if (myProfile.style.display === "none" || !myProfile.style.display) {
		myProfile.style.display = "block";
	} else {
		myProfile.style.display = "none";
	}
}
// Generate logo text if function exists

if (typeof generateLogoTextByClass === "function") {
	generateLogoTextByClass('pagoole', 'Pagoole');
}
if (typeof initSearchHistory === "function") {
	initSearchHistory();
}