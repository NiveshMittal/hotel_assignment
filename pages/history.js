import React from 'react'
import NavBar from '../components/Navbar'
import axios from 'axios'
import { useState } from 'react'
const history = () => {
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

            <h1 class="text-2xl font-bold mt-4">Current Bookings</h1>
            <div className="flex flex-wrap justify-center">
                {data.map((card) => (
                    <div key={card.id} className="m-4 max-w-sm rounded overflow-hidden shadow-lg">
                        <div className="px-6 py-4">
                            <a href="#">
                                <img
                                    class="p-8 rounded-t-lg"
                                    src="https://media.istockphoto.com/id/843823656/photo/hotel-room.jpg?s=612x612&w=0&k=20&c=8-ZNA52e5GlPuuQPXqZRgsTO9WRZwZgFtDotyC6CGHY="
                                    alt="product image"
                                />
                            </a>
                            <div className="font-bold text-xl mb-2">{card.email}</div>
                            <div className="font-bold text-xl mb-2">{card.startTime} Upto {card.endTime}</div>
                            <div className='flex flex-row justify-between mt-10'>
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                                    Room No. {card.roomNumber}
                                </h5>
                                <p className="text-gray-700 text-base mb-5">₹{card.price}</p>

                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default history