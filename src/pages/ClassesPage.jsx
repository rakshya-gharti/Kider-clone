import PageHeader from "../components/Common/PageHeader";
import Appointment from "../components/Home/Appointment";
import Classes from "../components/Home/Classes";
import Clients from "../components/Home/Clients";
import Testimonials from "../components/Home/Testimonials";

export default function ClassesPage() {
  return (
    <div>
        <PageHeader title="Classes"/>
        <Classes/>
        <Appointment/>
        <Clients/>
        <Testimonials/>
    </div>
  )
}
