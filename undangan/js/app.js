const $=(s,r=document)=>r.querySelector(s),$$=s=>document.querySelectorAll(s),
esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const tamu=new URLSearchParams(location.search).get('to')||'',nama=tamu||'Nama Tamu';
let timer,io;const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const burst=(x,y)=>{if(rm)return;for(let i=0;i<26;i++){const s=document.createElement('i'),a=Math.random()*6.28,d=60+Math.random()*110;s.className='cf';s.style.cssText=`--x:${x}px;--y:${y}px;--dx:${Math.cos(a)*d}px;--dy:${Math.sin(a)*d-40}px;--r:${Math.random()*720-360}deg;background:${['var(--ink)','#8d8d88','#c9b79c','#e6dfd2'][i%4]}`;document.body.appendChild(s);setTimeout(()=>s.remove(),1300)}};
const burstAt=el=>{const r=el.getBoundingClientRect();burst(r.x+r.width/2,r.y+r.height/2)};
const img=(s,c='',lazy=1)=>s?`<img class="${c}" src="${esc(s)}" alt="" ${lazy?'loading="lazy"':'fetchpriority="high"'} decoding="async" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:this.className}))">`:'';
const ILL=D=>`<svg viewBox="0 0 400 430" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" role="img" aria-label="Sepasang mempelai memegang bingkai foto">
  <defs><clipPath id="cpP"><rect x="53" y="33" width="94" height="112"/></clipPath><clipPath id="cpW"><rect x="255" y="45" width="90" height="108"/></clipPath></defs>
  
  <path d="M26 142C10 190 24 250 42 300M46 148C42 190 50 240 58 292"/>
  <path d="M174 142C190 190 176 250 158 300M154 148C158 190 150 240 142 292"/>
  <path d="M50 176C66 166 80 160 88 158M150 176C134 166 120 160 112 158"/>
  <path d="M88 158L74 215L100 272L126 215L112 158"/>
  <path d="M92 161L100 190L108 161"/>
  <path d="M100 182L84 173V191ZM100 182L116 173V191Z"/><rect x="96" y="177" width="8" height="10" rx="2"/>
  <path d="M50 176C46 260 44 340 42 430M150 176C154 260 156 340 158 430"/>
  <path d="M58 292C52 340 50 390 48 430M142 292C148 340 150 390 152 430"/>
  <circle cx="100" cy="302" r="2"/><circle cx="100" cy="328" r="2"/><path d="M118 340h24M70 372l18 2"/>
  <g transform="rotate(-6 100 90)">
   <rect x="53" y="33" width="94" height="112" fill="#e6e6e1" stroke="none"/>
   <circle cx="100" cy="76" r="18" fill="#cfcfc9" stroke="none"/><path d="M62 145C66 112 134 112 138 145Z" fill="#cfcfc9" stroke="none"/>
   <image href="${esc(D.fotoPria||'')}" x="53" y="33" width="94" height="112" onerror="this.remove()" preserveAspectRatio="xMidYMid slice" clip-path="url(#cpP)" style="filter:grayscale(1)" stroke="none"/>
   <rect x="42" y="22" width="116" height="134" rx="1.5"/><rect x="53" y="33" width="94" height="112"/>
   <path d="M42 22L53 33M158 22L147 33M42 156L53 145M158 156L147 145"/>
   <path d="M42 112C28 108 22 124 28 140C32 150 42 150 48 146"/><path d="M42 118h18a4 4 0 0 1 0 8H42M42 128h16a4 4 0 0 1 0 8H42M42 138h14a4 4 0 0 1 0 8H42"/>
   <path d="M158 112C172 108 178 124 172 140C168 150 158 150 152 146"/><path d="M158 118h-18a4 4 0 0 0 0 8h18M158 128h-16a4 4 0 0 0 0 8h16M158 138h-14a4 4 0 0 0 0 8h14"/>
  </g>
  
  <path d="M232 150C214 200 230 252 252 300M250 156C244 200 252 245 262 290"/>
  <path d="M368 150C386 200 370 252 348 300M350 156C356 200 348 245 338 290"/>
  <path d="M258 186C272 176 288 178 300 194C312 178 328 176 342 186"/>
  <path d="M258 186C252 230 256 262 262 292M342 186C348 230 344 262 338 292"/>
  <path d="M262 292Q300 306 338 292M262 292L236 430M338 292L364 430M280 301L266 430M300 305V430M320 301L334 430"/>
  <g transform="rotate(5 300 95)">
   <rect x="255" y="45" width="90" height="108" fill="#e6e6e1" stroke="none"/>
   <circle cx="300" cy="86" r="17" fill="#cfcfc9" stroke="none"/><path d="M264 153C268 122 332 122 336 153Z" fill="#cfcfc9" stroke="none"/>
   <image href="${esc(D.fotoWanita||'')}" x="255" y="45" width="90" height="108" onerror="this.remove()" preserveAspectRatio="xMidYMid slice" clip-path="url(#cpW)" style="filter:grayscale(1)" stroke="none"/>
   <rect x="244" y="34" width="112" height="130" rx="1.5"/><rect x="255" y="45" width="90" height="108"/>
   <path d="M244 34L255 45M356 34L345 45M244 164L255 153M356 164L345 153"/>
   <path d="M244 118C230 114 224 130 230 146C234 156 244 156 250 152"/><path d="M244 124h18a4 4 0 0 1 0 8h-18M244 134h16a4 4 0 0 1 0 8h-16M244 144h14a4 4 0 0 1 0 8h-14"/>
   <path d="M356 118C370 114 376 130 370 146C366 156 356 156 350 152"/><path d="M356 124h-18a4 4 0 0 0 0 8h18M356 134h-16a4 4 0 0 0 0 8h16M356 144h-14a4 4 0 0 0 0 8h14"/>
  </g>
  </svg>
  `;
function render(D){
  document.title=D.judul;const r=document.documentElement.style;r.setProperty('--ink',D.warna);$('meta[name=theme-color]').content=D.warna;
  const W=esc(D.wanita.panggilan),P=esc(D.pria.panggilan),T=esc(D.tanggalTeks),C={judul:'welcome',sub:'to our wedding',tombol:'open invitation',...D.cover};
  $('#app').innerHTML=`
  <aside class="side" aria-hidden="true">${img(D.fotoUtama,'',0)}<div class="sn"><p class="script">${W} &amp; ${P}</p><p>${T}</p></div></aside>
  <div class="col"><main>
  <section class="rv"><p class="mute">The Wedding of</p><h1 class="script big hw">${W} &amp; ${P}</h1>
    <div class="pw">${img(D.fotoUtama,'photo')||'<div class="photo"></div>'}</div><p class="script mid hw">Save the Date</p><p class="mute">${T}</p>
    <button class="btn o" id="ics">Simpan ke Kalender</button></section>
  <section class="rv"><p>${esc(D.salam)}</p><hr><p class="mute">${esc(D.cerita)}</p></section>
  <section class="couple rv"><p class="mute">Mempelai</p>
    <h2 class="script hw">${W}</h2><b>${esc(D.wanita.lengkap)}</b><p class="mute">${esc(D.wanita.orangtua)}</p><p class="amp">&amp;</p>
    <h2 class="script hw">${P}</h2><b>${esc(D.pria.lengkap)}</b><p class="mute">${esc(D.pria.orangtua)}</p></section>
  <section class="dark rv"><h2 class="script mid hw">Our Countdown</h2><p class="mute">${T}</p>
    <div class="cd" role="timer"><div><b id="cd-d">00</b>Hari</div><div><b id="cd-h">00</b>Jam</div><div><b id="cd-m">00</b>Menit</div><div><b id="cd-s">00</b>Detik</div></div></section>
  <section class="rv"><h2 class="script big hw">Waiting</h2><p class="mute">${T}</p>
    ${D.acara.map(a=>`<div class="card"><b>${esc(a.nama)}</b><br><span class="mute">${esc(a.waktu)}</span></div>`).join('')}
    <p><b>${esc(D.lokasi.nama)}</b><br><span class="mute">${esc(D.lokasi.alamat)}</span></p>
    <a class="btn" href="${esc(D.lokasi.maps)}" target="_blank" rel="noopener">Lihat Lokasi</a>
    <div class="gal">${(D.fotoGaleri||[]).map((f,i)=>`<button class="g" data-i="${i}" aria-label="Foto ${i+1}">${img(f)}</button>`).join('')}</div></section>
  <section class="dark rv"><p class="script" style="font-size:36px">${esc(D.ayat.sumber)}</p><hr style="border-color:#888"><p class="mute">${esc(D.ayat.teks)}</p></section>
  <section class="rv"><h2 class="script mid hw">Wedding Gift</h2><p class="mute">Doa restu Anda sudah menjadi kebahagiaan bagi kami. Bila ingin memberi tanda kasih:</p>
    ${D.hadiah.map(h=>`<div class="bank"><button data-c="${esc(h.norek)}">Salin</button><b>${esc(h.bank)}</b><br>${esc(h.norek)}<br><span style="opacity:.7">a.n. ${esc(h.atasNama)}</span></div>`).join('')}
    <p class="mute">Kirim kado ke: ${esc(D.alamatKado)}</p></section>
  <section class="rv" style="background:#fff"><h2 class="script mid hw">RSVP</h2><p class="mute">Mohon konfirmasi kehadiran Anda.</p>
    <form id="fr"><input name="n" placeholder="Nama" autocomplete="name" value="${esc(tamu)}" required>
      <div class="choice"><label><input type="radio" name="h" value="Hadir" checked>Ya, saya hadir</label><label><input type="radio" name="h" value="Tidak hadir">Maaf, tidak bisa</label></div>
      <select name="a" aria-label="Acara">${D.acara.map(a=>`<option>${esc(a.nama)}</option>`).join('')}<option>Semua acara</option></select>
      <input name="j" type="number" inputmode="numeric" min="1" max="10" value="1" aria-label="Jumlah tamu">
      <textarea name="u" rows="3" placeholder="Ucapan & doa"></textarea><input name="web" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px"><button class="btn">Kirim Konfirmasi</button></form>
    <p id="st" class="mute" role="status" aria-live="polite" style="margin-top:12px"></p><button type="button" class="btn o" id="wa" hidden>Kirim lewat WhatsApp</button>
    <p class="script" style="font-size:34px;margin-top:36px">Ucapan &amp; Doa</p><div id="ws" style="margin-top:12px"></div></section>
  <section class="rv"><p class="mute">${esc(D.penutup)}</p><h2 class="script big hw" style="margin-top:20px">${W} &amp; ${P}</h2></section></main></div>
  <div id="cover" role="dialog" aria-label="Sampul undangan"><div class="in">
    <div class="cv-t"><div class="script cv-h">${esc(C.judul)}</div><p class="cv-s">${esc(C.sub)}</p>
      <p class="mute cv-g">Kepada Yth. Bapak/Ibu/Saudara/i<br><b>${esc(nama)}</b></p>
      <button class="btn pill" id="buka">${esc(C.tombol)}</button><p class="hint" aria-hidden="true">↑ geser / scroll ke atas</p></div>
    <div class="cv-i">${ILL(D)}<div class="cv-n"><span class="script">${P}</span><span class="script">${W}</span></div></div></div></div>
  <div id="pg"></div><div id="lb" hidden role="dialog" aria-label="Galeri"><img alt=""><button id="lbx" aria-label="Tutup">✕</button><button id="lbp" aria-label="Sebelumnya">‹</button><button id="lbn" aria-label="Berikutnya">›</button></div>`;
  wire(D);
}
function buka(){const c=$('#cover');if(c.classList.contains('open'))return;burstAt($('#buka'));c.style.transform='';c.classList.add('open');c.inert=true;document.body.classList.remove('lock');scrollTo(0,0);const m=$('#mu');m.hidden=!$('#au').getAttribute('src');$('#au').play().then(()=>{m.textContent='✕';m.setAttribute('aria-pressed',true)}).catch(()=>{})}
function wire(D){
  const au=$('#au'),mu=$('#mu');au.src=D.musik||'';au.onerror=()=>mu.hidden=true;
  $('#buka').onclick=buka;
  mu.onclick=()=>{const p=au.paused;p?au.play():au.pause();mu.textContent=p?'✕':'♪';mu.setAttribute('aria-pressed',p)};
  $$('[data-c]').forEach(b=>b.onclick=()=>{navigator.clipboard?.writeText(b.dataset.c);b.textContent='Tersalin';burstAt(b)});
  $('#ics').onclick=()=>{const d=new Date(D.tanggalISO),f=x=>x.toISOString().replace(/[-:]|\.\d{3}/g,''),q=s=>String(s).replace(/[,;]/g,'\\$&');
    const t=`BEGIN:VCALENDAR\r\nVERSION:2.0\r\nBEGIN:VEVENT\r\nDTSTART:${f(d)}\r\nDTEND:${f(new Date(+d+4*36e5))}\r\nSUMMARY:${q(D.judul)}\r\nLOCATION:${q(D.lokasi.nama+', '+D.lokasi.alamat)}\r\nEND:VEVENT\r\nEND:VCALENDAR`;
    const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([t],{type:'text/calendar'}));a.download='undangan.ics';a.click()};
  io?.disconnect();io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.12});$$('.rv').forEach(s=>io.observe(s));
  clearInterval(timer);const t=new Date(D.tanggalISO).getTime(),p=n=>String(Math.floor(n)).padStart(2,'0'),set=(i,v)=>{const e=$('#cd-'+i);if(e.textContent!==v){e.textContent=v;if(!rm){e.classList.remove('rl');void e.offsetWidth;e.classList.add('rl')}}};
  const tick=()=>{if(document.hidden)return;const d=Math.max(0,t-Date.now())/1000;set('d',p(d/86400));set('h',p(d%86400/3600));set('m',p(d%3600/60));set('s',p(d%60))};tick();timer=setInterval(tick,1000);
  fx(D);
  const U=D.backend?.url,key='ucapan_'+D.judul,loc=()=>{try{return JSON.parse(localStorage.getItem(key)||'[]')}catch{return[]}};
  const draw=a=>$('#ws').innerHTML=a.length?a.map(w=>`<div class="wish"><b>${esc(w.n)}</b> <span class="mute">· ${esc(w.h)}</span><br>${esc(w.u)}</div>`).join(''):'<p class="mute">Belum ada ucapan. Jadilah yang pertama ♡</p>';
  const load=async()=>{if(!U)return draw(loc().filter(w=>w.u));try{draw((await(await fetch(U+'?aksi=ucapan')).json()).data||[])}catch{draw(loc().filter(w=>w.u))}};load();
  const wa=f=>open(`https://wa.me/${D.whatsapp}?text=${encodeURIComponent(`Halo, saya ${f.n}.\nKehadiran: ${f.h}\nAcara: ${f.a}\nJumlah: ${f.j}\nUcapan: ${f.u||'-'}`)}`,'_blank','noopener');
  const st=(m,err)=>{const e=$('#st');e.textContent=m;e.style.color=err?'#b00020':''};
  $('#fr').onsubmit=async e=>{e.preventDefault();const fm=e.target,f=Object.fromEntries(new FormData(fm)),b=fm.querySelector('.btn');
    if(!U){try{localStorage.setItem(key,JSON.stringify([f,...loc()].slice(0,30)))}catch{}draw(loc().filter(w=>w.u));if(f.h==='Hadir')burstAt(b);return wa(f)}
    b.disabled=true;st('Mengirim…');$('#wa').hidden=true;
    try{const r=await(await fetch(U,{method:'POST',body:new URLSearchParams(f)})).json();if(!r.ok)throw 0;
      st('Terima kasih, konfirmasi Anda sudah kami terima ♡');if(f.h==='Hadir')burstAt(b);fm.u.value='';load()}
    catch{st('Gagal mengirim. Coba lagi, atau kirim lewat WhatsApp.',1);$('#wa').hidden=false;$('#wa').onclick=()=>wa(f)}
    b.disabled=false};
}
function fx(D){
  const c=$('#cover');let y0=null,dy=0;
  c.onpointerdown=e=>{if(e.target.closest('button'))return;y0=e.clientY;dy=0;c.style.transition='none';c.setPointerCapture(e.pointerId)};
  c.onpointermove=e=>{if(y0==null)return;dy=Math.min(0,e.clientY-y0);c.style.transform=`translateY(${dy}px)`};
  c.onpointerup=c.onpointercancel=()=>{if(y0==null)return;y0=null;c.style.transition='';c.style.transform='';if(dy<-90)buka()};
  c.onwheel=e=>{if(e.deltaY>30)buka()};
  let tk=0;const upd=()=>{tk=0;const max=document.documentElement.scrollHeight-innerHeight;$('#pg').style.transform=`scaleX(${max>0?scrollY/max:0})`;
    if(!rm)$$('.pw').forEach(p=>{const r=p.getBoundingClientRect();p.style.setProperty('--py',(r.top+r.height/2-innerHeight/2)*-.1+'px')})};
  onscroll=()=>{tk||(tk=requestAnimationFrame(upd))};upd();
  const si=$('.side img');onpointermove=e=>{if(rm||!si||e.pointerType==='touch')return;si.style.transform=`translate(${(e.clientX/innerWidth-.5)*-24}px,${(e.clientY/innerHeight-.5)*-24}px) scale(1.08)`};
  const gs=D.fotoGaleri||[],lb=$('#lb');let gi=0,lx;const L=i=>{gi=(i+gs.length)%gs.length;$('#lb img').src=gs[gi]};
  $$('.g').forEach(b=>b.onclick=()=>{L(+b.dataset.i);lb.hidden=false;$('#lbx').focus()});
  $('#lbx').onclick=()=>lb.hidden=true;$('#lbp').onclick=()=>L(gi-1);$('#lbn').onclick=()=>L(gi+1);
  lb.onclick=e=>{if(e.target===lb)lb.hidden=true};lb.onpointerdown=e=>lx=e.clientX;lb.onpointerup=e=>{const d=e.clientX-lx;if(Math.abs(d)>50)L(gi+(d<0?1:-1))};
  onkeydown=e=>{if(lb.hidden)return;if(e.key==='Escape')lb.hidden=true;if(e.key==='ArrowRight')L(gi+1);if(e.key==='ArrowLeft')L(gi-1)};
}
render(window.DATA);
addEventListener('message',e=>{if(e.data?.type==='data'){window.DATA=e.data.data;render(e.data.data);buka()}});
