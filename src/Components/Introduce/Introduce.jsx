import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import './introduce.css';
import Headimg from "../../assets/img/HeaderName_job.png";
import Hun from "../../assets/img/hu.svg"


const calcAge=() =>{
  const theBigday= new Date('1989-04-02');
  const currDate= new Date();
  const age = currDate.getFullYear() - theBigday.getFullYear();
  return age;
}

const steps = [
{
label: 'Select campaign settings',
description: `For each ad campaign that you create, you can control how much
        you're willing to spend on clicks and conversions, which networks
        and geographical locations you want your ads to show on, and more.`,
},
{
label: 'Create an ad group',
description:
'An ad group contains one or more ads which target a shared set of keywords.',
},
{
label: '2021',
description: `Try out different ad text to see what brings in the most customers,
        and learn how to enhance your ads using features like ad extensions.
        If you run into any problems with your ads, find out how to tell if
        they're running and how to resolve approval issues.`,
},
{
label: 'Főigazgatói kitüntetés',
description: `Try out different ad text to see what brings in the most customers,
        and learn how to enhance your ads using features like ad extensions.
        If you run into any problems with your ads, find out how to tell if
        they're running and how to resolve approval issues.`,
},
{
label: '2021-2023',
description: `Try out different ad text to see what brings in the most customers,
        and learn how to enhance your ads using features like ad extensions.
        If you run into any problems with your ads, find out how to tell if
        they're running and how to resolve approval issues.`,
},
];
function Introduce() {
  /*dynamic hanadle how many years old */
  const [age, setAge] = React.useState(calcAge());
  const [activeStep, setActiveStep] = React.useState(0);
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
 

export default function VerticalLinearStepper() {

  return (
    <>
    <h1 className='eduTitle container-fluid'>Education steps</h1>
    <section className='eduStep container-fluid'>
    <Box sx={{ maxWidth: 800 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel className='stepDiv'>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography className='descript'>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button className='backBtns'
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper className='row' square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
    </section>
</>
)
}
/* MUI CARD
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
*/
}