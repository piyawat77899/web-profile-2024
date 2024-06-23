import React from "react";
import Card from "./common/Card";
import Badge from "./common/Badge";

type Props = {};

const Personality = (props: Props) => {
  return (
    <Card title="Personality">
      <div>
        <p className="text-lg">Adventurer (ISFP-A)</p>
        <p className="pb-2">
          Adventurers are flexible and charming, always ready to explore and experience something new.
        </p>
        <div className="flex gap-1">
          <Badge>Introverted</Badge>
          <Badge>Observant</Badge>
          <Badge>Prospecting</Badge>
          <Badge>Assertive</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Personality;
