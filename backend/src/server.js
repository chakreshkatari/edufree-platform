const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Firebase Admin initialization
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  }),
});

const db = admin.firestore();

// Routes
const summaryRoutes = require('./routes/summary');
const resourcesRoutes = require('./routes/resources');

app.use('/api/summary', summaryRoutes);
app.use('/api/resources', resourcesRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'EduFree API is running!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`\n🚀 EduFree Server running on port ${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/health`);
});
