#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
console.log(chalk.bgMagenta
    (`*************Welcome to typescript Quiz!***********`))
let correctanswer=0;
    let questions=1;
    
    while(questions<=10){
        const q1=await inquirer.prompt([{
            name:"firstQuestion",
            type:"list",
            message:"What does TypeScript compile down to?",
            choices:["a) JavaScript","b) Python","c) C++","d) TypeScript is an interpreted language"]}])
            if(q1.firstQuestion==="a) JavaScript"){
                console.log(chalk.green(`Correct Answer!`));
                correctanswer++;
                questions++;
            }
            
            else{
                console.log(chalk.red(`Wrong Answer!`));
                questions++;
            }


            const q2=await inquirer.prompt([{
              name:"SecondQuestion",
              type:"list",
              message:"Which keyword is used to declare a variable in TypeScript?",
              choices:["a) let","b) var" ,"c) const" ,"d) all of the above"]}])

              if(q2.SecondQuestion==="d) all of the above")
                {
                    console.log(chalk.green(`Correct Answer!`));
                    correctanswer++;
                    questions++;
                }
                
                else{
                    console.log(chalk.red(`Wrong Answer!`));
                    questions++;
                }

               const q3=await inquirer.prompt([{
                name:"ThirdQuestion",
                type:"list",
                message:"TypeScript supports which paradigm(s) of programming?",
                choices:["a) Object-Oriented","b) Functional","c) Procedural","d) All of the above"]}])
                if(q3.ThirdQuestion==="d) All of the above"){
                    console.log(chalk.green(`Correct Answer!`));
                    correctanswer++;
                    questions++;
                }
                
                else{
                    console.log(chalk.red(`Wrong Answer!`));
                    questions++;
                }


                const q4=await inquirer.prompt([{
                    name:"ForthQuestion",
                    type:"list",
                    message:"Which command is used to compile a TypeScript file into JavaScript?",
                    choices:["a) tsc compile","b) compileTS","c) tsc","d) ts"]}])
                    if(q4.ForthQuestion==="c) tsc"){
                        console.log(chalk.green(`Correct Answer!`));
                        correctanswer++;
                        questions++;
                    }
                    
                    else{
                        console.log(chalk.red(`Wrong Answer!`));
                        questions++;
                    }
                     
                    const q5=await inquirer.prompt([{
                        name:"FifthQuestion",
                        type:"list",
                        message:"Which of the following is true about TypeScript?",
                        choices:["a. TypeScript code is executed directly by the browser","b. TypeScript adds static typing to JavaScript","c. TypeScript doesn't support object-oriented programming","d. TypeScript doesn't support modules"]}])
                    if(q5.FifthQuestion==="b. TypeScript adds static typing to JavaScript"){
                        console.log(chalk.green(`Correct Answer!`));
                        correctanswer++;
                        questions++;
                    }
                    
                    else{
                        console.log(chalk.red(`Wrong Answer!`));
                        questions++;
                    }
                    let q6=await inquirer.prompt([{
                        name:"SixthQuestion",
                        type:"list",
                        message:"Which symbol is used to declare a variable in TypeScript?",
                        choices:["a. $","b. #","c. @","d. +"]}])
                        if(q6.SixthQuestion==="a. $"){
                            
                            console.log(chalk.green(`Correct Answer!`));
                            correctanswer++;
                            questions++;
                        }
                        
                        else{
                            console.log(chalk.red(`Wrong Answer!`));
                            questions++;
                        }

                        let q7=await inquirer.prompt([{
                            name:"SeventhQuestion",
                            type:"list",
                            message:"What is the purpose of interfaces in TypeScript?",
                            choices:["a. To define types for objects","b. To perform arithmetic operations","c. To loop through arrays","d. To handle user input"]}])
                     if(q7.SeventhQuestion==="a. To define types for objects"){
                        console.log(chalk.green(`Correct Answer!`));
                            correctanswer++;
                            questions++;
                        }
                        
                        else{
                            console.log(chalk.red(`Wrong Answer!`));
                            questions++;
                        }
                        let q8=await inquirer.prompt([{
                            name:"EighthQuestion",
                            type:"list",
                            message:"Which keyword is used to define a class in TypeScript?",
                            choices:["a. func","b. class","c. interface","d. obj"]}])
                            if(q8.EighthQuestion==="b. class"){
                                console.log(chalk.green(`Correct Answer!`));
                                    correctanswer++;
                                    questions++;
                                }
                                
                                else{
                                    console.log(chalk.red(`Wrong Answer!`));
                                    questions++;}
                           let q9=await inquirer.prompt([{
                            name:"NinethQuestion",
                            type:"list",
                            message:"Which operator is used for strict equality comparison in TypeScript?",
                            choices:["a. ==","b. ===","c. !=","d. !=="]}])
                            if(q9.NinethQuestion==="b. ===") {
                                console.log(chalk.green(`Correct Answer!`));
                                    correctanswer++;
                                    questions++;
                                }
                                
                                else{
                                    console.log(chalk.red(`Wrong Answer!`));
                                    questions++;}
                                    let q10=await inquirer.prompt([{
                                        name:"TenthQuestion",
                                        type:"list",
                                        message:"What does the void type represent in TypeScript?",
                                        choices:["a. Absence of a value","b. A numeric value","c. A string value","d. An object"]}])
                                        if(q10.TenthQuestion==="a. Absence of a value") {
                                            console.log(chalk.green(`Correct Answer!`));
                                                correctanswer++;
                                                questions++;
                                            }
                                            
                                            else{
                                                console.log(chalk.red(`Wrong Answer!`));
                                                questions++;}       

}
console.log(chalk.bgGreen(`Your ${correctanswer} answers are right out of 10 Questions `))
            