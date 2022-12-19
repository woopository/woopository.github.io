import React from "react"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class ThemeToggle extends React.Component {
    render() {
        return (
            <ThemeToggler>
                {({ theme, toggleTheme }) => (
                    <label>
                        <input
                         type="checkbox"
                         onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                         checked={theme === 'dark'}
                        />{' '}
                        {theme === 'dark' ? '🌙' : '☀️'}
                    </label>
                )}
            </ThemeToggler>
        )
    }
}

export default ThemeToggle;