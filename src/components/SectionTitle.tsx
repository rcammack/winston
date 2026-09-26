type SectionTitleProps = {
  headingId?: string
  label: string
  title: string
}

function SectionTitle({ headingId, label, title }: SectionTitleProps) {
  return (
    <>
      <p className="eyebrow">{label}</p>
      <h2 id={headingId}>{title}</h2>
    </>
  )
}

export default SectionTitle
