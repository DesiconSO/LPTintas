import useModal from "../functions/UseModal";
import Modal from "./Modal/Modal";
import { useEffect, useState } from 'react';

interface ProductType {
    id: number;
    name: string;
    description: string;
    image: string;
}

export default function Product({ id, name, description, image }: ProductType) {
    const { isOpen, toggle } = useModal();

    return (
        <>
            <button className="text-center hover:scale-105 duration-150" onClick={toggle}>
                <div className="w-[180px] h-[180px] bg-white rounded-full shadow-lg"></div>
                <h3 className='mt-5'>{name}</h3>
            </button>
            {isOpen && (
            <Modal isOpen={isOpen} toggle={toggle}>

            </Modal>
            )}
        </>
    );
}