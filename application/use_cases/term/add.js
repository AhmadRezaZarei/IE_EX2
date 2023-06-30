import termEntity from "../../../entities/term.js"

const addTerm = function ({
                              idNumber,
                              name,
                              isEnded,
                              termRepository
                          }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const newTerm = termEntity({
        idNumber,
        name,
        isEnded,
    });

    return termRepository.add(newTerm);
}


export default addTerm

//module.exports.addProfessor = addProfessor;
