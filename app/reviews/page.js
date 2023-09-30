import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReviewList from "../components/ReviewListSection";
import { Suspense } from 'react'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container flex justify-center mt-24 mx-auto px-12 py-4">
        <h1 className="text-4xl font-semibold text-white">See what others have to say...</h1>
      </div>

      <section className="mx-20 rounded-md drop-shadow-2xl my-5 h-screen bg-slate-600">
          <ReviewList />
      </section>
      
      <Footer />
    </main>
  );
}
