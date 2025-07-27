# 📩 Email AI Assistant

An intelligent email reply assistant built using **Spring Boot** (backend) and **React + Vite** (frontend). This tool helps users quickly generate AI-powered email responses based on the tone they select — whether professional, friendly, or casual. Users can also integrate it as a **Chrome Extension** to enhance their Gmail experience with a one-click AI Reply button.

---

## 🚀 Features

- ✨ Generate AI-based email replies in different tones
- 🎯 Choose from **Professional**, **Friendly**, or **Casual** tone
- 📋 Easily copy the generated response to your clipboard
- 🧩 Use as a Chrome Extension inside Gmail for seamless email replies
- ⚙️ Built with **React (Vite)** frontend and **Spring Boot** backend
- 🔐 API secured with Gemini (Google AI) integration

---

## 🖼️ Screenshots

<!-- Add screenshots here -->
| Main Web UI | Chrome Extension |
|-------------|------------------|
| ![Web Screenshot](Web1.png) | ![Extension Screenshot](ext1.png) |
| ![Web Screenshot](Web2.png) | ![Extension Screenshot](ext2.png) |



---

## 🧱 Tech Stack

| Layer         | Technology     |
|---------------|----------------|
| **Frontend**  | React (Vite), Material UI |
| **Backend**   | Spring Boot (Java), Gemini API |
| **Chrome Extension** | JavaScript, DOM Manipulation |
| **Deployment** | Localhost / Future: GitHub Pages + Render/Fly.io |

---

## 🧑‍💻 How to Run Locally

### 🖥️ Frontend (React + Vite)

```bash
cd email-writer-react
npm install
npm run dev
🧪 Backend (Spring Boot)
Open in IntelliJ IDEA

Make sure your environment variable for Gemini API Key is set:

bash
Copy
Edit
GEMINI_API_KEY=your_actual_key
Run EmailAiWriterApplication.java

🧩 Chrome Extension Setup
Go to chrome://extensions/ in Chrome

Enable Developer Mode

Click Load unpacked

Select the chrome-extension folder from this project

Open Gmail → Compose → Click AI Reply to generate a reply

🔐 Environment Variables
Make sure to exclude your Gemini API key from GitHub by keeping it in your IDE/environment only and not in version control.

You can use .gitignore and application.properties like this:

properties
Copy
Edit
gemini.api.key=${GEMINI_API_KEY}
📁 Project Structure
bash
Copy
Edit
email-ai-assistant/
│
├── email-writer-react/          # Frontend (React + Vite)
├── email-writer-backend/        # Backend (Spring Boot)
├── chrome-extension/            # Chrome Extension source
├── README.md
└── .gitignore
✍️ Future Improvements
Add reply tone preview before generating

Provide language selection

Deploy frontend and backend online

Add login support for users

🙌 Acknowledgements
Google Gemini API

Material UI

Vite

Spring Boot
