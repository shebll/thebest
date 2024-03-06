"use client";
export default function error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 mg:p-10 flex flex-col gap-10 items-center justify-center h-full w-full ">
      <p className="text-[26px] font-semibold ">حدث خطأ خلال العمليه</p>
      <button onClick={reset} className="btn sm !bg-red-500 text-white">
        <p className="font-semibold ">قم باعاده المحاوله</p>
      </button>
    </div>
  );
}
