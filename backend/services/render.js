import axios from 'axios'
function homeRoute (req, res) {
 // Make a get request to /api/users
 axios.get('http://localhost:3000/api/users')
 .then(function(response){
     res.render('index', { users : response.data });
 })
 .catch(err =>{
     res.send(err);
 })
}

function addUserRoute(req, res) {
    res.render('addNewUser')
}

function editUserRoute(req, res){
    axios.get('http://localhost:3000/api/users', { params : { id : req.query.id }})
    .then(function(userdata){
        console.log(userdata.data)
        res.render("editUser", {user : userdata.data})
    })
    .catch(err =>{
        res.send(err);
    })}

export {homeRoute, addUserRoute, editUserRoute}