import {Box, Button, Flex, Heading, Img, Text, VStack} from "@chakra-ui/react";

export default function CardCallToAction(props) {
    return (
        <Flex direction="column" justify="space-between"  textAlign="center" borderRadius={8} px={["3rem"]} py={7} bgGradient={props.bgGradient}
             boxShadow="dark-lg">
            <Box>
                <Flex justify="center" align="center">
                    <Img w={["1.5rem"]} src={props.iconSrc}/>
                    <Text color="white" ml={2} flex="inline-flex" fontWeight="700" fontSize="15pt">{props.title}</Text>
                </Flex>
                <Text my={3} fontSize="14pt" color="white" size="md">{props.content}</Text>
            </Box>
            <Box>
                <Button px={12} colorScheme="orange" borderRadius="full">Conoce más</Button>
            </Box>
        </Flex>
    )
}