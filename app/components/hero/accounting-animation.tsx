import { useEffect, useState } from "react";

const entries = [
  { label: "Cash", value: 1000000, type: "credit" },
  { label: "Revenue", value: 800000, type: "credit" },
  { label: "Expenses", value: 200000, type: "debit" },
];

const AccountingSummation = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const total =
    entries
      .filter((e) => e.type === "credit")
      .reduce((sum, e) => sum + e.value, 0) -
    entries
      .filter((e) => e.type === "debit")
      .reduce((sum, e) => sum + e.value, 0);

  return (
    <div className="w-[350px] md:w-96 mx-auto px-4 py-12 font-mono text-white">
      <div className="text-center mb-2">
        <h2 className="text-xl font-clashdisplay font-semibold text-slate-400/90 tracking-wider">
          ACCRUAL ACCOUNTING
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6">
        <div className="space-y-3">
          {entries.map((entry, index) => (
            <div
              key={entry.label}
              className={`flex justify-between border-white/10 pb-1 transition-all duration-700 ease-out ${
                animate
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              } ${index === entries.length - 1 ? "border-0" : "border-b"}`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              <span>
                {entry.type === "debit" ? "-" : "+"} {entry.label}
              </span>
              <span>$ {entry.value.toLocaleString()}</span>
            </div>
          ))}

          {/* Total Row */}
          <div
            className={`flex justify-between mt-6 text-lg font-bold border-t border-white/20 pt-4 transition-all duration-700 ${
              animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${entries.length * 300 + 300}ms` }}
          >
            <span>= Total</span>
            <span>$ {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingSummation;
