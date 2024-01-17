// TO LIMIT USER INPUT TO 3 DIGITS
function limitInput(element) {
if (element.value.length > 3) {
  element.value = element.value.slice(0, 3);
}
}

function limitInput(element) {
  // Parse the input value as a number
  let value = parseInt(element.value, 10);

  // Set the value to 100 if it's greater than 100
  if (!isNaN(value) && value > 100) {
    element.value = 100;
  }
}

// CODE FOR ACTIVE LINK ON PAGE SCROLL (NAVBAR)
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = Array.from(sections).indexOf(entry.target);
        if (entry.isIntersecting) {
          navLinks.forEach((link, i) => {
            link.classList.toggle("active", index === i);
          });
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold as needed
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// HREF SCROLL OFFSET
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  const headerHeight = document.querySelector('header').offsetHeight;
  const additionalOffset = 20; // Adjust this value as needed

  if (section) {
    const offsetTop = section.offsetTop - headerHeight - additionalOffset;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
  }
}

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const offsetTop = targetSection.offsetTop - headerHeight;
      
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// DROPDOWN MENU WEBSITE REDIRECTION
function redirectToWebsite() {
  // Get the selected option
  var selectedOption = document.getElementById('letter-selector').value;

  // Redirect based on the selected option
  switch (selectedOption) {
    case 'a':
      window.location.href = 'index.html';
      break;
    case 'b':
      window.location.href = 'https://example.com/b';
      break;
    case 'c':
      window.location.href = 'https://example.com/c';
      break;
    case 'd':
      window.location.href = 'https://example.com/d';
      break;
    case 'e':
      window.location.href = 'https://example.com/e';
      break;
    case 'f':
      window.location.href = 'https://example.com/f';
      break;
    default:
      // Default action if needed
      break;
  }
}

// SELECTED SECTION VISIBLE
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-item");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSectionId = this.getAttribute("data-section");
      const targetSection = document.getElementById(targetSectionId);

      // Hide all sections
      document.querySelectorAll(".mainSections").forEach(function (section) {
        section.classList.remove("active");
      });

      // Show the target section
      targetSection.classList.add("active");

      // Reset other sections' animation
      targetSection.style.animation = 'none';
      targetSection.offsetHeight; /* trigger reflow */
      targetSection.style.animation = null;
    });
  });
});


// PRINT
document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab-item');
  const sections = document.querySelectorAll('.mainSections');

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', function () {
      // Remove active class from all tabs and sections
      tabs.forEach((t) => t.classList.remove('active'));
      sections.forEach((s) => s.classList.remove('activeSection'));

      // Add active class to the clicked tab and corresponding section
      this.classList.add('active');
      sections[index].classList.add('activeSection');
    });
  });
});

// PRINT BUTTON ; PRINT FUNCTION
document.getElementById('print-button').addEventListener('click', function() {
  window.print();
});