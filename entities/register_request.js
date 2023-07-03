const registerRequestEntity = function ({
                                            idNumber,
                                            studentIdNumber,
                                            isPreReg,
                                            regCourseIdNumber,
                                            termIdNumber
                                        }) {
    return {
        getIdNumber: () => idNumber,
        getStudentIdNumber: () => studentIdNumber,
        isPreReq: () => isPreReg,
        getReqCourseIdNumber: () => regCourseIdNumber,
        getTermIdNumber: () => termIdNumber
    };
}

export default registerRequestEntity
