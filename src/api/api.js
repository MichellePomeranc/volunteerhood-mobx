const express = require("express")
const router = express.Router()
const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:@localhost/volunteerhood')
// const sequelize = new Sequelize('mysql://root:Aliahumus1@localhost/volunteerhood')

router.get("/feed", async function (req, res) {
    let query = `SELECT * FROM help_requests`
    let result = await sequelize.query(query)
    res.send(result)
})

router.post("/profile", async function (req, res) {
    let userId = req.body
    userId = Object.keys(userId)
    // console.log(req.body[0])
    console.log(userId)
    let query = `SELECT * FROM user_skills WHERE user = ${userId}`
    let result = await sequelize.query(query)
    // result = new Set(result)
    console.log(result)
    console.log(result[1])
    res.send(result[1])
})

router.post("/signup", async function (req, res) {
    let newUser = req.body
    let query = `INSERT INTO user VALUES(null, '${newUser.name}','${newUser.email}' ,
            '${newUser.password}', '${newUser.phone}', '${newUser.radius}', '${newUser.ranking}', '${newUser.counter}')`
    let x = await sequelize.query(query)
    res.send(x)
})

router.post("/addSkill", function (req, res) {
    let skills = req.body.skills
    let userId = req.body.userId
    skills.forEach(s => {
        let query = `INSERT INTO user_skills VALUES( '${userId}', '${s}' )`
        sequelize.query(query)
    })
    res.send()
})

router.post("/feed", function (req, res) {
    let newHelp = req.body
    console.log(newHelp)
    let query = `INSERT INTO help_requests VALUES(null, '${newHelp.userReq}', null,
         'open', '${newHelp.description}', '${newHelp.skill}', '${newHelp.date}', '${newHelp.name}')`
    sequelize.query(query)
    res.send('the request inserted')
})

router.put("/feed/:rid/:hid", function (req, res) {
    let rid = req.params.rid
    let hid = req.params.hid
    let query = `UPDATE help_requests SET status = 'in process', userHelper = ${hid} WHERE id = ${rid} `
    sequelize.query(query)
    let query2 = `INSERT help_requests_helpers VALUES(${rid},${hid})`
    sequelize.query(query2)
    res.end()
})

router.post('/login', async function (req, res) {
    let x = req.body;
    // console.log(x.auth)
    let query = `SELECT * FROM user WHERE email = '${x.auth.email}' AND password = '${x.auth.password}'`
    let y = await sequelize.query(query)
    res.send(y[0])
})

router.post('/notications', async function (req, res) {
    let userId = Object.keys(req.body)[0];
    console.log(userId);

    // let query = `SELECT id FROM help_requests WHERE userReq = '${userId}'`

    // let query = `SELECT id, userHelper 
    // FROM help_requests 
    // WHERE userReq = '${userId}'`

    let query = `SELECT help_request_id, helper_id, name, description
    FROM help_requests, help_requests_helpers
    WHERE help_requests.userReq = '${userId}'
    AND help_requests.id = help_requests_helpers.help_request_id`
    let helpRequestId = await sequelize.query(query);
    console.log(helpRequestId[0]);
    res.send(helpRequestId);
})

router.post('/getUserDetails', async function (req, res) {
    let userId = Object.keys(req.body)[0];
    console.log(userId);

    let query = `SELECT * FROM user WHERE id = '${userId}'`
    let helperDetails = await sequelize.query(query);
    console.log(helperDetails[0]);
    res.send(helperDetails[0]);
})

module.exports = router