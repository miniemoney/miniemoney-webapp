const Section = ({id, children, className}: {children: React.ReactNode, className: string, id?: string}) => {
    return (
      <section id={id} className={`w-full ${className}`}>
        <div className="w-full max-w-[960px] mx-auto">{children}</div>
      </section>
    );
}

export default Section;