/* SCROLL PROGRESS BAR */
const progressBar = document.createElement("div");
progressBar.style.position = "fixed";
progressBar.style.top = 0;
progressBar.style.left = 0;
progressBar.style.height = "3px";
progressBar.style.background = "#fff";
progressBar.style.zIndex = 3000;
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});


/* PARALLAX HEADER */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.style.backgroundPositionY = window.scrollY * 0.4 + "px";
});


/* INTERSECTION OBSERVER */
const revealElements = document.querySelectorAll(
  ".box, .gallery img, section h2, section p"
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = index * 0.08 + "s";
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));


/* NAVBAR ESCONDE/MOSTRA */
let lastScroll = 0;
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const current = window.scrollY;
  nav.style.transform =
    current > lastScroll && current > 120
      ? "translateY(-100%)"
      : "translateY(0)";
  lastScroll = current;
});


/* TÍTULO COM LINHA DESENHADA */
document.querySelectorAll("section h2").forEach(title => {
  const line = document.createElement("span");
  line.style.display = "block";
  line.style.width = "0";
  line.style.height = "2px";
  line.style.background = "#fff";
  line.style.margin = "10px auto 0";
  title.appendChild(line);

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        line.style.transition = "1s ease";
        line.style.width = "60px";
      }
    });
  });

  observer.observe(title);
});


/* BOTÃO RIPPLE */
document.querySelectorAll(".btn").forEach(btn => {
  btn.style.position = "relative";
  btn.style.overflow = "hidden";

  btn.addEventListener("click", e => {
    const circle = document.createElement("span");
    const size = btn.offsetWidth;
    circle.style.width = circle.style.height = size + "px";
    circle.style.position = "absolute";
    circle.style.borderRadius = "50%";
    circle.style.background = "rgba(0,0,0,0.2)";
    circle.style.left = e.offsetX - size / 2 + "px";
    circle.style.top = e.offsetY - size / 2 + "px";
    circle.style.animation = "ripple 0.6s linear";

    btn.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  });
});


/* CTA PULSANDO*/
setInterval(() => {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.animate(
      [{ transform: "scale(1)" }, { transform: "scale(1.05)" }, { transform: "scale(1)" }],
      { duration: 1500 }
    );
  });
}, 5000);


/* ZOOM AO ENTRAR NA SEÇÃO */
document.querySelectorAll("section").forEach(section => {
  section.style.opacity = 0;
  section.style.transform = "scale(0.95)";

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        section.style.transition = "1s ease";
        section.style.opacity = 1;
        section.style.transform = "scale(1)";
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
});

