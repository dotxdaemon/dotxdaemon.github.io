# Cinematography Image Uploader (Static)

This repository contains a minimal static site for uploading images to Supabase Storage. It is designed to be hosted on GitHub Pages or any static hosting provider.

## Setup

1. Open `script.js` and replace `SUPABASE_URL`, `SUPABASE_KEY`, and `BUCKET` with the values from your Supabase project.
2. Ensure the bucket you reference is marked as **public** in Supabase so the uploaded files can be viewed directly.
3. Commit the changes and push to GitHub. GitHub Pages will automatically serve `index.html` from the repository root.

To test locally, simply open `index.html` in your browser.
