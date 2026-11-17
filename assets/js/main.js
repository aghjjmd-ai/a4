(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var si=$('sf-i');if(si){var bx=[].slice.call(si.querySelectorAll('input')),sp=$('sf-p');var W={phone:0,cards:1,keys:1,lip:.5,glasses:2.5,charger:1.5,wallet:3,note:2.5};
 on(bx.concat([sp]),function(){var v=0,n=0,ph=false;bx.forEach(function(b){if(b.checked){n++;if(b.value==='phone')ph=true;else v+=W[b.value];}});if(ph)v+=({s:2,m:3,l:4})[sp.value];
  var sz=v<=1.5?['Micro','12 × 9 cm','A card case with a zip; best as an inner organiser.']:v<=4?['Mini','18 × 11 cm','A mini crossbody or slim wristlet.']:v<=6.5?['Small','22 × 13 cm','A zip pouch or envelope clutch with a little depth.']:v<=9?['Medium pouch','26 × 16 cm','A soft pouch with a gusset, or a small shoulder bag.']:['Large pouch','30 × 20 cm','Consider a small bag with a strap; this is beyond most clutches.'];
  $('sf-o').innerHTML=n?'<strong>'+sz[0]+' &middot; about '+sz[1]+'</strong><p>'+sz[2]+'</p>'+(sp.value==='l'&&ph?'<p>Large phones rarely fit a true mini: check the inside width.</p>':''):'<strong>Tick at least one item</strong>';});}
var ll=$('lc-l');if(ll){var lu=$('lc-u');var L={smooth:['Wipe after each use','Every 3 months','Smooth calf shows scratches; buff them gently with a fingertip.'],pebble:['Brush dust from the grain weekly','Every 4–6 months','Pebbled leather is forgiving and hides light wear well.'],patent:['Wipe with a soft dry cloth','Not needed','Keep patent apart from other bags; it can pick up colour.'],suede:['Brush with a suede brush','Never condition','Use a protector spray before first use and avoid rain.'],exotic:['Soft brush along the pattern','Every 4 months, sparingly','Use only products that state they suit embossed leather.']};var M={d:1,w:1.5,o:2};
 on([ll,lu],function(){var r=L[ll.value],u=lu.value;$('lc-o').innerHTML='<strong>'+r[1]+'</strong><ul><li><b>Clean:</b> '+r[0]+'</li><li><b>Condition:</b> '+r[1]+(u==='d'&&ll.value!=='suede'&&ll.value!=='patent'?' (lean to the shorter end)':u==='o'?' (only when it feels dry)':'')+'</li><li><b>Store:</b> '+(u==='o'?'stuffed with tissue in a dust bag between outings':'in its dust bag overnight if it will not be used for a few days')+'</li></ul><p>'+r[2]+'</p>';});}
var oe=$('om-e');if(oe){var oc=$('om-c');var E={wed:['Envelope or frame clutch','Satin, soft metallic or fine leather','A detachable chain helps when you need both hands.'],din:['Envelope clutch or mini crossbody','Smooth leather or suede','Keep it small enough to rest on your lap.'],off:['Large zip pouch inside your tote','Pebbled leather','Lift it out for lunch or meetings.'],trv:['Mini crossbody','Pebbled or coated leather','A zip top and a strap keep valuables close.'],gal:['Box or frame clutch','Satin, beading or metallic leather','The smaller and more structured, the more formal.'],wkd:['Wristlet or mini crossbody','Pebbled leather or canvas','Hands-free and easy to wipe clean.']};
 var C={neu:'Choose a bag one tone deeper or lighter than your outfit, or a soft metallic.',brt:'Let the outfit lead: pick a neutral bag in tan, cream or black.',drk:'A rich jewel colour or warm gold lifts dark outfits.',pat:'Pull one colour from the pattern, or stay with a quiet neutral.'};
 on([oe,oc],function(){var e=E[oe.value];$('om-o').innerHTML='<strong>'+e[0]+'</strong><ul><li><b>Finish:</b> '+e[1]+'</li><li><b>Colour:</b> '+C[oc.value]+'</li></ul><p>'+e[2]+'</p>';});}
})();
