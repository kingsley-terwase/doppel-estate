import React, { useState, useCallback } from 'react';
import {
  Box, Grid, Typography, TextField, Button, Checkbox, FormControlLabel,
  Link
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { TYPOGRAPHY_SIZE } from '../../../../Config/typography';
import { FONT_FAMILY } from '../../../../Config/font';
import { toast } from 'react-toastify';
import { useLogin } from '../../../../hooks/useAuth';

const LoginFormSection = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState(new Set());


  // ── Validators ──────────────────────────────────────────────────────────────

  const validateEmail = useCallback((value) => {
    if (!value.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      return 'Please enter a valid email address';
    }
    return undefined;
  }, []);

  const validatePassword = useCallback((value) => {
    if (!value) return 'Password is required';
    if (value.length < 6) return 'Password must be at least 6 characters';
    return undefined;
  }, []);

  const validateForm = useCallback(() => {
    const newErrors = {};
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    if (emailError) newErrors.email = emailError;
    if (passwordError) newErrors.password = passwordError;

    setErrors(newErrors);
    setTouchedFields(new Set(['email', 'password']));

    return Object.keys(newErrors).length === 0;
  }, [email, password, validateEmail, validatePassword]);

  // ── Field handlers ──────────────────────────────────────────────────────────

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (errors.general) setErrors((prev) => ({ ...prev, general: undefined }));
    if (touchedFields.has('email')) {
      setErrors((prev) => ({ ...prev, email: validateEmail(value) }));
    }
  };

  const handleEmailBlur = () => {
    setTouchedFields((prev) => new Set(prev).add('email'));
    setErrors((prev) => ({ ...prev, email: validateEmail(email) }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (errors.general) setErrors((prev) => ({ ...prev, general: undefined }));
    if (touchedFields.has('password')) {
      setErrors((prev) => ({ ...prev, password: validatePassword(value) }));
    }
  };

  const handlePasswordBlur = () => {
    setTouchedFields((prev) => new Set(prev).add('password'));
    setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  };

  // ── Auth / Submit ───────────────────────────────────────────────────────────

  const handleLogin = async () => {
    if (!validateForm()) return;

    setLoading(true);
    try {
      const payload = {
        email: email.trim().toLowerCase(),
        password,
        rememberMe,
      };

      console.log("logindatta", payload); 

      const data = await useLogin(payload);

      if (!data) {
        toast.error('Login failed. Please check your credentials.');
        return;
      }

      // // ✅ FIXED: properly handle device trust codes before navigating
      // if (data.code === 11 || data.code === 12) {
      //   // New device detected or device not trusted — redirect to verification
      //   navigate('/verify-device');
      //   return;
      // }

      navigate('/dashboard');

    } catch (err) {
      toast.error('Failed to save. Please try again.');
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  // ── Styles ──────────────────────────────────────────────────────────────────

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

  // ── Render ──────────────────────────────────────────────────────────────────

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
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 3 }}>
            <img
              src="./Logo/Logo.png"
              alt="Logo"
              style={{ width: '70px', height: '50px' }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontFamily: FONT_FAMILY.secondary,
              color: theme.palette.primary.dark,
              mb: 3,
              fontWeight: 400,
              fontSize: TYPOGRAPHY_SIZE.h5,
              textAlign: 'center',
            }}
          >
            User Login
          </Typography>

          {/* FORM */}
          <Box
            component="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            {/* Email */}
            <TextField
              name="email"
              placeholder="Email"
              fullWidth
              sx={{ mb: errors.email ? 0.5 : 2 }}
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              error={!!errors.email}
              InputProps={{ sx: inputSx(errors.email) }}
            />
            {errors.email && (
              <Typography
                variant="caption"
                sx={{ color: theme.palette.error.main, mb: 1, display: 'block', pl: 1.5 }}
              >
                {errors.email}
              </Typography>
            )}

            {/* Password */}
            <TextField
              name="password"
              type="password"
              placeholder="Password"
              fullWidth
              sx={{ mb: errors.password ? 0.5 : 2, mt: errors.email ? 1 : 0 }}
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              error={!!errors.password}
              InputProps={{ sx: inputSx(errors.password) }}
            />
            {errors.password && (
              <Typography
                variant="caption"
                sx={{ color: theme.palette.error.main, mb: 1, display: 'block', pl: 1.5 }}
              >
                {errors.password}
              </Typography>
            )}

            {/* Remember Me */}
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
                  sx={{
                    color: theme.palette.primary.dark,
                    '&.Mui-checked': { color: theme.palette.primary.dark },
                  }}
                />
              }
              label="Remember next time"
              sx={{
                mb: 2,
                mt: errors.password ? 1 : 0,
                '& .MuiTypography-root': {
                  fontFamily: FONT_FAMILY.quaternary,
                  color: theme.palette.primary.dark,
                },
              }}
            />

            {errors.general && (
              <Typography
                variant="body2"
                sx={{ color: theme.palette.error.main, mb: 1, textAlign: 'center' }}
              >
                {errors.general}
              </Typography>
            )}

            <Button
              type="button"
              disabled={loading}
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
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
              {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </Box>

          <Typography
            variant="body2"
            sx={{
              fontFamily: FONT_FAMILY.quaternary,
              color: theme.palette.primary.dark,
              mb: 1,
              mt: 1,
              textAlign: 'center',
            }}
          >
            Forgot Password or Username
          </Typography>

          <Typography
            variant="body2"
            sx={{
              fontFamily: FONT_FAMILY.quaternary,
              color: theme.palette.primary.dark,
              textAlign: 'center',
            }}
          >
            Don't have account?{' '}
            <Link
              component={RouterLink}
              to="/auth/signup"
              sx={{
                fontFamily: FONT_FAMILY.quaternary,
                color: theme.palette.primary.secondary || '#218DC9',
                textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Click here
            </Link>
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default LoginFormSection;