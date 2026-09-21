// Default content used by every project card until you add project-specific content.
const PLACEHOLDER_PROJECT = {
  title: "Bori Bakery<br><span>보리베이커리</span>",
  category: "BRAND DESIGN",
  summary: "A contemporary Korean bakery specialising in freshly baked soft breads, salt bread and filled buns. The experience should feel like discovering a small bakery in Seoul: warm, comforting and slightly playful, but still sophisticated enough to feel premium.",
  image: "assets/v2/bori-case.png",
  imageAlt: "Bori Bakery storefront and brand identity",
  role: "Build a contemporary Korean bakery identity that feels warm, youthful and memorable — without relying on stereotypical Korean café aesthetics or over-designed visuals.",
  approach: "Built Bori around everyday comfort, visual restraint, and playful imperfection. Instead of relying on obvious Korean motifs, the identity draws from contemporary Korean bakery culture through soft typography, hand-drawn illustrations, warm natural tones, tactile materials, and product-led storytelling. Salt bread became the hero visual, while conversational copy such as ‘freshly baked again today’ adds personality and warmth across packaging, signage, and merchandise."
};

// Add a project here when its case study is ready. The key must match the
// data-project value on its card in index.html. See EDITING_GUIDE.md.
const PROJECTS = {
  bori: PLACEHOLDER_PROJECT,
  reserve: {
    layout: "custom-case",
    contentId: "reserve-case-study",
    labelId: "reserve-modal-title"
  },
  "youth-alive": {
    layout: "custom-case",
    contentId: "youth-alive-case-study",
    labelId: "youth-alive-modal-title"
  },
  "stashaway-kit": {
    layout: "custom-case",
    contentId: "stashaway-kit-case-study",
    labelId: "stashaway-kit-modal-title"
  },
  spritzer: {
    layout: "custom-case",
    contentId: "spritzer-case-study",
    labelId: "spritzer-modal-title",
    video: true
  }
};

// Duplicate the visible brand list once for a seamless, continuous loop.
// Only edit the original list in index.html; this copy updates automatically.
const brandList = document.querySelector(".brand-list");
if (brandList) {
  const brandCopy = brandList.cloneNode(true);
  brandCopy.setAttribute("aria-hidden", "true");
  brandList.after(brandCopy);
}

const modal = document.querySelector("#project-modal");
const windowElement = modal.querySelector(".project-window");
const closeButton = modal.querySelector(".modal-close");
const cards = document.querySelectorAll(".project-card");
const standardProjectContent = modal.querySelector(
  ".project-content:not(.project-video-case):not(.project-figma-case)"
);

const projectContents = modal.querySelectorAll(".project-content");
let previousFocus = null;

const fields = {
  title: document.querySelector("#modal-title"),
  category: document.querySelector("#modal-category"),
  summary: document.querySelector("#modal-summary"),
  image: document.querySelector("#modal-image"),
  role: document.querySelector("#modal-role"),
  approach: document.querySelector("#modal-approach")
};

function openProject(projectKey) {
  const project = PROJECTS[projectKey] || PLACEHOLDER_PROJECT;
  previousFocus = document.activeElement;

  const isCustomCase = project.layout === "custom-case";

  // Hide every project first.
  projectContents.forEach((content) => {
    content.hidden = true;
  });

  windowElement.classList.toggle(
    "is-video-case",
    Boolean(project.video)
  );

  windowElement.classList.toggle(
    "is-figma-case",
    isCustomCase && !project.video
  );

  if (isCustomCase) {
    const selectedContent = document.getElementById(project.contentId);

    if (selectedContent) {
      selectedContent.hidden = false;
    } else {
      console.error(`Missing project content: ${project.contentId}`);
    }

    modal.setAttribute("aria-labelledby", project.labelId);
  } else {
    // Used by Bori and normal data-based projects.
    standardProjectContent.hidden = false;
    modal.setAttribute("aria-labelledby", "modal-title");

    fields.title.innerHTML = project.title;
    fields.category.textContent = project.category;
    fields.summary.textContent = project.summary;
    fields.image.src = project.image;
    fields.image.alt = project.imageAlt;
    fields.role.textContent = project.role;
    fields.approach.textContent = project.approach;
  }

  windowElement.scrollTop = 0;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeButton.focus();
}

function closeProject() {
  modal.querySelectorAll("video").forEach((video) => video.pause());
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  previousFocus?.focus();
}

cards.forEach((card) => {
  card.addEventListener("click", () => openProject(card.dataset.project));
});
closeButton.addEventListener("click", closeProject);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeProject();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) closeProject();
});
