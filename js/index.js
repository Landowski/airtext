const rndInt = Math.floor(Math.random() * 2) + 1
    let origTitle = document.title;
    function oldTitle() {
    document.title = origTitle;
    }
    function newTitle() {
    document.title = '🔔 (' + rndInt + ') Airtext';
    }
    window.onblur = newTitle;
    window.onfocus = oldTitle;

function simulateTyping() {
    const shortcut1 = "--text";
    const shortcut2 = "--expander";
    const expandedText1 = `Here is the full text, transformed by the text expander shortcut. You can put as many paragraphs and words as you want. This makes it very easy to create templates for your responses.
    <br/><br/>`;
    const expandedText2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget vestibulum sem. Maecenas id felis ut lacus consequat scelerisque sed ut urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.
    <br/><br/>
    Duis risus libero, suscipit volutpat leo non, venenatis volutpat augue. Donec lacinia porta odio, id placerat tortor fermentum in. Etiam porta tincidunt nisl, eu sagittis nibh. Ut imperdiet fringilla sem ut faucibus.`;

    const typingSpeed = 100; // Speed in ms for each character
    const delayBeforeErase = 800; // Delay before erasing each shortcut
    const delayBetweenShortcuts = 1000; // Delay between the two shortcuts
    const delayBeforeReset = 4000; // Delay before restarting the simulation

    const dynamicText = document.getElementById("dynamic-text");

// Helper function to type text
function typeText(text, targetElement, callback) {
    targetElement.innerHTML = ""; // Clear previous content
    const caret = document.createElement("span"); // Create a caret for this target
    caret.textContent = "🌪️"; // Use the emoji as caret
    caret.style.display = "inline-block";
    caret.style.marginLeft = "2px"; // Add spacing
    targetElement.appendChild(caret);

    let i = 0;
    const interval = setInterval(() => {
    caret.before(document.createTextNode(text[i])); // Insert character before the caret
    i++;
    if (i === text.length) {
        clearInterval(interval);
        if (callback) callback();
    }
    }, typingSpeed);
}

// Helper function to erase text
function eraseText(targetElement, callback) {
    setTimeout(() => {
    targetElement.innerHTML = ""; // Clear the text
    if (callback) callback();
    }, delayBeforeErase);
}

// Simulate the typing and displaying process
function startSimulation() {
    // Create a container for the first shortcut and text
    const shortcutContainer1 = document.createElement("div");
    const shortcutContainer2 = document.createElement("div");
    dynamicText.appendChild(shortcutContainer1);

    // Type the first shortcut
    typeText(shortcut1, shortcutContainer1, () => {
    // Erase the first shortcut and display the expanded text
    eraseText(shortcutContainer1, () => {
        shortcutContainer1.innerHTML = expandedText1; // Show first expanded text

        // Delay before typing the second shortcut
        setTimeout(() => {
        dynamicText.appendChild(shortcutContainer2); // Add the second container

        // Type the second shortcut
        typeText(shortcut2, shortcutContainer2, () => {
            // Erase the second shortcut and display the expanded text
            eraseText(shortcutContainer2, () => {
            shortcutContainer2.innerHTML = expandedText2; // Show second expanded text

            // Reset the simulation after a delay
            setTimeout(() => {
                dynamicText.innerHTML = ""; // Clear all text
                startSimulation(); // Restart the simulation
            }, delayBeforeReset);
            });
        });
        }, delayBetweenShortcuts);
    });
    });
}

startSimulation();
}

// Run the typing simulation
simulateTyping();

const textareaTarget = document.getElementById("teste");
textareaTarget.addEventListener("input", function (event) {
    const textarea = event.target;
    const atalho = "**test";
    const textoSubstituido = `Hello, I hope you are well!

I am writing to you to demonstrate the amount of content that I can leave saved in a pre-defined way and then be replaced by a single shortcut.

I hope this extension can save you hours and hours of typing and make you produce much more in less time!

A hug and I await your installation.
Airtext.net

🥳`;
    const som = "assets/click.mp3";
    const audio = new Audio(som);

    // Verifica se o atalho foi digitado
    if (textarea.value.includes(atalho)) {
        // Substitui o atalho pelo texto longo
        textarea.value = textarea.value.replace(atalho, textoSubstituido);
        audio.play();
    }
});

const contextMenu = document.getElementById("custom-context-menu");
    const insertShortcut = document.getElementById("insert-shortcut");

    // Exibir o menu de contexto personalizado
    textareaTarget.addEventListener("contextmenu", (event) => {
      event.preventDefault(); // Evita o menu de contexto padrão do navegador
      contextMenu.style.display = "block";
      contextMenu.style.left = `${event.pageX}px`;
      contextMenu.style.top = `${event.pageY}px`;
    });

    // Ocultar o menu de contexto quando clicar fora
    document.addEventListener("click", () => {
      contextMenu.style.display = "none";
    });

    // Inserir o texto no textarea ao selecionar a opção
    insertShortcut.addEventListener("click", () => {
        const som = "assets/click.mp3";
        const audio = new Audio(som);
      const textoSubstituido = `Hello, I hope you are well!

I am writing to you to demonstrate the amount of content that I can leave saved in a pre-defined way and then be replaced by a single shortcut.

I hope this extension can save you hours and hours of typing and make you produce much more in less time!

A hug and I await your installation.
Airtext.net

🥳`;

      // Insere o texto onde o cursor está no textarea
      const start = textareaTarget.selectionStart;
      const end = textareaTarget.selectionEnd;
      const text = textareaTarget.value;
      textareaTarget.value =
        text.substring(0, start) +
        textoSubstituido +
        text.substring(end, text.length);

      contextMenu.style.display = "none"; // Oculta o menu após a inserção
      audio.play();
      textareaTarget.focus(); // Retorna o foco ao textarea
    });

document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.faq-icon');

        // Toggle visibility of content
        content.style.display = content.style.display === 'block' ? 'none' : 'block';

        // Toggle the icon between "+" and "-"
        icon.textContent = content.style.display === 'block' ? '-' : '+';

        // Optionally add a rotation effect for the icon
        icon.classList.toggle('open');
    });
});

let currentDate = new Date();
let currentYear = currentDate.getFullYear();
let currentYearElement = document.getElementById("date");
currentYearElement.textContent = currentYear;
