export default function QuizeBtn({ className, disabled, text, ...rest }) {
  return (
    <button disabled={disabled} className={className} {...rest}>
      {text}
    </button>
  );
}
