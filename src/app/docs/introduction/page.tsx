import React from "react";

function Docs() {
  return (
    <div className="flex flex-col space-y-4 justify-center">
      <h1 className="text-lg md:text-2xl font-semibold">Introduction</h1>
      <p className="w-full md:max-w-[400px] text-xs md:text-sm text-muted-foreground">
        Beautifully designed components that you can copy and paste into your
        apps. Accessible. Customizable.
      </p>
      <p className="w-full md:max-w-[500px] text-sm md:text-base">
        Welcome to my customizable and responsive component library, designed
        for React developers looking to elevate their UI effortlessly! This
        library includes components styled with Tailwind CSS, ShadCN, and
        Motion, providing you with versatile elements for any project. Each
        component is ensuring smooth, interactive, and visually appealing
        experiences across all devices.
      </p>
      <h1 className="text-lg md:text-2xl font-semibold">Why This Library?</h1>
      <div className="flex flex-col space-y-2">
        <p className="text-sm md:text-base">
          <strong>Tailwind CSS</strong> components for fast, flexible styling
          that integrates seamlessly with your design.
        </p>
        <p className="text-sm md:text-base">
          <strong>ShadCN</strong> elements for enhanced accessibility and a
          polished look and feel.
        </p>
        <p className="text-sm md:text-base">
          <strong>Motion</strong> animations to add life and responsiveness to
          your UI with minimal setup.
        </p>
      </div>
    </div>
  );
}

export default Docs;
