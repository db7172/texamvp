import { useParams } from "react-router";
import Container from "../../../../components/common/container/Container";

const RetreatForm = () => {
  const { retreatType } = useParams<{ retreatType: "workation" | "retreat" }>();
  return <Container>{retreatType}</Container>;
};

export default RetreatForm;
