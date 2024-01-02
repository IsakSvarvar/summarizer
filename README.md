# Summarizer API
This is just a simple microservice that sends a prompt to the openAI API. I created it for a project where I needed shortened versions of texts.
### How it works
The functinality is very basic. You post the text along with some tags. The tags correspond to certain statements that will get stitched together to create a prompt. Essentially the prompt will ask for the openAI API to summarize the text.

The prompts were kept in the .env file and are not present in this repo.

It served its purpose when I needed it. Although I haven't used this code in a while I wrote the code to make updating and switching to another API easy in case I need it in the future.
