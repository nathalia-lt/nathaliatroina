

export default function LayoutGrid({ children, className = "" }) {
  return (
    <div className="grid grid-cols-12 gap-md">
        <div className="col-span-5"></div>
        <div className="col-span-7">{children}</div>
    </div>
  );
}