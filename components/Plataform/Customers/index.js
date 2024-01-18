import { useRouter } from "next/router";
import { Text } from "@/styles/Common";

const Customers = ({ isMobile, isTablet }) => {
  const router = useRouter();

  return (
    <div>
      <Text>Clientes</Text>
    </div>
  );
};

export default Customers;
