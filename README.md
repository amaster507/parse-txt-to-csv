# Simple Text/Log parser to CSV

I was needing a little script to ingext a log/text file and parse it by lines to
form rows. Not every line equated to a row, but there was a line I could look
for to indicate that a new row had started. I then pulled data from different
lines to put into the output of the csv file.

See input.txt for an example file.

Adjust the parse.js script as needed to work with the data you are trying to
parse.

To run, assuming you have already installed Node.JS and npm:

- Clone this repository to a local file
- Open command prompt in the cloned directory
- Install the one dependency by running: `npm install`
- Run the script by running: `npm start`

Hope this helps you, and myself in the future.
