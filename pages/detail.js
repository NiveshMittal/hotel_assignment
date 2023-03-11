import { Navbar } from '@mantine/core'
import React from 'react'
import { useRouter } from 'next/router'
import NavBar from '../components/Navbar'
import axios from 'axios'

const detail = () => {
    const router = useRouter();
    const { email, roomType, roomNumber, startTime, endTime, price } = router.query;
    const book = async () => {
        try {
            let data = { email: email, roomType: roomType, roomNumber: roomNumber, startTime: startTime, endTime: endTime, price: price };
            await axios.post('/api/rooms', data)
            router.push('/history');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <div>
            <NavBar />
            <div>
                <div class="grid h-screen place-items-center ">
                    <h1 className="text-black font-bold font-serif text-4xl sm:text-2xl md:text-3xl ">Book Your Dream Hotel Room Now </h1>
                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img
                                class="p-8 rounded-t-lg"
                                src="https://media.istockphoto.com/id/626673214/photo/interior-of-the-hotel-bedroom.jpg?s=612x612&w=0&k=20&c=Stj0mw0U58qVFeYpXQTSvD7iDHjsBdSiC8ScNqwIS5A="
                                alt="product image"
                            />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    Room {roomNumber}
                                </h5>
                            </a>

                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">
                                    ₹{price}
                                </span>
                                <a
                                    onClick={book}
                                    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                                >
                                    Confirm Booking
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default detail