const { send, json } = require('micro')
const { router, post } = require('microrouter')
const cors = require('micro-cors')()

module.exports = router(
  post('/', cors( async (req, res) => {
    const subscription = await json(req)
    // should validate values and make sure eveything needed is given and in the right format
    // send back error if not valid
    
    //save to db here
    
    return send(res, 200, subscription);
    
  }))
)
