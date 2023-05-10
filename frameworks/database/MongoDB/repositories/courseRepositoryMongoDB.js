import CourseModel from "../models/course.js";


const courseRepositoryMongoDB = function () {

    const findAll = (fieldOfStudy = null) => {

        if (fieldOfStudy == null)
            return CourseModel.find({})
        return CourseModel.find({fieldOfStudy: fieldOfStudy})
    }

    const findById = (id) => CourseModel.findOne({idNumber: id})

    const add = (courseEntity) => {

        const newCourse = new CourseModel({
            name: courseEntity.getName(),
            idNumber: courseEntity.getIdNumber(),
            prerequisites: courseEntity.getPrerequisites(),
            corequisites: courseEntity.getCorequisites(),
            unitCount: courseEntity.getUnitCount(),
            fieldOfStudy: courseEntity.getFieldOfStudy()
        })

        return newCourse.save()

    }

    const updateById = (id, courseEntity) => {

        const updateCourse = {
            name: courseEntity.getName(),
            idNumber: courseEntity.getIdNumber(),
            prerequisites: courseEntity.getPrerequisites(),
            corequisites: courseEntity.getCorequisites(),
            unitCount: courseEntity.getUnitCount(),
            fieldOfStudy: courseEntity.getFieldOfStudy()
        }

        return CourseModel.findOneAndUpdate({idNumber: id}, {$set: updateCourse}, {new: true})

    }

    const deleteById = (id) => CourseModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}

export default courseRepositoryMongoDB;