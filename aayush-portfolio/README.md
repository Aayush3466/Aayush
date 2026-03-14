# Aayush Adhikari — Portfolio

A professional dark-theme portfolio website built with HTML, CSS, and vanilla JavaScript.

---

## 📁 Project Structure

```
aayush-portfolio/
├── index.html              ← Main page (edit content here)
├── css/
│   └── style.css           ← All styles (edit design here)
├── js/
│   └── main.js             ← Carousel, EmailJS, animations
├── assets/
│   └── images/
│       ├── photo1.jpg      ← Add your photos here
│       ├── photo2.jpg
│       └── photo3.jpg
└── README.md
```

---

## ✅ Quick Setup Checklist

### 1. Add Your Photos
Drop your photos into `assets/images/` as `photo1.jpg`, `photo2.jpg`, `photo3.jpg`.  
Then in `index.html`, find each `<!-- Photo 1 -->` block and replace the placeholder div:

```html
<!-- BEFORE -->
<div class="photo-placeholder">...</div>

<!-- AFTER -->
<img src="assets/images/photo1.jpg" alt="Aayush Adhikari" />
```

### 2. Update Your Links
Search for `★ REPLACE` in `index.html` — every link placeholder is marked.
- Research paper links → `href="#"` → paste your IEEE/arXiv URL
- Project links → `href="#"` → paste your live site or GitHub URL
- Achievement links → paste your certificate/award URL
- Contact info → update email, LinkedIn, GitHub URLs

### 3. Setup EmailJS (Contact Form → Gmail)
1. Go to [https://emailjs.com](https://emailjs.com) and sign up (free tier is enough)
2. Click **Add New Service** → choose **Gmail** → Connect your Gmail account → copy the **Service ID**
3. Click **Email Templates** → Create Template → set up fields:
   ```
   From: {{from_name}} <{{reply_to}}>
   Subject: {{subject}}
   Body: {{message}}
   ```
   Copy the **Template ID**
4. Go to **Account → API Keys** → copy your **Public Key**
5. Open `js/main.js` and replace the 3 values at the top:
   ```js
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // ← paste here
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // ← paste here
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // ← paste here
   ```

### 4. Personalize Contact Info
In `index.html`, update:
- Your email address (in the contact section)
- Your LinkedIn URL
- Your GitHub URL

---

## 🚀 Deploying to Vercel (via GitHub)

### Step 1 — Push to GitHub
```bash
# Initialize git in this folder
git init
git add .
git commit -m "Initial portfolio commit"

# Create a new repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/aayush-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub
2. Click **Add New Project**
3. Import your `aayush-portfolio` repository
4. Leave all settings as default (Framework: Other, Root: /)
5. Click **Deploy** — your site will be live in ~30 seconds

### Step 3 — Your Live URL
Vercel gives you a URL like `aayush-portfolio.vercel.app`.  
You can also add a custom domain (e.g. `aayushadhikari.com`) in Vercel project settings.

### Auto-deploy
Every time you `git push`, Vercel automatically rebuilds and redeploys. 🎉

---

## 🎨 Customizations

| What to change       | Where to edit           |
|----------------------|-------------------------|
| Colors / fonts       | `css/style.css` → `:root` variables |
| Section content      | `index.html`            |
| Animations / timing  | `js/main.js`            |
| Email logic          | `js/main.js` → `sendEmail()` |
| Photo carousel count | Add more `.photo-frame` divs + dots in `index.html`, update `totalPhotos` in `js/main.js` |

---

## 🛠 Running Locally

No build step needed. Just open `index.html` in your browser, or use VS Code Live Server:
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**

---

Built with HTML · CSS · Vanilla JS · EmailJS
