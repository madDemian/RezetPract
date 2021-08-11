import apiClient from "../libs/apiClient";

export const withoutAuth = (getServerSidePropsFunc) => {

    return async (ctx, ...args) => {

        const {token} = ctx.req.cookies
        if (token) {
            apiClient.setToken(token)


            try {
                return {
                    redirect: {
                        destination: '/'
                    }
                }
            } catch (e) {
                return getServerSidePropsFunc ? await getServerSidePropsFunc(ctx, ...args) : {props: {}}
            }
        }
        return getServerSidePropsFunc ? await getServerSidePropsFunc(ctx, ...args) : {props: {}}
    }
}