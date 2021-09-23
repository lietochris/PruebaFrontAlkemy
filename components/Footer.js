import {Box, Flex, Img, Link, Text} from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex direction={["column-reverse", "row"]} py={"5rem"} px={["1rem","10rem"]} align="center" justify={"space-between"} bg="#ebebeb">
            <Box mt={["2rem", 0]} textAlign={["center", "left"]} fontSize="8pt" fontWeight={600}>
                <Text>Derechos reservados</Text>
                <Text>La reproducción completa o parcial de este material está prohibida</Text>
                <Text>2020 Grupo de Compañias GSK. NP-XXXX-XXX Agosto 2020.</Text>
            </Box>
            <Flex direction="row">
                <Link mx={1}>
                    <Img w={9} src={"/icons/icon_twitter.png"}/>
                </Link>
                <Link mx={1}>
                    <Img w={9} src={"/icons/icon_facebook.png"}/>
                </Link>
                <Link mx={1}>
                    <Img w={9} src={"/icons/icon_youtube.png"}/>
                </Link>
            </Flex>
        </Flex>
    )
}