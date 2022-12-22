import { ReactNode } from "react";
import { X } from "phosphor-react";
import { useEffect, useState } from 'react';

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

interface ModalItemType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function Modal(props: ModalType) {
    const [data, setData] = useState<any>([]);

    useEffect(() => {
        getCateories()
    }, []);

    async function getCateories() {
        const response = await fetch(`https://fakestoreapi.com/products`)
        const data = await response.json()

        setData(data)
    }

    return (
        <>
            <div onClick={props.toggle} className="absolute z-40 bg-black bg-opacity-5 h-screen w-screen top-0 left-0 flex justify-center items-center duration-100" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                <div onClick={(e) => e.stopPropagation()} className="w-1/2 h-2/3 bg-white opacity-100 rounded-lg duration-100 overflow-auto">
                    <div className="w-full rounded-t-lg flex justify-end pt-4 pr-5">
                        <button className="hover:scale-110 duration-100 w-5 h-5" onClick={props.toggle}>
                            <X className="w-full h-full" />
                        </button>
                    </div>
                    <div className="p-5">
                        {
                            data.map((item: ModalItemType) => (
                                <div key={item.id} className="flex flex-col">
                                    <p>{item.title}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}