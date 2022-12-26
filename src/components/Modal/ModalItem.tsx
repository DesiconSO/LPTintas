import { useState } from "react";

interface ModalItemType {
    name: string;
    meta_description: string;
    url: string;
    images?: string;
}

export default function ModalItem({ name, meta_description, url, images }: ModalItemType) {
    return (<>
        <div className="w-full">
            <a href={url} className="grid grid-cols-8 opacity-80 hover:opacity-100 duration-100 p-2 rounded-lg border my-2">
                <div className="col-span-1 h-12 w-12 rounded-full overflow-hidden shadow-md">
                    <img src={images} alt="" />
                </div>

                <p className="col-span-7 text-center min-h-fit flex justify-center items-center">
                    {name}
                </p>
            </a>
        </div>
    </>)
}