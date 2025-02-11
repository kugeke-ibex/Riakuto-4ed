import { useEffect, useState } from "react";
import type { FC } from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { getMembers } from "domain/github";
import type { User } from "domain/github";
import UseList from "components/organism/UserList";

type Props = {
  orgCode: string;
}

const MemberList: FC<Props> = ({ orgCode }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);

      try {
        const usersData = await getMembers(orgCode);;
        setUsers(usersData);
      } catch (err) {
        throw new Error(`organization '${orgCode}' not exists`);
      } finally {
        setIsLoading(false);
      }
    };

    // 返ってくるPromiseをあえて無視するためにvoid式を利用
    void load();
  }, [orgCode]);

  return isLoading ? (
    <Flex my={14} h="20rem" justify="center" align="center">
      <Spinner size="xl" color="teal"/>
    </Flex>
  ) : (
    <UseList users={users}/>
  );
};

export default MemberList;
