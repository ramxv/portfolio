import AboutMe from "@/components/aboutMe";
import ContactMe from "@/components/contactMe";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import Container from "@/components/shared/container";

export default function Home() {
  return (
    <Container
      as="main"
      className="flex min-h-screen flex-col items-center gap-12 py-5"
    >
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </Container>
  );
}
