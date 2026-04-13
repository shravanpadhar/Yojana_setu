# 🇮🇳 Yojana Setu — योजना सेतु

> **Bridge to Government Schemes** — Discover Central & Maharashtra State Government schemes you're eligible for.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📋 About

**Yojana Setu** is a responsive E-Governance web application that helps Indian citizens discover government welfare schemes they are eligible for. Users input personal attributes — such as age, caste category, gender, income level, and occupation — and the app instantly filters and displays matching schemes from both **Central Government** and **Maharashtra State Government** databases.

### ✨ Key Features

- 🔍 **Smart Eligibility Checker** — Real-time filtering based on 5 personal attributes
- 🏛️ **12+ Government Schemes** — Covers Central & Maharashtra State schemes (2026 data)
- 📱 **Fully Responsive** — Works seamlessly on desktop, tablet, and mobile devices
- 🎨 **Gov.in Inspired Design** — Premium dark theme with Indian tricolor accents
- ⚡ **No Backend Required** — Runs entirely in the browser using Vanilla JavaScript
- 🔄 **Filter Tabs** — Toggle between All / Central / Maharashtra schemes in results
- ✅ **Form Validation** — Visual error states with shake animations
- 🎯 **Interactive Cards** — Hover effects, slide-in animations, and detailed scheme info

---

## 🖼️ Preview

The application features:
- **Tricolor accent bars** (Saffron-White-Green) at the top and bottom
- **Dark navy header** with Devanagari branding (योजना सेतु)
- **Hero section** with animated stats and a CTA button
- **Elegant form** with custom dropdowns, radio buttons, and emoji labels
- **Scheme result cards** with color-coded providers (Saffron for Central, Green for Maharashtra)

---

## 🗂️ Project Structure

```
yojana-setu/
│
├── index.html          # Main HTML structure (295 lines)
├── style.css           # Complete CSS design system & styles (1083 lines)
├── script.js           # Application logic & scheme database (485 lines)
└── README.md           # Project documentation (this file)
```

| File         | Size   | Description                                                                 |
|--------------|--------|-----------------------------------------------------------------------------|
| `index.html` | ~15 KB | Semantic HTML5 structure — header, hero, form, results section, and footer  |
| `style.css`  | ~23 KB | Full design system with CSS custom properties, animations, and responsive breakpoints |
| `script.js`  | ~17 KB | Scheme database (JSON), filtering logic, DOM rendering, and event handlers  |

---

## 🚀 How to Run Locally

1. Download or clone the repository
2. Open `index.html` in any modern web browser
3. That's it! No build tools, no dependencies, no server required.

```bash
# If you cloned the repo:
cd yojana-setu
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5**  | Semantic page structure, accessibility, SEO meta tags |
| **CSS3**   | Custom properties (design tokens), Grid/Flexbox layouts, animations, responsive design |
| **Vanilla JavaScript** | DOM manipulation, form validation, real-time scheme filtering, event handling |
| **Google Fonts** | Outfit (primary) & Noto Sans Devanagari (Hindi text) |

---

## 📊 Schemes Database

The app includes **12 government schemes** covering:

### Central Government Schemes
| Scheme | Eligibility Highlights |
|--------|----------------------|
| PM-Kisan Samman Nidhi | Farmers, income ≤ ₹2L |
| Ayushman Bharat (PMJAY) | All occupations, income ≤ ₹2.5L |
| PM Awas Yojana (EWS/LIG) | Age 18+, income ≤ ₹3L |
| PM Awas Yojana (MIG-I) | Age 18+, income ≤ ₹6L |
| PM Awas Yojana (MIG-II) | Age 18+, income ≤ ₹8L |
| Atal Pension Yojana | Age 18–40, all incomes |
| PM Matritva Vandana Yojana | Females, age 19–45 |

### Maharashtra State Schemes
| Scheme | Eligibility Highlights |
|--------|----------------------|
| Majhi Ladki Bahin Yojana | Females, age 21–65, income ≤ ₹2.5L |
| Mukhyamantri Yuva Karya Prashikshan | Age 18–35, students/unemployed |
| Namo Shetkari Maha Sanman Nidhi | Farmers, all incomes |
| Post-Matric Scholarship | Students, age 16–35, non-General category |
| Indira Gandhi Widow Pension | Females, age 40–79, income ≤ ₹2.5L |

---

## 🎨 Design Highlights

- **Color Palette**: Indian tricolor inspired — Saffron (#FF9933), Navy (#1A1A2E), Green (#138808)
- **Typography**: Outfit font family for English, Noto Sans Devanagari for Hindi
- **Animations**: `fadeInUp`, `fadeInDown`, `cardSlideIn`, `slowSpin` (emblem), shimmer effect on buttons
- **Glassmorphism**: Subtle gradient overlays and radial glows in the hero section
- **Accessibility**: Proper ARIA labels, semantic HTML, keyboard-navigable form

---

## ⚠️ Disclaimer

> This is a **demonstration/educational project**. Scheme data is indicative and based on publicly available information as of 2026. Always verify eligibility on official government portals like [myscheme.gov.in](https://www.myscheme.gov.in) before applying.

---

## 📄 License

This project is open source and available for educational purposes.

---

## 🙏 Acknowledgements

- Government of India — [india.gov.in](https://www.india.gov.in)
- Government of Maharashtra — [maharashtra.gov.in](https://www.maharashtra.gov.in)
- MyScheme Portal — [myscheme.gov.in](https://www.myscheme.gov.in)
- Google Fonts — [Outfit](https://fonts.google.com/specimen/Outfit) & [Noto Sans Devanagari](https://fonts.google.com/noto/specimen/Noto+Sans+Devanagari)

---

<p align="center">
  Made with ❤️ for Digital India 🇮🇳
</p>
