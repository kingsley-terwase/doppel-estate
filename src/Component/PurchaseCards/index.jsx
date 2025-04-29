import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
const PurchaseCard = () => {
  return (
    <Card sx={{ maxWidth: 350, borderRadius: 3, boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="200"
        image="/Images/Home_4.png" 
        alt="Property"
        sx={{ borderRadius: "12px 12px 0 0" }}
      />

      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            Luxury Family House
          </Typography>
          <Typography variant="h6" color="primary" fontWeight="bold">
            $3,500
          </Typography>
        </Stack>

        <Stack direction="row" alignItems="center" gap={1} mt={1}>
          <LocationOnIcon color="action" />
          <Typography variant="body2" color="textSecondary">
            Los Angeles, CA
          </Typography>
        </Stack>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3, borderRadius: 8, textTransform: "none" }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default PurchaseCard;
