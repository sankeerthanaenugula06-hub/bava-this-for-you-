# 💍 Bava Proposal Website ❤️

## Files
- `index.html` — website pages
- `style.css` — design and animations
- `script.js` — buttons, page navigation, hearts, confetti and email notification

## Run it
Open `index.html` in a browser.

## Publish it with GitHub Pages
1. Create a new GitHub repository.
2. Upload `index.html`, `style.css`, and `script.js`.
3. Open repository **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select the `main` branch and `/root` folder.
6. Save.
7. GitHub will give you a public website URL.

## Email notification
GitHub Pages cannot securely send email by itself. This project supports EmailJS.

1. Create an account at https://www.emailjs.com/
2. Create an Email Service.
3. Create an Email Template.
4. Put these values in `script.js`:
   - `EMAILJS_PUBLIC_KEY`
   - `EMAILJS_SERVICE_ID`
   - `EMAILJS_TEMPLATE_ID`
5. In the EmailJS template, use variables:
   - `{{subject}}`
   - `{{message}}`
   - `{{accepted_at}}`

When "YES, MARDHAL ❤️" is clicked, the website sends:
"User accepted your proposal... ❤️💍"

## Important
Do not put a private email password, API secret, or SMTP password in `script.js`.
