"use client";

import { useEffect } from "react";

export default function SocialMediaEmbed() {
  useEffect(() => {
    // Load Twitter widget script dynamically
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="glass-strong rounded-2xl p-6 mt-8 overflow-hidden">
      <h3 className="text-xl font-bold text-white mb-4">Sosyal Medya</h3>
      <div className="bg-white rounded-xl overflow-hidden min-h-[400px]">
        <a
          className="twitter-timeline"
          data-height="400"
          data-theme="light"
          href="https://twitter.com/ekimdemirci?ref_src=twsrc%5Etfw"
        >
          ekimdemirci tarafından gönderilen Tweetler
        </a>
      </div>
    </div>
  );
}
