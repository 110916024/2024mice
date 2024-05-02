// Trigger animation when element is in view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const targetTags = entry.target.querySelector('h2');
  
      if (entry.isIntersecting) {
        targetTags.classList.add('fade_in_animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      targetTags.classList.remove('fade_in_animation');
    });
  });

  observer.observe(document.querySelector('#about'));
  observer.observe(document.querySelector('#product'));
  observer.observe(document.querySelector('#contact'));