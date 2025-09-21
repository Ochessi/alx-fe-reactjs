# GitHub User Search

A modern React application for searching GitHub users and displaying their profile information.

## Features

- 🔍 Search GitHub users by username
- 👤 Display comprehensive user profiles
- 📊 Show user statistics (repositories, followers, following)
- 📱 Responsive design for mobile and desktop
- ⚡ Fast and efficient API calls with proper error handling
- 🔑 Optional GitHub API key support for higher rate limits

## Environment Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```

4. (Optional) Add your GitHub Personal Access Token to `.env`:
   ```
   VITE_GITHUB_API_KEY=your_github_personal_access_token_here
   ```

### GitHub API Configuration

The application uses the GitHub REST API v3. You can use it without an API key, but with limitations:

- **Without API key**: 60 requests per hour
- **With API key**: 5,000 requests per hour

#### Getting a GitHub Personal Access Token

1. Go to [GitHub Settings > Personal Access Tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Give it a descriptive name
4. No scopes are required for public user information
5. Copy the token and add it to your `.env` file

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GITHUB_API_KEY` | GitHub Personal Access Token | No |
| `VITE_GITHUB_API_URL` | GitHub API base URL | No (defaults to https://api.github.com) |
| `VITE_APP_NAME` | Application name | No |
| `VITE_APP_VERSION` | Application version | No |

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Search.jsx          # Search input component
│   └── UserCard.jsx        # User profile display component
├── services/
│   └── githubService.js    # GitHub API service with environment config
├── App.jsx                 # Main application component
├── App.css                 # Application styles
└── main.jsx               # Application entry point
```

## API Rate Limiting

The GitHub API has rate limits:
- Unauthenticated requests: 60 per hour
- Authenticated requests: 5,000 per hour

The application handles rate limit errors gracefully and provides user feedback.

## Security

- Environment variables are properly configured in `.env`
- The `.env` file is excluded from version control
- API keys are never exposed in the client-side code
- All sensitive configuration uses the `VITE_` prefix for Vite compatibility

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API calls
- **GitHub REST API v3** - Data source
