// Training Program Data
const trainingModules = [
    {
        id: 1,
        title: "Module 1: Introduction to Python",
        type: "lesson",
        content: `
            <h3>What is Python?</h3>
            <p>Python is a popular, beginner-friendly programming language known for its simple and readable syntax. It was created by Guido van Rossum and first released in 1991.</p>

            <h3>Why Learn Python?</h3>
            <ul>
                <li>Easy to learn and read</li>
                <li>Powerful for web development, data analysis, and AI</li>
                <li>Large community and lots of libraries</li>
                <li>Used by companies like Google, Netflix, and Spotify</li>
            </ul>

            <h3>Your First Python Program</h3>
            <p>Let's start with the classic "Hello, World!" program:</p>
            <pre>print("Hello, World!")</pre>

            <h3>What Does This Do?</h3>
            <p>The <code>print()</code> function displays text on the screen. In this case, it prints "Hello, World!"</p>

            <h3>How to Run Python</h3>
            <ul>
                <li>Online: Use Python editors like Replit.com or JupyterLite</li>
                <li>Local: Install Python from python.org and run scripts in your terminal</li>
                <li>IDE: Use tools like Visual Studio Code or PyCharm</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Module 2: Variables and Data Types",
        type: "lesson",
        content: `
            <h3>What are Variables?</h3>
            <p>Variables are containers that store data values. Think of them as labeled boxes where you put information.</p>

            <h3>Creating Variables</h3>
            <p>In Python, you create a variable by assigning a value to a name:</p>
            <pre>name = "Alice"
age = 25
height = 5.8</pre>

            <h3>Python Data Types</h3>
            <p><strong>String (str):</strong> Text data enclosed in quotes</p>
            <pre>message = "Hello, Python!"</pre>

            <p><strong>Integer (int):</strong> Whole numbers</p>
            <pre>count = 10</pre>

            <p><strong>Float (float):</strong> Decimal numbers</p>
            <pre>price = 19.99</pre>

            <p><strong>Boolean (bool):</strong> True or False</p>
            <pre>is_student = True</pre>

            <h3>Checking Variable Types</h3>
            <p>Use the <code>type()</code> function to check what type a variable is:</p>
            <pre>print(type(age))  # Output: &lt;class 'int'&gt;</pre>

            <h3>Variable Naming Rules</h3>
            <ul>
                <li>Can contain letters, numbers, and underscores</li>
                <li>Must start with a letter or underscore</li>
                <li>Are case-sensitive (age ≠ Age)</li>
                <li>Should be descriptive</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Quiz: Variables & Data Types",
        type: "quiz",
        questions: [
            {
                question: "What will be the type of the variable `x = 3.14`?",
                options: ["int", "float", "str", "bool"],
                correct: 1
            },
            {
                question: "Which variable name is valid in Python?",
                options: ["2name", "_name", "name-2", "name 2"],
                correct: 1
            },
            {
                question: "What does the print() function do?",
                options: ["Creates a variable", "Displays output on screen", "Deletes a variable", "Checks variable type"],
                correct: 1
            },
            {
                question: 'What is the data type of `x = "123"`?',
                options: ["int", "float", "str", "bool"],
                correct: 2
            },
            {
                question: "Which of these is a valid Python variable assignment?",
                options: ["name = Alice", 'name = "Alice"', "name = 'Alice'", "Both b and c"],
                correct: 3
            }
        ]
    },
    {
        id: 4,
        title: "Simulation: Create Your First Program",
        type: "simulation",
        description: "Write a Python program that creates three variables (name, age, and city) and prints them out.",
        template: `# Create variables
name = "Your Name"
age = 25
city = "Your City"

# Print them
print(name)
print(age)
print(city)`
    },
    {
        id: 5,
        title: "Module 3: Basic Operations",
        type: "lesson",
        content: `
            <h3>Arithmetic Operations</h3>
            <p>Python can perform math operations on numbers:</p>
            <pre>addition = 10 + 5      # Result: 15
subtraction = 10 - 5   # Result: 5
multiplication = 10 * 5  # Result: 50
division = 10 / 5      # Result: 2.0
floor_division = 10 // 3  # Result: 3
modulus = 10 % 3       # Result: 1 (remainder)
exponent = 2 ** 3      # Result: 8</pre>

            <h3>String Operations</h3>
            <p><strong>Concatenation (combining strings):</strong></p>
            <pre>greeting = "Hello" + " " + "World"  # Result: "Hello World"</pre>

            <p><strong>Repetition:</strong></p>
            <pre>repeated = "Python" * 3  # Result: "PythonPythonPython"</pre>

            <h3>Variable Assignment Shortcuts</h3>
            <p>Update variables with operations:</p>
            <pre>x = 10
x += 5    # Same as: x = x + 5 (Result: 15)
x -= 3    # Same as: x = x - 3 (Result: 12)
x *= 2    # Same as: x = x * 2 (Result: 24)</pre>

            <h3>Order of Operations (PEMDAS)</h3>
            <ul>
                <li>Parentheses: ()</li>
                <li>Exponents: **</li>
                <li>Multiplication & Division: *, /</li>
                <li>Addition & Subtraction: +, -</li>
            </ul>
        `
    },
    {
        id: 6,
        title: "Module 4: Conditional Statements (if/else)",
        type: "lesson",
        content: `
            <h3>What are Conditionals?</h3>
            <p>Conditionals let your program make decisions based on conditions. If something is true, do one thing; if false, do another.</p>

            <h3>The if Statement</h3>
            <pre>age = 18

if age >= 18:
    print("You are an adult")  # This runs if age is 18 or older</pre>

            <h3>The if-else Statement</h3>
            <pre>age = 15

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")  # This runs if the condition is false</pre>

            <h3>The if-elif-else Statement</h3>
            <pre>score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")</pre>

            <h3>Comparison Operators</h3>
            <ul>
                <li>== (equal to)</li>
                <li>!= (not equal to)</li>
                <li>&gt; (greater than)</li>
                <li>&lt; (less than)</li>
                <li>&gt;= (greater than or equal)</li>
                <li>&lt;= (less than or equal)</li>
            </ul>

            <h3>Logical Operators</h3>
            <p><strong>and:</strong> Both conditions must be true</p>
            <pre>if age > 18 and has_license:
    print("You can drive")</pre>

            <p><strong>or:</strong> At least one condition must be true</p>
            <pre>if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")</pre>

            <p><strong>not:</strong> Reverses the condition</p>
            <pre>if not is_raining:
    print("Let's go outside!")</pre>
        `
    },
    {
        id: 7,
        title: "Quiz: Conditionals",
        type: "quiz",
        questions: [
            {
                question: "What will this code print? `if 5 > 3: print('Yes')`",
                options: ["Yes", "No", "Error", "Nothing"],
                correct: 0
            },
            {
                question: "What operator checks if two values are equal?",
                options: ["=", "==", "!=", "==="],
                correct: 1
            },
            {
                question: "When do we use elif?",
                options: ["To start a new if statement", "To check multiple conditions", "To end an if statement", "To repeat code"],
                correct: 1
            },
            {
                question: "What does the 'and' operator do?",
                options: ["Combines strings", "Checks if both conditions are true", "Checks if either condition is true", "Reverses a condition"],
                correct: 1
            },
            {
                question: "What will this code print? `x = 10; if x < 15 and x > 5: print('True')`",
                options: ["True", "False", "Error", "Nothing"],
                correct: 0
            }
        ]
    },
    {
        id: 8,
        title: "Simulation: Simple Calculator",
        type: "simulation",
        description: "Write a program that asks the user for two numbers and performs a mathematical operation based on user input.",
        template: `# Simple Calculator
num1 = 10
num2 = 5
operation = "add"  # Can be "add", "subtract", "multiply", or "divide"

if operation == "add":
    result = num1 + num2
elif operation == "subtract":
    result = num1 - num2
elif operation == "multiply":
    result = num1 * num2
elif operation == "divide":
    result = num1 / num2
else:
    result = "Invalid operation"

print(f"Result: {result}")`
    },
    {
        id: 9,
        title: "Module 5: Loops",
        type: "lesson",
        content: `
            <h3>What are Loops?</h3>
            <p>Loops let you repeat code multiple times without writing it over and over.</p>

            <h3>The for Loop</h3>
            <p>Use for loops when you know how many times you want to repeat:</p>
            <pre>for i in range(5):
    print(i)
# Output: 0, 1, 2, 3, 4</pre>

            <h3>Understanding range()</h3>
            <pre>range(5)        # Numbers 0 through 4
range(2, 8)     # Numbers 2 through 7
range(0, 10, 2) # Numbers 0, 2, 4, 6, 8 (step of 2)</pre>

            <h3>Looping Through Lists</h3>
            <pre>fruits = ["apple", "banana", "cherry"]

for fruit in fruits:
    print(fruit)
# Output: apple, banana, cherry</pre>

            <h3>The while Loop</h3>
            <p>Use while loops when you don't know how many times to repeat:</p>
            <pre>count = 0
while count < 5:
    print(count)
    count += 1
# Output: 0, 1, 2, 3, 4</pre>

            <h3>Loop Control</h3>
            <p><strong>break:</strong> Exit the loop early</p>
            <pre>for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4</pre>

            <p><strong>continue:</strong> Skip to the next iteration</p>
            <pre>for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4 (skips 2)</pre>
        `
    },
    {
        id: 10,
        title: "Quiz: Loops",
        type: "quiz",
        questions: [
            {
                question: "What does `range(5)` produce?",
                options: ["1, 2, 3, 4, 5", "0, 1, 2, 3, 4", "1, 2, 3, 4", "0, 1, 2, 3, 4, 5"],
                correct: 1
            },
            {
                question: "Which loop should you use when you know exactly how many times to repeat?",
                options: ["while", "for", "if", "def"],
                correct: 1
            },
            {
                question: "What does 'break' do in a loop?",
                options: ["Pauses the loop", "Exits the loop early", "Skips the current iteration", "Restarts the loop"],
                correct: 1
            },
            {
                question: "What does 'continue' do?",
                options: ["Exits the loop", "Repeats the loop", "Skips to next iteration", "Stops the program"],
                correct: 2
            },
            {
                question: "How many times will this loop run? `for i in range(2, 8, 2):`",
                options: ["6 times", "3 times", "8 times", "2 times"],
                correct: 1
            }
        ]
    },
    {
        id: 11,
        title: "Simulation: Multiplication Table",
        type: "simulation",
        description: "Write a program that prints the multiplication table for a given number using a for loop.",
        template: `# Multiplication Table
number = 7

print(f"Multiplication table for {number}:")
print("-" * 20)

for i in range(1, 11):
    result = number * i
    print(f"{number} x {i} = {result}")`
    },
    {
        id: 12,
        title: "Module 6: Lists and Collections",
        type: "lesson",
        content: `
            <h3>What is a List?</h3>
            <p>A list is a collection of items stored in a single variable. Lists can contain different data types.</p>

            <h3>Creating Lists</h3>
            <pre>fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alice", 25, 5.8, True]
empty = []</pre>

            <h3>Accessing List Items</h3>
            <p>Lists use zero-based indexing (first item is at index 0):</p>
            <pre>fruits = ["apple", "banana", "cherry"]
print(fruits[0])   # Output: apple
print(fruits[1])   # Output: banana
print(fruits[-1])  # Output: cherry (last item)</pre>

            <h3>List Methods</h3>
            <p><strong>append():</strong> Add an item to the end</p>
            <pre>fruits.append("date")  # ["apple", "banana", "cherry", "date"]</pre>

            <p><strong>remove():</strong> Remove an item</p>
            <pre>fruits.remove("banana")  # ["apple", "cherry", "date"]</pre>

            <p><strong>len():</strong> Get the length</p>
            <pre>print(len(fruits))  # Output: 3</pre>

            <h3>List Slicing</h3>
            <pre>numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])   # Output: [1, 2, 3]
print(numbers[:3])    # Output: [0, 1, 2]
print(numbers[3:])    # Output: [3, 4, 5]</pre>

            <h3>Dictionaries</h3>
            <p>Dictionaries store data as key-value pairs:</p>
            <pre>person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person["name"])  # Output: Alice
print(person["age"])   # Output: 25</pre>
        `
    },
    {
        id: 13,
        title: "Quiz: Lists and Dictionaries",
        type: "quiz",
        questions: [
            {
                question: "What is the index of the first item in a list?",
                options: ["0", "1", "-1", "none"],
                correct: 0
            },
            {
                question: "What will `fruits[1]` return if fruits = ['apple', 'banana', 'cherry']?",
                options: ["apple", "banana", "cherry", "Error"],
                correct: 1
            },
            {
                question: "How do you add an item to a list?",
                options: ["add()", "insert()", "append()", "push()"],
                correct: 2
            },
            {
                question: "What does `len()` return for a list?",
                options: ["The last item", "The first item", "The number of items", "The type of list"],
                correct: 2
            },
            {
                question: "How do you access a value in a dictionary?",
                options: ["dict[0]", "dict['key']", "dict.key", "Both b and c"],
                correct: 3
            }
        ]
    },
    {
        id: 14,
        title: "Simulation: Student Database",
        type: "simulation",
        description: "Create a simple student database using lists and dictionaries. Add and display student information.",
        template: `# Student Database
students = []

# Add students
student1 = {"name": "Alice", "age": 20, "grade": "A"}
student2 = {"name": "Bob", "age": 21, "grade": "B"}

students.append(student1)
students.append(student2)

# Display students
print("Student Database:")
print("-" * 40)
for student in students:
    print(f"Name: {student['name']}, Age: {student['age']}, Grade: {student['grade']}")`
    },
    {
        id: 15,
        title: "Module 7: Functions",
        type: "lesson",
        content: `
            <h3>What is a Function?</h3>
            <p>A function is a reusable block of code that performs a specific task. Functions help keep your code organized and avoid repetition.</p>

            <h3>Defining a Function</h3>
            <pre>def greet():
    print("Hello, World!")

greet()  # Call the function</pre>

            <h3>Functions with Parameters</h3>
            <p>Parameters are inputs that the function receives:</p>
            <pre>def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!</pre>

            <h3>Functions with Multiple Parameters</h3>
            <pre>def add(a, b):
    print(f"{a} + {b} = {a + b}")

add(5, 3)  # Output: 5 + 3 = 8</pre>

            <h3>Return Values</h3>
            <p>Functions can return values that you can use elsewhere:</p>
            <pre>def multiply(a, b):
    return a * b

result = multiply(4, 5)
print(result)  # Output: 20</pre>

            <h3>Default Parameters</h3>
            <pre>def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()           # Output: Hello, Guest!
greet("Charlie")  # Output: Hello, Charlie!</pre>

            <h3>Function Best Practices</h3>
            <ul>
                <li>Use descriptive function names</li>
                <li>Keep functions focused on one task</li>
                <li>Use docstrings to explain what your function does</li>
                <li>Avoid long parameter lists</li>
            </ul>
        `
    },
    {
        id: 16,
        title: "Quiz: Functions",
        type: "quiz",
        questions: [
            {
                question: "What keyword is used to define a function?",
                options: ["function", "def", "func", "define"],
                correct: 1
            },
            {
                question: "What does 'return' do in a function?",
                options: ["Exits the program", "Sends a value back", "Calls the function", "Deletes a variable"],
                correct: 1
            },
            {
                question: "How do you call a function named 'calculate'?",
                options: ["call calculate()", "calculate()", "execute calculate", "run calculate()"],
                correct: 1
            },
            {
                question: "What are function inputs called?",
                options: ["arguments", "parameters", "variables", "Both a and b"],
                correct: 3
            },
            {
                question: "What will this code return? `def add(a, b): return a + b; print(add(3, 4))`",
                options: ["7", "3, 4", "add", "Error"],
                correct: 0
            }
        ]
    },
    {
        id: 17,
        title: "Simulation: Calculator with Functions",
        type: "simulation",
        description: "Create functions for basic math operations and use them to build a simple calculator.",
        template: `# Calculator Functions
def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Cannot divide by zero"
    return a / b

# Test the functions
print("Addition: 10 + 5 =", add(10, 5))
print("Subtraction: 10 - 5 =", subtract(10, 5))
print("Multiplication: 10 * 5 =", multiply(10, 5))
print("Division: 10 / 5 =", divide(10, 5))`
    }
];

// State Management
let currentModuleIndex = 0;
let completedModules = new Set();
let currentQuizAnswers = [];
let currentQuestionIndex = 0;

// Initialize the program
function initializeTraining() {
    loadProgress();
    renderModulesList();
    displayCurrentModule();
    updateStats();
}

// Render modules list
function renderModulesList() {
    const modulesList = document.getElementById('modulesList');
    modulesList.innerHTML = '';

    trainingModules.forEach((module, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = `${module.id}. ${module.title}`;
        button.className = index === currentModuleIndex ? 'active' : '';
        if (completedModules.has(index)) {
            button.textContent = '✓ ' + button.textContent;
        }
        button.onclick = () => {
            currentModuleIndex = index;
            currentQuestionIndex = 0;
            displayCurrentModule();
        };
        li.appendChild(button);
        modulesList.appendChild(li);
    });
}

// Display current module
function displayCurrentModule() {
    hideAllViews();
    const module = trainingModules[currentModuleIndex];

    if (module.type === 'lesson') {
        displayLesson(module);
    } else if (module.type === 'quiz') {
        displayQuiz(module);
    } else if (module.type === 'simulation') {
        displaySimulation(module);
    }

    updateNavigationButtons();
    renderModulesList();
}

// Hide all views
function hideAllViews() {
    document.getElementById('lessonView').classList.add('hidden');
    document.getElementById('quizView').classList.add('hidden');
    document.getElementById('simulationView').classList.add('hidden');
}

// Display lesson
function displayLesson(module) {
    const view = document.getElementById('lessonView');
    view.classList.remove('hidden');
    document.getElementById('lessonTitle').textContent = module.title;
    document.getElementById('lessonDescription').textContent = `Learn about ${module.title}`;
    document.getElementById('lessonContent').innerHTML = module.content;
}

// Display quiz
function displayQuiz(module) {
    const view = document.getElementById('quizView');
    view.classList.remove('hidden');
    document.getElementById('quizTitle').textContent = module.title;
    document.getElementById('totalQuestions').textContent = module.questions.length;
    currentQuizAnswers = new Array(module.questions.length).fill(null);
    displayQuizQuestion(module);
}

// Display quiz question
function displayQuizQuestion(module) {
    const question = module.questions[currentQuestionIndex];
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionText').textContent = question.question;

    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        if (currentQuizAnswers[currentQuestionIndex] === index) {
            button.classList.add('selected');
        }
        container.appendChild(button);
    });

    document.getElementById('feedbackDiv').classList.add('hidden');
}

// Select answer
function selectAnswer(index) {
    currentQuizAnswers[currentQuestionIndex] = index;
    displayQuizQuestion(trainingModules[currentModuleIndex]);
}

// Submit answer
function submitAnswer() {
    if (currentQuizAnswers[currentQuestionIndex] === null) {
        alert('Please select an answer!');
        return;
    }

    const module = trainingModules[currentModuleIndex];
    const question = module.questions[currentQuestionIndex];
    const selected = currentQuizAnswers[currentQuestionIndex];
    const isCorrect = selected === question.correct;

    const feedbackDiv = document.getElementById('feedbackDiv');
    feedbackDiv.classList.remove('hidden', 'success', 'error');

    if (isCorrect) {
        feedbackDiv.classList.add('success');
        feedbackDiv.textContent = '✓ Correct! Well done!';

        // Move to next question after delay
        setTimeout(() => {
            if (currentQuestionIndex < module.questions.length - 1) {
                currentQuestionIndex++;
                displayQuizQuestion(module);
            } else {
                markModuleAsCompleted();
                feedbackDiv.textContent = '✓ Quiz completed! Moving to next module...';
                setTimeout(() => nextLesson(), 1500);
            }
        }, 1500);
    } else {
        feedbackDiv.classList.add('error');
        feedbackDiv.textContent = `✗ Incorrect. The correct answer is: ${question.options[question.correct]}`;
    }
}

// Display simulation
function displaySimulation(module) {
    const view = document.getElementById('simulationView');
    view.classList.remove('hidden');
    document.getElementById('simTitle').textContent = module.title;
    document.getElementById('simDescription').textContent = module.description;
    document.getElementById('codeInput').value = module.template;
    document.getElementById('codeOutput').innerHTML = '';
}

// Run code simulation
function runCode() {
    const code = document.getElementById('codeInput').value;
    const output = document.getElementById('codeOutput');
    output.innerHTML = '';

    // Capture console output
    const logs = [];
    const originalLog = console.log;

    console.log = function(...args) {
        logs.push(args.map(arg => String(arg)).join(' '));
        originalLog.apply(console, args);
    };

    try {
        eval(code);
        if (logs.length === 0) {
            output.innerHTML = '<p style="color: #999;">No output (program ran successfully)</p>';
        } else {
            output.innerHTML = logs.map(log => `<div>${escapeHtml(log)}</div>`).join('');
        }
    } catch (error) {
        output.innerHTML = `<div style="color: #ff6b6b;">Error: ${escapeHtml(error.message)}</div>`;
    } finally {
        console.log = originalLog;
    }
}

// Escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

// Navigation
function nextLesson() {
    if (currentModuleIndex < trainingModules.length - 1) {
        currentModuleIndex++;
        currentQuestionIndex = 0;
        displayCurrentModule();
    }
}

function previousLesson() {
    if (currentModuleIndex > 0) {
        currentModuleIndex--;
        currentQuestionIndex = 0;
        displayCurrentModule();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.querySelectorAll('[id$="PrevBtn"]');
    const nextBtn = document.querySelectorAll('[id$="NextBtn"]');

    prevBtn.forEach(btn => btn.disabled = currentModuleIndex === 0);
    nextBtn.forEach(btn => btn.disabled = currentModuleIndex === trainingModules.length - 1);
}

// Mark module as completed
function markModuleAsCompleted() {
    completedModules.add(currentModuleIndex);
    saveProgress();
    updateStats();
}

// Update progress bar and stats
function updateStats() {
    const total = trainingModules.length;
    const completed = completedModules.size;
    const percentage = (completed / total) * 100;

    document.getElementById('progressFill').style.width = percentage + '%';
    document.getElementById('progressText').textContent = `Progress: ${Math.round(percentage)}%`;
    document.getElementById('completedCount').textContent = completed;
    document.getElementById('totalCount').textContent = total;
}

// Local storage functions
function saveProgress() {
    localStorage.setItem('pythonTrainingProgress', JSON.stringify(Array.from(completedModules)));
}

function loadProgress() {
    const saved = localStorage.getItem('pythonTrainingProgress');
    if (saved) {
        completedModules = new Set(JSON.parse(saved));
    }
}

function resetProgress() {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
        completedModules.clear();
        currentModuleIndex = 0;
        currentQuestionIndex = 0;
        saveProgress();
        initializeTraining();
    }
}

// Mobile sidebar toggle
function toggleSidebar() {
    const sidebar = document.querySelector('.module-sidebar');
    sidebar.classList.toggle('mobile-open');
}

// Close sidebar when selecting a module on mobile
function closeSidebarOnMobile() {
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.module-sidebar');
        sidebar.classList.remove('mobile-open');
    }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.module-sidebar');
    const toggleBtn = document.getElementById('sidebarToggle');

    if (window.innerWidth <= 768 && sidebar.classList.contains('mobile-open')) {
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            sidebar.classList.remove('mobile-open');
        }
    }
});

// Update module selection to close sidebar on mobile
const originalNextLesson = nextLesson;
const originalPreviousLesson = previousLesson;

window.nextLesson = function() {
    originalNextLesson();
    closeSidebarOnMobile();
};

window.previousLesson = function() {
    originalPreviousLesson();
    closeSidebarOnMobile();
};

// Prevent body scroll when sidebar is open on mobile
function updateBodyScroll() {
    const sidebar = document.querySelector('.module-sidebar');
    if (window.innerWidth <= 768 && sidebar.classList.contains('mobile-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('resize', updateBodyScroll);
document.querySelector('.module-sidebar').addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
        closeSidebarOnMobile();
    }
});

// Start the program
window.addEventListener('DOMContentLoaded', initializeTraining);
