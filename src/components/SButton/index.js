import { Button } from "@material-tailwind/react";
 
export const SButton = ({children, action, className})  => {
  return <Button className={className} onClick={action}>{children}</Button>;
}