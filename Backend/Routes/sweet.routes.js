import express from 'express'
import { add, getAllSweets, updateSweet } from '../Controllers/sweet.controller.js';
import { isAuthenticated } from '../Middlewares/isAuthenticated.js';

const router = express.Router();

router.route('/').post(isAuthenticated,add);
router.route('/').get(isAuthenticated,getAllSweets);
router.route('/:id').put(isAuthenticated,updateSweet);



export default router;