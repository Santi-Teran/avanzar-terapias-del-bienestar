import ProtectedRoute from "@/components/ProtectedRoute";
import SideBar from "@/components/SideBar";
import UploadPDFForm from "@/components/UploadPdfForm";
import ProductsTable from "@/components/ProductsTable";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div className="flex flex-col-reverse md:flex-row bg-violet-100">
      <SideBar />
        <div className="mx-auto">
          <UploadPDFForm />
          <ProductsTable />
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;