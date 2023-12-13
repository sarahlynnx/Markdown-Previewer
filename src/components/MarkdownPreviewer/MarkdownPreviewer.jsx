import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Markdown from 'react-markdown';
import './styles.css'

const initialMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const MarkdownPreviewer = () => {
    const [markdownText, setMarkdownText] = useState(initialMarkdown);

  return (
    <Container>
        <Row>
            <Col className='editor'>
                    <div className='toolbar'>
                        <h2>Editor</h2>
                    </div>
                    <textarea
                        id='textarea'
                        value={markdownText}
                        onChange={(e) => setMarkdownText(e.target.value)}
                        placeholder='Enter markdown text here...'
                        className='form-control'
                    />
            </Col>
        </Row>
        <Row>
            <Col className="previewer">
                    <div className='toolbar'>
                        <h2>Previewer</h2>
                    </div>
                    <Markdown className='markdown-preview' children={markdownText} />
            </Col>
        </Row>
    </Container>
  );
}

export default MarkdownPreviewer;