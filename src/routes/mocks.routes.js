import { Router } from "express";
import { genPets, genUsers, insertRegisters } from "../controllers/mocks.controller.js";

const mocksRouter = Router();

mocksRouter.get('/mockingpets', genPets);
mocksRouter.get('/mockingusers', genUsers)
mocksRouter.post('/generateData/:users/:pets',insertRegisters)


export default mocksRouter;