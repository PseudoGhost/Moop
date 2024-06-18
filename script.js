var myGame = new WizardOrpheus('', `
You are a haunted house that is alive. Try to take out the person walking through you as quickly as possible, but if they give a really good way to escape, let them live. Don't make it super hard, and give them decisions and opportunities to escape or make the right decision. However, do not give them any score EXCEPT in any situations where they make a good decision. also try and kill them or let them escape within 10 questions.
`)

myGame.createUserAction({
    name: 'message',
    parameters: ['Message from user to game'],
    howBotShouldHandle: 'Respond to the user'
})

document.getElementById('input').addEventListener('keyup', function(e) {
    if (e.code == 'Enter') { // if the user presses enter
        let userInput = document.getElementById('input').value
        myGame.message(userInput)

        document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'

        document.getElementById('input').value = ''
    }
})

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
  // Add the bot's response to the conversation
  document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'
})

myGame.variable('score', 'Current score. Changes (positive and negatively) as the user does things.', 0)

myGame.botAction('respond', 'Send a text response to the user', { message: 'What you want to say to the user' }, data => {
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

document.getElementById('score').innerHTML = data.currentVariables.score.value
})
