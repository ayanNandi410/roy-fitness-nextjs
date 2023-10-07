import AddReview from "../components/AddReviewSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <AddReview />
      <Footer />
    </main>
  );
}