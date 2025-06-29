import { onBoardUser } from "@/actions/user";

type Props = {}

const page = async (props: Props) => {
  const user = await onBoardUser();
  return (
    <div>page</div>
  )
}

export default page