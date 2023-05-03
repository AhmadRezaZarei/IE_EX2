const course = function ({
                             name,
                             idNumber,
                             prerequisites,
                             corequisites,
                             unitCount,
                         }) {
    return {
        getName: () => name,
        getIdNumber: () => idNumber,
        getPrerequisites: () => prerequisites,
        getCorequisites: () => corequisites,
        getUnitCount: () => unitCount,
    };
}

export default course

//module.exports.professor = professor;