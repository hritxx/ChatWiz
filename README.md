You can add a "Live Demo" section in the README to include the live link. Here's an updated version of the README with the "Live Demo" section added:

```markdown
# ChatApp

Welcome to ChatApp! This is a full-featured chat application built using modern web technologies. It leverages React for the frontend, Daisy UI for styling, Socket.IO for real-time communication, MongoDB for database management, Express for the backend server, and JWT for authentication.

## Table of Contents

- [Live Demo](#live-demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Live Demo

Check out the live demo of ChatApp [here](https://chatwiz-vw96.onrender.com/).

## Features

- Real-time messaging
- User authentication (JWT)
- Responsive design with Daisy UI
- Persistent chat history with MongoDB
- Typing indicators
- Online status tracking


## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/hritxx/ChatWiz.git
cd chatapp
```

### Install Dependencies

#### Server

```bash
cd server
npm install
```

#### Client

```bash
cd ../client
npm install
```

### Environment Variables

Create a `.env` file in the `server` directory and add the following environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

## Usage

### Starting the Server

```bash
cd server
npm start
```

### Starting the Client

Open another terminal window and run:

```bash
cd client
npm start
```

The client will be available at `http://localhost:3000` and the server at `http://localhost:5000`.

## Folder Structure

```
chatapp/
├── client/               # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── contexts/
│       ├── hooks/
│       ├── pages/
│       ├── services/
│       ├── styles/
│       └── App.js
├── server/               # Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── README.md
```

## Technologies Used

### Frontend

- React
- Daisy UI
- Socket.IO-client

### Backend

- Node.js
- Express
- MongoDB
- Mongoose
- Socket.IO
- JWT (jsonwebtoken)
- bcryptjs


