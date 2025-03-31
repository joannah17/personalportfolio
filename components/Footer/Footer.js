import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { FaPhone } from 'react-icons/fa';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>
            <AiOutlineMail style={{ marginRight: '8px' }} /> Email
          </LinkTitle>
          <LinkItem href="mailto:your.email@example.com">
             catajoannahmarie@gmail.com
          </LinkItem>
          <LinkTitle>
          <FaPhone style={{ marginRight: '8px' }} /> Call
          </LinkTitle>
          <LinkItem href="tel:+1234567890">
          +09501496019
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
      <Slogan>Solving Problems one code at a time</Slogan>
        </CompanyContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;