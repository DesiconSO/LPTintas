interface ModalItemType {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

export default function ModalItem({ title, price, description, category, image }: ModalItemType ) {
    return (<>
        <p>{title}</p>
    </>)
}