type Props = { name: string; times?: number };

const Greet: React.FC<Props> = ({ name, times = 1 }) => {
    // const { name, times = 1 } = props;
    return (
        <>
            {[...Array(times).keys()].map((i) => (
                <p key={i}>Hello, {name}!</p>
            ))}
        </>
    );
};

export default Greet;
