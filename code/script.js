// Variables that point to selected DOM elements
const chat = document.getElementById('chat');
const inputWrapper = document.getElementById('input-wrapper');
const nameForm = document.getElementById('name-form');
const nameInput = document.getElementById('name-input');
const sendBtn = document.getElementsByClassName('send-btn');

let userName = '';

// If you need any global variables that you can use across different functions, declare them here:


// Declare your functions after this comment

// This function will add a chat bubble in the correct place based on who the sender is
const showMessage = (message, sender) => {
  // the if statement checks if the sender is 'user' and if that's the case it inserts an html senction inside the chat with the posted message
  if (sender === 'user') {
    chat.innerHTML += `
      <section class="user-msg">
        <div class="bubble user-bubble">
          <p>${message}</p>
        </div>
        <img src="assets/user.png" alt="user bot" />  
      </section>
    `
    // the else if statement checks if the sender is a bot and if that's the case it inserts an html senction inside the chat with the posted message
  } else if (sender === 'bot') {
    chat.innerHTML += `
      <section class="bot-msg">
        <img src="assets/bot.png" alt="chat bot" />
        <div class="bubble bot-bubble">
          <p>${message}</p>
        </div>
      </section>
    `
  };
  // This little thing makes the chat scroll to the last message when there are too many to be shown in the chat box
  chat.scrollTop = chat.scrollHeight
}

// Starts here

const greetUser = () => {
  showMessage("Hi I'm Buddy the elf, who do I have the pleasure of speaking to?", "bot");
};

const handleNameInput = event => {
  event.preventDefault();
  userName = nameInput.value; 
  nameInput.value = "";
  showMessage(`I'm ${userName}! Nice to meet you`, "user");
  setTimeout(reply, 1000);
};

nameForm.addEventListener("submit", handleNameInput);

function reply() {
  showMessage(`What's your craving today, ${userName}?`, 'bot');

  inputWrapper.innerHTML = `
    <button class="send-btn" id="pizza">Pizza</button>
    <button class="send-btn" id="pasta">Pasta</button>
    <button class="send-btn" id="salad">Salad</button>
  `;

  const foodButtons = inputWrapper.querySelectorAll('.send-btn');
  foodButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const selectedFood = event.target.id;
      showMessage(`Excellent choice! You selected ${selectedFood}.`, 'bot');
      handleSpecificFoodChoice(selectedFood);
    });
  });
}

function handleSpecificFoodChoice(choice) {
  inputWrapper.innerHTML = '';

  if (choice === 'pizza') {
    showMessage(`What type of pizza would you like?`, 'bot');
    const pizzaOptions = ['Margherita', 'Shrimps Ahoy', 'Vegan Delight'];
    showOptions(pizzaOptions);
  } else if (choice === 'pasta') {
    showMessage(`What type of pasta would you like?`, 'bot');
    const pastaOptions = ['Shrimp', 'Meat Me in Napoli', 'Buddy the Elf Special'];
    showOptions(pastaOptions);
  } else if (choice === 'salad') {
    showMessage(`What type of salad would you like?`, 'bot');
    const saladOptions = ['Shrimp', 'Greek', 'You Say Tomato'];
    showOptions(saladOptions);
  }
}

function showOptions(options) {
  options.forEach(option => {
    const button = document.createElement('button');
    button.className = 'send-btn';
    button.textContent = option;
    button.addEventListener('click', () => {
      showMessage(`You selected ${option}.`, 'user');
    });
    inputWrapper.appendChild(button);
  });
}


  setTimeout(greetUser, 500)








  // Handle the user's food choice here
  // You can continue the conversation based on the selected choice


// Set up your eventlisteners here
//const questionFood = () => {;
  //showMessage("What are you in the mood to eat?", "bot")
//};
 // Set up your eventlisteners here
 //Pizza/pasta/salad

 //const responseSelectedFood
 //showMessage("What kind of selectedFood do ypu want to eat?", 'bot') 

// eventlisteners depending on choice above
 //subtype = prompt ('Select the type of pizza you want: 1 - Margherita 2 - Veggie 3 - Nutella Please enter the number of your choice:');
 //subtypeName = ["Margherita", "Veggie", "Nutella"];
// break;
// case "Pasta":
  // subtype = prompt ('Select the type of pizza you want: 1 - Shrimppasta 2 - Veggiepasta 3 - Elf style pasta Please enter the number of your choice:');
  // subtypeName = ["Shrimp", "Veggie", "Elf style"];
  // break;
   //case "Salad":
   //  subtype = prompt ('Select the type of pizza you want: 1 - Shrimpsalad 2 - Greeksalad 3 - Tomatosalad Please enter the number of your choice:');
   //  subtypeName = ["Shrimp", "Greek", "Tomato"];
   //  break;

   //const responsesubType
   //showMessag("Amazing! Do you want an adultsizepizza or a kids size portion?")

   //eventlisteners depending on choice above
   //Adult Kid

   //const endMessage
   //showMessage ("Magical choice! You chose a ... style .... for the sum of.... Do ypu want to place an order?")

   //eventlisteners
   //yes/no

   //const Orderdone
   //showMessage 
   //if (....===yes) ("Thank you for your order. Enjoy your meal!")
   //else (...===no) ("Hope we will see you again soon")

// normally we would invoke a function like this:
// greeting()
// But if we want to add a little delay to it, we can wrap it in a setTimeout:
// setTimeout(functionName, timeToWaitInMilliSeconds)
// This means the greeting function will be called one second after the website is loaded.
