import {Button, Flex, HStack, IconButton, Img, Link, MenuIcon, Spacer, useDisclosure, VStack} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {useRef} from "react";

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"

export default function Navbar() {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef()

    return (
        <>
            <Flex
                bg="white"
                px={["1rem", "10rem"]}
                py={[8]}
                justify="center"
                align="center"
            >
                <Img h={["full", "100%"]} w={["10rem", "10vw"]} src="/logo_vacunas.png"/>
                <Spacer/>
                <IconButton
                    display={["flex", "none"]}
                    icon={<HamburgerIcon/>}
                    aria-label={"menu"}
                    ref={btnRef}
                    onClick={onOpen}
                />
                <HStack display={["none", "flex"]} spacing={1}>
                    <Button variant="ghost" color="#3f829d"> <Img w={["1.5rem"]} src="/icons/icon_calendar.png"
                                                                  mr={1}/> Etapas de vida</Button>
                    <Button variant="ghost" color="#3f829d"><Img w={["1.5rem"]} src="/icons/icon_location.png"
                                                                 mr={1}/> Dónde Vacunar</Button>
                    <Button variant="ghost" color="#3f829d"><Img w={["1.5rem"]} src="/icons/icon_molecule.png"
                                                                 mr={1}/> Conoce de Enfermedades</Button>
                    <Button variant="ghost" color="#3f829d"><Img w={["1.5rem"]} src="/icons/icon_article.png"
                                                                 mr={1}/> Articulos</Button>
                </HStack>
            </Flex>

            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader/>

                    <DrawerBody>
                        <VStack justify={"start"} align={"start"} spacing={3}>
                            <Button variant="ghost" color="#3f829d">
                                <Img w={["1.5rem"]} src="/icons/icon_calendar.png" mr={1}/> Etapas de vida</Button>
                            <Button variant="ghost" color="#3f829d">
                                <Img w={["1.5rem"]} src="/icons/icon_location.png" mr={1}/> Dónde Vacunar</Button>
                            <Button variant="ghost" color="#3f829d">
                                <Img w={["1.5rem"]} src="/icons/icon_molecule.png" mr={1}/> Conoce de
                                Enfermedades</Button>
                            <Button variant="ghost" color="#3f829d">
                                <Img w={["1.5rem"]} src="/icons/icon_article.png" mr={1}/> Articulos</Button>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}