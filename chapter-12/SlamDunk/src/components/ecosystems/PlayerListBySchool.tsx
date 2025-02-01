import type { FC } from "react";
import React from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { SpinnerIcon } from "@chakra-ui/icons";
import { Box, IconButton, Heading } from "@chakra-ui/react";
import { playerData, schoolData } from "../../data";
import { SCHOOL_CODE } from "../../domains/types";
import { Helmet } from "react-helmet-async";
import PlayerList from "../organisms/PlayerList";

const PlayerListBySchool: FC<{ my?: number | string }> = ({ my = 0 }) => {
    const { schoolID = "" } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const isLoading = Boolean(searchParams.get("isLoading"));

    const handleLoading = (event: SyntheticEvent) => {
        event.stopPropagation();
        const loading = !isLoading ? "true" : "";
        setSearchParams(`isLoading=${loading}`);
    };

    // as typeof SCHOOL_CODE[number]でも同じだが、苦肉の策で as never を使用
    if (!Object.values(SCHOOL_CODE).includes(schoolID as never)) {
        const players = playerData.filter(
            (player) => player.schoolID === schoolID
        );
        const school = schoolData.find((school) => school.id === schoolID);

        return (
            <Box my={my} w="2xl">
                <Helmet>
                    <title>登場人物|{school?.name}| SLAM DUNK</title>
                </Helmet>
                <Heading as="h2" size="lg">
                    {school?.name}
                </Heading>
                <Box textAlign="right">
                    <IconButton
                        aria-label="ローディング切り替え"
                        icon={<SpinnerIcon />}
                        onClick={handleLoading}
                    />
                </Box>
                <PlayerList players={players} color={school?.color} isLoading={isLoading} />
            </Box>
        );
    }

    return <Navigate to="/" replace />;
};

export default PlayerListBySchool;
