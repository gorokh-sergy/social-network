import React from 'react'
import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  toggleIsLoadingAC,
  unFollowAC,
} from '../../redux/usersReducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
        this.props.toggleIsLoading(false)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsLoading(true)
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
      )
      .then((response) => {
        this.props.setUsers(response.data.items)
        this.props.toggleIsLoading(false)
      })
  }

  render() {
    return (
      <>
        {this.props.isLoading ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          users={this.props.users}
          unFollow={this.props.unFollow}
          follow={this.props.follow}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId))
    },
    unFollow: (userId) => {
      dispatch(unFollowAC(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users))
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount))
    },
    toggleIsLoading: (isLoading) => {
      dispatch(toggleIsLoadingAC(isLoading))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
