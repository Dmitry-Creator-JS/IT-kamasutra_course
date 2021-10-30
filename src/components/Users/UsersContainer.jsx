import React from 'react';
import {connect} from 'react-redux';
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    toggleFollowingProgress,
    requestUsers
} from '../../Redux/UsersReducer';
import Users from './Users';
import Preloader from "../Common/Preloader/Preloader";
import {compose} from "redux";
import {WithAuthRedirect} from "../../Hoc/WithAuthRedirect";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers} from "../../Redux/UsersSelectors";


class UsersContainer extends React.Component {

    componentDidMount() {



        this.props.getUsers(this.props.currentPage, this.props.pageSize);


    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader /> : null }
            <Users totalUserCount={this.props.totalUserCount} pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>

    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//
//
//     }
// };

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        // users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)


    }
};





export default compose(
    connect(mapStateToProps, {follow: followSuccess, unfollow: unfollowSuccess,setCurrentPage,
        toggleFollowingProgress, getUsers: requestUsers})
)(UsersContainer)