import "@/assets/css/globals.css"

export const metadata = {
  title: "The Property Pulse",
  keywords: "property, real estate, investment",
  description: "Property Pulse - Find the perfect property to buy and rent in India",
}

const Root = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Root;
