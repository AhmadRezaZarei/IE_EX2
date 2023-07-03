import registerRequestController from "../../../adapters/controllers/registerRequestController.js";
import registerRequestDbRepository from "../../../application/repositories/registerRequestRepository.js";
import registerRequestRepositoryMongoDB from "../../database/MongoDB/repositories/registerRequestRepositoryMongoDB.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const registerRequestRouter = function (express) {


    const router = express.Router()

    const controller = registerRequestController(registerRequestDbRepository, registerRequestRepositoryMongoDB)

    let md = function (isPreReg) {
        return function (req, res, next) {
            req.query.isPreReg = isPreReg
            next()
        }
    }

    // register request id number
    router.post("/course/preregister/:id", md(true),  controller.registerRequest)

    router.delete("/course/preregister/:id", md(true), controller.unregisterRequest)

    // term id number
    router.get("/term/:id/preregistrations", md(true), controller.fetchRegisterRequest)


    // register request id number
    router.post("/course/register/:id", md(false), controller.registerRequest)

    router.delete("/course/register/:id", md(false), controller.unregisterRequest)

    // term id number
    router.get("/term/id/registrations", md(false), controller.fetchRegisterRequest)

    return router;

}
export default registerRequestRouter;