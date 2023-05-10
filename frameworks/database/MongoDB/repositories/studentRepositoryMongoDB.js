import StudentModel from "../models/student.js";


const studentRepositoryMongoDB = function () {

    const findAll = () => StudentModel.find({})

    const findById = (id) => StudentModel.findOne({idNumber: id})

    const add = (studentEntity) => {

        const newProf = new StudentModel({
            firstName: studentEntity.getFirstName(),
            lastName: studentEntity.getLastName(),
            idNumber: studentEntity.getIdNumber(),
            password: studentEntity.getPassword(),
            email: studentEntity.getEmail(),
            phone: studentEntity.getPhone(),
            grade: studentEntity.getGrade(),
            entranceYear: studentEntity.getEntranceYear(),
            mean: studentEntity.getMean(),
            faculty: studentEntity.getFaculty(),
            fieldOfStudy: studentEntity.getFieldOfStudy(),
        })

        return newProf.save()

    }

    const updateById = (id, studentEntity) => {

        const updatedStudent = {
            firstName: studentEntity.getFirstName(),
            lastName: studentEntity.getLastName(),
            idNumber: studentEntity.getIdNumber(),
            password: studentEntity.getPassword(),
            email: studentEntity.getEmail(),
            phone: studentEntity.getPhone(),
            grade: studentEntity.getGrade(),
            entranceYear: studentEntity.getEntranceYear(),
            mean: studentEntity.getMean(),
            faculty: studentEntity.getFaculty(),
            fieldOfStudy: studentEntity.getFieldOfStudy(),
        }

        return StudentModel.findOneAndUpdate({idNumber: id}, {$set: updatedStudent}, {new: true})

    }

    const deleteById = (id) => StudentModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}

export default studentRepositoryMongoDB;