const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const themeToggle = document.getElementById("themeToggle");
const siteHeader = document.querySelector(".site-header");
const typedText = document.getElementById("typedText");
const counters = document.querySelectorAll(".counter");
const progressBars = document.querySelectorAll(".progress-bar");
const bmiForm = document.getElementById("bmiForm");
const bmiResult = document.getElementById("bmiResult");
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const awarenessVideo = document.getElementById("awarenessVideo");
const videoToggle = document.getElementById("videoToggle");
const videoNote = document.getElementById("videoNote");
const videoSourcePath = "videos/awareness.mp4";

const typingWords = [
  "preventive care",
  "mental wellness",
  "clean hygiene habits",
  "nutrition education",
  "fitness awareness"
];

let typingWordIndex = 0;
let typingCharIndex = 0;
let isDeleting = false;
let toastTimer;
let impactAnimated = false;
let hasLocalVideo = false;

const applySavedTheme = () => {
  const savedTheme = localStorage.getItem("health-theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.setAttribute("aria-pressed", "true");
  }
};

const updateHeaderState = () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 12);
};

const toggleNavMenu = () => {
  const isOpen = navMenu.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
};

const closeNavMenu = () => {
  navMenu.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

const runTypingEffect = () => {
  const currentWord = typingWords[typingWordIndex];
  const visibleText = currentWord.slice(0, typingCharIndex);
  typedText.textContent = visibleText;

  if (!isDeleting && typingCharIndex < currentWord.length) {
    typingCharIndex += 1;
    setTimeout(runTypingEffect, 95);
    return;
  }

  if (!isDeleting && typingCharIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(runTypingEffect, 1400);
    return;
  }

  if (isDeleting && typingCharIndex > 0) {
    typingCharIndex -= 1;
    setTimeout(runTypingEffect, 45);
    return;
  }

  isDeleting = false;
  typingWordIndex = (typingWordIndex + 1) % typingWords.length;
  setTimeout(runTypingEffect, 180);
};

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.18
  }
);

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 60));

  const step = () => {
    current += increment;
    if (current >= target) {
      counter.textContent = `${target}%`;
      return;
    }
    counter.textContent = `${current}%`;
    requestAnimationFrame(step);
  };

  step();
};

const animateImpact = () => {
  if (impactAnimated) {
    return;
  }

  impactAnimated = true;
  counters.forEach(animateCounter);
  progressBars.forEach((bar) => {
    bar.style.width = `${bar.dataset.progress}%`;
  });
};

const impactSection = document.getElementById("impact");
const impactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateImpact();
      }
    });
  },
  {
    threshold: 0.25
  }
);

impactObserver.observe(impactSection);

const getBmiStatus = (bmi) => {
  if (bmi < 18.5) {
    return "Underweight";
  }
  if (bmi < 25) {
    return "Healthy";
  }
  if (bmi < 30) {
    return "Overweight";
  }
  return "Obese";
};

const getBmiAdvice = (status) => {
  const adviceMap = {
    Underweight: "Focus on balanced nutrition, strength-building foods, and regular health guidance.",
    Healthy: "Great job. Maintain your routine with nutritious food, hydration, sleep, and daily exercise.",
    Overweight: "Consider improving food balance, increasing physical activity, and tracking wellness habits.",
    Obese: "A guided plan with healthy eating, regular exercise, and professional advice can be very helpful."
  };

  return adviceMap[status];
};

bmiForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const weight = Number(document.getElementById("weight").value);
  const height = Number(document.getElementById("height").value);

  if (!weight || !height || weight <= 0 || height <= 0) {
    bmiResult.innerHTML = `
      <strong>Invalid input</strong>
      <p>Please enter valid positive values for both weight and height.</p>
    `;
    return;
  }

  const bmi = weight / ((height / 100) ** 2);
  const roundedBmi = bmi.toFixed(1);
  const status = getBmiStatus(bmi);
  const advice = getBmiAdvice(status);

  bmiResult.innerHTML = `
    <strong>Your BMI is ${roundedBmi} - ${status}</strong>
    <p>${advice}</p>
  `;
});

const setFieldError = (field, message) => {
  const helper = field.parentElement.querySelector(".error-text");
  field.classList.add("is-invalid");
  helper.textContent = message;
};

const clearFieldError = (field) => {
  const helper = field.parentElement.querySelector(".error-text");
  field.classList.remove("is-invalid");
  helper.textContent = "";
};

const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const showToast = () => {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3400);
};

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");

  let isValid = true;

  [nameField, emailField, messageField].forEach(clearFieldError);

  if (nameField.value.trim().length < 3) {
    setFieldError(nameField, "Please enter your name.");
    isValid = false;
  }

  if (!validateEmail(emailField.value.trim())) {
    setFieldError(emailField, "Please enter a valid email address.");
    isValid = false;
  }

  if (messageField.value.trim().length < 10) {
    setFieldError(messageField, "Please write a message with at least 10 characters.");
    isValid = false;
  }

  if (!isValid) {
    return;
  }

  contactForm.reset();
  showToast();
});

const updateVideoButton = () => {
  if (!hasLocalVideo) {
    videoToggle.textContent = "Add Local Video";
    videoToggle.classList.remove("is-hidden");
    return;
  }

  if (awarenessVideo.paused) {
    videoToggle.textContent = "Play Awareness Video";
    videoToggle.classList.remove("is-hidden");
  } else {
    videoToggle.classList.add("is-hidden");
  }
};

const loadVideoSource = async () => {
  try {
    const response = await fetch(videoSourcePath, { method: "HEAD" });
    const contentLength = Number(response.headers.get("content-length") || "0");

    if (!response.ok || contentLength === 0) {
      updateVideoButton();
      return;
    }

    awarenessVideo.src = videoSourcePath;
    awarenessVideo.load();
    hasLocalVideo = true;
    videoNote.textContent = "Local MP4 loaded successfully. Use the controls or overlay button to play and pause.";
  } catch (error) {
    hasLocalVideo = false;
  }

  updateVideoButton();
};

videoToggle.addEventListener("click", () => {
  if (!hasLocalVideo) {
    videoNote.textContent = "Add your own healthcare awareness video at videos/awareness.mp4 to activate playback.";
    updateVideoButton();
    return;
  }

  if (awarenessVideo.paused) {
    awarenessVideo.play();
  } else {
    awarenessVideo.pause();
  }
});

awarenessVideo.addEventListener("play", updateVideoButton);
awarenessVideo.addEventListener("pause", updateVideoButton);
awarenessVideo.addEventListener("ended", updateVideoButton);
awarenessVideo.addEventListener("loadedmetadata", () => {
  hasLocalVideo = true;
  videoNote.textContent = "Local MP4 loaded successfully. Use the controls or overlay button to play and pause.";
  updateVideoButton();
});
awarenessVideo.addEventListener("error", () => {
  hasLocalVideo = false;
  videoNote.textContent = "No local MP4 detected yet. Add your own file at videos/awareness.mp4 to activate the video player.";
  updateVideoButton();
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu.classList.contains("is-open")) {
      closeNavMenu();
    }
  });
});

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  localStorage.setItem("health-theme", isDark ? "dark" : "light");
});

navToggle.addEventListener("click", toggleNavMenu);
window.addEventListener("scroll", updateHeaderState);
window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    closeNavMenu();
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

applySavedTheme();
updateHeaderState();
loadVideoSource();
updateVideoButton();
runTypingEffect();
