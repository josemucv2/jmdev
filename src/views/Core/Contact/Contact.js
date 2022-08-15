import React from "react";
import Core from "../../../layouts/Core/Core";
import styled from "styled-components";
import SocialMedia from "../../../components/SocialMedia/SocialMedia";

import IconFacebook from "../../../assets/icons/IconFacebook.svg";
import IconTelegram from "../../../assets/icons/IconTelegram.svg";
import IconTwitter from "../../../assets/icons/IconTwitter.svg";
import IconSlack from "../../../assets/icons/IconSlack.svg";
import IconInstagram from "../../../assets/icons/IconInstagram.svg";
import IconGmail from "../../../assets/icons/IconGmail.svg";
import IconOutlook from "../../../assets/icons/IconOutlook.svg";
import IconLinkedIn from "../../../assets/icons/IconLinkedIn.svg";
import IconWhatsapp from "../../../assets/icons/IconWhatsapp.svg";

function Contact() {
  const SocialMediaArray = [
    {
      id: 1,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/josemartinez-front-end/",
      Icon: IconLinkedIn,
    },
    {
      id: 8,
      name: "Whatsapp",
      href: "https://wa.me/+584241449453",
      Icon: IconWhatsapp,
    },
    {
      id: 2,
      name: "Gmail",
      href: "mailto:martinezcaceresjosem@gmail.com?Subject=Me%20Interesa%20Contactarte",
      Icon: IconGmail,
    },
    {
      id: 8,
      name: "Outlook",
      href: "mailto:josemmartinezc95@outlook.es?Subject=Me%20Interesa%20Contactarte",
      Icon: IconOutlook,
    },
    {
      id: 3,
      name: "Slack",
      href: "https://josemartinezdev.slack.com",
      Icon: IconSlack,
    },
    {
      id: 4,
      name: "Telegram",
      href: "https://t.me/Josemucv",
      Icon: IconTelegram,
    },
    {
      id: 5,
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=100010477038913",
      Icon: IconFacebook,
    },
    {
      id: 6,
      name: "Twitter",
      href: "https://twitter.com/josemucv",
      Icon: IconTwitter,
    },
    {
      id: 7,
      name: "Instagram",
      href: "https://www.instagram.com/soy_jm/",
      Icon: IconInstagram,
    },
  ];
  return (
    <Core>
      <Title>Contactame a travez de:</Title>
      <div className="flex">
        <Section className="fadeInDown flex">
          {SocialMediaArray.map((element, index) => {
            return (
              <SocialMedia
                href={element.href}
                Icon={element.Icon}
                name={element.name}
                key={index}
              />
            );
          })}
        </Section>
      </div>
    </Core>
  );
}

export default Contact;

const Title = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: white;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: calc(100vh - 150px);
  overflow: auto;
`;
