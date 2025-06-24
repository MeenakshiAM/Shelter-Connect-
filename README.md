# 🏠 ShelterConnect

**ShelterConnect** is a modern, full-stack web application built to help users **find, list, and connect** over affordable housing options — including homes for sale, rent, dormitories, and co-living spaces. It emphasizes **community trust, verified listings, and secure chat-based negotiations**.

---
## Glimpse

![image](https://github.com/user-attachments/assets/cdbf8c7e-0156-4276-b299-31d4a7fe0f68)



## ✨ Features

- 🔍 **Search and Browse Listings**
  - Filter by type (buy/rent), location, price
  - Real-time map view with pinned listings

- 🏡 **List Properties**
  - For sellers/owners to post housing options
  - Includes description, pricing, owner info, location, rating

- 💬 **Chat & Contact System**
  - WhatsApp-style messaging UI
  - Safe contact sharing after both parties agree

- 🧠 **Smart Insights**
  - AI-based price prediction (coming soon)
  - Distance to schools, hospitals, police, malls
  - Waste management info and neighborhood ratings

- 🔐 **Authentication System**
  - Login/signup as buyer or seller
  - Role-based access and secure endpoints

---

## 🧱 Tech Stack

| Tech | Description |
|------|-------------|
| ⚛️ React.js | Frontend UI using functional components |
| 🎨 Tailwind CSS | Styling framework for a clean, responsive design |
| ☕ Spring Boot | Backend REST API for listings, auth, and chat |
| 🗄️ MySQL / PostgreSQL | Online relational database (e.g., PlanetScale, Supabase) |
| 🗺️ Google Maps API | For location tagging and map-based listing views |
| 🔐 JWT | Authentication and role-based access control |

---

## 📁 Project Structure

├── frontend/ # React + Tailwind UI
│ ├── components/
│ └── pages/
├── backend/ # Spring Boot (Java)
│ └── src/
│ └── main/
│ └── java/com/shelterconnect/...
├── public/ # Static assets
└── README.md

---

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm
- Java 17+ and Maven
- MySQL or PostgreSQL (online or local)
- Google Maps API Key (optional)

---

### ⚙️ Frontend Setup

```bash
cd frontend
npm install
npm run dev  # or npm start
```
