const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
    let name = answer;
    rl.question("What's an activity you like doing? ", (answer) => {
        let activity = answer;
        rl.question("What do you listen to while doing that? ", (answer) => {
            let listensTo = answer;
            rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
                let meal = answer;
                rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
                    let food = answer;
                    rl.question("Which sport is your absolute favourite? ", (answer) => {
                        let sport = answer;
                        rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
                            let superpower = answer;
                          rl.close();
                          process.stdout.write(`${name} loves listening to ${listensTo} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`);
                          process.stdout.write('\n')
                        });
                    });
                });
            });
        });
    });
});