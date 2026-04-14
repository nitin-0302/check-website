/* ═══════════════════════════════════════════
   RASAYAN PANCHTATVA 2025 – app.js
   KJ Somaiya College · Club React
═══════════════════════════════════════════ */

// ── EVENT DATA ──────────────────────────────
const OFFLINE_EVENTS = [
  {
    id: "green-mind-battle",
    name: "Green Mind Battle",
    subtitle: "Quiz",
    emoji: "🧠",
    type: "offline",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "A thrilling eco-knowledge quiz conducted on Kahoot! Race through riddles, rapid-fire rounds, and mind-twisting environmental trivia.",
    rules: ["Solo participants only", "No discussing or sharing answers", "Conducted on Kahoot app", "Highest score in shortest time wins"],
    tags: ["Solo", "Quiz", "Kahoot"]
  },
  {
    id: "mindscape-17",
    name: "Mindscape 17",
    subtitle: "Memory Challenge",
    emoji: "🔮",
    type: "offline",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Memorize 17 sustainability principles shown in random order in 2 minutes, then write them with correct numbering. Test your focus and sharp recall!",
    rules: ["2 minutes to memorize 17 sustainability rules", "Write them with correct numbering", "Top 5 advance to finals", "No phones or talking allowed"],
    tags: ["Solo", "Memory", "Sustainability"]
  },
  {
    id: "elemental-sharks",
    name: "Elemental Sharks",
    subtitle: "Shark Tank",
    emoji: "🦈",
    type: "offline",
    teamType: "team",
    maxTeam: 3,
    winners: 2,
    desc: "Pitch your original idea related to Panchatatva, General Chemistry, or Sustainability in a 5–8 minute presentation to the judges.",
    rules: ["Teams of 1–3 members", "One original idea per team", "5–8 minutes to pitch", "No copied or existing ideas"],
    tags: ["Team (1–3)", "Pitching", "Innovation"]
  },
  {
    id: "tatva-trail",
    name: "Tatva Trail",
    subtitle: "Minute to Win It",
    emoji: "⚡",
    type: "offline",
    teamType: "team",
    maxTeam: 5,
    winners: 2,
    desc: "A high-energy fast-paced team challenge inspired by the five elements. Complete one-minute elemental tasks requiring quick thinking and coordination.",
    rules: ["Teams of exactly 5 members", "Tasks completed in sequence", "Fastest 5 teams qualify for finals", "All tasks must follow coordinator instructions"],
    tags: ["Team of 5", "Speed", "Elements"]
  },
  {
    id: "eco-forensics",
    name: "Eco Forensics",
    subtitle: "Investigate. Solve. Sustain.",
    emoji: "🔍",
    type: "offline",
    teamType: "team",
    maxTeam: 3,
    winners: 2,
    desc: "Step into the shoes of an environmental detective! Analyze an eco-crime case, uncover violations, and propose sustainable chemical solutions.",
    rules: ["Solo or team of up to 3", "Each team receives an eco-forensic case", "Identify root cause and propose solutions", "Solutions aligned with Panchatatva principles"],
    tags: ["Solo/Team (1–3)", "Case Study", "Green Chemistry"]
  },
  {
    id: "srishti-rahasya",
    name: "Srishti Rahasya",
    subtitle: "Treasure Hunt",
    emoji: "🗺️",
    type: "offline",
    teamType: "team",
    maxTeam: 5,
    winners: 2,
    desc: "Dive into an adventurous quest where every clue uncovers a secret of the natural world. Navigate hidden trails and crack environmental riddles!",
    rules: ["Groups of exactly 5", "Top 10 teams from screening advance", "No unfair practices or misconduct", "Curiosity is your compass!"],
    tags: ["Team of 5", "Adventure", "Clues"]
  },
  {
    id: "atomic-shuffle",
    name: "Atomic Shuffle",
    subtitle: "Chemistry Musical Chairs",
    emoji: "⚛️",
    type: "offline",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Dance while music plays! When it stops, form groups equal to the atomic number of the announced element. Test your periodic table knowledge!",
    rules: ["30–40 players per batch", "Form groups = atomic number of called element", "Fail to form group = eliminated", "No pushing or rough behavior"],
    tags: ["Solo", "Periodic Table", "Fun"]
  },
  {
    id: "kismat-housie",
    name: "Kismat (Housie)",
    subtitle: "Chemistry Bingo",
    emoji: "🎰",
    type: "offline",
    teamType: "solo",
    maxTeam: 1,
    winners: "Multiple",
    desc: "A Panchatatva-inspired chemistry housie where called atomic numbers represent the balance of Earth, Water, Fire, Air, and Space. Let kismat decide!",
    rules: ["Standard housie rules apply", "Atomic numbers called on periodic table cards", "Mark elements as they are announced", "Claim early for bonus!"],
    tags: ["Solo", "Housie", "Fun"]
  }
];

const ONLINE_EVENTS = [
  {
    id: "doodleium",
    name: "Doodleium",
    subtitle: "Doodling Competition",
    emoji: "✏️",
    type: "online",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Unleash your imagination! Illustrate chemical concepts—from electron orbits to Panchatatva—transforming chemistry into vibrant visual art.",
    rules: ["Solo online event", "Digital or handmade doodles", "Theme: Panchatatva / General Chemistry / Sustainability", "Submission: 15 December 2025, 12:00 PM"],
    tags: ["Solo", "Art", "Online", "Submission: Dec 15"]
  },
  {
    id: "eco-vision",
    name: "Eco-Vision",
    subtitle: "Photography Contest",
    emoji: "📸",
    type: "online",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Capture the chemistry of nature! Submit a high-resolution photo showing molecular magic in the environment—diffusion, oxidation, refraction, and more.",
    rules: ["High-resolution photo required", "Theme: Green / Sustainable / General Chemistry", "Mandatory description of photo relevance", "Submission: 15 December 2025, 12:00 PM"],
    tags: ["Solo", "Photography", "Online", "Submission: Dec 15"]
  },
  {
    id: "reel-iemental",
    name: "Reel-iemental",
    subtitle: "Short Reels Competition",
    emoji: "🎬",
    type: "online",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Create 10–30 second creative reels inspired by chemical phenomena. Blend creativity with chemistry—reactions, periodic trends, lab aesthetics, or chemistry humor!",
    rules: ["10–30 seconds duration", "Theme: Panchatatva / General Chemistry / Sustainability", "100% original content required", "Submission: 15 December 2025, 12:00 AM"],
    tags: ["Solo", "Reels", "Online", "Submission: Dec 15"]
  },
  {
    id: "labellab",
    name: "LabelLab",
    subtitle: "Label Designing",
    emoji: "🏷️",
    type: "online",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Design an innovative, eye-catching, and scientifically accurate label for a chemical product (4×8 inches, white bg + black text). Science meets art!",
    rules: ["One chemical from provided list", "4 × 8 inch label size", "White background + Black text", "Submission: 15 December 2025, 12:00 PM"],
    tags: ["Solo", "Design", "Online", "Submission: Dec 15"]
  },
  {
    id: "sustain-a-meme",
    name: "Sustain-a-Meme",
    subtitle: "Meme Making",
    emoji: "😂",
    type: "online",
    teamType: "solo",
    maxTeam: 1,
    winners: 3,
    desc: "Combine humor with high-energy reactions! Create memes highlighting chemical sustainability—renewable energy, green chemistry, biodegradable polymers and more.",
    rules: ["Theme: Panchatatva / General Chemistry / Sustainability", "Respectful, clean, non-offensive content", "Templates allowed but captions must be original", "Submission: 15 December 2025, 12:00 AM"],
    tags: ["Solo", "Memes", "Online", "Submission: Dec 15"]
  }
];

// ── STATE ──────────────────────────────────
let currentStep = 1;
let totalSteps = 4;
let selectedEventData = null;

// ── RENDER EVENTS ──────────────────────────
function renderEvents() {
  renderEventGrid(OFFLINE_EVENTS, "tab-offline", "offline");
  renderEventGrid(ONLINE_EVENTS, "tab-online", "online");
}

function renderEventGrid(events, containerId, type) {
  const grid = document.getElementById(containerId);
  grid.innerHTML = events.map(ev => `
    <div class="event-card" id="card-${ev.id}">
      <div class="event-card-header">
        <span class="event-emoji">${ev.emoji}</span>
        <span class="event-badge ${type}">${type === "online" ? "Online" : "Offline"}</span>
      </div>
      <div class="event-name">${ev.name}</div>
      <div style="font-size:.8rem;color:var(--crimson);font-weight:600;margin-top:-.4rem">${ev.subtitle}</div>
      <div class="event-desc">${ev.desc}</div>
      <div class="event-meta">
        ${ev.tags.map(t => `<span class="event-tag">${t}</span>`).join("")}
        <span class="event-tag">🏆 ${ev.winners} winner${ev.winners > 1 ? "s" : ""}</span>
      </div>
      <button class="btn-primary btn-sm event-card-btn" onclick="openModalForEvent('${ev.id}')">
        Register →
      </button>
    </div>
  `).join("");
}

// ── TABS ──────────────────────────────────
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const tab = btn.dataset.tab;
    document.getElementById("tab-offline").classList.toggle("hidden", tab !== "offline");
    document.getElementById("tab-online").classList.toggle("hidden", tab !== "online");
  });
});

// ── MODAL ─────────────────────────────────
function openModal(eventId) {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  goToStep(1);
  if (eventId) {
    setTimeout(() => {
      const sel = document.getElementById("f-event");
      // Find matching value
      const all = [...sel.options];
      const found = all.find(o => {
        const ev = getEventById(eventId);
        return ev && o.text.startsWith(ev.name);
      });
      if (found) { sel.value = found.value; onEventChange(); }
    }, 50);
  }
}

function openModalForEvent(eventId) {
  openModal(eventId);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.add("hidden");
  document.body.style.overflow = "";
}

function closeModalOnOverlay(e) {
  if (e.target === document.getElementById("modal-overlay")) closeModal();
}

function getEventById(id) {
  return [...OFFLINE_EVENTS, ...ONLINE_EVENTS].find(e => e.id === id);
}

// ── STEPS ─────────────────────────────────
function goToStep(step) {
  currentStep = step;
  document.querySelectorAll(".form-step").forEach(s => {
    s.classList.toggle("active", +s.dataset.step === step);
    s.classList.toggle("hidden", +s.dataset.step !== step);
  });
  document.querySelectorAll(".step").forEach(s => {
    const n = +s.dataset.step;
    s.classList.toggle("active", n === step);
    s.classList.toggle("done", n < step);
  });
  const pct = ((step - 1) / (totalSteps - 1)) * 100;
  document.getElementById("progress-bar").style.width = pct + "%";
}

function nextStep(from) {
  if (from === 1) {
    if (!validateStep1()) return;
  }
  if (from === 2) {
    if (!validateStep2()) return;
    buildTeamFields();
  }
  if (from === 3) {
    if (!validateStep3()) return;
    submitForm();
    return;
  }
  goToStep(from + 1);
}

function prevStep(from) {
  goToStep(from - 1);
}

// ── VALIDATION ────────────────────────────
function setError(field, msg) {
  const input = document.getElementById("f-" + field);
  const err = document.getElementById("err-" + field);
  if (msg) {
    input.classList.add("invalid");
    err.textContent = msg;
  } else {
    input.classList.remove("invalid");
    err.textContent = "";
  }
}

function validateStep1() {
  let ok = true;
  const name = document.getElementById("f-name").value.trim();
  const email = document.getElementById("f-email").value.trim();
  const phone = document.getElementById("f-phone").value.trim();
  const college = document.getElementById("f-college").value.trim();
  const course = document.getElementById("f-course").value.trim();
  const year = document.getElementById("f-year").value;

  if (!name) { setError("name", "Full name is required."); ok = false; } else setError("name", "");
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError("email", "Enter a valid email address."); ok = false; } else setError("email", "");
  if (!phone || !/^\d{10}$/.test(phone)) { setError("phone", "Enter a valid 10-digit phone number."); ok = false; } else setError("phone", "");
  if (!college) { setError("college", "College name is required."); ok = false; } else setError("college", "");
  if (!course) { setError("course", "Course is required."); ok = false; } else setError("course", "");
  if (!year) { setError("year", "Select your year."); ok = false; } else setError("year", "");

  return ok;
}

function validateStep2() {
  const event = document.getElementById("f-event").value;
  const err = document.getElementById("err-event");
  if (!event) { document.getElementById("f-event").classList.add("invalid"); err.textContent = "Please select an event."; return false; }
  document.getElementById("f-event").classList.remove("invalid"); err.textContent = "";
  return true;
}

function validateStep3() {
  let ok = true;
  if (!selectedEventData) return true;
  const max = selectedEventData.maxTeam;
  if (max <= 1) return true; // no team needed

  document.querySelectorAll(".team-inp").forEach((inp, i) => {
    if (i === 0 && !inp.value.trim()) {
      inp.classList.add("invalid");
      ok = false;
    } else {
      inp.classList.remove("invalid");
    }
  });
  if (!ok) alert("Please enter at least the first team member's name.");
  return ok;
}

// ── EVENT CHANGE ──────────────────────────
function onEventChange() {
  const sel = document.getElementById("f-event");
  const card = document.getElementById("event-info-card");
  const content = document.getElementById("event-info-content");
  const val = sel.value;

  if (!val) { card.classList.add("hidden"); selectedEventData = null; return; }

  const [evName] = val.split("|");
  const ev = [...OFFLINE_EVENTS, ...ONLINE_EVENTS].find(e => e.name === evName);
  selectedEventData = ev || null;

  if (ev) {
    card.classList.remove("hidden");
    content.innerHTML = `
      <h4>${ev.emoji} ${ev.name} – ${ev.subtitle}</h4>
      <p style="margin-bottom:.5rem">${ev.desc}</p>
      <ul style="padding-left:1.2rem;line-height:1.9">
        ${ev.rules.map(r => `<li>${r}</li>`).join("")}
      </ul>
    `;
  } else {
    card.classList.add("hidden");
  }
}

// ── BUILD TEAM FIELDS ─────────────────────
function buildTeamFields() {
  const wrap = document.getElementById("team-members-wrap");
  const title = document.getElementById("step3-title");
  const sub = document.getElementById("step3-subtitle");

  wrap.innerHTML = "";

  if (!selectedEventData) {
    title.textContent = "Team Details";
    sub.textContent = "No team needed for this event.";
    return;
  }

  const max = selectedEventData.maxTeam;
  const isSolo = selectedEventData.teamType === "solo";

  if (isSolo || max <= 1) {
    title.textContent = "Almost there!";
    sub.textContent = "This is a solo event. Just hit Submit to complete your registration.";
    return;
  }

  title.textContent = "Team Details";
  sub.textContent = `Add your team member names (up to ${max} members, including yourself).`;

  for (let i = 1; i <= max; i++) {
    const row = document.createElement("div");
    row.className = "team-member-row form-group";
    row.innerHTML = `
      <span class="member-label">${i === 1 ? "You" : "Member " + i}</span>
      <input class="team-inp" type="text" placeholder="${i === 1 ? "Your name (auto-filled)" : "Team member " + i + " name"}" ${i === 1 ? 'id="team-you"' : ""} />
    `;
    wrap.appendChild(row);
  }

  // Auto-fill self
  const youField = document.getElementById("team-you");
  if (youField) {
    const selfName = document.getElementById("f-name").value.trim();
    youField.value = selfName;
    youField.readOnly = true;
    youField.style.background = "var(--sand)";
  }
}

// ── SUBMIT ────────────────────────────────
function submitForm() {
  const teamInputs = [...document.querySelectorAll(".team-inp")]
    .map(i => i.value.trim()).filter(Boolean);

  const entry = {
    id: Date.now(),
    timestamp: new Date().toLocaleString("en-IN"),
    name: document.getElementById("f-name").value.trim(),
    email: document.getElementById("f-email").value.trim(),
    phone: document.getElementById("f-phone").value.trim(),
    college: document.getElementById("f-college").value.trim(),
    course: document.getElementById("f-course").value.trim(),
    year: document.getElementById("f-year").value,
    event: selectedEventData ? selectedEventData.name : document.getElementById("f-event").value.split("|")[0],
    eventType: selectedEventData ? selectedEventData.type : "",
    teamSize: teamInputs.length || 1,
    teamMembers: teamInputs.join(", ") || document.getElementById("f-name").value.trim(),
    payment: document.getElementById("f-payment").value
  };

  // 🚀 SEND DATA TO GOOGLE SHEETS
  fetch("https://script.google.com/macros/s/AKfycbwoMKryZPWraq2okWXds9AtQYbYxBUHOdGrG9YehV6NYVjfKS6shSVzt21NQmtHrIXC/exec", {
    method: "POST",
    body: JSON.stringify(entry)
  })
  .then(res => res.text())
  .then(data => console.log("Saved to Google Sheets"))
  .catch(err => console.error("Error:", err));

  // 💾 SAVE TO LOCAL STORAGE (your existing feature)
  const all = getRegistrations();
  all.push(entry);
  localStorage.setItem("rasayan_registrations", JSON.stringify(all));

  // ✅ SUCCESS MESSAGE
  document.getElementById("success-summary").textContent =
    `${entry.name}, you're registered for "${entry.event}"! The organizers will be in touch via ${entry.email}.`;

  goToStep(4);
  refreshAdmin();
}

  // Show success
  document.getElementById("success-summary").textContent =
    `${entry.name}, you're registered for "${entry.event}"! The organizers will be in touch via ${entry.email}.`;

  goToStep(4);
  refreshAdmin();
}

// ── RESET ─────────────────────────────────
function resetAndRegisterAnother() {
  document.getElementById("reg-form").reset();
  selectedEventData = null;
  document.getElementById("event-info-card").classList.add("hidden");
  document.getElementById("team-members-wrap").innerHTML = "";
  document.querySelectorAll(".err-msg").forEach(e => e.textContent = "");
  document.querySelectorAll(".invalid").forEach(e => e.classList.remove("invalid"));
  goToStep(1);
}

// ── LOCAL STORAGE ─────────────────────────
function getRegistrations() {
  try { return JSON.parse(localStorage.getItem("rasayan_registrations")) || []; }
  catch { return []; }
}

// ── ADMIN ─────────────────────────────────
function toggleAdmin() {
  const panel = document.getElementById("admin-panel");
  panel.classList.toggle("hidden");
  if (!panel.classList.contains("hidden")) refreshAdmin();
}

function refreshAdmin() {
  const data = getRegistrations();
  const tbody = document.getElementById("admin-tbody");
  const empty = document.getElementById("admin-empty");
  document.getElementById("admin-count").textContent = `${data.length} entr${data.length === 1 ? "y" : "ies"}`;

  if (data.length === 0) {
    tbody.innerHTML = "";
    empty.classList.remove("hidden");
    return;
  }
  empty.classList.add("hidden");
  tbody.innerHTML = data.map((r, i) => `
    <tr>
      <td>${i + 1}</td>
      <td><strong>${r.name}</strong><br/><small style="color:var(--text-muted)">${r.email}</small></td>
      <td>${r.college}</td>
      <td>${r.event}<br/><small style="color:var(--text-muted)">${r.eventType}</small></td>
      <td>${r.teamSize}</td>
      <td><span style="font-size:.75rem;padding:.2rem .5rem;border-radius:4px;background:${r.payment === "Paid" ? "rgba(39,174,96,.12)" : "rgba(231,76,60,.1)"};color:${r.payment === "Paid" ? "#27AE60" : "#c0392b"}">${r.payment}</span></td>
      <td style="font-size:.75rem;color:var(--text-muted)">${r.timestamp}</td>
    </tr>
  `).join("");
}

function downloadCSV() {
  const data = getRegistrations();
  if (!data.length) { alert("No registrations to export."); return; }
  const headers = ["#", "Name", "Email", "Phone", "College", "Course", "Year", "Event", "Type", "Team Size", "Team Members", "Payment", "Timestamp"];
  const rows = data.map((r, i) => [
    i + 1, r.name, r.email, r.phone, r.college, r.course, r.year,
    r.event, r.eventType, r.teamSize, r.teamMembers, r.payment, r.timestamp
  ]);
  const csv = [headers, ...rows].map(row => row.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(",")).join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `rasayan-2025-registrations-${Date.now()}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

function clearAllData() {
  if (!confirm("Delete ALL registration data? This cannot be undone.")) return;
  localStorage.removeItem("rasayan_registrations");
  refreshAdmin();
}

// ── NAV HAMBURGER ─────────────────────────
document.getElementById("hamburger").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

// Close mobile nav on link click
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => document.querySelector(".nav").classList.remove("open"));
});

// ── SCROLL ANIMATIONS ─────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = "fadeUp .55s ease both";
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// ── INIT ──────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderEvents();
  refreshAdmin();

  // Observe cards after render
  setTimeout(() => {
    document.querySelectorAll(".event-card, .stat-card").forEach(el => {
      el.style.opacity = "0";
      observer.observe(el);
    });
  }, 100);

  // Phone number – digits only
  document.getElementById("f-phone").addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "").slice(0, 10);
  });
});
