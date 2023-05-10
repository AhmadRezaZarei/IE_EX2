import ManagerModel from "../models/manager.js";


const managerRepositoryMongoDB = function () {

    const findAll = () => ManagerModel.find({})

    const findById = (id) => ManagerModel.findOne({idNumber: id})

    const add = (managerEntity) => {

        const newManager = new ManagerModel({
            firstName: managerEntity.getFirstName(),
            lastName: managerEntity.getLastName(),
            idNumber: managerEntity.getIdNumber(),
            password: managerEntity.getPassword(),
            email: managerEntity.getEmail(),
            phone: managerEntity.getPhone(),
            faculty: managerEntity.getFaculty()
        })

        return newManager.save()

    }

    const updateById = (id, managerEntity) => {

        const updatedManager = {
            firstName: managerEntity.getFirstName(),
            lastName: managerEntity.getLastName(),
            idNumber: managerEntity.getIdNumber(),
            password: managerEntity.getPassword(),
            email: managerEntity.getEmail(),
            phone: managerEntity.getPhone(),
            faculty: managerEntity.getFaculty()
        }

        return ManagerModel.findOneAndUpdate({idNumber: id}, {$set: updatedManager}, {new: true})

    }

    const deleteById = (id) => ManagerModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}

export default managerRepositoryMongoDB;