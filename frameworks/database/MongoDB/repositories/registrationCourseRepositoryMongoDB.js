import RegistrationCourseModel from "../models/registration_course.js";


const registrationCourseRepositoryMongoDB = function () {


    [
        {
            '$match': {
                'termId': '2424234',
                'isPreReg': true
            }
        }, {
        '$lookup': {
            'from': 'termcourses',
            'localField': 'termCourseId',
            'foreignField': 'idNumber',
            'as': 'result'
        }
    }
    ]



    const find = (termId, isPreReg) => {

        const agg = [
            {
                '$match': {
                    'termId': termId,
                    'isPreReg': isPreReg
                }
            }, {
                '$lookup': {
                    'from': 'termcourses',
                    'localField': 'termCourseId',
                    'foreignField': 'idNumber',
                    'as': 'courses'
                }
            }
        ]

        return RegistrationCourseModel.find({termId: termId})

       // RegistrationCourseModel.find({termId: termId, isPreReg: isPreReg})
    }

    const add = (regCourseEntity) => {

        const newRegCourse = new RegistrationCourseModel({
            idNumber: regCourseEntity.getIdNumber(),
            termCourseId: regCourseEntity.getTermCourseId(),
            termId: regCourseEntity.getTermId(),
            isPreReg: regCourseEntity.isPreReg(),
            name: regCourseEntity.getName(),
            professorName: regCourseEntity.getProfessorName(),
            capacity: regCourseEntity.getCapacity(),
            classDateTime: regCourseEntity.getClassDateTime(),
            examDateTime: regCourseEntity.getExamDateTime()
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