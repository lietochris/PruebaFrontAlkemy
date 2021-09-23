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
import NavbarLink from "./NavbarLink";

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


                {/*Mobile button*/}
                <IconButton
                    display={["flex", "none"]}
                    icon={<HamburgerIcon/>}
                    aria-label={"menu"}
                    ref={btnRef}
                    onClick={onOpen}
                />

                {/*Desktop navbar links*/}
                <HStack display={["none", "flex"]} spacing={1}>
                    <NavbarLink title={"Etapas de vida"} iconSrc={"/icons/icon_calendar.png"}/>
                    <NavbarLink title={"Dónde Vacunar"} iconSrc={"/icons/icon_location.png"}/>
                    <NavbarLink title={"Conoce de Enfermedades"} iconSrc={"/icons/icon_molecule.png"}/>
                    <NavbarLink title={"Articulos"} iconSrc={"/icons/icon_article.png"}/>
                </HStack>
            </Flex>


            {/*Mobile sidebar*/}
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader mb={12}/>

                    <DrawerBody>
                        <VStack justify={"start"} align={"start"} spacing={3}>
                            <NavbarLink title={"Etapas de vida"} iconSrc={"/icons/icon_calendar.png"}/>
                            <NavbarLink title={"Dónde Vacunar"} iconSrc={"/icons/icon_location.png"}/>
                            <NavbarLink title={"Conoce de Enfermedades"} iconSrc={"/icons/icon_molecule.png"}/>
                            <NavbarLink title={"Articulos"} iconSrc={"/icons/icon_article.png"}/>
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