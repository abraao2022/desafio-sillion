import * as React from "react";
import { HeaderContainer } from "./styles";

export type HeaderListProps = {
    children: React.ReactNode;
};
export default function HeaderList({ children }: HeaderListProps) {
    return (
        <HeaderContainer
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
        >
            {children}
        </HeaderContainer>
    );
}
