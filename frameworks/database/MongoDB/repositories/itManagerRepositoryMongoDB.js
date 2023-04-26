import ITManagerModel from "../models/it_manager.js";


const itManagerRepositoryMongoDB = function () {

    const findAll = () => ITManagerModel.find({})

    const findById = (id) => ITManagerModel.findOne({idNumber: id})

    const add = (itManagerEntity) => {

        const newProf = new ITManagerModel({
            firstName: itManagerEntity.getFirstName(),
            lastName: itManagerEntity.getLastName(),
            idNumber: itManagerEntity.getIdNumber(),
            password: itManagerEntity.getPassword(),
            email: itManagerEntity.getEmail(),
            phone: itManagerEntity.getPhone()
        })

        return newProf.save()

    }

    const updateById = (id, itManagerEntity) => {

        const updatedItManager = {
            firstName: itManagerEntity.getFirstName(),
            lastName: itManagerEntity.getLastName(),
            idNumber: itManagerEntity.getIdNumber(),
            password: itManagerEntity.getPassword(),
            email: itManagerEntity.getEmail(),
            phone: itManagerEntity.getPhone(),
        }

        return ITManagerModel.findOneAndUpdate({idNumber: id}, {$set: updatedItManager}, {new: true})

    }

    const deleteById = (id) => ITManagerModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}

export default itManagerRepositoryMongoDB;