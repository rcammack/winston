type QuickFactProps = {
  label: string
  value: string
}

function QuickFact({ label, value }: QuickFactProps) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  )
}

export default QuickFact
