// Enhanced Training Program Data with Detailed Explanations
const trainingModules = [
    {
        id: 1,
        title: "Module 1: Introduction to Python",
        type: "lesson",
        content: `
            <h3>What is Python?</h3>
            <p>Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It's called "Python" because the creator was a fan of Monty Python! Unlike compiled languages (like C++), Python code is executed line-by-line by an interpreter, making it easier to test and debug.</p>

            <h3>Key Characteristics of Python:</h3>
            <ul>
                <li><strong>Readable:</strong> Python's syntax looks like natural English, making it easier to understand</li>
                <li><strong>Interpreted:</strong> Code runs immediately without compiling, allowing instant feedback</li>
                <li><strong>Dynamically Typed:</strong> You don't need to specify variable types; Python figures them out</li>
                <li><strong>Object-Oriented:</strong> Supports modern programming paradigms</li>
            </ul>

            <h3>Why Learn Python?</h3>
            <ul>
                <li><strong>Beginner-Friendly:</strong> Simple syntax makes it ideal for learning programming fundamentals</li>
                <li><strong>Versatile:</strong> Used in web development, data science, AI, automation, and more</li>
                <li><strong>In-Demand:</strong> One of the most sought-after programming skills in tech jobs</li>
                <li><strong>Large Community:</strong> Millions of developers = lots of help, tutorials, and libraries</li>
                <li><strong>Used by Tech Giants:</strong> Google, Netflix, Spotify, Instagram, Dropbox all use Python</li>
            </ul>

            <h3>Real-World Applications:</h3>
            <ul>
                <li><strong>Web Development:</strong> Django and Flask frameworks power millions of websites</li>
                <li><strong>Data Science:</strong> NumPy, Pandas, and Matplotlib analyze billions of data points</li>
                <li><strong>Artificial Intelligence:</strong> TensorFlow and PyTorch power AI systems</li>
                <li><strong>Automation:</strong> Scripts automate repetitive tasks and save hours of work</li>
                <li><strong>Game Development:</strong> Pygame allows creation of 2D games</li>
            </ul>

            <h3>Your First Python Program</h3>
            <p>Every programmer's journey starts here:</p>
            <pre>print("Hello, World!")</pre>

            <h3>Breaking It Down:</h3>
            <ul>
                <li><code>print()</code> - This is a built-in function that displays text</li>
                <li><code>"Hello, World!"</code> - This is a string (text) enclosed in quotes</li>
                <li><code>()</code> - Parentheses tell Python to execute the function</li>
            </ul>

            <p>When you run this program, Python will display exactly: <code>Hello, World!</code></p>

            <h3>How to Run Python</h3>
            <ul>
                <li><strong>Online IDE:</strong> Replit.com (free, no installation needed) - Best for beginners!</li>
                <li><strong>Local Installation:</strong> Download from python.org and run in terminal</li>
                <li><strong>Code Editors:</strong> VS Code, PyCharm, Sublime Text</li>
                <li><strong>Jupyter Notebooks:</strong> Great for learning and experimenting</li>
            </ul>

            <h3>Python vs Other Languages - A Comparison:</h3>
            <table style="width:100%; border-collapse: collapse;">
                <tr style="background:#f0f0f0;">
                    <th style="border:1px solid #ddd; padding:8px;">Task</th>
                    <th style="border:1px solid #ddd; padding:8px;">Python</th>
                    <th style="border:1px solid #ddd; padding:8px;">JavaScript</th>
                    <th style="border:1px solid #ddd; padding:8px;">Java</th>
                </tr>
                <tr>
                    <td style="border:1px solid #ddd; padding:8px;">Print text</td>
                    <td style="border:1px solid #ddd; padding:8px;"><code>print("Hi")</code></td>
                    <td style="border:1px solid #ddd; padding:8px;"><code>console.log("Hi")</code></td>
                    <td style="border:1px solid #ddd; padding:8px;"><code>System.out.println("Hi")</code></td>
                </tr>
                <tr style="background:#f9f9f9;">
                    <td style="border:1px solid #ddd; padding:8px;">Ease</td>
                    <td style="border:1px solid #ddd; padding:8px;">Very Easy</td>
                    <td style="border:1px solid #ddd; padding:8px;">Easy</td>
                    <td style="border:1px solid #ddd; padding:8px;">Harder</td>
                </tr>
            </table>

            <h3>Why Python Wins for Beginners:</h3>
            <p>Python requires less setup, clearer syntax, and faster feedback. You can focus on learning programming concepts instead of wrestling with complex syntax.</p>
        `
    },
    {
        id: 2,
        title: "Module 2: Variables and Data Types - Deep Dive",
        type: "lesson",
        content: `
            <h3>Understanding Variables: The Container Metaphor</h3>
            <p>Imagine variables as labeled boxes in a warehouse. Each box holds information, and the label tells you what's inside:</p>
            <pre>student_name = "Alice"  # This box contains a student's name
student_age = 20         # This box contains their age
gpa = 3.85               # This box contains their GPA</pre>

            <p>Later, you can access or change what's in these boxes:</p>
            <pre>print(student_name)  # Looks in the "student_name" box and displays "Alice"
student_age = 21         # Changes the value in the "student_age" box to 21</pre>

            <h3>Python's Data Types Explained in Detail:</h3>

            <p><strong>1. String (str) - Text Data</strong></p>
            <p>Strings hold any text you want to store. They can include letters, numbers, symbols, and spaces.</p>
            <pre># Different ways to create strings
greeting = "Hello"
message = 'World'  # Single or double quotes both work
long_text = "This is a longer string with spaces and numbers like 123"
empty = ""  # Even empty strings are valid</pre>

            <p><strong>Key Insight:</strong> Numbers inside quotes are treated as text, not math!</p>
            <pre>"5" + "3" gives "53" (concatenation - joining text)
 5 + 3 gives 8 (math addition)</pre>

            <p><strong>2. Integer (int) - Whole Numbers</strong></p>
            <p>Integers are whole numbers without decimals. They can be positive, negative, or zero.</p>
            <pre>age = 25
temperature = -10
count = 0
large_number = 1000000</pre>

            <p><strong>Why use integers?</strong> They're perfect for counting, ages, scores, and anything that doesn't need decimals.</p>

            <p><strong>3. Float (float) - Decimal Numbers</strong></p>
            <p>Floats represent numbers with decimal points. Essential for measurements, prices, and scientific calculations.</p>
            <pre>price = 19.99
height = 5.8
pi = 3.14159
temperature = 98.6</pre>

            <p><strong>Important:</strong> Even <code>5.0</code> is a float because of the decimal point. Python treats it differently from the integer <code>5</code>!</p>

            <p><strong>4. Boolean (bool) - True or False</strong></p>
            <p>Booleans are the simplest data type. They can only be one of two values: <code>True</code> or <code>False</code> (capital letters matter!)</p>
            <pre>is_student = True
is_raining = False
has_license = True</pre>

            <p><strong>When to use booleans:</strong> For yes/no questions, on/off switches, or condition checking</p>

            <h3>Checking Variable Types with type()</h3>
            <p>The <code>type()</code> function is your detective tool. It reveals what type of data a variable contains:</p>
            <pre>print(type(25))        # Output: &lt;class 'int'&gt;
print(type(25.5))      # Output: &lt;class 'float'&gt;
print(type("hello"))   # Output: &lt;class 'str'&gt;
print(type(True))      # Output: &lt;class 'bool'&gt;</pre>

            <p><strong>Why this matters:</strong> Different data types behave differently! You can add two integers, but you can't add an integer to a string directly.</p>

            <h3>Type Conversion - Changing Data Types</h3>
            <p>Sometimes you need to convert between types:</p>
            <pre># String to Integer
age_text = "25"
age_number = int(age_text)  # Now it's 25 (as a number, not text)

# Integer to String
count = 10
count_text = str(count)  # Now it's "10" (as text)

# String to Float
price_text = "19.99"
price_num = float(price_text)  # Now it's 19.99 (as a number)</pre>

            <p><strong>Common Mistake:</strong> <code>int("25.5")</code> will cause an error! You must first convert to float, then to int: <code>int(float("25.5"))</code></p>

            <h3>Variable Naming - Best Practices</h3>
            <p>Good variable names make code readable and maintainable:</p>
            <pre># ✓ Good names - clear and descriptive
student_age = 20
user_email = "alice@example.com"
is_member = True

# ✗ Bad names - unclear and confusing
a = 20
x = "alice@example.com"
y = True</pre>

            <p><strong>Naming Rules (Python enforces these):</strong></p>
            <ul>
                <li>Must start with a letter (a-z, A-Z) or underscore (_)</li>
                <li>Can contain letters, numbers, and underscores</li>
                <li>Cannot contain spaces or special characters (except underscore)</li>
                <li>Are case-sensitive: <code>Age</code>, <code>age</code>, and <code>AGE</code> are three different variables</li>
                <li>Cannot be Python reserved words (like if, for, while, etc.)</li>
            </ul>

            <p><strong>Naming Conventions (Python style guide recommends):</strong></p>
            <ul>
                <li>Use lowercase with underscores: <code>student_name</code> (not <code>studentName</code>)</li>
                <li>Use plural for collections: <code>students</code> (not <code>student_list</code>)</li>
                <li>Use constants in ALL_CAPS: <code>PI = 3.14159</code></li>
            </ul>

            <h3>Memory Efficiency - Why Data Types Matter</h3>
            <p>Different data types use different amounts of computer memory:</p>
            <ul>
                <li>Boolean: 1 byte (most efficient)</li>
                <li>Integer: 4-8 bytes</li>
                <li>Float: 8 bytes</li>
                <li>String: Varies based on length</li>
            </ul>

            <p>For large programs processing millions of records, choosing the right data type matters for performance!</p>
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
                correct: 1,
                explanation: "3.14 has a decimal point, making it a float (floating-point number). Integers must be whole numbers without decimals. If it were 3 or 314, it would be an int."
            },
            {
                question: "Which variable name is valid in Python?",
                options: ["2name", "_name", "name-2", "name 2"],
                correct: 1,
                explanation: "_name is valid because variables can start with an underscore or letter. '2name' starts with a number (invalid), 'name-2' contains a dash (invalid), and 'name 2' contains a space (invalid)."
            },
            {
                question: "What does the print() function do?",
                options: ["Creates a variable", "Displays output on screen", "Deletes a variable", "Checks variable type"],
                correct: 1,
                explanation: "print() is Python's output function. It takes what's inside the parentheses and displays it to the user. The other options are incorrect: 'Creates a variable' would be assignment (x = 5), 'Deletes' would be del, and 'Checks type' would be type()."
            },
            {
                question: 'What is the data type of `x = "123"`?',
                options: ["int", "float", "str", "bool"],
                correct: 2,
                explanation: "\"123\" is a string because it's enclosed in quotes. Even though it contains numbers, the quotes make it text. Without quotes (123), it would be an integer. Python distinguishes between the number 123 and the text \"123\"."
            },
            {
                question: "Which is a valid Python variable assignment?",
                options: ['name = Alice', 'name = "Alice"', "name = 'Alice'", "Both b and c"],
                correct: 3,
                explanation: "Both 'name = \"Alice\"' and name = 'Alice' are valid because Alice is in quotes (making it a string). 'name = Alice' without quotes would try to access a variable named Alice, which likely doesn't exist, causing an error. Python accepts both single and double quotes for strings."
            },
            {
                question: "What will this code output? `print(type('hello'))`",
                options: ["str", "<class 'str'>", "hello", "Error"],
                correct: 1,
                explanation: "The type() function returns the class information in the format <class 'str'>. This shows that 'hello' is a string type. The function doesn't just return 'str', it includes the full class representation."
            }
        ]
    },
    {
        id: 4,
        title: "Simulation: Create Variables & Check Types",
        type: "simulation",
        description: "Create different variables with different data types and use print() and type() to display them. Try changing the values and observe how types change.",
        template: `# Explore Variables and Data Types
# Create variables of different types
name = "Alice"
age = 25
height = 5.8
is_student = True

# Display the variables
print("Name:", name)
print("Age:", age)
print("Height:", height)
print("Is Student:", is_student)

# Check their types
print("\\nData Types:")
print("Type of name:", type(name))
print("Type of age:", type(age))
print("Type of height:", type(height))
print("Type of is_student:", type(is_student))

# Try modifying values
age = 26
print("\\nAfter modification:")
print("New age:", age, "- Type:", type(age))

# Type conversion
age_as_text = str(age)
print("Age as text:", age_as_text, "- Type:", type(age_as_text))`
    },
    {
        id: 5,
        title: "Module 3: Basic Operations & Operators",
        type: "lesson",
        content: `
            <h3>Understanding Operators - The Tools of Computation</h3>
            <p>Operators are symbols that perform actions on variables and values. Think of them as mathematical and logical tools.</p>

            <h3>1. Arithmetic Operators - Math Operations</h3>
            <p>These operators perform mathematical calculations:</p>

            <p><strong>Addition (+)</strong></p>
            <pre>result = 10 + 5     # 15
total = 100 + 50    # 150
combined = "Hello" + " " + "World"  # "Hello World" (strings concatenate)</pre>

            <p><strong>Subtraction (-)</strong></p>
            <pre>difference = 10 - 5  # 5
balance = 100 - 30   # 70 (money left)
negative = 5 - 10    # -5</pre>

            <p><strong>Multiplication (*)</strong></p>
            <pre>product = 10 * 5   # 50
doubled = 2 * 21     # 42
string_repeat = "Ha" * 3  # "HaHaHa" (repeats strings!)</pre>

            <p><strong>Division (/)</strong></p>
            <p>Important: Division ALWAYS returns a float, even if the result is a whole number!</p>
            <pre>result = 10 / 5   # 2.0 (not 2!)
decimal = 7 / 2    # 3.5
money = 100 / 3    # 33.333...</pre>

            <p><strong>Floor Division (//)</strong></p>
            <p>Divides and rounds down to the nearest whole number:</p>
            <pre>result = 7 // 2    # 3 (not 3.5)
result = 10 // 3   # 3 (not 3.333...)
result = 9 // 4    # 2</pre>

            <p><strong>Modulus (%) - The Remainder Operator</strong></p>
            <p>Returns the remainder after division. This is surprisingly useful!</p>
            <pre>remainder = 10 % 3    # 1 (10 ÷ 3 = 3 remainder 1)
even_check = 5 % 2    # 1 (if odd)
even_check = 4 % 2    # 0 (if even)
last_digit = 12345 % 10  # 5 (extracts last digit!)</pre>

            <p><strong>Real-world example:</strong> To check if a number is even: <code>if number % 2 == 0: print("Even")</code></p>

            <p><strong>Exponentiation (**)</strong></p>
            <p>Raises a number to a power:</p>
            <pre>square = 5 ** 2      # 25 (5 × 5)
cube = 3 ** 3        # 27 (3 × 3 × 3)
power = 2 ** 10      # 1024 (2 to the power of 10)</pre>

            <h3>2. String Operations</h3>

            <p><strong>Concatenation (+) - Joining Strings</strong></p>
            <pre>first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name  # "John Doe"

greeting = "Hello" + ", " + "welcome!"  # "Hello, welcome!"</pre>

            <p><strong>Repetition (*) - Repeating Strings</strong></p>
            <pre>border = "=" * 20  # "===================="
line = "-" * 10    # "----------"
laughter = "Ha" * 3  # "HaHaHa"</pre>

            <p><strong>Important Limitation:</strong> You can't add different types directly!</p>
            <pre>age = 25
message = "My age is " + age  # ERROR!
message = "My age is " + str(age)  # CORRECT - convert age to string first</pre>

            <h3>3. Comparison Operators - Checking Conditions</h3>
            <p>These operators compare values and return True or False:</p>

            <pre>x = 10
y = 5

x == y   # False (10 is not equal to 5)
x != y   # True (10 is not equal to 5)
x > y    # True (10 is greater than 5)
x < y    # False (10 is not less than 5)
x >= y   # True (10 is greater than or equal to 5)
x <= y   # False (10 is not less than or equal to 5)</pre>

            <p><strong>Common Mistake:</strong> Don't confuse = (assignment) with == (comparison)!</p>
            <pre>x = 10      # ASSIGNS the value 10 to x
x == 10     # CHECKS if x equals 10 (returns True or False)</pre>

            <h3>4. Assignment Operators - Shorthand Updates</h3>
            <p>These operators update variables in shorthand:</p>

            <pre>x = 10
x += 5   # Same as: x = x + 5  → x is now 15
x -= 3   # Same as: x = x - 3  → x is now 12
x *= 2   # Same as: x = x * 2  → x is now 24
x /= 4   # Same as: x = x / 4  → x is now 6.0</pre>

            <h3>5. Order of Operations (PEMDAS) - The Hierarchy</h3>
            <p>Python follows the same order as math class:</p>

            <pre>result = 2 + 3 * 4       # 14 (multiply first: 3*4=12, then 2+12=14)
result = (2 + 3) * 4     # 20 (parentheses first: 2+3=5, then 5*4=20)

result = 10 - 6 / 2      # 7 (divide first: 6/2=3, then 10-3=7)
result = (10 - 6) / 2    # 2.0 (parentheses first: 10-6=4, then 4/2=2)</pre>

            <p><strong>Order (from highest to lowest priority):</strong></p>
            <ol>
                <li>Parentheses: ()</li>
                <li>Exponentiation: **</li>
                <li>Multiplication, Division, Floor Division, Modulus: *, /, //, %</li>
                <li>Addition, Subtraction: +, -</li>
            </ol>

            <h3>Practical Example - Calculating Total Price:</h3>
            <pre># Store bought 3 items at $15 each, with 10% tax
price_per_item = 15
quantity = 3
tax_rate = 0.10

subtotal = price_per_item * quantity  # 45
tax = subtotal * tax_rate             # 4.50
total = subtotal + tax                # 49.50

print(f"Subtotal: \${subtotal}")
print(f"Tax: \${tax:.2f}")
print(f"Total: \${total:.2f}")</pre>
        `
    },
    {
        id: 6,
        title: "Module 4: Conditional Logic (if/else/elif)",
        type: "lesson",
        content: `
            <h3>What is Conditional Logic?</h3>
            <p>Conditional logic allows your program to make decisions. It's like programming's version of "if this happens, do that".</p>

            <h3>The if Statement - Making Simple Decisions</h3>
            <p>The most basic conditional. If a condition is True, the code inside executes:</p>

            <pre>age = 18

if age >= 18:
    print("You are an adult")
    print("You can vote!")
    # All indented code runs only if age >= 18</pre>

            <p><strong>Key Points:</strong></p>
            <ul>
                <li>The condition (<code>age >= 18</code>) must evaluate to True or False</li>
                <li>The colon (:) ends the if line</li>
                <li>The indented code (4 spaces) runs ONLY if condition is True</li>
                <li>If the condition is False, the indented code is skipped entirely</li>
            </ul>

            <p><strong>What if the condition is False?</strong></p>
            <pre>age = 15

if age >= 18:
    print("You are an adult")  # This doesn't print!

print("Program continues here")  # This always prints</pre>

            <h3>The if-else Statement - Two Paths</h3>
            <p>Executes one block if True, a different block if False:</p>

            <pre>score = 85

if score >= 90:
    print("Grade: A - Excellent!")
else:
    print("Grade: B or lower")  # This runs because score is not >= 90</pre>

            <p><strong>Flow diagram:</strong></p>
            <pre>Is score >= 90?
├─ YES → Print "Grade: A"
└─ NO  → Print "Grade: B or lower"</pre>

            <h3>The if-elif-else Statement - Multiple Paths</h3>
            <p>Checks multiple conditions in sequence:</p>

            <pre>score = 75

if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")  # This prints!
else:
    print("Grade: F")</pre>

            <p><strong>Important behavior:</strong></p>
            <ul>
                <li>Checks conditions from top to bottom</li>
                <li>Stops as soon as one condition is True</li>
                <li>Only ONE block executes, not multiple</li>
                <li>The final else catches everything else (optional)</li>
            </ul>

            <h3>Comparison Operators - Creating Conditions</h3>
            <pre>x = 10
y = 5

x == y    # False - equal to?
x != y    # True  - not equal to?
x > y     # True  - greater than?
x < y     # False - less than?
x >= y    # True  - greater than or equal?
x <= y    # False - less than or equal?</pre>

            <h3>Logical Operators - Combining Conditions</h3>

            <p><strong>and - Both conditions must be True</strong></p>
            <pre>age = 25
has_license = True

if age >= 18 and has_license:
    print("You can drive!")  # Only prints if BOTH are True

# Truth table:
# True and True   = True
# True and False  = False
# False and True  = False
# False and False = False</pre>

            <p><strong>Real example - Bank withdrawal:</strong></p>
            <pre>balance = 500
withdrawal = 100

if balance >= withdrawal and withdrawal > 0:
    print("Withdrawal approved")
    balance -= withdrawal  # Only if both conditions are true</pre>

            <p><strong>or - At least one condition must be True</strong></p>
            <pre>day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("It's the weekend!")  # Prints if either condition is True

# Truth table:
# True or True   = True
# True or False  = True
# False or True  = True
# False or False = False</pre>

            <p><strong>Real example - Holiday check:</strong></p>
            <pre>is_holiday = False
is_weekend = True

if is_holiday or is_weekend:
    print("No work today!")  # Prints because at least one is True</pre>

            <p><strong>not - Reverses True/False</strong></p>
            <pre>is_raining = True

if not is_raining:
    print("Let's go outside!")  # Doesn't print (inverted)

# Works like:
# not True  = False
# not False = True</pre>

            <p><strong>Combining all three:</strong></p>
            <pre>age = 25
has_license = True
is_suspended = False

if age >= 18 and has_license and not is_suspended:
    print("You can legally drive")  # All three must be true</pre>

            <h3>Nested Conditionals - Conditions Inside Conditions</h3>
            <p>You can put if statements inside other if statements:</p>

            <pre>age = 25
has_license = True

if age >= 18:
    print("You are old enough to drive")

    if has_license:
        print("And you have a license!")
    else:
        print("But you need to get a license first")
else:
    print("You're too young to drive")</pre>

            <h3>Common Mistakes to Avoid</h3>
            <ul>
                <li><code>if x = 5:</code> is WRONG (assignment). Use <code>if x == 5:</code> (comparison)</li>
                <li>Forgetting the colon after the condition</li>
                <li>Not indenting code properly (Python requires exact indentation)</li>
                <li>Using <code>elif</code> after <code>else</code> (must come before)</li>
            </ul>

            <h3>Practical Example - Student Grading System</h3>
            <pre>score = 85
attendance = 0.95  # 95% attendance

if score >= 90 and attendance >= 0.9:
    grade = "A"
    status = "Excellent"
elif score >= 80 and attendance >= 0.8:
    grade = "B"
    status = "Good"
elif score >= 70:
    grade = "C"
    status = "Pass"
else:
    grade = "F"
    status = "Fail"

print(f"Score: {score}, Grade: {grade}, Status: {status}")</pre>
        `
    },
    {
        id: 7,
        title: "Quiz: Conditionals & Logic",
        type: "quiz",
        questions: [
            {
                question: "What will this code print? `if 5 > 3: print('Yes')`",
                options: ["Yes", "No", "Error", "Nothing"],
                correct: 0,
                explanation: "The condition (5 > 3) is True, so the print statement executes and displays 'Yes'. If the condition were False, nothing would print because there's no else clause to provide an alternative."
            },
            {
                question: "What operator checks if two values are equal?",
                options: ["=", "==", "!=", "==="],
                correct: 1,
                explanation: "Single = is assignment (x = 5). Double == is comparison (x == 5). The === operator doesn't exist in Python. Always use == to compare values, not = which modifies the variable."
            },
            {
                question: "When do we use elif?",
                options: ["To start a new if statement", "To check multiple conditions", "To end an if statement", "To repeat code"],
                correct: 1,
                explanation: "elif (else if) checks additional conditions when the previous if is False. It allows you to create multiple decision paths. Use elif between if and else to handle different cases sequentially."
            },
            {
                question: "What does the 'and' operator do?",
                options: ["Combines strings", "Checks if both conditions are true", "Checks if either condition is true", "Reverses a condition"],
                correct: 1,
                explanation: "AND requires both conditions to be True for the whole expression to be True. If either is False, the result is False. Example: (age > 18 AND has_license) only true if both conditions are satisfied."
            },
            {
                question: "What will this code print? `x = 10\\nif x < 15 and x > 5: print('True')`",
                options: ["True", "False", "Error", "Nothing"],
                correct: 0,
                explanation: "Both conditions are True (10 < 15 is True AND 10 > 5 is True), so the entire AND expression is True, and 'True' prints. If either condition were False, nothing would print."
            },
            {
                question: "What does 'not' do?",
                options: ["Negates a condition", "Checks equality", "Combines conditions", "Reverses True to False"],
                correct: 0,
                explanation: "The 'not' operator reverses boolean values: 'not True' becomes False, and 'not False' becomes True. It's useful for saying 'if something is NOT true' instead of checking for equality."
            }
        ]
    },
    {
        id: 8,
        title: "Simulation: Temperature Grade Classifier",
        type: "simulation",
        description: "Write a program that classifies temperatures and decides on appropriate clothing. Use if/elif/else statements.",
        template: `# Temperature Classification System
# Classify temperature and suggest clothing

temperature = 75  # Fahrenheit
is_humid = False

print(f"Temperature: {temperature}°F")
print("-" * 40)

# Check temperature ranges
if temperature >= 85:
    condition = "Hot"
    suggestion = "Wear light, breathable clothing"
elif temperature >= 70:
    condition = "Warm"
    suggestion = "Short sleeves or light jacket"
elif temperature >= 50:
    condition = "Mild"
    suggestion = "A light jacket is recommended"
else:
    condition = "Cold"
    suggestion = "Wear a heavy coat and warm clothes"

print(f"Condition: {condition}")
print(f"Suggestion: {suggestion}")

# Check humidity for additional advice
if is_humid and temperature >= 70:
    print("⚠ High humidity detected! Drink water frequently.")

# Fun fact checker
if temperature == 32:
    print("Fun fact: This is the freezing point of water!")`
    },
    {
        id: 9,
        title: "Module 5: Loops - Repeating Code",
        type: "lesson",
        content: `
            <h3>What are Loops?</h3>
            <p>Loops allow you to repeat code multiple times without writing it over and over. Imagine if you needed to print "Hello" 100 times - a loop makes this possible in just a few lines!</p>

            <h3>The for Loop - Known Number of Iterations</h3>
            <p>Use a for loop when you know exactly how many times to repeat:</p>

            <pre>for i in range(5):
    print(i)

# Output:
# 0
# 1
# 2
# 3
# 4</pre>

            <p><strong>Breaking it down:</strong></p>
            <ul>
                <li><code>for</code> - Keyword that starts the loop</li>
                <li><code>i</code> - Variable that changes each iteration (could be any name)</li>
                <li><code>in range(5)</code> - Creates numbers 0 through 4</li>
                <li><code>:</code> - Colon ends the line</li>
                <li>Indented code - Runs repeatedly for each value</li>
            </ul>

            <h3>Understanding range() - The Number Generator</h3>
            <p><code>range()</code> is a powerful function that generates sequences of numbers:</p>

            <p><strong>range(5) - Start at 0, go up to (but not including) 5:</strong></p>
            <pre>for num in range(5):
    print(num)
# Prints: 0, 1, 2, 3, 4 (NOT 5!)</pre>

            <p><strong>range(2, 8) - Start at 2, go up to (but not including) 8:</strong></p>
            <pre>for num in range(2, 8):
    print(num)
# Prints: 2, 3, 4, 5, 6, 7 (NOT 8!)</pre>

            <p><strong>range(0, 10, 2) - Start at 0, go to 10, step by 2:</strong></p>
            <pre>for num in range(0, 10, 2):
    print(num)
# Prints: 0, 2, 4, 6, 8 (counts by 2s)</pre>

            <p><strong>Counting backwards with negative step:</strong></p>
            <pre>for num in range(5, 0, -1):
    print(num)
# Prints: 5, 4, 3, 2, 1 (countdown!)</pre>

            <h3>Looping Through Lists - Accessing Elements</h3>
            <p>Loops are perfect for going through each item in a list:</p>

            <pre>fruits = ["apple", "banana", "cherry", "date"]

# Method 1: Loop through items directly
for fruit in fruits:
    print(fruit)
# Prints: apple, banana, cherry, date

# Method 2: Loop through indices
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")
# Prints: 0: apple, 1: banana, 2: cherry, 3: date</pre>

            <p><strong>Why two methods?</strong></p>
            <ul>
                <li>Method 1 is simpler when you just need each item</li>
                <li>Method 2 is useful when you need the position/index too</li>
            </ul>

            <h3>The while Loop - Unknown Number of Iterations</h3>
            <p>Use while when you don't know how many times to repeat:</p>

            <pre>count = 0
while count < 5:
    print(count)
    count += 1

# Output:
# 0
# 1
# 2
# 3
# 4</pre>

            <p><strong>How it works:</strong></p>
            <ol>
                <li>Check if count < 5 (True, so continue)</li>
                <li>Execute the loop body</li>
                <li>Increment count</li>
                <li>Check condition again (repeat)</li>
                <li>When condition is False, exit loop</li>
            </ol>

            <p><strong>Real-world example - User input validation:</strong></p>
            <pre>password = ""
while len(password) < 8:
    password = input("Password must be 8+ characters: ")
    if len(password) < 8:
        print("Too short! Try again.")

print("Password accepted!")</pre>

            <h3>Loop Control Statements - Modifying Loop Behavior</h3>

            <p><strong>break - Exit the Loop Early</strong></p>
            <p>Stops the loop immediately when a condition is met:</p>
            <pre>for i in range(10):
    if i == 5:
        break  # Exit loop when i equals 5
    print(i)

# Prints: 0, 1, 2, 3, 4 (stops at 5)</pre>

            <p><strong>Searching example:</strong></p>
            <pre>numbers = [10, 20, 30, 40, 50]
target = 30

for num in numbers:
    if num == target:
        print(f"Found {target}!")
        break  # Stop searching once found
    else:
        print(f"Checking {num}...")</pre>

            <p><strong>continue - Skip to Next Iteration</strong></p>
            <p>Skips the current iteration and goes to the next one:</p>
            <pre>for i in range(5):
    if i == 2:
        continue  # Skip when i equals 2
    print(i)

# Prints: 0, 1, 3, 4 (skips 2)</pre>

            <p><strong>Filtering example - print only even numbers:</strong></p>
            <pre>for i in range(1, 11):
    if i % 2 == 1:  # If odd
        continue     # Skip odd numbers
    print(i)  # Only even numbers print: 2, 4, 6, 8, 10</pre>

            <h3>Nested Loops - Loops Inside Loops</h3>
            <p>You can put loops inside other loops:</p>

            <pre>for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")

# Output:
# i=0, j=0
# i=0, j=1
# i=1, j=0
# i=1, j=1
# i=2, j=0
# i=2, j=1</pre>

            <p><strong>Creating a multiplication table:</strong></p>
            <pre>print("Multiplication Table:")
for i in range(1, 4):  # Rows
    for j in range(1, 4):  # Columns
        product = i * j
        print(f"{i}x{j}={product}", end="  ")
    print()  # New line after each row</pre>

            <h3>Common Loop Mistakes</h3>
            <ul>
                <li><strong>Infinite loops:</strong> <code>while True:</code> without a break statement</li>
                <li><strong>Off-by-one errors:</strong> Forgetting that range(5) goes 0-4, not 1-5</li>
                <li><strong>Wrong indentation:</strong> Code not indented won't be in the loop</li>
                <li><strong>Modifying list while looping:</strong> Can cause unexpected behavior</li>
            </ul>

            <h3>Practical Example - Sum Calculator</h3>
            <pre>numbers = [10, 20, 30, 40, 50]
total = 0

for num in numbers:
    total += num
    print(f"Added {num}, running total: {total}")

print(f"\\nFinal sum: {total}")
average = total / len(numbers)
print(f"Average: {average}")</pre>
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
                correct: 1,
                explanation: "range(5) produces 0, 1, 2, 3, 4. It starts at 0 and goes UP TO (but not including) 5. This is a common source of confusion - remember it's 'up to' not 'up to and including'."
            },
            {
                question: "Which loop should you use when you know exactly how many times to repeat?",
                options: ["while", "for", "if", "def"],
                correct: 1,
                explanation: "The 'for' loop is designed for when you know the exact number of iterations (like looping 5 times or through a list). 'while' is for unknown counts. 'if' and 'def' aren't loops."
            },
            {
                question: "What does 'break' do in a loop?",
                options: ["Pauses the loop", "Exits the loop early", "Skips the current iteration", "Restarts the loop"],
                correct: 1,
                explanation: "break immediately exits/stops the loop and continues with code after the loop. This is different from 'continue' which skips to the next iteration. Use break when you find what you're searching for."
            },
            {
                question: "What does 'continue' do?",
                options: ["Exits the loop", "Repeats the loop", "Skips to next iteration", "Stops the program"],
                correct: 2,
                explanation: "continue skips the rest of the current iteration and jumps to the next one. So 'for i in range(5): if i==2: continue' will print 0, 1, 3, 4 (skipping 2)."
            },
            {
                question: "How many times will this loop run? `for i in range(2, 8, 2):`",
                options: ["6 times", "3 times", "8 times", "2 times"],
                correct: 1,
                explanation: "range(2, 8, 2) produces: 2, 4, 6 (that's 3 values). It starts at 2, goes up to (not including) 8, counting by 2s. So it produces 3 numbers, meaning 3 iterations."
            },
            {
                question: "What will this print? `for i in range(3): print(i)`",
                options: ["0 1 2", "1 2 3", "0\\n1\\n2", "Error"],
                correct: 2,
                explanation: "It prints 0, 1, 2 each on separate lines (\\n means newline). The print() function adds a newline after each item by default. If you wanted them on one line, use end=' ' parameter."
            }
        ]
    },
    {
        id: 11,
        title: "Simulation: Multiplication Table Generator",
        type: "simulation",
        description: "Create a program that generates and displays a multiplication table. Use nested loops to create rows and columns.",
        template: `# Multiplication Table Generator
# This demonstrates nested loops

table_size = 7

print("Multiplication Table (1-7)")
print("-" * 35)

# Print header
print("   |", end="")
for i in range(1, table_size + 1):
    print(f"{i:4}", end="")
print()
print("-" * 35)

# Print rows
for i in range(1, table_size + 1):
    print(f" {i} |", end="")  # Row number
    for j in range(1, table_size + 1):
        product = i * j
        print(f"{product:4}", end="")
    print()  # New line after each row

print("-" * 35)
print("\\nTry changing table_size to see different sizes!")`
    },
    {
        id: 12,
        title: "Module 6: Lists & Collections - Managing Data",
        type: "lesson",
        content: `
            <h3>What is a List?</h3>
            <p>A list is a collection of items stored in a single variable. It's like a shopping list or a classroom roster - multiple items in one organized container.</p>

            <h3>Creating Lists</h3>
            <p>Lists are created with square brackets []:</p>

            <pre># Different types of lists
fruits = ["apple", "banana", "cherry"]
numbers = [1, 2, 3, 4, 5]
mixed = ["Alice", 25, 5.8, True]  # Mixed data types
empty = []  # Empty list, can add items later

# Multi-line for readability
shopping_list = [
    "milk",
    "bread",
    "eggs",
    "cheese"
]</pre>

            <h3>Accessing List Items - Zero-Based Indexing</h3>
            <p><strong>CRITICAL CONCEPT:</strong> Lists are zero-indexed! The first item is at index 0, not 1.</p>

            <pre>fruits = ["apple", "banana", "cherry", "date", "elderberry"]

print(fruits[0])   # "apple" (FIRST item)
print(fruits[1])   # "banana" (SECOND item)
print(fruits[2])   # "cherry"
print(fruits[4])   # "elderberry" (LAST item)
print(fruits[-1])  # "elderberry" (negative index = from end)
print(fruits[-2])  # "date" (second from end)</pre>

            <p><strong>Why is this important?</strong> Many beginners expect fruits[1] to be "apple", but it's actually "banana"!</p>

            <p><strong>What happens with invalid indices?</strong></p>
            <pre>fruits = ["apple", "banana", "cherry"]
print(fruits[5])  # ERROR! IndexError: list index out of range</pre>

            <h3>List Slicing - Getting Portions</h3>
            <p>Extract a portion of a list using the syntax: list[start:end]</p>

            <pre>numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(numbers[1:4])      # [1, 2, 3] (from index 1 to 3, not including 4)
print(numbers[:5])       # [0, 1, 2, 3, 4] (from start to index 4)
print(numbers[5:])       # [5, 6, 7, 8, 9] (from index 5 to end)
print(numbers[-3:])      # [7, 8, 9] (last 3 items)
print(numbers[::2])      # [0, 2, 4, 6, 8] (every 2nd item)</pre>

            <p><strong>Remember: The end index is exclusive (not included)!</strong></p>

            <h3>Essential List Methods - Modifying Lists</h3>

            <p><strong>append() - Add an item to the end</strong></p>
            <pre>fruits = ["apple", "banana"]
fruits.append("cherry")
# fruits is now ["apple", "banana", "cherry"]

# You can append any data type
scores = [90, 85]
scores.append(95)
scores.append("Perfect!")  # Mixed types allowed
# scores is now [90, 85, 95, "Perfect!"]</pre>

            <p><strong>insert() - Add an item at a specific position</strong></p>
            <pre>fruits = ["apple", "cherry"]
fruits.insert(1, "banana")  # Insert "banana" at index 1
# fruits is now ["apple", "banana", "cherry"]

# Insert at the beginning
fruits.insert(0, "grape")
# fruits is now ["grape", "apple", "banana", "cherry"]</pre>

            <p><strong>remove() - Remove a specific item</strong></p>
            <pre>fruits = ["apple", "banana", "cherry", "banana"]
fruits.remove("banana")  # Removes FIRST "banana" only
# fruits is now ["apple", "cherry", "banana"]

# If item doesn't exist, error occurs!
fruits.remove("mango")  # ERROR! ValueError: list.remove(x): x not in list</pre>

            <p><strong>pop() - Remove and return an item</strong></p>
            <pre>fruits = ["apple", "banana", "cherry"]
last = fruits.pop()      # Removes and returns "cherry"
print(last)              # "cherry"
print(fruits)            # ["apple", "banana"]

second = fruits.pop(1)   # Remove item at index 1
print(second)            # "banana"
print(fruits)            # ["apple"]</pre>

            <p><strong>len() - Get the number of items</strong></p>
            <pre>fruits = ["apple", "banana", "cherry"]
print(len(fruits))  # 3

empty = []
print(len(empty))   # 0</pre>

            <p><strong>index() - Find the position of an item</strong></p>
            <pre>fruits = ["apple", "banana", "cherry"]
position = fruits.index("banana")  # 1
print(position)  # 1

# Error if not found
position = fruits.index("mango")  # ValueError!</pre>

            <p><strong>sort() - Arrange items in order</strong></p>
            <pre>numbers = [3, 1, 4, 1, 5]
numbers.sort()
print(numbers)  # [1, 1, 3, 4, 5]

words = ["zebra", "apple", "mango"]
words.sort()
print(words)  # ["apple", "mango", "zebra"]</pre>

            <p><strong>reverse() - Flip the order</strong></p>
            <pre>numbers = [1, 2, 3, 4, 5]
numbers.reverse()
print(numbers)  # [5, 4, 3, 2, 1]</pre>

            <h3>Looping Through Lists</h3>
            <pre>fruits = ["apple", "banana", "cherry"]

# Simple loop
for fruit in fruits:
    print(fruit)

# With index
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# Using enumerate (Python's way!)
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")</pre>

            <h3>Dictionaries - Key-Value Storage</h3>
            <p>Dictionaries store data as pairs: a key connects to a value. Like a real dictionary where the word is the key and the definition is the value.</p>

            <pre>person = {
    "name": "Alice",
    "age": 25,
    "city": "New York"
}

print(person["name"])  # "Alice"
print(person["age"])   # 25</pre>

            <p><strong>Creating dictionaries:</strong></p>
            <pre>student = {}  # Empty dictionary
student["name"] = "Bob"  # Add items
student["grade"] = "A"
student["age"] = 20

print(student)  # {'name': 'Bob', 'grade': 'A', 'age': 20}</pre>

            <p><strong>Dictionary methods:</strong></p>
            <pre>person = {"name": "Charlie", "age": 30, "email": "charlie@email.com"}

# Get keys
keys = person.keys()      # dict_keys(['name', 'age', 'email'])

# Get values
values = person.values()  # dict_values(['Charlie', 30, 'charlie@email.com'])

# Get items (key-value pairs)
items = person.items()    # dict_items([('name', 'Charlie'), ...])

# Check if key exists
if "name" in person:
    print("Name exists!")  # This prints

# Get with default
age = person.get("age")       # 30
phone = person.get("phone", "Not provided")  # "Not provided" (default)</pre>

            <h3>Practical Example - Contact Book</h3>
            <pre>contacts = {
    "Alice": "alice@email.com",
    "Bob": "bob@email.com",
    "Charlie": "charlie@email.com"
}

# Search for a contact
name = "Alice"
if name in contacts:
    print(f"{name}'s email: {contacts[name]}")

# List all contacts
print("\\nAll contacts:")
for name, email in contacts.items():
    print(f"{name}: {email}")

# Add new contact
contacts["Diana"] = "diana@email.com"
print(f"\\nTotal contacts: {len(contacts)}")</pre>
        `
    },
    {
        id: 13,
        title: "Quiz: Lists & Dictionaries",
        type: "quiz",
        questions: [
            {
                question: "What is the index of the first item in a list?",
                options: ["0", "1", "-1", "none"],
                correct: 0,
                explanation: "Python uses zero-based indexing, meaning the first item is at index 0. This catches many beginners! In some languages like R or Matlab, the first index is 1, but not in Python."
            },
            {
                question: "What will `fruits[1]` return if fruits = ['apple', 'banana', 'cherry']?",
                options: ["apple", "banana", "cherry", "Error"],
                correct: 1,
                explanation: "fruits[1] is the SECOND item (index 0 is first). So it returns 'banana'. If you wanted 'apple', you'd use fruits[0]. If you wanted 'cherry', you'd use fruits[2]."
            },
            {
                question: "How do you add an item to a list?",
                options: ["add()", "insert()", "append()", "push()"],
                correct: 2,
                explanation: "append() adds an item to the END of a list. insert() lets you add at a specific position. add() and push() are methods in other languages, not Python. Remember: append() = add to end."
            },
            {
                question: "What does `len()` return for a list?",
                options: ["The last item", "The first item", "The number of items", "The type of list"],
                correct: 2,
                explanation: "len() returns the count of items. For [1, 2, 3], len() returns 3. This is useful for knowing how many items you have or for looping through indices."
            },
            {
                question: "How do you access a value in a dictionary?",
                options: ["dict[0]", "dict['key']", "dict.key", "Both b and c"],
                correct: 3,
                explanation: "Dictionaries use keys (strings usually) not indices. dict['key'] is the standard way. dict.key also works but only for simple key names. dict[0] would look for a key named 0, not get the first item."
            },
            {
                question: "What does `list[1:4]` return?",
                options: ["Items at indices 1 and 4", "Items at indices 1, 2, 3, 4", "Items at indices 1, 2, 3", "Error"],
                correct: 2,
                explanation: "list[1:4] returns items from index 1 up to (but NOT including) index 4. So it's items at indices 1, 2, and 3. The end number is exclusive! This is crucial to understand."
            }
        ]
    },
    {
        id: 14,
        title: "Simulation: Student Grade Manager",
        type: "simulation",
        description: "Create a program that manages student data using lists and dictionaries. Add students, calculate averages, and display information.",
        template: `# Student Grade Management System
students = []

# Add student data
student1 = {
    "name": "Alice",
    "grades": [90, 85, 92],
    "email": "alice@school.com"
}

student2 = {
    "name": "Bob",
    "grades": [78, 82, 88],
    "email": "bob@school.com"
}

students.append(student1)
students.append(student2)

# Display all students and their averages
print("Student Grade Report")
print("=" * 50)

for student in students:
    name = student["name"]
    grades = student["grades"]
    average = sum(grades) / len(grades)

    print(f"\\nName: {name}")
    print(f"Email: {student['email']}")
    print(f"Grades: {grades}")
    print(f"Average: {average:.2f}")

    if average >= 90:
        print("Status: ✓ Excellent!")
    elif average >= 80:
        print("Status: Good")
    else:
        print("Status: Needs Improvement")

print("\\n" + "=" * 50)
print(f"Total students: {len(students)}")`
    },
    {
        id: 15,
        title: "Module 7: Functions - Reusable Code",
        type: "lesson",
        content: `
            <h3>What is a Function?</h3>
            <p>A function is a reusable block of code that performs a specific task. Instead of writing the same code repeatedly, you write it once in a function and call it whenever needed.</p>

            <p><strong>Real-world analogy:</strong> A function is like a recipe. You write it once, then whenever you want to cook that dish, you follow the recipe without rewriting it.</p>

            <h3>Why Use Functions?</h3>
            <ul>
                <li><strong>Code Reusability:</strong> Write once, use many times</li>
                <li><strong>Organization:</strong> Keep code organized and readable</li>
                <li><strong>Maintenance:</strong> Fix bugs in one place, not everywhere</li>
                <li><strong>Testing:</strong> Test small units instead of entire program</li>
                <li><strong>Collaboration:</strong> Multiple programmers can work on different functions</li>
            </ul>

            <h3>Defining a Function - The Basics</h3>
            <p>Use the <code>def</code> keyword to create a function:</p>

            <pre>def greet():
    print("Hello, World!")</pre>

            <p><strong>Structure:</strong></p>
            <ul>
                <li><code>def</code> - Keyword meaning "define function"</li>
                <li><code>greet</code> - Function name (descriptive, lowercase, underscores)</li>
                <li><code>()</code> - Parentheses (empty here, but can contain parameters)</li>
                <li><code>:</code> - Colon ends the line</li>
                <li>Indented code - This is the function body</li>
            </ul>

            <h3>Calling a Function - Making It Run</h3>
            <p>Once defined, call a function with its name and parentheses:</p>

            <pre>def greet():
    print("Hello, World!")

greet()  # Function call - this makes it run!
greet()  # Can call it again
greet()  # And again!</pre>

            <p><strong>Output:</strong></p>
            <pre>Hello, World!
Hello, World!
Hello, World!</pre>

            <h3>Parameters & Arguments - Giving Functions Input</h3>
            <p>Parameters allow functions to receive input data:</p>

            <pre>def greet(name):  # 'name' is a parameter
    print(f"Hello, {name}!")

greet("Alice")   # "Alice" is an argument
greet("Bob")     # "Bob" is an argument</pre>

            <p><strong>Important distinction:</strong></p>
            <ul>
                <li><strong>Parameter:</strong> Variable in the function definition</li>
                <li><strong>Argument:</strong> Actual value passed when calling the function</li>
            </ul>

            <p><strong>Multiple parameters:</strong></p>
            <pre>def add(a, b):  # Two parameters
    result = a + b
    print(f"{a} + {b} = {result}")

add(5, 3)   # Output: 5 + 3 = 8
add(10, 20) # Output: 10 + 20 = 30</pre>

            <h3>Return Values - Getting Output From Functions</h3>
            <p>Functions can return values using the <code>return</code> keyword:</p>

            <pre>def add(a, b):
    return a + b  # Calculate and return the result

result = add(5, 3)
print(result)  # 8

total = add(10, 20) + add(5, 5)
print(total)   # 40</pre>

            <p><strong>Why return instead of print?</strong></p>
            <ul>
                <li><code>print()</code> displays to screen immediately</li>
                <li><code>return</code> sends value back to caller for further processing</li>
                <li>Return values can be stored, used in calculations, etc.</li>
            </ul>

            <p><strong>Multiple returns:</strong></p>
            <pre>def divide(a, b):
    if b == 0:
        return "Error: Cannot divide by zero"
    else:
        return a / b

print(divide(10, 2))  # 5.0
print(divide(10, 0))  # Error: Cannot divide by zero</pre>

            <h3>Default Parameters - Optional Input</h3>
            <p>Parameters can have default values:</p>

            <pre>def greet(name="Guest"):  # "Guest" is default
    print(f"Hello, {name}!")

greet()          # Uses default: Hello, Guest!
greet("Alice")   # Overrides default: Hello, Alice!</pre>

            <p><strong>Practical example - website defaults:</strong></p>
            <pre>def create_account(username, password="default123", is_admin=False):
    print(f"User: {username}")
    print(f"Admin: {is_admin}")
    return f"Account created: {username}"

create_account("john")  # Uses defaults
create_account("jane", "secure456")  # Custom password
create_account("admin", is_admin=True)  # Named parameter</pre>

            <h3>Scope - Where Variables Live</h3>
            <p>Variables exist only in their scope:</p>

            <pre>def my_function():
    local_var = 10  # Only exists inside function
    print(local_var)

my_function()  # Output: 10
print(local_var)  # ERROR! NameError: name 'local_var' is not defined</pre>

            <p><strong>Global vs Local scope:</strong></p>
            <pre>global_var = 100  # Lives outside functions - global scope

def function1():
    local_var = 50  # Only in function1
    print(global_var)  # Can access global_var

function1()  # Output: 100

def function2():
    local_var = 75  # Different variable from function1's
    print(local_var)  # Output: 75

function2()
print(local_var)  # ERROR! (local_var only in functions)</pre>

            <h3>Documentation - Docstrings</h3>
            <p>Document your functions so others (and future-you) understand them:</p>

            <pre>def calculate_area(length, width):
    """Calculate the area of a rectangle.

    Args:
        length: The length of the rectangle
        width: The width of the rectangle

    Returns:
        The area (length × width)
    """
    return length * width

print(calculate_area(5, 10))  # 50</pre>

            <h3>Function Best Practices</h3>
            <ul>
                <li><strong>Clear Names:</strong> <code>calculate_age()</code> not <code>f()</code></li>
                <li><strong>Single Responsibility:</strong> Do ONE thing well</li>
                <li><strong>Avoid Side Effects:</strong> Don't modify global variables unexpectedly</li>
                <li><strong>Return Values:</strong> Prefer return over print for flexibility</li>
                <li><strong>Keep Simple:</strong> If function is too complex, break it into smaller functions</li>
            </ul>

            <h3>Practical Example - Temperature Converter</h3>
            <pre>def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit."""
    return (celsius * 9/5) + 32

def fahrenheit_to_celsius(fahrenheit):
    """Convert Fahrenheit to Celsius."""
    return (fahrenheit - 32) * 5/9

# Test the functions
c_temp = 25
f_temp = celsius_to_fahrenheit(c_temp)
print(f"{c_temp}°C = {f_temp}°F")

f_temp = 98.6
c_temp = fahrenheit_to_celsius(f_temp)
print(f"{f_temp}°F = {c_temp}°C")</pre>
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
                correct: 1,
                explanation: "Python uses 'def' (short for define) to create functions. The keyword is followed by the function name and parentheses. 'function' is used in JavaScript, 'func' is used in Go, but Python uses 'def'."
            },
            {
                question: "What does 'return' do in a function?",
                options: ["Exits the program", "Sends a value back to caller", "Calls the function", "Deletes a variable"],
                correct: 1,
                explanation: "return stops the function and sends a value back to wherever the function was called. This is different from print() which just displays. Return allows the caller to use the result in other operations."
            },
            {
                question: "How do you call a function named 'calculate'?",
                options: ["call calculate()", "calculate()", "execute calculate", "run calculate()"],
                correct: 1,
                explanation: "Functions are called using their name followed by parentheses: calculate(). The parentheses are essential - without them, Python just refers to the function without executing it."
            },
            {
                question: "What are function inputs called?",
                options: ["arguments", "parameters", "variables", "Both a and b"],
                correct: 3,
                explanation: "When defining: def func(x) - 'x' is a parameter. When calling: func(5) - '5' is an argument. They're different terms for the same concept at different stages."
            },
            {
                question: "What will this code return? `def add(a, b): return a + b\\nprint(add(3, 4))`",
                options: ["7", "3, 4", "add", "Error"],
                correct: 0,
                explanation: "The function adds 3 + 4 and returns 7. The print() then displays 7. If the function didn't have return, it would return None and print would display 'None'."
            },
            {
                question: "What is the default value for this function? `def greet(name='Guest'):`",
                options: ["No default", "name", "Guest", "Error"],
                correct: 2,
                explanation: "When name='Guest' in the parameter list, 'Guest' is the default. If you call greet() with no argument, it uses 'Guest'. If you call greet('Alice'), it uses 'Alice' instead."
            }
        ]
    },
    {
        id: 17,
        title: "Simulation: Calculator with Functions",
        type: "simulation",
        description: "Create functions for basic math operations and build a simple calculator program.",
        template: `# Advanced Calculator with Functions

def add(a, b):
    """Add two numbers."""
    return a + b

def subtract(a, b):
    """Subtract two numbers."""
    return a - b

def multiply(a, b):
    """Multiply two numbers."""
    return a * b

def divide(a, b):
    """Divide two numbers with error checking."""
    if b == 0:
        return "Error: Cannot divide by zero!"
    return a / b

def calculate(num1, num2, operation):
    """Perform calculation based on operation."""
    if operation == "add":
        return add(num1, num2)
    elif operation == "subtract":
        return subtract(num1, num2)
    elif operation == "multiply":
        return multiply(num1, num2)
    elif operation == "divide":
        return divide(num1, num2)
    else:
        return "Error: Unknown operation"

# Test the calculator
print("=" * 40)
print("Advanced Calculator")
print("=" * 40)

result = calculate(10, 5, "add")
print(f"10 + 5 = {result}")

result = calculate(10, 5, "subtract")
print(f"10 - 5 = {result}")

result = calculate(10, 5, "multiply")
print(f"10 × 5 = {result}")

result = calculate(10, 5, "divide")
print(f"10 ÷ 5 = {result}")

result = calculate(10, 0, "divide")
print(f"10 ÷ 0 = {result}")  # Error case

print("=" * 40)`
    },

    {
        id: 18,
        title: "Module 8: Files & Text - Feeding Your RAG Pipeline",
        type: "lesson",
        content: `
            <h3>Why This Matters for RAG</h3>
            <p>Before anything gets embedded or searched, it has to get <em>into</em> Python. Every RAG pipeline starts the same way: a folder full of exported docs (Confluence pages, SharePoint files, PDFs already converted to text, meeting notes) that your script needs to open and read.</p>

            <h3>Opening Files the Safe Way</h3>
            <p>Always use <code>with open(...) as f:</code> - it automatically closes the file for you, even if something goes wrong halfway through. Forgetting to close files is a classic way to leak resources in a long-running ingestion job.</p>
            <pre>with open("meeting_notes.txt", "r", encoding="utf-8") as f:
    text = f.read()</pre>

            <h3>Three Ways to Read</h3>
            <ul>
                <li><code>f.read()</code> - the whole file as one big string (great for chunking later)</li>
                <li><code>f.readlines()</code> - a list of strings, one per line</li>
                <li>looping with <code>for line in f:</code> - memory-friendly for huge files, one line at a time</li>
            </ul>

            <h3>💡 The <code>encoding</code> Trap</h3>
            <p>Real company documents are full of smart quotes, em-dashes, accented names, and emoji. If you don't specify <code>encoding="utf-8"</code>, Python guesses based on your OS, and on some systems that guess is wrong - causing a crash or silently mangled text partway through a batch ingestion job. Always be explicit.</p>

            <h3>Writing Files</h3>
            <p>Ingestion pipelines also write things out - processed chunks, logs, intermediate JSON. Mode <code>"w"</code> overwrites, mode <code>"a"</code> appends:</p>
            <pre>with open("processed.txt", "w", encoding="utf-8") as f:
    f.write("First chunk...\\n")</pre>

            <p>Next up: turning that raw text into the bite-sized chunks an embedding model actually wants.</p>
        `
    },
    {
        id: 19,
        title: "Quiz: Files & Text",
        type: "quiz",
        questions: [
            {
                question: "What does the `with open(...) as f:` pattern guarantee?",
                options: ["The file opens faster", "The file is automatically closed, even if an error occurs", "The file is read-only", "The file is encrypted"],
                correct: 1,
                explanation: "The `with` statement is a context manager - it guarantees cleanup code (closing the file) runs even if an exception happens inside the block. This matters a lot in a long ingestion job processing thousands of files."
            },
            {
                question: "What does `f.readlines()` return?",
                options: ["A single string", "A list of strings, one per line", "The number of lines", "A dictionary"],
                correct: 1,
                explanation: "readlines() splits the file into a list where each element is one line (including the trailing newline character)."
            },
            {
                question: "Why specify `encoding=\"utf-8\"` when opening documents for a RAG pipeline?",
                options: ["It makes files smaller", "It's required by Python syntax", "Exported docs often contain non-ASCII characters that can crash or corrupt ingestion without it", "It speeds up embeddings"],
                correct: 2,
                explanation: "Company documents are full of smart quotes, accented names, and emoji. Without an explicit encoding, Python falls back to a platform-dependent guess that can fail or silently mangle text."
            },
            {
                question: "Which file mode overwrites existing content?",
                options: ['"r"', '"w"', '"a"', '"x"'],
                correct: 1,
                explanation: '"w" (write) creates the file if needed and overwrites anything already there. "a" (append) adds to the end instead, and "r" (read) can\'t write at all.'
            },
            {
                question: "How is `f.read()` different from `f.readlines()`?",
                options: ["They're identical", "read() returns the entire file as one string; readlines() returns a list of lines", "read() only works on .txt files", "readlines() is faster"],
                correct: 1,
                explanation: "read() gives you one big string - handy when you're about to chunk the whole document. readlines() gives you a list split by line, useful when line structure matters."
            }
        ]
    },
    {
        id: 20,
        title: "Simulation: Read & Inspect a Document",
        type: "simulation",
        description: "Create a sample document file, then read it back the way an ingestion script would - as raw text and as individual lines.",
        template: `# Simulating a company doc export you'd ingest into your RAG pipeline
doc_path = "meeting_notes.txt"

# In real life this file already exists (exported from SharePoint, Confluence, etc.)
# We create it first here so this example is fully runnable on its own.
with open(doc_path, "w", encoding="utf-8") as f:
    f.write("Q3 Planning Meeting\\n")
    f.write("Attendees: Sam, Priya, Alex\\n")
    f.write("Decision: Migrate the ingestion pipeline to Azure Functions.\\n")
    f.write("Action item: Priya to document the chunking strategy by Friday.\\n")

print(f"Wrote {doc_path}")
print("-" * 40)

# Now read it back, the way your ingestion script would
with open(doc_path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Document has {len(lines)} lines")
print("-" * 40)

for i, line in enumerate(lines, start=1):
    print(f"{i}: {line.strip()}")

# Grab the whole thing as one string too - useful for chunking later
with open(doc_path, "r", encoding="utf-8") as f:
    full_text = f.read()

print("-" * 40)
print(f"Total characters: {len(full_text)}")`
    },
    {
        id: 21,
        title: "Module 9: Chunking Text for RAG",
        type: "lesson",
        content: `
            <h3>Why Chunk at All?</h3>
            <p>Two reasons drive every chunking strategy:</p>
            <ul>
                <li><strong>Context limits:</strong> LLMs and embedding models can only handle so much text at once</li>
                <li><strong>Retrieval precision:</strong> A 50-page PDF embedded as one vector is too vague to match a specific question. A focused 300-character passage matches much better.</li>
            </ul>

            <h3>The Tools: Slicing and Splitting</h3>
            <p>Chunking is really just string slicing with a plan. A quick refresher:</p>
            <pre>text = "Azure OpenAI Service"
text[0:5]     # "Azure"
text[6:]      # "OpenAI Service"
text.split()  # ['Azure', 'OpenAI', 'Service']</pre>

            <h3>Fixed-Size Chunking (the simplest strategy)</h3>
            <p>Walk through the text in fixed-size windows, moving forward by <code>chunk_size</code> each time:</p>
            <pre>def chunk_text(text, chunk_size=500):
    return [text[i:i + chunk_size] for i in range(0, len(text), chunk_size)]</pre>

            <h3>💡 Why You Need Overlap</h3>
            <p>Cutting exactly at <code>chunk_size</code> can slice a sentence - or the one fact you actually needed - right down the middle. The fix: make each chunk start a little <em>before</em> the last one ended, so the boundary text appears in both chunks:</p>
            <pre>def chunk_text(text, chunk_size=500, overlap=50):
    chunks = []
    start = 0
    while start < len(text):
        chunks.append(text[start:start + chunk_size])
        start += chunk_size - overlap
    return chunks</pre>
            <p>This is a simplified version of what libraries like LangChain's <code>RecursiveCharacterTextSplitter</code> do under the hood - they add smarter rules (prefer splitting on paragraph/sentence boundaries), but the core loop is the same idea.</p>
        `
    },
    {
        id: 22,
        title: "Quiz: Chunking",
        type: "quiz",
        questions: [
            {
                question: "Why do RAG pipelines split documents into chunks instead of embedding the whole document at once?",
                options: ["It's required by Python", "Smaller, focused passages retrieve more precisely and fit context limits", "It makes files smaller on disk", "Chunking removes typos"],
                correct: 1,
                explanation: "A whole document embedded as one vector is too vague to match a specific question well. Smaller chunks let retrieval find the exact passage that's relevant."
            },
            {
                question: "What does `text[10:30]` return?",
                options: ["Characters at positions 10 and 30 only", "Characters from index 10 up to (not including) index 30", "The 10th and 30th words", "An error"],
                correct: 1,
                explanation: "Python slicing is [start:end), meaning it includes the start index but stops right before the end index - so text[10:30] is 20 characters long."
            },
            {
                question: "What's the purpose of 'overlap' between chunks?",
                options: ["To make the file bigger for no reason", "To prevent losing context/meaning at chunk boundaries", "To speed up embedding", "To remove duplicate words"],
                correct: 1,
                explanation: "Without overlap, a sentence or key fact can get sliced right at the chunk boundary and lose meaning in both halves. Overlap repeats a bit of text so nothing gets orphaned."
            },
            {
                question: "If chunk_size=100 and overlap=20, how far forward does each chunk start move?",
                options: ["100 characters", "20 characters", "80 characters (chunk_size - overlap)", "120 characters"],
                correct: 2,
                explanation: "Each new chunk starts at chunk_size - overlap characters past the previous start, so with 100 and 20 that's 80 characters of genuinely new text per chunk."
            },
            {
                question: "Which function tells you how many characters are in a chunk?",
                options: ["len()", "size()", "count()", "chunk_size()"],
                correct: 0,
                explanation: "len() works on strings (and lists, dicts, etc.) and returns the number of characters (or items)."
            }
        ]
    },
    {
        id: 23,
        title: "Simulation: Build a Text Chunker",
        type: "simulation",
        description: "Write a real fixed-size chunker with overlap - the same core idea used by production RAG chunking libraries.",
        template: `# A tiny (but real) fixed-size chunker with overlap - the same idea
# used by LangChain's RecursiveCharacterTextSplitter, just simplified.

document = (
    "Azure OpenAI Service provides REST API access to OpenAI's powerful language models "
    "including GPT-4o and text-embedding-3-large. These models can be applied to a variety "
    "of tasks such as content generation, summarization, semantic search, and natural "
    "language to code translation. Users can access the service through REST APIs, Python "
    "SDK, or a web-based interface in Azure AI Studio."
)

def chunk_text(text, chunk_size=80, overlap=20):
    chunks = []
    start = 0
    while start < len(text):
        end = start + chunk_size
        chunks.append(text[start:end])
        start += chunk_size - overlap
    return chunks

chunks = chunk_text(document, chunk_size=80, overlap=20)

print(f"Document length: {len(document)} characters")
print(f"Split into {len(chunks)} chunks")
print("=" * 50)

for i, chunk in enumerate(chunks, start=1):
    print(f"Chunk {i} ({len(chunk)} chars): {chunk!r}")

print("=" * 50)
print("Notice how the end of each chunk reappears at the start of the next -")
print("that overlap keeps sentences from getting cut off mid-thought.")`
    },
    {
        id: 24,
        title: "Module 10: JSON in the Wild",
        type: "lesson",
        content: `
            <h3>JSON Is Everywhere in RAG</h3>
            <p>API requests, API responses, config files, vector database metadata - almost everything that flows through a RAG pipeline is JSON at some point. Good news: Python's dicts and lists <em>are</em> JSON, more or less. The <code>json</code> module just converts between text and Python objects.</p>

            <pre>import json

response = json.loads(json_text)   # JSON string -> Python dict/list
output = json.dumps(python_data)   # Python dict/list -> JSON string</pre>

            <h3>Digging Into Nested Responses</h3>
            <p>A real Azure OpenAI chat response is a dict full of nested dicts and lists. Getting the actual answer out means chaining lookups:</p>
            <pre>answer = response["choices"][0]["message"]["content"]</pre>
            <p>Read that right-to-left-in-your-head: get <code>"choices"</code> (a list), take item <code>[0]</code> (a dict), get its <code>"message"</code> (another dict), get its <code>"content"</code> (the string you actually want).</p>

            <h3>💡 <code>.get()</code> Instead of <code>[]</code></h3>
            <p>Square brackets crash with a <code>KeyError</code> if a field is missing. Optional or version-dependent fields (which API responses have plenty of) are safer with <code>.get()</code>, which lets you supply a default:</p>
            <pre>fingerprint = response.get("system_fingerprint", "not provided")</pre>

            <h3>Why This Matters for Troubleshooting</h3>
            <p>When an ingestion job crashes at 2am on file #4,382 out of 5,000, it's almost always because one response had a slightly different shape than the other 4,381 - a missing field, an empty list, a null instead of a string. Defensive JSON handling (<code>.get()</code>, checking list length before indexing) is what keeps one weird response from taking down the whole batch.</p>
        `
    },
    {
        id: 25,
        title: "Quiz: JSON",
        type: "quiz",
        questions: [
            {
                question: "What does `json.loads()` do?",
                options: ["Converts a JSON string into Python data", "Converts Python data into a JSON string", "Loads a file from disk", "Validates JSON syntax only"],
                correct: 0,
                explanation: "loads() = 'load string' - it parses a JSON-formatted string into Python objects (dicts, lists, strings, numbers, booleans, None)."
            },
            {
                question: "What does `json.dumps()` do?",
                options: ["Deletes JSON data", "Converts Python data into a JSON string", "Converts a JSON string into Python data", "Downloads JSON from an API"],
                correct: 1,
                explanation: "dumps() = 'dump string' - the reverse of loads(). It serializes Python objects back into a JSON-formatted string, e.g. for logging or saving."
            },
            {
                question: 'Why use `dict.get("field", default)` instead of `dict["field"]` when parsing API responses?',
                options: ["get() is faster", "It avoids a KeyError crash when a field is missing or optional", "get() converts types automatically", "There's no difference"],
                correct: 1,
                explanation: "Square-bracket access raises a KeyError if the key doesn't exist. .get() returns a default value instead, which is much safer for fields that might not always be present."
            },
            {
                question: 'Given `response["choices"][0]["message"]["content"]`, what is `response["choices"]`?',
                options: ["A string", "A list", "An integer", "A boolean"],
                correct: 1,
                explanation: '"choices" holds a list of possible completions (usually just one), which is why it\'s indexed with [0] before drilling further into the dict.'
            },
            {
                question: "What Python type does a JSON object `{...}` become once parsed?",
                options: ["list", "tuple", "dict", "str"],
                correct: 2,
                explanation: "JSON objects (curly braces with key-value pairs) map directly onto Python dictionaries. JSON arrays ([...]) map onto Python lists."
            }
        ]
    },
    {
        id: 26,
        title: "Simulation: Parse an API-Style JSON Response",
        type: "simulation",
        description: "Parse a realistic Azure OpenAI-shaped JSON response, pull out the fields you'd actually need, and turn data back into JSON.",
        template: `import json

# This is what a (simplified) chat completion response from Azure OpenAI looks like
api_response_text = """
{
  "id": "chatcmpl-abc123",
  "model": "gpt-4o",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Chunking splits documents into smaller pieces before embedding them."
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 42,
    "completion_tokens": 15,
    "total_tokens": 57
  }
}
"""

response = json.loads(api_response_text)

print("Parsed a JSON string into a Python dict!")
print("Type:", type(response))
print("=" * 50)

answer = response["choices"][0]["message"]["content"]
print(f"Model answer: {answer}")

tokens_used = response["usage"]["total_tokens"]
print(f"Tokens used: {tokens_used}")

# .get() is safer than [] when a field MIGHT be missing
system_fingerprint = response.get("system_fingerprint", "not provided")
print(f"System fingerprint: {system_fingerprint}")

print("=" * 50)
print("Turning it back into a JSON string (e.g. to log or save it):")
print(json.dumps({"answer": answer, "tokens": tokens_used}, indent=2))`
    },
    {
        id: 27,
        title: "Module 11: When Things Go Wrong",
        type: "lesson",
        content: `
            <h3>Errors Are Not the Enemy</h3>
            <p>In a batch job processing thousands of documents, <em>something</em> will always be malformed - an empty file, a weird encoding, an API timeout. The goal isn't to prevent every error; it's to handle the expected ones gracefully and get useful information about the unexpected ones.</p>

            <h3>try / except / finally</h3>
            <pre>try:
    result = risky_operation()
except ValueError as e:
    print(f"Bad value: {e}")
finally:
    print("This runs no matter what")</pre>
            <p>Catch <em>specific</em> exception types (<code>ValueError</code>, <code>KeyError</code>, <code>FileNotFoundError</code>) rather than a bare <code>except:</code>. A bare except also swallows genuine bugs (typos, logic errors) that you actually want to see and fix, not hide.</p>

            <h3>Reading a Traceback (bottom-up)</h3>
            <p>Python tracebacks read top-to-bottom as "how we got here," but you should <strong>read the bottom line first</strong> - that's the actual error type and message. Then work upward through the "File ... line ..." frames to see which line in <em>your</em> code triggered it.</p>

            <h3>Raising Your Own Errors</h3>
            <p>When your code detects something is wrong, fail loudly and specifically instead of continuing with bad data:</p>
            <pre>if not vector:
    raise ValueError("Embedding vector is empty - something upstream went wrong")</pre>

            <h3>💡 print() vs logging</h3>
            <p><code>print()</code> is fine for this course's simulations, but real pipelines use the <code>logging</code> module: it adds severity levels (INFO, WARNING, ERROR), timestamps, and can be routed to a file or monitoring system instead of just scrolling off your terminal.</p>
        `
    },
    {
        id: 28,
        title: "Quiz: Errors & Troubleshooting",
        type: "quiz",
        questions: [
            {
                question: "What's the purpose of a try/except block?",
                options: ["To make code run faster", "To catch an error so the program can respond instead of crashing", "To skip writing tests", "To automatically fix bugs"],
                correct: 1,
                explanation: "try/except lets you catch specific error conditions and decide what to do - log it, retry, use a default value - instead of letting the whole program crash."
            },
            {
                question: "When reading a Python traceback, where should you look first for the actual cause?",
                options: ["The very top line", "The bottom line (exception type + message)", "The middle", "The file name only"],
                correct: 1,
                explanation: "The last line of a traceback names the exception type and its message - that's the actual problem. The lines above it show the call stack that led there, useful for context after you know what broke."
            },
            {
                question: 'What does `raise ValueError("...")` do?',
                options: ["Logs a warning and continues", "Deliberately triggers an error with a custom message", "Silently ignores the problem", "Restarts the program"],
                correct: 1,
                explanation: "raise deliberately triggers an exception. It's how your own code signals 'something is wrong here' with a message that explains what."
            },
            {
                question: "Why prefer `except (TypeError, ValueError)` over a bare `except:`?",
                options: ["It's shorter to type", "It only catches those specific error types, letting unexpected bugs surface instead of hiding them", "It runs faster", "There's no real difference"],
                correct: 1,
                explanation: "A bare except catches everything, including genuine bugs like typos or logic errors, which makes them silently disappear instead of getting fixed. Catching specific types keeps error handling intentional."
            },
            {
                question: "Why use `logging.error()` instead of `print()` for problems in a real ingestion pipeline?",
                options: ["logging is faster than print", "logging adds severity levels/timestamps and can be routed to files or monitoring, not just the console", "print() doesn't work in loops", "There's no real difference"],
                correct: 1,
                explanation: "logging gives you structured, filterable output (by severity) that can be sent to a file, a monitoring dashboard, or an alerting system - essential once a pipeline runs unattended."
            }
        ]
    },
    {
        id: 29,
        title: "Simulation: Handle Errors Like a Pro",
        type: "simulation",
        description: "Validate a batch of embedding vectors, catching and logging bad ones instead of letting one bad record crash the whole job.",
        template: `import logging

logging.basicConfig(level=logging.INFO, format="%(levelname)s: %(message)s")

def get_embedding_dimension(vector):
    if not isinstance(vector, list):
        raise TypeError(f"Expected a list, got {type(vector).__name__}")
    if len(vector) == 0:
        raise ValueError("Embedding vector is empty - something upstream went wrong")
    return len(vector)

test_vectors = [
    [0.12, 0.98, -0.44],
    [],
    "not-a-vector",
]

for i, vec in enumerate(test_vectors, start=1):
    print(f"--- Checking vector {i}: {vec!r} ---")
    try:
        dim = get_embedding_dimension(vec)
        print(f"OK: dimension = {dim}")
    except (TypeError, ValueError) as e:
        logging.error(f"Vector {i} failed validation: {e}")
    finally:
        print()

print("Pipeline kept running even though 2 of 3 vectors were bad -")
print("that's the whole point of try/except in a real ingestion job.")`
    },
    {
        id: 30,
        title: "Module 12: Packages, Environments & Secrets",
        type: "lesson",
        content: `
            <h3>Installing What You Need</h3>
            <p>Nothing you've written so far needed anything beyond Python's standard library. Real RAG work pulls in third-party packages - <code>openai</code>, <code>azure-identity</code>, <code>langchain</code>, <code>requests</code>:</p>
            <pre>pip install openai azure-identity requests</pre>
            <p>Projects track their dependencies in a <code>requirements.txt</code> file so anyone (including future-you) can recreate the exact setup:</p>
            <pre>pip install -r requirements.txt</pre>

            <h3>Virtual Environments</h3>
            <p>A virtual environment ("venv") is an isolated Python install just for one project, so its package versions don't clash with any other project's. You'll create and activate one from the command line - covered in the Linux modules coming up.</p>

            <h3>🚨 Never Hardcode Secrets</h3>
            <p>An API key typed directly into a <code>.py</code> file is one <code>git commit</code> away from being public forever, and it can't change per environment (dev vs. prod) without editing code. Instead, load secrets from <strong>environment variables</strong>:</p>
            <pre>import os
api_key = os.environ.get("AZURE_OPENAI_API_KEY")</pre>
            <p>Locally, developers often keep those variables in a <code>.env</code> file (loaded with the <code>python-dotenv</code> package) that's excluded from git via <code>.gitignore</code>. In Azure, they're set as App Settings / environment variables on the resource itself - never checked into source control either way.</p>

            <h3>💡 Fail Fast on Missing Config</h3>
            <p>Check required env vars exist right at startup, with a clear error, instead of letting the program crash confusingly three functions deep when it finally tries to use a missing key.</p>
        `
    },
    {
        id: 31,
        title: "Quiz: Packages & Secrets",
        type: "quiz",
        questions: [
            {
                question: "Why should API keys never be hardcoded directly in a .py file?",
                options: ["It makes the file bigger", "Risk of leaking the secret (e.g. via git) and no way to change it per environment", "Python doesn't allow string literals", "It slows down the program"],
                correct: 1,
                explanation: "A hardcoded key can be committed to version control and exposed, and can't be swapped between dev/staging/prod without editing code. Environment variables solve both problems."
            },
            {
                question: "What does `pip install -r requirements.txt` do?",
                options: ["Deletes unused packages", "Installs every package listed in that file", "Creates a virtual environment", "Runs your tests"],
                correct: 1,
                explanation: "requirements.txt lists a project's dependencies (often with version pins); this command installs all of them in one go, recreating the intended environment."
            },
            {
                question: "What's the purpose of a virtual environment (venv)?",
                options: ["To encrypt your code", "To isolate a project's package versions from other projects/system Python", "To speed up Python", "To connect to Azure automatically"],
                correct: 1,
                explanation: "Different projects often need different (sometimes conflicting) versions of the same package. A venv keeps each project's dependencies separate."
            },
            {
                question: 'What does `os.environ.get("NAME")` return if that variable isn\'t set?',
                options: ["An empty string", "0", "None (unless a default is given)", "It raises an error"],
                correct: 2,
                explanation: "Unlike os.environ[\"NAME\"] (which raises KeyError if missing), .get() returns None by default, or whatever default value you pass as a second argument."
            },
            {
                question: "What's good practice when logging/printing a loaded secret for debugging?",
                options: ["Print it in full so you can verify it", "Mask most of it (e.g. show only the last few characters), never print it in full", "Encode it in base64 first", "Secrets should never be checked at all"],
                correct: 1,
                explanation: "Masking lets you confirm a key was loaded (and looks roughly right) without exposing it in logs, terminal history, or screenshots."
            }
        ]
    },
    {
        id: 32,
        title: "Simulation: Load Config the Safe Way",
        type: "simulation",
        description: "Load required settings from environment variables, fail fast with a clear error if one is missing, and mask secrets before printing them.",
        template: `import os

# In real life you'd set these OUTSIDE your code - e.g. in a .env file
# loaded by python-dotenv, or as real environment variables in Azure.
# We set them here only so this demo is self-contained and runnable.
os.environ["AZURE_OPENAI_ENDPOINT"] = "https://my-company.openai.azure.com/"
os.environ["AZURE_OPENAI_API_KEY"] = "sk-demo-not-a-real-key-12345"

def get_required_env(name):
    value = os.environ.get(name)
    if not value:
        raise RuntimeError(f"Missing required environment variable: {name}")
    return value

endpoint = get_required_env("AZURE_OPENAI_ENDPOINT")
api_key = get_required_env("AZURE_OPENAI_API_KEY")

print(f"Endpoint: {endpoint}")
print(f"API key loaded: {'*' * (len(api_key) - 4)}{api_key[-4:]}")

print("-" * 50)
try:
    get_required_env("AZURE_STORAGE_CONNECTION_STRING")
except RuntimeError as e:
    print(f"Caught it before it caused a confusing crash later: {e}")

print("-" * 50)
print("Rule of thumb: if a value is secret or changes per environment")
print("(dev vs prod), it belongs in an env var - never in your .py file.")`
    },
    {
        id: 33,
        title: "Module 13: Authentication the Azure Way",
        type: "lesson",
        content: `
            <h3>Two Ways to Prove Who You Are</h3>
            <p>Calling Azure OpenAI (or any Azure service) needs credentials. There are two families of approach:</p>
            <ul>
                <li><strong>API keys:</strong> a static secret string. Simple, but it's a secret you now have to store, rotate, and worry about leaking.</li>
                <li><strong>Azure AD authentication (a.k.a. SSO/Entra ID):</strong> your code proves its identity to Azure Active Directory and receives a short-lived token. No long-lived secret sitting in a config file.</li>
            </ul>

            <h3>Service Principal</h3>
            <p>An app registration in Azure AD with a client ID and a client secret (or certificate). Your script authenticates with those, gets a token, uses the token to call the API. Common for CI/CD pipelines and apps running outside Azure.</p>

            <h3>Managed Identity (the best option when running <em>on</em> Azure)</h3>
            <p>If your code runs on an Azure VM, Azure Function, or App Service, you can skip secrets entirely. Azure assigns the resource its own identity, and your code just asks for a token - Azure handles proving who it is behind the scenes. Nothing to store, nothing to rotate, nothing to leak.</p>

            <h3><code>DefaultAzureCredential</code>: One Object, Several Fallbacks</h3>
            <p>The <code>azure-identity</code> package's <code>DefaultAzureCredential</code> tries several auth methods in order and uses whichever one works - managed identity, then environment-variable service principal, then your local <code>az login</code> session, and a few others. This is why the same code can authenticate correctly whether it's running on your laptop during development or on an Azure Function in production:</p>
            <pre>from azure.identity import DefaultAzureCredential

credential = DefaultAzureCredential()
token = credential.get_token("https://cognitiveservices.azure.com/.default")</pre>

            <h3>💡 For Local Development</h3>
            <p>Run <code>az login</code> once in your terminal. <code>DefaultAzureCredential</code> will pick up that session automatically - no secrets needed even on your own machine.</p>
        `
    },
    {
        id: 34,
        title: "Quiz: Authentication & SSO",
        type: "quiz",
        questions: [
            {
                question: "What's the main advantage of a managed identity over a service principal with a client secret?",
                options: ["It's faster", "No secret to store, rotate, or leak - Azure manages the credentials automatically", "It works outside of Azure", "It doesn't require any code"],
                correct: 1,
                explanation: "Managed identities eliminate the secret entirely. There's nothing in config or environment variables that could be leaked or need rotation."
            },
            {
                question: "What does `DefaultAzureCredential` do?",
                options: ["Always uses your Azure CLI login", "Tries multiple authentication methods in order until one works", "Generates a random API key", "Only works with managed identities"],
                correct: 1,
                explanation: "It chains several credential sources - managed identity, environment variables, Azure CLI login, and more - trying each until one succeeds, so the same code works across environments."
            },
            {
                question: "What two pieces of info does a service principal typically need to authenticate (besides the tenant)?",
                options: ["Username and password", "Client ID and client secret (or certificate)", "IP address and port", "Subscription name only"],
                correct: 1,
                explanation: "A service principal (app registration) authenticates with a client ID identifying the app and a client secret or certificate proving it's really that app."
            },
            {
                question: "Which auth method is generally recommended when your code runs ON Azure (a VM, Function, or App Service)?",
                options: ["API key", "Managed identity", "Username/password", "SSH key"],
                correct: 1,
                explanation: "Since the resource itself can have an Azure-assigned identity, there's no reason to manage a secret at all - managed identity is the more secure default."
            },
            {
                question: "What command lets you authenticate locally as yourself, picked up automatically by DefaultAzureCredential's fallback chain?",
                options: ["az login", "pip install azure", "python -m auth", "sudo azure"],
                correct: 0,
                explanation: "`az login` (Azure CLI) opens a browser sign-in and caches your session locally. DefaultAzureCredential checks for that session as one of its fallback methods."
            }
        ]
    },
    {
        id: 35,
        title: "Simulation: Mock the DefaultAzureCredential Fallback Chain",
        type: "simulation",
        description: "See the logic behind DefaultAzureCredential's fallback chain by building a simplified mock version of it - the same idea as the real azure-identity package, without needing real Azure access.",
        template: `# A simplified MOCK of how azure-identity's DefaultAzureCredential works,
# so you can see the *logic* without needing real Azure access here.
# In a real script you'd just write:
#   from azure.identity import DefaultAzureCredential
#   credential = DefaultAzureCredential()

class MockDefaultAzureCredential:
    """Tries multiple auth methods in order, like the real one does."""

    def __init__(self, env):
        self.env = env  # stand-in for real environment/managed identity checks

    def get_token(self):
        methods = [
            ("Managed Identity", self._try_managed_identity),
            ("Environment variables (service principal)", self._try_env_service_principal),
            ("Azure CLI login", self._try_azure_cli),
        ]
        for name, method in methods:
            token = method()
            if token:
                print(f"Authenticated using: {name}")
                return token
        raise RuntimeError("No credential source worked - check your auth setup")

    def _try_managed_identity(self):
        return self.env.get("MANAGED_IDENTITY_TOKEN")

    def _try_env_service_principal(self):
        client_id = self.env.get("AZURE_CLIENT_ID")
        client_secret = self.env.get("AZURE_CLIENT_SECRET")
        if client_id and client_secret:
            return f"token-for-{client_id}"
        return None

    def _try_azure_cli(self):
        return self.env.get("AZ_CLI_TOKEN")


print("Scenario 1: Running on an Azure VM/Function with a Managed Identity")
cred = MockDefaultAzureCredential({"MANAGED_IDENTITY_TOKEN": "mi-token-abc"})
print("Token:", cred.get_token())

print()
print("Scenario 2: Running locally with a service principal in env vars")
cred = MockDefaultAzureCredential({
    "AZURE_CLIENT_ID": "11111111-aaaa-bbbb-cccc-222222222222",
    "AZURE_CLIENT_SECRET": "super-secret-value",
})
print("Token:", cred.get_token())

print()
print("Scenario 3: Nothing configured")
cred = MockDefaultAzureCredential({})
try:
    cred.get_token()
except RuntimeError as e:
    print("Failed as expected:", e)`
    },
    {
        id: 36,
        title: "Module 14: Talking to APIs & Embeddings",
        type: "lesson",
        content: `
            <h3>Calling an API in Python</h3>
            <p>The <code>requests</code> library is the standard way to call a REST API: build headers (including your auth token), send the request, and read <code>response.json()</code> for the parsed reply:</p>
            <pre>import requests

headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}
response = requests.post(url, headers=headers, json=payload)
data = response.json()</pre>
            <p>The official <code>openai</code> Python package (used against Azure OpenAI too) wraps this pattern for you, but knowing the underlying shape - headers, JSON body, JSON response - helps enormously when something goes wrong.</p>

            <h3>What Is an Embedding?</h3>
            <p>An embedding model turns text into a <strong>vector</strong> - a list of numbers (often 1,000+ of them) that represents the text's meaning. Similar meanings produce similar vectors, even with completely different wording.</p>

            <h3>Comparing Vectors: Cosine Similarity</h3>
            <p>To find the chunk most relevant to a question, you compare the question's vector to every chunk's vector using <strong>cosine similarity</strong> - a score from -1 to 1 measuring how closely two vectors point in the same direction. Higher = more similar meaning:</p>
            <pre>import math

def cosine_similarity(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    mag_a = math.sqrt(sum(x * x for x in a))
    mag_b = math.sqrt(sum(y * y for y in b))
    return dot / (mag_a * mag_b)</pre>

            <h3>Putting It All Together</h3>
            <p>The retrieval half of RAG, in five steps:</p>
            <ol>
                <li>Chunk your documents (Module 9)</li>
                <li>Get an embedding vector for each chunk</li>
                <li>Store (chunk text, vector) pairs somewhere - a real vector database, or even just a list for small projects</li>
                <li>Embed the user's question with the <em>same</em> embedding model</li>
                <li>Compare the question's vector against every stored vector, and hand the top matches to the LLM as context</li>
            </ol>
            <p>The upcoming simulation builds exactly this pipeline end to end.</p>
        `
    },
    {
        id: 37,
        title: "Quiz: APIs & Embeddings",
        type: "quiz",
        questions: [
            {
                question: "What does an embedding model turn text into?",
                options: ["A summary", "A vector (list of numbers) representing its meaning", "A translated version", "A compressed file"],
                correct: 1,
                explanation: "Embedding models map text to a point in a high-dimensional numeric space. Text with similar meaning ends up in a similar location, even with very different wording."
            },
            {
                question: "What does cosine similarity measure?",
                options: ["How many words two texts share", "How similar the direction of two vectors is (i.e. semantic similarity)", "How long two texts are", "The exact edit distance between two strings"],
                correct: 1,
                explanation: "Cosine similarity looks at the angle between two vectors, not their raw values - a score close to 1 means they point in nearly the same direction, i.e. similar meaning."
            },
            {
                question: "What's the correct order of steps in RAG's retrieval half?",
                options: ["Embed -> chunk -> store -> rank", "Chunk -> embed -> store -> compare query embedding -> rank", "Store -> chunk -> compare -> embed", "Rank -> chunk -> embed -> store"],
                correct: 1,
                explanation: "You chunk documents, embed each chunk, store the (text, vector) pairs, then when a question comes in you embed it too and compare it against everything stored to rank the best matches."
            },
            {
                question: "Why might a lesson's example use 'fake' embeddings instead of a real API call?",
                options: ["Fake embeddings are more accurate", "So the demo runs instantly offline without real credentials, while still showing the real retrieval logic", "Real embeddings don't work in Python", "There's no difference between fake and real embeddings"],
                correct: 1,
                explanation: "The plumbing - storing vectors, comparing them, ranking results - is identical either way. Only the source of the vectors changes when you swap in a real embedding API."
            },
            {
                question: "Once you retrieve the top-matching chunks for a question, what does a RAG system do with them?",
                options: ["Deletes them", "Passes them to the LLM as context so it can generate a grounded answer", "Emails them to the user", "Stores them permanently and stops"],
                correct: 1,
                explanation: "That's the 'generation' half of Retrieval-Augmented Generation: the retrieved chunks are inserted into the prompt so the LLM answers using your actual documents instead of guessing."
            }
        ]
    },
    {
        id: 38,
        title: "Simulation: Mini RAG Pipeline (Capstone)",
        type: "simulation",
        description: "Chunk text, embed it, store it, and run a similarity search - the full retrieval half of a RAG pipeline in one runnable script.",
        template: `import math
import hashlib

# --- Step 1: chunks you've already produced (see Module 9) ---
chunks = [
    "Azure Functions is a serverless compute service for running small pieces of code.",
    "Chunking splits long documents into smaller passages before embedding them.",
    "A vector store lets you search documents by semantic similarity, not just keywords.",
    "Managed identities let Azure resources authenticate without storing secrets.",
]

# --- Step 2: turn each chunk into a vector ---
# In real life: call Azure OpenAI's embeddings endpoint and get back a
# real semantic vector (e.g. 1536 numbers). We fake a small vector here
# so this demo runs instantly with no network call - the storing and
# comparing logic below works identically either way.
def fake_embed(text, dims=8):
    vector = []
    for i in range(dims):
        h = hashlib.sha256(f"{text}-{i}".encode()).hexdigest()
        vector.append((int(h[:8], 16) % 1000) / 1000)
    return vector

def cosine_similarity(a, b):
    dot = sum(x * y for x, y in zip(a, b))
    mag_a = math.sqrt(sum(x * x for x in a))
    mag_b = math.sqrt(sum(y * y for y in b))
    return dot / (mag_a * mag_b) if mag_a and mag_b else 0

# --- Step 3: build a tiny in-memory vector store ---
vector_store = [(chunk, fake_embed(chunk)) for chunk in chunks]
print(f"Indexed {len(vector_store)} chunks into the vector store")

# --- Step 4: embed the user's question and search ---
query = "How do I avoid storing secrets for Azure authentication?"
query_vector = fake_embed(query)

results = []
for chunk, vector in vector_store:
    score = cosine_similarity(query_vector, vector)
    results.append((score, chunk))

results.sort(reverse=True)

print(f"\\nQuery: {query}")
print("=" * 50)
for rank, (score, chunk) in enumerate(results, start=1):
    print(f"{rank}. (score={score:.3f}) {chunk}")

print("=" * 50)
print("Note: these are FAKE vectors (hashed text, not real semantics),")
print("so the ranking above won't necessarily make sense - that's expected!")
print("Swap fake_embed() for a real Azure OpenAI embeddings call and the")
print("SAME cosine_similarity + sort logic becomes real semantic search.")`
    },
    {
        id: 39,
        title: "Module 15: Linux Command Line Essentials",
        type: "lesson",
        content: `
            <h3>Why Linux, Specifically</h3>
            <p>Most places you'll actually run a RAG ingestion job - an Azure VM, an Azure Function's underlying host, a container, a CI/CD runner - are Linux under the hood. You'll SSH in, and everything from here is done at a terminal prompt.</p>

            <h3>Finding Your Way Around</h3>
            <pre>$ pwd
/home/azureuser/rag-pipeline

$ ls -la
drwxr-xr-x 4 azureuser azureuser 4096 Jul 10 09:12 .
drwxr-xr-x 3 azureuser azureuser 4096 Jul 10 09:00 ..
-rw-r--r-- 1 azureuser azureuser  812 Jul 10 09:10 ingest.py
-rw-r--r-- 1 azureuser azureuser  128 Jul 10 09:05 .env

$ cd logs
$ cd ..</pre>
            <ul>
                <li><code>pwd</code> - print working directory (where am I?)</li>
                <li><code>ls -la</code> - list everything, including hidden files (starting with <code>.</code>), with details</li>
                <li><code>cd &lt;path&gt;</code> - change directory; <code>cd ..</code> goes up one level</li>
            </ul>

            <h3>Reading Files Without an Editor</h3>
            <ul>
                <li><code>cat ingest.py</code> - dump the whole file to the screen</li>
                <li><code>less ingest.log</code> - scroll through a large file one screen at a time (press <code>q</code> to quit)</li>
                <li><code>head -20 ingest.log</code> / <code>tail -20 ingest.log</code> - first/last 20 lines</li>
                <li><code>tail -f ingest.log</code> - watch a log file live as new lines get appended (great while a job is running)</li>
            </ul>

            <h3>Permissions, Briefly</h3>
            <p>That <code>-rw-r--r--</code> string from <code>ls -la</code> breaks into three groups: owner, group, everyone else - each with read/write/execute. To make a script runnable directly (<code>./ingest.py</code> instead of <code>python3 ingest.py</code>):</p>
            <pre>$ chmod +x ingest.py</pre>

            <h3>Installing Software</h3>
            <p>On Ubuntu/Debian (the most common Azure VM base):</p>
            <pre>$ sudo apt update
$ sudo apt install python3-pip</pre>

            <h3>Finding Things</h3>
            <ul>
                <li><code>which python3</code> - where is this command actually installed?</li>
                <li><code>grep "ERROR" ingest.log</code> - search a file's contents for a string</li>
                <li><code>find . -name "*.txt"</code> - search for files by name pattern</li>
            </ul>
        `
    },
    {
        id: 40,
        title: "Quiz: Linux Basics",
        type: "quiz",
        questions: [
            {
                question: "Which command shows your current directory?",
                options: ["cd", "pwd", "ls", "whoami"],
                correct: 1,
                explanation: "pwd (print working directory) prints the full path of the directory you're currently in."
            },
            {
                question: "What does `ls -l` show that plain `ls` doesn't?",
                options: ["Only hidden files", "Detailed info: permissions, owner, size, and modified date", "A count of files only", "Nothing different"],
                correct: 1,
                explanation: "The -l flag switches to 'long format', showing permissions, owner/group, file size, and last-modified time for each entry."
            },
            {
                question: "In a permissions string like `-rwxr-xr--`, what does the first `rwx` apply to?",
                options: ["Everyone", "The group", "The file's owner", "The root user only"],
                correct: 2,
                explanation: "The three permission groups in order are: owner, group, everyone else. The first triplet (rwx) is always the owner's permissions."
            },
            {
                question: "Which command lets you view a large log file one screen at a time?",
                options: ["cat", "less", "rm", "touch"],
                correct: 1,
                explanation: "less opens a scrollable pager - press space to page down, q to quit. cat dumps the entire file at once, which is unwieldy for large logs."
            },
            {
                question: "On an Ubuntu/Debian system, which command installs a new package?",
                options: ["pip install", "sudo apt install <package>", "npm install", "brew install"],
                correct: 1,
                explanation: "apt is the package manager on Debian/Ubuntu-based Linux distributions (which most Azure Linux VMs default to). sudo runs it with the elevated permissions installing software requires."
            }
        ]
    },
    {
        id: 41,
        title: "Module 16: Running, Scheduling & Troubleshooting Python on Linux",
        type: "lesson",
        content: `
            <h3>Setting Up a Project</h3>
            <pre>$ python3 -m venv venv
$ source venv/bin/activate
(venv) $ pip install -r requirements.txt
(venv) $ python3 ingest.py</pre>
            <p><code>source venv/bin/activate</code> switches your shell to use that project's isolated Python and packages - notice the prompt changes to show <code>(venv)</code>. <code>deactivate</code> exits it.</p>

            <h3>Environment Variables on Linux</h3>
            <pre>$ export AZURE_OPENAI_API_KEY="sk-..."
$ python3 ingest.py</pre>
            <p><code>export</code> sets a variable for the current shell session (and anything it launches). For something that needs to persist across sessions, add the export line to <code>~/.bashrc</code>, or better - keep it in a <code>.env</code> file the script loads with <code>python-dotenv</code>, so credentials aren't typed into shell history.</p>

            <h3>Redirecting Output to a Log File</h3>
            <pre>$ python3 ingest.py > ingest.log 2>&1</pre>
            <p><code>&gt;</code> sends normal output to the file; <code>2&gt;&1</code> sends error output there too, so nothing gets lost when you close the terminal.</p>

            <h3>Checking If Your Script Is Actually Running</h3>
            <pre>$ ps aux | grep python
azureuser  4821  0.3  1.2  python3 ingest.py</pre>
            <p><code>ps aux</code> lists every running process; piping through <code>grep python</code> filters down to the ones you care about.</p>

            <h3>Scheduling with cron</h3>
            <p>To run your ingestion script every night at 2 AM:</p>
            <pre>$ crontab -e
# minute hour day month weekday   command
0 2 * * *  /home/azureuser/rag-pipeline/venv/bin/python3 /home/azureuser/rag-pipeline/ingest.py >> /home/azureuser/rag-pipeline/ingest.log 2>&1</pre>
            <p>Always use the venv's full python path in cron - cron doesn't run your shell's activate script, so a bare <code>python3</code> would use the system Python instead of your project's.</p>

            <h3>Long-Running Services: systemd</h3>
            <p>For something that should run continuously (not just on a schedule), Linux uses <code>systemd</code>. You'd write a small unit file describing the command to run, then manage it with <code>systemctl start/stop/status myservice</code>. Check its logs with:</p>
            <pre>$ journalctl -u myservice -f</pre>

            <h3>💡 Quick Health Checks</h3>
            <ul>
                <li><code>df -h</code> - disk space (ingestion jobs writing lots of chunks/logs can fill a disk)</li>
                <li><code>free -h</code> - memory usage</li>
                <li><code>top</code> - live view of CPU/memory per process</li>
            </ul>
        `
    },
    {
        id: 42,
        title: "Quiz: Linux for Python Ops",
        type: "quiz",
        questions: [
            {
                question: "What's the purpose of `python3 -m venv venv` followed by `source venv/bin/activate`?",
                options: ["Installs Python itself", "Creates and activates an isolated virtual environment for that project's packages", "Starts a web server", "Deletes old packages"],
                correct: 1,
                explanation: "This creates a self-contained Python environment in the venv/ folder, then switches your shell to use it, keeping this project's dependencies separate from everything else on the system."
            },
            {
                question: "What does `export AZURE_OPENAI_API_KEY=...` do in a bash shell?",
                options: ["Saves the key to a file permanently", "Sets an environment variable for the current shell session and anything it starts", "Encrypts the key", "Uploads the key to Azure"],
                correct: 1,
                explanation: "export makes a variable available to the current shell and any child processes (like a Python script you run afterward) as an environment variable."
            },
            {
                question: "What is cron used for?",
                options: ["Installing packages", "Scheduling a command or script to run automatically at set times/intervals", "Monitoring CPU temperature", "Compressing files"],
                correct: 1,
                explanation: "cron runs jobs on a defined schedule (e.g. 'every night at 2 AM') without anyone needing to trigger them manually - ideal for a recurring ingestion job."
            },
            {
                question: "If your ingestion script runs as a systemd service, which command lets you check its logs?",
                options: ["cat /var/log/syslog", "journalctl -u <service-name>", "tail requirements.txt", "systemctl logs"],
                correct: 1,
                explanation: "journalctl -u <service-name> shows the logs systemd collected for that specific service; add -f to follow them live, like tail -f."
            },
            {
                question: "Which command shows currently running processes, so you can confirm your script is (or isn't) running?",
                options: ["ls -la", "ps aux", "chmod +x", "df -h"],
                correct: 1,
                explanation: "ps aux lists every process on the system; piping it through grep (e.g. `ps aux | grep ingest.py`) narrows it down to what you're looking for."
            }
        ]
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
    document.getElementById('submitBtn').classList.remove('hidden');
    document.getElementById('quizContinueBtn').classList.add('hidden');
}

// Select answer
function selectAnswer(index) {
    currentQuizAnswers[currentQuestionIndex] = index;
    displayQuizQuestion(trainingModules[currentModuleIndex]);
}

// What "Continue" should do once the learner has read the feedback and taps it
let quizAdvanceAction = null; // 'nextQuestion' | 'nextModule'

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
        const isLastQuestion = currentQuestionIndex === module.questions.length - 1;

        feedbackDiv.innerHTML = isLastQuestion
            ? `
            <strong>✓ Correct! Quiz completed - you got every question right!</strong>
            <p style="margin-top: 10px; font-size: 0.95em;">${question.explanation}</p>
        `
            : `
            <strong>✓ Correct! Excellent work!</strong>
            <p style="margin-top: 10px; font-size: 0.95em;">${question.explanation}</p>
        `;

        // Stay on screen until the learner taps Continue - no auto-advance timer.
        quizAdvanceAction = isLastQuestion ? 'nextModule' : 'nextQuestion';
        document.getElementById('submitBtn').classList.add('hidden');
        const continueBtn = document.getElementById('quizContinueBtn');
        continueBtn.textContent = isLastQuestion ? 'Finish Quiz →' : 'Continue →';
        continueBtn.classList.remove('hidden');

        if (isLastQuestion) {
            markModuleAsCompleted();
        }
    } else {
        feedbackDiv.classList.add('error');
        feedbackDiv.innerHTML = `
            <strong>✗ Not quite right. Let me explain:</strong>
            <p style="margin-top: 10px; font-size: 0.95em;"><strong>Correct Answer:</strong> ${question.options[question.correct]}</p>
            <p style="margin-top: 8px; font-size: 0.95em;"><strong>Why:</strong> ${question.explanation}</p>
            <p style="margin-top: 8px; color: #ffeb3b;">Select the correct answer above and submit again.</p>
        `;
        // Submit button stays visible so the learner can pick a new option and retry.
    }
}

// Move on after the learner has read the feedback for a correct answer
function continueQuiz() {
    const action = quizAdvanceAction;
    if (action === null) {
        return; // already handled (e.g. a stray double tap) - ignore
    }
    quizAdvanceAction = null;

    const module = trainingModules[currentModuleIndex];
    if (action === 'nextQuestion') {
        currentQuestionIndex++;
        displayQuizQuestion(module);
    } else if (action === 'nextModule') {
        nextLesson();
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

    // Start fetching the Python runtime now so it's likely ready by the time
    // the learner clicks "Run" instead of making them wait on first use.
    getPyodideRuntime().catch(() => {});
}

// --- Real Python execution via Pyodide (CPython compiled to WebAssembly) ---
let pyodideReadyPromise = null;
let pyodideOutputLines = [];

function getPyodideRuntime() {
    if (!pyodideReadyPromise) {
        const load = typeof loadPyodide === 'undefined'
            ? Promise.reject(new Error('The Python runtime failed to load. Check your internet connection and reload the page.'))
            : loadPyodide().then(pyodide => {
                const capture = (line) => pyodideOutputLines.push(line);
                pyodide.setStdout({ batched: capture });
                pyodide.setStderr({ batched: capture });
                return pyodide;
            });

        // Don't cache a failure forever - let the next Run attempt retry
        // (e.g. the learner's connection recovers) instead of requiring a reload.
        pyodideReadyPromise = load.catch(error => {
            pyodideReadyPromise = null;
            throw error;
        });
    }
    return pyodideReadyPromise;
}

// Pyodide's traceback includes internal interpreter frames; keep only the
// part starting at the learner's own code (File "<exec>") so errors read
// like a normal Python error instead of a wall of WebAssembly internals.
function formatPythonError(error) {
    const message = String((error && error.message) || error);
    const lines = message.trimEnd().split('\n');
    const lastExecFrame = lines.map(line => line.includes('File "<exec>"')).lastIndexOf(true);
    return (lastExecFrame === -1 ? lines : lines.slice(lastExecFrame)).join('\n');
}

// Run code simulation
async function runCode() {
    const code = document.getElementById('codeInput').value;
    const output = document.getElementById('codeOutput');
    const runBtn = document.getElementById('runBtn');
    const originalLabel = runBtn.textContent;

    runBtn.disabled = true;
    output.innerHTML = '<p style="color: #999;">Starting Python…</p>';

    try {
        const pyodide = await getPyodideRuntime();
        runBtn.textContent = '▶ Running…';
        pyodideOutputLines = [];

        await pyodide.runPythonAsync(code);

        if (pyodideOutputLines.length === 0) {
            output.innerHTML = '<p style="color: #999;">No output (program ran successfully)</p>';
        } else {
            output.innerHTML = pyodideOutputLines.map(line => `<div>${escapeHtml(line)}</div>`).join('');
        }
    } catch (error) {
        output.innerHTML = `<div style="color: #ff6b6b; white-space: pre-wrap;"><strong>Error:</strong>\n${escapeHtml(formatPythonError(error))}</div>`;
    } finally {
        runBtn.disabled = false;
        runBtn.textContent = originalLabel;
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
function goToModule(index) {
    if (index >= 0 && index < trainingModules.length) {
        currentModuleIndex = index;
        currentQuestionIndex = 0;
        displayCurrentModule();
        closeSidebarOnMobile();
    }
}

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

    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('mobile-open')) {
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
    if (window.innerWidth <= 768 && sidebar && sidebar.classList.contains('mobile-open')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('resize', updateBodyScroll);

// Start the program
window.addEventListener('DOMContentLoaded', initializeTraining);
