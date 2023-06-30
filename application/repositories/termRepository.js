const termDbRepository = function (repository) {
    const findAll = () => repository.findAll();
    const findById = (id) => repository.findById(id);
    const add = (termEntity) => repository.add(termEntity);
    const updateById = (id, termEntity) => repository.updateById(id, termEntity);
    const deleteById = (id) => repository.deleteById(id);

    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    };
}


export default termDbRepository;
