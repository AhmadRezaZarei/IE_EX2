const termCourse = function ({
                                idNumber,
                                 courseId,
                                 courseDataAndTime,
                                 examDataAndTime,
                                 location,
                                 professorId,
                                 capacity,
                                 termIdNumber,
                             }) {
    return {
        getIdNumber: () => idNumber,
        getCourseDataAndTime: () => courseDataAndTime,
        getExamDataAndTime: () => examDataAndTime,
        getLocation: () => location,
        getProfessorId: () => professorId,
        getCapacity: () => capacity,
        getTermIdNumber: () => termIdNumber,
        getCourseId: () => courseId
    };
}

export default termCourse
