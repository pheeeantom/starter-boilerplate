import React, { Component } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload, Drawer } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import Loading from 'components/shared-components/Loading';
import usersService from '../../../../services/UsersService';

export class EditProfile extends Component {

    state = {
        body: {},
        user: null,
        isLoadingUser: true,
        errorUser: null,
    }

    componentDidMount() {
        this.callApi();
    }

    callApi = () => {
        usersService.getUser(this.props.match.params.id).then(resp => this.setState({ user: resp, isLoadingUser: false }))
            .catch(err => this.setState({ errorUser: err, isLoadingUser: false }));
    }

	render() {
		const onFinish = values => {
			const key = 'updatable';
			message.loading({ content: 'Updating...', key });
			setTimeout(() => {
				this.setState({
                    body: {
                        name: values.name,
                        email: values.email,
                        userName: values.userName,
                        phoneNumber: values.phoneNumber,
                        website: values.website,
                        address: values.address,
                        city: values.city,
                        postcode: values.postcode,
                    },
				})
                console.log(this.state.body.name)
				message.success({ content: 'Done!', key, duration: 2 });
			}, 1000);
		};
	
		const onFinishFailed = errorInfo => {
			console.log('Failed:', errorInfo);
		};

		return (
            <>
                {this.state.isLoadingUser ? <Loading cover="content"/> : this.state.errorUser ?
                    <>{this.state.errorUser.message}</> : (
                        <div className="mt-4">
                            <Form
                                name="basicInformation"
                                layout="vertical"
                                initialValues={
                                    { 
                                        'name': this.state.user?.name,
                                        'email': this.state.user?.email,
                                        'username': this.state.user?.username,
                                        'phoneNumber': this.state.user?.phone,
                                        'website': this.state.user?.website,
                                        'address': this.state.user?.address.street + ', ' + this.state.user?.address.suite,
                                        'city': this.state.user?.address.city,
                                        'postcode': this.state.user?.address.zipcode
                                    }
                                }
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Row>
                                    <Col xs={24} sm={24} md={24} lg={16}>
                                        <Row gutter={ROW_GUTTER}>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="Name"
                                                    name="name"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your name!',
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="Username"
                                                    name="username"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please input your username!'
                                                        },
                                                    ]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="Email"
                                                    name="email"
                                                    rules={[{ 
                                                        required: true,
                                                        type: 'email',
                                                        message: 'Please enter a valid email!' 
                                                    }]}
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="Phone Number"
                                                    name="phoneNumber"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="Website"
                                                    name="website"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={24}>
                                                <Form.Item
                                                    label="Address"
                                                    name="address"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="City"
                                                    name="city"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                            <Col xs={24} sm={24} md={12}>
                                                <Form.Item
                                                    label="Post code"
                                                    name="postcode"
                                                >
                                                    <Input />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                        <Button type="primary" htmlType="submit">
                                            Save Change
                                        </Button>
                                    </Col>
                                </Row>
                            </Form>
                        </div>
                    )
                }
            </>
		)
	}
}

export default EditProfile
