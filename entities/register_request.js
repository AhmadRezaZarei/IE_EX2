const registerRequestEntity = function ({
                                            idNumber,
                                            studentIdNumber,
                                            isPreReq,
                                            regCourseIdNumber,
                                            termIdNumber
                                        }) {
    return {
        getIdNumber: () => idNumber,
        getStudentIdNumber: () => studentIdNumber,
        isPreReq: () => isPreReq,
        getReqCourseIdNumber: () => regCourseIdNumber,
        getTermIdNumber: () => termIdNumber
    };
}

export default registerRequestEntity
