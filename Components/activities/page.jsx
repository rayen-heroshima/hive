// src/components/ActivitiesPage.jsx
import React from 'react';
import { FocusCards } from '../ui/focus-cards'; // Ensure correct path and import style

const ActivitiesPage = () => {
    const cards = [
        {
            title: 'Event 1',
            src: '/406756225_306527189017901_3921461586708079389_n.jpg',
        },
        {
            title: 'Event 2',
            src: '/417411416_355321257471827_7453237111804400710_n.jpg',
        },
        {
            title: 'Event 3',
            src: '/432452544_370190429318243_1113488030304913165_n.jpg',
        },
        {
            title: 'Event 4',
            src: '/458918371_483969587940326_8842111963609989717_n.jpg',
        },
        {
            title: 'Event 5',
            src: '/461072996_1070870367781258_7247568027207484252_n.png',
        },
        {
            title: 'Event 6',
            src: '/459573438_490297087307576_3500110452480446925_n.jpg',
        },
    ];

    return (
        <div className="bg-[#222020] min-h-screen p-8 flex flex-col items-center">
            <h1 className="text-4xl text-orange font-bold mb-8">OUR EVENTS</h1>
            <FocusCards cards={cards} />
        </div>
    );
};

export default ActivitiesPage;
