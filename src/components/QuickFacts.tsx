import content from '../content.yaml'
import QuickFact from './QuickFact'

function getAge(birthDate: Date) {
  const today = new Date()
  let years = today.getFullYear() - birthDate.getFullYear()
  let months = today.getMonth() - birthDate.getMonth()

  if (today.getDate() < birthDate.getDate()) {
    months -= 1
  }

  if (months < 0) {
    years -= 1
    months += 12
  }

  const yearLabel = `${years} ${years === 1 ? 'year' : 'years'}`
  const monthLabel = `${months} ${months === 1 ? 'month' : 'months'}`

  if (years === 0) return monthLabel
  if (months === 0) return yearLabel
  return `${yearLabel}, ${monthLabel}`
}

const quickFacts = content.profile.map((fact) => {
  if (!fact.calculate_age) return [fact.title, fact.value]

  const [year, month, day] = fact.value.split('-').map(Number)
  return [fact.title, getAge(new Date(year, month - 1, day))]
})

function QuickFacts() {
  return (
    <section className="quick-facts" aria-label="Winston at a glance">
      {quickFacts.map(([label, value]) => (
        <QuickFact key={label} label={label} value={value} />
      ))}
    </section>
  )
}

export default QuickFacts
