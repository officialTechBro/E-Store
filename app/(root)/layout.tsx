import Container from "@/components/global/container";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Navbar />
        <Container className='py-20'>
            {children}
        </Container>
    </>
  );
}