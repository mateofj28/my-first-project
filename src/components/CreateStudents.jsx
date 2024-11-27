import React, { useEffect, useState } from 'react';
import CustomInput from './CustomInput';
import CustomButton from './CustomButton';
import CustomModal from './CustomModal';
import { createStudent, updateStudent } from '../dataService';
import { useLocation } from 'react-router-dom';
import NumericInput from './NumericInput';

const CreateStudents = () => {
    const location = useLocation()
    const [isEditing, setIsEditing] = useState(false);
    const [studentId, setStudentId] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (location.state && location.state.student) {
            const { _id, firstName, lastName, age, address } = location.state.student;
            
            setStudentId(_id)
            setFirstName(firstName)
            setLastName(lastName)
            setAge(age)
            setAddress(address)
            setIsEditing(true)
        }
    }, [])

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => {
        clearFields()
        setIsModalOpen(false);
    }

    const handleCreate = async () => {
        if (isEditing) {
            try {
                console.log("esta editando...");
                
                const createdStudent = await updateStudent(studentId, { firstName, lastName, age, address })
                console.log('Estudiante editado:', createdStudent);
                openModal()
            } catch (error) {
                console.error('Error editing student:', error);
            }
        } else {
            try {
                const createdStudent = await createStudent({ firstName, lastName, age, address })
                console.log('Estudiante creado:', createdStudent);
                openModal()
            } catch (error) {
                console.error('Error creating student:', error);
            }
        }
    };

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setAge('');
        setAddress('');
    }

    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='w-96 h-screen space-y-4 mt-5'>
                <CustomInput placeholder="FirstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                <CustomInput placeholder="LastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                {/* <CustomInput placeholder="Age" type="number" onChange={(e) => setAge(e.target.value)} value={age} /> */}
                <NumericInput placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                <CustomInput placeholder="Address" onChange={(e) => setAddress(e.target.value)} value={address} />

                <CustomButton texto={isEditing ? "Edit" : "Create"} onClick={handleCreate} />
            </div>
            <CustomModal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default CreateStudents;
