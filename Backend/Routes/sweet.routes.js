import express from 'express'
import { add, deleteSweet, getAllSweets, searchSweets, updateSweet } from '../Controllers/sweet.controller.js';
import { isAuthenticated } from '../Middlewares/isAuthenticated.js';

const router = express.Router();

router.route('/').post(isAuthenticated,add);
router.route('/').get(isAuthenticated,getAllSweets);
router.route('/:id').put(isAuthenticated,updateSweet);
router.route('/search').get(isAuthenticated,searchSweets);
router.route('/:id').delete(isAuthenticated,deleteSweet);



export default router;