import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

// Material Design 3 styles
const md3Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  },
  button: {
    borderRadius: '20px',
    textTransform: 'none',
    boxShadow: 'none',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }
  },
  card: {
    borderRadius: '16px',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    transition: 'box-shadow 0.3s ease-in-out',
    '&:hover': {
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    }
  },
  switch: {
    '& .MuiSwitch-track': {
      borderRadius: '100px'
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }
  }
};

export function MWCDemo() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Button */}
      <div>
        <Typography variant="h6" gutterBottom>Button</Typography>
        <Button 
          variant="contained" 
          color="primary"
          sx={md3Styles.button}
        >
          Merhaba Dünya
        </Button>
      </div>

      {/* Card */}
      <div>
        <Typography variant="h6" gutterBottom>Card</Typography>
        <Card 
          variant="outlined" 
          sx={md3Styles.card}
        >
          <CardContent>
            <Typography 
              variant="h5" 
              gutterBottom 
              sx={{ fontWeight: 500 }}
            >
              Bildirimler
            </Typography>
            <Typography variant="body1">
              Yeni bir mesajınız var.
            </Typography>
          </CardContent>
        </Card>
      </div>

      {/* Switch */}
      <div>
        <Typography variant="h6" gutterBottom>Switch</Typography>
        <FormControlLabel
          control={
            <Switch 
              sx={md3Styles.switch}
              color="primary"
            />
          }
          label="Aç/Kapat"
        />
      </div>
    </div>
  );
}
