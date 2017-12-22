import { ActionServer } from '@manekinekko/google-actions-server';

const agent = new ActionServer();

agent.welcome((assistant) => {
    agent.ask('Hy Wilders :) Do you like sushis in Lyon?');
});

agent.intent(ActionServer.intent.action.TEXT, (assistant) => {

    // reads the user's request
    const userInput = assistant.getRawInput();

})

// start listening for commands (on port 8080)
agent.listen();
