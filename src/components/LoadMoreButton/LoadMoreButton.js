import Button from "components/Button";

export default function LoadMoreButton({ onLoadMore }) {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load More
    </Button>
  );
}
