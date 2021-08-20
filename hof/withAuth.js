import apiClient from "../libs/apiClient";
import * as request from "../axios/requests"

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
           await request.auth.authMe()
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