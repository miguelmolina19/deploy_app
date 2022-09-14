import React from 'react'
import{ SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarMenu,SideBtnWrap,SidebarLink,SidebarRoute} from './SidebarElements';


const Sidebar = ({isOpen, toggle , Changed}) => {

  

  return (
    <SidebarContainer isOpen={isOpen} >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" Changed={Changed}>
              About
            </SidebarLink>
            <SidebarLink to="discover" Changed={Changed}>
              Discover
            </SidebarLink>   
            <SidebarLink to="signup" Changed={Changed}>
              Sign Up
            </SidebarLink>
            <SidebarLink to="contact" Changed={Changed}>
              Contact
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin" Changed={Changed}>Sign In</SidebarRoute>
          </SideBtnWrap>       
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
