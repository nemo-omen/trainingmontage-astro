
import { selectAll, select } from 'hast-util-select';

export default function insertFileName() {
  console.log("Running insertFilename...");
  return (tree) => {
    let fileName = null;
    const figNodes = selectAll('.code-figure', tree);

    for(let figNode of figNodes) {
      fileName = extractFileName(select('code', figNode));
      
        const captionElement = {
          type: 'element',
          tagName: 'figcaption',
          properties: {
            className: 'code-caption'
          },
          children: [
            { type: 'text', value: fileName },
          ]
        };

        figNode.children.unshift(captionElement);
    }
  }
}

function extractFileName(codeNode) {
  return codeNode.data.meta ? codeNode.data.meta : null;
}