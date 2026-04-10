# Mohammad Arham Portfolio

Personal portfolio website for Mohammad Arham, a Python Backend Engineer focused on backend systems, data engineering, and cloud-native delivery.

The site highlights:
- Professional summary and backend-focused positioning
- Impact metrics from real engineering work
- Technical stack across backend, data, cloud, and DevOps
- Work experience with popup detail modals
- Featured projects with filterable categories and popup case-study summaries
- Engineering focus section covering API design, pipelines, and cloud delivery
- Education and contact information

## Tech Stack

- HTML5
- CSS3
- JavaScript
- Boxicons
- Swiper.js
- ScrollReveal

## Project Structure

```text
.
├── index.html
├── assets/
│   ├── css/
│   │   ├── styles.css
│   │   └── swiper-bundle.min.css
│   ├── js/
│   │   ├── main.js
│   │   ├── swiper-bundle.min.js
│   │   ├── mixitup.min.js
│   │   └── scrollreveal.min.js
│   ├── img/
│   ├── pdf/
│   └── favicons/
└── README.md
```

## Main Sections

- `Home`: role, hero image, resume CTA, impact highlights
- `About`: summary and experience snapshot
- `Impact Snapshot`: measurable outcomes from production work
- `Skills`: backend, API, data, cloud, and DevOps stack
- `Work Experience`: modal-based breakdown of engineering contributions
- `Featured Work`: filterable project cards with popup details
- `Engineering Focus`: approach to secure APIs, pipelines, and cloud delivery
- `Academic Snapshot`: degree and coursework
- `Contact`: direct links for email, WhatsApp, and LinkedIn

## Run Locally

This is a static website, so you can open it directly in the browser:

```bash
xdg-open index.html
```

Or serve it locally with a simple static server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customization

You can update the site from these files:

- `index.html`
  Main content, sections, project cards, contact details, and modal content.

- `assets/css/styles.css`
  Layout, spacing, typography, colors, responsiveness, and section styling.

- `assets/js/main.js`
  Modal logic, project filtering, scroll-based nav highlighting, theme toggle, and animations.

- `assets/pdf/arham_resume.pdf`
  Resume linked from the hero section.

- `assets/img/arham.png`
  Main hero image.

## Current Portfolio Focus

The portfolio is tailored for roles such as:

- Python Backend Engineer
- Backend Developer
- Data Engineer
- Cloud / DevOps-focused Backend Engineer

## Notes

- The `Featured Work` section uses custom filtering logic and popup modals.
- The `Work Experience` and `Featured Work` sections both use modal-based interaction patterns.
- If you make layout or script changes, hard refresh the browser to avoid stale cached CSS or JS.
