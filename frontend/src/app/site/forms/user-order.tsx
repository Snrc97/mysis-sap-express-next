import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const orderSchema = z.object({
  order_date: z.date().nullable(),
  status: z.enum(["PENDING", "ACCEPTED", "REJECTED"]).nullable(),
  bid_id: z.number().nullable(),
});

type OrderFormInputs = z.infer<typeof orderSchema>;

const UserOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormInputs>({
    resolver: zodResolver(orderSchema),
  });

  const onSubmit = async (data: OrderFormInputs) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <label>
          <span className="block text-sm font-medium text-gray-700">
            Order Date
          </span>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("order_date")}
          />
          {errors.order_date && (
            <p className="mt-2 text-sm text-red-600">
              {errors.order_date.message}
            </p>
          )}
        </label>

        <label>
          <span className="block text-sm font-medium text-gray-700">
            Status
          </span>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("status")}
          >
            <option value="">Select status</option>
            <option value="PENDING">Pending</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="REJECTED">Rejected</option>
          </select>
          {errors.status && (
            <p className="mt-2 text-sm text-red-600">
              {errors.status.message}
            </p>
          )}
        </label>

        <label>
          <span className="block text-sm font-medium text-gray-700">
            Bid ID
          </span>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            {...register("bid_id")}
          />
          {errors.bid_id && (
            <p className="mt-2 text-sm text-red-600">
              {errors.bid_id.message}
            </p>
          )}
        </label>

        <button
          type="submit"
          className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default UserOrder;
