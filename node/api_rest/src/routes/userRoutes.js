import { Router } from "express";
import UserController from "../controllers/UserController";
import loginRequired from "../middlewares/loginRequired"

const router = new Router();

// router.get('/', UserController.index) // Lista usuários
// router.get('/:id', UserController.show) // Lista usuário

router.post('/', UserController.create)
router.put('/', loginRequired, UserController.update);
router.delete('/', loginRequired, UserController.delete);

export default router;
