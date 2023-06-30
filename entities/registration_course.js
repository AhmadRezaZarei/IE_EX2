const registrationCourseEntity = function ({
                                               idNumber,
                                               termId,
                                               termCourseId,
                                               isPreReg
                                           }) {
    return {
        getIdNumber: () => idNumber,
        getTermId: () => termId,
        getTermCourseId: () => termCourseId,
        isPreReg: () => isPreReg,
    };
}
export default registrationCourseEntity
