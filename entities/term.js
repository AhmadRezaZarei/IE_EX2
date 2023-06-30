const termEntity = function ({
                                 idNumber,
                                 name,
                                 isEnded,
                             }) {
    return {
        getIdNumber: () => idNumber,
        getName: () => name,
        isEnded: () => isEnded,
    };
}

export default termCourse
