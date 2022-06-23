import React from 'react'
import { connect } from 'react-redux'
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unFollowAC,
} from '../../redux/usersReducer'
import UsersAPIComponent from './UsersAPIComponent'

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
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
  }
}
const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersAPIComponent)
export default UsersContainer
