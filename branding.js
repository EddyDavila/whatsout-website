// Public identity only. Existing app, account, backend and URL identifiers remain intact.
(() => {
 function render(){
 const n=document.querySelector('.brand-transition');
 if(n){n.lang='en';n.querySelector('strong').textContent='OutCalled · Going Out Is Our Religion';n.querySelector('span').textContent='New public identity. The app may still display an earlier name during the branding transition. Existing sign-in and referral destinations are unchanged.';}
 const r=document.querySelector('.release');if(r)r.textContent='OUTCALLED · BY BITTER SOFTWORKS';

 }
 render();document.querySelector('#language')?.addEventListener('change',render);window.addEventListener('languagechange',render);
})();
