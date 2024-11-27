import React, { useEffect, useState } from 'react';
import CustomButton from "./CustomButton";
import { useNavigate } from 'react-router-dom';
import { deteleStudent, getData } from '../dataService';

const CrudStudents = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    const handleClick = () => {
        navigate("/createStudent")
    };

    const handleDelete = async (id) => {
        try {
            await deteleStudent(id)
            setData(data.filter(student => student._id !== id))
        } catch (error) {
            setError(err)
        }
    };

    const handleNextPage = () => { setCurrentPage((prevPage) => prevPage + 1); };

    const handlePreviousPage = () => { setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1)); };

    const displayedData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleEdit = (student) => {
        navigate('/createStudent', { state: { student } });
    };

    useEffect(() => {

        

        const fetchData = async () => {
            try {
                const result = await getData()
                setData(result)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return <p>Cargando...</p>
    console.log(loading);  
    if (error) return <p>Error al cargar los datos {error.message}</p>


    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-5/6 h-screen">
                <h1 className="text-3xl font-bold underline mb-3 mt-3">
                    Students
                </h1>
                <CustomButton texto="Create a new student" color="red" onClick={handleClick} />

                <div className="overflow-x-auto mt-4">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">lastName</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {displayedData.map((student) => (
                                <tr key={student._id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{student.firstName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.age}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.address}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button className="px-2 py-1 mr-1 bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={() => handleEdit(student)}>Edit</button>
                                        <button className="px-2 py-1 mr-1 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => handleDelete(student._id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center px-6 py-3 bg-gray-50">
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300" onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
                        <span className="text-sm text-gray-700">Page 1 of 10</span>
                        <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300" onClick={handleNextPage} disabled={currentPage === Math.ceil(data.length / itemsPerPage)}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrudStudents;
