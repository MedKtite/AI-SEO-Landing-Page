import Image from "next/image";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return <section className="py-20">
    <div className="container">
      <h2 className="text-5xl text-center tracking-tight font-medium">Beyond Expectations. </h2>
      <p className="text-white/70 text-lg text-center mt-5 tracking-tight">Our revolutionary AI SEO tools have transformed our clients strategies.</p>
      {testimonials.map(testimonials => (
        <div key={testimonials.name} className="border border-white/15 p-6 rounded-xl bg-[linear-gradient(to_bottom_left,rgb(140,65,255,.3),black)]">
          <div className="text-lg tracking-tight">{testimonials.text}</div>
          <div className="flex items-center gap-3 mt-5">
            <div className="relative after:content-[''] after:absolute after:inset-0 after:bg-[rgb(140,69,244)] after:mix-blend-soft-light before:content-[''] before:absolute before:inset-0 before:border before:border-white/30 before:z-10 before:rounded-lg">
              <Image src={testimonials.avatarImg} alt={`Avatar for ${testimonials.name}`} className="h-11 w-11 rounded-lg grayscale border" />
            </div>
            <div>
              <div>{testimonials.name}</div>
              <div>{testimonials.title}</div>
            </div>
          </div>

        </div>
      ))}
    </div>
  </section>;
};
