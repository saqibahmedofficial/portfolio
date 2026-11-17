
const menu=document.querySelector('.menu'),nav=document.querySelector('.nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
const keys=['name','role','headline','intro','email','linkedin','github'];
function applyLocalProfile(){let p={};try{p=JSON.parse(localStorage.getItem('saqibPortfolioProfile')||'{}')}catch(e){};keys.forEach(k=>{if(p[k])document.querySelectorAll(`[data-profile="${k}"]`).forEach(el=>{if(el.tagName==='A'&&k==='email')el.href='mailto:'+p[k];el.textContent=p[k]})})}
applyLocalProfile();
