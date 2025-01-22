const languageCodes = {
    "English": "en",
    "Spanish": "es",
    "French": "fr",
    "German": "de",
    "Hindi": "hi",
    "Urdu": "ur",
    "Chinese (Simplified)": "zh",
    "Chinese (Traditional)": "zh-Hant",
    "Arabic": "ar",
    "Portuguese": "pt",
    "Russian": "ru",
    "Japanese": "ja",
    "Korean": "ko",
    "Italian": "it",
    "Turkish": "tr",
    "Dutch": "nl"
};

// Populate language codes in sidebar
window.onload = function() {
    const languageCodesDiv = document.getElementById('language-codes');
    Object.entries(languageCodes).forEach(([language, code]) => {
        languageCodesDiv.innerHTML += `<p><strong>${language}:</strong> ${code}</p>`;
    });
}

function updateThumbnail(url) {
    try {
        const videoId = url.split('=')[1];
        const thumbnailUrl = `http://img.youtube.com/vi/${videoId}/0.jpg`;
        document.getElementById('thumbnail').innerHTML =
            `<img src="${thumbnailUrl}" alt="Video Thumbnail">`;
    } catch (error) {
        console.error('Error updating thumbnail:', error);
    }
}

async function getNotes() {
    const youtubeUrl = document.getElementById('youtube_url').value;
    const language = document.getElementById('language').value;

    if (!youtubeUrl) {
        alert('Please enter a YouTube URL');
        return;
    }

    // Show loading indicator
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').innerHTML = '';
    updateThumbnail(youtubeUrl);

    try {
        const response = await fetch('/process_video', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                youtube_url: youtubeUrl,
                language: language
            })
        });

        const data = await response.json();

        if (response.ok) {
            document.getElementById('result').innerHTML =
                `<h2>Detailed Notes:</h2><p>${data.summary}</p>`;
        } else {
            document.getElementById('result').innerHTML =
                `<div class="error">${data.detail}</div>`;
        }
    } catch (error) {
        document.getElementById('result').innerHTML =
            `<div class="error">Error: ${error.message}</div>`;
    } finally {
        document.getElementById('loading').style.display = 'none';
    }
}
