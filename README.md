
# SWYNEX – Complete Deployed Application

## Wanderlust – Hotel Booking Platform

Wanderlust is a hotel booking web application developed as part of the SWYNEX internship program. It allows users to explore stays, search destinations, view property details, and manage their wishlist.

## Live Demo

- **Frontend:** https://swynex-complete-deployed-applicatio-seven.vercel.app/
- **Backend API:** https://swynex-backend.onrender.com
- **GitHub Repository:** https://github.com/KavyJain21/SWYNEX-Complete-Deployed-Application

## Features

- Responsive hotel booking interface
- Destination-based search
- Property listing cards
- Individual property details
- Wishlist functionality
- Hotel amenities and pricing
- REST API integration
- MongoDB database integration

## Tech Stack

### Frontend
- React.js
- Vite
- JavaScript
- Axios
- React Router
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Joi
- REST API

### Deployment
- Vercel – Frontend hosting
- Render – Backend hosting
- MongoDB Atlas – Database

## Project Structure

```text
SWYNEX-Complete-Deployed-Application/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── validators/
│   ├── screenshots/
│   ├── app.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── listingApi.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/KavyJain21/SWYNEX-Complete-Deployed-Application.git
cd SWYNEX-Complete-Deployed-Application
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the backend folder:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend:

```bash
npm start
```

The backend runs at:

`http://localhost:5000`

### 3. Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

The frontend runs at:

`http://localhost:5173`

## API Endpoints

Base URL: `/api/listings`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/listings` | Get all listings |
| GET | `/api/listings/:id` | Get a listing |
| POST | `/api/listings` | Create a listing |
| PUT | `/api/listings/:id` | Update a listing |
| DELETE | `/api/listings/:id` | Delete a listing |

## Environment Variables

| Variable | Description |
|---|---|
| MONGODB_URI | MongoDB Atlas connection string |
| PORT | Backend server port |
| VITE_API_URL | Backend base URL for frontend |

**Note:** Never commit `.env` files or expose database credentials.

## Screenshots

Backend API testing screenshots are available in:

`backend/screenshots/`

## Deployment

The application is deployed using Vercel and Render.

- Frontend deployment: Vercel
- Backend deployment: Render
- Database: MongoDB Atlas

## Internship Project

Developed as part of the SWYNEX internship program.

**Project:** Complete Deployed Application  
**Application:** Wanderlust – Hotel Booking Platform
