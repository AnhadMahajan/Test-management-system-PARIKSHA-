
const questions = [
    { 
        question: "What is the correct syntax to print a message in the console in JavaScript?", 
        options: ["print('Hello')", "echo('Hello')", "console.log('Hello')", "log.console('Hello')"], 
        answer: 2 
    },
    { 
        question: "Which type of JavaScript variable is declared using the 'let' keyword?", 
        options: ["Block-scoped", "Global-scoped", "Function-scoped", "Static-scoped"], 
        answer: 0 
    },
    { 
        question: "Which of the following is NOT a JavaScript data type?", 
        options: ["String", "Number", "Boolean", "Character"], 
        answer: 3 
    },
    { 
        question: "What does 'typeof' operator do in JavaScript?", 
        options: ["Checks the value of a variable", "Returns the type of a variable", "Declares a new variable", "Converts a variable's type"], 
        answer: 1 
    },
    { 
        question: "Which keyword is used to define a constant in JavaScript?", 
        options: ["var", "let", "const", "final"], 
        answer: 2 
    },
    { 
        question: "What does 'NaN' represent in JavaScript?", 
        options: ["Not a Null", "Not a Number", "Negative a Number", "None of the Above"], 
        answer: 1 
    },
    { 
        question: "Which function is used to parse a string to an integer in JavaScript?", 
        options: ["int()", "parseInt()", "toInteger()", "Number()"], 
        answer: 1 
    },
    { 
        question: "Which method can be used to join two or more arrays in JavaScript?", 
        options: ["merge()", "join()", "concat()", "combine()"], 
        answer: 2 
    },
    { 
        question: "What will be the output of `Boolean('false')`?", 
        options: ["true", "false", "undefined", "null"], 
        answer: 0 
    },
    { 
        question: "Which keyword is used to exit a loop in JavaScript?", 
        options: ["stop", "exit", "break", "continue"], 
        answer: 2 
    },
    { 
        question: "What will the `typeof` operator return for an array?", 
        options: ["object", "array", "list", "undefined"], 
        answer: 0 
    },
    { 
        question: "What is the correct way to declare a function in JavaScript?", 
        options: ["function = myFunction()", "function myFunction()", "def myFunction()", "Function:myFunction()"], 
        answer: 1 
    },
    { 
        question: "Which of these is a JavaScript framework?", 
        options: ["Django", "React", "Laravel", "Rails"], 
        answer: 1 
    },
    { 
        question: "What is the purpose of the 'this' keyword in JavaScript?", 
        options: ["Refers to the parent object", "Refers to the current object", "Creates a new object", "Deletes an object"], 
        answer: 1 
    },
    { 
        question: "What is the result of `2 + '2'` in JavaScript?", 
        options: ["4", "22", "undefined", "NaN"], 
        answer: 1 
    },
    { 
        question: "Which method is used to add new elements at the end of an array?", 
        options: ["push()", "add()", "append()", "insert()"], 
        answer: 0 
    },
    { 
        question: "What is the purpose of the `setTimeout()` function?", 
        options: ["Executes a function immediately", "Delays the execution of a function", "Repeats a function indefinitely", "Stops a running function"], 
        answer: 1 
    },
    { 
        question: "How can you convert a string to a number in JavaScript?", 
        options: ["parseInt()", "String()", "toFixed()", "slice()"], 
        answer: 0 
    },
    { 
        question: "Which event is triggered when the DOM is fully loaded?", 
        options: ["onLoad", "DOMContentLoaded", "onReady", "documentReady"], 
        answer: 1 
    },
    { 
        question: "What is the default behavior of the `Array.prototype.sort()` method in JavaScript?", 
        options: ["Sorts numbers in ascending order", "Sorts strings alphabetically", "Sorts elements as strings", "Sorts in reverse order"], 
        answer: 2 
    }
];
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
        