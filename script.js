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
    const module = trainingModules[currentModuleIndex];
    const action = quizAdvanceAction;
    quizAdvanceAction = null;

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
