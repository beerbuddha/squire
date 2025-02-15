import { SlashCommandBuilder } from "@discordjs/builders";

let { PythonShell } = require("python-shell");
let options = {
    mode: "text"
};
  
export = {
    data: new SlashCommandBuilder()
        .setName("competition")
        .setDescription("Current standing of L2 Trading Competition"),
        // .addIntegerOption((option) =>
        //     option.setName("int").setDescription("Enter 0 for projects and 1 for Grugs")
        //),
    async execute(interaction: any) {
        let result = ''
        // let pyshell = new PythonShell("app/services/discord/commands/L2Challenge.py")
        // pyshell.run("app/services/discord/commands/L2Challenge.py", options, function (err: any, results: string) {
        //     if (err) throw err;
        //     // results is an array consisting of messages collected during execution
        //     result = results;
        //     console.log("results: %s", results);
        //     interaction.channel.send(results)
        //         .catch((error: any) => interaction.channel.send(error.message))
        //     });
          
        PythonShell.run("app/services/discord/commands/L2Challenge.py", options, function (err: any, results: any) {
            if (err) throw err;
            // results is an array consisting of messages collected during execution
            console.log("results: %s", results);
            result = results.join('\n');
            console.log('qq');
            console.log(result);
            interaction.channel.send(result)
                .catch((error: any) => interaction.channel.send(error.message))
        });

        // pyshell.end(function (err: any) {
        //     if (err) throw err;
        //     console.log ("Now reading data");
        //     interaction.channel.send(result)
        //         .catch((error: any) => interaction.channel.send(error.message))
        // });
          
    },
};
