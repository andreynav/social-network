import { Dialogs, DialogUser, DialogMessage } from "./dialogs/index"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Music from "./music/Music"
import Navbar from "./navbar/Navbar"
import News from "./news/News"
import NotFound from "./notFound/NotFound"
import { Post, MyPosts, ProfileInfo, Profile } from "./profile/index"
import Settings from "./settings/Settings"
import TextAreaForm from "./textAreaForm/TextAreaForm";
import MyPostsContainer from "./profile/myPosts/MyPostsContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import Users from "./users/Users"
import User from "./users/user/User";
import UsersContainer from "./users/UsersContainer";
import Loader from "./loader/Loader";
import ProfileContainer from "./profile/ProfileContainer";
import HeaderContainer from "./header/HeaderContainer";
import Login from "./login/Login";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import {withRouter} from "./hoc/withRouter"

export {
    Dialogs,
    DialogUser,
    DialogMessage,
    Footer,
    Header,
    Music,
    Navbar,
    News,
    NotFound,
    Post,
    MyPosts,
    ProfileInfo,
    Profile,
    Settings,
    TextAreaForm,
    MyPostsContainer,
    DialogsContainer,
    UsersContainer,
    Users,
    User,
    Loader,
    ProfileContainer,
    HeaderContainer,
    Login,
    withAuthRedirect,
    withRouter,
}