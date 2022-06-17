//########### Mobile Menu Toggle ##############

//Assign Menu Variables
let mobileHeaderOverlay = document.querySelector('.header__mobile-nav-overlay');
let mobileHeaderMenu = document.querySelector('.nav-menu-mobile-icon');
let mobileHeaderMenuClose = document.querySelector('.nav-menu-mobile-icon-close');
let mobileHeaderStatus = "hide";

//###TODO: Hide dropdown on scroll or bdody is clicked
let body = document.querySelector('body');

//Add click listeners to the menu button and the close button
mobileHeaderMenu.addEventListener('click', function() {
    showHideHeader(mobileHeaderStatus);
})
mobileHeaderMenuClose.addEventListener('click', function() {
    showHideHeader(mobileHeaderStatus);
})

//show and hide mobile menu
function showHideHeader(mobileHeaderStatusParams) {
    if (mobileHeaderStatusParams == "hide") {
        mobileHeaderOverlay.style.display = "flex";
        mobileHeaderStatus = "show";
    } else if (mobileHeaderStatusParams == "show") {
        mobileHeaderOverlay.style.display = "none";
        mobileHeaderStatus = "hide";
    }
}


//########### Desktop Dropdown Menu Section ##############

//Assign variables for desktop dropdown menus
let dropdownMenus = document.querySelectorAll('.nav__desktop .nav-link.dropdown');
let dropdownList = document.querySelectorAll('.nav__desktop .nav-link.dropdown>.navlist.dropdown-list');

function hideAllAndShowCurrent(currentNum) {
    dropdownList.forEach(
        function(currentDropdownList, i) {
            if (i != currentNum) {
                dropdownList[i].style.opacity = "0";
                dropdownList[i].style.display = "none";
            }
        }
    )
}

//Add click listeners to the menu button and the close button
dropdownMenus.forEach(function(currentDropdownMenu, i) {
    currentDropdownMenu.addEventListener('click', function(e) {
        e.preventDefault()
        hideAllAndShowCurrent(i);
        if (dropdownList[i].style.display == "none" || !(dropdownList[i].style.display)) {
            dropdownList[i].style.display = "block";
            dropdownList[i].style.opacity = "1";
        } else {
            dropdownList[i].style.display = "none";
            dropdownList[i].style.opacity = "0";
        }
        console.log('Desktop dropdown is toggled');
    })
})



//########### Mobile Dropdown Menu Section ##############

//Assign variables for mobile dropdown menus
let mDropdownMenus = document.querySelectorAll('.nav__mobile .nav-link.dropdown');
let mDropdownList = document.querySelectorAll('.header__mobile .nav-link.dropdown+.navlist.dropdown-list');

function hideAllAndShowCurrentMobile(currentNum) {
    mDropdownList.forEach(
        function(currentDropdownList, i) {
            if (i != currentNum) {
                mDropdownList[i].style.opacity = "0";
                mDropdownList[i].style.display = "none";
            }
        }
    )
}

//Add click listeners to the menu button and the close button
mDropdownMenus.forEach(function(currentDropdownMenu, i) {
    currentDropdownMenu.addEventListener('click', function(e) {
        e.preventDefault()
        hideAllAndShowCurrentMobile(i);
        if (mDropdownList[i].style.display == "none" || !(mDropdownList[i].style.display)) {
            mDropdownList[i].style.display = "block";
            mDropdownList[i].style.opacity = "1";
        } else {
            mDropdownList[i].style.display = "none";
            mDropdownList[i].style.opacity = "0";
        }
        // console.log('mobile dropdown is toggled');
    })
})