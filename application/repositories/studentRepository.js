const studentDbRepository = function (repository) {
    const findAll = () => repository.findAll();
    const findById = (id) => repository.findById(id);
    const add = (profEntity) => repository.add(profEntity);
    const updateById = (id, profEntity) => repository.updateById(id, profEntity);
    const deleteById = (id) => repository.deleteById(id);

    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    };
}


export default studentDbRepository;
