const termCourse = function ({
                                idNumber,
                                 courseId,
                                 courseDataAndTime,
                                 examDataAndTime,
                                 location,
                                 professorId,
                                 capacity,
                                 term,
                             }) {
    return {
        getIdNumber: () => idNumber,
        getCourseDataAndTime: () => courseDataAndTime,
        getExamDataAndTime: () => examDataAndTime,
        getLocation: () => location,
        getProfessorId: () => professorId,
        getCapacity: () => capacity,
        getTerm: () => term,
        getCourseId: () => courseId
    };
}

export default termCourse
