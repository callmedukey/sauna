import AdmNavbar from "@/components/AdmNavBar";
import MemberManagementTable from "@/components/MemberTable";
import NewReserveForm from "@/components/NewReserveForm";
import NewReserveTable from "@/components/NewReserveTable";
import PointEditForm from "@/components/PointEditForm";
import ReservationTable from "@/components/ReservationTable";



export default function Home() {
  return (
    <div className="mt-[50px]">
        <AdmNavbar/>
        <ReservationTable/>
        <NewReserveForm/>
        <NewReserveTable/>
        <MemberManagementTable/>
        <PointEditForm/>

      </div>
  );
}
