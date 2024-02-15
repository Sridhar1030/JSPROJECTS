import OpenAI from 'openai';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });
console.log("Welcome to ChatGPT API")
const messages = []

const openai = new OpenAI({
  apiKey: "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", 
});

async function main(input) {
  messages.push({ role: 'user', content: input })
  console.log(messages)
  const completion = await openai.chat.completions.create({
    messages: messages,
    model: 'gpt-3.5-turbo',
     max_tokens:10,
  });
 
  console.log(completion.choices[0]?.message?.content);
}

rl.on('line', (input) => {
  console.log(`Received: ${input}`);
  main(input)
  if (input === "q"){
    rl.close();
  }
});

