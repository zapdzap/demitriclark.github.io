cover = document.getElementById("cover");
const interval = setInterval(() => { const viewer = document.querySelector('spline-viewer'); if (viewer && viewer.shadowRoot) { const logo = viewer.shadowRoot.querySelector('#logo'); if (logo) { logo.remove(); console.log("Logo removed!"); clearInterval(interval); } } }, 500);

function openemail() {
    const recipient = "dlc3767@rit.edu";
    const subject = "Portfolio Inquiry";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
}

function projects() {
   window.open('/Projects/',"_self")
}

function demovideo() {
    window.open('https://www.youtube.com/watch?v=dXBfak1hqYU', '_blank');
}

function contact(){
    window.open('/Contact/',"_self")
}

function swingvideogame(){
    window.open('Swing/',"_self")
}

function Noteley(){
    window.open('Noteley/',"_self")
}

function home(){
    window.open('/',"_self")
}

function NUTRIAPP(){
    window.open('NUTRIAPP/',"_self")
}

function Bibliosave(){
    window.open('Bibliosave/',"_self")
}

cover.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})

