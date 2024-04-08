import "./Button.css";
type ButtonProps = {
  text: string;
  icon?: string;
};
export default function Button({
  icon = "/assets/add_icon.svg",
  text,
}: ButtonProps) {
  return (
    <button className="flex action_button py-9.5 px-16.5 rounded-lg items-center">
      <img src={icon} className="mr-4"></img>{" "}
      <span className="font-nunito font-bold text-sm text-white">{text}</span>
    </button>
  );
}
