const workouts = [
  {
    id: "day-1",
    title: "Day 1 — Upper Strength",
    intro: "A V-taper focused upper-body day meant for pulling strength, pressing power, and shoulder health.",
    image: "assets/day-1.svg",
    alt: "Illustration of upper body workout",
    warmup: null,
    exercises: [
      {
        name: "Pull-Ups or Lat Pulldown",
        image: "assets/pull-ups-lat-pulldown.svg",
        meta: "4 × 6–8",
        duration: "15 min",
        calories: "300 kcal",
        details: ["Tempo: 2-1-2", "RPE: 7–8", "Cue: chest up, elbows down, avoid swinging", "Purpose: build width and support a V-taper"],
        howTo: ["Grip shoulder-width (or slightly wider)", "Initiate by retracting the shoulders and driving elbows down", "Keep chest up and avoid kipping; control the descent"],
      },
      {
        name: "Dumbbell Incline Press",
        image: "assets/dumbbell-incline-press.svg",
        meta: "4 × 6–8",
        duration: "15 min",
        calories: "350 kcal",
        details: ["Tempo: 3-1-2", "Cue: neutral grip if shoulders feel tight", "Purpose: chest strength without barbell discomfort"],
        howTo: ["Set bench to 20–30° incline", "Keep scapula packed and press the dumbbells up and slightly together", "Lower under control to chest level and drive up"],
      },
      {
        name: "Barbell Row or Cable Row",
        image: "assets/barbell-row-cable-row.svg",
        meta: "4 × 6–8",
        details: ["Tempo: 2-1-2", "Cue: pull to lower ribs, keep spine neutral", "Purpose: upper-back thickness and posture"],
        howTo: ["Hinge at the hips with a neutral spine", "Pull the bar or handle to your lower ribs while squeezing shoulder blades", "Control the eccentric phase and avoid rounding the back"],
      },
      {
        name: "Dumbbell Shoulder Press",
        image: "assets/dumbbell-shoulder-press.svg",
        meta: "3 × 6–8",
        details: ["Cue: do not flare elbows and keep core tight", "Purpose: shoulder mass and V-taper shape"],
        howTo: ["Sit or stand with a tall torso and braced core", "Press dumbbells overhead tracking over the ears", "Avoid flaring elbows and keep a steady tempo"],
      },
      {
        name: "Cable Chest Press",
        image: "assets/Cable-Chest-Press.png",
        meta: "3 × 8–10",
        details: ["Tempo: 3-1-2", "Purpose: chest hypertrophy with joint safety"],
        howTo: ["Set cables at mid-chest height", "Press handles forward with slight elbow bend", "Pause at full extension and control the return"],
      },
      {
        name: "Face Pulls",
        image: "assets/face-pulls.svg",
        meta: "3 × 12–15",
        duration: "10 min",
        calories: "150 kcal",
        details: ["Purpose: shoulder health and posture support"],
        howTo: ["Use a rope at upper-chest height", "Pull the rope to your face while externally rotating the shoulders", "Lead with the elbows and squeeze the rear delts"],
      },
      {
        name: "Dumbbell Curls",
        image: "assets/dumbbell-curls.svg",
        meta: "3 × 10–12",
        details: ["Purpose: biceps growth"],
        howTo: ["Stand tall with elbows fixed at your sides", "Curl the dumbbells with control and avoid swinging", "Squeeze at the top then lower slowly"],
      },
      {
        name: "Rope Triceps Pushdown",
        image: "assets/rope-triceps-pushdown.svg",
        meta: "3 × 10–12",
        details: ["Purpose: triceps strength and arm balance"],
        howTo: ["Use a rope attachment at high pulley", "Keep elbows pinned and extend the rope down and apart", "Control the return and avoid using torso momentum"],
      },
    ],
    notes: ["Keep a steady pace and prioritize control over momentum."],
  },
  {
    id: "day-2",
    title: "Day 2 — Lower Strength",
    intro: "A knee-friendly lower-body day built around posterior-chain strength and controlled quad work.",
    image: "assets/day-2.svg",
    alt: "Illustration of lower body workout",
    warmup: {
      title: "Mandatory Patellar Tendon Warm-Up",
      steps: ["Step-downs — 2 × 10", "TKE (cable or band) — 2 × 15", "Light leg extension — 2 × 15"],
      note: "This helps reduce patellar tendon irritation before the main lifts.",
    },
    exercises: [
      {
        name: "Romanian Deadlift (RDL)",
        image: "assets/romanian-deadlift.png",
        meta: "4 × 6–8",
        details: ["Tempo: 3-1-2", "Cue: push hips back with a slight knee bend", "Purpose: posterior-chain strength without extra knee stress"],
        howTo: ["Hinge at the hips and keep a neutral spine", "Slide the bar or dumbbells down the thighs while keeping a soft knee bend", "Drive hips forward to return and squeeze glutes"],
      },
      {
        name: "Leg Press (Shallow Range)",
        image: "assets/leg-press.svg",
        meta: "3 × 8–10",
        details: ["Cue: feet high and avoid deep flexion", "Purpose: quad stimulus without patellar overload"],
        howTo: ["Place feet higher on the platform to reduce knee shear", "Lower in a controlled shallow range and press without locking the knees", "Breathe and maintain neutral spine"],
      },
      {
        name: "Split Squat (Short Stride)",
        image: "assets/split-squat.png",
        meta: "3 × 8 each leg",
        details: ["Cue: keep shin vertical", "Purpose: balanced quad and glute work"],
        howTo: ["Take a short stance and keep torso upright", "Descend until the front thigh is near parallel while keeping knee over toe", "Drive through the front heel to stand"],
      },
      {
        name: "Hamstring Curl",
        image: "assets/hamstring-curl.svg",
        meta: "3 × 10–12",
        details: ["Cue: slow negative", "Purpose: hamstring strength and knee protection"],
        howTo: ["Control the curl concentrically and emphasize the eccentric lowering", "Avoid lifting hips—keep the pelvis neutral", "Pause briefly at the top for contraction"],
      },
      {
        name: "Glute Bridge",
        image: "assets/glute-bridge.svg",
        meta: "3 × 10",
        details: ["Cue: drive through heels and squeeze glutes", "Purpose: glute activation and reduced knee load"],
        howTo: ["Lie with upper back on bench and feet flat on floor", "Drive hips up by squeezing glutes and pause at the top", "Lower under control"],
      },
      {
        name: "Calf Raises",
        image: "assets/calf-raises.svg",
        meta: "3 × 12–15",
        details: ["Purpose: calf strength and ankle support"],
        howTo: ["Stand with toes on an elevated surface", "Raise up onto the balls of your feet and slowly lower", "Control the descent and squeeze at top"],
      },
    ],
    notes: ["Move deliberately and stop if the knee feels unstable or cranky during any squat variation."],
  },
  {
    id: "rest-day",
    title: "Rest Day — Light Cardio",
    intro: "A recovery day that stays active but keeps the stress low for better recovery and fat loss support.",
    image: "assets/rest.svg",
    alt: "Illustration of rest and recovery",
    exercises: [
      {
        name: "Cycling",
        image: "assets/cycling.svg",
        meta: "20–30 minutes",
        details: ["Intensity: easy to moderate", "Purpose: low-impact conditioning and recovery"],
        howTo: ["Keep cadence steady and effort conversational", "Use low resistance to avoid joint stress", "Keep sessions brief and easy"],
      },
      {
        name: "Rowing",
        image: "assets/rowing.svg",
        meta: "10–15 minutes",
        details: ["Intensity: easy to moderate", "Purpose: gentle cardio without overloading the joints"],
        howTo: ["Drive with the legs then hinge with the hips and finish with the arms", "Keep stroke rate moderate and smooth", "Avoid excessive power that causes breathlessness"],
      },
    ],
    notes: ["Use this day to recover, hydrate well, and keep the body fresh for the next training block."],
  },
  {
    id: "day-3",
    title: "Day 3 — Upper Hypertrophy",
    intro: "A chest-focused upper day that shifts toward volume, shape, and shoulder width.",
    image: "assets/day-3.svg",
    alt: "Illustration of hypertrophy workout",
    exercises: [
      {
        name: "Dumbbell Flat Press",
        image: "assets/dumbbell-flat-press.svg",
        meta: "4 × 8–12",
        details: ["Tempo: 3-1-2", "Cue: neutral grip if needed", "Purpose: chest hypertrophy without barbell pressure"],
        howTo: ["Lie flat and press dumbbells up with a slight arc", "Keep shoulders packed and avoid flaring", "Control the negative and squeeze at top"],
      },
      {
        name: "Cable Fly (High-to-Low)",
        image: "assets/cable-fly.svg",
        meta: "3 × 12–15",
        details: ["Cue: slight elbow bend and squeeze chest", "Purpose: lower chest shaping"],
        howTo: ["Set cables high and bring handles down and together", "Slight elbow bend and focus on chest contraction", "Return under control without dropping shoulders"],
      },
      {
        name: "Seated Row",
        image: "assets/seated-row.svg",
        meta: "4 × 10–12",
        details: ["Cue: pull to belly button", "Purpose: back thickness"],
        howTo: ["Sit tall and brace core", "Pull the handle to your belly while squeezing shoulder blades", "Control the return and avoid leaning back"],
      },
      {
        name: "Lat Pulldown (Wide Grip)",
        image: "assets/lat-pulldown.svg",
        meta: "3 × 10–12",
        details: ["Cue: elbows down and chest up", "Purpose: V-taper width"],
        howTo: ["Use a wide grip and lead with the elbows", "Bring the bar to the upper chest while keeping torso upright", "Control the eccentric and avoid leaning back"],
      },
      {
        name: "Lateral Raises",
        image: "assets/lateral-raises.svg",
        meta: "3 × 12–15",
        details: ["Cue: lead with elbows", "Purpose: shoulder width"],
        howTo: ["Raise dumbbells out to the side with a soft elbow", "Stop at shoulder height and control the descent", "Avoid using momentum—focus on the middle deltoid"],
      },
      {
        name: "Hammer Curls",
        image: "assets/hammer-curls.svg",
        meta: "3 × 10–12",
        details: ["Purpose: biceps and arm thickness"],
        howTo: ["Hold dumbbells neutral and curl with elbows fixed", "Bring weights to shoulder height and lower slowly", "Avoid swinging the torso"],
      },
      {
        name: "Overhead Cable Triceps Extension",
        image: "assets/overhead-cable-triceps-extension.svg",
        meta: "3 × 12–15",
        details: ["Purpose: triceps size and elbow-friendly pressing support"],
        howTo: ["Face away from the cable and take the handle overhead", "Keep elbows pointing up and extend the arms", "Control the negative and avoid flaring the ribs"],
      },
    ],
    notes: ["Focus on feeling the target muscles and maintaining strict form through each rep."],
  },
  {
    id: "day-4",
    title: "Day 4 — Glutes + Legs",
    intro: "A glute-focused leg day that keeps the knee loading low while still training the lower body hard.",
    image: "assets/day-4.svg",
    alt: "Illustration of glute and leg workout",
    exercises: [
      {
        name: "Hip Thrust",
        image: "assets/hip-thrust.png",
        meta: "4 × 8–10",
        details: ["Tempo: 2-1-2", "Cue: chin tucked and ribs down", "Purpose: best glute builder with minimal knee load"],
        howTo: ["Position upper back on bench with feet flat and shoulder blade contact", "Drive hips up by squeezing glutes and pause at the top", "Lower under control and avoid hyperextending the lumbar spine"],
      },
      {
        name: "Romanian Deadlift (Light)",
        image: "assets/romanian-deadlift.png",
        meta: "3 × 8–10",
        details: ["Purpose: posterior-chain emphasis and hip hinge strength"],
        howTo: ["Hinge at hips with a neutral spine, sliding weight down thighs", "Maintain a soft knee and feel stretch in hamstrings", "Return by driving hips forward and squeezing glutes"],
      },
      {
        name: "Cable Kickbacks",
        image: "assets/cable-kickbacks.png",
        meta: "3 × 12–15",
        details: ["Cue: do not arch the back", "Purpose: glute max isolation"],
        howTo: ["Attach an ankle cuff and hinge slightly forward", "Extend the leg back focusing on glute contraction", "Control the return and avoid rotating the hip"],
      },
      {
        name: "Step-Ups (Low Box)",
        image: "assets/step-ups.png",
        meta: "3 × 10 each leg",
        details: ["Cue: drive through heel", "Purpose: functional glute and quad work"],
        howTo: ["Place one foot on low box and press through the heel to stand", "Keep torso tall and avoid pushing off the trailing leg", "Lower with control"],
      },
      {
        name: "Leg Curl",
        image: "assets/leg-curl.svg",
        meta: "3 × 12–15",
        details: ["Purpose: hamstring isolation and knee-friendly leg training"],
        howTo: ["Use seated or prone machine and curl with controlled tempo", "Avoid lifting hips and focus on hamstring squeeze", "Return slowly to full extension"],
      },
      {
        name: "Glute Medius Band Walks",
        image: "assets/glute-medius-band-walks.png",
        meta: "2 × 20 steps",
        details: ["Purpose: hip stability and knee protection"],
        howTo: ["Place mini band above knees and take controlled lateral steps", "Keep tension on the band and maintain slight squat position", "Face forward and avoid collapsing the knees"],
      },
    ],
    notes: ["This is the fourth training day, intentionally placed after Day C to match your rhythm."],
  },
];

const exerciseImageMap = {
  "Pull-Ups or Lat Pulldown": "assets/Lat-Pulldown.png",
  "Dumbbell Incline Press": "assets/Dumbbell-Incline-Press.png",
  "Barbell Row or Cable Row": "assets/Barbell-Row.png",
  "Dumbbell Shoulder Press": "assets/Dumbbell-Shoulder-Press.png",
  "Face Pulls": "assets/Face-Pulls.png",
  "Dumbbell Curls": "assets/Dumbbell-Curls.png",
  "Rope Triceps Pushdown": "assets/Rope-Triceps-Pushdown.png",
  "Romanian Deadlift (RDL)": "assets/Romanian-Deadlift-(RDL).png",
  "Leg Press (Shallow Range)": "assets/Leg-Press-(Shallow-Range).png",
  "Hamstring Curl": "assets/Hamstring-Curl.png",
  "Glute Bridge": "assets/Glute-Bridge.png",
  "Calf Raises": "assets/Calf-Raises.png",
  "Dumbbell Flat Press": "assets/Dumbbell-Flat-Press.png",
  "Cable Fly (High-to-Low)": "assets/Cable-Fly-(High-to-Low).png",
  "Seated Row": "assets/Seated-Row.png",
  "Lat Pulldown (Wide Grip)": "assets/Lat-Pulldown-(Wide-Grip).png",
  "Lateral Raises": "assets/Lateral-Raises.jpg",
  "Hammer Curls": "assets/Hammer-Curls.jpg",
  "Overhead Cable Triceps Extension": "assets/Overhead-Cable-Triceps-Extension.jpg",
  "Hip Thrust": "assets/hip-thrust.png",
  "Cable Kickbacks": "assets/cable-kickbacks.png",
  "Step-Ups (Low Box)": "assets/step-ups.png",
  "Leg Curl": "assets/Hamstring-Curl.png",
  "Glute Medius Band Walks": "assets/glute-medius-band-walks.png",
};

function getExerciseImage(name) {
  return exerciseImageMap[name] || null;
}

const workoutData = workouts.map((day) => ({
  ...day,
  exercises: day.exercises.map((exercise) => ({
    ...exercise,
    image: getExerciseImage(exercise.name) || exercise.image,
  })),
}));

const app = document.getElementById("app");

function renderWorkout(day) {
  return `
    <section id="${day.id}" class="day-phone">
      <div class="day-phone__hero" style="background-image: url('${day.exercises[0]?.image}')">
       <div class="title-overlay">${day.exercises[0]?.name}</div>
        <a class="hero-back" href="index.html" aria-label="Back to home"><img src="assets/back-icon.svg" alt="" width="18" height="18" /></a>
      </div>
      <div class="day-phone__body">
        <div class="day-phone__title-row">
          <div> <p class="eyebrow">${day.id}   ${day.id === "rest-day" ? "Recovery" : "Training"}</p>            
           
          </div>
          <span class="pill">${day.exercises.length} exercises</span>
        </div>
        <p class="day-phone__intro">${day.intro}</p>

        <div class="workout-list">
          ${day.exercises
      .map(
        (exercise, index) => `
                <div class="workout-item" data-name="${exercise.name}" data-index="${index}">
                  <div class="card" role="button" tabindex="0">
                    <div class="thumb" style="background-image: url('${exercise.image}')"></div>
                    <div class="text">
                      <strong>${exercise.name}</strong>
                      <div class="stats">
                        <span>🕒 ${exercise.duration || exercise.meta || "N/A"}</span>
                        <span>🔥 ${exercise.calories || "N/A"}</span>
                      </div>
                    </div>
                  </div>
                  <div class="details">
                    <p>${exercise.details && exercise.details.length ? exercise.details.slice(0, 2).join(" • ") : "Keep good form and move with intention."}</p>
                    <div class="details-actions">
                      <button class="list-action" type="button" aria-label="Open details">›</button>
                    </div>
                  </div>
                </div>
              `,
      )
      .join("")}
        </div>
      </div>
    </section>
  `;
}

if (app) {
  // If this page requests a single day (via `data-day` on <body>), render only that day.
  const requestedDay = document.body && document.body.dataset && document.body.dataset.day;
  if (requestedDay) {
    const single = workoutData.find((d) => d.id === requestedDay);
    app.innerHTML = single ? renderWorkout(single) : `<div class="day-card"><p>Requested day not found.</p></div>`;
  } else {
    app.innerHTML = workoutData.map(renderWorkout).join("");
  }
}

// Create modal container for mobile-friendly preview
const modalBackdrop = document.createElement('div');
modalBackdrop.className = 'modal-backdrop';
modalBackdrop.innerHTML = `
  <div class="modal-card" role="dialog" aria-modal="true">
    <button class="modal-close" aria-label="Close">✕</button>
    <img class="modal-image" src="" alt="" />
    <div class="modal-content">
      <h3 class="modal-title"></h3>
      <div class="modal-meta"></div>
      <div class="modal-details"></div>
      <ol class="modal-howto howto"></ol>
    </div>
  </div>
`;
document.body.appendChild(modalBackdrop);

const modalImage = modalBackdrop.querySelector('.modal-image');
const modalTitle = modalBackdrop.querySelector('.modal-title');
const modalMeta = modalBackdrop.querySelector('.modal-meta');
const modalDetails = modalBackdrop.querySelector('.modal-details');
const modalHowto = modalBackdrop.querySelector('.modal-howto');
const modalClose = modalBackdrop.querySelector('.modal-close');

function openModal(ex) {
  modalImage.src = ex.image || '';
  modalImage.alt = ex.name;
  modalTitle.textContent = ex.name;
  modalMeta.textContent = ex.meta || '';
  modalDetails.innerHTML = ex.details ? ex.details.map(d => `<p>${d}</p>`).join('') : '';
  modalHowto.innerHTML = ex.howTo ? ex.howTo.map(s => `<li>${s}</li>`).join('') : '';
  modalBackdrop.classList.add('open');
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  modalImage.src = '';
}

modalBackdrop.addEventListener('click', (e) => {
  if (e.target === modalBackdrop) closeModal();
});
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// Attach click handlers so tapping a card updates the main image and opens the details panel.
setTimeout(() => {
  document.querySelectorAll('.day-phone').forEach((phone) => {
    const hero = phone.querySelector('.day-phone__hero');
    const items = phone.querySelectorAll('.workout-item');

    items.forEach((item) => {
      const card = item.querySelector('.card');
      const details = item.querySelector('.details');
      const btn = item.querySelector('.list-action');
      const thumb = item.querySelector('.thumb');
      const name = item.getAttribute('data-name');
      const ex = workoutData.flatMap((d) => d.exercises).find((x) => x.name === name);

      const selectWorkout = () => {
        if (!hero || !item) return;
        const currentImage = ex?.image || thumb?.style.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/, '$1') || '';
        hero.style.backgroundImage = `url('${currentImage}')`;
        const titleOverlay = hero.querySelector('.title-overlay');
        if (titleOverlay) titleOverlay.textContent = name;
        items.forEach((entry) => entry.querySelector('.details')?.classList.remove('open'));
        items.forEach((entry) => entry.classList.remove('active'));
        item.classList.add('active');
        details?.classList.add('open');
      };

      card?.addEventListener('click', selectWorkout);
      card?.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectWorkout();
        }
      });

      btn?.addEventListener('click', (event) => {
        event.stopPropagation();
        if (ex) openModal(ex);
      });
    });

    const firstItem = items[0];
    if (firstItem) {
      firstItem.classList.add('active');
      firstItem.querySelector('.details')?.classList.add('open');
    }
  });
}, 60);
