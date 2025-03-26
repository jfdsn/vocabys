# Vocabys App

A modern web application for learning vocabulary in different languages. Built with SvelteKit and TypeScript.

## Features

- Generate vocabulary lists based on categories
- Support for multiple languages
- Text-to-speech pronunciation
- Clean and intuitive user interface
- Type-safe implementation with TypeScript
- Responsive design

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone https://github.com/jfdsn/vocabys.git
cd vocabys
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Usage

1. Select your target language for learning
2. Choose the number of words you want to generate
3. Select a category (or "any" for random words)
4. Click "Generate Words" to get your vocabulary list
5. Use the speaker icon to hear the pronunciation of each word

## Project Structure

```
src/
├── lib/
│   ├── components/     # Svelte components
│   ├── stores/        # Svelte stores for state management
│   └── utils/         # Utility functions and API hooks
├── routes/            # SvelteKit routes
└── app.html          # Main HTML template
```

## Technologies Used

- SvelteKit
- TypeScript
- Vite
- TailwindCSS
- Svelte Stores

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
