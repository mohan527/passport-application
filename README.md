# passport-application
A comprehensive passport management web application with online application, document verification, and status tracking. Built with React, Node.js, and MongoDB.


## 📋 Project Overview

A full-stack web application for passport management featuring online application submission, document verification, and real-time status tracking. Built with modern technologies for scalability and ease of use.

## 🏗️ Architecture

### Project Structure
```
passport-application/
├── client/                    # React Frontend
│   └── src/
│       └── App.jsx           # Main React Component
├── package.json              # Node.js Dependencies
├── server.js                 # Express.js Backend Server
└── README.md                 # Documentation
```

### Technology Stack

**Backend:**
- **Express.js** - Web framework for Node.js
- **Node.js** - Runtime environment
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **Cors** - Cross-origin resource sharing
- **Bcryptjs** - Password hashing
- **JWT** - JSON Web Tokens for authentication
- **Multer** - File upload middleware

**Frontend:**
- **React** - UI library
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling
- **Fetch API** - HTTP client

## 🚀 Features

### Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check endpoint |
| GET | `/api/applications` | Get all applications |
| POST | `/api/applications` | Submit new application |
| GET | `/api/applications/:id` | Get application status |
| POST | `/api/applications/:id/verify` | Verify documents |

### Frontend Features

✅ Responsive application form
✅ Real-time form validation
✅ Application submission
✅ Application history display
✅ Status tracking
✅ User-friendly UI

## 📦 Installation

### Prerequisites
- Node.js v14 or higher
- npm or yarn package manager
- MongoDB (local or cloud)

### Setup Instructions

1. **Clone the repository**
```bash
git clone https://github.com/mohan527/passport-application.git
cd passport-application
```

2. **Install backend dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd client
npm install
cd ..
```

4. **Create .env file**
```bash
MONGODB_URI=mongodb://localhost:27017/passport
PORT=5000
NODE_ENV=development
```

## 🏃 Running the Application

### Start Backend Server
```bash
npm start
# or for development with auto-reload
npm run dev
```
Server runs on `http://localhost:5000`

### Start Frontend (in another terminal)
```bash
cd client
npm start
```
Client runs on `http://localhost:3000`

## 🔌 API Usage

### Health Check
```bash
curl http://localhost:5000/api/health
```

### Submit Application
```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "dob": "1990-01-01"
  }'
```

### Get Application Status
```bash
curl http://localhost:5000/api/applications/APP-1234567890
```

## 🎯 Use Cases

1. **Citizens** - Apply for passport online
2. **Document Verification** - Upload and verify documents
3. **Status Tracking** - Track application progress in real-time
4. **Admin** - Manage applications and verify documents

## 🔐 Security Features

- ✅ CORS protection
- ✅ Input validation
- ✅ Error handling
- ✅ Password encryption
- ✅ JWT authentication
- ✅ File upload validation

## 📊 Demonstrates

- ✅ Full-stack web development
- ✅ REST API design
- ✅ React component development
- ✅ Database integration (MongoDB)
- ✅ Authentication & Authorization
- ✅ Real-time data management
- ✅ Error handling
- ✅ Modern web architecture

## 🤝 Contributing

Contributions are welcome! Please feel free to submit pull requests.

## 👨‍💼 Author

**MOHAN KRISHNA AREVARAPU**
- Backend Developer | Solution Architect
- Specializing in Full-Stack Development & Microservices
- GitHub: [@mohan527](https://github.com/mohan527)

## 📄 License

MIT License - see LICENSE file for details

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

**Last Updated:** January 2026
**Version:** 1.0.0
