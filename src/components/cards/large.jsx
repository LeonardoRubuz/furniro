function LargeCard({ title, imageUrl }) {
    return ( 
        <div className="large-card">
            <img src={imageUrl} alt="" />
            <h5>{title}</h5>
        </div>
     );
}

export default LargeCard;