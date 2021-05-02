import './StatusScrollBar.scss'

const StatusScrollBar = ({projects}) => {
    return (

        <article className="status-scrollbar">
            {projects.map((item) => (
                <div className="status-scrollbar__item">
                    <p>{item.name}</p>
                </div>
            ))}
            
        </article>
    )
}

export default StatusScrollBar
