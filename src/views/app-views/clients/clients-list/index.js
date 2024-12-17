import React, { Component } from 'react'
import { Card, Table, Tag, Tooltip, message, Button } from 'antd';
import { EyeOutlined, EditOutlined, DeleteOutlined, LoadingOutlined } from '@ant-design/icons';
import moment from 'moment';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import userData from "assets/data/user-list.data.json";
import usersService from '../../../../services/UsersService';
import Loading from 'components/shared-components/Loading';
import EditProfile from '../client-edit/EditProfile';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export class ClientsList extends Component {

	state = {
		users: null,
		isLoadingUsers: true,
		errorUsers: null,
		edit: false,
		//userProfileVisible: false,
		selectedUser: null
	}

	componentDidMount() {
		this.callApi();
	}

	callApi = () => {
		usersService.getUsers().then(resp => this.setState({ users: resp, isLoadingUsers: false }))
			.catch(err => this.setState({ errorUsers: err, isLoadingUsers: false }));
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		/*this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});*/
		this.setState({ edit: true, selectedUser: userInfo });
	};
	
	/*closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    	});
	}*/

	render() {
		const { users, userProfileVisible, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						{record.name + ' | ' + record.email}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'City',
				dataIndex: 'city',
				render: (_, record) => (
					<div className="d-flex">
						{record.address.city}
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.address.city.toLowerCase();
  						b = b.address.city.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'Company',
				dataIndex: 'company',
				render: (_, record) => (
					<span>{record.company.name}</span>
				),
				sorter: {
					compare: (a, b) => {
						a = a.company.name.toLowerCase();
						b = b.company.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: '',
				dataIndex: 'actions',
				render: (_, elm) => (
					<div className="text-right">
						<Tooltip title="View">
							<Button type="primary" className="mr-2" icon={<EditOutlined />} onClick={() => {this.showUserProfile(elm)}} size="small"/>
						</Tooltip>
						<Tooltip title="Delete">
							<Button danger icon={<DeleteOutlined />} onClick={()=> {this.deleteUser(elm.id)}} size="small"/>
						</Tooltip>
					</div>
				)
			}
		];
		return (
			<>
				{this.state.isLoadingUsers ? <Loading cover="content"/> : this.state.errorUsers ?
					<>{this.state.errorUsers.message}</> : this.state.edit ? <Redirect to={this.props.match.url.split('/').slice(0, -1).join('/') + '/client-edit/edit-profile/' + this.state.selectedUser.id} /> : (
					<Card bodyStyle={{'padding': '0px'}}>
						<Table columns={tableColumns} dataSource={users} rowKey='id' />
					</Card>)}
			</>
		)
	}
}

export default ClientsList
