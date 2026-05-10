/* HEADER SCROLL */
const header=document.querySelector("header");
window.addEventListener("scroll",()=>{
  header.classList.toggle("scrolled",window.scrollY>50);
});

/* JARAk */
const ham=document.getElementById("jarak");
const nav=document.getElementById("navMenu");
ham.onclick=()=>nav.classList.toggle("active");

function copyServerIP() {
  const ip = "mc.countrysmp.biz.id:25565";

  navigator.clipboard.writeText(ip).then(() => {
    const toast = document.getElementById("toast");
    toast.style.visibility = "visible";

    setTimeout(() => {
      toast.style.visibility = "hidden";
    }, 3000);
  });
}

function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}

function copyIP() {
  const ip = "play.servermu.com:25565";

  if (navigator.clipboard) {
    navigator.clipboard.writeText(ip);
    alert("IP berhasil disalin!");
  } else {
    const temp = document.createElement("textarea");
    temp.value = ip;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
    alert("IP berhasil disalin!");
  }
}