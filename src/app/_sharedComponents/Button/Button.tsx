import "./Button.css";
type ButtonProps = {
  text: string;
  icon?: string;
  className?: string;
};

export default function Button({ icon, text, className }: ButtonProps) {
  return (
    <button
      className={`flex action_button py-9.5 px-16.5 rounded-8 items-center ${className}`}
    >
      {icon && <img src={icon} className="mr-4"></img>}
      <span className="font-nunito font-bold text-white">{text}</span>
    </button>
  );
}
