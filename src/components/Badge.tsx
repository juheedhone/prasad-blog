import { Badge as BadgeComponent } from "./ui/badge";

interface Props {
  color: string;
  name: string;
}

const Badge = ({ color, name }: Props) => {
  return (
    <BadgeComponent
      className={
        "text-black border-2 px-4 py-2 rounded-xl hover:cursor-pointer hover:brightness-90 hover:scale-110 transition-all"
      }
      style={{ backgroundColor: color }}
    >
      {name}
    </BadgeComponent>
  );
};

export default Badge;
