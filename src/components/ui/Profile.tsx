import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function UserProfile1() {
  return (
    <section className="container mx-auto px-8 py-10">
      <Card className="border border-gray-300 rounded-2xl overflow-hidden">
        <div className="h-60 rounded-t-lg overflow-hidden">
          <img
            src="https://picsum.photos/1200/100"
            alt="dark"
            className="w-full h-full object-center"
          />
        </div>
        <div className="p-6">
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar 
                src="https://picsum.photos/1200/210" 
                  alt="avatar" 
                className="h-12 w-12 rounded-lg"
                />
              <div>
                <h3 className="text-lg font-semibold">
                  Olcan Ebrem
                </h3>
                <p className="text-sm text-gray-600">
                  olcanebrem@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2">
                <i className="fa fa-github text-base" />
                Github
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <i className="fa-brands fa-twitter" />
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <i className="fa-brands fa-medium" />
                Medium
              </Button>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-6">
            Passionate UI/UX designer focused on creating intuitive and engaging
            digital experiences. <br /> Driven by design thinking, creativity,
            and a love for problem-solving.
          </p>
        </div>
      </Card>
    </section>
  );
}

export default UserProfile1;