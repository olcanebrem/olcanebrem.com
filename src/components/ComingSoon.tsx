import { Button } from "@/components/ui/shadcn/button";
import { Input } from "@/components/ui/shadcn/input";


export function ComingSoon1() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="grid h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('/image/coming-soon-1.jpg')]">
      <div className="container mx-auto flex flex-col justify-center h-full px-8 text-center">
        <div className="my-auto text-center">
          <h2
            className="lg:!text-4xl !text-3xl"
          >
            Get Ready for Something Amazing!
          </h2>
          <p
            className="mb-10 mt-4 mx-auto text-gray-400 w-full lg:max-w-3xl"
          >
            We&apos;re excited to introduce our latest innovation that will
            change the way you develop. Stay tuned as we put the finishing
            touches on this game-changing product.
          </p>
          <p
            className="font-bold text-gray-400 mb-6"
          >
            Sign up now to be the first to know when we launch
          </p>
          <div className="flex flex-col md:flex-row gap-4 items-center max-w-md mx-auto">
            <Input type="email" placeholder="Your Email" className="w-full" />
            <Button className="w-full md:max-w-fit">
              notify me
            </Button>
          </div>
        </div>
        <p
          className="mb-20 font-medium !text-gray-500 self-center"
        >
          All rights reserved. Copyright &copy; {currentYear} Material Tailwind
        </p>
      </div>
    </section>
  );
}

export default ComingSoon1;