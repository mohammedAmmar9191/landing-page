/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// test

// alert('page working')

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navMenu = document.querySelector("#navbar__list");
const sections = document.querySelectorAll(".sec");
const sectionOne = sections[0].getBoundingClientRect().top;
const sectionTwo = sections[1].getBoundingClientRect().top;
const sectionThree = sections[2].getBoundingClientRect().top;
const sectionFour = sections[3].getBoundingClientRect().top;

navMenu.addEventListener("click", function (e) {
	if (e.target.nodeName === "A") {
		e.preventDefault();
		for (const section of sections) {
			if (e.target.getAttribute("href").substring(1) === section.id) {
				switch (section.id) {
					case "sectionOne":
						window.scrollTo({ top: sectionOne, behavior: "smooth" });
						break;
					case "sectionTwo":
						window.scrollTo({ top: sectionTwo, behavior: "smooth" });
						break;
					case "sectionThree":
						window.scrollTo({ top: sectionThree, behavior: "smooth" });
                        break;
                    case "sectionFour":
                        window.scrollTo({ top: sectionFour, behavior: "smooth" });
				}
			}
		}
	}
});



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
window.scrollTo({
    top: 100,
    behavior: "smooth"
  })

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


