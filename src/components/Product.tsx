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

interface ModalItemType {
    category: string;
    title: string;
}

class Product extends React.Component<ModalItemType, Props, State> {
    search = this.props.category;

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

            const response = await axios.get('https://api.dooca.store/products  ', config);

            const data = await response.data
            // this.setState({ items: response, loading: false });
            console.log(data);
        } catch (error) {
            console.error(error);
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <>
                <button className="text-center hover:scale-105 duration-150 " onClick={this.showModal}>
                    <div className="w-[180px] h-[180px] bg-white rounded-full shadow-lg bg-cyan-600"></div>
                    <h3 className='mt-5'>{this.props.category}</h3>
                </button>
                <Modal
                    title="Items"
                    open={this.state.modalVisible}
                    onOk={this.hideModal}
                    onCancel={this.hideModal}
                >
                    <div className="flex justify-center">
                        <div className='flex flex-wrap w-full'>
                            {this.state.loading ? (
                                <Spin />
                            ) : (
                                this.state.items.map(({ category, title }: ModalItemType) => (
                                    <ModalItem category={category} title={title} />
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
