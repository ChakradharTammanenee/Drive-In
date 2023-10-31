import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
        <Box sx={{
          my: 15,
          textAlign: "center",
          "& h4":{
            fontWeight: 'bold',
            my: 2,
            fontSize: "2rem",
          },
          "& p":{
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          }
        }}>
          <Typography variant="h4">
            Welcome To My Airway Drive-In
          </Typography>
          <p>
            Imagine a quaint restaurant nestled in a cozy corner of the city, where the delightful aroma of freshly brewed tea and the sizzle of delectable cuisine waft through the air. This unique establishment is a tea lover's paradise, offering a diverse menu that caters to all palates. From the soothing warmth of herbal infusions to the robust flavors of traditional black teas, this restaurant has it all. Pair your favorite brew with a mouthwatering assortment of food options, from comforting soups and sandwiches to exotic international dishes. Whether you're seeking a moment of tranquility with a cup of tea or a culinary adventure with an array of delectable dishes, this restaurant is the perfect destination to satisfy your cravings and indulge in a delightful symphony of flavors.
          </p>
          <br />
          <p>
            Nestled in the heart of the bustling city, our one-of-a-kind restaurant is a haven for connoisseurs of both culinary delights and the world of tea. We have lovingly curated a menu that features an extensive range of teas from around the globe, each cup a journey to far-off places and cultures. Whether you prefer the earthy notes of a Japanese green tea or the fragrant spices of a Masala Chai, we have the perfect brew for you. Our culinary offerings are equally diverse, celebrating international flavors, from spicy Thai curries to savory Italian pasta. It's a place where food and tea harmoniously come together, promising a memorable dining experience that tantalizes the taste buds and soothes the soul. Join us for a culinary and tea adventure that will transport you to different corners of the world with each delightful sip and savory bite.
          </p>
        </Box>
    </Layout>
  )
}

export default About