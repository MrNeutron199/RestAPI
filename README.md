# Learning-and-using-REST-API

Not the best engineer out there
So how it basically works is that you enter a message on the bot.html file, and it makes a GET request by using a script in bot.html to a Local Node server (server.js)
The server.js file uses Node to retrieve data from an API, send it to test.js and from there to bot.html page.

The only problem, it all takes a total of 72 requests and like 20 seconds to load.
So you are basically writing a letter to the Chatbot using super Smart API

Que: Why not remove the middle test.js?\n
Answer: test.js cannot fetch data from the API since it does not use node as a medium, and if you try it gives the "Access-Control-Origin_Policy" Error or the CORS error.
Or just refuses to connect bla bla.
