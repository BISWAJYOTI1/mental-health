import React from 'react';

import { Container, Typography, Box } from '@mui/material';


export default function About() {
    //const classes = useStyles();
    return (
        <Container sx={{ color: 'white', marginTop: '36px', marginBottom: '96px' }}>
            <Box>
                <Typography variant='h3'>Legal</Typography>
            </Box>
            <br />
            <Typography variant='h6'>
                The information on this website is provided for general informational purposes only. This website does not
                provide any medical advice, and it is in no way a substitute for professional medical diagnosis, advice, or
                treatment. Never ignore professional medical advice because of something you have read or seen in any way on
                this website. The author(s) are not any sort of medical professional, so no individuals should use any
                information on this site to self-diagnose or self-treat any health-related condition. Mental Health Check
                gives no assurance or warranty regarding the accuracy of any content on the website and is not curing,
                preventing, or mitigating any type of illness or medical condition. By using this site, you agree to use any
                tool at your own risk. If you are experiencing any sort of medical emergency, call 112 immediately. Nothing on
                this site has been certified in any way by any governmental agency or any sort of authority. Any use or
                application of content from this website is up to the user and the user's own responsibility.
            </Typography>
            <br />

            { <Typography variant='h6'>
                About Us<br />

                Biswajyoti Aown,Usama Ansari,Armaan Ansari<br /><br />

                We are a team of TE Computer Engineering students passionate about innovation and problem-solving. Our mission is to create an intuitive, quiz-based web application that helps users identify their strengths, interests, and potential career paths.

             With a user-friendly interface and intelligent algorithms, our platform provides personalized insights based on responses. Whether you're a student exploring career options or a professional seeking self-improvement, our quiz offers valuable guidance.

            Built using the latest web technologies, our platform ensures a seamless and engaging experience. We believe in the power of self-discovery and aim to empower individuals with meaningful insights. Join us on this journey of exploration and growth!
            </Typography> }
        </Container>
    )
}