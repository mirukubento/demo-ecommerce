import { cn } from "@/lib/utils";

const ProductPrice = ({
  value,
  className,
}: {
  value: number;
  className?: string;
}) => {
  // Format the price with thousand separators and no decimal places
  const formattedPrice = new Intl.NumberFormat("id-ID").format(value);

  return (
    <p className={cn("text-1xl", className)}>
      <span>Rp. </span>
      {formattedPrice}
    </p>
  );
};

export default ProductPrice;
