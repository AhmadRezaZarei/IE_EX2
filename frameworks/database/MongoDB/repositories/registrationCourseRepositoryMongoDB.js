import RegistrationCourseModel from "../models/registration_course.js";


const registrationCourseRepositoryMongoDB = function () {

    const find = (termId, isPreReg) => RegistrationCourseModel.find({termId: termId, isPreReg: isPreReg})

    const add = (regCourseEntity) => {

        const newRegCourse = new RegistrationCourseModel({
            idNumber: regCourseEntity.getIdNumber(),
            termCourseId: regCourseEntity.getTermCourseId(),
            termId: regCourseEntity.getTermId(),
            isPreReg: regCourseEntity.isPreReg()
        })

        return newRegCourse.save()

    }


    const deleteById = (id) => RegistrationCourseModel.deleteOne({idNumber: id})


    return {
        find,
        add,
        deleteById
    }

}

export default registrationCourseRepositoryMongoDB;