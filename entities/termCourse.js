const termCourse = function ({
                                 courseId,
                                 courseDataAndTime,
                                 examDataAndTime,
                                 location,
                                 professorId,
                                 capacity,
                                 term,
                             }) {
    return {
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
