// Header
const header = document.getElementById("header");
if (header) {
	header.innerHTML = `
  <header id="pagoole-header">
		<nav id="mainNav" class="navbar-expand-lg navbar-dark fixed-top">
			<div class="w100p df jic aic">
				<div class="col-lg-2">
					<div class="logo">
						<a href="index.html">
							<img src="https://www.pagoole.com/assets/images/pagoole.png" alt="Pagoole Logo" />
							<span class="pagoole" data-bg="rgba(255, 255, 255, 0.3)"></span>
						</a>
					</div>
				</div>
				<div class="col-lg-8">
					<div id="navbar-center">
						<div id="search-div" class="wrap">
							<div class="search">
								<input id="searchBox" onkeyup="filterList()" title="Type what you lost or found!"
									type="text" class="searchTerm" placeholder="What are you looking for?">

								<button id="btnSearch" onclick="filterList()" type="button" class="searchButton"
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
				<div class="col-lg-2">
					<!--<button id="btnlogo" class="nav-link btn back-color float-right dropbtn border-radius-logo" onclick="showApps();"><i class="fas fa-bars"></i><span class="apps">...</span></button>-->
					<button id="btnAppsList" aria-label="Applications"
						class="nav-link btn back-color float-right dropbtn border-radius-logo applist"
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
				</div>
			</div>
		</nav>

		<!-- Application List -->
		<div id="allApps" class="dropdown-content apps-margin scroll">
			<!-- <div id="apps-arrow"></div>-->
			<div class="apps tooltip-cust">
				<a href="https://oracleapex.com/ords/r/shafiqadmin/discount-shop/login" class="discount-app">
					<img class="app-wise-logo center" alt="Pagoole Discount Shop"
						src="https://www.pagoole.com/assets/img/pagoole-discount-logo128x128.png">
					<div class="appname">Pagole Discount Shop</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/lams/login" class="lost-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/img/pagoole-lost-logo.png">
					<div class="appname">Pagoole Lost</div>
				</a>
				<a href="dynamic-report-project.html" class="report-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/logo-pagoole-report-project.png">
					<div class="appname">Pagoole Dynamic Report Project</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/ituhin2/home" class="index-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/img/pagoole-index.jpg">
					<div class="appname">Index</div>
				</a>
			</div>
			<hr />
			<h6 style="text-align: center; color: #1900d5;">Others Applications</h6>
			<div class="apps tooltip-cust">
				<a href="https://oracleapex.com/ords/r/shafiqadmin/ituhin2/home" class="found-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/images/shafiq_cumilla.jpg">
					<div class="appname">LAMS : Lost And Found Asset Management System.</div>
				</a>
				<a href="https://oracleapex.com/ords/r/shafiqadmin/shafiq-test/home" class="test-app">
					<img class="app-wise-logo center" src="https://www.pagoole.com/assets/img/profile-picture.jpg">
					<div class="appname">Test Application For Oracle Apex Testing.</div>
				</a>

			</div>
		</div>
	</header>
`;
}


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
	//console.log(event.target);
	/* if (!document.getElementById('allApps').contains(event.target) && !event.target.matches('.btn-apps-list') && !event.target.matches('.bento-menu') && !event.target.matches('.bento-dot')) {*/
	if (!document.getElementById('allApps').contains(event.target) && !document.getElementById('btnAppsList').contains(event.target)) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			//console.log(x);
			if (openDropdown.style.display === "block" && openDropdown.style.display) {
				openDropdown.style.display = "none";
			}
		}
	}
}


function showApps() {
	var x = document.getElementById("allApps");
	//document.getElementById("allApps").classList.toggle("show");                      	
	if (x.style.display === "none" || !x.style.display) {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
	return 0;
}

if (typeof generateLogoTextByClass === "function") {
	generateLogoTextByClass('pagoole', 'Pagoole');
}
if (typeof initSearchHistory === "function") {
	initSearchHistory();
}