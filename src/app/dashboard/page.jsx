import ProtectedRoute from "@/components/ProtectedRoute";
import UploadPDFForm from "@/components/UploadPdfForm";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>
        <h1>Dashboard</h1>
        <UploadPDFForm />
      </div>
    </ProtectedRoute>
  );
};

export default Dashboard;