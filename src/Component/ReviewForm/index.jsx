import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { useTheme } from "@mui/material/styles";

import {
  Send24Regular,
  Delete24Regular,
  Image24Regular,
} from "@fluentui/react-icons";

import { FONT_FAMILY } from "../../Config/font";

const ReviewForm = () => {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    review: "",
    rating: 0,
    recommend: false,
    images: [],
  });

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const {
      name,
      value,
      checked,
      type,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const handleImageUpload = (e) => {
    if (e.target.files) {
      const fileNames = Array.from(
        e.target.files
      ).map((file) => file.name);

      setFormData((prev) => ({
        ...prev,
        images: [
          ...prev.images,
          ...fileNames,
        ],
      }));
    }
  };

  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    if (
      !formData.name ||
      !formData.email ||
      !formData.review ||
      formData.rating === 0
    ) {
      setSnackbar({
        open: true,
        message:
          "Please fill in all required fields",
        severity: "error",
      });

      setIsSubmitting(false);

      return;
    }

    setTimeout(() => {
      setSnackbar({
        open: true,
        message:
          "Thank you for your review!",
        severity: "success",
      });

      setIsSubmitting(false);

      setFormData({
        name: "",
        email: "",
        title: "",
        review: "",
        rating: 0,
        recommend: false,
        images: [],
      });
    }, 1500);
  };

  const fieldSx = {
    backgroundColor:
      theme.palette.background.default,

    borderRadius: "12px",

    "& .MuiOutlinedInput-root": {
      fontFamily:
        FONT_FAMILY.primary,

      color:
        theme.palette.text.primary,

      "& fieldset": {
        borderColor:
          theme.palette.custom.border.subtle,
      },

      "&:hover fieldset": {
        borderColor:
          theme.palette.primary.main,
      },

      "&.Mui-focused fieldset": {
        borderColor:
          theme.palette.primary.main,

        borderWidth: "1px",
      },
    },

    "& .MuiInputBase-input::placeholder": {
      color:
        theme.palette.text.secondary,

      opacity: 1,
    },
  };

  return (
    <>
      <Card
        sx={{
          my: 4,

          borderRadius: "24px",

          backgroundColor:
            theme.palette.background.paper,

          border: `1px solid ${theme.palette.custom.card.border}`,

          boxShadow:
            "0px 4px 14px rgba(0,0,0,0.08)",
        }}
      >
        <CardContent
          sx={{
            p: {
              xs: 2.5,
              md: 4,
            },
          }}
        >
          {/* HEADER */}
          <Typography
            variant="h6"
            sx={{
              mb: 1,

              fontWeight: 700,

              fontFamily:
                FONT_FAMILY.secondary,

              color:
                theme.palette.text.primary,
            }}
          >
            Write a Review
          </Typography>

          <Typography
            sx={{
              mb: 3,

              fontSize: "14px",

              color:
                theme.palette.text.secondary,

              fontFamily:
                FONT_FAMILY.primary,
            }}
          >
            Share your experience
            about this property
          </Typography>

          <Divider
            sx={{
              mb: 4,

              borderColor:
                theme.palette.custom.border.subtle,
            }}
          />

          {/* FORM */}
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
          >
            <Grid
              container
              spacing={3}
            >
              {/* NAME */}
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  required
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={
                    handleChange
                  }
                  sx={fieldSx}
                />
              </Grid>

              {/* EMAIL */}
              <Grid
                item
                xs={12}
                sm={6}
              >
                <TextField
                  fullWidth
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={
                    handleChange
                  }
                  sx={fieldSx}
                />
              </Grid>

              {/* TITLE */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  name="title"
                  placeholder="Review Title"
                  value={formData.title}
                  onChange={
                    handleChange
                  }
                  sx={fieldSx}
                />
              </Grid>

              {/* RATING */}
              <Grid item xs={12}>
                <Typography
                  sx={{
                    mb: 1,

                    fontWeight: 600,

                    fontFamily:
                      FONT_FAMILY.primary,

                    color:
                      theme.palette.text.primary,
                  }}
                >
                  Your Rating
                </Typography>

                <Rating
                  value={
                    formData.rating
                  }
                  onChange={(
                    _,
                    newValue
                  ) =>
                    setFormData(
                      (prev) => ({
                        ...prev,
                        rating:
                          newValue || 0,
                      })
                    )
                  }
                  sx={{
                    color:
                      theme.palette.primary.main,
                  }}
                />
              </Grid>

              {/* REVIEW */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  multiline
                  rows={5}
                  name="review"
                  placeholder="Share your experience..."
                  value={
                    formData.review
                  }
                  onChange={
                    handleChange
                  }
                  sx={fieldSx}
                />
              </Grid>

              {/* RECOMMEND */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={
                        formData.recommend
                      }
                      onChange={
                        handleChange
                      }
                      name="recommend"
                      sx={{
                        color:
                          theme.palette
                            .primary.main,

                        "&.Mui-checked":
                          {
                            color:
                              theme
                                .palette
                                .primary
                                .main,
                          },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontSize:
                          "14px",

                        fontFamily:
                          FONT_FAMILY.primary,

                        color:
                          theme
                            .palette
                            .text
                            .secondary,
                      }}
                    >
                      I recommend this
                      property
                    </Typography>
                  }
                />
              </Grid>

              {/* IMAGE UPLOAD */}
              <Grid item xs={12}>
                <Typography
                  sx={{
                    mb: 1.5,

                    fontWeight: 600,

                    fontFamily:
                      FONT_FAMILY.primary,

                    color:
                      theme.palette.text.primary,
                  }}
                >
                  Add Photos
                  (Optional)
                </Typography>

                <Button
                  component="label"
                  variant="outlined"
                  startIcon={
                    <Image24Regular />
                  }
                  sx={{
                    borderRadius:
                      "12px",

                    textTransform:
                      "none",

                    borderColor:
                      theme.palette
                        .primary.main,

                    color:
                      theme.palette
                        .primary.main,

                    fontFamily:
                      FONT_FAMILY.primary,

                    "&:hover": {
                      borderColor:
                        theme.palette
                          .primary
                          .dark,

                      backgroundColor:
                        theme.palette
                          .custom
                          .card.body,
                    },
                  }}
                >
                  Upload Images

                  <input
                    hidden
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={
                      handleImageUpload
                    }
                  />
                </Button>

                {/* IMAGES */}
                {formData.images
                  .length > 0 && (
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{
                      mt: 2,

                      flexWrap:
                        "wrap",

                      gap: 1,
                    }}
                  >
                    {formData.images.map(
                      (
                        image,
                        index
                      ) => (
                        <Paper
                          key={index}
                          sx={{
                            px: 1.5,
                            py: 1,

                            display:
                              "flex",

                            alignItems:
                              "center",

                            gap: 1,

                            borderRadius:
                              "10px",

                            backgroundColor:
                              theme
                                .palette
                                .background
                                .default,

                            border: `1px solid ${theme.palette.custom.border.subtle}`,
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize:
                                "13px",

                              color:
                                theme
                                  .palette
                                  .text
                                  .primary,

                              fontFamily:
                                FONT_FAMILY.primary,
                            }}
                          >
                            {image}
                          </Typography>

                          <Button
                            size="small"
                            color="error"
                            onClick={() =>
                              removeImage(
                                index
                              )
                            }
                            sx={{
                              minWidth: 0,

                              p: 0.5,
                            }}
                          >
                            <Delete24Regular />
                          </Button>
                        </Paper>
                      )
                    )}
                  </Stack>
                )}
              </Grid>

              {/* SUBMIT */}
              <Grid item xs={12}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  disabled={
                    isSubmitting
                  }
                  startIcon={
                    <Send24Regular />
                  }
                  sx={{
                    mt: 1,

                    py: 1.4,

                    borderRadius:
                      "14px",

                    textTransform:
                      "none",

                    fontWeight: 600,

                    fontSize: "15px",

                    fontFamily:
                      FONT_FAMILY.primary,

                    backgroundColor:
                      theme.palette
                        .custom
                        .button.main,

                    color:
                      theme.palette
                        .primary
                        .contrastText,

                    boxShadow: "none",

                    "&:hover": {
                      backgroundColor:
                        theme.palette
                          .custom
                          .button.hover,

                      boxShadow:
                        "none",
                    },
                  }}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Review"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>

      {/* SNACKBAR */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        onClose={() =>
          setSnackbar((prev) => ({
            ...prev,
            open: false,
          }))
        }
      >
        <Alert
          variant="filled"
          severity={snackbar.severity}
          sx={{
            width: "100%",
          }}
          onClose={() =>
            setSnackbar((prev) => ({
              ...prev,
              open: false,
            }))
          }
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ReviewForm;