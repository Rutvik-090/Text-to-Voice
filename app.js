// Create a new SpeechSynthesisUtterance object to handle speech synthesis
let speech = new SpeechSynthesisUtterance();

// Initialize an empty array to store available voices
let voices = [];

// Select the dropdown element where voices will be displayed
let voiceSelect = document.querySelector("select");

// When the available voices are changed (usually when they are loaded by the browser)
window.speechSynthesis.onvoiceschanged = () => {
    // Get the list of available voices from the speechSynthesis API
    voices = window.speechSynthesis.getVoices();
    
    // Set the default voice to the first one in the list
    speech.voice = voices[0];

    // Populate the voice selection dropdown with the available voices
    voices.forEach((voice, i) => {
        // Create a new option for each voice and add it to the select element
        voiceSelect.options[i] = new Option(voice.name, i);
    });
};

// Add an event listener to detect when the user selects a different voice from the dropdown
voiceSelect.addEventListener("change", () => {
    // Set the speech synthesis voice to the one selected by the user
    speech.voice = voices[voiceSelect.value];
});

// Add an event listener to the button that triggers the speech synthesis
document.querySelector("button").addEventListener("click", () => {
    // Set the speech text to the content of the textarea
    speech.text = document.querySelector("textarea").value;

    // Speak the text using the selected voice
    window.speechSynthesis.speak(speech);
});
