import { useEffect } from "react";

const InlineFlodeskForm = () => {
  useEffect(() => {
    (function (w, d, t, h, s, n) {
      w.FlodeskObject = n;
      var fn = function () {
        (w[n].q = w[n].q || []).push(arguments);
      };
      w[n] = w[n] || fn;
      var f = d.getElementsByTagName(t)[0];
      var v = "?v=" + Math.floor(new Date().getTime() / (120 * 1000)) * 60;
      var sm = d.createElement(t);
      sm.async = true;
      sm.type = "module";
      sm.src = h + s + ".mjs" + v;
      f.parentNode.insertBefore(sm, f);
      var sn = d.createElement(t);
      sn.async = true;
      sn.noModule = true;
      sn.src = h + s + ".js" + v;
      f.parentNode.insertBefore(sn, f);
    })(
      window,
      document,
      "script",
      "https://assets.flodesk.com",
      "/universal",
      "fd",
    );

    window.fd("form", {
      formId: process.env.NEXT_PUBLIC_FLODESK_INLINE_FORM_ID, // Accessing the environment variable
      containerEl: "#fd-form-" + process.env.NEXT_PUBLIC_FLODESK_INLINE_FORM_ID, // Using the environment variable to set the container element
    });
  }, []);

  return (
    <div className="flex w-full flex-col items-center justify-center bg-white">
      <div className="z-10 -mb-4 space-y-2 px-6 pt-[30px] text-center sm:-mb-8">
        <p className="text-xl font-medium sm:text-2xl">
          Join our mailing list
        </p>
        <p className="text-sm sm:text-base">
          Track the newest architectural homes for sale
        </p>
      </div>
      <div
        id={`fd-form-${process.env.NEXT_PUBLIC_FLODESK_INLINE_FORM_ID}`}
      ></div>
    </div>
  );
};

export default InlineFlodeskForm;
