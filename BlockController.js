const SHA256 = require('crypto-js/sha256')
const BlockClass = require('./Block.js')
const BlockChain = require('./BlockChain.js')
let blockchain = new BlockChain.Blockchain()
/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {
/**
     * Constructor to create a new BlockController
     * @param {*} server
     */
  constructor (server) {
    this.server = server
    this.getBlockByIndex()
    this.postNewBlock()
  }

  /* GET Endpoint to retrieve a block by index, url: "/api/block/:index" */
  getBlockByIndex () {
    this.server.route({
      method: 'GET',
      path: '/api/block/{index}',
      handler: (request, h) => {
        return blockchain.getBlock(request.params.index)
      }
    })
  }

  /**
     * POST Endpoint to add a new Block, url: "/api/block"
     */
  postNewBlock () {
    this.server.route({
      method: 'POST',
      path: '/api/block',
      handler: (request, h) => {
        const newBlock = new BlockClass.Block(request.payload.data)
        blockchain.addBlock(new BlockClass.Block(request.payload.data))
        return 'Block added \n' + JSON.stringify(newBlock)
      }
    })
  }
}

/**
 * Exporting the BlockController class
 * @param {*} server
 */
module.exports = (server) => { return new BlockController(server) }
