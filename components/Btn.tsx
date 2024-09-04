"use client";
import { Button } from "@/components/ui/button";

const Btn = ({ onClick, variant, value }: any) => {
  return (
    <Button onClick={onClick} variant={variant}>
      {value}
    </Button>
  );
};
export default Btn;
