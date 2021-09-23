import {Box, Flex} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout(props) {
    return (
        <Flex bg="white" direction="column">
            <Navbar/>
            <Box>
                {props.children}
            </Box>
            <Footer/>
        </Flex>
    )
}