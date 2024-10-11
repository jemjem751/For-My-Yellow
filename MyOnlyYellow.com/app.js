
function getResponse() {
    const codeInput = document.getElementById('codeInput').value;
    const responseMessage = document.getElementById('responseMessage');
    
    const codeResponses = {
        '123': ["Hey, you look beautiful today.", "Girl, don't stress yourself too much; you're too stunning to look sad.", "Hey, don't push yourself too much."],
        '222': ["You're amazing just the way you are.", "Always remember your worth; you're incredible.", "You shine brighter than you think."],
        '333': ["Don't mind them, you're better.", "Your value isn't defined by their opinions.", "Keep being you; that's your superpower."],
        '444': ["Don't overthink too much; your beauty just made everyone look unattractive.", "You're a gem; shine without fear.", "Focus on the positive; you are wonderful."]
    };

    if (codeResponses[codeInput]) {
        const randomResponse = codeResponses[codeInput][Math.floor(Math.random() * codeResponses[codeInput].length)];
        responseMessage.innerHTML = randomResponse;
        responseMessage.classList.remove('error');  
    } else {
        responseMessage.innerHTML = "It's wrong babee, try againnn";
        responseMessage.classList.add('error');  
    }
}

// New function to check if "Enter" key was pressed
function checkEnterKey(event) {
    if (event.key === "Enter") {
        getResponse();  
    }
}
