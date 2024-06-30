import React from "react";
import Card from "./common/Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <Card title="Portfolio" color="bg-blue-300">
      <div>
        <ul className="list-inside list-disc">
          <li>
            <a
              href="https://github.com/golang/go"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Go - Programming Language
            </a>
          </li>
          <li>
            <a
              href="https://github.com/wu-web-camp/web-profile-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              web-profile-2024 - Personal Website
            </a>
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default Portfolio;
