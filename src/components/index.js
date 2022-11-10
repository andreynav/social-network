import { Dialogs, DialogUser, DialogMessage } from "./dialogs/index"
import Footer from "./footer/Footer"
import Header from "./header/Header"
import Music from "./music/Music"
import Navbar from "./navbar/Navbar"
import News from "./news/News"
import NotFound from "./notFound/NotFound"
import { Post, MyPosts, ProfileInfo, Profile, ProfileInfoStatus, FormProfileInfo, ProfileInfoItem } from "./profile/index"
import Settings from "./settings/Settings"
import FormPostMessage from "./formPostMessage/FormPostMessage";
import MyPostsContainer from "./profile/myPosts/MyPostsContainer";
import {Users} from "./users/Users"
import {User} from "./users/user/User";
import {Loader} from "./common/loader/Loader";
import HeaderContainer from "./header/HeaderContainer";
import Login from "./login/Login";
import {withAuthRedirect} from "./hoc/withAuthRedirect";
import {withRouter} from "./hoc/withRouter"
import InputField from "./inputField/InputField";
import FormLogin from "./login/formLogin/FormLogin";
import TextAreaField from "./textAreaField/TextAreaField";
import App from "./app/App";
import {Paginator} from "./paginator/Paginator";
import {Label} from "./common/Label/Label";
import {Button} from "./common/button/Button";
import {PhotoSection} from "./photoSection/PhotoSection";

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
    Users,
    User,
    Loader,
    HeaderContainer,
    Login,
    withAuthRedirect,
    withRouter,
    ProfileInfoStatus,
    InputField,
    FormLogin,
    TextAreaField,
    App,
    Paginator,
    Label,
    Button,
    PhotoSection,
    FormProfileInfo,
    ProfileInfoItem,
}