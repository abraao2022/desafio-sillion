import { Grid } from "@mui/material";
import styled from "styled-components";

export const HeaderContainer = styled(Grid)`
    background-color: #742fc2;
    height: 30vh;
    text-align: center;
    color: #fff;
    font-size: 3.5rem;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
    border-radius: 0px 0px 80px 80px;

    transition: border-radius 0.3s ease;

    &:hover {
        border-radius: 0px 0px 40px 40px;
    }
`;
