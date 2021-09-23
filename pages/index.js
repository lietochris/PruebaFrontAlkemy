import {Flex, Grid, GridItem, Heading, Img, SimpleGrid, Text} from "@chakra-ui/react";
import DefaultLayout from "../layouts/DefaultLayout";
import CarouselBanner from "../components/CarouselBanner";
import CardCallToAction from "../components/CardCallToAction";
import UnderlinedText from "../components/UnderlinedText";
import CardArticle from "../components/CardArticle";

import {Fade} from "react-reveal";
import RubberBand from 'react-reveal/RubberBand';

export default function Home() {

    return (
        <DefaultLayout>
            <CarouselBanner/>

            {/*Call to action Cards*/}
            <Flex my={12} mx={["1rem", "18rem"]} direction="column" justify="center" align="center">
                <Text
                    mb={12}
                    textAlign="center"
                    color="#5d21db"
                    fontWeight={600}
                    fontSize={["14pt", "20pt"]}
                >
                    Aqui encontraras informacion relevante para aclarar dudas sobre cuando y donde vacunarse
                </Text>
                <Fade>
                    <SimpleGrid columns={[1, 2]} spacing={[8]}>
                        <CardCallToAction
                            bgGradient="linear(to-b, #7435f8, #5318cc)"
                            title="Cuándo Vacunar"
                            content="Descubre las vacunas correspondientes a cada etapa de la vida."
                            iconSrc="/icons/icon_calendar-white.png"
                        />
                        <CardCallToAction
                            bgGradient="linear(to-b, #47bcff, #1486e6)"
                            title="Dónde Vacunar"
                            content="Ubica el centro de salud más cercano a ti y tu familia."
                            iconSrc="/icons/icon_location-white.png"
                        />
                    </SimpleGrid>
                </Fade>
            </Flex>

            {/*Vaccination strategy */}
            <Flex
                textAlign={["center", "left"]}
                position={"relative"}
                direction="column"
                justify="center"
                align="center"
                px={[5, 12]}
                py={["10rem", 12]}
                bg="#f3f4f6"
            >


                {/*Absolute Images*/}
                <Img
                    className={"levitate"}
                    left={["1rem", "7rem"]}
                    top={20}
                    position={["absolute"]}
                    src={"/images/molecule_gray-small.png"}
                />
                <Img
                    right={10}
                    top={[-5, -20]}
                    position={"absolute"}
                    src={"/images/baby_red.png"}
                />
                <Img
                    className={"levitate"}
                    right={10}
                    bottom={20}
                    position={"absolute"}
                    src={"/images/molecule_green.png"}
                />
                <Img
                    className={"levitate"}
                    left={[10]}
                    bottom={["-4rem", "-10rem"]}
                    position={"absolute"}
                    w={["12rem", "15rem"]}
                    src={"/images/molecule_gray.png"}/>

                {/*Text*/}
                <RubberBand>
                    <Heading color="#02adfd" fontWeight="600" size="xl">¿Sabes para qué sirve vacunarse?</Heading>
                </RubberBand>
                <SimpleGrid mx={["0rem", "6rem"]} px={["0rem", "5rem"]} py={12} columns={[1, 2]} spacing={[5]}>
                    <Text color="#42829e" fontSize="14pt">
                        La vacunación es la estrategia más útil y segura para <UnderlinedText>prevenir muertes por
                        enfermedades infecciosas en todo el mundo,</UnderlinedText> y aunque con frecuencia se
                        piensa que la etapa de vacunación sucede solo en la niñez, no es así, <UnderlinedText>existe
                        una vacuna para cada etapa de la vida.</UnderlinedText>
                    </Text>
                    <Text color="#42829e" fontSize="14pt">
                        Por esta razón, <UnderlinedText>queremos informar, a profesionales de la salud y a la población,
                        acerca de las vacunas, enfermedades,</UnderlinedText> centros de salud y calendario de
                        vacunas para tomar control de ellas, prevenir y protegernos entre todos.
                    </Text>
                </SimpleGrid>
            </Flex>


            {/*Articles Cards*/}
            <Flex
                position={"relative"}
                mb={"10rem"}
                px={[3, 12]}
                py={12}
                direction="column"
                justify="center"
                align="center">
                <Img
                    display={["none", "block"]}
                    bottom={"-10rem"}
                    left={"6rem"} position={"absolute"}
                    src={"/images/girl_purple.png"}
                />

                <Heading
                    my={12}
                    textAlign="center"
                    px={["1rem", "18rem"]}
                    color="#02adfd"
                    fontWeight="600"
                    size="lg"
                >
                    Te presentamos articulos sobre vacunación y sus
                    beneficios para la salud.
                </Heading>

                <Grid
                    mx={["1rem", "12rem"]}
                    gap={[0, 5]}
                    rowGap={[6, 0]}
                    templateColumns={["repeat(1, 1fr)", "repeat(5, 1fr)"]}
                >
                    <GridItem colSpan={2}>
                        <CardArticle
                            bgImage="/images/enfermedades_thumb.jpg"
                            iconSrc="/icons/icon_molecule-green.png"
                            subHead="Enfermedades"
                            subHeadColor="#e5f83e"
                            head="Conoce cada una de ellas, sus
                                    riesgos,
                                    sintomas y cómo prevenirlas."
                        />
                    </GridItem>
                    <GridItem colSpan={3}>

                        <CardArticle
                            bgImage="/images/articulos_thumb.jpg"
                            iconSrc="/icons/icon_article-orange.png"
                            subHead="Articulos"
                            subHeadColor="#ffcc32"
                            head="Descubre las noticias e información sobre la importancia de las vacunas."
                        />

                    </GridItem>
                </Grid>
            </Flex>

        </DefaultLayout>
    )
}
