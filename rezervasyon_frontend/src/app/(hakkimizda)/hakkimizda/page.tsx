import Header from "@/components/blog/Header";
import Kurulusumuz from "@/components/hakkimizda/kurulusumuz";
import Footer from "@/components/shared/Footer";

export default function HakkimizdaPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <Kurulusumuz />
            <Footer />
        </main>
    );
}