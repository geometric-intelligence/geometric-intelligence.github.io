# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **GitHub Pages deployment repository** for the Geometric Intelligence Lab (https://geometric-intelligence.github.io/). It serves as a centralized documentation portal hosting pre-built static sites for multiple research projects.

**Critical**: This repository contains ONLY compiled artifacts and built documentation. Source code lives in separate repositories (herbrain, polpo, TopoBench, etc.). Do not attempt to modify source files here.

## Repository Structure

The repository hosts documentation for these projects:

- **herbrain/** - Brain imaging analysis (menstrual cycle and pregnancy brain dynamics)
- **polpo/** - Collection of utility tools with API documentation
- **neurometry/** - Neural measurement and analysis tools
- **topobench/** - Benchmarking framework for topological deep learning
- **topobenchmark/** - Variant of TopoBench with additional features
- **topotune/** - Framework for Generalized Combinatorial Complex Neural Networks (custom HTML site)
- **dynamical_phases/** - ICML 2025 paper: "Dynamical phases of short-term memory mechanisms in RNNs"
- **agf/** - Work-in-progress project (currently empty)

Each subdirectory contains a complete standalone static site.

## Deployment Model

This repository uses **automated CI/CD deployment**:

1. Source repositories (e.g., `geometric-intelligence/herbrain`, `geometric-intelligence/polpo`) build their documentation using Sphinx
2. GitHub Actions in source repos automatically push built HTML/assets to this repository
3. Commits follow the pattern: `Deploying to main from @ geometric-intelligence/[PROJECT]@[COMMIT_HASH] 🚀`
4. GitHub Pages serves content from the `main` branch

## Documentation Technology Stack

Most projects use:
- **Sphinx** for Python API documentation
- **PyData Sphinx Theme** for styling
- **nbsphinx** for Jupyter notebook integration
- **MathJax** for mathematical equations (neurometry)

Exception: **topotune/** uses custom HTML with Bulma CSS framework for a polished landing page.

## Working with This Repository

### Viewing Local Changes

Since this is static HTML, you can preview changes locally:

```bash
# Serve any project directory locally
cd herbrain
python -m http.server 8000
# Open http://localhost:8000 in browser

# Or use any other static server
npx serve polpo
```

### Understanding Build Artifacts

Common Sphinx artifacts in each project directory:
- `.buildinfo` - Sphinx build metadata
- `objects.inv` - Cross-reference inventory for intersphinx
- `_static/` - CSS, JavaScript, images
- `_images/` - Generated images from notebooks
- `_generated/` - Auto-generated API documentation
- `.nojekyll` - Tells GitHub Pages to skip Jekyll processing

### Git Workflow

**Main Branch**: Production deployment (served by GitHub Pages)
**Feature Branches**: For testing multi-project updates before deployment

When working on feature branches (like `ninamiolane/agf`):
```bash
# Check current branch
git branch

# View recent deployments
git log --oneline -20

# Each commit references the source repository and commit SHA
```

### Adding a New Project

To add a new project to this documentation portal:

1. **In the source repository**:
   - Set up Sphinx documentation
   - Configure GitHub Actions to build and deploy to this repo
   - Use the same deployment commit message pattern

2. **In this repository**:
   - Create a new subdirectory for the project
   - Ensure it contains `.nojekyll` file
   - Update the main index if there is one

### File Operations

**DO NOT**:
- Edit HTML files directly (they will be overwritten on next deployment)
- Modify `_static/`, `_images/`, or `_generated/` directories
- Delete `.buildinfo` or `objects.inv` files
- Commit local build artifacts (`_doctrees/`, `_sources/` at root level)

**DO**:
- Keep `.nojekyll` files in place
- Preserve the deployment commit message format
- Test changes locally before pushing
- Coordinate multi-project updates on feature branches

## GitHub Pages Configuration

The `.nojekyll` file at the root (and in each subdirectory) tells GitHub Pages:
- Do not process files through Jekyll
- Serve all content as-is
- Respect custom `_` prefixed directories (normally ignored by Jekyll)

## Troubleshooting

### Documentation not updating
- Check the source repository's GitHub Actions workflow
- Verify the build succeeded in the source repo
- Check if the deployment commit reached this repo

### Broken links between projects
- Verify `objects.inv` files exist for intersphinx cross-references
- Check that project URLs follow the pattern: `https://geometric-intelligence.github.io/[project]/`

### Large repository size
- This repo is ~760MB due to Jupyter notebooks and images
- This is expected for a documentation portal with multiple projects
- Individual projects can optimize by compressing images in their source repos
