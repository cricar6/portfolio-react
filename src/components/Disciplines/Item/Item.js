function Item( { title, text }) {
    return (
        <section className="disciplines__item">
            <h4 className="disciplines__item-title">{title}</h4>
            <p className="disciplines__item-text">{text}</p>
        </section>
    )
}

export default Item
