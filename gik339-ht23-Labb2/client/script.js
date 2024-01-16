//URL till servern där "users", våran användardata finns
const url = "http://localhost:3000/users";

// Vi skapar en funktion som hämtar users
async function fetchUsers() {
  try {
    // Skicka en begäran till servern
    const response = await fetch(url);

    // Kastar ett fel om svaret inte är ok (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Omvandla svaret till JSON
    const users = await response.json();

    // Skriv ut datan från users till konsolen
    console.log(users);
  } catch (error) {
    // Skriver ut fel i konsolen om det uppstår
    console.log("Det uppstod ett fel:", error);
  }
}

// Anropa funktionen för att hämta users
fetchUsers();

// Funktion för att hämta och visa users
async function fetchAndDisplayUsers() {
  try {
    // Skicka en begäran till servern
    const response = await fetch(url);

    // Kastar är fel om svaret inte är ok (status 200)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Omvandla svaret till JSON
    const users = await response.json();

    // Skapa ett nytt ul-element
    const ul = document.createElement("ul");

    // För varje user, skapa ett li-element och lägg till det i ul-elementet
    users.forEach((user) => {
      const li = document.createElement("li");

      // Sätt textinnehållet i li-elementet till användarens namn och användarnamn
      li.textContent = `${user.firstName} ${user.lastName} (${user.username})`;

      //Matcha bakgrundfärgen på li-elementet till anvädarens favoritfärg
      li.style.backgroundColor = user.color;

      // Lägg till li-elementet i ul-elementet
      ul.appendChild(li);
    });

    // Lägg till ul-elementet i body-elementet
    document.body.appendChild(ul);
  } catch (error) {
    // Skriver ut fel i konsolen om det uppstår
    console.log("Det uppstod ett fel:", error);
  }
}

// Anropa funktionen för att hämta och visa users
fetchAndDisplayUsers();
