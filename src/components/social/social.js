import React from 'react'
import './social.scss'
class Social extends React.Component {
    render() {
        const links = [{ name: 'github', link: 'https://mattbag.github.io/' },
        { name: 'linkedin', link: 'https://www.linkedin.com/in/matteobagni88/' },
        { name: 'twitter', link: 'https://mobile.twitter.com/mattbag00' },
        { name: 'codepen', link: 'https://www.linkedin.com/in/matteobagni88/' },]

        const aStyle = {
            fontFamily: 'Lobster',
            color: '#333',
            textShadow: `1px 1px #fff`,
            padding: `.5vmin`
        }

        return (
            <ul className="social" style={{ margin: 0 }}>
                {links.map(link=>{
                    return <li><a href={link.link} target="_blank" style={aStyle}>{link.name}</a></li>
                })}
            </ul>
        )
    }
}

export default Social
