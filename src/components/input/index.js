import { Input } from "@material-tailwind/react";
 
export const SInput = ({label})  => {
  return (
    <div className="w-72">
      <Input label={label} />
    </div>
  );
}