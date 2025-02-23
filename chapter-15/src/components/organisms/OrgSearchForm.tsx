import { useState } from "react";
import type {
    FC,
    ChangeEvent,
    SyntheticEvent,
    TransitionStartFunction,
} from "react";
import { Stack, Input, Button } from "@chakra-ui/react";
import React from "react";
// import OrgSuggester from "../ecosystems/OrgSuggester";
import OrgSuggester from "../ecosystems/QuickOrgSuggester";

type Props = {
    suggesList: string[];
    setOrgCode: (code: string) => void;
    startTransition: TransitionStartFunction;
    isPending: boolean;
};

const OrgSearchForm: FC<Props> = ({
    setOrgCode = () => undefined,
    startTransition = () => undefined,
    suggesList = [],
    isPending = false,
}) => {
    const [input, setInput] = useState("");
    const onSelect = (code: string) => {
        setInput(code);
        startTransition(() => setOrgCode(code));
    };
    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        startTransition(() => setOrgCode(input.toLowerCase().trim()));
    };

    return (
        <Stack direction="column" spacing="1rem" mb="0.5rem">
            <Stack
                direction="row"
                as="form"
                spacing="0.5rem"
                onSubmit={handleSubmit}
            >
                <Input
                    value={input}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setInput(e.target.value)
                    }
                    placeholder="会社コードを入力..."
                    flexGrow={1}
                />
                <Button
                    w="5rem"
                    variant="solid"
                    colorScheme="blue"
                    type="submit"
                    isLoading={isPending}
                >
                    検索
                </Button>
            </Stack>
            <OrgSuggester
                suggesList={suggesList}
                correct={input}
                onSelect={onSelect}
                enablePrefetch={true}
            />
        </Stack>
    );
};

export default OrgSearchForm;
