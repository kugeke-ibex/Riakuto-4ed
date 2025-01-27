import { FC } from "react";
import React from "react";
import { RepeatClockIcon as ResetIcon} from "@chakra-ui/icons";
import { Box, Button, Stat, StatLabel,} from "@chakra-ui/react";
import { useTimer } from "../hooks/useTimer.pre";

type Props = { maxCount?: number }
const MAX_COUNT = 60;

const Timer: FC<Props> = ({ maxCount = MAX_COUNT }) => {
    const [timeLeft, isPrime, reset] = useTimer(maxCount);

    return (
      <Box p={5} w="sm" borderWidth="1px" borderRadius="lg" boxShadow="base">
        <Stat mb={2}>
          <StatLabel fontSize="18">Count</StatLabel>
          <StatNumber fontSize="42" color={isPrime ? "pink.300" : "black"}>
            {timeLeft}
          </StatNumber>
        </Stat>
        <Button onClick={reset} w="xs" colorScheme="red" variant="solid" leftIcon={<ResetIcon />}>
          Reset
        </Button>
      </Box>
    );
};

export default Timer;
