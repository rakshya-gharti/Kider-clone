import PageHeader from "../components/Common/PageHeader";
import About from "../components/Home/About";
import BecomeTeacher from "../components/Home/BecomeTeacher";
import Teachers from "../components/Home/Teachers";
import Testimonials from "../components/Home/Testimonials";
export default function AboutUs() {
  return (
    <div>
    <PageHeader title="About Us"/>
    <About />
      <BecomeTeacher />
      <Teachers />
      <Testimonials />


    </div>
  )
}
