const course = function ({
                             name,
                             idNumber,
                             prerequisites,
                             corequisites,
                             unitCount,
                             fieldOfStudy
                         }) {
    return {
        getName: () => name,
        getIdNumber: () => idNumber,
        getPrerequisites: () => prerequisites,
        getCorequisites: () => corequisites,
        getUnitCount: () => unitCount,
        getFieldOfStudy: () => fieldOfStudy
    };
}

export default course

//module.exports.professor = professor;