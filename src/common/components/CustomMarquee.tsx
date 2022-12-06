export const CustomMarquee = () => {
  return (
    <div>
      <style jsx>{`
        .marquee {
          width: 450px;
          line-height: 50px;
          background-color: red;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .marquee p {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 15s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-100%, 0);
          }
        }
      `}</style>
    </div>
  );
};
