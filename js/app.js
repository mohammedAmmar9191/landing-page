/**
 * 
 * Manipulating the DOM.
 * 
*/

let hasActiveClass = false;

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




// Scroll to anchor ID using scrollTO event
window.scrollTo({
    top: 100,
    behavior: "smooth"
  });



function giveActive(){
    hasActiveClass = !hasActiveClass;
};


