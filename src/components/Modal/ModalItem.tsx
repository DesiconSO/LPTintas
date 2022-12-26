interface ModalItemType {
    category: string;
    title: string;
}

export default function ModalItem({ category, title }: ModalItemType) {
    return (<>
        <div className="w-1/4 flex justify-center items-center flex-col text-center mt-6 ">
            <button className="flex justify-center items-center flex-col opacity-80 hover:opacity-100 duration-100 bg-blue-500">
                <div className="h-12 w-12 rounded-full bg-red-500">
                </div>
                
                <p className="text-center mt-1">{title.split(" ")[0]}</p>
            </button>
        </div>
    </>)
}