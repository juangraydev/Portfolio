import React from 'react'
import './App.css';
import { 
  Container,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Grid,
  Item,
  Card,
  CardContent,

} from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';


import {
  Menu as MenuIcon,
  Facebook as FacebookIcon,
  Instagram,
  Twitter,
  GitHub,
  LinkedIn
} from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
const meImage = require('./me.png'); // Import the image
const html_img = require('./images/html.png'); // Import the image
const js_img = require('./images/js.png'); // Import the image
const css_img = require('./images/technology.png'); // Import the image
const react_img = require('./images/science.png'); // Import the image
const mui_img = require('./images/material.png'); // Import the image
const python_img = require('./images/python.png'); // Import the image

const useStyles = makeStyles((theme) => ({
  skillCard: {
    background: '#3d3e42!important', 
    color: '#fff!important',
    transition: 'background 10s',
    "&:hover": { 
      background: "#f0bf6c!important",
    }
  },
  flaglet_main: {
    background: '#3d3e42',
    textAlign: 'center',
  },
  flag_wrapper: {
    justifyContent: 'end',
    display: 'flex'
  },
  right_wrapper: {
    paddingBottom: '50px!important'
  }
}));


function App() {
  
  let skills = [
    {
      name: 'HTML',
      img: html_img,
    },
    {
      name: 'CSS',
      img: css_img,
    },
    {
      name: 'JS',
      img: js_img,
    },
    {
      name: 'React Js',
      img: react_img,
    },
    {
      name: 'MUI',
      img: mui_img,
    },
    {
      name: 'Python',
      img: python_img,
    }
  ]

  const experience = [
    {
      year: '2019',
      company: 'Lanex Philippines - On Job Training',
      desciption: 'acquired an experience in software development life cycle, including designing, coding, testing, and maintenaning software applications using ReactJs, GraphQL, and Ant design. '
    },
    {
      year: '2020 - Present',
      company: 'Lanex Philippines - Software Development Engineer 1',
      desciption: "Assigned in NEC Philippines, Inc. as Software Development Engineer."
    }
  ]


  const classes = useStyles();

  return (
    <Box>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" style={{background: 'none', boxShadow: 'none'}}>
            <Toolbar>
              <Box component="div" sx={{ flexGrow: 1 }}>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              <Box component="div" sx={{ flexGrow: 1, display: 'flex', gap: 2, justifyContent: 'center' }}>
                <Button className='active' color="inherit">About</Button>
                <Button className='deactive' color="inherit">Portfolio</Button>
                <Button className='deactive' color="inherit">Contact</Button>
              </Box>
              <Box component="div" sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Button color="inherit">Contact</Button>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Intro */}
        <Box style={{ height: 650, maxHeight: 650, display: 'flex', alignItems: 'center'}}>
          <Box style={{width: 320, display: 'flex', flexDirection: 'column', gap: 5}}>
            <Box style={{display: 'flex', alignItems: 'flex-end', gap: 10}}>
              <Typography style={{fontSize: 18, color: '#fff'}}>I'M</Typography>
              <Typography style={{fontSize: 35, color: '#f0bf6c', lineHeight: 1}}>Jhun Wulf Sabala</Typography>
            </Box>
            <Typography style={{fontSize: 26, color: '#fff', width: 295}}>Fullstack Web Developer & ReactJs Specialist</Typography>
            <Button variant="outlined" style={{color: '#f0bf6c', borderColor: '#f0bf6c'}}>Contact Me</Button>
          </Box>
          <Box style={{display: 'flex', flexDirection: 'column', gap: 15,flexGrow: 1, alignItems: 'end',height: '100%', justifyContent: 'flex-end'}}>
              <IconButton style={{color: '#fff'}}><FacebookIcon/></IconButton>
              <IconButton style={{color: '#fff'}}><Instagram/></IconButton>
              <IconButton style={{color: '#fff'}}><Twitter/></IconButton>
              <IconButton style={{color: '#fff'}}><GitHub/></IconButton>
              <IconButton style={{color: '#fff'}}><LinkedIn/></IconButton>
            </Box>
          <Box>
            {/* <img
              srcSet={`${meImage}.png?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${meImage}?w=164&h=164&fit=crop&auto=format`}
              alt={'me.png'}
              loading="lazy"
            /> */}
          </Box>
        </Box>

        {/* About */}
        <Box style={{marginBlock: 50, height: 100}}>
          <Typography style={{fontSize: 35, color: '#fff', fontWeight: '600'}}>About</Typography>
          <Box style={{display: 'flex', alignItems: 'flex-start'}}>
            <Typography style={{fontSize: 30, color: '#f0bf6c', lineHeight: '0.6', width: 50}}>----</Typography>
            <Typography style={{fontSize: 18, color: '#fff'}}>As a full-stack web developer, I bring a blend of creativity, technical expertise, and problem-solving skills to the table.</Typography>
          </Box>
        </Box>

        {/* My Skills */}
        <Box style={{height: 500}}>
          <Typography style={{fontSize: 35, color: '#fff', fontWeight: '600', textAlign: 'center', marginBottom: 20}}>Skills</Typography>
          <Grid container spacing={2}>
            {
              skills?.map((skill) => {
                return <Grid item xs={4} md={3} lg={2}>
                <Card className={classes.skillCard}>
                  <CardContent style={{padding: 16, textAlign: 'center'}}>
                    <img
                      srcSet={`${skill.img}`}
                      src={`${skill.img}`}
                      alt={skill.name}
                      loading="lazy"
                      width={50}
                      height={50}
                    />
                    <Typography variant='h6' style={{marginTop: 8, fontSize: 14, fontWeight: 'bold'}}>{skill.name}</Typography>
                  </CardContent>
                </Card>
              </Grid>
              })
            }
            
          </Grid>
        </Box>

        {/* Portfolio */}
        <Box>
          
        </Box>

      </Container>

      {/* Experience */}
      <Box style={{background: '#3d3e42', height: 500}}>
        <Container maxWidth="lg">
          <Typography style={{fontSize: 35, color: '#fff', fontWeight: '600', textAlign: 'left', marginBottom: 20, position: 'relative', bottom: 30}}>Experience</Typography> 

          <Box sx={{color: '#fff'}}>
            <Timeline>
              {
                experience?.map((item)=> {

                  return <TimelineItem className={classes.timeline_wrapper}>
                    <TimelineOppositeContent>
                      <Box className={classes.flag_wrapper}>
                        <Box className={classes.flaglet_main}>
                          {item.year}
                        </Box>
                      </Box>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                      <TimelineDot />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent className={classes.right_wrapper}>
                      <Typography variant="h6" component="span">{item.company}</Typography>
                      <Typography dangerouslySetInnerHTML={{__html: item.desciption}}></Typography>
                    </TimelineContent>
                  </TimelineItem>
                })
              }
              
            </Timeline>

          </Box>

        </Container>
      </Box>

      {/* Projects */}
      <Box style={{ height: 500}}>
        <Container maxWidth="lg">
          <Typography style={{fontSize: 35, color: '#fff', fontWeight: '600', textAlign: 'left', marginBottom: 20, position: 'relative', bottom: 30}}>Projects</Typography> 

          <Box sx={{color: '#fff'}}>
          </Box>
        </Container>
      </Box>
      
    </Box>

  );
}

export default App;
