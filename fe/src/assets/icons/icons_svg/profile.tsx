interface ProfileIconProps {
  className?: string;
}

export function ProfileIcon({ className }: ProfileIconProps) {
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
      d="M14.1 9.40002C15.3 10.6 15.3 12.5 14.1 13.6C12.9 14.7 11 14.8 9.90002 13.6C8.80002 12.4 8.70002 10.5 9.90002 9.40002C11.1 8.30002 12.9 8.20002 14.1 9.40002M5.90002 20C7.50002 18.5 9.60002 17.5 12 17.5C14.3 17.5 16.5 18.4 18.1 20M4 17C3.4 15.8 3 14.4 3 13C3 8 7 4 12 4C17 4 21 8 21 13C21 14.4 20.6 15.8 20 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"/>
    </svg>
  );
}
