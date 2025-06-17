// Replace with your project details
const SUPABASE_URL = 'https://YOUR_PROJECT.supabase.co';
const SUPABASE_KEY = 'YOUR_SUPABASE_KEY';
const BUCKET = 'public'; // name of your Storage bucket

const fileInput = document.getElementById('file-input');
const previewImg = document.getElementById('preview');
const uploadedLink = document.getElementById('uploaded-link');

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  if (file) {
    previewImg.src = URL.createObjectURL(file);
    previewImg.style.display = 'block';
  }
});

async function uploadFile(file) {
  const filePath = `${Date.now()}-${file.name}`;
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${BUCKET}/${filePath}`, {
    method: 'POST',
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': file.type
    },
    body: file
  });
  if (!res.ok) {
    throw new Error(await res.text());
  }
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${filePath}`;
}

document.getElementById('upload-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = fileInput.files[0];
  if (!file) {
    alert('Select a file first');
    return;
  }
  try {
    const url = await uploadFile(file);
    uploadedLink.innerHTML = `<a href="${url}" target="_blank">View uploaded image</a>`;
  } catch (err) {
    alert('Upload failed: ' + err.message);
  }
});
