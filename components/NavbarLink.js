import {Button, Img} from "@chakra-ui/react";

export default function NavbarLink(props) {
    return (
        <Button
            variant="ghost"
            color="#3f829d"
            fontSize={"10pt"}
        > <Img
            w={["1.2rem"]}
            src={props.iconSrc}
            mr={1}
        />
            {props.title}
        </Button>
    )
}