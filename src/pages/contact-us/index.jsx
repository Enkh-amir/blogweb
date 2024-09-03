import { FooterHome } from "@/components/footer/FooterHome";
import { Header } from "@/components/header/Header";
import { ContactUsPart } from "@/components/pages/ContactUs";

export default function ContactUs() {
  return (
    <div className="w-full flex flex-col items-center gap-[100px] ">
      <Header />
      <div className="flex justify-center items-center w-full">
        <ContactUsPart />
      </div>
      <FooterHome />
    </div>
  );
}
