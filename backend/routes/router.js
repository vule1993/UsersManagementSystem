//get the route and print out string to confirm 
import express from 'express'
import { addNewUser, deleteUser, updateUser, findUser } from '../controllers/controllers.js'
import {homeRoute, addUserRoute, editUserRoute} from '../services/render.js'

const routes = express.Router()


/** @description using render.js in services to render page */
routes.get('/', homeRoute)

routes.get('/addNewUser', addUserRoute)

routes.get('/editUser', editUserRoute)



/** API for the add, edit, update, delete action for */
routes.post('/api/users', addNewUser)
routes.get('/api/users', findUser)

routes.put('/api/users/:id', updateUser)
routes.delete('/api/users/:id', deleteUser)



export { routes }