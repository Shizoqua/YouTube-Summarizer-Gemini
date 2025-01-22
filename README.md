# YouTube Summarizer

This project is a simple web app that lets you paste a YouTube video link and get a summary of the video's content. It uses Python and has an easy-to-use design so anyone can try it out.

## What's Inside?

```
youtube_summarizer/
├── requirements.txt          # A list of tools and libraries needed for the project
├── .env                      # File for storing environment variables like API keys
├── static/                   # Folder for design files like CSS and JavaScript
│   ├── css/
│   │   └── styles.css        # The file that makes the web app look nice
│   └── js/
│       └── main.js           # The file that adds interactive features
├── templates/                # Folder for web page templates
│   └── index.html            # The main web page design
└── main.py                   # The main program that runs everything
```

## What You Need Before Starting

Make sure you have these ready:

- ⚙️ Python 3.10
- 📦 pip (a tool to install Python packages)

## How to Set It Up

Follow these steps to get the app running:

1. 🔄 **Download the project**:
   ```bash
   git clone https://github.com/Shizoqua/YouTube-Summarizer-Gemini

   cd youtube_summarizer
   ```

2. 🛠️ **Make a `.env` file**:
   - In the main folder, create a file named `.env`.
   - Add the necessary information, like your YouTube API key:
     ```
     API_KEY=your_youtube_api_key_here
     ```

3. 📥 **Install everything you need**:
   ```bash
   pip install -r requirements.txt
   ```

4. ▶️ **Start the app**:
   ```bash
   python main.py
   ```

5. 🌐 **Open it in your browser**:
   - Go to this address:
     ```
     http://localhost:8000
     ```

6. 🔗 **Try it out**:
   - Paste a YouTube link (e.g., `https://www.youtube.com/watch?v=zWPe_CUR4yU`) into the input box and see the summary.

## What It Uses

- 🖥️ **Backend**: Python (with FastAPI)
- 🎨 **Frontend**: HTML, CSS, and JavaScript
- 🔗 **API**: YouTube API to get video information and Gemini API for text summary

## Cool Features

- ✂️ Summarizes any YouTube video from its link.
- 🖱️ Super easy-to-use interface.
- 🎨 Change the look and feel with your own CSS or scripts.

## What We Plan to Add

- 🌎 Summaries in different languages.
- 🤖 Smarter models for better summaries.
- 📄 Option to save the summary as a file.

## License

This project is open-source and follows the MIT License. Check the LICENSE file for more info.

## Thanks To

- 📹 YouTube API for video data.
- 🐍 Python libraries that made this project possible.

## Questions?

If you have any questions or ideas, feel free to reach out:

- **Name**: Lanre Shittu
- **Email**: hr.lanreshittu@gmail.com
- **GitHub**: [[GitHub Profile](https://github.com/Shizoqua)]

