import course from "../../../entities/course.js";

const update = function ({
                             name,
                             idNumber,
                             prerequisites,
                             corequisites,
                             unitCount,
                             courseRepository
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const courseEntity = course({name, idNumber, prerequisites, corequisites, unitCount});

    return courseRepository.updateById(idNumber, courseEntity);
}


export default update

//module.exports.addProfessor = addProfessor;
