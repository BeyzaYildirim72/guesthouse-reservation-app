import Header from "@/components/blog/Header";
import Iletisim from "@/components/hakkimizda/iletisim";
import Footer from "@/components/shared/Footer";

export default function IletisimPage() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Header />
            <Iletisim />
            <Footer />
        </main>
    );
}