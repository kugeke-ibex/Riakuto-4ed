import type { PropsWithChildren } from "react";
import "./Summary.css";

// type PropsWithChildren<P = unknown> = P & { children?: ReactNode | undefined };
// ReactNodeとはstring、number、boolean、ReactElement、ReactFragment なんかを包括する型。
type Props = { title: string; folded?: boolean } & PropsWithChildren;

const Summary: React.FC<Props> = ({ title, folded = false, children }) => {
    console.log(children);

    return (
        <details className="story" open={!folded}>
            <summary>{title}</summary>
            {children}
        </details>
    );
};

export default Summary;
