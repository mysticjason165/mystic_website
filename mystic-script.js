// mystic-script.js
// Theme toggle + small UI helpers for Mystic site

(function(){
  /* ---------- UTILS ---------- */
  const $ = (sel, ctx=document)=> ctx.querySelector(sel);
  const $$ = (sel, ctx=document)=> Array.from(ctx.querySelectorAll(sel));

  /* ---------- CREATE THEME BUTTON IF MISSING ---------- */
  function ensureThemeButton(){
    let btn = document.getElementById('theme-toggle');
    if(!btn){
      // try to append to header nav or header
      const header = document.querySelector('.main-header') || document.querySelector('.header') || document.querySelector('header');
      if(!header) return;
      btn = document.createElement('button');
      btn.id = 'theme-toggle';
      btn.className = 'theme-btn';
      btn.textContent = 'Light Mode';
      header.appendChild(btn);
    }
    return btn;
  }

  const themeBtn = ensureThemeButton();

  /* ---------- LOAD SAVED THEME ---------- */
  function loadTheme(){
    try{
      const saved = localStorage.getItem('mystic_theme');
      if(saved === 'light'){
        document.body.classList.add('light-mode');
        if(themeBtn) themeBtn.textContent = 'Dark Mode';
      } else {
        document.body.classList.remove('light-mode');
        if(themeBtn) themeBtn.textContent = 'Light Mode';
      }
    } catch(e){
      console.warn('Unable to access localStorage for theme.');
    }
  }

  loadTheme();

  /* ---------- TOGGLE THEME ---------- */
  if(themeBtn){
    themeBtn.addEventListener('click', ()=>{
      const isLight = document.body.classList.toggle('light-mode');
      try{
        localStorage.setItem('mystic_theme', isLight ? 'light' : 'dark');
      }catch(e){}
      themeBtn.textContent = isLight ? 'Dark Mode' : 'Light Mode';
      // small pulse animation
      themeBtn.animate([{transform:'scale(1)'},{transform:'scale(1.04)'},{transform:'scale(1)'}], {duration:220});
    });
  }

  /* ---------- SMOOTH SCROLL FOR HASH LINKS ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const target = document.querySelector(a.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  /* ---------- HOVER GLOW EFFECTS ---------- */
  const glowTargets = document.querySelectorAll('.feature-card, .blog-card, .btn, .back-btn');
  glowTargets.forEach(el=>{
    el.addEventListener('mouseenter', ()=> el.style.boxShadow = '0 18px 48px rgba(255,123,0,0.18)');
    el.addEventListener('mouseleave', ()=> el.style.boxShadow = '');
  });

  /* ---------- Safe logging ---------- */
  console.log('%c Mystic site scripts loaded ✅', 'color: #ff7b00; font-weight:700');

})();
