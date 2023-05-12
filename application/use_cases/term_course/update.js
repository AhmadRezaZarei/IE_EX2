import termCourse from "../../../entities/termCourse.js";

const update = function ({
                             idNumber,
                             courseId,
                             courseDataAndTime,
                             examDataAndTime,
                             location,
                             professorId,
                             capacity,
                             term,
                             termCourseRepository
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const courseEntity = termCourse({
        idNumber,
        courseId,
        courseDataAndTime,
        examDataAndTime,
        location,
        professorId,
        capacity,
        term
    });

    return termCourseRepository.updateById(idNumber, courseEntity);
}


export default update

//module.exports.addProfessor = addProfessor;
