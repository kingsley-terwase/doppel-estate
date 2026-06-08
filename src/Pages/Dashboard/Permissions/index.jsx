import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";

import {
    Box,
    Typography,
    Checkbox,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Chip,
    Stack,
    Divider,
    CircularProgress,
} from "@mui/material";

import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ReusableTable from "../../../Component/Tabulation";


const RESOURCES = [
    "Users",
    "Products",
    "Orders",
    "Reports",
    "Settings",
    "Dashboard",
];

const ACTIONS = ["create", "read", "update", "delete"];

const ROLES = ["Admin", "Editor", "Viewer", "Manager"];

const ACTION_COLORS = {
    create: "success",
    read: "primary",
    update: "warning",
    delete: "error",
};

/* -------------------------------------------------------------------------- */
/*                            DEFAULT PERMISSIONS                             */
/* -------------------------------------------------------------------------- */

const buildDefaultPermissions = () => {
    return RESOURCES.reduce((acc, resource) => {
        acc[resource] = ACTIONS.reduce((actions, action) => {
            actions[action] = false;
            return actions;
        }, {});
        return acc;
    }, {});
};


const Permission = () => {

    const theme = useTheme();
    const navigate = useNavigate();

    /* -------------------------------- STATES ------------------------------- */

    const [permissions, setPermissions] = useState(
        buildDefaultPermissions()
    );

    const [openDialog, setOpenDialog] = useState(false);

    const [selectedRole, setSelectedRole] = useState("");

    const [assignedRole, setAssignedRole] = useState(null);

    const [loading, setLoading] = useState(false);

    /* ----------------------------- PERMISSIONS ----------------------------- */

    const handleToggle = (resource, action) => {
        setPermissions((prev) => ({
            ...prev,
            [resource]: {
                ...prev[resource],
                [action]: !prev[resource][action],
            },
        }));
    };

    const handleToggleAll = (resource) => {
        const allChecked = ACTIONS.every(
            (action) => permissions[resource][action]
        );

        setPermissions((prev) => ({
            ...prev,
            [resource]: ACTIONS.reduce((acc, action) => {
                acc[action] = !allChecked;
                return acc;
            }, {}),
        }));
    };

    const isAllChecked = (resource) => {
        return ACTIONS.every(
            (action) => permissions[resource][action]
        );
    };

    const isIndeterminate = (resource) => {
        return (
            ACTIONS.some(
                (action) => permissions[resource][action]
            ) && !isAllChecked(resource)
        );
    };

    /* ------------------------------ COUNTERS ------------------------------- */

    const activeCount = useMemo(() => {
        return Object.values(permissions).reduce((total, resource) => {
            return (
                total +
                Object.values(resource).filter(Boolean).length
            );
        }, 0);
    }, [permissions]);

    /* ------------------------------- DIALOG -------------------------------- */

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSelectRole = () => {
        if (!selectedRole) return;

        setAssignedRole(selectedRole);
        setOpenDialog(false);
    };

    /* ---------------------------- API INTEGRATION -------------------------- */

    const handleActivate = async () => {
        try {
            setLoading(true);

            const payload = {
                role: assignedRole,
                permissions,
            };

            console.log("Submitting payload:", payload);

            /**
             * ------------------------------------------
             * API INTEGRATION HERE
             * ------------------------------------------
             *
             * Example:
             *
             * await axios.post(
             *   "/api/permissions/assign",
             *   payload
             * );
             *
             */

            setTimeout(() => {
                navigate("/dashboard");
            }, 1000);

        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    /* -------------------------------- TABLE -------------------------------- */

    const rows = useMemo(() => {
        return RESOURCES.map((resource) => ({
            id: resource,
            resource,
        }));
    }, []);

    const columns = useMemo(() => {
        return [
            {
                field: "resource",
                headerName: "Resource",
                flex: 1,

                renderCell: (row) => (
                    <Typography fontWeight={600}>
                        {row.resource}
                    </Typography>
                ),
            },

            ...ACTIONS.map((action) => ({
                field: action,
                headerName:
                    action.charAt(0).toUpperCase() +
                    action.slice(1),

                align: "center",

                renderCell: (row) => (
                    <Checkbox
                        checked={
                            permissions[row.resource][action]
                        }
                        onChange={() =>
                            handleToggle(row.resource, action)
                        }
                        color={ACTION_COLORS[action]}
                        size="small"
                    />
                ),
            })),

            {
                field: "all",
                headerName: "All",
                align: "center",

                renderCell: (row) => (
                    <Checkbox
                        checked={isAllChecked(row.resource)}
                        indeterminate={isIndeterminate(
                            row.resource
                        )}
                        onChange={() =>
                            handleToggleAll(row.resource)
                        }
                        color="secondary"
                        size="small"
                    />
                ),
            },
        ];
    }, [permissions]);

    /* ---------------------------------------------------------------------- */

    return (
        <Box sx={{ p: 3 }}>
            {/* HEADER */}

            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
                flexWrap="wrap"
                gap={2}
            >
                <Box>
                    <Stack
                        direction="row"
                        alignItems="center"
                        gap={1}
                        mb={0.5}
                    >
                        <AdminPanelSettingsIcon color="primary" />

                        <Typography
                            variant="h5"
                            fontWeight={700}
                        >
                            Permission Management
                        </Typography>
                    </Stack>

                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Configure CRUD access per resource and
                        assign permissions to a role.
                    </Typography>
                </Box>

                <Button
                    variant="outlined"
                    startIcon={<AssignmentIndIcon />}
                    onClick={handleOpenDialog}
                >
                    Assign To Role
                </Button>
            </Stack>

            {/* SUMMARY */}

            <Stack
                direction="row"
                gap={1}
                mb={3}
                flexWrap="wrap"
            >
                <Chip
                    label={`${activeCount} active permissions`}
                    color="success"
                    size="small"
                />

                <Chip
                    label={`${RESOURCES.length} resources`}
                    variant="outlined"
                    size="small"
                />

                <Chip
                    label={`${ACTIONS.length} actions`}
                    variant="outlined"
                    size="small"
                />
            </Stack>

            {/* TABLE */}

            <ReusableTable
                title="Resource Permissions"
                columns={columns}
                rows={rows}
            />

            {/* ACTIVATION BAR */}

            {assignedRole && (
                <Box
                    sx={{
                        mt: 3,
                        p: 2.5,
                        border: "1px solid",
                        borderColor: "theme.palette.primary.contrastText",
                        borderRadius: 2,
                        backgroundColor: "success.50",
                    }}
                >
                    <Stack
                        direction={{
                            xs: "column",
                            sm: "row",
                        }}
                        justifyContent="space-between"
                        alignItems={{
                            xs: "flex-start",
                            sm: "center",
                        }}
                        gap={2}
                    >
                        <Box>
                            <Typography
                                fontWeight={700}
                                color="success.dark"
                            >
                                Ready To Activate
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                Role:
                                {" "}
                                <strong>
                                    {assignedRole}
                                </strong>
                                {" "}·{" "}
                                {activeCount}
                                {" "}
                                permission
                                {activeCount !== 1
                                    ? "s"
                                    : ""}
                                {" "}
                                selected
                            </Typography>
                        </Box>

                        <Stack direction="row" gap={1.5}>
                            <Button
                                variant="outlined"
                                color="inherit"
                                disabled={loading}
                                onClick={() =>
                                    setAssignedRole(null)
                                }
                            >
                                Cancel
                            </Button>

                            <Button
                                variant="contained"
                                color="success"
                                startIcon={
                                    loading ? (
                                        <CircularProgress
                                            size={18}
                                            color="inherit"
                                        />
                                    ) : (
                                        <CheckCircleOutlineIcon />
                                    )
                                }
                                onClick={handleActivate}
                                disabled={
                                    activeCount === 0 ||
                                    loading
                                }
                            >
                                {loading
                                    ? "Processing..."
                                    : "Activate & Assign"}
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            )}

            {/* ROLE DIALOG */}

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                fullWidth
                maxWidth="xs"
            >
                <DialogTitle>
                    Assign Permissions To Role
                </DialogTitle>

                <DialogContent sx={{ pt: 2 }}>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        mb={2}
                    >
                        Choose the role these permissions
                        should be assigned to.
                    </Typography>

                    <FormControl fullWidth size="small">
                        <InputLabel>
                            Select Role
                        </InputLabel>

                        <Select
                            value={selectedRole}
                            label="Select Role"
                            onChange={(e) =>
                                setSelectedRole(
                                    e.target.value
                                )
                            }
                        >
                            {ROLES.map((role) => (
                                <MenuItem
                                    key={role}
                                    value={role}
                                >
                                    {role}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </DialogContent>

                <Divider />

                <DialogActions sx={{ px: 3, py: 2 }}>
                    <Button
                        color="inherit"
                        onClick={handleCloseDialog}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        disabled={!selectedRole}
                        onClick={handleSelectRole}
                    >
                        Confirm Role
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default Permission;