import axios from 'axios'
import React from 'react'
import NavBar from '../components/Navbar'
import { useState } from 'react'
const remove = () => {
    const [data, setdata] = useState([])

    async function load() {

        try {
            const response = await axios.get('/api/history')
            setdata(response.data);

        } catch (err) {
            console.log(err);

        }
    }
    load();


    return (
        <div>
            <NavBar />
            <div className='grid grid-cols-3 gap-8 m-8' >
                {data.map((card) => (
                    <div key={card.id} className="bg-cyan-100 shadow-md rounded-md p-4">
                        <h2 className="text-lg font-medium">Room No. {card.roomNumber}</h2>
                        <p className="text-gray-500 mt-2">Registered email: {card.email}</p>
                        <p className="text-gray-500 mt-2">Room Type: {card.roomType} </p>
                        <p className="text-gray-500 mt-2">{card.startTime} upto {card.endTime}</p>
                        <p className="text-gray-500 mt-2">Price: ₹{card.price}</p>
                        <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
                            Delete Booking
                        </button>
                    </div>
                ))}

            </div>

        </div>
    )
}

export default remove