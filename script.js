const letters = [
  {
    id: "lonely",
    title: "you feel lonely",
    cardTitle: "Open when you feel lonely",
    icon: "🌙",
    hint: "For the quiet nights",
    body: [
      "Hi, my love.",
      "I know the room can feel too quiet when I am not there, and I know missing someone can make even a normal night feel heavy.",
      "You are not alone in this feeling. I am still yours while I am asleep, while I am away, and while there are miles between us. Nothing about my love switches off just because I cannot answer right now.",
      "Let these words sit beside you until I can. You do not need to be strong for me tonight. Be soft. Breathe. Let yourself be held by the fact that I always come back to you.",
      "Close your eyes for a second and imagine me pulling you into my chest, kissing your forehead, and telling you quietly: I am here. You are loved. You are safe with me."
    ],
    mission: "Find three comforting things near you. Touch each one slowly, take one deep breath, and imagine I chose them to keep you company until I am back."
  },
  {
    id: "sleep-one",
    title: "you can’t sleep",
    cardTitle: "Open when you can’t sleep",
    icon: "☁️",
    hint: "A quiet goodnight",
    audio: "audio/goodnight-one.mp3",
    body: [
      "Hi, sleepy girl.",
      "I know your mind is still awake even though your body is tired. You do not have to solve anything tonight. Nothing important needs an answer before morning.",
      "Let me take care of the thinking for a little while. Your only job is to lie down, loosen your jaw, drop your shoulders, and let the bed carry your weight.",
      "I wish I could run my fingers through your hair until your breathing slowed down. Since I cannot, press play below and let my voice be the closest thing to my arms around you.",
      "You can sleep without waiting for me. I will still love you when you wake up."
    ],
    mission: "Put your phone brightness down, take five slow breaths, and relax one body part at a time—forehead, jaw, shoulders, hands, then legs."
  },
  {
    id: "grumpy",
    title: "you wake up grumpy",
    cardTitle: "Open when you wake up grumpy",
    icon: "☀️",
    hint: "A softer morning",
    body: [
      "Good morning, grumpy baby.",
      "You are allowed to wake up annoyed, tired, quiet, or not ready for the world. You do not owe anyone sunshine before your heart catches up.",
      "I still adore you exactly like this. You do not become difficult to love just because your morning started badly.",
      "Move slowly. Drink something. Do not decide what kind of day this will be in the first ten minutes.",
      "Come back to me when you are ready. I will be gentle with you."
    ],
    mission: "Drink a few sips of water, stretch both arms above your head, and choose one tiny thing you want to make easier for yourself today."
  },
  {
    id: "miss-one",
    title: "you miss me",
    cardTitle: "Open when you miss me",
    icon: "🤍",
    hint: "A piece of me",
    body: [
      "I miss you too.",
      "Maybe not in this exact second because I might be asleep or busy, but there is always a part of me reaching toward you.",
      "Missing me does not mean I am far from your heart. It means we made something worth feeling the absence of.",
      "Think of the way I look at you when no one else is around. That look still belongs to you.",
      "Keep me with you until I can be there properly."
    ],
    mission: "Choose one memory of us and replay it slowly from the beginning. Notice one small detail you usually forget."
  },
  {
    id: "crying",
    title: "you’re crying",
    cardTitle: "Open when you’re crying",
    icon: "🌧️",
    hint: "You can fall apart here",
    body: [
      "Come here, baby.",
      "You do not need to stop crying before you read this. You do not need to explain yourself clearly. You are allowed to hurt without making it neat.",
      "I am not disappointed in you. I am not tired of your feelings. I do not think you are too much.",
      "Let the tears come. I would rather know your real heart than have you hide it from me.",
      "Imagine my hand on the back of your neck and my voice telling you: take your time. I am not going anywhere."
    ],
    mission: "Wash your face with cool water, wrap yourself in something soft, and name the feeling in one word without judging it."
  },
  {
    id: "fight",
    title: "we had a fight",
    cardTitle: "Open if we had a fight",
    icon: "🕊️",
    hint: "Love is still here",
    body: [
      "We may be hurt or angry right now, but I need you to remember this: the argument is not bigger than my love for you.",
      "Even when I need space, I am not abandoning you. Even when my words come out wrong, I am still choosing us.",
      "You do not have to panic and fix everything immediately. We can calm down, understand each other, and return to the same side.",
      "Please hold onto the version of me who wrote this while loving you calmly.",
      "I want resolution, not distance. I want you, not victory."
    ],
    mission: "Write one sentence about what hurt you and one sentence about what you need. Keep both simple and honest for when we talk."
  },
  {
    id: "sad",
    title: "you’re sad",
    cardTitle: "Open when you’re sad",
    icon: "🫧",
    hint: "No pretending required",
    body: [
      "You do not have to cheer up for me.",
      "I know sadness sometimes arrives without asking and sits heavily on everything. I will not rush you out of it.",
      "You are still lovable when you are quiet. You are still beautiful when your eyes are tired. You are still my girl when you have nothing cheerful to give.",
      "Let today be smaller. Survive it gently instead of forcing yourself to conquer it.",
      "I am proud of you for being here."
    ],
    mission: "Choose the easiest comfort available: a warm drink, a shower, a blanket, a snack, or one comforting video. Only one is enough."
  },
  {
    id: "bored",
    title: "you’re bored",
    cardTitle: "Open when you’re bored",
    icon: "🎲",
    hint: "A tiny distraction",
    body: [
      "Hi, bored baby.",
      "Since I am not there to annoy you personally, this letter has to do the job.",
      "Consider this your permission to do something pointless and fun. Not everything has to be useful, productive, or impressive.",
      "I hope you find one small thing that makes the next ten minutes feel lighter.",
      "And yes, you are still cute when you are dramatically bored."
    ],
    mission: "Set a ten-minute timer and do one random thing: make a silly photo edit, reorganize five photos, doodle us, or create a ridiculous ranking of our memories."
  },
  {
    id: "miss-two",
    title: "you really miss me",
    cardTitle: "Open when you miss me",
    icon: "💌",
    hint: "For the stronger ache",
    body: [
      "So you opened the second one.",
      "That means you probably miss me more than the first letter could hold.",
      "I wish I could appear beside you the moment you needed me. Until then, remember that distance is only where our bodies are. It is not where our love is.",
      "You are part of my ordinary thoughts, my plans, my comfort, and the future I picture without even trying.",
      "Missing me is temporary. Being loved by me is not."
    ],
    mission: "Send me one message for later beginning with: “When you wake up, remind me…” It can be sweet, silly, or honest."
  },
  {
    id: "overthinking",
    title: "you’re overthinking",
    cardTitle: "Open when you’re overthinking",
    icon: "💭",
    hint: "Come back to now",
    body: [
      "Your mind is trying to protect you by imagining every possible ending, but you do not need to live through things that have not happened.",
      "Read this slowly: you are not in trouble with me. You do not have to guess what I mean. You do not have to prepare for losing me.",
      "When there is something to talk about, we will talk. When reassurance is needed, I will give it.",
      "For this moment, trust what I have shown you—not what fear is inventing.",
      "Come back to what is real: I love you, and we are okay enough to handle the next thing together."
    ],
    mission: "Write two columns: “What I know” and “What I’m imagining.” Put each thought in the right place, then only respond to what you actually know."
  },
  {
    id: "sleep-two",
    title: "you still can’t sleep",
    cardTitle: "Open when you can’t sleep",
    icon: "🌌",
    hint: "For the later hours",
    audio: "audio/goodnight-two.mp3",
    body: [
      "Still awake?",
      "Then stay with me here for a few minutes. No scrolling, no replaying conversations, no checking the time again.",
      "Pretend I am lying beside you, facing you, speaking quietly so the room does not feel empty.",
      "You are safe to stop thinking. Morning will come whether you stay alert or rest, so let it find you resting.",
      "Press play if you want my voice. You do not have to fall asleep immediately. Just let yourself become a little softer."
    ],
    mission: "Turn your pillow to the cool side, unclench your hands, and count backward from 30 while breathing out longer than you breathe in."
  },
  {
    id: "reassurance",
    title: "you need reassurance",
    cardTitle: "Open when you need reassurance",
    icon: "🫂",
    hint: "Read this twice",
    body: [
      "Listen to me, my love.",
      "I choose you. I am not looking for someone better. You do not need to perform a perfect version of yourself to keep me.",
      "You are allowed to need reassurance. Asking for love does not make you needy, weak, or difficult.",
      "My feelings do not disappear when I am tired, quiet, busy, or asleep. Silence is not rejection. Distance is not replacement.",
      "You are mine in the softest sense of the word, and I am yours because I want to be."
    ],
    mission: "Place your hand over your chest and say out loud: “I am loved even when I feel unsure.” Repeat it three times, slowly."
  }
];

const hugMessages = [
  "Come here, baby. You do not have to carry everything alone right now.",
  "I am holding you close until your body remembers that it is safe to soften.",
  "You can rest here for a while. Nothing is expected from you in this moment.",
  "Let your shoulders drop. I have you, and you do not need to explain anything.",
  "This hug is warm, quiet, and as long as you need it to be.",
  "Imagine my arms around you and my cheek resting gently against your head.",
  "You are safe with me, even on the days when your heart feels heavy.",
  "I would pull you closer, kiss your forehead, and stay until you felt calmer.",
  "You do not have to be strong right now. Let me hold the softer parts of you.",
  "Stay here with me for one slow breath. You are loved exactly as you are.",
  "I am wrapping you in the kind of hug that makes the whole world go quiet.",
  "Nothing needs fixing this second. Just let yourself be held.",
  "I am here, close to you in every way I can be until I can hold you properly.",
  "You can melt into my arms and leave the worrying outside for a little while.",
  "This is your reminder that you are deeply loved, even when you feel unsure.",
  "I would hold your face, kiss your forehead, and tell you that we are okay.",
  "Come closer. There is room for every feeling you have inside this hug.",
  "You are not too much. You never have to make yourself smaller to be held by me.",
  "Take one deep breath and imagine me pulling you gently against my chest.",
  "I am not going anywhere. You can relax into this moment with me.",
  "Let this hug carry the weight for you until you feel a little lighter.",
  "I wish I could hold you right now, so let these words be my arms around you.",
  "You deserve tenderness tonight, especially from yourself and always from me.",
  "I am holding you with no questions, no pressure, and no rush to feel better.",
  "Close your eyes for a second. I am right beside you, holding you carefully.",
  "You are my love, and I would choose to comfort you every single time.",
  "Let yourself breathe. You are safe, wanted, and very loved here.",
  "I am giving you the softest hug and keeping you close until the ache passes.",
  "You do not need the right words. Just come here and let me love you quietly.",
  "This hug says everything I cannot say while I am away: I love you, and I am here."
];

function toTitleCase(text) {
  return text.replace(/\b\w/g, (character) => character.toUpperCase());
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function renderHome() {
  const grid = document.getElementById("lettersGrid");
  if (!grid) return;

  letters.forEach((letter) => {
    const link = document.createElement("a");
    link.className = "letter-card";
    link.href = `letter.html?id=${encodeURIComponent(letter.id)}`;
    link.innerHTML = `
      <span class="letter-icon" aria-hidden="true">${letter.icon}</span>
      <span class="card-open-when">OPEN WHEN</span>
      <span class="card-description">${toTitleCase(letter.title).toUpperCase()}</span>
    `;
    grid.appendChild(link);
  });

  const button = document.getElementById("hugButton");
  const result = document.getElementById("hugResult");

  button.addEventListener("click", () => {
    result.innerHTML = `<span class="hug-pop"><strong>🫂</strong><span>${randomItem(hugMessages)}</span></span>`;
  });
}

function renderLetter() {
  const title = document.getElementById("letterTitle");
  if (!title) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || letters[0].id;
  const letter = letters.find((item) => item.id === id) || letters[0];

  document.title = letter.cardTitle;
  title.textContent = letter.title;

  const body = document.getElementById("letterBody");
  body.innerHTML = letter.body.map((paragraph) => `<p>${paragraph}</p>`).join("");

  document.getElementById("missionText").textContent = letter.mission;

  setupAudio(letter);
}

function setupAudio(letter) {
  if (!letter.audio) return;

  const section = document.getElementById("audioSection");
  const audio = document.getElementById("voiceNote");
  const button = document.getElementById("audioButton");
  const symbol = button.querySelector(".audio-symbol");
  const text = button.querySelector(".audio-text");
  const status = document.getElementById("audioStatus");

  section.hidden = false;
  audio.src = letter.audio;

  button.addEventListener("click", async () => {
    if (audio.paused) {
      try {
        await audio.play();
        symbol.textContent = "❚❚";
        text.textContent = "Pause my voice message";
        status.textContent = "";
      } catch {
        status.textContent = "Add your MP3 file to the audio folder first.";
      }
    } else {
      audio.pause();
      symbol.textContent = "▶";
      text.textContent = "Play my voice message";
    }
  });

  audio.addEventListener("ended", () => {
    symbol.textContent = "▶";
    text.textContent = "Play my voice message again";
  });

  audio.addEventListener("error", () => {
    status.textContent = "Your voice note has not been added yet. See the audio folder instructions.";
  });
}


function setupBackgroundMusic() {
  const audio = document.getElementById("backgroundMusic");
  const button = document.getElementById("musicToggle");
  if (!audio || !button) return;

  audio.volume = 0.22;
  let hasStarted = false;

  const showPlay = () => {
    button.textContent = "▶";
    button.setAttribute("aria-label", "Play background music");
    button.title = "Play background music";
  };

  const showMute = () => {
    button.textContent = "♪";
    button.setAttribute("aria-label", "Mute background music");
    button.title = "Mute background music";
  };

  const showMuted = () => {
    button.textContent = "×";
    button.setAttribute("aria-label", "Unmute background music");
    button.title = "Unmute background music";
  };

  showPlay();

  button.addEventListener("click", async (event) => {
    event.stopPropagation();

    if (!hasStarted) {
      try {
        audio.muted = false;
        await audio.play();
        hasStarted = true;
        showMute();
      } catch (_) {
        showPlay();
      }
      return;
    }

    audio.muted = !audio.muted;
    if (audio.muted) {
      showMuted();
    } else {
      try {
        await audio.play();
      } catch (_) {}
      showMute();
    }
  });
}

setupBackgroundMusic();
renderHome();
renderLetter();
