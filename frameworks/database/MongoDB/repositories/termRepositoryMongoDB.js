import TermModel from "../models/term.js";


const termRepositoryMongoDB = function () {

    const findAll = () => TermModel.find({})

    const findById = (id) => TermModel.findOne({idNumber: id})

    const add = (termEntity) => {

        const newTerm = new TermModel({
            idNumber: termEntity.getIdNumber(),
            name: termEntity.getCourseId(),
            isEnded: termEntity.getCourseDataAndTime(),
        })

        return newTerm.save()

    }

    const updateById = (id, termEntity) => {

        const updatedTerm = {
            name: termEntity.getCourseId(),
            isEnded: termEntity.getCourseDataAndTime(),
        }

        return TermCourseModel.findOneAndUpdate({idNumber: id}, {$set: updatedTerm}, {new: true})

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