import { Fragment } from 'react';

/*
  Turns plain text into paragraphs and lists.

    blank line          starts a new paragraph
    line break          kept as a line break inside the paragraph
    "- item" / "* item" bullet list
    "1. item"           numbered list

  `source` can be one string (template literal) or an array of strings;
  each array item starts a new paragraph.
*/
export function parseText(source) {
  const text = (Array.isArray(source) ? source.join('\n\n') : source ?? '').replace(/\r\n/g, '\n');
  const blocks = [];
  let current = null;

  const add = (type, line) => {
    if (current && current.type === type) current.lines.push(line);
    else {
      current = { type, lines: [line] };
      blocks.push(current);
    }
  };

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) {
      current = null; // blank line ends the current paragraph or list
      continue;
    }
    const bullet = line.match(/^[-*•]\s+(.*)$/);
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (bullet) add('ul', bullet[1]);
    else if (numbered) add('ol', numbered[1]);
    else add('p', line);
  }
  return blocks;
}

export default function RichText({ source }) {
  return parseText(source).map((block, i) => {
    if (block.type === 'ul' || block.type === 'ol') {
      const List = block.type;
      return (
        <List key={i}>
          {block.lines.map((line, j) => (
            <li key={j}>{line}</li>
          ))}
        </List>
      );
    }
    return (
      <p key={i}>
        {block.lines.map((line, j) => (
          <Fragment key={j}>
            {j > 0 && <br />}
            {line}
          </Fragment>
        ))}
      </p>
    );
  });
}
