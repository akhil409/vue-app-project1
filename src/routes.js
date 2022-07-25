
import FormValidationsVue from "./components/FormValidations.vue";
import VVFormValidateVue from "./components/VVFormValidate.vue";
import PostDetailsVue from "./components/PostDetails.vue";
import EditDetailsVue from "./components/EditDetails.vue";
import DeleteDialogVue from "./components/DeleteDialog.vue";
import LoginFormVue from "./components/LoginForm.vue";
import MainComponent from "./components/MainComponent.vue";
import NavbarComponentVue from "./components/NavbarComponent.vue";
import ForgotPassword from "./components/ForgotPassword.vue";

// import VForm from "./components/VForm.vue";

export default[
    {path:'/', component:VVFormValidateVue},
    {path:'/add', component:FormValidationsVue },
    {path:'/post-details', component:PostDetailsVue },
    {path:'/edit-details/:id', component:EditDetailsVue },
    {path:'/delete-details/:id', component:DeleteDialogVue },
    {path:'/login-form', component:LoginFormVue },
    {path:'/main-component', component:MainComponent },
    {path:'/navbar-component', component:NavbarComponentVue },
    {path:'/forgot-password', component:ForgotPassword },
    // {path:'/form', component:VForm }
]