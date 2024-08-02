import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Avatar, Grid, Typography, Box } from "@mui/material";
import { User } from "@/Types/Users";

export interface AccordionUsageProps {
    users: User[];
}

export default function AccordionUsage({ users }: AccordionUsageProps) {
    return (
        <Box>
            {users.map((user) => (
                <Accordion key={user.id} sx={{ marginBottom: 2 }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar src={user.avatar} />
                            <Typography variant="h6" sx={{ marginLeft: 2 }}>
                                {user.first_name} {user.last_name}
                            </Typography>
                        </Box>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Nome de Usuário:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.username}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Email:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.email}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Gênero:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.gender}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Telefone:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.phone_number}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Número de Seguro Social:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.social_insurance_number}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    sx={{ fontWeight: 600 }}
                                >
                                    Data de Nascimento:
                                </Typography>
                                <Typography variant="subtitle1">
                                    {user.date_of_birth}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography variant="h6">
                                        Emprego
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Cargo:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.employment.title}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Habilidade Principal:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.employment.key_skill}
                                    </Typography>
                                </Box>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography variant="h6">
                                        Endereço
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Cidade:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.address.city}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Nome da Rua:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.address.street_name}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Endereço:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.address.street_address}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        CEP:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.address.zip_code}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Estado:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.address.state}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        País:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.address.country}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Coordenadas:
                                    </Typography>
                                    <Typography variant="subtitle1">{`Lat: ${user.address.coordinates?.lat}, Lng: ${user.address.coordinates?.lng}`}</Typography>
                                </Box>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography variant="h6">
                                        Cartão de Crédito
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Número do Cartão:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.credit_card.cc_number}
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h6">
                                        Assinatura
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Plano:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.subscription.plan}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Status:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.subscription.status}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Forma de Pagamento:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.subscription.payment_method}
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{ fontWeight: 600 }}
                                    >
                                        Termo:
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        {user.subscription.term}
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                    <AccordionActions>
                        <Button size="small">Editar</Button>
                        <Button size="small">Excluir</Button>
                    </AccordionActions>
                </Accordion>
            ))}
        </Box>
    );
}
