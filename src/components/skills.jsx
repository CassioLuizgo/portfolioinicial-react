import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function Skills () {
    return (
        <div className="skills">
            <div className="skills-icons">
                <FontAwesomeIcon icon={['fab', 'html5']} size="3x" title="HTML5" />
                <FontAwesomeIcon icon={['fab', 'css3-alt']} size="3x" title="CSS3" />
                <FontAwesomeIcon icon={['fab', 'js']} size="3x" title="JavaScript" />
                <FontAwesomeIcon icon={['fab', 'react']} size="3x" title="React" />
                <FontAwesomeIcon icon={['fab', 'python']} size="3x" title="Python" />
            </div>
      </div>
    )
}