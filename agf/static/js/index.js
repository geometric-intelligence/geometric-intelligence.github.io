// Copy BibTeX citation to clipboard
document.addEventListener('DOMContentLoaded', function() {
  // Add copy functionality to all copy buttons
  const copyButtons = document.querySelectorAll('.copy-button');

  copyButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const codeElement = document.getElementById(targetId);
      const textToCopy = codeElement.textContent;

      // Copy to clipboard
      navigator.clipboard.writeText(textToCopy).then(() => {
        // Visual feedback
        const originalText = this.innerHTML;
        this.innerHTML = '<span class="icon"><i class="fas fa-check"></i></span><span>Copied!</span>';
        this.classList.add('copied');

        // Reset after 2 seconds
        setTimeout(() => {
          this.innerHTML = originalText;
          this.classList.remove('copied');
        }, 2000);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy citation. Please copy manually.');
      });
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
