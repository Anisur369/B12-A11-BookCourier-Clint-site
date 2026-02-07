import { useQuery } from "@tanstack/react-query";
// import { useAuth } from "../../hooks/useAuth.jsx";
import useAxiosSecure from "../../hooks/useAxiosSecure.jsx";
import { useParams } from "react-router";

function Payment() {
  const { parcelId } = useParams();
  const axiosSecure = useAxiosSecure();
  
  const { data: parcel, isLoading, isError } = useQuery({
    queryKey: ["myParcels", parcelId],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
  if(isLoading) {
    return <div>Loading...</div>;
  }

  const handlePayment = async() => {
    // Implement payment logic here, e.g., redirect to Stripe checkout
    const paymentInfo = {
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      cost: parcel.cost,
    };
    try {
      const res = await axiosSecure.post("/create-checkout-session", paymentInfo);
      console.log(res.data);
      const { url } = res.data;
      window.location.href = url;
    } catch (error) {
      console.error("Payment initiation failed:", error);
    }
  }

  return (
    <div>
      <h2>Please Pay ${parcel.cost} for : {parcel.name}</h2>
      <button onClick={handlePayment} className="btn btn-primary text-black">pay</button>
    </div>
  );
}

export default Payment;
