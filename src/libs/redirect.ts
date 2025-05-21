export const withRedirect = (getPropsFn?: Function) => {
    return async (context: any) => {
        console.log(context.url);
    };
};