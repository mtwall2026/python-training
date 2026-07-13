# Python Training Program for Beginners

A comprehensive, interactive web-based Python training program designed for complete beginners to learn Python step-by-step with lessons, quizzes, and code simulations - starting from the fundamentals and building up to practical skills for RAG (Retrieval-Augmented Generation) pipelines on Azure: chunking, ingestion, authentication/SSO, calling APIs, and embeddings, plus the Linux command line skills to run and troubleshoot it all.

## Features

✨ **Interactive Learning Modules**
- 16 modules across two tracks: Python fundamentals (1-7), then Python for RAG engineering and Linux (8-16)
- Fundamentals: Introduction, Variables, Operations, Conditionals, Loops, Lists/Dictionaries, and Functions
- RAG track: Files & Text, Chunking, JSON, Troubleshooting, Packages & Secrets, Azure Authentication/SSO, APIs & Embeddings (capstone)
- Linux track: Command Line Essentials, and Running/Scheduling/Troubleshooting Python on Linux

🎯 **Multiple Choice Quizzes**
- 5-question quizzes after each major topic
- Immediate feedback on answers
- Progress tracking through the quiz

💻 **Graded Code Exercises**
- Each simulation gives you a task and starter code with a blank (`TODO`) to fill in - not a finished example to just run and watch
- Runs *real* Python (via [Pyodide](https://pyodide.org), CPython compiled to WebAssembly) — not a JavaScript approximation, so f-strings, `print()`, list/dict methods, and real Python errors all behave exactly as they would on your machine
- Every "Run" automatically checks your solution against real test cases and tells you exactly what passed and what didn't (with a hint), instead of just showing raw output

📊 **Progress Tracking**
- Visual progress bar showing completion percentage
- Module completion checklist
- Statistics dashboard
- Local storage to save your progress

## Getting Started

1. Open `index.html` in your web browser
2. Click on "Module 1: Introduction to Python" to start learning
3. Work through each module at your own pace
4. Complete quizzes to test your knowledge
5. Practice with code simulations

## Course Content

### Module 1: Introduction to Python
- What is Python and why learn it
- Your first program ("Hello, World!")
- Different ways to run Python

### Module 2: Variables and Data Types
- Creating and naming variables
- Understanding data types (str, int, float, bool)
- Type checking with type()

### Module 3: Basic Operations
- Arithmetic operations (+, -, *, /, //, %, **)
- String operations (concatenation, repetition)
- Order of operations (PEMDAS)

### Module 4: Conditional Statements
- if, else, and elif statements
- Comparison operators (==, !=, >, <, >=, <=)
- Logical operators (and, or, not)

### Module 5: Loops
- for loops with range()
- while loops
- Loop control (break, continue)

### Module 6: Lists and Collections
- Creating and accessing lists
- List methods (append, remove, len)
- Dictionaries and key-value pairs

### Module 7: Functions
- Defining and calling functions
- Parameters and return values
- Default parameters

### Module 8: Files & Text
- Reading and writing files safely with `with open(...)`
- Why `encoding="utf-8"` matters for real-world documents

### Module 9: Chunking Text for RAG
- String slicing and splitting
- Building a fixed-size chunker with overlap

### Module 10: JSON in the Wild
- Parsing and building JSON with the `json` module
- Safely navigating nested API responses with `.get()`

### Module 11: When Things Go Wrong
- try/except/finally and reading tracebacks
- Raising your own errors, and logging vs. print()

### Module 12: Packages, Environments & Secrets
- pip, requirements.txt, and virtual environments
- Loading secrets from environment variables instead of hardcoding them

### Module 13: Authentication the Azure Way
- API keys vs. Azure AD (SSO) authentication
- Service principals, managed identities, and `DefaultAzureCredential`

### Module 14: Talking to APIs & Embeddings (Capstone)
- Calling REST APIs with `requests`
- What embeddings and cosine similarity are, and building a mini RAG retrieval pipeline

### Module 15: Linux Command Line Essentials
- Navigating, reading files, and permissions
- Installing packages and finding things on Linux

### Module 16: Running, Scheduling & Troubleshooting Python on Linux
- venvs and environment variables from the shell
- Logs, cron, systemd, and quick health checks

## How to Use

### Learning Lessons
- Read through the content in the lesson view
- Click "Next →" to continue to the quiz

### Taking Quizzes
- Select an answer by clicking on an option
- Click "Submit" to check your answer
- Receive immediate feedback
- Move to the next question automatically (if correct)
- Complete all questions to progress

### Running Code Simulations
- The code editor comes pre-populated with a template
- Modify the code as needed
- Click the "▶ Run" button to execute
- View output in the right panel
- Click "Next →" when you're done practicing

### Tracking Progress
- Your progress is automatically saved in your browser
- The progress bar shows overall completion
- Your stats panel shows completed vs total modules
- Click "Reset Progress" to start over

## Technical Details

- **Built with:** HTML5, CSS3, and JavaScript (Vanilla)
- **Python runtime:** [Pyodide](https://pyodide.org) (CPython via WebAssembly), loaded from a CDN
- **Storage:** Uses browser's localStorage for progress persistence
- **Requirements:** Modern web browser with JavaScript enabled and an internet connection (needed the first time to download the Python runtime; lessons and quizzes work offline, but code simulations need connectivity at least once)

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with ES6 JavaScript support

## Tips for Learning

1. **Take your time** - Don't rush through modules. Understanding concepts is more important than speed.
2. **Practice the simulations** - The code simulations are where real learning happens. Experiment with different variations.
3. **Review quizzes** - If you get a quiz question wrong, review that section of the lesson.
4. **Write code** - The best way to learn programming is by writing code yourself.
5. **Experiment** - Once you understand a concept, try modifying the code to see what happens.

## Troubleshooting

**Code won't run?**
- Make sure the Python syntax is correct
- Check for missing colons (:) at the end of lines with conditions or functions
- Check indentation (Python cares about spaces)
- The first time you click "Run" in a session, the page needs to download the Python runtime, which can take a few seconds on a slow connection — subsequent runs are fast

**Progress not saving?**
- Make sure your browser allows localStorage
- Check if your browser's privacy mode is enabled

**Can't see output?**
- Check if your code actually produces output (use print() to display results)
- Make sure you clicked the "▶ Run" button

## Next Steps

After completing this course:
1. Practice with online Python environments (Replit, JupyterLite, Google Colab)
2. Build small projects (calculator, to-do list, game)
3. Explore Python libraries (requests, pandas, numpy, pygame)
4. Join Python communities and contribute to open-source projects

## License

MIT License - Feel free to use and modify for educational purposes.

## Support

For questions or feedback, please reach out or create an issue.

Happy Learning! 🐍
