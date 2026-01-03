# 🎓 EduFree Platform

> AI-Powered Study Materials Platform for Students

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![React](https://img.shields.io/badge/React-18.0-blue.svg)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-10.0-orange.svg)](https://firebase.google.com/)

## 📋 Problem Statement

Students at different universities often struggle to find high-quality, organized study materials for niche subjects, leading to:
- Fragmented learning experiences
- Reliance on expensive paid platforms
- Time wasted searching for quality resources
- Difficulty collaborating with peers

## 💡 Solution

**EduFree** is a free, AI-powered platform that eliminates "search fatigue" by providing:
- ✨ AI-curated educational resources using Google Gemini API (Free Tier)
- 📚 Instant PDF chapter summarization
- 👥 Real-time collaborative note-taking
- ⭐ Community-driven resource rating system
- 🔒 Secure authentication via Firebase

## 🚀 Key Features

### 1. AI Summary Generator
- Upload or paste text from PDF chapters
- Get instant, concise summaries powered by Google Gemini
- Save summaries to your profile for future reference

### 2. Collaborative Notes
- Real-time note-taking with study groups
- Share notes across your university network
- Synchronized editing for team projects

### 3. Resource Rating System
- Community voting to maintain content quality
- Filter resources by ratings and relevance
- Contribute reviews to help fellow students

### 4. Smart Search
- AI-powered resource discovery
- Curated recommendations based on your topic
- Access to open-source textbooks and videos

## 🏗️ Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **Firebase SDK** for authentication & database
- **Modern CSS** for responsive design

### Backend
- **Node.js** with Express
- **Google Gemini API** for AI features
- **Firebase Admin SDK** for backend operations

### Database & Auth
- **Firebase Firestore** - NoSQL database
- **Firebase Authentication** - Secure user management

## 📁 Project Structure

```
edufree-platform/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── SignUp.jsx
│   │   │   ├── Dashboard/
│   │   │   │   ├── SearchBar.jsx
│   │   │   │   ├── TopicCard.jsx
│   │   │   │   └── Dashboard.jsx
│   │   │   ├── Summary/
│   │   │   │   ├── PDFUpload.jsx
│   │   │   │   └── SummaryView.jsx
│   │   │   ├── Notes/
│   │   │   │   ├── CollaborativeEditor.jsx
│   │   │   │   └── NotesList.jsx
│   │   │   └── Rating/
│   │   │       └── ResourceRating.jsx
│   │   ├── services/
│   │   │   ├── firebase.js
│   │   │   ├── gemini.js
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── summary.js
│   │   │   ├── resources.js
│   │   │   └── notes.js
│   │   ├── services/
│   │   │   ├── gemini.service.js
│   │   │   └── firebase.service.js
│   │   ├── middleware/
│   │   │   └── auth.middleware.js
│   │   └── server.js
│   ├── package.json
│   └── .env.example
├── LICENSE
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- Firebase account (free tier)
- Google Gemini API key (free tier)

### 1. Clone the Repository
```bash
git clone https://github.com/chakreshkatari/edufree-platform.git
cd edufree-platform
```

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file
cp .env.example .env
```

Edit `.env` with your credentials:
```env
GEMINI_API_KEY=your_gemini_api_key_here
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY="your_private_key_here"
PORT=5000
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install

# Create .env file
cp .env.example .env
```

Edit `frontend/.env`:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 4. Get API Keys

#### Google Gemini API (Free)
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Click "Get API Key"
3. Copy your API key

#### Firebase Setup (Free)
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication (Email/Password)
4. Enable Firestore Database
5. Get your config from Project Settings

### 5. Run the Application

**Terminal 1 - Backend:**
```bash
cd backend
node src/server.js
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

Open http://localhost:5173 in your browser! 🎉

## 🔄 User Flow

```
1. User Login (Firebase Auth)
   ↓
2. Search Topic (AI-powered)
   ↓
3. AI Fetches Resources (Gemini API)
   ↓
4. View/Open Content
   ↓
5. Review Summary
   ↓
6. Save to Profile (Firestore)
```

## 🎨 UI/UX Design

- **Mobile-First**: Responsive design for all devices
- **Clean Interface**: Minimalist dashboard with intuitive navigation
- **One-Click Actions**: Quick summary generation button
- **Real-time Updates**: Instant feedback on all operations

## 🌟 Differentiation

**Unlike paid platforms:**
- ✅ Completely FREE using Google's Gemini Free Tier
- ✅ Open-source and community-driven
- ✅ University email authentication
- ✅ Focus on quality over quantity
- ✅ No ads or paywalls

## 🛣️ Roadmap

- [x] Basic authentication
- [x] AI summary generation
- [ ] Collaborative notes
- [ ] Resource rating system
- [ ] Mobile app (React Native)
- [ ] Offline mode
- [ ] Multi-language support
- [ ] Study group management

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**Team Victory**
- **Team Leader**: K Chakresh
- **Project**: Google Developer Groups - Let's Hack It
- **Problem Statement**: Open Innovation

## 🙏 Acknowledgments

- Google Developer Groups for the hackathon opportunity
- Google Gemini team for the free AI API
- Firebase team for the excellent backend services
- Open-source community for inspiration

## 📞 Contact

- GitHub: [@chakreshkatari](https://github.com/chakreshkatari)
- Project Link: [https://github.com/chakreshkatari/edufree-platform](https://github.com/chakreshkatari/edufree-platform)

---

**Built with ❤️ for students, by students**
