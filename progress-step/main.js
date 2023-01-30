import "./style.scss";

const btnNext = document.getElementById("next");
const btnPrev = document.getElementById("prev");
const uiProgressBar = document.querySelector(".progress__bar");
const uiProgressSteps = document.querySelectorAll(".progress__steps");

let currentActiveStep = 1;

btnNext.addEventListener("click", () => {
  currentActiveStep++;
  if (currentActiveStep > uiProgressSteps.length) {
    currentActiveStep = uiProgressSteps.length;
  }
  updateProgressUI();
});

btnPrev.addEventListener("click", () => {
  currentActiveStep--;
  if (currentActiveStep < 1) {
    currentActiveStep = 1;
  }
  updateProgressUI();
});

function updateProgressUI() {
  uiProgressSteps.forEach((step, idx) => {
    if (idx < currentActiveStep) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
  uiProgressBar.style.width =
    ((currentActiveStep - 1) / (uiProgressSteps.length - 1)) * 100 + "%";

  updateButtonUI();
}

function updateButtonUI() {
  if (currentActiveStep === 1) {
    btnPrev.disabled = true;
  } else if (currentActiveStep === uiProgressSteps.length) {
    btnNext.disabled = true;
  } else {
    btnPrev.disabled = false;
    btnNext.disabled = false;
  }
}
