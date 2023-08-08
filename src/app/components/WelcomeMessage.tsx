export type WelcomeMessageProps = { message: string };

export default function WelcomeMessage({ message }: WelcomeMessageProps) {
  return (
    <div className="welcome_message">
      <h1 className="text-start text-white text-capitalize fst-normal lh-1 ">
        {message}
      </h1>
    </div>
  );
}
