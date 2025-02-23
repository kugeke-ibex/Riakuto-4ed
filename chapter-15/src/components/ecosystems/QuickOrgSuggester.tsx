import type { FC } from "react";
import React from "react";
import { preload } from "swr";
import { getMembers, getOrganization } from "../../domain/github";
import { skimArgs } from "../../utils/fn";
import OrgSuggester from "components/organisms/OrgSuggester";
import type { OrgSuggesterProps } from "components/organisms/OrgSuggester";

type Props = {
  enablePrefetch: boolean
} & Omit<OrgSuggesterProps, "prefetch">;

const QuickOrgSuggester: FC<Props> = ({
    suggesList = [],
    correctCode = "",
    onSelect = () => undefined,
    enablePrefetch = false,
}) => {
    const prefetch = async (code: string) => {
      await Promise.all([
        preload([code, 'orgs'], skimArgs(getOrganization)),
        preload([code, 'member'], skimArgs(getMembers)),
      ]);
    }

    return (
        <OrgSuggester
          prefetch={enablePrefetch ? prefetch : undefined}
         {...{ suggesList, correctCode, onSelect }}
        />
    );
};

export default QuickOrgSuggester;
