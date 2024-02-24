import React from "react";
type props = {
  params: {
    leagueId: string;
  };
};
function page({ params: { leagueId } }: props) {
  return <div>{leagueId}</div>;
}

export default page;
