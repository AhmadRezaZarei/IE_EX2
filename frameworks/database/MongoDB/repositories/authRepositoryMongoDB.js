import ManagerModel from "../models/manager.js";
import StudentModel from "../models/student.js";
import ProfessorModel from "../models/professor.js";
import AdminModel from "../models/admin.js";

const authRepositoryMongoDB = function () {

    const findUser = (email, password, role) => {



        return new Promise(( async (resolve, reject) => {

            let query = {email: email, password: password}

            let prepare = (user, role) => {
                return {
                    firstName: user.firstName,
                    role: role,
                    idNumber: user.idNumber
                }
            }

            try {
                const result = await ProfessorModel.findOne(query)
                resolve(prepare(result, "professor"))
            } catch (e) {

            }

            try {
                const result = await StudentModel.findOne(query)
                resolve(prepare(result, "student"))
            } catch (e) {

            }

            try {
                const result = await ManagerModel.findOne(query)
                resolve(prepare(result, "manager"))
            } catch (e) {

            }

            try {
                const result = await AdminModel.findOne(query)
                resolve(prepare(result, "admin"))
            } catch (e) {

            }

            reject()

        }))

    }

    return {
        findUser,
    }

}

export default authRepositoryMongoDB;