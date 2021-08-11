import React from "react";
import { ThemeProvider } from "emotion-theming";
import { theme, globalStyles } from "./stylesConfig";
import { Global } from "@emotion/core";
import { Box, Heading } from "@react-yuki/ui";
import Slider from "./Slider";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      <Global styles={globalStyles} />
      <Box p={4}>
        <Box>
          <Heading
            as="h1"
            color="orange.4"
            fontSize={13}
            m={0}
            my={4}
            fontWeight={1}
            textAlign="center"
          >
            3D Coverflow Effect - Example
          </Heading>
        </Box>
        <Box>
          <Slider
            hasImage
            id="three-d-overflow-effect"
            params={{
              effect: "coverflow",
              grabCursor: true,
              centeredSlides: true,
              slidesPerView: "auto",
              coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
              },
              pagination: {
                el: ".swiper-pagination"
              }
            }}
          />
        </Box>
      </Box>
    </>
  </ThemeProvider>
);

export default App;
