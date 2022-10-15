//
export default function QuizeFrom({ children, className, ...rest }) {
  return (
    <form className={className} {...rest}>
      {children}
    </form>
  );
}
