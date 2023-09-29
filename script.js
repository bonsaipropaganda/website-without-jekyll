// This is a simple test function
function testFunction() {
    console.log("JavaScript file is working!");
  }
  
  // Or a simple statement
  console.log("JavaScript file is working!");
  

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

// set a link event listener
var ContactLink = document.getElementById("Contact-link");
ContactLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    scrollToSection("Contact"); // Call the scrollToSection function
});
