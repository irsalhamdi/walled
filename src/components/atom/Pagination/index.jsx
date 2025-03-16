import {
    Pagination,
    PaginationItem,
    Stack,
    useMediaQuery,
} from "@mui/material";

const getPaginationItemStyles = (type, selected) => {
  const baseStyles = {
    border: "1px solid #B5B6B6",
    color: type === "next" ? "#0061FF" : "#B5B6B6",
    minWidth: "auto",
    padding: "6px 12px",
    margin: 0,
    borderRadius: 0,
    fontFamily: "WalledSemiBold",
    "&:focus": { outline: "1px solid #0061FF" },
    "&:focus-visible": { outline: "1px solid #0061FF" },
     boxShadow: "0px 0px 5px rgba(91, 91, 91, 0.1)"
  };

  if (type === "first" || type === "last") {
    return {
      ...baseStyles,
      border: `1px solid ${type === "last" ? "#F87304" : "#B5B6B6"}`,
      color: type === "last" ? "#F87304" : "#B5B6B6",
    };
  }

  if (type === "previous") {
    return {
      ...baseStyles,
      padding: "6px 25px",
      borderTopLeftRadius: "5px",
      borderBottomLeftRadius: "5px",
    };
  }

  if (type === "next") {
    return {
      ...baseStyles,
      padding: "6px 25px",
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    };
  }

  if (type === "page") {
    return {
      ...baseStyles,
      color: selected ? "white !important" : "#0061FF !important",
      backgroundColor: selected ? "#0061FF !important" : "transparent",
    };
  }

  return baseStyles;
};

const renderPaginationItem = (item) => {
  const styles = getPaginationItemStyles(item.type, item.selected);

  if (item.type === "previous") {
    return <PaginationItem {...item} shape="rounded" sx={styles} slots={{ previous: () => <p>Prev</p> }} />;
  }

  if (item.type === "next") {
    return <PaginationItem {...item} shape="rounded" sx={styles} slots={{ next: () => <p>Next</p> }} />;
  }

  return <PaginationItem {...item} shape="rounded" sx={styles} />;
};

const PaginationExample = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Stack spacing={2}>
      <Pagination
        count={3}
        page={2}
        variant="outlined"
        shape="rounded"
        color="primary"
        size="medium"
        siblingCount={isSmallScreen ? 0 : 1}
        boundaryCount={isSmallScreen ? 0 : 1}
        renderItem={renderPaginationItem}
      />
    </Stack>
  );
};

export default PaginationExample;
