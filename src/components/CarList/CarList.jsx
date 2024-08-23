import React from 'react';
import CarItem from '../CarItems/CarItem';

const CarList = () => {
    // آرایه‌ای از ماشین‌ها با شناسه
    const cars = [
        {   id: 1,
            name: 'Bugatti Chiron',
            price: '$3,000,000', 
            image: '../public/image/Bugatti.jfif' 
        },

        {   id: 2,
            name: 'Lamborghini Aventador',
            price: '$400,000',
            image: '../public/image/Lamborghini.jfif' 
        },

        {   id: 3,
            name: 'Ferrari LaFerrari',
            price: '$1,500,000',
            image: '../public/image/Ferrari.jfif' 
        },

        {   id: 4,
            name: 'Porsche 918 Spyder',
            price: '$850,000',
            image: '../public/image/Porsche.jfif' 
            },

        {   id: 5,
            name: 'McLaren P1',
            price: '$1,150,000',
            image: '../public/image/McLaren.jfif'
             },

        {   id: 6,
            name: 'Koenigsegg Agera RS',
            price: '$2,500,000',
            image: '../public/image/Koenigsegg.jfif' 
        },

        {   id: 7,
            name: 'Pagani Huayra',
            price: '$2,600,000',
            image: '../public/image/Pagani.jfif' 
            },

        {   id: 8,
            name: 'Aston Martin Valkyrie',
            price: '$3,500,000',
            image: '../public/image/Aston-Martin.jfif'
             },

        {   id: 9,
            name: 'Lotus Evija',
            price: '$2,000,000',
            image: '../public/image/Lotus-Evija.jfif'
             },

        {   id: 10,
            name: 'Tesla Roadster',
            price: '$200,000',
            image: '../public/image/Tesla-Roadster.jfif'
             },

    ];

    return (
        <ul>
            {cars.map((car) => 
                <CarItem key={car.id} name={car.name} price={car.price} image={car.image} />
            )}
        </ul>
    );
};

export default CarList;