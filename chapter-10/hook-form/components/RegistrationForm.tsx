import React, { type FC, SyntheticEvent } from "react";
import {
    Box,
    Button,
    ButtonGroup,
    Checkbox,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registrationFormSchema } from "./schemas/registationForm";
import { genderCode } from "./schemas/constants";

import type { SubmitHandler } from "react-hook-form";
import type { RegFormSchema } from "./schemas/registationForm";

const RegistrationForm: FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<RegFormSchema>({
        defaultValues: {
            username: '',
            isAgreed: false,
        },
        resolver: yupResolver(registrationFormSchema),
    });

    const onSubmit: SubmitHandler<RegFormSchema> = (data) => {
        console.log(data);
    };
    const onReset = (e: SyntheticEvent) => {
        e.stopPropagation();
        reset();
    };

    return (
        <Box p={5} w="md" borderWidth="1px" borderRadius="lg" boxShadow="base" mx="auto">
            <form onSubmit={handleSubmit(onSubmit)} action="/hoge">
                <FormControl isInvalid={!!errors.username !== undefined} isRequired>
                    <FormLabel htmlFor="username" mt={2}>
                        ユーザー名
                    </FormLabel>
                    <Input size="md" {...register('username')} />
                    <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!errors.zipcode !== undefined}>
                    <FormLabel htmlFor="zipcode" mt={4}>
                        郵便番号
                    </FormLabel>
                    <Input size="md" maxLength={7} {...register('zipcode')} />
                    <FormErrorMessage>{errors.zipcode?.message}</FormErrorMessage>
                </FormControl>
                <Select my={6} {...register('gender')} placeholder="性別を選択">
                    {Object.entries(genderCode).map(([code, name]) => (
                        <option key={code} value={code}>
                            {name}
                        </option>
                    ))}
                </Select>
                <FormControl isInvalid={!!errors.isAgreed !== undefined}>
                    <Checkbox {...register('isAgreed')}>規約に同意する</Checkbox>
                    <FormErrorMessage justifyContent="center">
                        {errors.isAgreed?.message}
                    </FormErrorMessage>
                </FormControl>
                <ButtonGroup my={3} w="xs">
                    <Button w="30%" colorScheme="orange" variant="solid" onClick={onReset}> 
                        リセット
                    </Button>
                    <Button w="70%" colorScheme="blue" variant="solid" type="submit">
                        送信
                    </Button>
                </ButtonGroup>
            </form>
        </Box>
    )
}

export default RegistrationForm;