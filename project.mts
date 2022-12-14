#! /usr/bin/env node
// import chalk from 'chalk';
import inquirer from 'inquirer';
// import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
// import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

let playerName:string;


const sleep = () =>{ 
    return new Promise((resolve) => {
    setTimeout(resolve,2000);
})

};

async function invitation(){
    let rainbowText = chalkAnimation.rainbow(
        "Are you here to use Nodejs Caluclator? \n  Created By Iqra");

    await sleep();
rainbowText.stop();
}

async function askPlayerName() {
    const answers = await inquirer.prompt({
        name:'player_name',
        type:"input",
        message:"What is your name?",
        default(){
            return "Name";
        }

    })
    playerName = answers.player_name;
}



async function questions(){
 const ans = await inquirer.
 prompt([
    {
        name: 'question_1',
        type: 'number',
        message: 'Please enter a number:',
        default(){
            return "0";
            }
        } ,
{ 
    name: 'question_2',
type:'number',
message:'Please enter a second number:',
default(){
    return "0";
    }
},
{
    name: 'operator',
    type:'list',
    message:'Please select an operator: ',
    choices: [ 'Addition', 'Subraction','Multiplication','Division','Modulus']
}
]);
const spinner = createSpinner('Calculatuing...').start();
  await sleep();
if(ans.operator == 'Addition'){
    let result = `${ans.question_1} + ${ans.question_2} = ${ans.question_1 + ans.question_2}`;
     spinner.success({
        text:`Your answer is: ${result}`
     })
}else if(ans.operator == 'Subraction'){
    let result = `${ans.question_1} - ${ans.question_2} = ${ans.question_1 - ans.question_2}`
     spinner.success({
        text:`Your answer is: ${result}`
     })
}
else if(ans.operator == 'Multiplication'){
    let result= `${ans.question_1} * ${ans.question_2} = ${ans.question_1 * ans.question_2}`;
     spinner.success({
        text:`Your answer is: ${result}`
     })
}
else if(ans.operator == 'Division')
{
    let result= `${ans.question_1} / ${ans.question_2} = ${ans.question_1 / ans.question_2}`;
     spinner.success({
        text:`Your answer is: ${result}`
     })
}
else if(ans.operator == 'Modulus')
{
   let  result= `${ans.question_1} % ${ans.question_2} = ${ans.question_1 % ans.question_2}`;
     spinner.success({
        text:`Your answer is: ${result}`
     })
}
else{
    spinner.error({text: `Please enter valid value!`})
    //process.exit(1)
}
 }



 


async function continuegame() {
do{
    await questions();
 var again = await inquirer.prompt({
    name: 'restart',
    type: 'input',
    message: "Do you want to continue?",
    default(){
        return playerName;
    }
 })
}while(again.restart == 'y' || again.restart == 'Y' || again.restart == 'YES' || again.restart == 'yes')
}
 
console.clear();
await invitation();
await askPlayerName();
await continuegame();