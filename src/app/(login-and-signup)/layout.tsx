import Footer from '@/components/Footer'

export default function LoginAndSignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
