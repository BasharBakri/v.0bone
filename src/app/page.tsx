import SideNav from "./ui/sidenav";

export default function Home() {
  return (
    <main className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full flex-none md:w-64 bg-red-300 border border-purple-500">
        <SideNav />
      </aside>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-red-500">hello</div>
    </main>
  );
}
