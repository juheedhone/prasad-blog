import { Badge as BadgeComponent } from "./ui/badge";

interface Props {
  color: string;
  name: string;
}

const Badge = ({ color, name }: Props) => {
  return (
    <BadgeComponent className="text-black bg-[#FFC7C7] border-2 px-4 py-2 rounded-xl">
      {name}
    </BadgeComponent>
  );
};

export default Badge;
