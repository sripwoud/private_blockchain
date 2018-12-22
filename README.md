# Private Blockchain Project
In this project I created a private blockchain.  
I implemented the classes defining the data structure for the blocks and the
chain.  
In order to be able to persist my blochchain I used LevelDB.  
Finally I implemented GET and POST API endpoints using the hapijs framework.
## Getting Started
1. Download or clone the repository
2. Install project dependencies: `npm install`
3. Start the web service: `node app.js`

## API endpoints  
The server runs locally by default on port 8000.  
You may select a different one by updating the `PORT` parameter of the **BlockAPI** constructor in [app.js](app.js).  
- **/api/block/height**: to retrieve a block by its height/index.
- **/api/block**: to add a new block ("data=block's content")


## Resources
- [Starter code](https://github.com/udacity/nd1309-work-code/tree/master/Course_Blockchain_Data/Project_2_es6_starter_code)
- [LevelDB](http://leveldb.org/) to persist the data
- [Node.js](https://nodejs.org/en/)
- [hapijs](https://hapijs.com/) framework to build API web service
- [crypto-js](https://www.npmjs.com/package/crypto-js) for SHA256 cryptographic function
- Understanding usage of async/await instead of regular promises:
  - https://ponyfoo.com/articles/understanding-javascript-async-await
  - https://www.twilio.com/blog/2015/10/asyncawait-the-hero-javascript-deserved.html
