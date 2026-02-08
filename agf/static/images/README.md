# Image Assets for AGF Project Page

This directory should contain the following figures extracted from the papers:

## From Paper 1 (arXiv:2506.06489) - "Alternating Gradient Flows"

1. **paper1_overview.png** - Overview of AGF dynamics and alternating optimization (Figure 1)
2. **paper1_convergence.png** - Convergence behavior showing phase transitions (Figure 2)
3. **paper1_feature_dynamics.png** - Feature alignment dynamics during training (Figure 3)
4. **paper1_phase_transitions.png** - Phase transitions in the loss landscape (Figure 4)
5. **paper1_transformer_loss.png** - Transformer loss curves on modular arithmetic (Figure 5a)
6. **paper1_transformer_features.png** - Feature learning in transformer attention (Figure 5b)
7. **paper1_agf_vs_gf.png** - AGF approximation vs full gradient flow comparison (Figure 6)
8. **paper1_linear_networks.png** - Implicit regularization in linear networks (Figure 7)

## From Paper 2 (arXiv:2602.03655) - "Sequential Group Composition"

9. **paper2_task.png** - Sequential group composition task setup (Figure 8)
10. **paper2_staircase.png** - Characteristic staircase loss pattern (Figure 9)
11. **paper2_cyclic.png** - Results on cyclic groups Z₈ (Figure 10a)
12. **paper2_dihedral.png** - Results on dihedral groups D₄ (Figure 10b)

## How to Extract Figures from Papers

### Option 1: Download from arXiv Source
1. Go to the arXiv page for each paper
2. Click "Download source" (not PDF)
3. Extract the .tar.gz or .zip file
4. Look for figure files in the source directory (usually .pdf, .png, or .eps)
5. Convert to PNG if needed using ImageMagick: `convert figure.pdf figure.png`

### Option 2: Extract from PDF
1. Download the PDF version of each paper
2. Use a PDF extraction tool:
   - **pdfimages** (command line): `pdfimages -png paper.pdf output`
   - **Adobe Acrobat**: File > Export To > Image > PNG
   - **Preview (Mac)**: Select figure area, Copy, Paste into image editor
   - **Online tools**: Use pdf2png converters
3. Crop and save individual figures

### Option 3: Screenshot from PDF
1. Open PDF in a viewer at high zoom (200-300%)
2. Take screenshots of individual figures
3. Crop to remove margins
4. Save as PNG

## Image Specifications

- **Format**: PNG (preferred) or JPG
- **Resolution**: 300 DPI recommended for print quality, 150 DPI minimum
- **Size**: Width 800-1200px for full-width figures, 400-600px for side-by-side
- **Naming**: Use exact filenames listed above (lowercase, underscores)

## Placeholder Images

Until real figures are added, the webpage will show broken image icons. You can create temporary placeholders using:

```bash
# Create simple placeholder images (requires ImageMagick)
convert -size 800x600 xc:lightgray -pointsize 30 -draw "text 250,300 'Figure Placeholder'" paper1_overview.png
```

Or use online placeholder services temporarily.

## Current Status

- [ ] paper1_overview.png
- [ ] paper1_convergence.png
- [ ] paper1_feature_dynamics.png
- [ ] paper1_phase_transitions.png
- [ ] paper1_transformer_loss.png
- [ ] paper1_transformer_features.png
- [ ] paper1_agf_vs_gf.png
- [ ] paper1_linear_networks.png
- [ ] paper2_task.png
- [ ] paper2_staircase.png
- [ ] paper2_cyclic.png
- [ ] paper2_dihedral.png

Check off items as you add them to this directory.
