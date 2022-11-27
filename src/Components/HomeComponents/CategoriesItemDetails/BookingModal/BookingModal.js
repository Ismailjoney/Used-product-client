import React from 'react';

const BookingModal = () => {
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="BookingModal" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="BookingModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="BookingModal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4"> free!</p>
                </div>
            </div>
        </>
    );
};

export default BookingModal;