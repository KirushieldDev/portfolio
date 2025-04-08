import React from "react";
import { Link } from "react-router";

const Tag = ({ skill, linkable = true }) => {
    const TagComponent = linkable ? Link : "span";
    const tagProps = linkable
        ? {
              to: `/${skill.id}`,
              className:
                  "px-2 py-1 text-xs font-semibold text-white rounded-full inline-block transition-transform hover:scale-105",
              style: { backgroundColor: skill.color },
          }
        : {
              className:
                  "px-2 py-1 text-xs font-semibold text-white rounded-full inline-block",
              style: { backgroundColor: skill.color },
          };

    return <TagComponent {...tagProps}>{skill.title}</TagComponent>;
};

export default Tag;
