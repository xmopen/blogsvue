import {createStore} from "vuex";

export const Store = createStore({
    state() {
        // data
        return {
            // auth user auth info
            auth: {
                account:"",
                name:"",
                xmToken:"",
                icon:"",
            },
            redirect:{
                toLogin:"http://127.0.0.1:8080/#/login.html?redirect=",
            },
            controlStatus:{
                authDialogStatus:0,
            },
            // 全局静态变量
            staticVariable:{
                mutationsName:{
                    updateAuthInfo:"updateAuthInfo",
                    updateLoginStatus:"updateLoginStatus",
                },
                login:{
                    closeLoginDialog:0,
                    openLoginDialog:1, // 登录Dialog
                    openRegisterDialog:2,
                    closeRegisterDialog:3,
                },
            },
        }
    }, mutations: {
        updateAuthInfo(state, auth) {
            state.auth = auth
        },
        updateLoginStatus(state,status){
            state.controlStatus.authDialogStatus = status
        },
    }
})