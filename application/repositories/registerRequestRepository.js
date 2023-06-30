const registerRequestDbRepository = function (repository) {
    const findAll = (studentIdNumber, termIdNumber, isPreReg) => repository.findAll(studentIdNumber, termIdNumber, isPreReg);
    const register = (registerRequestEntity) => repository.register(registerRequestEntity);
    const unregister = (id) => repository.unregister(id);

    return {
        register,
        unregister,
        findAll,
    };
}


export default registerRequestDbRepository;
