import course from "../../../entities/course.js";

const update = function ({
                             name,
                             idNumber,
                             prerequisites,
                             corequisites,
                             unitCount,
                             courseRepository,
                             fieldOfStudy
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const courseEntity = course({name, idNumber, prerequisites, corequisites, unitCount, fieldOfStudy});

    return courseRepository.updateById(idNumber, courseEntity);
}


export default update

//module.exports.addProfessor = addProfessor;
