import * as React from 'react';
import { Modal, Button, Form, Input } from 'antd';
import axios from 'axios';

interface Props {
  // props go here
}

interface State {
  modalVisible: boolean;
  categories: string[];
}

class CategorySearchModal extends React.Component<Props, State> {
  state = {
    modalVisible: false,
    categories: []
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  handleCancel = () => {
    this.setState({ modalVisible: false });
  };

  handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const searchTerm = form.elements.namedItem('searchTerm') as HTMLInputElement;
    axios.get(`https://api.dooca.io/categories?q=${searchTerm.value}`)
      .then(response => {
        this.setState({ categories: response.data.categories });
      });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Search Categories"
          open ={this.state.modalVisible}
          onCancel={this.handleCancel}
          footer={null}
        >
          <Form onSubmitCapture={this.handleSearch}>
            <Form.Item label="Search Term">
              <Input name="searchTerm" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Search
              </Button>
            </Form.Item>
          </Form>
          {this.state.categories.length > 0 && (
            <ul>
              {this.state.categories.map(category => (
                <li key={category}>{category}</li>
              ))}
            </ul>
          )}
        </Modal>
      </>
    );
  }
}

export default CategorySearchModal;
