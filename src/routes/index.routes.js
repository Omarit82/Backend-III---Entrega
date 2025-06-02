import { Router } from "express";

import petsRouter from './pets.router.js';
import adoptionsRouter from './adoption.router.js';
import sessionsRouter from './sessions.router.js';
import mocksRouter from "./mocks.routes.js";
import usersRouter from "./users.router.js";

const indexRoutes = Router();

indexRoutes.use('/api/users',usersRouter);
indexRoutes.use('/api/pets',petsRouter);
indexRoutes.use('/api/adoptions',adoptionsRouter);
indexRoutes.use('/api/sessions',sessionsRouter);
indexRoutes.use('/api/mocks', mocksRouter);

export default indexRoutes;