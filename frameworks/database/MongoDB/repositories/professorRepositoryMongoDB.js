import ProfessorModel from "../models/professor";


export default function professorRepositoryMongoDB() {

    const findAll = () => ProfessorModel.find({})

    const findById = (id) => ProfessorModel.findOne({idNumber: id})

    const add = (professorEntity) => {

        const newProf = new ProfessorModel({
            firstName: professorEntity.getFirstName(),
            lastName: professorEntity.getLastName(),
            idNumber: professorEntity.getIdNumber(),
            password: professorEntity.getPassword(),
            email: professorEntity.getEmail(),
            phone: professorEntity.getPhone(),
            faculty: professorEntity.getFaculty(),
            fieldOfStudy: professorEntity.getFieldOfStudy(),
            rank: professorEntity.getRank()
        })

        return newProf.save()

    }

    const updateById = (id, professorEntity) => {

        const updatedProf = {
            firstName: professorEntity.getFirstName(),
            lastName: professorEntity.getLastName(),
            idNumber: professorEntity.getIdNumber(),
            password: professorEntity.getPassword(),
            email: professorEntity.getEmail(),
            phone: professorEntity.getPhone(),
            faculty: professorEntity.getFaculty(),
            fieldOfStudy: professorEntity.getFieldOfStudy(),
            rank: professorEntity.getRank()
        }

        return ProfessorModel.findOneAndUpdate({idNumber: id}, {$set: updatedProf}, {new: true})

    }

    const deleteById = (id) => ProfessorModel.deleteOne({idNumber: id})


    return {
        findAll,
        findById,
        add,
        updateById,
        deleteById
    }

}
