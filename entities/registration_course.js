const registrationCourseEntity = function ({
                                               idNumber,
                                               termId,
                                               name,
                                               professorName,
                                               capacity,
                                               classDateTime,
                                               examDateTime,
                                               termCourseId,
                                               isPreReg
                                           }) {
    return {
        getIdNumber: () => idNumber,
        getName : () => name,
        getProfessorName: () => professorName,
        getCapacity: () => capacity,
        getClassDateTime: ()=> classDateTime,
        getExamDateTime: () => examDateTime,
        getTermId: () => termId,
        getTermCourseId: () => termCourseId,
        isPreReg: () => isPreReg,
    };
}
export default registrationCourseEntity
