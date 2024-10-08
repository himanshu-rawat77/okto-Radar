# Crowdfunding Platform with React & Okto SDK

This project is a decentralized crowdfunding platform built using **React** and integrated with the **Okto SDK** and **Google OAuth** for secure login and authentication. Users can create and manage campaigns on the blockchain, view all campaigns, and contribute to their favorite projects.

## Features

- 🛡 **Google OAuth Login**: Users can log in with Google, using Okto SDK for decentralized authentication.

- 📊 **Campaign Management**: Create, browse, and contribute to crowdfunding campaigns.

- 🌐 **DeFi Integration**: Seamlessly integrated with the Okto SDK for managing crypto wallet interactions.

- 🧭 **Navigation**: Dynamic navigation with a responsive `Navbar` and `Sidebar`.

- 🔒 **Blockchain Powered**: Campaign management is decentralized and powered by smart contracts.

## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Project Structure](#project-structure)

- [Tech Stack](#tech-stack)

- [Environment Variables](#environment-variables)

- [License](#license)

## Installation

Follow these steps to set up the project locally:

1. Clone the repository:

```bash

git clone https://github.com/your-username/crowdfunding-platform.git

cd crowdfunding-platform

```

2. Install dependencies:

```bash

npm install

```

3. Create a `.env` file at the root of your project and add the following variables:

```bash

REACT_APP_OKTO_CLIENT_API_KEY=your-okto-client-api-key

REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id

```

4. Start the application:

```bash

npm start

```

The app will be available at `http://localhost:3000\`.

## Usage

- **Login**: Users log in via Google OAuth. The Okto SDK handles authentication, and users are redirected to the home page upon successful login.

- **Campaign Management**: Once logged in, users can view existing campaigns, create new campaigns, and contribute to active ones.

### Key Pages:

- **LoginPage**: Handles the Google login and Okto authentication.

- **HomePage**: Displays a list of all campaigns with real-time updates.

- **CreateCampaign**: Form for creating a new campaign.

- **Profile**: Displays user profile information and campaigns they’ve created or contributed to.

- **CampaignDetails**: Shows detailed information for a specific campaign.

### Navigation:

The app includes a `Navbar` and `Sidebar` for easy navigation between pages.

## Project Structure

```

crowdfunding-platform/

├── public/

├── src/

│ ├── assets/ # Static assets like images and icons

│ ├── components/ # Reusable UI components (Navbar, Sidebar, CustomButton, etc.)

│ ├── context/ # Global context and hooks for managing state

│ ├── pages/ # Page components like Home, Profile, CreateCampaign, etc.

│ ├── utils/ # Utility functions and helpers

│ ├── App.js # Main application file with routes

│ ├── index.js # Entry point of the application

├── .env # Environment variables file

├── package.json # Project dependencies and scripts

└── README.md # This README file

```

## Tech Stack

- **Frontend**: React, TailwindCSS for styling

- **Authentication**: Google OAuth via `@react-oauth/google`

- **DeFi Integration**: Okto SDK (`okto-sdk-react`)

- **Routing**: React Router

- **State Management**: Context API

- **API Calls**: Axios for HTTP requests

## Environment Variables

The following environment variables must be added to the `.env` file at the root of your project:

| Variable Name | Description |

|------------------------------|----------------------------------------|

| `REACT_APP_OKTO_CLIENT_API_KEY` | Your Okto SDK API Key for interacting with DeFi services. |

| `REACT_APP_GOOGLE_CLIENT_ID` | Google OAuth Client ID for user login authentication. |

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software in accordance with the license.

---

Happy building!

```

### Customization:

- **Replace `your-okto-client-api-key`**: Add your Okto SDK API key.

- **Replace `your-google-client-id`**: Add your Google OAuth Client ID.

This `README.md` includes all the necessary information about the project, covering the installation, usage, project structure, tech stack, environment variables, and license. Feel free to adjust the content if you need to add more specific details or modify the instructions to fit your project's specific requirements.