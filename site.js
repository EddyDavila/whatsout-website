// Keep ordinary anchors and native details usable without JavaScript.
document.querySelectorAll('nav a[href^="#"]').forEach(link=>link.addEventListener('click',()=>{document.querySelectorAll('nav a').forEach(a=>a.removeAttribute('aria-current'));link.setAttribute('aria-current','location');}));
