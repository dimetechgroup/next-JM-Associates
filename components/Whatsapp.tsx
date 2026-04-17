"use client";
import { Box } from "@chakra-ui/react";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <Box as="section">
      <FloatingWhatsApp
        phoneNumber="254716818835"
        accountName="JM Associates"
        allowClickAway={false}
        avatar="../public/Logo.png"
        chatMessage="Hello, how can We help you?"
        notification={true}
        notificationDelay={60000}
        notificationSound={true}
      />
    </Box>
  );
};

export default Whatsapp;
