window.addEventListener("scroll",ScrollNavbar);

function ScrollNavbar(){
	const NavBar=document.querySelector("#NavBar");
	const windowScroll=window.pageYOffset;
	if(windowScroll>1){
		NavBar.setAttribute("style","box-shadow: 0px -2px 8px black;");
	}else{
		NavBar.setAttribute("style","box-shadow:none;");
	}
	
	if(windowScroll>300){
		NavBar.setAttribute("style","box-shadow:none;");
	}
	if(window.width>1300){
		NavBar.setAttribute("style","box-shadow:none;");
	}
}


window.addEventListener("scroll",ScrollNavbarThreeDotNavBar);

function ScrollNavbarThreeDotNavBar(){
	const NavBarMenuId=document.querySelector("#UlListDropdownMainMenue");
	const windowScroll=window.pageYOffset;
	if(windowScroll>280){
		NavBarMenuId.setAttribute("style","top:55;");
	}
	if(windowScroll>281){
		NavBarMenuId.setAttribute("style","top:54;");
	}
	if(windowScroll>282){
		NavBarMenuId.setAttribute("style","top:53;");
	}
	if(windowScroll>283){
		NavBarMenuId.setAttribute("style","top:52;");
	}
	if(windowScroll>284){
		NavBarMenuId.setAttribute("style","top:53;");
	}
	if(windowScroll>285){
		NavBarMenuId.setAttribute("style","top:48;");
	}
	if(windowScroll>286){
		NavBarMenuId.setAttribute("style","top:46;");
	}
	if(windowScroll>287){
		NavBarMenuId.setAttribute("style","top:44;");
	}
	if(windowScroll>288){
		NavBarMenuId.setAttribute("style","top:42;");
	}
	if(windowScroll>289){
		NavBarMenuId.setAttribute("style","top:40;");
	}
	if(windowScroll>290){
		NavBarMenuId.setAttribute("style","top:38;");
	}
	if(windowScroll>291){
		NavBarMenuId.setAttribute("style","top:36;");
	}
	if(windowScroll>282){
		NavBarMenuId.setAttribute("style","top:34;");
	}
	if(windowScroll>283){
		NavBarMenuId.setAttribute("style","top:32;");
	}
	if(windowScroll>284){
		NavBarMenuId.setAttribute("style","top:30;");
	}
	else{
		NavBarMenuId.setAttribute("style","top:60;");
	}
	

}



window.addEventListener("scroll",ScrollNavbarSide);

function ScrollNavbarSide(){
	const SideNavBar=document.querySelector("#HomeSection2LeftMenuBar");
	const SideNavBarMainDiv=document.querySelector("#PositionStickyRightSideNavbar");
	const Section3=document.querySelector("#HomeSection3");
	const windowScroll=window.pageYOffset;
	const InnerWidth=window.innerWidth;
	if(windowScroll>380){
		SideNavBar.setAttribute("style","position:fixed;top:0;height:100%;");
		Section3.setAttribute("style","margin-left:0;");
		
	if(InnerWidth<1300){
			SideNavBar.setAttribute("style","position:absolute;top:0;");
			SideNavBarMainDiv.setAttribute("style","height:679px;");
		}
	}else{
		SideNavBar.setAttribute("style","Position:none");
		Section3.setAttribute("style","margin-left:0%");
	}
	if(windowScroll>3428){
		SideNavBar.setAttribute("style","position:absolute;top:3428px;");
		Section3.setAttribute("style","margin-left:0;");
	}

}


window.addEventListener("scroll",ScrollNavbarRightSide);

function ScrollNavbarRightSide(){
	const RightSideNavBar=document.querySelector("#HomeSection2RightNavBar");
	const windowScroll21=window.pageYOffset;
	const InnrWidthRightSide=window.innerWidth;
	if(windowScroll21>380){
		RightSideNavBar.setAttribute("style","position: fixed;top:0;height:100%;margin-left: 9px;");
	}else{
		RightSideNavBar.setAttribute("style","Position:none");
	}
	if(windowScroll21>2985){
		RightSideNavBar.setAttribute("style","position:absolute;top:2985;height: 1105px;");
		
	}
	if(InnrWidthRightSide<1300 && windowScroll21>2530){
		RightSideNavBar.setAttribute("style","position:absolute;top:2530;height: 1105px;");
		}

}



window.addEventListener("scroll",ScrollNavbarSideMenu2);

function ScrollNavbarSideMenu2(){
	const SideNavBar2=document.querySelector("#AskQsthnAndMenuBar");
	const HomeSection4=document.querySelector("#HomeSection4");
	const windowScroll2=window.pageYOffset;
	const InnrWidth=window.innerWidth;
	if(windowScroll2>380){
		SideNavBar2.setAttribute("style","position: fixed;top:0;");
		HomeSection4.setAttribute("style","margin-top:125px;");
		if(InnrWidth<1005){
			HomeSection4.setAttribute("style","margin-top:90px;");
		}
		if(InnrWidth<616){
			HomeSection4.setAttribute("style","margin-top:125px;");
		}
		if(InnrWidth<500){
			HomeSection4.setAttribute("style","margin-top:80px;");
		}
	}else{
		SideNavBar2.setAttribute("style","Position:none");
		HomeSection4.setAttribute("style","margin-top:0px;");
	}
	if(windowScroll2>3000){
		SideNavBar2.setAttribute("style","position:absolute;top:3000px;");
	}
	if(windowScroll2>900 && InnerWidth<1005){
		SideNavBar2.setAttribute("style","position: fixed;top:0;");
	}
}


window.addEventListener("scroll",ScrollUpButtonPage);

function ScrollUpButtonPage(){
	const UpButton=document.querySelector("i#UpPageIcon");
	const windowScroll2=window.pageYOffset;
	if(windowScroll2>500){
		UpButton.setAttribute("style","display:block;");
	}else{
		UpButton.setAttribute("style","display:none;");
	}
	
	
}

// ---------------Left Side Navbar Cross Display Block-----------

document.querySelector("#LeftNavbarCrossIcon").addEventListener("click",CrossClick);

function CrossClick(){
	document.querySelector("#PositionStickyRightSideNavbar").setAttribute("Style","left:-240;transition:0.5s;");
}

document.querySelector("#LeftNavbarCrossIcon2").addEventListener("click",CrossClick2);

function CrossClick2(){
	document.querySelector("#PositionStickyRightSideNavbar").setAttribute("Style","left:-240;transition:0.5s;");
}

document.querySelector("#NavbarMenuIconBar").addEventListener("click",NavClick);

function NavClick(){
	document.querySelector("#PositionStickyRightSideNavbar").setAttribute("Style","left:0;transition:0.5s;");
}


