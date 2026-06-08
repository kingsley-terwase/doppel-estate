import React, { useState } from "react";
import {
    Box,
    Typography,
    Avatar,
    Stack,
    Card,
    CardContent,
    Tooltip,
    IconButton,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Divider,
} from "@mui/material";

import { alpha, useTheme } from "@mui/material/styles";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import BadgeRoundedIcon from "@mui/icons-material/BadgeRounded";
import ReusableTable from "../../../Component/Tabulation";

import { FONT_FAMILY } from "../../../Config/font";

const initialUser = {
    name: "Adaeze Okonkwo",
    avatar: "",
    email: "adaeze.okonkwo@primeestates.ng",
    phone: "+234 803 456 7890",
    location: "Maitama, Abuja, Nigeria",
    title: "MD",
    agency: "Doppel Homes",
    joinDate: "May 2024",
    licenseNo: "ABJ-20394",
};

const Profile = () => {
    const theme = useTheme();
    const isLight = theme.palette.mode === "light";

    const [userDetail, setUserDetail] = useState(initialUser);
    const [openEdit, setOpenEdit] = useState(false);
    const [formData, setFormData] = useState(initialUser);
    const [openMessage, setOpenMessage] = useState(false);
    const [messageData, setMessageData] = useState({ subject: "", message: "" });

    const estateTableColumns = [
        { field: "property", headerName: "Property" },
        { field: "type", headerName: "Type" },
        { field: "location", headerName: "Location" },
        { field: "price", headerName: "Price" },
        {
            field: "status",
            headerName: "Status",
            renderCell: (row) => {
                const statusMap = {
                    Available: { color: "#15803d", bg: "rgba(21,128,61,0.12)" },
                    Sold: { color: "#dc2626", bg: "rgba(220,38,38,0.12)" },
                    Pending: { color: "#d97706", bg: "rgba(217,119,6,0.12)" },
                };
                const s = statusMap[row.status] || statusMap.Pending;
                return (
                    <Box
                        sx={{
                            px: 1.5,
                            py: 0.5,
                            borderRadius: "20px",
                            width: "fit-content",
                            fontSize: 12,
                            fontWeight: 700,
                            color: s.color,
                            backgroundColor: s.bg,
                            fontFamily: FONT_FAMILY.primary,
                        }}
                    >
                        {row.status}
                    </Box>
                );
            },
        },
    ];

    const estateTableRows = [
        {
            id: 1,
            property: "Sunset Villa",
            type: "Duplex",
            location: "Maitama, Abuja",
            price: "₦250,000,000",
            status: "Available",
        },
        {
            id: 2,
            property: "Royal Palm Estate",
            type: "Terrace",
            location: "Gwarinpa, Abuja",
            price: "₦120,000,000",
            status: "Pending",
        },
    ];

    const handleSave = () => {
        setUserDetail(formData);
        setOpenEdit(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <Box sx={{ maxWidth: 1100, mx: "auto", py: 4 }}>
            <Card
                sx={{
                    borderRadius: 4,
                    overflow: "hidden",
                    backgroundColor: theme.palette.background.paper,
                    // ✅ uses your COLORS.card.borderLight / borderDark
                    border: `1px solid ${
                        isLight
                            ? theme.palette.custom.card.borderLight
                            : theme.palette.custom.card.borderDark
                    }`,
                    boxShadow: isLight
                        ? "0 2px 16px rgba(0,0,0,0.06)"
                        : "0 2px 16px rgba(0,0,0,0.3)",
                }}
            >
                <Box
                    sx={{
                        height: 160,
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.dark})`,
                        position: "relative",
                    }}
                >
                    <Tooltip title="Edit Profile">
                        <IconButton
                            onClick={() => setOpenEdit(true)}
                            sx={{
                                position: "absolute",
                                top: 16,
                                right: 16,
                                backgroundColor: alpha("#fff", 0.15),
                                color: "#fff",
                                "&:hover": { backgroundColor: alpha("#fff", 0.28) },
                            }}
                        >
                            <EditRoundedIcon />
                        </IconButton>
                    </Tooltip>
                </Box>

                <CardContent sx={{ pt: 0, pb: 4, px: { xs: 2, md: 4 } }}>

                    {/* AVATAR + NAME ROW */}
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        spacing={3}
                        alignItems={{ xs: "center", md: "flex-end" }}
                        sx={{ mt: -6 }}
                    >
                        <Avatar
                            sx={{
                                width: 110,
                                height: 110,
                                fontSize: 32,
                                fontWeight: 800,
                                fontFamily: FONT_FAMILY.secondary,
                                // ✅ uses your COLORS.brand.primary
                                bgcolor: theme.palette.primary.main,
                                border: `4px solid ${theme.palette.background.paper}`,
                            }}
                        >
                            {userDetail.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                        </Avatar>

                        <Box sx={{ flex: 1 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                                <Typography
                                    variant="h5"
                                    fontWeight={800}
                                    fontFamily={FONT_FAMILY.secondary}
                                    color={theme.palette.text.primary}
                                >
                                    {userDetail.name}
                                </Typography>
                                <VerifiedRoundedIcon
                                    sx={{ color: theme.palette.primary.main }}
                                />
                            </Stack>

                            <Typography
                                variant="body2"
                                fontFamily={FONT_FAMILY.primary}
                                color={theme.palette.text.secondary}
                            >
                                {userDetail.title} · {userDetail.agency}
                            </Typography>
                        </Box>

                        <Button
                            variant="contained"
                            onClick={() => setOpenMessage(true)}
                            sx={{
                                fontFamily: FONT_FAMILY.primary,
                                backgroundColor: theme.palette.primary.main,
                                "&:hover": {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                                borderRadius: 2,
                                px: 3,
                            }}
                        >
                            Message
                        </Button>
                    </Stack>

                    <Divider sx={{ my: 3, borderColor: theme.palette.divider }} />

                    <Stack direction="row" flexWrap="wrap" gap={2.5}>
                        {[
                            { icon: <EmailRoundedIcon fontSize="small" />, text: userDetail.email },
                            { icon: <PhoneRoundedIcon fontSize="small" />, text: userDetail.phone },
                            { icon: <LocationOnRoundedIcon fontSize="small" />, text: userDetail.location },
                            { icon: <CalendarMonthRoundedIcon fontSize="small" />, text: `Joined ${userDetail.joinDate}` },
                            { icon: <BadgeRoundedIcon fontSize="small" />, text: userDetail.licenseNo },
                        ].map((item, i) => (
                            <Stack key={i} direction="row" spacing={1} alignItems="center">
                                <Box sx={{ color: theme.palette.primary.main, display: "flex" }}>
                                    {item.icon}
                                </Box>
                                <Typography
                                    variant="body2"
                                    fontFamily={FONT_FAMILY.primary}
                                    color={theme.palette.text.secondary}
                                >
                                    {item.text}
                                </Typography>
                            </Stack>
                        ))}
                    </Stack>
                </CardContent>
            </Card>

            {/* ── ESTATE TABLE ──────────────────────────────── */}
            <Box mt={4}>
                <ReusableTable
                    title="Estate Properties"
                    columns={estateTableColumns}
                    rows={estateTableRows}
                />
            </Box>

            {/* ── EDIT DIALOG ───────────────────────────────── */}
            <Dialog open={openEdit} onClose={() => setOpenEdit(false)} fullWidth maxWidth="sm">
                <DialogTitle
                    sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                    }}
                >
                    Edit Profile
                </DialogTitle>

                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        {[
                            { name: "name", label: "Full Name" },
                            { name: "email", label: "Email" },
                            { name: "phone", label: "Phone" },
                            { name: "location", label: "Location" },
                        ].map(({ name, label }) => (
                            <TextField
                                key={name}
                                label={label}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                fullWidth
                                size="small"
                                InputProps={{
                                    style: { fontFamily: FONT_FAMILY.primary },
                                }}
                                InputLabelProps={{
                                    style: { fontFamily: FONT_FAMILY.primary },
                                }}
                            />
                        ))}
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button
                        onClick={() => setOpenEdit(false)}
                        sx={{ fontFamily: FONT_FAMILY.primary }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSave}
                        sx={{
                            fontFamily: FONT_FAMILY.primary,
                            backgroundColor: theme.palette.primary.main,
                            "&:hover": { backgroundColor: theme.palette.primary.dark },
                        }}
                    >
                        Save Changes
                    </Button>
                </DialogActions>
            </Dialog>

            {/* ── MESSAGE DIALOG ────────────────────────────── */}
            <Dialog open={openMessage} onClose={() => setOpenMessage(false)} fullWidth maxWidth="sm">
                <DialogTitle
                    sx={{
                        fontFamily: FONT_FAMILY.secondary,
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                    }}
                >
                    Send Message
                </DialogTitle>

                <DialogContent>
                    <Stack spacing={2} mt={1}>
                        <TextField
                            label="Subject"
                            name="subject"
                            value={messageData.subject}
                            onChange={(e) =>
                                setMessageData((prev) => ({ ...prev, subject: e.target.value }))
                            }
                            fullWidth
                            size="small"
                            InputProps={{ style: { fontFamily: FONT_FAMILY.primary } }}
                            InputLabelProps={{ style: { fontFamily: FONT_FAMILY.primary } }}
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={messageData.message}
                            onChange={(e) =>
                                setMessageData((prev) => ({ ...prev, message: e.target.value }))
                            }
                            fullWidth
                            multiline
                            rows={4}
                            InputProps={{ style: { fontFamily: FONT_FAMILY.primary } }}
                            InputLabelProps={{ style: { fontFamily: FONT_FAMILY.primary } }}
                        />
                    </Stack>
                </DialogContent>

                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button
                        onClick={() => setOpenMessage(false)}
                        sx={{ fontFamily: FONT_FAMILY.primary }}
                    >
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => setOpenMessage(false)}
                        sx={{
                            fontFamily: FONT_FAMILY.primary,
                            backgroundColor: theme.palette.primary.main,
                            "&:hover": { backgroundColor: theme.palette.primary.dark },
                        }}
                    >
                        Send
                    </Button>
                </DialogActions>
            </Dialog>

        </Box>
    );
};

export default Profile;