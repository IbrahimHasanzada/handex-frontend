export interface ChildrenProps {
    children: React.ReactNode;
};

export interface ButtonProps extends ChildrenProps {
    link: string | '#',
    flag?: Boolean | false,
    theme: boolean
}