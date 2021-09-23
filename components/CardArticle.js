import {Box, Button, Flex, Img, Text} from "@chakra-ui/react";

export default function CardArticle(props) {
    return (
        <Flex justify={"space-between"} boxShadow="dark-lg" direction="column" h="full" borderRadius={12} px={8} py={6} bgSize={"cover"} bgImage={props.bgImage}>
            <Box>
                <Img w={12} src={props.iconSrc}/>
                <Text my={3} color={props.subHeadColor} fontWeight={600} fontSize={["14pt","16pt"]}>{props.subHead}</Text>
                <Text mb={5} color="white" fontWeight={700}  fontSize={["16pt","19pt"]}>{props.head}</Text>
            </Box>
            <Box textAlign={["center", "left"]}>
                <Button px={12} colorScheme="orange" borderRadius="full">Conoce más</Button>
            </Box>
        </Flex>
    )
}