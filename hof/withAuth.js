import apiClient from "../libs/apiClient";

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
           await apiClient.get('/authMe')

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