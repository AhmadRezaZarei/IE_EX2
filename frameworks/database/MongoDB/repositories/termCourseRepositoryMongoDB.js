import TermCourseModel from "../models/term_course.js";


const termCourseRepositoryMongoDB = function () {

    const findAll = () => TermCourseModel.find({})

    const findById = (id) => TermCourseModel.findOne({idNumber: id})

    const add = (termCourseEntity) => {

        const newTermCourse = new TermCourseModel({
            idNumber: termCourseEntity.getIdNumber(),
            courseId: termCourseEntity.getCourseId(),
            courseDataAndTime: termCourseEntity.getCourseDataAndTime(),
            examDataAndTime: termCourseEntity.getExamDataAndTime(),
            location: termCourseEntity.getLocation(),
            professorId: termCourseEntity.getProfessorId(),
            capacity: termCourseEntity.getCapacity(),
            term: termCourseEntity.getTerm(),
        })

        return newTermCourse.save()

    }

    const updateById = (id, termCourseEntity) => {

        const updateCourse = {
            courseId: termCourseEntity.getCourseId(),
            courseDataAndTime: termCourseEntity.getCourseDataAndTime(),
            examDataAndTime: termCourseEntity.getExamDataAndTime(),
            location: termCourseEntity.getLocation(),
            professorId: termCourseEntity.getProfessorId(),
            capacity: termCourseEntity.getCapacity(),
            term: termCourseEntity.getTerm()
        }

        return TermCourseModel.findOneAndUpdate({idNumber: id}, {$set: updateCourse}, {new: true})

    }

    const deleteById = (id) => TermCourseModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}

export default termCourseRepositoryMongoDB;