
questions = [
    {
        "question": "What is the correct syntax to print a message in Python?",
        "options": ["echo 'Hello'", "print('Hello')", "console.log('Hello')", "printf('Hello')"],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT a valid data type in Python?",
        "options": ["int", "str", "float", "char"],
        "answer": 3
    },
    {
        "question": "What is the output of `len([1, 2, 3, 4])` in Python?",
        "options": ["4", "3", "5", "Error"],
        "answer": 0
    },
    {
        "question": "Which keyword is used to define a function in Python?",
        "options": ["function", "def", "func", "lambda"],
        "answer": 1
    },
    {
        "question": "How do you declare a variable in Python?",
        "options": ["let x = 5", "var x = 5", "x = 5", "int x = 5"],
        "answer": 2
    },
    {
        "question": "What will be the output of `3 ** 2` in Python?",
        "options": ["6", "9", "8", "Error"],
        "answer": 1
    },
    {
        "question": "Which method is used to add an item to a list in Python?",
        "options": ["append()", "push()", "insert()", "add()"],
        "answer": 0
    },
    {
        "question": "Which of these is used to handle exceptions in Python?",
        "options": ["try-except", "catch-throw", "error-handling", "raise-catch"],
        "answer": 0
    },
    {
        "question": "What is the output of `bool([])` in Python?",
        "options": ["True", "False", "None", "Error"],
        "answer": 1
    },
    {
        "question": "Which keyword is used to exit a loop in Python?",
        "options": ["stop", "exit", "break", "continue"],
        "answer": 2
    },
    {
        "question": "How can you get the type of a variable in Python?",
        "options": ["type(variable)", "typeof(variable)", "variable.type()", "varType(variable)"],
        "answer": 0
    },
    {
        "question": "Which of the following is used to import a module in Python?",
        "options": ["include", "require", "import", "load"],
        "answer": 2
    },
    {
        "question": "What is the output of `5 // 2` in Python?",
        "options": ["2", "2.5", "3", "Error"],
        "answer": 0
    },
    {
        "question": "What is the purpose of the `self` parameter in Python classes?",
        "options": [
            "It refers to the parent class",
            "It is used to access class variables",
            "It refers to the instance of the class",
            "It is used to define static methods"
        ],
        "answer": 2
    },
    {
        "question": "What is the result of `'hello' + 'world'` in Python?",
        "options": ["helloworld", "hello world", "error", "undefined"],
        "answer": 0
    },
    {
        "question": "Which of these is a Python framework?",
        "options": ["Django", "React", "Spring", "Rails"],
        "answer": 0
    },
    {
        "question": "How do you create a tuple in Python?",
        "options": ["(1, 2, 3)", "[1, 2, 3]", "{1, 2, 3}", "tuple[1, 2, 3]"],
        "answer": 0
    },
    {
        "question": "Which method is used to convert a string to lowercase in Python?",
        "options": ["toLowerCase()", "lower()", "toLower()", "downcase()"],
        "answer": 1
    },
    {
        "question": "Which of the following is NOT a keyword in Python?",
        "options": ["if", "while", "return", "execute"],
        "answer": 3
    },
    {
        "question": "What is the default value of a variable in Python if not initialized?",
        "options": ["None", "0", "undefined", "Error"],
        "answer": 0
    }
]

      let currentQuestionIndex = 0;
      let userAnswers = Array(questions.length).fill(null);
      let timer = 1200;

      function startTimer() {
          const timerElement = document.getElementById("timer");
          setInterval(() => {
              const minutes = Math.floor(timer / 60);
              const seconds = timer % 60;
              timerElement.textContent = `Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
              timer--;
          }, 1000);
      }

      function loadQuestion(index) {
          const questionObj = questions[index];
          document.getElementById("questionContent").textContent = `${questionObj.question}`;
          const optionsContainer = document.getElementById("optionsContainer");
          optionsContainer.innerHTML = "";

          questionObj.options.forEach((option, i) => {
              const optionElement = document.createElement("div");
              optionElement.textContent = option;
              optionElement.className = "option";
              optionElement.onclick = () => selectOption(i);
              optionElement.classList.toggle("selected", userAnswers[index] === i);
              optionsContainer.appendChild(optionElement);
          });

          // Highlight the active question number
          const questionListItems = document.querySelectorAll(".sidebar li");
          questionListItems.forEach((li, i) => {
              li.classList.toggle("active", i === index);
              if (i === index) li.scrollIntoView({ behavior: "smooth", block: "center" });
          });

          // Toggle button visibility
          document.getElementById("prevButton").style.display = index === 0 ? "none" : "inline-block";
          document.getElementById("nextButton").style.display = index === questions.length - 1 ? "none" : "inline-block";
          document.getElementById("submitButton").style.display = index === questions.length - 1 ? "inline-block" : "none";
      }

      function createQuestionList() {
          const questionList = document.getElementById("questionList");
          questions.forEach((_, index) => {
              const li = document.createElement("li");
              li.textContent = `${index + 1}`;
              li.onclick = () => {
                  currentQuestionIndex = index;
                  loadQuestion(index);
              };
              questionList.appendChild(li);
          });
      }

      function selectOption(optionIndex) {
          userAnswers[currentQuestionIndex] = optionIndex;
          document.querySelectorAll(".option").forEach((opt, i) => {
              opt.classList.toggle("selected", i === optionIndex);
          });
      }

      function nextQuestion() {
          if (currentQuestionIndex < questions.length - 1) {
              currentQuestionIndex++;
              loadQuestion(currentQuestionIndex);
          }
      }

      function prevQuestion() {
          if (currentQuestionIndex > 0) {
              currentQuestionIndex--;
              loadQuestion(currentQuestionIndex);
          }
      }

      function calculateScore() {
        score = userAnswers.reduce((acc, answer, i) => acc + (answer === questions[i].answer ? 1 : 0), 0);
        window.location.href = `result.html?score=${score}`;
    }

      document.getElementById("toggleSidebarButton").onclick = function () {
          const sidebar = document.getElementById("sidebar");
          sidebar.classList.toggle("minimized");
          this.textContent = sidebar.classList.contains("minimized") ? "☰" : "←";
      };

      createQuestionList();
      loadQuestion(0);
      startTimer();




      const openChatButton = document.getElementById('openChatButton');
        const closeChatButton = document.getElementById('closeChatButton');
        const chatModal = document.getElementById('chatModal');
        const chatDisplay = document.getElementById('chatDisplay');
        const chatInput = document.getElementById('chatInput');
        const sendButton = document.getElementById('sendButton');

        // Show the chat modal
        openChatButton.addEventListener('click', () => {
            chatModal.style.display = 'flex';
        });

        // Close the chat modal
        closeChatButton.addEventListener('click', () => {
            chatModal.style.display = 'none';
        });

        // Simple Question-Answer Logic
        const responses = {
            "hello": "Hi there! How can I help you?",
            "how are you": "I'm just a bot, but I'm functioning as expected!",
            "what is your name": "I'm your assistant, here to help you!",
            "what can you do": "I can answer questions, help with tasks, and more. Ask away!",
            "bye": "Goodbye! Have a great day!",
            "hi":"Hello there! How can I help you?",
        };

        const defaultResponse = "I'm sorry, I don't have an answer for that. Could you rephrase or ask something else?";

        sendButton.addEventListener('click', () => {
            const message = chatInput.value.trim();
            if (message) {
                const userMessage = document.createElement('div');
                userMessage.className = 'chat-message self';
                userMessage.textContent = message;
                chatDisplay.appendChild(userMessage);

                const botMessage = document.createElement('div');
                botMessage.className = 'chat-message other';
                const response = responses[message.toLowerCase()] || defaultResponse;
                botMessage.textContent = response;
                chatDisplay.appendChild(botMessage);

                chatInput.value = '';
                chatDisplay.scrollTop = chatDisplay.scrollHeight;
            }
        });

        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendButton.click();
            }
        });