type Props = { name: string; times?: number };

const Greet: React.FC<Props> = ({ name, times = 1 }) => {
    // const { name, times = 1 } = props;
    return (
        <>
            {[...Array(times)].map(() => (
                <p>Hello, {name}!</p>
            ))}
        </>
    );
};

export default Greet;
