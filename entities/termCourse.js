const termCourse = function ({
                                idNumber,
                                 courseId,
                                 courseDataAndTime,
                                 examDataAndTime,
                                 location,
                                 professorId,
                                 capacity,
                                 termId,
                             }) {
    return {
        getIdNumber: () => idNumber,
        getCourseDataAndTime: () => courseDataAndTime,
        getExamDataAndTime: () => examDataAndTime,
        getLocation: () => location,
        getProfessorId: () => professorId,
        getCapacity: () => capacity,
        getTermIdNumber: () => termId,
        getCourseId: () => courseId
    };
}

export default termCourse
