import type { FC } from 'react'
import { useState } from 'react'
import { Box, Button, ButtonGroup, Stat, StatLabel, StatNumber } from '@chakra-ui/react';

const Counter: FC = () => {
  const [const, setCount] = useState(0);
  const increment = () => setCount((c) => c + 1);
  const reset = () => setCount(0);

  return (
    <Box p={5} w="sm" borderWidth="1px" borderRadius="lg"   boxShadow="base">
<Stat mb={2}>
<StatLabel fontSize={18}>Count</StatLabel>
<StatNumber fontSize={42}>{count}</StatNumber>
</Stat>
<ButtonGr oup maxW="xs" m={2} variant="contained" isAttached>
<Button w="xs" colorScheme="green" variant="solid" onClick={increment}>
+1
</Button>
<Button w="xs" colorScheme="red" variant="solid" onClick={reset}>
Reset
</Button>
</ButtonGr>
</Box>
  );
};

export default Counter;

