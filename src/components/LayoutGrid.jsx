// responsivo 0 pra 12 md 5 para 7

export default function LayoutGrid({ children, className = "" }) {
  return (
    <div className="grid grid-cols-12 gap-md">
        <div className="col-span-0 md:col-span-5"></div>
        <div className="col-span-12 md:col-span-7">{children}</div>
    </div>
  );
}