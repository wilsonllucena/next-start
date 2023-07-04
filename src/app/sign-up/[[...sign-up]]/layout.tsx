export const metadata = {
  title: 'Cadastro'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="h-screen flex justify-center items-center">
      {children}
    </div>
  )
}
