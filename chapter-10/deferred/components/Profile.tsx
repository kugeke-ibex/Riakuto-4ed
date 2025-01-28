import type { FC, SyntheticEvent } from "react";
import React from "react";
import { useMemo, useState, useDeferredValue } from "react";
import {
    Box,
    Checkbox,
    Container,
    FormLabel,
    Input,
    Text,
} from "@chakra-ui/react";
import Users from "./Users";

const ProfileWrite: FC<{ count?: number }> = ({ count = 1 }) => {
    const [username, setUsername] = useState("");
    const [enabledDeferred, setEnabledDeferred] = useState(false);
    // より緊急性の高いレンダリングがあるときに遅延されるようになる
    // 注意点としてこの遅延する値を適用するコンポーネントをメモ化して、依存配列にその値を入れる必要がある
    // 結果その値が変わった時のみ、再レンダリングされる
    const deferredUsername = useDeferredValue(username);

    const changeUsername = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        setUsername(target.value);
    };

    const changeEnabledDeferred = (event: SyntheticEvent) => {
        const target = event.target as HTMLInputElement;
        setEnabledDeferred(target?.checked);
    };

    const deferredUsers = useMemo(
        () => <Users username={deferredUsername} count={count} />,
        [deferredUsername, count]
    );

    return (
        <Container>
            <Box p={3} w="sm">
                <FormLabel htmlFor="username" mt={2}>
                    ユーザー名を入力...
                </FormLabel>
                <Input
                    size="md"
                    maxLength={18}
                    value={username}
                    onChange={changeUsername}
                />
                <Checkbox
                    mt={4}
                    isChecked={enabledDeferred}
                    onChange={changeEnabledDeferred}
                >
                    useDeferredValueを有効にする
                </Checkbox>
            </Box>
            {enabledDeferred ? (
                deferredUsers
            ) : (
                <Users username={deferredUsername} count={count} />
            )}
        </Container>
    );
};

export default ProfileWrite;
