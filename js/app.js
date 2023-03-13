/**

 * Manipulating the DOM.

*/

const navMenu = document.querySelector("#navbar__list");
const sections = document.querySelectorAll(".sec");
const sectionOne = sections[0].getBoundingClientRect().top;
const sectionTwo = sections[1].getBoundingClientRect().top;
const sectionThree = sections[2].getBoundingClientRect().top;
const sectionFour = sections[3].getBoundingClientRect().top;

// navMenu.addEventListener("click", function (e) {
//     console.log('clicked')
//     if (e.target.nodeName === "A") {
//         e.preventDefault();
// 		for (const section of sections) {
// 			if (e.target.getAttribute("href").substring(1) === section.id) {
// 				switch (section.id) {
// 					case "sectionOne":
// 						window.scrollTo({ top: sectionOne, behavior: "smooth" });
// 						break;
// 					case "sectionTwo":
// 						window.scrollTo({ top: sectionTwo, behavior: "smooth" });
// 						break;
// 					case "sectionThree":
// 						window.scrollTo({ top: sectionThree, behavior: "smooth" });
//                         break;
//                     case "sectionFour":
//                         window.scrollTo({ top: sectionFour, behavior: "smooth" });
// 				}
// 			}
// 		}
// 	}
// });


function isInViewport (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// nav
function buildNavigation(){
    for (let i=0; i < sections.length; i++){
        const newMenuItem = document.createElement('li');
        const sectionName = sections[i].getAttribute('data-nav')
        const sectionId = sections[i].getAttribute('id')
        newMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName)
        fragment.appendChild(newMenuItem);
    }
    navBarList.appendChild(fragment);
}

// Add active class in view port
function giveActive() {
    for (let i = 0; i < sections.length; i++) {
      if (isInViewport(sections[i])) {
        sections[i].classList.add("active"); 
      } else {
        sections[i].classList.remove("active");
      }
    }
  }

// Smooth Scrolling
function ScrollInto(event) {
    console.log('a new clcik')
    if (event.target.nodeName === "A") {
      const sectionId = event.target.getAttribute("data-id");
      const section = document.getElementById(sectionId);
  
      // adding the active class to element when clicked
      const activeLink = document.querySelector(".active");
      if (activeLink) {
        activeLink.classList.remove("active");
      }
      event.target.classList.add("active");
    }
  }
  

  document.addEventListener('scroll', function(){
    giveActive();
});

const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    ScrollInto(event);
})

// menu 
function buildNavigation() {
    for (let i = 0; i < sections.length; i++) {
      const newMenuItem = document.createElement("li");
      const sectionName = sections[i].getAttribute("data-nav");
      const sectionId = sections[i].getAttribute("id");
      newMenuItem.innerHTML = createNavItemHTML(sectionId, sectionName);
      fragment.appendChild(newMenuItem);
  
      // add active class to first section and clicked menu item
      if (i === 0) {
        sections[i].classList.add("your-active-class");
        newMenuItem.querySelector("a").classList.add("active");
      }
    }
    navBarList.appendChild(fragment);
  }
  
