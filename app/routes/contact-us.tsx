import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import ContactUsForm from "~/components/contact-form";
import Navbar from "~/components/navbar";

const details = [
  {
    title: "Contact",
    icon: MdPhone,
    numbers: ["0721 376 993", "0733 796 154", "0705 863 394"],
  },
  {
    title: "Email us",
    icon: MdEmail,
    numbers: ["omemcompany@gmail.com", "aimmaxcom@gmail.com"],
  },
  {
    title: "Address",
    icon: MdLocationOn,
    numbers: ["Imenti House, Tom Mboya Street", "Room B12", "Nairobi Kenya"],
  },
];

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex items-center flex-col">
          <h1>Leave us a message</h1>
          <ContactUsForm />
        </div>
        <div>{/* <ContactUs /> */}</div>
      </main>
    </>
  );
}
