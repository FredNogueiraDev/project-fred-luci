interface MenuIconProps {
  className?: string;
}

export function MenuIcon({ className }: MenuIconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
    >
    <path
      d="M16 14H11M15 17H12M7 3V21M6 21H18C19.1046 21 20 20.1046 20 19V5C20 3.89543 19.1046 3 18 3H6C4.89543 3 4 3.89543 4 5V19C4 20.1046 4.89543 21 6 21ZM15.5 9C15.5 10.1046 14.6046 11 13.5 11C12.3954 11 11.5 10.1046 11.5 9C11.5 7.89543 12.3954 7 13.5 7C14.6046 7 15.5 7.89543 15.5 9Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"/>
    </svg>
  );
}
