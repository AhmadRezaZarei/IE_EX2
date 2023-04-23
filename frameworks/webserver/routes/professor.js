import {professorController} from "../../../adapters/controllers/professorController";
import professorDbRepository from "../../../application/repositories/professorRepository";
import professorRepositoryMongoDB from "../../database/MongoDB/repositories/professorRepositoryMongoDB";


export default function professorRouter(express) {

    const router = express.Router()

    const controller = professorController(professorDbRepository, professorRepositoryMongoDB)

    router.post("/professor", controller.addNewProfessor)


}