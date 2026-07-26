/* ============================================
   HealthCare Awareness — JavaScript
   Vanilla JS only. All interactions wired here.
============================================ */
(function () {
  "use strict";

  /* -------- DATA -------- */
  const IMG = {
    awareness:
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&auto=format&fit=crop&q=80",
    checkup:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&auto=format&fit=crop&q=80",
    vaccine:
      "https://images.unsplash.com/photo-1631941618536-2979d565b726?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZSUyMFZhY2NpbmF0aW9uJTIwRHJpdmV8ZW58MHx8MHx8fDA%3D",
    women:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V29tZW4lMjBIZWFsdGglMjBQcm9ncmFtc3xlbnwwfHwwfHx8MA%3D%3D",
    mental:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&auto=format&fit=crop&q=80",
    nutrition:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=80",
    doctor:
      "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=600&auto=format&fit=crop&q=80",
    community:
      "https://images.unsplash.com/photo-1599045118108-bf9954418b76?w=600&auto=format&fit=crop&q=80",
    village:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&auto=format&fit=crop&q=80",
    care: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&auto=format&fit=crop&q=80",
  };

  const slides = [
    { title: "Health Awareness Camps", img: IMG.awareness },
    { title: "Free Health Checkups", img: IMG.checkup },
    { title: "Vaccination Drive", img: IMG.vaccine },
    { title: "Women Health Programs", img: IMG.women },
    { title: "Mental Health Awareness", img: IMG.mental },
    { title: "Nutrition Education", img: IMG.nutrition },
  ];

  const programs = [
    {
      title: "Health Awareness Camp",
      desc: "We organize awareness camps in rural and urban areas to educate people about healthy living.",
      img: IMG.awareness,
      likes: 128,
    },
    {
      title: "Preventive Care Education",
      desc: "Educating communities on hygiene, nutrition, and vaccination through interactive sessions.",
      img: IMG.doctor,
      likes: 96,
    },
    {
      title: "Free Health Check-ups",
      desc: "Providing free health check-ups including BP, sugar and BMI to detect early health issues.",
      img: IMG.checkup,
      likes: 210,
    },
    {
      title: "Mental Health Awareness",
      desc: "We conduct sessions to promote mental well-being and reduce stress and anxiety in the community.",
      img: IMG.mental,
      likes: 85,
    },
    {
      title: "Vaccination Campaign",
      desc: "We run vaccination drives to protect communities from preventable diseases.",
      img: IMG.vaccine,
      likes: 176,
    },
    {
      title: "Nutrition & Hygiene",
      desc: "Promoting proper nutrition and hygiene for stronger, healthier communities everywhere.",
      img: IMG.nutrition,
      likes: 99,
    },
  ];

  const activities = [
    { title: "Health Camps", img: IMG.community },
    { title: "Vaccination Drive", img: IMG.vaccine },
    { title: "Women Health Support", img: IMG.women },
    { title: "Mental Health Sessions", img: IMG.mental },
    { title: "Nutrition Education", img: IMG.nutrition },
    { title: "Community Outreach", img: IMG.village },
  ];

  const galleryImgs = [
    IMG.awareness,
    IMG.checkup,
    IMG.vaccine,
    IMG.women,
    IMG.mental,
    IMG.nutrition,
    IMG.community,
    IMG.village,
    IMG.care,
    IMG.doctor,
    IMG.care,
    IMG.community,
  ];

  const testimonials = [
    {
      name: "Lakshmi Devi",
      role: "Beneficiary",
      text: "The health camp organized in our village was very helpful. I got my sugar and BP checked for free and received good advice from the doctors.",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    },
    {
      name: "Ramesh Kumar",
      role: "Volunteer",
      text: "Volunteering with this NGO has been a life-changing experience. We genuinely reach people who need care the most.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    },
    {
      name: "Dr. Anita Shah",
      role: "Partner Physician",
      text: "The team is incredibly well-organized. The preventive education sessions have measurably improved community health awareness.",
      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&auto=format&fit=crop&q=80",
    },
    {
      name: "Priya Sharma",
      role: "Mother of two",
      text: "Free check-ups and vaccinations for my children — I cannot thank this team enough. They treat everyone with respect and warmth.",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
    },
  ];

  const faqs = [
    {
      q: "Why are health awareness programs important?",
      a: "They empower individuals with knowledge to prevent disease, recognize early symptoms, and seek timely care — improving overall community health outcomes.",
    },
    {
      q: "How can I participate in these programs?",
      a: "You can join as a volunteer, attend our camps, or contribute through our newsletter signup and contact form. We welcome anyone who wants to help.",
    },
    {
      q: "Are the health camps completely free?",
      a: "Yes. All our health camps, basic check-ups, and awareness sessions are 100% free for community participants.",
    },
    {
      q: "Who can join these programs?",
      a: "Anyone — community members, students, professionals, or medical volunteers. Our programs are inclusive and open to all.",
    },
  ];

  /* -------- HELPERS -------- */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));

  /* -------- IMPACT SLIDER -------- */
  const sliderTrack = $("#sliderTrack");
  slides.forEach((s) => {
    const el = document.createElement("div");
    el.className = "slide-card";
    el.innerHTML = `
      <div class="slide-img"><img src="${s.img}" alt="${s.title}" loading="lazy"/></div>
      <h4>${s.title}</h4>`;
    sliderTrack.appendChild(el);
  });
  let slideIndex = 0;
  function slidesPerView() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    if (window.innerWidth <= 1024) return 4;
    return 5;
  }
  function updateSlider() {
    const card = sliderTrack.querySelector(".slide-card");
    if (!card) return;
    const w = card.offsetWidth + 24;
    const max = Math.max(0, slides.length - slidesPerView());
    if (slideIndex > max) slideIndex = max;
    if (slideIndex << 0) slideIndex = 0;
    sliderTrack.style.transform = `translateX(${-slideIndex * w}px)`;
  }
  sliderTrack.style.transition = "transform .5s ease";
  $("#sliderPrev").addEventListener("click", () => {
    slideIndex--;
    updateSlider();
  });
  $("#sliderNext").addEventListener("click", () => {
    slideIndex++;
    updateSlider();
  });
  window.addEventListener("resize", updateSlider);
  setTimeout(updateSlider, 100);
  setInterval(() => {
    const max = Math.max(0, slides.length - slidesPerView());
    slideIndex = slideIndex >= max ? 0 : slideIndex + 1;
    updateSlider();
  }, 5000);

  /* -------- PROGRAMS -------- */
  const programGrid = $("#programGrid");
  programs.forEach((p) => {
    const card = document.createElement("article");
    card.className = "program-card reveal";
    card.innerHTML = `
      <div class="program-img"><img src="${p.img}" alt="${p.title}" loading="lazy"/></div>
      <div class="program-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="program-meta">
          <span class="likes"><i class="fa-regular fa-heart"></i> <span class="lcount">${p.likes}</span></span>
    <div class="share-icons">
  <a href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
  <a href="#" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
  <a href="#" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
</div>
</div>
<a href="#contact" class="read-more">Read More <i class="fa-solid fa-arrow-right"></i></a>
</div>`;
    programGrid.appendChild(card);    
  });
  programGrid.addEventListener("click", (e) => {
    const likeEl = e.target.closest(".likes");
    if (!likeEl) return;
    e.preventDefault();
    const icon = likeEl.querySelector("i");
    const count = likeEl.querySelector(".lcount");
    const liked = likeEl.classList.toggle("liked");
    icon.className = liked ? "fa-solid fa-heart" : "fa-regular fa-heart";
    count.textContent = Number(count.textContent) + (liked ? 1 : -1);
  });

  /* -------- ACTIVITIES SIDEBAR -------- */
  const activityList = $("#activityList");
  activities.forEach((a) => {
    const li = document.createElement("li");
    li.innerHTML = `<div class="a-thumb"><img src="${a.img}" alt="${a.title}" loading="lazy"/></div><span>${a.title}</span>`;
    activityList.appendChild(li);
  });

  /* -------- GALLERY + LIGHTBOX -------- */
  const galleryGrid = $("#galleryGrid");
  galleryImgs.forEach((src, i) => {
    const div = document.createElement("div");
    div.className = "gallery-item";
    div.dataset.index = i;
    div.innerHTML = `<img src="${src}" alt="Gallery image ${i + 1}" loading="lazy"/>`;
    galleryGrid.appendChild(div);
  });
  const lightbox = $("#lightbox");
  const lbImg = $("#lbImg");
  let lbIndex = 0;
  function openLb(i) {
    lbIndex = i;
    lbImg.src = galleryImgs[i];
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
  }
  function closeLb() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
  }
  galleryGrid.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) openLb(Number(item.dataset.index));
  });
  $("#lbClose").addEventListener("click", closeLb);
  $("#lbPrev").addEventListener("click", () => {
    lbIndex = (lbIndex - 1 + galleryImgs.length) % galleryImgs.length;
    lbImg.src = galleryImgs[lbIndex];
  });
  $("#lbNext").addEventListener("click", () => {
    lbIndex = (lbIndex + 1) % galleryImgs.length;
    lbImg.src = galleryImgs[lbIndex];
  });
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) closeLb();
  });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") $("#lbPrev").click();
    if (e.key === "ArrowRight") $("#lbNext").click();
  });

  /* -------- TESTIMONIALS -------- */
  const tTrack = $("#testimonialTrack");
  const tDots = $("#tDots");
  testimonials.forEach((t, i) => {
    const el = document.createElement("div");
    el.className = "testimonial";
    el.innerHTML = `
      <div class="quote-icon"><i class="fa-solid fa-quote-left"></i></div>
      <p>"${t.text}"</p>
      <div class="testimonial-author">
        <div class="t-avatar"><img src="${t.img}" alt="${t.name}"/></div>
        <div class="t-author-info"><h4>${t.name}</h4><span>${t.role}</span></div>
      </div>`;
    tTrack.appendChild(el);
    const dot = document.createElement("span");
    dot.className = "t-dot" + (i === 0 ? " active" : "");
    dot.addEventListener("click", () => goTestimonial(i));
    tDots.appendChild(dot);
  });
  let tIndex = 0;
  function goTestimonial(i) {
    tIndex = (i + testimonials.length) % testimonials.length;
    tTrack.style.transform = `translateX(${-tIndex * 100}%)`;
    $$(".t-dot").forEach((d, idx) =>
      d.classList.toggle("active", idx === tIndex),
    );
  }
  $("#tPrev").addEventListener("click", () => goTestimonial(tIndex - 1));
  $("#tNext").addEventListener("click", () => goTestimonial(tIndex + 1));
  setInterval(() => goTestimonial(tIndex + 1), 6000);

  /* -------- FAQ ACCORDION -------- */
  const faqList = $("#faqList");
  faqs.forEach((f, i) => {
    const item = document.createElement("div");
    item.className = "faq-item" + (i === 0 ? " open" : "");
    item.innerHTML = `
      <button class="faq-q" type="button">${f.q} <i class="fa-solid fa-chevron-down"></i></button>
      <div class="faq-a"><p>${f.a}</p></div>`;
    faqList.appendChild(item);
  });
  faqList.addEventListener("click", (e) => {
    const btn = e.target.closest(".faq-q");
    if (!btn) return;
    const item = btn.parentElement;
    const isOpen = item.classList.contains("open");
    $$(".faq-item", faqList).forEach((x) => x.classList.remove("open"));
    if (!isOpen) item.classList.add("open");
  });

  /* -------- ANIMATED COUNTERS -------- */
  const counters = $$(".count");
  const counterObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const el = en.target;
          const target = Number(el.dataset.target);
          const dur = 1800;
          const start = performance.now();
          function step(now) {
            const p = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target).toLocaleString();
            if (p << 1) requestAnimationFrame(step);
            else el.textContent = target.toLocaleString();
          }
          requestAnimationFrame(step);
          counterObs.unobserve(el);
        }
      });
    },
    { threshold: 0.4 },
  );
  counters.forEach((c) => counterObs.observe(c));

  /* -------- REVEAL ANIMATION -------- */
  const revealObs = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("visible");
          revealObs.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  $$(".reveal").forEach((el) => revealObs.observe(el));

  /* -------- NEWSLETTER VALIDATION -------- */
  const nForm = $("#newsletterForm");
  const nEmail = $("#newsletterEmail");
  const nMsg = $("#newsletterMsg");
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  nForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const v = nEmail.value.trim();
    nMsg.className = "form-msg";
    if (!v) {
      nMsg.textContent = "Please enter your email.";
      nMsg.classList.add("error");
      return;
    }
    if (!emailRe.test(v)) {
      nMsg.textContent = "Please enter a valid email address.";
      nMsg.classList.add("error");
      return;
    }
    nMsg.textContent = "🎉 Thank you for subscribing!";
    nMsg.classList.add("success");
    nEmail.value = "";
  });

  /* -------- CONTACT FORM VALIDATION -------- */
  const cForm = $("#contactForm");
  const cMsg = $("#contactMsg");
  cForm.addEventListener("submit", (e) => {
    e.preventDefault();
    cMsg.className = "form-msg";
    let ok = true;
    const fields = {
      cName: {
        el: $("#cName"),
        test: (v) => v.length >= 2,
        err: "Please enter your name.",
      },
      cEmail: {
        el: $("#cEmail"),
        test: (v) => emailRe.test(v),
        err: "Enter a valid email address.",
      },
      cPhone: {
        el: $("#cPhone"),
        test: (v) => /^[+\d\s()-]{7,}$/.test(v),
        err: "Enter a valid phone number.",
      },
      cMsg: {
        el: $("#cMsg"),
        test: (v) => v.length >= 10,
        err: "Message must be at least 10 characters.",
      },
    };
    Object.values(fields).forEach((f) => {
      const wrap = f.el.closest(".field");
      const errEl = wrap.querySelector(".err");
      const v = f.el.value.trim();
      if (!f.test(v)) {
        wrap.classList.add("invalid");
        if (errEl) errEl.textContent = f.err;
        ok = false;
      } else {
        wrap.classList.remove("invalid");
        if (errEl) errEl.textContent = "";
      }
    });
    if (!ok) {
      cMsg.textContent = "Please correct the highlighted fields.";
      cMsg.classList.add("error");
      return;
    }
    cMsg.textContent = "✓ Thank you! Your message has been sent successfully.";
    cMsg.classList.add("success");
    cForm.reset();
  });

  /* -------- NAVBAR: STICKY, MOBILE, ACTIVE LINK, SMOOTH -------- */
  const navbar = $("#navbar");
  const menuToggle = $("#menuToggle");
  const navLinks = $("#navLinks");
  menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });

  const sections = $$("section[id]");
  const linkEls = $$("#navLinks a");
  function onScroll() {
    const y = window.scrollY;
    navbar.classList.toggle("scrolled", y > 20);
    $("#toTop").classList.toggle("show", y > 400);
    let current = "";
    sections.forEach((s) => {
      if (y >= s.offsetTop - 120) current = s.id;
    });
    linkEls.forEach((a) =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + current),
    );
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* -------- SCROLL TO TOP -------- */
  $("#toTop").addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
})();
