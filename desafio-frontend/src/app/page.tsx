"use client";
import { useEffect, useState } from "react";
import { User } from "@/Types/Users";
import AccordionUsage from "./components/Accordion";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import HeaderList from "./components/headers/HeaderList";
import ReactLoading from "react-loading";
import { getUsers } from "@/services/users";

export default function Home() {
    const [users, setUsers] = useState<User[]>([]);
    const [qtdPerPage, setQtdPerPage] = useState<number>(10);
    const [loading, setLoading] = useState<boolean>(true);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchUsers = async () => {
            setLoading(true);
            try {
                const users = await getUsers(qtdPerPage);
                setUsers(users);
            } catch (error) {
                console.error("Failed to fetch users", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [qtdPerPage]);

    const filteredUsers = users.filter(
        (user) =>
            user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                }}
            >
                <ReactLoading
                    type="spin"
                    color="#742fc2"
                    height={100}
                    width={100}
                />
            </div>
        );
    }

    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <HeaderList>Lista de usuários:</HeaderList>
            </Grid>

            <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <div
                    style={{
                        margin: "40px",
                        padding: "40px",
                        borderRadius: "30px",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                        width: "80%",
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{
                            marginBottom: "20px",
                            backgroundColor: "#742fc2",
                            borderRadius: "5px",
                            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
                            color: "#fff",
                            padding: "10px",
                        }}
                    >
                        Quantidade: {qtdPerPage}
                    </Grid>
                    <Grid
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ marginBottom: "20px" }}
                    >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                                Selecione a quantidade de usuários
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={qtdPerPage}
                                label="Quantidade"
                                onChange={(e) =>
                                    setQtdPerPage(
                                        parseInt(e.target.value as string)
                                    )
                                }
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={50}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid
                        xs={12}
                        sm={12}
                        md={12}
                        lg={12}
                        style={{ marginBottom: "20px" }}
                    >
                        <TextField
                            fullWidth
                            label="Pesquisar pelo nome"
                            variant="outlined"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </Grid>
                    <AccordionUsage users={filteredUsers} />
                </div>
            </Grid>
        </Grid>
    );
}
