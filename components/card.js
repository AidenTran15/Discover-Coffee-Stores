const Card = (props) => {
    return (
        <Link href={props.href}>
        <a>
            <h2>
                <Image src={props.imgUrl} width={260} height={160}/>
            </h2>
        </a>
        </Link>
    )
}

export default Card;