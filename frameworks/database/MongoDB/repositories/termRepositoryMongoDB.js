import TermModel from "../models/term.js";


const termRepositoryMongoDB = function () {

    const findAll = () => TermModel.find({})

    const findById = (id) => TermModel.findOne({idNumber: id})

    const add = (termEntity) => {

        const newTerm = new TermModel({
            idNumber: termEntity.getIdNumber(),
            name: termEntity.getName(),
            isEnded: termEntity.isEnded(),
        })

        return newTerm.save()

    }

    const updateById = (id, termEntity) => {

        const updatedTerm = {
            name: termEntity.getName(),
            isEnded: termEntity.isEnded(),
        }

        return TermModel.findOneAndUpdate({idNumber: id}, {$set: updatedTerm}, {new: true})

    }

    const deleteById = (id) => TermModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}

export default termRepositoryMongoDB;