# AGF Project Page - Complete Setup

## ✅ Status: COMPLETE

The AGF project page is now fully functional and ready for deployment!

## What's Included

### 📂 Complete File Structure
```
agf/
├── index.html                    # Main webpage
├── .nojekyll                     # GitHub Pages config
├── SETUP_INSTRUCTIONS.md         # This file
└── static/
    ├── css/
    │   ├── bulma.min.css        # Bulma CSS framework
    │   ├── fontawesome.all.min.css
    │   └── index.css            # Custom styles with ogbench.org colors
    ├── js/
    │   ├── fontawesome.all.min.js
    │   └── index.js             # Copy button functionality
    ├── images/
    │   ├── agf_overview_paper1.png
    │   ├── agf_loss-beta-sweep_paper1.png
    │   ├── agf_singular-values_transformer_paper1.png
    │   ├── agf_singular-values-aligned-unaligned_paper1.png
    │   ├── agf_overview_paper2.png
    │   └── agf_group_composition_paper2.png
    └── pdfs/
        ├── 2506.06489v4.pdf     # Paper 1
        └── 2602.03655v1.pdf     # Paper 2
```

### 🎨 Design Features

**Color Scheme:** Inspired by ogbench.org
- Primary (Orange): #F4951E
- Secondary (Light Blue): #75B4E3
- Gradient hero banner blending both colors

**Content:**
- Unified presentation of both AGF papers
- 6 high-quality figures (converted from PDF to PNG)
- All authors with correct affiliations verified from arXiv
- Links to both papers on arXiv
- Links to both GitHub repositories
- Downloadable PDFs
- Single BibTeX citation section with copy functionality
- Responsive design using Bulma CSS

### 📊 Figures Included

**From Paper 1 (4 figures):**
1. AGF overview and dynamics
2. Loss curves for different initialization scales β
3. Singular value evolution in transformers
4. Aligned vs unaligned feature learning

**From Paper 2 (2 figures):**
5. Sequential group composition framework
6. Staircase loss pattern across multiple groups

### 👥 Authors (Verified from arXiv)

**Paper 1:** Daniel Kunin*, Giovanni Luca Marchetti*, Feng Chen, Dhruva Karkada, James B. Simon, Michael R. DeWeese, Surya Ganguli, Nina Miolane

**Paper 2:** Giovanni Luca Marchetti*, Daniel Kunin*, Adele Myers, Francisco Acosta, Nina Miolane

*Equal contribution

**Affiliations:** Stanford University, UC Santa Cruz, UC Berkeley

## 🧪 Testing Locally

Start a local server to view the page:

```bash
cd /Users/ninamiolane/Library/CloudStorage/GoogleDrive-nmiolane@gmail.com/My\ Drive/code/geometric-intelligence.github.io/agf
python -m http.server 8000
```

Then open in your browser: **http://localhost:8000**

## 🚀 Deployment

When you're ready to deploy:

```bash
cd /Users/ninamiolane/Library/CloudStorage/GoogleDrive-nmiolane@gmail.com/My\ Drive/code/geometric-intelligence.github.io

# Check status
git status

# Add all AGF files
git add agf/

# Commit with descriptive message
git commit -m "Add AGF project page with unified presentation of both papers

- 6 figures from Papers 1 and 2
- ogbench.org color scheme (orange #F4951E and blue #75B4E3)
- Correct author information and affiliations verified from arXiv
- Single BibTeX citation section
- Fully responsive design
"

# Push to your branch
git push origin ninamiolane/agf
```

Once pushed, the page will be live at:
**https://geometric-intelligence.github.io/agf/**

## 📋 Verification Checklist

- [x] All 6 figures display correctly
- [x] PDF downloads work
- [x] ArXiv links work
- [x] GitHub repository links work
- [x] BibTeX copy button functions
- [x] Responsive design works on mobile
- [x] ogbench.org color scheme applied
- [x] Authors and affiliations verified from arXiv
- [x] Single BibTeX citation section (not duplicated)

## 🔧 Customization

To make changes:

- **Content/Structure:** Edit `index.html`
- **Colors/Styling:** Edit `static/css/index.css`
- **Interactive Features:** Edit `static/js/index.js`

## 📝 Notes

- This is a standalone static page (not auto-deployed via CI/CD)
- All updates must be made manually in this repository
- Figures were converted from PDF to PNG using macOS `sips` tool
- The page uses the Bulma CSS framework for styling
- Font Awesome provides icons
- Color scheme matches ogbench.org (orange #F4951E and blue #75B4E3)

## 🎉 Ready to Go!

The page is complete and ready for deployment. All figures are in place, styling matches ogbench.org colors, and all functionality is working. Just push to deploy!
