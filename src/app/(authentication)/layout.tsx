export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1>auth layout</h1>
      <div>{children}</div>;
    </>
  );
}
