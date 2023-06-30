import termEntity from "../../../entities/term.js";

const update = function ({
                             idNumber,
                             name,
                             isEnded,
                             termRepository
                         }) {

    // TODO: add a proper validation (consider using @hapi/joi)

    const updatedTerm = termEntity({
        idNumber,
        name,
        isEnded,
    });

    return termRepository.updateById(idNumber, updatedTerm);
}


export default update

//module.exports.addProfessor = addProfessor;
