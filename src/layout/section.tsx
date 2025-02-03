const Section = ({children, className}: {children: JSX.Element, className: string}) => {
    return (
      <section className={`w-full ${className}`}>
        <div className="w-full max-w-[960px] mx-auto">{children}</div>
      </section>
    );
}

export default Section;