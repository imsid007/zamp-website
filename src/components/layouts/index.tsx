import Footer from "./footer";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
  activeMenu?: string | undefined;
  type?: string | undefined;
}

export default function Layout({ children, activeMenu, type }: LayoutProps) {
  return (
    <div>
      <Header activeMenu={activeMenu} />
      {children}
      <Footer type={type} />
    </div>
  );
}
