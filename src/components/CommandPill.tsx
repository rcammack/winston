import type { SiteContent } from '../content-schema'

type Command = SiteContent['commands']['useful'][number]

type CommandPillProps = {
  command: Command
  isSelected: boolean
  onBlur: () => void
  onFocus: (command: Command) => void
  onSelect: (command: Command) => void
}

function CommandPill({
  command,
  isSelected,
  onBlur,
  onFocus,
  onSelect,
}: CommandPillProps) {
  return (
    <button
      type="button"
      aria-pressed={isSelected}
      onBlur={onBlur}
      onClick={() => onSelect(command)}
      onFocus={() => onFocus(command)}
      onMouseEnter={() => onFocus(command)}
      onMouseLeave={onBlur}
    >
      {command.name}
    </button>
  )
}

export default CommandPill
