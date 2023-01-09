import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <section>
       <h3
          onClick={toggleIsOpen}
        >{title}</h3>

      {/* <h3
        onClick={toggleIsOpen}
        style={{
          cursor: "pointer",
        }}
      >
        {title}
      </h3>
      {isOpen && <section>{children}</section>} */}
    </section>
  );
};

export default Accordion;
