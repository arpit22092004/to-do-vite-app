# Task Manager - Beautiful Todo App

A high-quality, deployable To-Do List application built with React and Vite, featuring beautiful themes, animations, and a polished user experience.

## Features

- ✅ **Task Management**: Add, edit, delete, and toggle tasks
- 📅 **Date Organization**: Tasks grouped by due dates with automatic cleanup
- 🎨 **6 Beautiful Themes**: Mountains, Desert, Aurora, Ocean, Cosmic, and Batman
- 🌟 **Stunning Animations**: Each theme includes unique environmental effects
- 💾 **Data Persistence**: localStorage integration with backend sync simulation
- 📱 **Responsive Design**: Works perfectly on all devices
- ⚡ **Modern Tech Stack**: React 18, Vite, Context API, CSS animations

## Themes

1. **Mountains** 🏔️ - Serene mountain landscape with floating clouds
2. **Desert** 🏜️ - Sandy dunes with blowing particles and cacti
3. **Aurora** 🌌 - Northern lights with twinkling stars
4. **Ocean** 🌊 - Flowing waves with seagulls and foam bubbles
5. **Cosmic** 🚀 - Space scene with nebulae, planets, and shooting stars
6. **Batman** 🦇 - Gotham City skyline with flying bats and bat signal

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd todo-vite-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

\`\`\`
src/
├── components/          # React components
│   ├── AddTaskForm.jsx  # Task creation form
│   ├── TaskList.jsx     # Task list display
│   ├── TaskItem.jsx     # Individual task item
│   └── ThemeSwitcher.jsx # Theme selection component
├── contexts/            # React Context providers
│   ├── TaskContext.jsx  # Task state management
│   └── ThemeContext.jsx # Theme state management
├── themes/              # Theme background components
│   ├── Mountains.jsx    # Mountain theme
│   ├── Desert.jsx       # Desert theme
│   ├── Aurora.jsx       # Aurora theme
│   ├── Ocean.jsx        # Ocean theme
│   ├── Cosmic.jsx       # Cosmic theme
│   └── Batman.jsx       # Batman theme
├── hooks/               # Custom React hooks
│   └── useLocalStorage.js # localStorage hook
├── utils/               # Utility functions
│   ├── api.js          # API simulation
│   └── dateUtils.js    # Date formatting utilities
├── App.jsx             # Main application component
└── main.jsx            # Application entry point
\`\`\`

## Deployment

This app is ready to deploy on various platforms:

### Vercel
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### Other Platforms
The built files in the `dist` directory can be deployed to any static hosting service.

## Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Context API** - Global state management
- **CSS3** - Advanced animations and responsive design
- **localStorage** - Client-side data persistence
- **Fetch API** - Backend synchronization simulation

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.
