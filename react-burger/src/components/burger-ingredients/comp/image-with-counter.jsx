export const ImageWithCounter = ({ imageUrl, counter }) => {
    return (
        <div style={{ position: "relative" }}>
            <img src={imageUrl} className="pl-4 pr-4 pb-1" alt="Изображение" />
            <div
                style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    fontWeight: "bold",
                }}
            >
                {counter}
            </div>
        </div>
    );
};