/* ============================================================
   HOPSE Project Page — JavaScript
   Scroll animations · Abstract toggle · BibTeX copy
   Result tabs · Speed-bar animation
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ----------------------------------------------------------
     1. Scroll-triggered reveal animations (IntersectionObserver)
     ---------------------------------------------------------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-children');

  if ('IntersectionObserver' in window) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObs.observe(el));
  } else {
    // Fallback: just show everything
    revealEls.forEach(el => el.classList.add('visible'));
  }

  /* ----------------------------------------------------------
     2. Speed-bar animation on scroll
     ---------------------------------------------------------- */
  const speedBars = document.querySelectorAll('.speed-bar');
  if (speedBars.length && 'IntersectionObserver' in window) {
    const barObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll('.speed-bar');
          bars.forEach(bar => {
            const w = bar.getAttribute('data-width');
            if (w) bar.style.width = w;
          });
          barObs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    const chartEl = document.querySelector('.speed-chart');
    if (chartEl) barObs.observe(chartEl);
  }

  /* ----------------------------------------------------------
     3. Abstract toggle
     ---------------------------------------------------------- */
  const toggleBtn = document.querySelector('.abstract-toggle');
  const abstractText = document.querySelector('.abstract-text');

  if (toggleBtn && abstractText) {
    // Start open
    abstractText.classList.add('open');
    toggleBtn.classList.add('active');

    toggleBtn.addEventListener('click', () => {
      toggleBtn.classList.toggle('active');
      abstractText.classList.toggle('open');
    });
  }

  /* ----------------------------------------------------------
     4. BibTeX copy-to-clipboard
     ---------------------------------------------------------- */
  const copyBtn = document.querySelector('.copy-btn');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      const code = document.querySelector('.bibtex-code');
      if (!code) return;

      navigator.clipboard.writeText(code.textContent).then(() => {
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      }).catch(() => {
        // Fallback
        const range = document.createRange();
        range.selectNodeContents(code);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
        document.execCommand('copy');
        sel.removeAllRanges();
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      });
    });
  }

  /* ----------------------------------------------------------
     5. Results tabs
     ---------------------------------------------------------- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const panels  = document.querySelectorAll('.results-panel');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');

      tabBtns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });

  /* ----------------------------------------------------------
     6. Smooth scrolling for anchor links
     ---------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const id = anchor.getAttribute('href');
      const target = document.querySelector(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
