import type { SiteContent } from '../content-schema'
import CommandPill from './CommandPill'

type Command = SiteContent['commands']['useful'][number]

type CommandListProps = {
  ariaLabel: string
  commands: Command[]
  onCommandBlur: () => void
  onCommandFocus: (command: Command) => void
  onCommandSelect: (command: Command) => void
  selectedCommand: Command
}

function CommandList({
  ariaLabel,
  commands,
  onCommandBlur,
  onCommandFocus,
  onCommandSelect,
  selectedCommand,
}: CommandListProps) {
  return (
    <div className="scrolling-skill-list">
      <div className="skill-list" aria-label={ariaLabel}>
        {commands.map((command) => (
          <CommandPill
            command={command}
            isSelected={selectedCommand.name === command.name}
            key={command.name}
            onBlur={onCommandBlur}
            onFocus={onCommandFocus}
            onSelect={onCommandSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default CommandList
