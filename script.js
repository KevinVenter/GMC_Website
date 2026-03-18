const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    // Close all other dropdowns
    dropdowns.forEach(otherHeader => {
      const otherContent = otherHeader.nextElementSibling;
      const otherArrow = otherHeader.querySelector(".arrow");

      if (otherHeader !== header) {
        otherContent.style.maxHeight = null;
        otherContent.classList.remove("show"); // remove show class
        otherArrow.classList.remove("rotate");
      }
    });

    // Toggle the clicked one
    if (content.style.maxHeight) {
      content.style.maxHeight = null; // collapse
      content.classList.remove("show"); // hide text
      arrow.classList.remove("rotate");
    } else {
      content.style.maxHeight = content.scrollHeight + "px"; // expand smoothly
      content.classList.add("show"); // reveal text
      arrow.classList.add("rotate");
    }
  });
});
