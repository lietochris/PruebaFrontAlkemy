import {Text} from "@chakra-ui/react";

export default function UnderlinedText(props) {
    return (
        <Text fontWeight={600} p={1} bg={"#e0ebef"} as="span">{props.children}</Text>
    )
}