# Pumla Matokazi — Portfolio

Personal portfolio website for Pumla Matokazi, Cloud & Software Engineer.  
Live at: `https://pumlamatokazi.github.io`

---

## 📁 File Structure

```
portfolio/
├── index.html              ← Main HTML (all sections)
├── README.md               ← This file
└── assets/
    ├── css/
    │   └── style.css       ← All styles
    ├── js/
    │   └── main.js         ← Skill bars, GIF hover, scroll effects
    └── images/
        ├── pumla.jpg               ← Your profile photo (add this)
        ├── kasibridge.gif          ← KasiBridge project GIF (add this)
        ├── kasibridge-static.png   ← KasiBridge static screenshot (add this)
        ├── chatbot.gif             ← Chatbot project GIF (add this)
        ├── chatbot-static.png      ← Chatbot static screenshot (add this)
        ├── dashboard.gif           ← Dashboard project GIF (add this)
        └── dashboard-static.png    ← Dashboard static screenshot (add this)
```

---

## 🚀 How to Deploy (GitHub Pages — Free)

### Step 1 — Create your GitHub repo
1. Go to [github.com](https://github.com)
2. Create a new repository named exactly: `pumlamatokazi.github.io`
3. Set it to **Public**

### Step 2 — Push your files
```bash
# In your portfolio folder:
git init
git add .
git commit -m "init: launch portfolio"
git remote add origin https://github.com/pumlamatokazi/pumlamatokazi.github.io.git
git branch -M main
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** → **Pages**
2. Under "Source" select: **Deploy from a branch**
3. Branch: `main` / Folder: `/ (root)`
4. Click **Save**

Your site will be live at `https://pumlamatokazi.github.io` within 1–2 minutes. ✓

---

## 🖼️ Adding Your Project GIFs & Screenshots

For each project you need **two image files**:
- A **GIF** (plays on hover) — record your screen using tools like [ScreenToGif](https://www.screentogif.com/) (Windows) or [Kap](https://getkap.co/) (Mac)
- A **static PNG** (shown by default)

Save them in `assets/images/` with these exact names:

| Project | GIF | Static PNG |
|---|---|---|
| KasiBridge | `kasibridge.gif` | `kasibridge-static.png` |
| Chatbot | `chatbot.gif` | `chatbot-static.png` |
| Dashboard | `dashboard.gif` | `dashboard-static.png` |

The JavaScript will automatically handle the hover swap — no code changes needed.

---

## 📸 Adding Your Profile Photo

1. Save your photo as `assets/images/pumla.jpg`
2. In `index.html`, find the hero section and replace:
```html
<div class="avatar-placeholder">PM</div>
```
with:
```html
<img src="assets/images/pumla.jpg" alt="Pumla Matokazi" />
```

---

## 🔗 Update Your Links

Open `index.html` and update these placeholders:
- LinkedIn: search for `linkedin.com/in/pumlamatokazi` → replace with your real URL
- GitHub: search for `github.com/pumlamatokazi` → replace with your real URL
- Project "Live Demo" and "GitHub" links in each project card
- CV download: change `assets/pumla-matokazi-cv.pdf` to your actual CV file path

---

## ✏️ Customisation Tips

- **Colours**: Edit CSS variables at the top of `style.css` (`:root { ... }`)
- **Add a project**: Copy one of the `.project-card` blocks in `index.html` and update the content
- **Add a timeline item**: Copy one `.timeline-item` block and update the content
