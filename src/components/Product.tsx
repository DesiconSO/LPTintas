import * as React from 'react';
import { Modal, Spin } from 'antd';
import axios, { AxiosRequestConfig } from 'axios';
import ModalItem from './Modal/ModalItem';

interface Props { }

interface State {
    modalVisible: boolean;
    items: any[];
    loading: boolean;
    title: string;
}

interface CategoryItem {
    category: string;
    title: string;
    image: string;
}

interface ModalItemType {
    id: string
    meta_description: string;
    name: string;
    url: string;
    images: string;
}

class Product extends React.Component<CategoryItem, Props, State> {
    state = {
        modalVisible: false,
        items: [],
        loading: false,
    };

    showModal = () => {
        this.setState({ modalVisible: true });
        this.fetchItems();
    };

    hideModal = () => {
        this.setState({ modalVisible: false });
    };

    fetchItems = async () => {
        this.setState({ loading: true });

        try {
            const config: AxiosRequestConfig = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzaG9wX2lkIjo5MjksImVtYWlsIjoiMzE1ODQzNjAwNzY2NjY1NzMwMDAuZG9vY2FAYXBpLmNvbS5iciIsImZpcnN0X25hbWUiOiJEZXNpY29uIEFQSSIsInR5cGUiOiJhcGkiLCJpYXQiOjE2MzAwODE0NDd9.Acr4YRHS_wTgMBv_ITZuRDlh9J2Vg-VceHZ0jSI1wgQ',
                }
            };

            const response = await axios.get('https://api.dooca.store/products?category=300645', config);

            const data = await response.data.data

            if (data) {
                data.map((item: any) => {
                    item.images = item.images[0].src
                })
            }

            this.setState({ items: data, loading: false });
        } catch (error) {
            console.error(error);
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <>

                <button className="group hover:scale-105 duration-150 w-1/6 flex justify-center flex-col text-center items-center mt-8 lg:mt-0" onClick={this.showModal}>
                    <div className="w-[180px] h-[180px] bg-white rounded-full shadow-lg overflow-hidden flex justify-center items-center">
                        <img src={this.props.image} alt={this.props.title} className="w-[180px] h-[180px] z-1" />
                    </div>
                    <h2 className='group-hover:animate-bounce mt-5 text-center w-full p-3'><span className='border-2 border-transparent border-b-orange-300 p-2.5 group-hover:border-b-orange-500 duration-150'>{this.props.title}</span></h2>
                </button>
                <Modal
                    title="Items"
                    open={this.state.modalVisible}
                    onOk={this.hideModal}
                    centered
                    width={1000}
                    style={{ top: 30 }}
                    onCancel={this.hideModal}
                >
                    <div className="flex justify-center">

                        <div className='flex flex-wrap w-full'>
                            {this.state.loading ? (
                                <div className="flex justify-center items-center w-full h-full py-10">
                                    <Spin />
                                </div>
                            ) : (
                                this.state.items.map(({ id, name, meta_description, url, images }: ModalItemType) => (

                                    <ModalItem key={id} name={name} meta_description={meta_description} url={url} images={images} />
                                ))
                            )}

                        </div>
                    </div>

                </Modal>
            </>
        );
    }
}

export default Product;
