const story = document.querySelector("[data-story]");
const title = document.querySelector("[data-story-title]");
const kicker = document.querySelector("[data-story-kicker]");
const copy = document.querySelector("[data-story-copy]");
const counter = document.querySelector("[data-story-counter]");
const actions = document.querySelector("[data-story-actions]");
const primaryAction = document.querySelector("[data-story-primary]");
const secondaryAction = document.querySelector("[data-story-secondary]");
const panels = Array.from(document.querySelectorAll("[data-story-step]"));
const images = Array.from(document.querySelectorAll("[data-story-image]"));
const thread = document.querySelector("[data-story-thread]");
const dots = Array.from(document.querySelectorAll("[data-story-dot]"));

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 2);

const setText = (index) => {
  const panel = panels[index];
  if (!panel || !title || !kicker || !copy || !counter) return;

  title.textContent = panel.dataset.title || "";
  kicker.textContent = panel.dataset.kicker || "";
  copy.textContent = panel.dataset.copy || "";
  counter.textContent = `${String(index + 1).padStart(2, "0")} / ${String(panels.length).padStart(2, "0")}`;

  const hasPrimary = panel.dataset.primaryLabel && panel.dataset.primaryHref;
  const hasSecondary = panel.dataset.secondaryLabel && panel.dataset.secondaryHref;

  actions?.classList.toggle("is-hidden", !hasPrimary && !hasSecondary);

  if (primaryAction) {
    primaryAction.textContent = panel.dataset.primaryLabel || "";
    primaryAction.href = panel.dataset.primaryHref || "#";
    primaryAction.toggleAttribute("download", (panel.dataset.primaryHref || "").endsWith(".docx"));
    primaryAction.classList.toggle("is-hidden", !hasPrimary);
  }

  if (secondaryAction) {
    secondaryAction.textContent = panel.dataset.secondaryLabel || "";
    secondaryAction.href = panel.dataset.secondaryHref || "#";
    secondaryAction.toggleAttribute("download", (panel.dataset.secondaryHref || "").endsWith(".docx"));
    secondaryAction.classList.toggle("is-hidden", !hasSecondary);
  }

  images.forEach((image) => {
    image.classList.toggle("is-visible", image.dataset.storyImage === String(index));
  });
};

let activeIndex = -1;

const updateImages = (index, segmentProgress) => {
  const imageProgress = easeOut(segmentProgress);
  const opacity = index === panels.length - 1 ? 0.98 : 0.9;
  const scale = 1 + imageProgress * 0.026;

  images.forEach((image) => {
    if (image.dataset.storyImage === String(index)) {
      image.style.setProperty("--story-image-opacity", opacity.toFixed(3));
      image.style.setProperty("--story-image-scale", scale.toFixed(3));
      image.style.setProperty("--story-image-progress", imageProgress.toFixed(3));
    } else {
      image.style.setProperty("--story-image-opacity", "0");
      image.style.setProperty("--story-image-scale", "1");
      image.style.setProperty("--story-image-progress", "0");
    }
  });
};

const updateThread = (index, progress) => {
  thread?.style.setProperty("--story-thread-progress", `${progress * 100}%`);

  dots.forEach((dot) => {
    const dotIndex = Number(dot.dataset.storyDot);
    dot.classList.toggle("is-active", dotIndex === index);
    dot.classList.toggle("is-past", dotIndex < index);
  });
};

const update = () => {
  if (!story || panels.length === 0) return;

  const rect = story.getBoundingClientRect();
  const max = Math.max(1, rect.height - window.innerHeight);
  const progress = clamp(-rect.top / max);
  const index = Math.min(panels.length - 1, Math.floor(progress * panels.length));
  const segmentProgress = clamp(progress * panels.length - index);

  if (index !== activeIndex) {
    activeIndex = index;
    setText(index);
  }

  updateImages(index, segmentProgress);
  updateThread(index, progress);
  document.documentElement.style.setProperty("--story-progress", String(progress));
};

setText(0);
update();

window.addEventListener("scroll", update, { passive: true });
window.addEventListener("resize", update);

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
