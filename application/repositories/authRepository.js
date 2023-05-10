const authRepository = function (repository) {
    const findUser = () => repository.findUser();

    return {
        findUser
    };
}


export default authRepository
