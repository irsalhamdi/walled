import Container from "../Container";
import Typography from "../Typography";

const UiDataEmpty = ({ message, title, style }) => (
  <Container data-testid={"empty-data-icon"} style={style}>
    <img src="" alt="image" />
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 5,
        flexDirection: "column",
      }}
    >
      <Typography type="title-md" color="#292929">{title}</Typography>
      <Typography type="body-md" color="#777777">{message}</Typography>
    </div>
  </Container>
);

export default UiDataEmpty;
