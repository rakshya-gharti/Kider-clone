import PageHeader from "../Common/PageHeader";
import Clients from "./Clients";
import Facilities from "./Facilities";
import Testimonials from "./Testimonials";


export default function Dropdownfacilities() {
  return (
    <div>
        <PageHeader title="Facilities"/>
        <Facilities/>
        <Testimonials/>
        
    </div>
  )
}
