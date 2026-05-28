const story = document.querySelector("[data-story]");
const path = document.querySelector("[data-story-path]");
const title = document.querySelector("[data-story-title]");
const kicker = document.querySelector("[data-story-kicker]");
const copy = document.querySelector("[data-story-copy]");
const counter = document.querySelector("[data-story-counter]");
const panels = Array.from(document.querySelectorAll("[data-story-step]"));
const drawings = Array.from(document.querySelectorAll("[data-drawing]"));

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setText = (index) => {
  const panel = panels[index];
  if (!panel || !title || !kicker || !copy || !counter) return;

  title.textContent = panel.dataset.title || "";
  kicker.textContent = panel.dataset.kicker || "";
  copy.textContent = panel.dataset.copy || "";
  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}`;

  drawings.forEach((drawing) => {
    drawing.classList.toggle("is-visible", drawing.dataset.drawing === String(index));
  });
};

let activeIndex = -1;
let pathLength = 0;

const measure = () => {
  if (!path) return;
  pathLength = path.getTotalLength();
  path.style.strokeDasharray = `${pathLength}`;
  path.style.strokeDashoffset = `${pathLength}`;
};

const update = () => {
  if (!story || !path || panels.length === 0) return;

  const rect = story.getBoundingClientRect();
  const max = Math.max(1, rect.height - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -rect.top / max));
  const index = Math.min(panels.length - 1, Math.floor(progress * panels.length));

  if (index !== activeIndex) {
    activeIndex = index;
    setText(index);
  }

  if (!reduceMotion) {
    path.style.strokeDashoffset = `${pathLength * (1 - progress)}`;
  } else {
    path.style.strokeDashoffset = "0";
  }

  document.documentElement.style.setProperty("--story-progress", String(progress));
};

measure();
setText(0);
update();

window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", () => {
  measure();
  update();
});

const menuButton = document.querySelector("[data-menu-button]");
const siteNav = document.querySelector("[data-site-nav]");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  siteNav?.classList.toggle("is-open", !isOpen);
});

siteNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton?.setAttribute("aria-expanded", "false");
    siteNav.classList.remove("is-open");
  });
});
