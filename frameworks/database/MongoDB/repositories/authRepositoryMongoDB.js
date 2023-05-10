import ManagerModel from "../models/manager.js";
import StudentModel from "../models/student.js";
import ProfessorModel from "../models/professor.js";
import AdminModel from "../models/admin.js";

const authRepositoryMongoDB = function () {

    const findUser = (email, password, role) => {


        let model = StudentModel

        switch (role) {
            case "student":
                model = StudentModel;
                break;
            case 'professor':
                model = ProfessorModel;
                break
            case 'manager':
                model = ManagerModel
            case 'admin':
                model = AdminModel
                break;
        }

        return model.findOne({email: email, password: password})

    }

    return {
        findUser,
    }

}

export default authRepositoryMongoDB;