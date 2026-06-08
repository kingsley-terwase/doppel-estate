import React, { useState, useCallback } from 'react';
import {
    Box, Grid, Typography, TextField, Button,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import { TYPOGRAPHY_SIZE } from '../../../../Config/typography';
import { FONT_FAMILY } from '../../../../Config/font';
import { toast } from 'react-toastify';
import { useOtp } from '../../../../hooks/useAuth';

const OtpSection = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const { state } = useLocation();
    const email = state?.email || '';
    const otp_type = state?.otp_type || '';

    const [otp, setOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [touchedFields, setTouchedFields] = useState(new Set());

    // ── Validators ────────────────────────────────────────────────────────────
    const validateEmail = useCallback((value) => {
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return 'Please enter a valid email address';
        }
        return undefined;
    }, []);

    const validateOtpType = useCallback((value) => {
        if (!value || typeof value !== 'string' || !value.trim()) {
            return 'A valid OTP type is required';
        }
        return undefined;
    }, []);

    const validateOtp = useCallback((value) => {
        if (!value) return 'OTP is required';
        if (!/^\d+$/.test(value)) return 'OTP must contain digits only';
        if (value.length < 6) return 'OTP must be at least 6 digits';
        return undefined;
    }, []);

    const validateForm = useCallback(() => {
        const newErrors = {};
        const emailError = validateEmail(email);
        const otpError = validateOtp(otp);
        const otpTypeError = validateOtpType(otp_type);

        if (emailError) newErrors.email = emailError;
        if (otpError) newErrors.otp = otpError;
        if (otpTypeError) newErrors.otp_type = otpTypeError;

        setErrors(newErrors);
        setTouchedFields(new Set(['email', 'otp', 'otp_type']));

        return Object.keys(newErrors).length === 0;
    }, [email, otp, otp_type, validateOtp, validateEmail, validateOtpType]);

    // ── Field handlers ────────────────────────────────────────────────────────
    const handleOtpChange = (e) => {
        const value = e.target.value;
        setOtp(value);
        if (errors.general) setErrors((prev) => ({ ...prev, general: undefined }));
        if (touchedFields.has('otp')) {
            setErrors((prev) => ({ ...prev, otp: validateOtp(value) }));
        }
    };

    const handleOtpBlur = () => {
        setTouchedFields((prev) => new Set(prev).add('otp'));
        setErrors((prev) => ({ ...prev, otp: validateOtp(otp) }));
    };

    // ── Auth / Submit ─────────────────────────────────────────────────────────
    const handleVerifyOtp = async () => {
        if (!validateForm()) {
            toast.error('Please fix the errors before submitting.');
            return;
        }

        setLoading(true);
        try {

            const payload = {
                email: email.trim().toLowerCase(),
                otp,
                otp_type,
            };

            console.log("OTP Verification payload:", payload);

            const response = await useOtp(payload);

            if (!response.success === true) {
                toast.error(data.message || 'OTP verification failed.');
                setErrors({ general: data.message || 'OTP verification failed.' });
                return;
            }

            toast.success('OTP verified! Redirecting to login...', {
                autoClose: 2000,
                onClose: () => navigate('/auth/login'),
            });

        } catch (err) {
            toast.error('Something went wrong. Please try again.');
            setErrors({ general: 'Something went wrong. Please try again.' });
        } finally {
            setLoading(false);
        }
    };

    // ── Shared input styles ───────────────────────────────────────────────────

    const inputSx = (hasError) => ({
        fontFamily: FONT_FAMILY.primary,
        borderRadius: '20px',
        backgroundColor: theme.palette.background.default,
        border: `1px solid ${hasError ? theme.palette.error.main : 'grey'}`,
        height: '40px',
        padding: '0 12px',
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
        '& input::placeholder': { color: theme.palette.primary.dark, opacity: 1 },
        '& input:-webkit-autofill': {
            WebkitTransitionDelay: '9999s',
            transitionDelay: '9999s',
            WebkitTextFillColor: `${theme.palette.primary.dark} !important`,
            caretColor: theme.palette.primary.dark,
        },
        '& input:-webkit-autofill:hover': { WebkitTransitionDelay: '9999s', transitionDelay: '9999s' },
        '& input:-webkit-autofill:focus': { WebkitTransitionDelay: '9999s', transitionDelay: '9999s' },
        '& input:-webkit-autofill:active': { WebkitTransitionDelay: '9999s', transitionDelay: '9999s' },
    });

    // ── Render ────────────────────────────────────────────────────────────────

    return (
        <Grid
            item
            xs={12} sm={6} md={5} lg={5} xl={5}
            sx={{ height: '100%', backgroundColor: theme.palette.background.default }}
        >
            <Box
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: theme.palette.background.default,
                        borderRadius: '12px',
                        p: 4,
                        width: '100%',
                        maxWidth: '400px',
                    }}
                >
                    {/* Logo */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 3 }}>
                        <img
                            src="./Logo/Logo.png"
                            alt="Logo"
                            style={{ width: '70px', height: '50px' }}
                        />
                    </Box>

                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: FONT_FAMILY.secondary,
                            color: theme.palette.primary.dark,
                            mb: 1,
                            fontWeight: 400,
                            fontSize: TYPOGRAPHY_SIZE.h5,
                            textAlign: 'center',
                        }}
                    >
                        OTP Verification
                    </Typography>

                    {/* Subtitle showing which email the OTP was sent to */}
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.primary.dark,
                            textAlign: 'center',
                            mb: 3,
                            opacity: 0.7,
                        }}
                    >
                        Enter the OTP sent to {email}
                    </Typography>

                    {/* FIX 12 & 13: Removed email, password, rememberMe fields — this
                        is an OTP page, it only needs the OTP input.
                        Also removed onSubmit from Box — button onClick handles submission. */}
                    <Box component="form">
                        <TextField
                            name="otp"
                            placeholder="Enter OTP"
                            fullWidth
                            inputProps={{ maxLength: 6 }}
                            sx={{ mb: errors.otp ? 0.5 : 2 }}
                            value={otp}
                            onChange={handleOtpChange}
                            onBlur={handleOtpBlur}
                            error={!!errors.otp}
                            InputProps={{ sx: inputSx(errors.otp) }}
                        />
                        {errors.otp && (
                            <Typography
                                variant="caption"
                                sx={{ color: theme.palette.error.main, mb: 1, display: 'block', pl: 1.5 }}
                            >
                                {errors.otp}
                            </Typography>
                        )}

                        {errors.general && (
                            <Typography
                                variant="body2"
                                sx={{ color: theme.palette.error.main, mb: 1, textAlign: 'center' }}
                            >
                                {errors.general}
                            </Typography>
                        )}

                        {/* Submit */}
                        <Button
                            type="button"
                            disabled={loading}
                            onClick={(e) => {
                                e.preventDefault();
                                handleVerifyOtp();
                            }}
                            variant="contained"
                            sx={{
                                color: theme.palette.common.white,
                                backgroundColor: theme.palette.primary.main,
                                fontFamily: FONT_FAMILY.primary,
                                fontWeight: 600,
                                borderRadius: '40px',
                                py: '8px',
                                px: '2rem',
                                textTransform: 'capitalize',
                                mb: 2,
                                width: '100%',
                                mt: '20px',
                                '&.Mui-disabled': {
                                    backgroundColor: theme.palette.primary.main,
                                    opacity: 0.7,
                                },
                            }}
                        >
                            {loading ? 'Verifying...' : 'Verify OTP'}
                        </Button>
                    </Box>

                    {/* Resend OTP link */}
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: FONT_FAMILY.quaternary,
                            color: theme.palette.primary.dark,
                            textAlign: 'center',
                            mt: 1,
                        }}
                    >
                        Didn't receive the OTP?{' '}
                        <Typography
                            component="span"
                            variant="body2"
                            onClick={() => {
                                // TODO: call your resend OTP API here
                                toast.info('OTP resent to ' + email);
                            }}
                            sx={{
                                fontFamily: FONT_FAMILY.quaternary,
                                color: theme.palette.primary.secondary || '#218DC9',
                                cursor: 'pointer',
                                '&:hover': { textDecoration: 'underline' },
                            }}
                        >
                            Resend
                        </Typography>
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default OtpSection;