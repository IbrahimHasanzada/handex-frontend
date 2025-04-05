
export const getBackgroundConfig = (pathname: string) => {
    const darkBackgroundRoutes = ['corporate'];

    return {
        isDarkBackground: darkBackgroundRoutes.includes(pathname)

    }
};