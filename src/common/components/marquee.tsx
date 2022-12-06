/**
 * @deprecated why?
 */
export const Marquee = ({ children }: { children: React.ReactNode }) => {
  return (
    <marquee width="100%" direction="left">
      <span>{children}</span>
    </marquee>
  );
};
