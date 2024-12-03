
questions = [
    {
        "question": "What is the correct SQL statement to retrieve all columns from a table named 'users'?",
        "options": ["SELECT all FROM users;", "SELECT * FROM users;", "GET * FROM users;", "FETCH ALL FROM users;"],
        "answer": 1
    },
    {
        "question": "Which SQL statement is used to create a new table?",
        "options": ["CREATE TABLE table_name;", "NEW TABLE table_name;", "MAKE TABLE table_name;", "ADD TABLE table_name;"],
        "answer": 0
    },
    {
        "question": "Which SQL clause is used to filter rows based on a condition?",
        "options": ["WHERE", "HAVING", "GROUP BY", "FILTER"],
        "answer": 0
    },
    {
        "question": "What is the result of the query `SELECT COUNT(*) FROM orders;`?",
        "options": [
            "The total number of rows in the 'orders' table.",
            "The sum of values in the 'orders' table.",
            "The total number of columns in the 'orders' table.",
            "The total number of unique rows in the 'orders' table."
        ],
        "answer": 0
    },
    {
        "question": "Which SQL statement is used to update data in a table?",
        "options": ["MODIFY table_name;", "CHANGE table_name;", "UPDATE table_name;", "ALTER table_name;"],
        "answer": 2
    },
    {
        "question": "What does the SQL keyword `DISTINCT` do?",
        "options": [
            "Filters rows based on a condition.",
            "Limits the number of rows returned.",
            "Returns only unique values in a column.",
            "Deletes duplicate rows from a table."
        ],
        "answer": 2
    },
    {
        "question": "How do you delete all rows from a table without deleting the table itself?",
        "options": [
            "DELETE FROM table_name;",
            "REMOVE FROM table_name;",
            "DROP table_name;",
            "CLEAR TABLE table_name;"
        ],
        "answer": 0
    },
    {
        "question": "Which of the following is NOT a SQL aggregate function?",
        "options": ["SUM()", "COUNT()", "MAX()", "INDEX()"],
        "answer": 3
    },
    {
        "question": "Which SQL clause is used to group rows that have the same values?",
        "options": ["ORDER BY", "GROUP BY", "HAVING", "JOIN"],
        "answer": 1
    },
    {
        "question": "Which SQL keyword is used to sort the result set?",
        "options": ["SORT BY", "ORDER BY", "GROUP BY", "ALIGN BY"],
        "answer": 1
    },
    {
        "question": "What does the `JOIN` clause do in SQL?",
        "options": [
            "Combines rows from multiple tables based on a related column.",
            "Filters rows from a single table.",
            "Creates a new table from existing tables.",
            "Deletes rows from multiple tables."
        ],
        "answer": 0
    },
    {
        "question": "Which of these statements is used to add a new column to an existing table?",
        "options": ["MODIFY TABLE table_name;", "ALTER TABLE table_name ADD column_name;", "ADD COLUMN column_name TO table_name;", "INSERT COLUMN column_name INTO table_name;"],
        "answer": 1
    },
    {
        "question": "What does the `LIKE` operator do in SQL?",
        "options": [
            "Searches for exact matches in a column.",
            "Performs pattern matching in a column.",
            "Filters rows based on a condition.",
            "Joins rows from two tables."
        ],
        "answer": 1
    },
    {
        "question": "Which SQL statement is used to remove a table from a database?",
        "options": ["DELETE TABLE table_name;", "DROP TABLE table_name;", "REMOVE TABLE table_name;", "TRUNCATE TABLE table_name;"],
        "answer": 1
    },
    {
        "question": "What does the `HAVING` clause do in SQL?",
        "options": [
            "Filters rows before grouping.",
            "Filters groups after grouping.",
            "Sorts the result set.",
            "Deletes rows from a group."
        ],
        "answer": 1
    },
    {
        "question": "Which SQL command is used to add data to a table?",
        "options": ["INSERT INTO table_name;", "ADD INTO table_name;", "APPEND TO table_name;", "UPDATE table_name;"],
        "answer": 0
    },
    {
        "question": "Which of the following is used to retrieve only unique rows in SQL?",
        "options": ["WHERE", "DISTINCT", "UNIQUE", "FILTER"],
        "answer": 1
    },
    {
        "question": "How do you select rows where a column value is between two values in SQL?",
        "options": [
            "WHERE column_name IN (value1, value2);",
            "WHERE column_name BETWEEN value1 AND value2;",
            "WHERE column_name >= value1 AND <= value2;",
            "WHERE column_name RANGE (value1, value2);"
        ],
        "answer": 1
    },
    {
        "question": "What does the `TRUNCATE` command do in SQL?",
        "options": [
            "Removes all rows from a table and resets auto-increment values.",
            "Deletes a specific row from a table.",
            "Drops a table permanently.",
            "Clears duplicate rows from a table."
        ],
        "answer": 0
    },
    {
        "question": "What is a primary key in SQL?",
        "options": [
            "A column that uniquely identifies each row in a table.",
            "A column used to sort the result set.",
            "A column used to store large text data.",
            "A column used to define relationships between tables."
        ],
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