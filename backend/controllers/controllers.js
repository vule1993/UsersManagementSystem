import Userdb from '../database/model.js'

//Create and save new user to mongodb
function addNewUser(req, res) {
    //validate the request
    if (!req.body) {
        res.status(400).send({ message: "Content cannot be empty" })
        return
    }

    const newUser = new Userdb({
        name: req.body.name,
        email: req.body.email,
        phone_number: req.body.phone_number,
        status: req.body.status,
    })

    //save the newUser to database
    newUser
        .save(newUser)
        .then(data => {
            res.redirect('/addNewUser')
          })
        .catch(e => {
            res.status(500).send({ message: e.message || "Error occured while addNewUser" })
        })
}


//retrieve and return all users
function findUser(req, res) {
    if(req.query.id){
        const id = req.query.id;

        Userdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message : "Not found user with id "+ id})
                }else{
                    res.send(data)
                }
            })
            .catch(err =>{
                res.status(500).send({ message: "Erro retrieving user with id " + id})
            })

    }else{
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({ message : err.message || "Error Occurred while retriving user information" })
            })
    }
}


//update user using their ID
function updateUser(req, res) {
    if (!req.body) {
        return res.status(400).send({ message: "data cannot be empty" })
    }
    //get id using params
    const id = req.params.id;
    //use findByIdAndUpdate to update data from database
    Userdb.findByIdAndUpdate(id, req.body)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot update user with id: ${id}, maybe user is not found` })
            } else {
                res.send(data)
                alert(`Successfully update the new user information`)
            }
        })
        .catch(e => {
            res.status(500).send({ message: e.message || `Update user with id: ${id} failed` })
        })
}

//delete user using their id
function deleteUser(req, res) {
    const id = req.params.id
    //user findByIdAndDelete to delete data from database 
    Userdb.findByIdAndRemove(id)
        .then(data => {
            if (!data) res.status(404).send({ message: `Cannot delete user with id: ${id}, maybe the id wrong` })
            else res.send({alert: `Successfully delete the user out of database.` })
        })
        .catch(e => {
            res.status(500).send({ message: e.message || `Delete user with id: ${id} failed` })
        })
}
export { addNewUser, findUser, updateUser, deleteUser}
