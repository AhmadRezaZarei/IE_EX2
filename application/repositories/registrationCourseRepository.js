const registrationCourseDbRepository = function (repository) {
    const find = (termId, isPreReg) => repository.find(termId, isPreReg);
    const add = (regCourseEntity) => repository.add(regCourseEntity);
    const deleteById = (id) => repository.deleteById(id);

    return {
        find,
        add,
        deleteById
    };
}


export default registrationCourseDbRepository;
