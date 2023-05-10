const baseUrl = 'http://127.0.0.1:3001';
const fileInput = document.querySelector('#fileInput');
const uploadBtn = document.querySelector('#uploadBtn');
let file, totalChunks, uploadId;

// Listen for file input change event
fileInput.addEventListener('change', () => {
  file = fileInput.files[0];
  console.log("file ", file);
  console.log("file.name ", file.name);
});

// Listen for upload button click event
uploadBtn.addEventListener('click', async () => {
  if (!file) {
    return alert('Please select a file');
  }

  uploadBtn.disabled = true;

  try {
    // Start the timer
    const startTime = new Date();

    const formData = new FormData();
    formData.append('file', file);
    const uploadRes = await fetch(`${baseUrl}/upload_parallel`, {
      method: "POST",
      body: formData,
    });
    const { success, data } = await uploadRes.json();
    console.log("file link: ", data);
    if (!success) {
      throw new Error('Error completing upload');
    }

    // End the timer and calculate the time elapsed
    const endTime = new Date();
    const timeElapsed = (endTime - startTime) / 1000;
    console.log('Time elapsed:', timeElapsed, 'seconds');
    alert('File uploaded successfully');
  } catch (err) {
    console.log(err);
    alert('Error uploading file');
  }

  uploadBtn.disabled = false;
});