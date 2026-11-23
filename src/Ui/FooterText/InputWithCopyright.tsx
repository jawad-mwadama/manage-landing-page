export default function InputWithCopyright() {
  return (
    <div className="flex flex-col gap-[8vw]">
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Updates in your box..."
          className="rounded-full bg-white p-3 text-slate-500"
        />
        <button className="hover cursor-pointer rounded-full bg-orange-400 px-5 py-3 text-white duration-150 ease-in-out hover:bg-white hover:text-orange-400">
          Go
        </button>
      </div>

      <span className="flex justify-center gap-4">
        <p>
          <small className="text-slate-500">
            &copy; Copyright 2027 All Rights Reserved
          </small>
        </p>
      </span>
    </div>
  );
}
