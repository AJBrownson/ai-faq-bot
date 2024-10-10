# Mini-FAQ-BOT - An AI powered FAQ chatbot

Mini is an AI chatbot that reads business information stored in a markdown or json file (in this case, the information is about a fictional social media scheduling software called Teeweety). Mini utilizes CopilotKit to read the data given in order to be able to provide informed answers to users' queries about the software.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Getting Started](#getting-started)
- [Technologies](#technologies)
- [License](#license)
- [Contributing](#contributing)

## Features

- AI-powered answers to users' queries
- Automation with CopilotKit

## Demo

You can view a live demo of Mini-FAQ-BOT [here](https://snippy-rohith-singhs-projects.vercel.app)

A youtube video demo of the bot is available [here](https://youtu.be/In6n5ZqeVuE)

## Screenshots

![Welcome Message](https://github.com/user-attachments/assets/412181bf-ae0c-4782-8511-eb974477742b)
![Results](https://github.com/user-attachments/assets/94d85a40-e2c9-4b3f-b1a0-c51854bae978)
![Results](https://github.com/user-attachments/assets/e70bef77-5478-4fd2-9cca-95ee1c5a3b06)

## Technologies

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [CopilotKit](https://copilotkit.ai)
- [ShadCN](https://ui.shadcn.com)
- [Groq](https://groq.com)

## Getting Started

To get started with the project, run the following commands in your terminal:

1. Clone the repository
```bash
git clone https://github.com/AJBrownson/mini-faq-bot.git
cd mini-faq-bot
```

2. Install the dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add the following environment variables:
```bash
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=llama3-8b-8192 or model-of-your-choice
```
> You can get your GROQ API key by signing up on [groq.dev](https://groq.com)

3. Start the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

If you have any questions, feel free to reach out to me at [Anietie Brownson](https://x.com/TechieAnni).