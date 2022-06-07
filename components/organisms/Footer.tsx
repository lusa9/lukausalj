import Typography from "components/atoms/Typography";

export const Footer = () => (
  <footer className="flex flex-col items-center px-14 pt-6 pb-6">
    <Typography variant="xs">
      <a
        className="hover:underline decoration-pink-400 decoration-2 underline-offset-4"
        href="mailto:luka.usalj@gmail.com"
        draggable={false}
      >
        luka.usalj@gmail.com
      </a>
    </Typography>
  </footer>
);
