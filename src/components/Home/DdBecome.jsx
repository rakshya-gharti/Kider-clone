import PageHeader from "../Common/PageHeader";
import BecomeTeacher from "./BecomeTeacher";
import Testimonials from "./Testimonials";

export default function DdBecome() {
  return (
    <div  className="space-y-15 bg-white">
  <PageHeader title="Become a Teacher"/>
  <BecomeTeacher/>
  <Testimonials/>

    </div>
  )
}
