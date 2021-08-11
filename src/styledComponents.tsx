import React, { FC } from "react";
import { Flex, FlexProps } from "@react-yuki/ui";

export const SlideContainer: FC<FlexProps> = props => (
  <Flex
    {...props}
    __css={{
      position: "relative",
      ".swiper-container": {
        width: "100%",
        height: "20rem"
      },
      ".swiper-pagination": {
        "&.swiper-pagination-fraction": {
          color: "white",
          fontWeight: 5
        }
      },
      ".swiper-pagination-bullet-active.swiper-pagination-bullet": {
        bg: "gray.9",
        opacity: 1
      },
      ".swiper-pagination-bullet": {
        bg: "white",
        opacity: 1
      },
      ".swiper-pagination-progressbar .swiper-pagination-progressbar-fill": {
        bg: "dark"
      },
      "&#three-d-overflow-effect": {
        ".swiper-container": {
          position: "relative",
          bg: "white",
          width: "100%",
          height: "100%",
          p: "0.5rem"
        },
        ".swiper-slide": {
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: ["10rem", "20rem"],
          height: ["10rem", "20rem"],
          bg: "white"
        }
      }
    }}
  />
);
