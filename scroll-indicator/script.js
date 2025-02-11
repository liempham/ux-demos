// script.js
document.addEventListener('DOMContentLoaded', function() {
    const indicator = document.querySelector('.scroll-indicator');
    const content = document.querySelector('.content');
  
    function checkScroll() {
      // Calculate how much of the content is visible.
      const contentHeight = content.scrollHeight;
      const visibleHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
  
      //  Check if we're at the bottom.
      if (scrollPosition + visibleHeight >= contentHeight - 20) { // 20px tolerance
        indicator.classList.add('hidden'); // Hide the indicator
      } else {
        indicator.classList.remove('hidden'); // Show the indicator
      }
    }
  
    // Initial check (in case the page loads scrolled down).
    checkScroll();
  
    // Check on scroll.
    window.addEventListener('scroll', checkScroll);
  
     //Optional: Check if content is enough:
      function checkContentHeight() {
        if (content.scrollHeight <= window.innerHeight) {
          indicator.classList.add('hidden'); // Hide if content fits
        } else {
            indicator.classList.remove('hidden'); //Ensure is visible.
        }
      }
  
      checkContentHeight(); //Initial Check
      //Check if the content size change (e.g. if you add content with javascript)
      const resizeObserver = new ResizeObserver(entries => {
        checkContentHeight();
        checkScroll();//re-check if is needed show.
      });
     resizeObserver.observe(content);
  });