/* One menu implementation shared by every page. */
(()=>{const header=document.getElementById('verdyanHeader');if(!header)return;const button=header.querySelector('#verdyanMenuButton'),dialog=header.querySelector('#verdyanMenu'),close=header.querySelector('.v-close');
function sync(){button.setAttribute('aria-expanded',String(dialog.open));document.documentElement.classList.toggle('verdyan-menu-open',dialog.open)}
button.addEventListener('click',()=>{if(!dialog.open){dialog.showModal();sync();close.focus()}});
close.addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>{sync();button.focus()});
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close()}});
dialog.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>dialog.close()));
})();
