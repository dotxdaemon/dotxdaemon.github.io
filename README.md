# Cinematography Gallery

This repository contains two sample projects:

1. **Flask Uploader** – a small Flask application for uploading images.
2. **Eleventy Gallery** – a static site built with [Eleventy](https://www.11ty.dev/) that displays images in a Masonry-style grid with lazy-loaded images.

## Setup (Flask Uploader)

```bash
pip install -r requirements.txt
python app.py
```

The Flask app will be available at `http://127.0.0.1:5000/` and stores uploads in the `uploads/` folder.

## Setup (Eleventy Gallery)

```bash
npm install
npm run build   # builds the site to the `_site` directory
npm start       # builds and serves with live reload
```

The generated gallery pulls images from the `images/` folder and displays them in a responsive Masonry grid.
The repository no longer includes example images. Add your own files to the
`images/` directory before building the Eleventy site.
