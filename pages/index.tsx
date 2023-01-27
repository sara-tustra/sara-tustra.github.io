import Header from "@/components/Header";
import { Box } from "@chakra-ui/react";
import AboutSection from "./about";
import ContactForm from "./contact";
import Projects from "./projects";
import SkillsSection from "./skills";

const IndexPage = () => (
  <Box alignItems="center" justifyContent="center">
    <Header />
    <AboutSection />
    <SkillsSection />
    <Projects />
    <ContactForm />
  </Box>
);

export default IndexPage;
