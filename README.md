![image](https://github.com/user-attachments/assets/4ff52ce4-4b95-4dbd-b0be-1ac90bd0fb20)
# 🚀 Full-Stack Web Application

This is a full-stack JavaScript project with a **React + Vite** frontend and an **Express + MongoDB** backend.

---

## 📁 Project Structure

```
/project-root
│
├── client/        # Frontend React app (Vite)
├── server/        # Backend Express server
└── README.md
```

---

## 🧩 Tech Stack

### Frontend (`client`)
- **React 19**
- **Vite 6**
- **React Router DOM v7**
- **Axios** (for API calls)
- **React Hot Toast** (for notifications)

### Backend (`server`)
- **Express**
- **MongoDB via Mongoose**
- **JWT for Authentication**
- **Bcrypt** (for password hashing)
- **dotenv**, **cors**, **cookie-parser**

---

## 🔧 Setup Instructions

### Prerequisites
- Node.js ≥ 18
- MongoDB running locally or MongoDB Atlas URI

---

### 🖥 Frontend Setup (Vite + React)

```bash
cd client
npm install
npm run dev
```

- Dev Server: `http://localhost:5173`
- Vite handles hot module reloading and dev server.
- Update `axios` base URL to point to your backend (e.g., `http://localhost:8000/api`)

---

### 🛠 Backend Setup (Express + MongoDB)

```bash
cd server
npm install
npm run dev
```

- Server runs on: `http://localhost:8000` (or your chosen port)
- Uses `nodemon` for live-reloading
- Environment variables should be placed in a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 📦 Scripts

### Frontend

| Command           | Description               |
|-------------------|---------------------------|
| `npm run dev`     | Start Vite dev server     |
| `npm run build`   | Build frontend for prod   |
| `npm run preview` | Preview production build  |
| `npm run lint`    | Run ESLint                |

### Backend

| Command         | Description                     |
|-----------------|---------------------------------|
| `npm run dev`   | Start backend with nodemon      |

---

## 📝 Notes

- Make sure both frontend and backend are running for full functionality.
- CORS is enabled on the backend for cross-origin API calls.
- JWT is used for secure authentication.
- Frontend should store the JWT in `HttpOnly` cookies or `localStorage` (based on your auth strategy).


