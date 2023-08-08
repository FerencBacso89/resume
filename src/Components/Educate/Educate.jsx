import './educate.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Hunflag from '../../assets/img/hu.svg';
import Enflag from '../../assets/img/gb.svg';
const steps = [
  {
    label: 'Self-taught learning has begun',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Got job as a Programmer',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
    {
    label: '2019-2022',  //covid, corporate training(Masterfield trainingcenter)
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
    label: 'future plans and development',  //became a fullstack proggramer, angular typescript, js high level skills -> nodeJS / .netcore
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function VerticalLinearStepper() {
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
  const getCV =()=>{
    const link = document.createElement('a');
    link.href = '../src/assets/CV/Bacsó-Ferenc_CV-HUN.pdf'; // Az elérési út a PDF fájlhoz
    link.download = 'Bacsó-Ferenc_CV-HUN.pdf'; // A letöltött fájl neve
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
          <Typography>This is my journey - but every day writing my history.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
          <Typography>If you would like to read more about me, click the button below for my resume</Typography>
          <Button onClick={getCV} sx={{ mt: 1, mr: 1 }}>
            Download my CV <img className='cvFlag' src={Hunflag}></img> version
          </Button>          
          <Button onClick={getCV} sx={{ mt: 1, mr: 1 }}>
            Download my CV <img className='cvFlag' src={Enflag}></img> version
          </Button>
        </Paper>
      )}
    </Box>
    </section>
</>
  );
}
