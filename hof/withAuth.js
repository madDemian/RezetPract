import apiClient from "../libs/apiClient";
import API from '../axios/api/index'

export const withAuth = (getServerSidePropsFunc) => {
    return async (ctx) => {
        const {token} = ctx.req.cookies

        if (!token) {
            return {
                redirect: {
                    destination: '/auth/sign-in'
                }
            }
        }

        apiClient.setToken(token)

        try {
           await API.auth.me()
            return getServerSidePropsFunc ?
                await getServerSidePropsFunc(ctx)
                : { props: {}}

        } catch (e) {
            return {
                redirect: {
                    destination: '/auth/sign-in'
                }
            }
        }





    }
}