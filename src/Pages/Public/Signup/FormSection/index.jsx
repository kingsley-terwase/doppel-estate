import React, { useState, useCallback } from "react";
import {
  Grid,
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FONT_FAMILY } from "../../../../Config/font";
import { TYPOGRAPHY_SIZE } from "../../../../Config/typography";
import { useRegister } from "../../../../Hooks/useAuth";
import EyeToggle from "../../../../Component/ToggleEye/EyeToggle";

const RightGrid = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);
  const [touchedFields, setTouchedFields] = useState(new Set());

  const Register = useRegister();

  // ── Validators ──────────────────────────────────────────────────────────────

  const validateFirstName = useCallback((value) => {
    if (!value.trim()) return "First name is required";
    return undefined;
  }, []);

  const validateLastName = useCallback((value) => {
    if (!value.trim()) return "Last name is required";
    return undefined;
  }, []);

  const validateEmail = useCallback((value) => {
    if (!value.trim()) return "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Please enter a valid email address";
    return undefined;
  }, []);

  const validatePhone = useCallback((value) => {
    if (!value.trim()) return "Phone number is required";
    if (!/^\+?[0-9\s\-]{7,15}$/.test(value))
      return "Please enter a valid phone number";
    return undefined;
  }, []);

  const validatePassword = useCallback((value) => {
    if (!value) return "Password is required";
    if (value.length < 6) return "Password must be at least 6 characters";
    return undefined;
  }, []);

  const validateRePassword = useCallback(
    (value) => {
      if (!value) return "Please confirm your password";
      if (value !== password) return "Passwords do not match";
      return undefined;
    },
    [password]
  );

  const validateForm = useCallback(() => {
    const newErrors = {
      firstName: validateFirstName(firstName),
      lastName: validateLastName(lastName),
      email: validateEmail(email),
      phone: validatePhone(phone),
      password: validatePassword(password),
      rePassword: validateRePassword(rePassword),
    };

    Object.keys(newErrors).forEach(
      (key) => newErrors[key] === undefined && delete newErrors[key]
    );

    setErrors(newErrors);
    setTouchedFields(
      new Set(["firstName", "lastName", "email", "phone", "password", "rePassword"])
    );

    return Object.keys(newErrors).length === 0;
  }, [
    firstName, lastName, email, phone, password, rePassword,
    validateFirstName, validateLastName, validateEmail,
    validatePhone, validatePassword, validateRePassword,
  ]);

  // ── Field blur handlers ─────────────────────────────────────────────────────

  const handleBlur = (field, validator, value) => {
    setTouchedFields((prev) => new Set(prev).add(field));
    setErrors((prev) => ({ ...prev, [field]: validator(value) }));
  };

  // ── Auth / Submit ───────────────────────────────────────────────────────────

  const handleSignup = async () => {
    if (!validateForm()) {
      toast.error("Please fix the errors before submitting.");
      return;
    }

    try {
      setLoading(true);
      const payload = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        password,
        rememberMe,
      };

      console.log("Signup payload:", payload); // Debug log to verify payload structure
      const data = await Register(payload);

      if (data.success !== true) {
        toast.error(data.message || "Signup failed. Please try again.");
        setErrors({ general: data.message || "Signup failed. Please try again." });
        return;
      }

      toast.success(
        "Account created successfully. Please check your email to activate your account",
        {
          autoClose: 2000,
          onClose: () =>
            navigate("/auth/verifyOtp", {
              state: { email: email.trim(), otp_type: "email_verification" },
            }),
        }
      );
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  // ── Shared input styles ─────────────────────────────────────────────────────
  const inputSx = (hasError) => ({
    "& .MuiOutlinedInput-root": {
      backgroundColor: theme.palette.background.default,
      borderRadius: "8px",
      height: "42px",
      "& fieldset": {
        borderColor: hasError
          ? theme.palette.error.main
          : theme.palette.custom.border.subtle,
      },
      "&:hover fieldset": {
        borderColor: hasError
          ? theme.palette.error.main
          : theme.palette.custom.button.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: hasError
          ? theme.palette.error.main
          : theme.palette.custom.button.main,
      },
    },
    "& input": { fontFamily: FONT_FAMILY.primary },
    "& input:-webkit-autofill": {
      WebkitTransitionDelay: "9999s",
      transitionDelay: "9999s",
      WebkitTextFillColor: `${theme.palette.text.primary} !important`,
      caretColor: theme.palette.text.primary,
    },
    "& input:-webkit-autofill:hover": { WebkitTransitionDelay: "9999s", transitionDelay: "9999s" },
    "& input:-webkit-autofill:focus": { WebkitTransitionDelay: "9999s", transitionDelay: "9999s" },
    "& input:-webkit-autofill:active": { WebkitTransitionDelay: "9999s", transitionDelay: "9999s" },
  });


  // ── Render ──────────────────────────────────────────────────────────────────

  return (
    <Grid
      item
      xs={12} sm={6} md={6} lg={6} xl={6}
      sx={{
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "80%", maxWidth: "500px", borderRadius: "8px", p: 4 }}>

        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
          <img src="./Logo/Logo.png" alt="Logo" style={{ width: 80, height: 70 }} />
        </Box>

        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontFamily: FONT_FAMILY.secondary,
            fontSize: TYPOGRAPHY_SIZE.h5,
            textAlign: "center",
            mb: 3,
            color: theme.palette.text.primary,
          }}
        >
          Sign Up
        </Typography>

        <Box component="form">
          <Grid container spacing={2}>

            <Grid item xs={6}>
              <TextField
                placeholder="First Name"
                fullWidth
                sx={inputSx(errors.firstName)}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  if (touchedFields.has("firstName"))
                    setErrors((prev) => ({ ...prev, firstName: validateFirstName(e.target.value) }));
                }}
                onBlur={() => handleBlur("firstName", validateFirstName, firstName)}
                error={!!errors.firstName}
              />
              {errors.firstName && (
                <Typography variant="caption" sx={{ color: theme.palette.error.main, pl: 0.5 }}>
                  {errors.firstName}
                </Typography>
              )}
            </Grid>

            <Grid item xs={6}>
              <TextField
                placeholder="Last Name"
                fullWidth
                sx={inputSx(errors.lastName)}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  if (touchedFields.has("lastName"))
                    setErrors((prev) => ({ ...prev, lastName: validateLastName(e.target.value) }));
                }}
                onBlur={() => handleBlur("lastName", validateLastName, lastName)}
                error={!!errors.lastName}
              />
              {errors.lastName && (
                <Typography variant="caption" sx={{ color: theme.palette.error.main, pl: 0.5 }}>
                  {errors.lastName}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="Email"
                fullWidth
                sx={inputSx(errors.email)}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (touchedFields.has("email"))
                    setErrors((prev) => ({ ...prev, email: validateEmail(e.target.value) }));
                }}
                onBlur={() => handleBlur("email", validateEmail, email)}
                error={!!errors.email}
              />
              {errors.email && (
                <Typography variant="caption" sx={{ color: theme.palette.error.main, pl: 0.5 }}>
                  {errors.email}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="Phone"
                fullWidth
                sx={inputSx(errors.phone)}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  if (touchedFields.has("phone"))
                    setErrors((prev) => ({ ...prev, phone: validatePhone(e.target.value) }));
                }}
                onBlur={() => handleBlur("phone", validatePhone, phone)}
                error={!!errors.phone}
              />
              {errors.phone && (
                <Typography variant="caption" sx={{ color: theme.palette.error.main, pl: 0.5 }}>
                  {errors.phone}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                sx={inputSx(errors.password)}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (touchedFields.has("password"))
                    setErrors((prev) => ({ ...prev, password: validatePassword(e.target.value) }));
                }}
                onBlur={() => handleBlur("password", validatePassword, password)}
                error={!!errors.password}
                InputProps={{
                  sx: inputSx(errors.password)["& .MuiOutlinedInput-root"],
                  endAdornment: (
                    <EyeToggle
                      visible={showPassword}
                      onToggle={() => setShowPassword((prev) => !prev)}
                    />
                  ),
                }}
              />
              {errors.password && (
                <Typography variant="caption" sx={{ color: theme.palette.error.main, pl: 0.5 }}>
                  {errors.password}
                </Typography>
              )}
            </Grid>

            <Grid item xs={12}>
              <TextField
                placeholder="Re-password"
                type={showRePassword ? "text" : "password"}
                fullWidth
                sx={inputSx(errors.rePassword)}
                value={rePassword}
                onChange={(e) => {
                  setRePassword(e.target.value);
                  if (touchedFields.has("rePassword"))
                    setErrors((prev) => ({ ...prev, rePassword: validateRePassword(e.target.value) }));
                }}
                onBlur={() => handleBlur("rePassword", validateRePassword, rePassword)}
                error={!!errors.rePassword}
                InputProps={{
                  sx: inputSx(errors.rePassword)["& .MuiOutlinedInput-root"],
                  endAdornment: (
                    <EyeToggle
                      visible={showRePassword}
                      onToggle={() => setShowRePassword((prev) => !prev)} // ← was setShowPassword
                    />
                  ),
                }}
              />
              {errors.rePassword && (
                <Typography variant="caption" sx={{ color: theme.palette.error.main, pl: 0.5 }}>
                  {errors.rePassword}
                </Typography>
              )}
            </Grid>
          </Grid>

          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                sx={{
                  color: theme.palette.custom.border.default,
                  "&.Mui-checked": { color: theme.palette.custom.button.main },
                }}
              />
            }
            label="Remember next time"
            sx={{ mt: 2 }}
          />

          {errors.general && (
            <Typography
              variant="body2"
              sx={{ color: theme.palette.error.main, mt: 1, textAlign: "center" }}
            >
              {errors.general}
            </Typography>
          )}

          <Button
            type="button"
            disabled={loading}
            onClick={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            sx={{
              mt: 2,
              width: "100%",
              borderRadius: "40px",
              height: 44,
              backgroundColor: theme.palette.custom.button.main,
              color: "#fff",
              textTransform: "capitalize",
              "&:hover": { backgroundColor: theme.palette.custom.button.hover },
              "&.Mui-disabled": {
                backgroundColor: theme.palette.custom.button.main,
                opacity: 0.7,
              },
            }}
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default RightGrid;