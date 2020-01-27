const express = require("express")
const router = express.Router()
const Sequelize = require('sequelize')
// const sequelize = new Sequelize('mysql://root:@localhost/volunteerhood')
const sequelize = new Sequelize('mysql://root:Aliahumus1@localhost/volunteerhood')

router.get("/feed", async function (req, res) {
    let query = `SELECT * FROM help_requests`
    let result = await sequelize.query(query)
    res.send(result)
})

router.post("/signup", async function (req, res) {
    let newUser = req.body
    let query = `INSERT INTO user VALUES(null, '${newUser.name}','${newUser.email}' ,
            '${newUser.password}', '${newUser.phone}', '${newUser.radius}', '${newUser.ranking}', '${newUser.counter}')`
    let x = await sequelize.query(query)
    res.send(x)
})


router.post("/addSkill", function (req, res) {
    let skills = req.body
    skills.skills.forEach(s => {
        let query = `INSERT INTO user_skills VALUES( '${skills.userID}', '${s}' )`
        sequelize.query(query)
    })
    res.end()
})

router.post("/feed", function (req, res) {
    let newHelp = req.body
    console.log(newHelp)
    let query = `INSERT INTO help_requests VALUES(null, '${newHelp.userReq}', null,
         'open', '${newHelp.description}', '${newHelp.skill}', '${newHelp.date}')`
    sequelize.query(query)
    res.send('the request inserted')
})

router.put("/feed/:rid/:hid", function (req, res) {
    let rid = req.params.rid
    let hid = req.params.hid
        let query = `UPDATE help_requests SET status = 'in process', userHelper = ${hid} WHERE id = ${rid} `
        sequelize.query(query)
        res.end()
 })

router.post('/login', async function (req, res) {
    let x = req.body;
    // console.log(x.auth)
    let query = `SELECT * FROM user WHERE email = '${x.auth.email}' AND password = '${x.auth.password}'`
    let y = await sequelize.query(query)
    res.send(y[0])
})

module.exports = router