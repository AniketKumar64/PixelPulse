import { useEffect, useState } from "react";

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(interval);
          return 100;
        }
        return old + 1;
      });
    }, 20); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
        
      <div className="w-64 bg-gray-500 h-[.3vh] rounded-full overflow-hidden">

        <div
          className="h-full bg-white transition-all duration-100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p className="mt-3 text-white text-lg font-medium">
        {progress}%
      </p>
    </div>
  );
}
