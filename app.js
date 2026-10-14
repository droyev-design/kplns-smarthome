(function(){
  var chips=document.querySelectorAll('.chip'),cards=document.querySelectorAll('.card[data-cat]'),empty=document.getElementById('empty');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.setAttribute('aria-pressed',x===c?'true':'false')});
    var f=c.dataset.filter,n=0;
    cards.forEach(function(k){var show=f==='all'||k.dataset.cat.split(' ').indexOf(f)>-1;k.hidden=!show;if(show)n++});
    if(empty)empty.hidden=n>0;
  })});
  document.querySelectorAll('.copy').forEach(function(b){b.addEventListener('click',function(){
    var box=b.closest('.codebox'),el=box&&box.querySelector('pre code');if(!el)return;
    var t=el.innerText;
    var done=function(m){b.textContent=m;setTimeout(function(){b.textContent='העתק'},1800)};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(function(){done('הועתק')},function(){done('לא הצלחתי להעתיק')})}
    else{var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);done('סומן, לחצו Ctrl+C')}
  })});
})();
