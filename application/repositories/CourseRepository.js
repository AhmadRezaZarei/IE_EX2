const courseDbRepository = function (repository) {
    const findAll = (filedOfStudy = null) => repository.findAll(filedOfStudy);
    const findById = (id) => repository.findById(id);
    const add = (courseEntity) => repository.add(courseEntity);
    const updateById = (id, courseEntity) => repository.updateById(id, courseEntity);
    const deleteById = (id) => repository.deleteById(id);

    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    };
}


export default courseDbRepository;
