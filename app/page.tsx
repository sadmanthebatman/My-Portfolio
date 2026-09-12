@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Manrope:wght@400;500;600;700;800&display=swap');

/* ===============================
   PORTFOLIO — WARM EDITORIAL DESIGN
   Display: Fraunces (serif, italic accents)
   Body/UI: Manrope
================================ */

:root{
  --bg:        #17111C;
  --ivory:     #F4ECDD;
  --taupe:     #D3C6B9;
  --brass:     #C68A46;
  --brass-deep:#9C6530;
  --moss:      #7C9473;
  --rose:      #A24B5E;
  --line:      rgba(244,236,221,.08);
  --glass:     rgba(244,236,221,.05);
}

*{
  box-sizing: border-box;
}

html{
  scroll-behavior: smooth;
}

body{
  margin: 0;
  min-height: 100vh;
  font-family: "Manrope", sans-serif;
  color: var(--ivory);
  -webkit-font-smoothing: antialiased;

  background:
    radial-gradient(circle at 8% 8%, rgba(198,138,70,.16), transparent 40%),
    radial-gradient(circle at 92% 15%, rgba(124,148,115,.12), transparent 38%),
    radial-gradient(circle at 50% 100%, rgba(162,75,94,.10), transparent 45%),
    var(--bg);

  overflow-x: hidden;
}

::selection{
  background: var(--brass);
  color: var(--bg);
}

/* Main container */
.portfolio{
  position: relative;
  z-index: 1;
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 9%;
}

/* =====================
   NAVBAR
===================== */
.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  margin-bottom: 90px;
  background: var(--glass);
  border: 1px solid var(--line);
  border-radius: 999px;
  backdrop-filter: blur(20px);
}

.logo{
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 600;
  font-size: 21px;
  letter-spacing: -0.01em;
  display: flex;
  gap: 12px;
  align-items: center;
}

.online{
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--moss);
}

/* =====================
   HERO
===================== */
.hero{
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 70px;
  min-height: 78vh;
  align-items: center;
}

.green{
  font-family: "Fraunces", serif;
  font-style: italic;
  font-weight: 500;
  color: var(--brass);
}

h1{
  font-family: "Fraunces", serif;
  font-weight: 600;
  font-size: clamp(44px, 6vw, 82px);
  line-height: 1.05;
  letter-spacing: -0.02em;
  margin: 22px 0;
}

h1 span{
  font-style: italic;
  font-weight: 500;
  background: linear-gradient(100deg, var(--brass), var(--rose));
  -webkit-background-clip: text;
  color: transparent;
}

h2{
  font-family: "Fraunces", serif;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.desc{
  font-size: 18px;
  line-height: 1.8;
  max-width: 560px;
  color: var(--taupe);
}

/* Buttons */
.buttons{
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 36px;
}

.btn{
  padding: 15px 28px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  font-family: "Manrope", sans-serif;
  font-weight: 700;
  font-size: 15px;
  color: var(--bg);
  background: linear-gradient(135deg, var(--brass), var(--rose));
  box-shadow: 0 18px 40px rgba(198,138,70,.22);
  transition: transform .35s ease, box-shadow .35s ease;
}

.btn:hover{
  transform: translateY(-4px);
  box-shadow: 0 24px 55px rgba(198,138,70,.35);
}

/* =====================
   GLASS CARDS
===================== */
.glass{
  background: linear-gradient(160deg, rgba(244,236,221,.07), rgba(244,236,221,.02));
  border: 1px solid var(--line);
  backdrop-filter: blur(22px);
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(0,0,0,.35);
  transition: transform .4s ease, border-color .4s ease;
}

.glass:hover{
  transform: translateY(-8px);
  border-color: rgba(198,138,70,.45);
}

/* .navbar sets border-radius:999px, but .glass below it in the cascade
   was overriding that with its own 24px — bump specificity so the pill
   shape wins on elements that carry both classes. */
.navbar.glass{
  border-radius: 999px;
}

/* =====================
   SIGNATURE MEDALLION (was hud-core)
===================== */
.hud-core{
  width: 340px;
  height: 340px;
  border-radius: 50%;
  border: 1px solid rgba(244,236,221,.12);
  background: radial-gradient(circle at 32% 28%, rgba(198,138,70,.35), rgba(124,148,115,.12) 60%, transparent 75%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 90px rgba(198,138,70,.22);
  animation: float 7s ease-in-out infinite;
}

.hud-core svg{
  width: 110px;
  height: 110px;
  opacity: .85;
}

@keyframes float{
  50%{ transform: translateY(-18px); }
}

/* Section headings */
.section-title{
  font-family: "Fraunces", serif;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: -0.01em;
  color: var(--ivory);
  margin-top: 130px;
  margin-bottom: 34px;
}

.section-title::after{
  content: "";
  display: block;
  width: 56px;
  height: 3px;
  margin-top: 16px;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--brass), var(--rose));
}

.card{
  padding: 34px;
}

.grid{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 28px;
}

/* Links */
a{
  color: var(--ivory);
  text-decoration: none;
  transition: color .25s ease;
}

a:hover{
  color: var(--brass);
}

/* Accessibility: visible focus */
a:focus-visible,
.btn:focus-visible{
  outline: 2px solid var(--brass);
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce){
  *{
    animation-duration: .001ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .001ms !important;
  }
}

/* Full-page vignette + grain (renders the .cyber-overlay div from layout.tsx) */
.cyber-overlay{
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background:
    radial-gradient(ellipse at center, transparent 45%, rgba(10,7,12,.45) 100%),
    url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='g'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='matrix' values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.02 0'/></filter><rect width='100%25' height='100%25' filter='url(%23g)'/></svg>") repeat;
  mix-blend-mode: overlay;
}

/* Quiet top hairline (was the scanning cyber-line — now a static accent) */
.cyber-scan{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(198,138,70,.5), transparent);
  opacity: .5;
}

/* Mobile */
@media (max-width: 900px){
  .hero{
    grid-template-columns: 1fr;
    text-align: center;
  }

  .buttons{
    justify-content: center;
  }

  h1{
    letter-spacing: -0.01em;
  }

  .desc{
    margin: 0 auto;
  }

  .hud-core{
    width: 240px;
    height: 240px;
  }
}
