import { useNavigate } from "@tanstack/react-router";
import emojiRegexp from "emoji-regex";
import React, { type MouseEvent, useMemo } from "react";
import urlRegexp from "url-regex";
import Emoji from "./Emoji";

const urlRegex = urlRegexp();
const emojiRegex = emojiRegexp();
const usernameRegex = new RegExp(
  "(?<!\\S)(?:@)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9_.]{1,16}(?<![_.])",
  "g",
);

type ParseableId = keyof typeof parseables;
const parseables = {
  url: {
    regex: urlRegex,
    component: ({ text }: { text: string }) => {
      const onClick = (ev: MouseEvent) => {
        ev.stopPropagation();
      };

      return (
        <a href={text} target="_blank" rel="noreferrer" onClick={onClick}>
          {text}
        </a>
      );
    },
  },
  emoji: {
    regex: emojiRegex,
    component: ({
      text,
      emojiSize = 20,
    }: {
      text: string;
      emojiSize?: number;
    }) => <Emoji emoji={text} size={emojiSize} />,
  },
  username: {
    regex: usernameRegex,
    component: ({ text }: { text: string }) => {
      const navigate = useNavigate();
      const onClick = (ev: MouseEvent) => {
        ev.preventDefault();
        ev.stopPropagation();
        navigate(`/${text}`);
      };

      return (
        <a href={text} onClick={onClick}>
          {text}
        </a>
      );
    },
  },
};

interface Props {
  text: string;
  ids?: Array<ParseableId>;
}

function EnhancedText({ text, ids }: Props) {
  const parseableIds = useMemo(() => {
    return ids?.filter((id) => parseables[id]) || [];
  }, [ids]);

  const elements = useMemo(() => {
    const matches = parseableIds.flatMap((id) => {
      return Array.from(text.matchAll(parseables[id].regex), (match) => ({
        index: match.index || 0,
        text: match[0],
        id,
      }));
    });

    const sortedMatches = matches.sort((a, b) => a.index - b.index);

    let currentIndex = 0;
    let key = 0;

    const out = sortedMatches.flatMap((match) => {
      const diff = match.index - currentIndex;
      const i = currentIndex;
      currentIndex += diff + match.text.length;

      const Component = parseables[match.id].component;

      return [
        diff > 0 && (
          <React.Fragment key={key++}>
            {text.substring(i, i + diff)}
          </React.Fragment>
        ),
        <Component key={key++} text={match.text} />,
      ];
    });

    if (currentIndex < text.length) {
      out.push(
        <React.Fragment key={key++}>
          {text.substring(currentIndex)}
        </React.Fragment>,
      );
    }

    return out;
  }, [text, ids]);

  return <>{elements}</>;
}

export default EnhancedText;
