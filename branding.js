// Public identity only. Existing app, account, backend and URL identifiers remain intact.
(() => {
 function render(){
 const n=document.querySelector('.brand-transition');
 if(n){n.lang='en';n.querySelector('strong').textContent='OutCalled · Going Out Is Our Religion';n.querySelector('span').textContent='OutCalled is out now on Android. Find your next outing.';}
 const r=document.querySelector('.release');if(r)r.textContent='AVAILABLE NOW ON ANDROID';

 }
 render();document.querySelector('#language')?.addEventListener('change',render);window.addEventListener('languagechange',render);
})();
