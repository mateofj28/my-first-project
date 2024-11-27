const CustomModal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">Excellent</h2>
                <p className="mb-4">Student successfully created</p>
                <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CustomModal;