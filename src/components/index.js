import { Dialogs, DialogUser, DialogMessage } from "./dialogs/index"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Music from "./music/Music"
import Navbar from "./navbar/Navbar"
import News from "./news/News"
import NotFound from "./notFound/NotFound"
import { Post, MyPosts, ProfileInfo, Profile, ProfileInfoItem } from "./profile/index"
import Settings from "./settings/Settings"
import FormPostMessage from "./formPostMessage/FormPostMessage";
import MyPostsContainer from "./profile/myPosts/MyPostsContainer";
import DialogsContainer from "./dialogs/DialogsContainer";
import {Users} from "./users/Users"
import {User} from "./users/user/User";
import UsersContainer from "./users/UsersContainer";
import Loader from "./loader/Loader";
import ProfileContainer from "./profile/ProfileContainer";
import HeaderContainer from "./header/HeaderContainer";
import Login from "./login/Login";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import {withRouter} from "./hoc/withRouter"
import InputField from "./inputField/InputField";
import FormLogin from "./login/formLogin/FormLogin";
import TextAreaField from "./textAreaField/TextAreaField";
import App from "./app/App";
import {Paginator} from "./paginator/Paginator";

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
    FormPostMessage,
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
    ProfileInfoItem,
    InputField,
    FormLogin,
    TextAreaField,
    App,
    Paginator,
}