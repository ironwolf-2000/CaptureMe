interface IContainerProps {
    children: React.ReactNode;
}

export const Container = ({ children }: IContainerProps) => {
    return <div>{children}</div>;
};
