# Obstacle Avoiding Bot.MIS — Flask Website

A complete multi-page project-showcase website for the "Obstacle Avoiding Bot.MIS"
(Project Name: Roht Wheeler) Arduino UNO robotics project, built with Flask, HTML,
CSS, and JavaScript in a black-and-neon-green robotics theme.

## Project Structure

```
obstaclebot/
├── app.py
├── requirements.txt
├── templates/
│   ├── base.html
│   ├── index.html          (Home)
│   ├── about.html          (About The Project — includes BOM table)
│   ├── components.html     (Components and Coding on it)
│   ├── preface.html        (Preface)
│   ├── creds.html          (Creds)
│   └── 404.html
└── static/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js
    └── Images/
        ├── bot_main.jpeg
        ├── components.jpeg
        ├── circuit_diagram.jpeg
        ├── member1.jpg
        ├── member2.jpg
        ├── member3.jpg
        ├── member4.jpg
        ├── member5.jpg
        └── member6.jpg
```

Note the capital `Images` folder name — it matches the exact filenames you
specified (`Images/bot_main.jpeg`, etc.). Keep the capitalization exactly as-is;
on Linux/macOS servers, folder and file names are case-sensitive, so
`images/` and `Images/` are treated as different paths.

## Setup Instructions

1. Create and activate a virtual environment (optional but recommended):
   ```
   python -m venv venv
   venv\Scripts\activate      (Windows)
   source venv/bin/activate   (macOS/Linux)
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Run the app:
   ```
   python app.py
   ```

4. Open your browser at:
   ```
   http://127.0.0.1:5000/
   ```
   or the short branded alias:
   ```
   http://127.0.0.1:5000/rohtwheeler
   ```
   Both URLs render the exact same Home page.

## Branding Notes

- **Floating tag:** The Home page shows a small fixed-position tag in the
  top-right corner reading `#infosolution@RohtWheeler.Mis`, styled in a
  subtle neon-green monospace font. It's defined in `templates/index.html`
  and styled in `.floating-brand-tag` inside `static/css/style.css`.
- **Short URL:** In `app.py`, the `home()` view function is registered with
  two `@app.route()` decorators — `"/"` and `"/rohtwheeler"` — so visiting
  either URL loads the Home page. This keeps a clean, valid URL (no special
  characters, since `#` and `@` are not legal in URL paths) while still
  reflecting the "RohtWheeler" identity in the address bar.
- **Project name callout:** At the bottom of the BOM table on the About page,
  after the Grand Total row, there's a styled callout box reading
  **"Project Name: Roht Wheeler"**.

## Notes

- All placeholder images in `static/Images/` are generated stand-ins matching
  the black-and-green theme so the site renders correctly out of the box.
  Replace them with your real robot photos, circuit diagram, and team photos
  any time — just keep the exact same filenames listed above.
- No contact form was included since Page 4 and Page 5 in your final spec were
  "Preface" and "Creds," not "Contact Us." Let me know if you'd like a contact
  page added as a 6th page.
