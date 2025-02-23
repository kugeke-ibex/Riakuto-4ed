import type { FC } from "react";
import useSWR from "swr";
import { getOrganization } from "domain/github"
import { skinArgs } from "utils/fn";
import OrgInfoBox from "components/organisms/OrgInfoBox";

type Props = {
    orgCode: string;
};

const OrgInfo: FC<Props> = ({ orgCode }) => {
    const { data: org = null } = useSWR(
      [orgCode, 'org'],
      skinArgs(getOrganization),
    );

    return <OrgInfoBox org={org} />
};

export default OrgInfo;
