import authController from "../../../adapters/controllers/authController.js";
import authRepository from "../../../application/repositories/authRepository.js";
import authRepositoryMongoDB from "../../database/MongoDB/repositories/authRepositoryMongoDB.js";
import authServiceImpl from "../../services/authService.js";
import authServiceInterface from "../../../application/service/authService.js";

const authRouter = function (express) {

    const router = express.Router()

    const controller = authController(authServiceImpl, authServiceInterface, authRepository, authRepositoryMongoDB)

    router.post("/login", controller.login)

    return router;

}
export default authRouter;