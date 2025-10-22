cover = document.getElementById("cover");
const interval = setInterval(() => { const viewer = document.querySelector('spline-viewer'); if (viewer && viewer.shadowRoot) { const logo = viewer.shadowRoot.querySelector('#logo'); if (logo) { logo.remove(); console.log("Logo removed!"); clearInterval(interval); } } }, 500);

function contact() {
    const recipient = "dlc3767@rit.edu";
    const subject = "Portfolio Inquiry";
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}`;
    window.location.href = mailtoLink;
}

function projects() {
    window.scrollBy({
        top: window.innerHeight * 1,
        left: 0,
        behavior: 'smooth'
    });
}

function demovideo() {
    window.open('https://www.youtube.com/watch?v=dXBfak1hqYU', '_blank');
}

function swingvideogame(){
    window.open('Swing/index.html',"_self")
}

function Noteley(){
    window.open('Noteley/index.html',"_self")
}

function home(){
    window.open('../index.html',"_self")
}

function NUTRIAPP(){
    window.open('NUTRIAPP/index.html',"_self")
}

function Bibliosave(){
    window.open('Bibliosave/index.html',"_self")
}

cover.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})

